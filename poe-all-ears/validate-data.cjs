/* Run: node poe-all-ears/validate-data.cjs (from repository root). */
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const dir=__dirname,ctx={window:{}};let errors=[];
function load(name){vm.runInNewContext(fs.readFileSync(path.join(dir,name),'utf8'),ctx,{filename:name});}
for(const name of ['data.js','patches.js','route-act1.js','guide-act1.js'])load(name);
const d=ctx.window.ALL_EARS_DATA,route=ctx.window.ALL_EARS_ROUTE_ACT1,patches=ctx.window.POE_PATCH_PROFILES,guide=ctx.window.ALL_EARS_GUIDE;
function assert(cond,msg){if(!cond)errors.push(msg)}
const expected=[41,69,71,72,44,44,45,30,36,32];
assert(d.items.length===484,'Expected 484 dialogue records');
const ids=d.items.map(x=>x.id),idset=new Set(ids);
assert(idset.size===ids.length,'Duplicate dialogue ID');
for(let a=1;a<=10;a++)assert(d.items.filter(x=>x.act===a).length===expected[a-1],'Act '+a+' count mismatch');
assert(route.records.length===41,'Act 1 route must contain 41 rows');
const act1=new Set(d.items.filter(x=>x.act===1).map(x=>x.id));
const routeIds=route.records.map(x=>x.id);
assert(new Set(routeIds).size===41,'Duplicate route ID');
assert(routeIds.every(x=>act1.has(x)),'Route references missing/non-Act1 ID');
assert([...act1].every(x=>routeIds.includes(x)),'Act 1 item missing from route');
assert(route.records.every((x,i)=>x.wikiRow===i+1),'Wiki rows not sequential');
assert(route.records.every(x=>x.review==='wiki-ordered-patch-unverified'),'Route mislabelled as verified');
assert(Object.keys(guide.entries).length===41,'Guide entries must cover 41 Act 1 IDs');
assert(Object.entries(guide.entries).every(([id,x])=>act1.has(Number(id))&&x.review_status==='draft-unverified'),'Guide has missing ID or unapproved verification status');
assert(patches.profiles.some(p=>p.id==='current'&&p.dialogues===null&&p.status==='unverified'),'Current patch must remain unsupported');
assert(route.records.every(x=>x.source&&x.source.startsWith('https://')),'Missing source link');
const warnings=route.records.filter(x=>x.before);
console.log(JSON.stringify({items:d.items.length,actCounts:expected,routeRows:route.records.length,warningRows:warnings.length,patches:patches.profiles.map(p=>({id:p.id,status:p.status})),errors},null,2));
if(errors.length)process.exitCode=1;
