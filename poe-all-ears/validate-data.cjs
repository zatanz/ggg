/* Run: node poe-all-ears/validate-data.cjs (from repository root). */
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const dir=__dirname,ctx={window:{}};let errors=[];
function load(name){vm.runInNewContext(fs.readFileSync(path.join(dir,name),'utf8'),ctx,{filename:name});}
for(const name of ['data.js','patches.js','route-act1.js','route-act2.js','route-act3.js','route-act4.js','route-act5.js','route-act6.js','route-act7.js','route-act8.js','route-act9.js','route-act10.js','guide-act1.js','act2-advisory.js','act6-advisory.js','act9-advisory.js','act10-advisory.js'])load(name);
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
assert(patches.profiles.some(p=>p.id==='3.29'&&p.dialogues===null&&p.status==='unverified'),'3.29 must remain unsupported');
assert(patches.profiles.some(p=>p.id==='3.30'&&p.dialogues===null&&p.status==='announced-unverified'),'3.30 must remain unsupported until validated');
assert(patches.profiles.every(p=>p.dialogues===null||p.id==='legacy-3.9'),'Unsupported patch cannot load legacy dialogues');
assert(route.records.every(x=>x.source&&x.source.startsWith('https://')),'Missing source link');
const a2=ctx.window.ALL_EARS_ACT2_ADVISORY;
assert(a2.schema===2&&a2.patchCertified===false,'Act 2 model must remain patch-unverified');
assert(a2.branchRows.length===3,'Act 2 must model 3 Eramir wiki rows');
assert(a2.branchRows.every((x,i)=>x.wikiRow===101+i),'Act 2 Eramir wiki row numbering incorrect');
assert(a2.branchRows[0].variants.length===3&&a2.branchRows[1].variants.length===3&&a2.branchRows[2].variants.length===1,'Act 2 conditional variant coverage incomplete');
assert(a2.dependencies.length===3,'Act 2 quest-state dependencies missing');
const act2Inventory=JSON.parse(fs.readFileSync(path.join(dir,'act2-inventory.json'),'utf8'));
const act2Ids=d.items.filter(x=>x.act===2).map(x=>x.id);
assert(act2Inventory.records.length===69,'Act 2 inventory must cover all 69 items');
assert(new Set(act2Inventory.records.map(x=>x.id)).size===69,'Duplicate Act 2 inventory ID');
assert(act2Inventory.records.every((x,i)=>x.id===act2Ids[i]),'Act 2 inventory order/IDs do not match legacy data');
const act2Route=ctx.window.ALL_EARS_ROUTE_ACT2;
assert(act2Route.records.length===69,'Act 2 wiki route must have 69 rows');
assert(act2Route.records.every((x,i)=>x.wikiRow===42+i),'Act 2 wiki row numbering must be 42–110');
assert(new Set(act2Route.records.map(x=>x.id)).size===69,'Act 2 wiki route contains duplicate ID');
assert(act2Route.records.every(x=>act2Ids.includes(x.id)),'Act 2 wiki route ID absent from legacy data');
assert(act2Route.records.every(x=>x.review==='wiki-row-matched-patch-unverified'),'Act 2 route claims unapproved review');
assert(act2Route.routeSafe===false,'Act 2 wiki ordering is not a certified safe route');
const byAct2Id=new Map(act2Route.records.map(x=>[x.id,x]));
assert(act2Inventory.records.every(x=>byAct2Id.get(x.id)?.wikiRow===x.wikiRow),'Act 2 inventory / route wiki mapping drift');
assert(act2Inventory.records.every(x=>x.patchEvidence===null&&x.reviewStatus==='wiki-row-matched-patch-unverified'),'Act 2 inventory claims unsupported patch verification');
assert(act2Route.records.find(x=>x.wikiRow===101)?.id===89,'Act 2 bandit first-kill mapping mismatch');
assert(act2Route.records.find(x=>x.wikiRow===102)?.id===101,'Act 2 bandit survivor mapping mismatch');
assert(act2Route.records.find(x=>x.wikiRow===103)?.id===103,'Act 2 bandit completion mapping mismatch');
assert(act2Inventory.routeSafe===false&&act2Inventory.patchCertified===false,'Act 2 inventory cannot claim safe route or patch certification');
const act3Inventory=JSON.parse(fs.readFileSync(path.join(dir,'act3-inventory.json'),'utf8'));
const act3Items=d.items.filter(x=>x.act===3);
assert(act3Inventory.records.length===71,'Act 3 inventory must cover 71 dialogues');
assert(new Set(act3Inventory.records.map(x=>x.id)).size===71,'Act 3 inventory contains duplicate IDs');
assert(act3Inventory.records.every((x,i)=>x.id===act3Items[i].id),'Act 3 inventory ID/order drift');
assert(act3Inventory.records.every((x,i)=>x.npc===act3Items[i].npc&&x.topic===act3Items[i].dialog&&x.legacyNote===act3Items[i].note),'Act 3 inventory content drift');
const act3Route=ctx.window.ALL_EARS_ROUTE_ACT3;
assert(act3Route.records.length===71,'Act 3 route must have 71 rows');
assert(act3Route.records.every((x,i)=>x.wikiRow===111+i),'Act 3 wiki rows must be 111–181');
assert(new Set(act3Route.records.map(x=>x.id)).size===71,'Act 3 wiki route duplicate IDs');
assert(act3Route.records.every(x=>act3Items.some(y=>y.id===x.id&&y.npc===x.npc&&y.dialog===x.dialog)),'Act 3 wiki route source ID mismatch');
assert(act3Route.routeSafe===false&&act3Route.patch==='unverified','Act 3 wiki ordering is not a certified safe route');
const byAct3Id=new Map(act3Route.records.map(x=>[x.id,x]));
assert(act3Inventory.records.every(x=>x.wikiRow===byAct3Id.get(x.id)?.wikiRow&&x.patchEvidence===null&&x.reviewStatus==='wiki-row-matched-patch-unverified'),'Act 3 inventory/wiki route mapping drift or unsupported patch claim');
assert(act3Route.records.find(x=>x.wikiRow===115)?.id===118,'Act 3 Tolman bracelet Hargan mapping mismatch');
assert(act3Route.records.find(x=>x.wikiRow===143)?.id===148,'Act 3 Dialla introduction mapping mismatch');
assert(act3Route.records.find(x=>x.wikiRow===153)?.id===142,'Act 3 Fairgraves introduction mapping mismatch');
assert(act3Route.records.find(x=>x.wikiRow===164)?.id===161,'Act 3 Piety missable mapping mismatch');
assert(act3Route.notes.some(x=>x.includes('Clarissa')),'Act 3 critical Clarissa warning missing');
assert(act3Inventory.patchCertified===false&&act3Inventory.routeSafe===false,'Act 3 inventory must not claim a safe certified route');
assert(act3Inventory.records.filter(x=>x.riskCandidate).length===21,'Act 3 candidate risk inventory drift');
const act3Risks=JSON.parse(fs.readFileSync(path.join(dir,'act3-risk-ledger.json'),'utf8'));
const sourceRisks=act3Items.filter(x=>x.note);
assert(act3Risks.records.length===sourceRisks.length&&sourceRisks.length===9,'Act 3 legacy-note risk count mismatch');
assert(act3Risks.records.every((x,i)=>x.id===sourceRisks[i].id&&x.legacyNote===sourceRisks[i].note),'Act 3 risk ledger does not match source notes');
assert(act3Risks.patchCertified===false&&act3Risks.records.every(x=>x.patchCertified===false&&x.review==='legacy-note-unverified'),'Act 3 risks must not claim patch verification');
const act4Inventory=JSON.parse(fs.readFileSync(path.join(dir,'act4-inventory.json'),'utf8'));
const act4Items=d.items.filter(x=>x.act===4);
const act4Route=ctx.window.ALL_EARS_ROUTE_ACT4;
assert(act4Items.length===72&&act4Inventory.records.length===72&&act4Route.records.length===72,'Act 4 must have 72 entries (wiki rows 182–253)');
assert(new Set(act4Route.records.map(x=>x.id)).size===72,'Act 4 route duplicate IDs');
assert(act4Route.records.every((x,i)=>x.wikiRow===182+i),'Act 4 wiki row range mismatch');
assert(act4Route.records.every(x=>act4Items.some(y=>y.id===x.id&&y.npc===x.npc&&y.dialog===x.dialog)),'Act 4 route source mismatch');
assert(act4Inventory.records.every((x,i)=>x.id===act4Items[i].id&&x.npc===act4Items[i].npc&&x.topic===act4Items[i].dialog&&x.legacyNote===act4Items[i].note),'Act 4 inventory source drift');
const byAct4Id=new Map(act4Route.records.map(x=>[x.id,x]));
assert(act4Inventory.records.every(x=>x.wikiRow===byAct4Id.get(x.id)?.wikiRow&&x.patchEvidence===null&&x.reviewStatus==='wiki-row-matched-patch-unverified'),'Act 4 inventory wiki mapping drift or unsupported patch claim');
assert(act4Route.routeSafe===false&&act4Inventory.routeSafe===false&&act4Inventory.patchCertified===false,'Act 4 cannot claim certified route');
assert(act4Route.records.filter(x=>x.before).length===9,'Act 4 risk warnings missing');
assert(act4Route.records.find(x=>x.wikiRow===233)?.id===237,'Act 4 King of Fury dialogue mapping wrong');
assert(act4Route.records.find(x=>x.wikiRow===246)?.id===245,'Act 4 Malachai apprentices dialogue mapping wrong');
const act5Inventory=JSON.parse(fs.readFileSync(path.join(dir,'act5-inventory.json'),'utf8'));
const act5Items=d.items.filter(x=>x.act===5);
const act5Route=ctx.window.ALL_EARS_ROUTE_ACT5;
assert(act5Items.length===44&&act5Inventory.records.length===44&&act5Route.records.length===44,'Act 5 must contain 44 rows');
assert(new Set(act5Route.records.map(x=>x.id)).size===44,'Act 5 duplicate route IDs');
assert(act5Route.records.every((x,i)=>x.wikiRow===254+i),'Act 5 wiki row range mismatch');
assert(act5Route.records.every(x=>act5Items.some(y=>y.id===x.id&&y.npc===x.npc&&y.dialog===x.dialog)),'Act 5 route source data mismatch');
assert(act5Inventory.records.every((x,i)=>x.id===act5Items[i].id&&x.npc===act5Items[i].npc&&x.topic===act5Items[i].dialog&&x.legacyNote===act5Items[i].note),'Act 5 inventory source drift');
const byAct5Id=new Map(act5Route.records.map(x=>[x.id,x]));
assert(act5Inventory.records.every(x=>x.wikiRow===byAct5Id.get(x.id)?.wikiRow&&x.patchEvidence===null&&x.reviewStatus==='wiki-row-matched-patch-unverified'),'Act 5 wiki mapping or patch claim invalid');
assert(act5Route.routeSafe===false&&act5Inventory.routeSafe===false&&act5Inventory.patchCertified===false,'Act 5 cannot claim safe certified route');
assert(act5Route.records.filter(x=>x.before).length===3,'Act 5 must have three critical warnings');
assert(act5Route.records.find(x=>x.wikiRow===270)?.id===267,'Act 5 first Vilenta/Utula mapping wrong');
assert(act5Route.records.find(x=>x.wikiRow===278)?.id===278,'Act 5 post-Innocence Vilenta/Utula mapping wrong');
assert(act5Route.records.find(x=>x.wikiRow===275)?.before.includes('Avarius'),'Act 5 Utula disappearance warning missing');
assert(act5Route.records.find(x=>x.wikiRow===277)?.before.includes('Chamber'),'Act 5 Sin/Innocence warning missing');
assert(act5Route.records.find(x=>x.wikiRow===295)?.before.includes('Ossuary'),'Act 5 Sin/Sign of Purity warning missing');
const act6Inventory=JSON.parse(fs.readFileSync(path.join(dir,'act6-inventory.json'),'utf8'));
const act6Items=d.items.filter(x=>x.act===6);
const act6Risks=JSON.parse(fs.readFileSync(path.join(dir,'act6-risk-ledger.json'),'utf8'));
const act6Notes=act6Items.filter(x=>x.note);
assert(act6Items.length===44&&act6Inventory.records.length===44,'Act 6 inventory must contain 44 dialogues');
assert(new Set(act6Inventory.records.map(x=>x.id)).size===44,'Act 6 inventory duplicate IDs');
assert(act6Inventory.records.every((x,i)=>x.id===act6Items[i].id&&x.npc===act6Items[i].npc&&x.topic===act6Items[i].dialog&&x.legacyNote===act6Items[i].note),'Act 6 inventory content drift');
const act6Route=ctx.window.ALL_EARS_ROUTE_ACT6;
assert(act6Route.records.length===44&&new Set(act6Route.records.map(x=>x.id)).size===44,'Act 6 route must cover 44 unique dialogues');
assert(act6Route.records.every((x,i)=>x.wikiRow===298+i),'Act 6 wiki rows must be 298–341');
assert(act6Route.records.every(x=>act6Items.some(y=>y.id===x.id&&y.npc===x.npc&&y.dialog===x.dialog)),'Act 6 route source mismatch');
const byAct6Id=new Map(act6Route.records.map(x=>[x.id,x]));
assert(act6Inventory.records.every(x=>x.wikiRow===byAct6Id.get(x.id)?.wikiRow&&x.patchEvidence===null&&x.reviewStatus==='wiki-row-matched-patch-unverified'),'Act 6 inventory wiki mapping drift or unsupported patch claim');
assert(act6Route.routeSafe===false&&act6Route.patch==='unverified','Act 6 wiki ordering is not certified safe');
assert(act6Route.records.filter(x=>x.before).length===12,'Act 6 source risk warnings incomplete');
assert(act6Route.records.find(x=>x.wikiRow===298)?.id===302,'Act 6 Lilly introduction mapping wrong');
assert(act6Route.records.find(x=>x.wikiRow===302)?.id===298,'Act 6 Sin Essence mapping wrong');
assert(act6Route.records.find(x=>x.wikiRow===330)?.id===328,'Act 6 Cloven One mapping wrong');
assert(act6Inventory.patchCertified===false&&act6Inventory.routeSafe===false,'Act 6 route is not certified');
assert(act6Inventory.records.filter(x=>x.riskCandidate).length===20,'Act 6 risk candidate count drift');
assert(act6Risks.records.length===act6Notes.length&&act6Notes.length===8,'Act 6 legacy risk note count mismatch');
assert(act6Risks.records.every((x,i)=>x.id===act6Notes[i].id&&x.legacyNote===act6Notes[i].note),'Act 6 risk note fidelity mismatch');
assert(act6Risks.patchCertified===false&&act6Risks.records.every(x=>x.patchCertified===false&&x.review==='legacy-note-unverified'),'Act 6 risk notes falsely certified');
const act6Advisory=ctx.window.ALL_EARS_ACT6_ADVISORY;
assert(act6Advisory.patchCertified===false&&act6Advisory.routeSafe===false,'Act 6 advisory falsely certified');
assert(act6Advisory.milestones.length===5,'Act 6 advisory must include five quest milestones');
assert(act6Advisory.milestones.flatMap(x=>x.ids).length===8,'Act 6 advisory must cover all eight legacy notes');
assert(act6Advisory.milestones.flatMap(x=>x.ids).every(id=>act6Notes.some(x=>x.id===id)),'Act 6 advisory references non-risk dialogue');
const act7Inventory=JSON.parse(fs.readFileSync(path.join(dir,'act7-inventory.json'),'utf8'));
const act7Items=d.items.filter(x=>x.act===7);
const act7Route=ctx.window.ALL_EARS_ROUTE_ACT7;
assert(act7Items.length===45&&act7Inventory.records.length===45&&act7Route.records.length===45,'Act 7 must contain 45 dialogues');
assert(new Set(act7Route.records.map(x=>x.id)).size===45,'Act 7 route duplicate IDs');
assert(act7Route.records.every((x,i)=>x.wikiRow===342+i),'Act 7 wiki row range mismatch');
assert(act7Route.records.every(x=>act7Items.some(y=>y.id===x.id&&y.npc===x.npc&&y.dialog===x.dialog)),'Act 7 route source mismatch');
assert(act7Inventory.records.every((x,i)=>x.id===act7Items[i].id&&x.npc===act7Items[i].npc&&x.topic===act7Items[i].dialog&&x.legacyNote===act7Items[i].note),'Act 7 inventory source drift');
const byAct7Id=new Map(act7Route.records.map(x=>[x.id,x]));
assert(act7Inventory.records.every(x=>x.wikiRow===byAct7Id.get(x.id)?.wikiRow&&x.patchEvidence===null&&x.reviewStatus==='wiki-row-matched-patch-unverified'),'Act 7 inventory wiki mapping drift or unsupported patch claim');
assert(act7Route.routeSafe===false&&act7Inventory.routeSafe===false&&act7Inventory.patchCertified===false,'Act 7 cannot claim certified safe route');
assert(act7Route.records.filter(x=>x.before).length===5,'Act 7 risk warning count mismatch');
assert(act7Inventory.discrepancies.length===3,'Act 7 legacy/wiki discrepancies must be preserved');
assert(act7Inventory.discrepancies.every(x=>act7Items.some(y=>y.id===x.id&&y.note===x.legacyNote)),'Act 7 discrepancy source note mismatch');
assert(act7Route.records.find(x=>x.wikiRow===376)?.id===380,'Act 7 Helena Greust mapping wrong');
assert(act7Route.records.find(x=>x.wikiRow===379)?.id===376,'Act 7 Sin Mother of Despair mapping wrong');
assert(act7Route.records.find(x=>x.wikiRow===380)?.id===378,'Act 7 first Eramir Gruthkul mapping wrong');
assert(act7Route.records.find(x=>x.wikiRow===381)?.id===381,'Act 7 second Eramir Gruthkul mapping wrong');
const act8Inventory=JSON.parse(fs.readFileSync(path.join(dir,'act8-inventory.json'),'utf8'));
const act8Items=d.items.filter(x=>x.act===8);
const act8Route=ctx.window.ALL_EARS_ROUTE_ACT8;
assert(act8Items.length===30&&act8Inventory.records.length===30&&act8Route.records.length===30,'Act 8 must contain 30 dialogues');
assert(new Set(act8Route.records.map(x=>x.id)).size===30,'Act 8 route duplicate IDs');
assert(act8Route.records.every((x,i)=>x.wikiRow===387+i),'Act 8 wiki row range mismatch');
assert(act8Route.records.every(x=>act8Items.some(y=>y.id===x.id&&y.npc===x.npc&&y.dialog===x.dialog)),'Act 8 route source mismatch');
assert(act8Inventory.records.every((x,i)=>x.id===act8Items[i].id&&x.npc===act8Items[i].npc&&x.topic===act8Items[i].dialog&&x.legacyNote===act8Items[i].note),'Act 8 inventory source drift');
const byAct8Id=new Map(act8Route.records.map(x=>[x.id,x]));
assert(act8Inventory.records.every(x=>x.wikiRow===byAct8Id.get(x.id)?.wikiRow&&x.patchEvidence===null&&x.reviewStatus==='wiki-row-matched-patch-unverified'),'Act 8 inventory wiki mapping drift or unsupported patch claim');
assert(act8Route.routeSafe===false&&act8Inventory.routeSafe===false&&act8Inventory.patchCertified===false,'Act 8 cannot claim certified safe route');
assert(act8Route.records.filter(x=>x.before).length===4,'Act 8 risk warning count mismatch');
assert(act8Inventory.discrepancies.length===1&&act8Inventory.discrepancies[0].id===403,'Act 8 Doedre discrepancy missing');
assert(act8Route.records.find(x=>x.wikiRow===402)?.id===391,'Act 8 Doedre Hargan mapping wrong');
assert(act8Route.records.find(x=>x.wikiRow===412)?.id===413,'Act 8 post-Tolman Clarissa mapping wrong');
assert(act8Route.records.find(x=>x.wikiRow===413)?.id===412,'Act 8 post-Tolman Maramoa mapping wrong');
const act9Inventory=JSON.parse(fs.readFileSync(path.join(dir,'act9-inventory.json'),'utf8'));
const act9Items=d.items.filter(x=>x.act===9);
const act9Risks=JSON.parse(fs.readFileSync(path.join(dir,'act9-risk-ledger.json'),'utf8'));
const act9Notes=act9Items.filter(x=>x.note);
const act9Advisory=ctx.window.ALL_EARS_ACT9_ADVISORY;
assert(act9Items.length===36&&act9Inventory.records.length===36,'Act 9 inventory must contain 36 dialogues');
assert(new Set(act9Inventory.records.map(x=>x.id)).size===36,'Act 9 inventory duplicate IDs');
assert(act9Inventory.records.every((x,i)=>x.id===act9Items[i].id&&x.npc===act9Items[i].npc&&x.topic===act9Items[i].dialog&&x.legacyNote===act9Items[i].note),'Act 9 inventory source drift');
const act9Route=ctx.window.ALL_EARS_ROUTE_ACT9;
assert(act9Route.records.length===36&&new Set(act9Route.records.map(x=>x.id)).size===36,'Act 9 Wiki route must cover 36 unique dialogues');
assert(act9Route.records.every((x,i)=>x.wikiRow===417+i),'Act 9 wiki rows must be 417–452');
assert(act9Route.records.every(x=>act9Items.some(y=>y.id===x.id&&y.npc===x.npc&&y.dialog===x.dialog)),'Act 9 route source mismatch');
const byAct9Id=new Map(act9Route.records.map(x=>[x.id,x]));
assert(act9Inventory.records.every(x=>x.wikiRow===byAct9Id.get(x.id)?.wikiRow&&x.patchEvidence===null&&x.reviewStatus==='wiki-row-matched-patch-unverified'),'Act 9 inventory mapping drift');
assert(act9Route.routeSafe===false&&act9Route.patch==='unverified','Act 9 not patch certified');
assert(act9Route.records.filter(x=>x.before).length===4,'Act 9 warnings count drift');
assert(act9Route.records.find(x=>x.wikiRow===421)?.id===422,'Act 9 old gods order mismatch');
assert(act9Route.records.find(x=>x.wikiRow===441)?.id===443,'Act 9 feather branch order mismatch');
assert(act9Route.branch.options.length===2&&act9Route.branch.options[1].row441.id===null,'Act 9 mutually exclusive ruler variant must not claim legacy ID');
assert(act9Inventory.patchCertified===false&&act9Inventory.routeSafe===false,'Act 9 cannot claim safe certified route');
assert(act9Inventory.records.filter(x=>x.riskCandidate).length===15,'Act 9 risk candidate count drift');
assert(act9Notes.length===9&&act9Risks.records.length===9,'Act 9 legacy risk note count mismatch');
assert(act9Risks.records.every((x,i)=>x.id===act9Notes[i].id&&x.legacyNote===act9Notes[i].note),'Act 9 risk note fidelity mismatch');
assert(act9Risks.patchCertified===false&&act9Risks.records.every(x=>x.patchCertified===false&&x.review==='legacy-note-unverified'),'Act 9 risks falsely certified');
assert(act9Advisory.patchCertified===false&&act9Advisory.routeSafe===false,'Act 9 advisory falsely certified');
assert(act9Advisory.milestones.length===4,'Act 9 advisory must contain four milestones');
assert(act9Advisory.milestones.flatMap(x=>x.ids).length===9,'Act 9 advisory must cover all nine legacy notes');
assert(new Set(act9Advisory.milestones.flatMap(x=>x.ids)).size===9,'Act 9 advisory duplicate risk IDs');
assert(act9Advisory.milestones.flatMap(x=>x.ids).every(id=>act9Notes.some(x=>x.id===id)),'Act 9 advisory references unsupported risk');
const act10Inventory=JSON.parse(fs.readFileSync(path.join(dir,'act10-inventory.json'),'utf8'));
const act10Items=d.items.filter(x=>x.act===10);
const act10Advisory=ctx.window.ALL_EARS_ACT10_ADVISORY;
assert(act10Items.length===32&&act10Inventory.records.length===32,'Act 10 inventory must contain 32 dialogues');
assert(new Set(act10Inventory.records.map(x=>x.id)).size===32,'Act 10 inventory duplicate IDs');
assert(act10Inventory.records.every((x,i)=>x.id===act10Items[i].id&&x.npc===act10Items[i].npc&&x.topic===act10Items[i].dialog&&x.legacyNote===act10Items[i].note),'Act 10 inventory source drift');
const act10Route=ctx.window.ALL_EARS_ROUTE_ACT10;
assert(act10Route.records.length===32&&new Set(act10Route.records.map(x=>x.id)).size===32,'Act 10 Wiki route must cover 32 unique dialogues');
assert(act10Route.records.every((x,i)=>x.wikiRow===453+i),'Act 10 wiki rows must be 453–484');
assert(act10Route.records.every(x=>act10Items.some(y=>y.id===x.id&&y.npc===x.npc&&y.dialog===x.dialog)),'Act 10 route source mismatch');
const byAct10Id=new Map(act10Route.records.map(x=>[x.id,x]));
assert(act10Inventory.records.every(x=>x.wikiRow===byAct10Id.get(x.id)?.wikiRow&&x.patchEvidence===null&&x.reviewStatus==='wiki-row-matched-patch-unverified'),'Act 10 inventory mapping drift');
assert(act10Route.routeSafe===false&&act10Route.patch==='unverified','Act 10 not patch certified');
assert(act10Route.records.find(x=>x.wikiRow===467)?.id===469,'Act 10 Lani Sin mapping wrong');
assert(act10Route.records.find(x=>x.wikiRow===469)?.id===467,'Act 10 Lani Lilly mapping wrong');
assert(act10Inventory.patchCertified===false&&act10Inventory.routeSafe===false,'Act 10 route not certified');
assert(act10Inventory.records.filter(x=>x.riskCandidate).length===11,'Act 10 risk candidate count drift');
assert(act10Advisory.patchCertified===false&&act10Advisory.routeSafe===false,'Act 10 advisory falsely certified');
assert(act10Advisory.milestones.length===3,'Act 10 advisory must contain three checkpoints');
assert(new Set(act10Advisory.milestones.flatMap(x=>x.ids)).size===11,'Act 10 advisory must cover 11 distinct dialogues');
assert(act10Advisory.milestones.flatMap(x=>x.ids).every(id=>act10Items.some(x=>x.id===id)),'Act 10 advisory references unknown dialogue');
load('extra-data.js');
const extras=ctx.window.POE_EXTRA_TRACKERS;
assert(extras.verifiedPatch===null,'Extra tracker must not claim current patch certification');
assert(extras.waypoints.length===91&&extras.sidequests.length===30,'Expected 91 waypoints and 30 sidequests in historical 3.9');
assert(extras.waypoints.every((x,i)=>x.id===i+1&&x.name&&x.act!==undefined),'Waypoint identifiers/order malformed');
assert(extras.sidequests.every((x,i)=>x.id===i+1&&x.name&&x.act!==undefined),'Side quest identifiers/order malformed');
const extrasPage=fs.readFileSync(path.join(dir,'extras.html'),'utf8');
assert(extrasPage.includes('src="./extra-data.js"')&&extrasPage.includes('poe-companion-extras-v1'),'Extra tracker page or independent persistence missing');
load('lore-data.js');
const lore=ctx.window.NO_STONE_DATA;
const loreCounts={"1":29,"2":11,"3":32,"4":12,"5":12,"6":6,"7":8,"8":1,"10":3,Labyrinth:10,Vaal:16};
assert(lore.schema===1&&lore.verifiedPatch===null,'Lore data must be explicitly patch-unverified');
assert(lore.entries.length===140,'No Stone Unturned must contain 140 lore entries');
assert(new Set(lore.entries.map(x=>x.id)).size===140&&lore.entries.every((x,i)=>x.id===i+1),'Lore stable IDs must be 1–140');
assert(lore.entries.every(x=>typeof x.name==='string'&&x.name.trim()&&typeof x.area==='string'&&x.area.trim()),'Lore name/area missing');
assert(Object.entries(loreCounts).every(([a,n])=>lore.entries.filter(x=>String(x.act)===a).length===n),'Lore category counts drift');
assert(lore.entries.filter(x=>x.act==='Vaal'&&x.name.startsWith('Vaal Letter')).length===12,'Vaal Letter total must be 12');
assert(lore.entries.filter(x=>x.act==='Vaal'&&x.name.startsWith('Research Journal')).length===4,'Vaal Research Journal total must be 4');
const vaalLore=lore.entries.filter(x=>x.act==='Vaal');
assert(vaalLore.length===16&&new Set(vaalLore.map(x=>x.wikiRow)).size===16,'Vaal Wiki crosswalk must contain 16 unique rows');
assert(vaalLore.every(x=>x.wikiRow>=125&&x.wikiRow<=140),'Vaal Wiki rows must be 125–140');
assert(lore.entries.find(x=>x.id===130).wikiRow===128,'Concealed Caldarium historical ID / Wiki row mapping mismatch');

const companion=fs.readFileSync(path.join(dir,'companion.html'),'utf8');
assert(companion.includes('src="./lore-data.js"')&&companion.includes('poe-companion-lore-v1'),'Companion lore data or isolated persistence missing');
assert(companion.includes('data-safety="alira"')&&companion.includes('id="gameCount"')&&companion.includes('id="vaalArea"'),'Companion safety/recheck/Vaal UI missing');
load('quest-rewards.js');
const allRewards=ctx.window.POE_QUEST_REWARDS?.acts||[];
assert(allRewards.length===10&&allRewards.reduce((sum,a)=>sum+a.quests.length,0)===58,'Quest rewards must cover 58 historical quest entries across 10 Acts');
assert(allRewards.every(a=>a.quests.length>0&&a.quests.every(q=>q.name&&q.reward&&['passive','refund','gem','item','choice'].includes(q.type))),'Quest reward descriptions/types missing');
assert(allRewards.flatMap(a=>a.quests.filter(q=>q.type==='passive')).length===23,'Quest passive reward reference drift');
// Every tracked Achievement item must belong to exactly one 100% journey scope.
const missionScopes=[...Array.from({length:10},(_,i)=>String(i+1)),"Labyrinth","Vaal","Epilogue"];
const missionCategories={ears:d.items,lore:lore.entries,waypoints:extras.waypoints,sidequests:extras.sidequests};
for(const [type,items] of Object.entries(missionCategories)){
 const scopeIds=missionScopes.flatMap(scope=>items.filter(item=>String(item.act)===scope).map(item=>item.id));
 assert(scopeIds.length===items.length&&new Set(scopeIds).size===items.length,'100% goal scope must cover every '+type+' ID once');
}
assert(Object.values(missionCategories).reduce((sum,items)=>sum+items.length,0)===745,'Four-Achievement mission total must be 745');
assert(missionCategories.waypoints.filter(x=>x.act==='Labyrinth').length===1,'Labyrinth waypoint must count for Locomancer');
assert(missionCategories.waypoints.filter(x=>x.act==='Epilogue').length===2,'Epilogue waypoints cannot disappear from 100% roadmap');
load('special-lore-guide.js');
load('workbook-warnings.js');
const specialLore=ctx.window.POE_SPECIAL_LORE,sourceWarnings=ctx.window.POE_WORKBOOK_WARNINGS;
assert(specialLore.schema===1&&specialLore.patchCertified===false,'Special lore routes must be patch-unverified');
assert(specialLore.labyrinth.ids.length===10&&specialLore.vaal.ids.length===16,'Workbook specials must contain 10 Labyrinth and 16 Vaal entries');
for(const [scope,ids] of [['Labyrinth',specialLore.labyrinth.ids],['Vaal',specialLore.vaal.ids]]){
 assert(new Set(ids).size===ids.length&&ids.every(id=>lore.entries.some(x=>x.id===id&&x.act===scope)),'Special lore map must preserve original No Stone IDs: '+scope);
}
assert(specialLore.labyrinth.groups.flatMap(x=>x.ids).length===10&&new Set(specialLore.labyrinth.groups.flatMap(x=>x.ids)).size===10,'Labyrinth location groups must use exactly ten canonical IDs');
assert(specialLore.vaal.letters.length===12&&specialLore.vaal.journals.length===4,'Vaal subcategories must preserve 12 Letters and four Research Journals');
assert(sourceWarnings.schema===1&&sourceWarnings.wikiRows.length===77&&new Set(sourceWarnings.wikiRows).size===77,'Uploaded workbook must contain 77 distinct flagged Wiki rows');
const mappedRows=Object.keys(ctx.window).filter(x=>/^ALL_EARS_ROUTE_ACT\d+$/.test(x)).flatMap(x=>ctx.window[x].records);
assert(sourceWarnings.wikiRows.every(id=>mappedRows.some(r=>r.wikiRow===id)),'Excel warning Wiki row missing from route crosswalk');
const canonicalSource=fs.readFileSync(path.join(dir,'index.html'),'utf8');
assert(canonicalSource.includes('src="./special-lore-guide.js"')&&canonicalSource.includes('src="./workbook-warnings.js"'),'New special guide/warning index not loaded in main page');
load('steam-quest-walkthrough.js');
load('poe-acts123-bilingual.js');
load('steam-act4.js');
load('steam-act5.js');
load('steam-act6.js');
load('steam-act7.js');
load('steam-act8.js');
load('steam-act9.js');
load('steam-act10.js');
const steamWalk=ctx.window.POE_STEAM_WALK;
assert(steamWalk?.schema===1&&steamWalk.patchCertified===false&&steamWalk.source.includes('2948321869'),'Steam companion guide must cite historical user-supplied reference and avoid patch certification');
assert(canonicalSource.includes('src="./poe-acts123-bilingual.js"'),'Early Acts bilingual guidance module must load after base route');
for(const act of [1,2,3]){
 const phases=steamWalk.acts[act];
 const expected={1:9,2:10,3:12}[act];
 assert(phases.length===expected,'Act '+act+' number of original route phases may not change during editorial pass');
 for(const phase of phases){
  assert(phase.headingEN&&phase.actionsEN?.length===phase.actions.length,'Act '+act+' '+phase.id+' requires complete English instructions, never generic English fallback');
  assert(phase.actionsEN.every(x=>x.length>25&&!/[\u0E00-\u0E7F]/.test(x)),'Act '+act+' '+phase.id+' English guidance must be readable without Thai text');
  assert(!phase.stop||phase.stopEN?.startsWith('STOP:'),'Act '+act+' '+phase.id+' source missable boundary needs a specific English STOP');
 }
}
const earlyEN=steamWalk.acts[1].find(p=>p.id==='fairgraves');
assert(earlyEN.actionsEN.some(t=>t.includes('Allflame'))&&earlyEN.stopEN.includes('Fairgraves'),'Act1 Allflame dialogue chain must survive English edit');
assert(steamWalk.acts[2].find(p=>p.id==='bandit-decisions').actionsEN.some(t=>t.includes('disagree')),'Act2 Bandit historical conflict must be retained in English');
assert(steamWalk.acts[3].find(p=>p.id==='bracelet').stopEN.includes('Clarissa'),'Act3 Bracelet STOP still names its recipient and timing');
const playerHelpSource=fs.readFileSync(path.join(dir,'hub.js'),'utf8');
assert(playerHelpSource.includes('findRelevantStage(type,x)')&&playerHelpSource.includes('dataset.openStage')&&playerHelpSource.includes('openJourneyScope(String(x.act))'),'Checklist explanations must offer direct jump to exact quest-stage actions');
assert(playerHelpSource.includes('statusNote.replaceChildren(overview,warning)'),'Header source caution must be bilingual and updated');
const actOne=steamWalk.acts[1];
assert(actOne.length===9,'Act 1 source timeline must expose nine player-oriented steps');
const actOneIds=actOne.flatMap(p=>p.dialogueIds),actOneLore=actOne.flatMap(p=>p.loreIds);
assert(actOneIds.length===41&&new Set(actOneIds).size===41,'Act 1 nine-step guide must cover 41 dialogue IDs exactly once');
assert(actOneIds.every(id=>d.items.some(i=>i.id===id&&i.act===1)),'Act 1 Steam timeline has invalid dialogue ID');
assert(actOneLore.length===15&&new Set(actOneLore).size===15&&actOneLore.every(id=>lore.entries.some(x=>x.id===id&&x.act===1)),'Act 1 Letters of Exile lore must use 15 existing No Stone IDs');
assert(actOne.every(p=>p.actions.length>0&&p.place&&p.heading&&(!p.stopIds||p.stopIds.every(id=>p.dialogueIds.includes(id)))),'Act 1 guide boundary must reference only items within its source phase');
assert(actOne.find(p=>p.id==='fairgraves').patchProblem.includes('3.29'),'Historical source must warn of Fairgraves reported breakage in 3.29');
const actTwo=steamWalk.acts[2],actTwoIds=actTwo.flatMap(p=>p.dialogueIds);
assert(actTwo.length===10,'Act 2 source chronology must have ten explicit zone phases');
assert(actTwoIds.length===69&&new Set(actTwoIds).size===69,'Act 2 ten-phase guide must cover 69 dialogue IDs exactly once');
assert(actTwoIds.every(id=>d.items.some(x=>x.id===id&&x.act===2)),'Act 2 zone guide must use canonical local IDs for the right Act');
const steamRouteRows=ctx.window.ALL_EARS_ROUTE_ACT2.records.slice().sort((a,b)=>a.wikiRow-b.wikiRow).map(x=>x.id);
assert(actTwoIds.join(',')===steamRouteRows.join(','),'Act 2 sequence must be derived from Wiki row numbers, not incorrectly using local ID order');
assert(actTwo.every(p=>p.actions.length>0&&p.place&&(!p.stopIds||p.stopIds.every(id=>actTwoIds.includes(id)))),'Act 2 do-not-progress guards must refer to existing source-linked Act 2 dialogue IDs');
assert(actTwo.find(p=>p.id==='bandit-decisions').sourceConflict.includes('ขัดแย้ง'),'Act 2 Steam/Wiki disputed Ancient Seal timing must not be claimed as safe');
assert(actTwo.find(p=>p.id==='western-forest').stop.includes('Chamber of Sins'),'West Forest must precede the relevant Chamber of Sins quest transition in source-oriented Act 2');

const actThree=steamWalk.acts[3],actThreeIds=actThree.flatMap(p=>p.dialogueIds),actThreeLore=actThree.flatMap(p=>p.loreIds);
assert(actThree.length===12,'Act 3 must show 12 historic source phases');
assert(actThreeIds.length===71&&new Set(actThreeIds).size===71,'Act 3 71 NPC dialogues must each appear once');
assert(actThreeIds.every(id=>d.items.some(x=>x.id===id&&x.act===3)),'Act 3 guide must use existing canonical All Ears IDs');
assert(ctx.window.ALL_EARS_ROUTE_ACT3.records.every(r=>actThreeIds.includes(r.id)),'Act 3 guide must cover every Wiki 2025 mapped NPC row');
assert(actThreeLore.length===32&&new Set(actThreeLore).size===32&&actThreeLore.every(id=>lore.entries.some(x=>x.id===id&&x.act===3)),'Act 3 must interleave all 32 historical lore IDs exactly once');
assert(actThree.every(p=>p.heading&&p.place&&p.actions.length>0&&(p.stopIds||[]).every(id=>p.dialogueIds.includes(id))),'Act 3 quest-stop gates must remain inside their source phase');
assert(actThree.find(p=>p.id==='bracelet')?.stopIds.includes(ctx.window.ALL_EARS_ROUTE_ACT3.records.find(r=>r.wikiRow===115).id),'Bracelet hand-in stop must use Wiki row #115 canonical ID');
assert(actThree.find(p=>p.id==='docks-fairgraves')?.patchProblem.includes('3.29'),'Act 3 Fairgraves patch risk must remain visible');
assert(steamWalk.patchCertified===false,'Act 3 source chronology does not certify 3.30 gameplay');

const actFour=steamWalk.acts[4],actFourIds=actFour.flatMap(p=>p.dialogueIds),actFourLore=actFour.flatMap(p=>p.loreIds||[]);
const actFourWp=actFour.flatMap(p=>p.waypointIds||[]),actFourSide=actFour.flatMap(p=>p.sidequestIds||[]);
const sameExactSet=(items,expected)=>items.length===expected.length&&new Set(items).size===items.length&&expected.every(id=>items.includes(id));
assert(actFour.length===13,'Act 4 walkthrough must have thirteen player-oriented phases');
assert(sameExactSet(actFourIds,d.items.filter(x=>x.act===4).map(x=>x.id)),'Act 4 All Ears 72 local IDs must appear exactly once');
assert(sameExactSet(actFourLore,lore.entries.filter(x=>x.act===4).map(x=>x.id)),'Act 4 twelve Lore local IDs must appear exactly once');
assert(sameExactSet(actFourWp,extras.waypoints.filter(x=>x.act===4).map(x=>x.id)),'Act 4 six Waypoint local IDs must appear exactly once');
assert(sameExactSet(actFourSide,extras.sidequests.filter(x=>x.act===4).map(x=>x.id)),'Act 4 one sidequest local ID must appear exactly once');
assert(actFour.every(p=>p.place&&p.heading&&p.quest&&p.actions.length>0&&(p.stopIds||[]).every(id=>p.dialogueIds.includes(id))),'Act 4 quest STOP IDs must belong to real dialogue phase records');
assert(actFour.find(p=>p.id==='voll-mines')?.stopIds.includes(220),'Kira before freeing Deshret warning missing');
assert(actFour.find(p=>p.id==='piety-after')?.stopIds.includes(241),'Piety before The Harvest warning missing');
assert(actFour.find(p=>p.id==='harvest-before')?.stopIds.includes(247)&&actFour.find(p=>p.id==='harvest-after')?.stopIds.includes(248),'Pre/post organ hand-in warning must be split into different phases');
assert(steamWalk.patchCertified===false,'Act 4 guide cannot certify patch 3.30 gameplay');

const actFive=steamWalk.acts[5],actFiveIds=actFive.flatMap(p=>p.dialogueIds),actFiveLore=actFive.flatMap(p=>p.loreIds||[]),actFiveWp=actFive.flatMap(p=>p.waypointIds||[]),actFiveSide=actFive.flatMap(p=>p.sidequestIds||[]);
assert(actFive.length===12,'Act 5 must have twelve distinct source-aligned quest phases');
assert(sameExactSet(actFiveIds,d.items.filter(x=>x.act===5).map(x=>x.id)),'Act 5 must include all 44 canonical NPC entries once');
assert(sameExactSet(actFiveLore,lore.entries.filter(x=>x.act===5).map(x=>x.id)),'Act 5 must include all 12 lore entries once');
assert(sameExactSet(actFiveWp,extras.waypoints.filter(x=>x.act===5).map(x=>x.id)),'Act 5 must include eight Waypoints once');
assert(sameExactSet(actFiveSide,extras.sidequests.filter(x=>x.act===5).map(x=>x.id)),'Act 5 two optional quests must appear once');
assert(actFive.every(p=>p.id&&p.place&&p.quest&&p.heading&&p.headingEN&&p.actions.length===p.actionsEN.length&&p.actionsEN.length>0&&(p.stopIds||[]).every(id=>p.dialogueIds.includes(id))),'Act 5 must contain reviewed Thai/English steps and proper STOP IDs');
assert(actFive.find(p=>p.id==='casticus-return')?.stopIds.includes(275),'Act 5 must protect Utula after Casticus but before Avarius');
assert(actFive.find(p=>p.id==='innocence-sin')?.stopIds.includes(277),'Act 5 must protect Sin before leaving Chamber of Innocence');
assert(actFive.find(p=>p.id==='ossuary-sin')?.stopIds.includes(295),'Act 5 must protect Sin after Sign of Purity');
assert(actFive.find(p=>p.id==='reliquary')?.keyItems.length===3,'Act 5 Reliquary must show three exact quest item names');
assert(steamWalk.patchCertified===false,'Act 5 must not claim 3.30 gameplay certification');
const langCtx={window:{POE_STEAM_WALK:steamWalk},localStorage:{getItem:()=>null,setItem:()=>{}}};
vm.runInNewContext(fs.readFileSync(path.join(dir,'poe-language.js'),'utf8'),langCtx,{filename:'poe-language.js'});
const locale=langCtx.window.POE_LANGUAGE;
assert(locale.get().description==='th'&&locale.get().names==='en','User defaults must be Thai guidance and canonical English names');
assert(locale.set('description','en')&&locale.tr('ก่อนทำต่อ','Before continuing')==='Before continuing','English guidance selector must act independently');
assert(locale.set('names','both')&&locale.term("Kitava's Torments").includes("Kitava's Torments")&&locale.term("Kitava's Torments").includes("คิทาวา"),'Bilingual quest names must preserve original source text');
assert(locale.set('names','th')&&locale.term('Miasmeter').includes('เครื่องวัด'),'Known Act 5 quest item Thai name must display');
assert(locale.term('Untranslated Official Name')==='Untranslated Official Name','Unknown source names must not be guessed');
assert(locale.englishHelp('ears',d.items.find(x=>x.id===277),{}).caution.includes('Innocence'),'Act 5 Sin stop must remain explicit in English');

assert(locale.set('names','both')&&locale.term('Eye of Conquest').includes('ดวงตา')&&locale.term('Eye of Conquest').includes('Eye of Conquest'),'Act 6 bilingual source item should preserve original English');
assert(locale.set('names','th')&&locale.term("The Brine King's Reef").includes('ปะการัง'),'Act 6 area name needs Thai editorial glossary');
assert(locale.entry('ears',d.items.find(x=>x.id===336)).includes('Lilly Roth'),'Act 6 canonical Lily/Lilly source alias must display correct English NPC name');
assert(locale.englishHelp('ears',d.items.find(x=>x.id===321),{}).caution.includes('BEFORE using'),'Act 6 English before-Eye warning must be explicit');
assert(locale.englishHelp('ears',d.items.find(x=>x.id===322),{}).unlock.includes('BEFORE entering'),'Act 6 post-Eye / pre-Fortress state must be distinct');
assert(locale.englishHelp('ears',d.items.find(x=>x.id===338),{}).caution.includes('Tsoagoth'),'Act 6 Reef stop must remain in English');

assert(locale.set('names','both')&&locale.term("Kishara's Star").includes('คิชารา')&&locale.term("Kishara's Star").includes("Kishara's Star"),'Act 7 Kishara quest-item English title must survive Thai+EN display');
assert(locale.set('names','th')&&locale.term("Maligaro's Map").includes('แผนที่'),'Act 7 Thai quest-item title must be available');
assert(locale.term("Nonexistent Lore Translation") === "Nonexistent Lore Translation",'Untranslated environmental lore must fall back to official English');
assert(locale.englishHelp('ears',d.items.find(x=>x.id===365),{}).caution.includes('Den'),'Act 7 Helena blocked-route STOP must remain available in English');
assert(locale.englishHelp('ears',d.items.find(x=>x.id===382),{}).caution.includes('seven Fireflies'),'Act 7 Fireflies timing must remain precise in English');
assert(locale.englishHelp('ears',d.items.find(x=>x.id===384),{}).caution.includes('BEFORE leaving'),'Act 7 post-Arakaali boundary must remain explicit');

assert(locale.set('names','both')&&locale.term('Ankh of Eternity').includes('อังก์')&&locale.term('Ankh of Eternity').includes('Ankh of Eternity'),'Act 8 Ankh Thai + canonical English name must work independently');
assert(locale.set('names','th')&&locale.term('Wings of Vastiri').includes('วัสทิรี'),'Act 8 Wings quest item must have an editorial Thai title');
assert(locale.englishHelp('ears',d.items.find(x=>x.id===407),{}).caution.includes('BEFORE completing'),'Act 8 Ankh before-completion warning must work in English');
assert(locale.englishHelp('ears',d.items.find(x=>x.id===411),{}).caution.includes('BEFORE leaving'),'Act 8 Clarissa post-Tolman Quay warning must be unambiguous in English');
assert(locale.englishHelp('ears',d.items.find(x=>x.id===409),{}).caution.includes('BEFORE killing Yugul'),'Act 8 Sin pre-Yugul STOP must remain available in English');
assert(locale.englishHelp('waypoints',extras.waypoints.find(x=>x.id===71),{}).unlock.includes('Doedre'),'Act 8 waypoint cannot be marked before the Cesspool exit after Doedre');

assert(locale.set('names','both')&&locale.term('Sekhema Feather').includes('เซเคห์มา')&&locale.term('Sekhema Feather').includes('Sekhema Feather'),'Act9 name mode must show Feather in both English and editorial Thai');
assert(locale.set('names','both')&&locale.term('The Teardrop').includes('หยดน้ำตา')&&locale.term('The Teardrop').includes('The Teardrop'),'Act10 Teardrop name must survive TH/EN mode');
assert(locale.set('names','th')&&locale.term('The Staff of Purity').includes('คทา'),'Act10 Staff of Purity editorial term required');
assert(locale.englishHelp('ears',d.items.find(x=>x.id===438),{}).caution.includes('Trarthan'),'Act9 Sin Dark Ember timing without powder must remain in English');
assert(locale.englishHelp('ears',d.items.find(x=>x.id===443),{}).caution.includes('IRASHA'),'Act9 Feather branch never silently implies Tasuni support');
assert(locale.englishHelp('ears',d.items.find(x=>x.id===448),{}).caution.includes('BEFORE travelling'),'Act9 pre-Act10 Weylam rescue caution missing in English');
assert(locale.englishHelp('ears',d.items.find(x=>x.id===471),{}).unlock.includes('Safe Passage'),'Act10 Lilly Tsoatha must unlock after Safe Passage');
assert(locale.englishHelp('ears',d.items.find(x=>x.id===481),{}).caution.includes('AFTER completing'),'Act10 Lilly Innocence must be tied to Death and Rebirth');
const skill=fs.readFileSync(path.join(dir,'../.agents/skills/poe-achievement-ux/SKILL.md'),'utf8');
assert(skill.startsWith('---')&&skill.includes('poe-achievement-ux')&&skill.includes('mobile')&&skill.includes('bilingual'),'Project-specific UX/UI skill must exist with practical QA guidance');
assert(canonicalSource.includes('src="./steam-act5.js"')&&canonicalSource.includes('src="./poe-language.js"'),'Act 5 and bilingual UI modules must both load before hub.js');

const actSix=steamWalk.acts[6],actSixEars=actSix.flatMap(p=>p.dialogueIds),actSixLore=actSix.flatMap(p=>p.loreIds||[]);
const actSixWp=actSix.flatMap(p=>p.waypointIds||[]),actSixSide=actSix.flatMap(p=>p.sidequestIds||[]);
assert(actSix.length===15,'Act 6 has fifteen source-aligned player quest stages');
assert(sameExactSet(actSixEars,d.items.filter(x=>x.act===6).map(x=>x.id)),'Act 6 All Ears: 44 original IDs exactly once');
assert(sameExactSet(actSixLore,lore.entries.filter(x=>x.act===6).map(x=>x.id)),'Act 6 No Stone: six original IDs exactly once');
assert(sameExactSet(actSixWp,extras.waypoints.filter(x=>x.act===6).map(x=>x.id)),'Act 6 Locomancer: ten original IDs exactly once');
assert(sameExactSet(actSixSide,extras.sidequests.filter(x=>x.act===6).map(x=>x.id)),'Act 6 No Loose Ends: four original IDs exactly once');
assert(actSix.every(p=>p.id&&p.place&&p.quest&&p.heading&&p.headingEN&&p.actions.length===p.actionsEN.length&&p.actionsEN.length>=2&&(p.stopIds||[]).every(id=>p.dialogueIds.includes(id))),'Act 6 bilingual source and stop IDs must be tied to the actual phase');
const actSixWikiRoute=ctx.window.ALL_EARS_ROUTE_ACT6.records.slice().sort((a,b)=>a.wikiRow-b.wikiRow).map(r=>r.id);
assert(actSixEars.join(',')===actSixWikiRoute.join(','),'Act 6 source steps must follow Wiki row order, not local ID order');
assert(actSix.find(p=>p.id==='eye-before')?.stopIds.includes(321),'Eye of Conquest before-use stop required');
assert(actSix.find(p=>p.id==='eye-after')?.stopIds.includes(322),'Eye of Conquest after-use, before-enter stop required');
assert(actSix.find(p=>p.id==='tukohama-after')?.stopIds.includes(324),'Tukohama/Shavronne before-boss dialogue required');
assert(actSix.find(p=>p.id==='shavronne-after')?.stopIds.includes(326),'Shavronne post-fight Sin dialogue required');
assert(actSix.find(p=>p.id==='nessa-ships')?.stopIds.includes(333),'Nessa/Tarkleigh before Cavern of Anger required');
assert(actSix.find(p=>p.id==='beacon-flag')?.stopIds.includes(336),'Lilly Black Flag before-use stop required');
assert(sameExactSet(actSix.find(p=>p.id==='reef-weylam')?.stopIds||[],[338,339]),'Weylam two dialogs before Tsoagoth required');
assert(actSix.find(p=>p.id==='beacon-flag')?.keyItems.includes('The Black Flag'),'Black Flag original item name must stay available');
assert(steamWalk.patchCertified===false,'Act 6 must remain historical and unverified for patch 3.30');
assert(canonicalSource.includes('src="./steam-act6.js"'),'Act 6 data script must be loaded before UI');


const actSeven=steamWalk.acts[7],actSevenEars=actSeven.flatMap(p=>p.dialogueIds),actSevenLore=actSeven.flatMap(p=>p.loreIds||[]);
const actSevenWp=actSeven.flatMap(p=>p.waypointIds||[]),actSevenSide=actSeven.flatMap(p=>p.sidequestIds||[]);
assert(actSeven.length===19,'Act 7 must have nineteen source- and quest-state-aware phases');
assert(sameExactSet(actSevenEars,d.items.filter(x=>x.act===7).map(x=>x.id)),'Act 7 All Ears: all 45 original local IDs exactly once');
assert(sameExactSet(actSevenLore,lore.entries.filter(x=>x.act===7).map(x=>x.id)),'Act 7 No Stone Unturned: all eight original IDs exactly once');
assert(sameExactSet(actSevenWp,extras.waypoints.filter(x=>x.act===7).map(x=>x.id)),'Act 7 Locomancer: all nine original IDs exactly once');
assert(sameExactSet(actSevenSide,extras.sidequests.filter(x=>x.act===7).map(x=>x.id)),'Act 7 No Loose Ends: all four original IDs exactly once');
assert(actSeven.every(p=>p.id&&p.place&&p.quest&&p.heading&&p.headingEN&&p.actions.length===p.actionsEN.length&&p.actions.length>=2&&(p.stopIds||[]).every(id=>p.dialogueIds.includes(id))),'Act 7 bilingual source steps/STOP must be tied to local IDs in the correct phase');
const actSevenRows=ctx.window.ALL_EARS_ROUTE_ACT7.records;
assert(actSevenRows.length===45&&actSevenRows.every(r=>actSevenEars.includes(r.id)),'Act 7 every historical Wiki row must crosswalk to an original local item even with branched quest order');
assert(actSeven.find(p=>p.id==='broken-bridge-crypt')?.sidequestIds.includes(16)&&actSeven.find(p=>p.id==='broken-bridge-crypt')?.keyItems.includes("Maligaro's Map"),'Silver Locket and Maligaro map must be linked to Broken Bridge/Crypt');
assert(actSeven.find(p=>p.id==='maligaro-after')?.stopIds.includes(369),'Act 7 Sin after Maligaro must be a distinct post-boss STOP');
assert(actSeven.find(p=>p.id==='den-before')?.stopIds.includes(365)&&actSeven.find(p=>p.id==='den-before')?.sourceNote.includes('Fellshrine'),'Helena before The Den and conflicting historical note must remain explicit');
assert(actSeven.find(p=>p.id==='gruthkul-before')?.stopIds.includes(378),'Eramir before killing Gruthkul must use canonical ID 378');
assert(actSeven.find(p=>p.id==='gruthkul-after')?.dialogueIds.includes(381),'Eramir after killing Gruthkul must be a separate stage');
assert(actSeven.find(p=>p.id==='fireflies-return')?.stopIds.includes(382)&&actSeven.find(p=>p.id==='fireflies-return')?.sourceNoteEN.includes('Causeway'),'Seven Fireflies and Yeena-before-Vaal STOP must include source disagreement');
assert(actSeven.find(p=>p.id==='temple-arakaali-after')?.stopIds.includes(384),'Yeena after killing Arakaali before leaving Temple Level 2 must be protected');
assert(actSeven.filter(p=>p.dialogueIds.length===0).length>=3,'Lore/Waypoint-only Act 7 phases must not invent NPC dialogues');
assert(canonicalSource.includes('src="./steam-act7.js"'),'Act 7 script must load in the main page');
assert(steamWalk.patchCertified===false,'Act 7 guide must remain historical and not certified for patch 3.30');
const uiSource=fs.readFileSync(path.join(dir,'hub.js'),'utf8');
assert(uiSource.includes('hubJumpMissing')&&uiSource.includes('dataset.jumpIncomplete')&&uiSource.includes('outstanding=phases.slice(chosen,target)'),'Act 7 UX needs first-unchecked-step recovery and non-silent STOP skipping');
assert(uiSource.includes('if(phase.dialogueIds.length)')&&uiSource.includes('hubSourceDiscrepancy'),'Act 7 source differences need disclosure and zero-dialogue stages must not render fake NPC lists');

const actEight=steamWalk.acts[8],actEightEars=actEight.flatMap(p=>p.dialogueIds),actEightLore=actEight.flatMap(p=>p.loreIds||[]);
const actEightWp=actEight.flatMap(p=>p.waypointIds||[]),actEightSide=actEight.flatMap(p=>p.sidequestIds||[]);
assert(actEight.length===16,'Act 8 must have sixteen area- and quest-state-specific phases');
assert(sameExactSet(actEightEars,d.items.filter(x=>x.act===8).map(x=>x.id)),'Act 8 All Ears 30 original dialogue IDs exactly once');
assert(sameExactSet(actEightLore,lore.entries.filter(x=>x.act===8).map(x=>x.id)),'Act 8 No Stone Unturned: exactly one Official Orders original ID');
assert(sameExactSet(actEightWp,extras.waypoints.filter(x=>x.act===8).map(x=>x.id)),'Act 8 Locomancer: ten original Waypoint IDs exactly once');
assert(sameExactSet(actEightSide,extras.sidequests.filter(x=>x.act===8).map(x=>x.id)),'Act 8 No Loose Ends: four sidequest IDs exactly once');
assert(actEight.every(p=>p.id&&p.place&&p.quest&&p.heading&&p.headingEN&&p.actions.length>=2&&p.actions.length===p.actionsEN.length&&(p.stopIds||[]).every(id=>p.dialogueIds.includes(id))),'Act 8 bilingual stage actions must match and STOP IDs must belong to the correct phase');
const wikiActEight=ctx.window.ALL_EARS_ROUTE_ACT8.records;
assert(wikiActEight.length===30&&sameExactSet(wikiActEight.map(x=>x.id),actEightEars),'Act 8 must map original local IDs to all thirty historical Wiki source rows');
assert(actEight.find(p=>p.id==='doedre-cesspool')?.stopIds.includes(403)&&actEight.find(p=>p.id==='doedre-cesspool')?.sourceNoteEN.includes('legacy'),'Act 8 Sin after Doedre historic caveat and source difference must be retained');
assert(actEight.find(p=>p.id==='doedre-cesspool')?.waypointIds.includes(71),'Act 8 Toxic Conduits waypoint activation is a post-Doedre area-state check');
assert(actEight.find(p=>p.id==='quay-love-pre')?.stopIds.includes(407),'Act 8 Hargan Ankh topic BEFORE Love is Dead completion');
assert(sameExactSet(actEight.find(p=>p.id==='quay-tolman-after')?.stopIds||[],[411,413]),'Act 8 Clarissa Ankh and Tolman AFTER the fight before leaving The Quay');
assert(actEight.find(p=>p.id==='love-return')?.dialogueIds.includes(412),'Act 8 post-completion Maramoa Tolman dialogue local ID 412 not confused with Wiki 412');
assert(sameExactSet(actEight.find(p=>p.id==='yugul-before')?.stopIds||[],[409,410]),'Act 8 Sin then Hargan before Yugul must be tracked as two distinct dialogue IDs');
assert(actEight.find(p=>p.id==='yugul-after')?.sidequestIds.includes(23),'Act 8 Reflection of Terror sidequest is only marked in post-boss phase');
assert(actEight.find(p=>p.id==='grain-gate')?.loreIds.includes(121),'Act 8 Official Orders environmental lore linked to correct Grain Gate phase');
assert(actEight.find(p=>p.id==='orbs-town')?.dialogueIds.includes(414)&&actEight.find(p=>p.id==='orbs-town')?.dialogueIds.includes(415),'Both Sun and Moon Orb town dialogues must unlock after owning BOTH items');
assert(actEight.find(p=>p.id==='sisters-after')?.dialogueIds.includes(416),'Hargan after both Solaris/Lunaris quests must be separate from their intro');
assert(canonicalSource.includes('src="./steam-act8.js"'),'Act 8 route script must load before hub.js');
assert(steamWalk.patchCertified===false,'Act 8 source-led guidance must not claim 3.30 gameplay certification');
const uiActEight=fs.readFileSync(path.join(dir,'hub.js'),'utf8');
assert(uiActEight.includes('["7","8","9","10"].includes(act)'),'Act 8 cannot silently skip prior unresolved STOPs in the phase picker');
assert(uiActEight.includes('legacy.href="./act"+act+"-inventory.json"'),'Act 8 source disagreement link must target the actual historical inventory, not Act 7');


const actNine=steamWalk.acts[9],actTen=steamWalk.acts[10];
const getActIDs=(arr,k)=>arr.flatMap(p=>p[k]||[]);
for(const [act,phases,expectedStages] of [[9,actNine,11],[10,actTen,10]]){
 assert(phases.length===expectedStages,'Acts 9–10 must expose all drafted quest phases');
 assert(sameExactSet(getActIDs(phases,'dialogueIds'),d.items.filter(x=>x.act===act).map(x=>x.id)),'Every canonical Act '+act+' dialogue must appear once');
 assert(sameExactSet(getActIDs(phases,'loreIds'),lore.entries.filter(x=>x.act===act).map(x=>x.id)),'Every canonical Act '+act+' lore must appear once');
 assert(sameExactSet(getActIDs(phases,'waypointIds'),extras.waypoints.filter(x=>x.act===act).map(x=>x.id)),'Every canonical Act '+act+' Waypoint must appear once');
 assert(sameExactSet(getActIDs(phases,'sidequestIds'),extras.sidequests.filter(x=>x.act===act).map(x=>x.id)),'Every canonical Act '+act+' sidequest must appear once');
 assert(phases.every(p=>p.id&&p.place&&p.quest&&p.headingEN&&p.heading&&p.actions.length>=2&&p.actions.length===p.actionsEN.length&&p.stopIds.every(id=>p.dialogueIds.includes(id))),'Act '+act+' bilingual timing or STOP source IDs broken');
 const rows=ctx.window['ALL_EARS_ROUTE_ACT'+act].records;
 assert(sameExactSet(rows.map(x=>x.id),getActIDs(phases,'dialogueIds')),'Act '+act+' Wiki-row-to-original-ID map must cover source exactly');
}
assert(actNine.find(p=>p.id==='desert-storm-blade')?.stopIds.includes(436),'Act9 General Adus before Foothills must be guarded');
assert(actNine.find(p=>p.id==='tunnel-quarry-prepowder')?.stopIds.includes(438),'Act9 Dark Ember must be heard without Trarthan Powder');
assert(sameExactSet(actNine.find(p=>p.id==='garukhan-post')?.stopIds||[],[439,440]),'Act9 post-Garukhan two NPCs must precede ruler choice');
assert(actNine.find(p=>p.id==='ruler-irasha-choice')?.branchChoice==='Irasha','Act9 old 484-ID tracker is only an Irasha branch; never claim Tasuni is equivalent');
assert(actNine.find(p=>p.id==='ruler-irasha-choice')?.sourceNoteEN.includes('no stable')||actNine.find(p=>p.id==='ruler-irasha-choice')?.sourceNoteEN.includes('stable tracker'),'Act9 alternate path cannot invent two local IDs');
assert(sameExactSet(actNine.find(p=>p.id==='ruler-irasha-choice')?.dialogueIds||[],[443,444,441,442]),'Act9 Irasha branch ID crosswalk must be exact even where Wiki source rows differ');
assert(actNine.find(p=>p.id==='powder-acid')?.stopIds.includes(445),'Act9 Sin both ingredients BEFORE Belly guard missing');
assert(sameExactSet(actNine.find(p=>p.id==='trinity-rescue')?.stopIds||[],[448,449]),'Act9 both Weylam lines BEFORE Act10 must be retained');
assert(actNine.find(p=>p.id==='foothills-fortune')?.sidequestIds.includes(26),'Fastis Fortuna tied to Calendar of Fortune near Foothills');
assert(actTen.find(p=>p.id==='safe-passage-docks')?.dialogueIds.includes(471),'Act10 after Safe Passage Tsoatha dialogue missing');
assert(actTen.find(p=>p.id==='reliquary-teardrop')?.sidequestIds.includes(29),'Act10 The Teardrop must be retrieved from Reliquary');
assert(actTen.find(p=>p.id==='ossuary-elixir')?.sidequestIds.includes(30),'Act10 Elixir of Allure must be retrieved from Ossuary');
assert(actTen.find(p=>p.id==='vilenta-controls')?.sidequestIds.includes(28)&&actTen.find(p=>p.id==='vilenta-controls')?.waypointIds.includes(88),'Act10 Vilenta requires The Control Blocks and its Waypoint');
assert(actTen.find(p=>p.id==='chamber-staff')?.loreIds.includes(123)&&actTen.find(p=>p.id==='chamber-staff')?.keyItems.includes('The Staff of Purity'),'Act10 Death and Rebirth Staff and Lore in Desecrated Chambers missing');
assert(actTen.find(p=>p.id==='canals-tract')?.loreIds.includes(124),'Act10 Canals Cultist Tract must precede Kitava');
assert(actTen.find(p=>p.id==='kitava-after')?.dialogueIds.includes(482),'Act10 Lilly after An End to Hunger not represented');
const finalSource=fs.readFileSync(path.join(dir,'index.html'),'utf8');
assert(finalSource.includes('src="./steam-act9.js"')&&finalSource.includes('src="./steam-act10.js"'),'Final Acts must load their historical source scripts');
const finalHub=fs.readFileSync(path.join(dir,'hub.js'),'utf8');
assert(finalHub.includes('["7","8","9","10"].includes(act)'),'Forward dropdown STOP protection must cover Acts 9 and 10');
assert(finalHub.includes('poe-act9-ruler-choice-v1')&&finalHub.includes('saveRulerChoice')&&finalHub.includes('dataset.rulerIntegrity="Tasuni"'),'Act9 ruler branch must be a separate per-character preference and carry warning');
assert(steamWalk.patchCertified===false,'Act9 and Act10 cannot claim 3.30 gameplay certification');

const asset=fs.readFileSync(path.join(dir,'assets/quest-journal-illustration.svg'),'utf8');
assert(asset.includes('ILLUSTRATION ONLY')&&asset.includes('WORLD  /  QUESTS'),'Quest-screen example must be explicitly marked as original illustration');
const banditAsset=fs.readFileSync(path.join(dir,'assets/bandits-quest-illustration.svg'),'utf8');
assert(banditAsset.includes('ILLUSTRATION ONLY')&&banditAsset.includes('Deal with the Bandits'),'Act 2 quest illustration must be self-labelled and tied to its real quest name');
assert(!banditAsset.includes('ก่อนใส่ Strange Glyphs'),'Act 2 mock must not inherit Act 1 alt text');
assert(banditAsset.includes('Check Eramir between kills.'),'Bandits mock must remind players to return to Eramir between kills');
assert((banditAsset.match(/>Act 2<\/text>/g)||[]).length===1,'Act 2 mock must not repeat its active Act tab');
const visualTargets=[
 ["1","mudflats","quest-journal-illustration.svg","Breaking Some Eggs"],
 ["1","prison","brutus-quest-illustration.svg","The Caged Brute"],
 ["1","fairgraves","fairgraves-quest-illustration.svg","The Marooned Mariner"],
 ["2","sins-before-helena","sins-quest-illustration.svg","Intruders in Black"],
 ["2","roots","roots-quest-illustration.svg","The Root of the Problem"],
 ["2","bandit-decisions","bandits-quest-illustration.svg","Deal with the Bandits"],
 ["3","bracelet","clarissa-quest-illustration.svg","Lost in Love"],
 ["4","voll-mines","deshret-quest-illustration.svg","An Indomitable Spirit"],
 ["4","harvest-before","piety-organs-quest-illustration.svg","The Eternal Nightmare"],
 ["5","innocence-sin","act5-innocence-sin.svg","Death to Purity"],
 ["5","ossuary-sin","act5-ossuary-sign.svg","The Ravenous God"],
 ["6","eye-after","act6-karui-eye-states.svg","The Father of War"],
 ["6","reef-weylam","act6-weylam-brine-reef.svg","The Brine King"],
 ["7","den-before","act7-den-helena-stop.svg","The Master of a Million Faces"],
 ["7","fireflies-return","act7-fireflies-yeena-stop.svg","Lighting the Way"],
 ["7","temple-arakaali-after","act7-arakaali-yeena-stop.svg","The Mother of Spiders"],
 ["8","doedre-cesspool","act8-doedre-sin-quest.svg","Essence of the Hag"],
 ["8","quay-tolman-after","act8-tolman-clarissa-quest.svg","Love is Dead"],
 ["8","yugul-before","act8-yugul-preboss-quest.svg","Reflection of Terror"],
 ["9","garukhan-post","act9-feather-branch-decision.svg","The Ruler of Highgate"],
 ["9","powder-acid","act9-ember-two-ingredients.svg","Recurring Nightmare"],
 ["9","trinity-rescue","act9-rescue-before-act10.svg","Recurring Nightmare"],
 ["10","safe-passage-docks","act10-lilly-tsoatha-quest.svg","Safe Passage / Map to Tsoatha"],
 ["10","chamber-staff","act10-bannon-staff-quest.svg","Death and Rebirth"]
];
assert(Object.values(steamWalk.acts).flatMap(x=>x.filter(p=>p.visual)).length===visualTargets.length,'Quest image roster must cover exactly twenty-four sourced high-risk phases');
for(const [act,phaseId,file,quest] of visualTargets){
 const phase=steamWalk.acts[act].find(p=>p.id===phaseId),v=phase?.visual;
 assert(v?.asset==='./assets/'+file&&v.status==='mock-not-in-game'&&v.alt.includes('ภาพ')&&v.source.startsWith('https://www.poewiki.net/wiki/'),'Image must stay phase-specific, sourced and explicitly marked not a screenshot: '+phaseId);
 assert(v.check&&v.title&&v.check.length>=20,'Each image needs a concrete plain-language action outside the image: '+phaseId);
 const svg=fs.readFileSync(path.join(dir,'assets',file),'utf8');
 assert(svg.startsWith('<svg ')&&svg.includes('</svg>')&&svg.includes('NOT AN IN-GAME SCREENSHOT')&&svg.toLowerCase().includes(quest.toLowerCase()),'Illustration needs its correct quest title and conspicuous disclaimer: '+file);
 assert(!/<script[\s>]/i.test(svg),'Quest illustration must remain static SVG without executable scripts: '+file);
}


load('critical-checkpoints.js');
load('poe-critical-language.js');
const checkpointData=ctx.window.POE_CRITICAL_CHECKPOINTS;
const checkpointLanguage=ctx.window.POE_CRITICAL_LANGUAGE;
assert(checkpointLanguage.schema===1&&checkpointLanguage.patchCertified===false,'Critical EN captions must preserve historical non-certified status');
const originalRisk=Object.values(checkpointData.acts).flat(),allRiskIds=originalRisk.map(x=>x.id);
const englishRisk=Object.keys(checkpointLanguage.acts);
assert(allRiskIds.length===39&&englishRisk.length===39&&sameExactSet(allRiskIds,englishRisk),'Exactly 39 canonical historical risk panels must have unique English copies');
for(const stage of originalRisk){
 const text=checkpointLanguage.acts[stage.id];
 assert(Array.isArray(text)&&text.length===4&&text.every(v=>typeof v==='string'&&v.length>25&&!/[\u0E00-\u0E7F]/.test(v)),'English historical risk title, timing, gate and source caveat must be specific: '+stage.id);
 assert(stage.ids.every(id=>d.items.some(item=>item.id===id)),'Historical source IDs cannot be changed for '+stage.id);
 if(stage.stopRule)assert(text[2].length>25,'Missable STOP action cannot be omitted: '+stage.id);
}
const postQuestIds=Object.values(checkpointData.postQuest).flat().map(x=>x.id);
assert(postQuestIds.length===3&&sameExactSet(postQuestIds,Object.keys(checkpointLanguage.postQuest)),'Three original Act 10 post-quest panels must have English copies');
assert(postQuestIds.every(id=>checkpointLanguage.postQuest[id].length===2),'Post-quest English timing must accompany its title');
const criticalHTML=fs.readFileSync(path.join(dir,'index.html'),'utf8');
assert(criticalHTML.includes('src="./poe-critical-language.js"'),'Critical language module must load in the live page');
const criticalHub=fs.readFileSync(path.join(dir,'hub.js'),'utf8');
assert(criticalHub.includes('window.POE_CRITICAL_LANGUAGE?.acts?.[stage.id]')&&criticalHub.includes('displayed?.unlock')&&criticalHub.includes('displayed?.caution'),'Critical UI must translate per-dialogue timing as well as panel headings');
assert(criticalHub.includes('window.POE_CRITICAL_LANGUAGE?.postQuest?.[stage.id]'),'Act10 post-quest notes must use the English source text');
assert(criticalHub.includes('First Bandit you killed')&&criticalHub.includes('Second Bandit you killed'),'Bandit safety selector must use the guidance language');

assert(checkpointData.acts[2].find(x=>x.id==='a2-darkness')?.sourceConflict?.kind==='steam-vs-wiki','Bandit timing contradiction must remain prominently visible');
const guarded=Object.values(checkpointData.acts).flatMap(stages=>stages.filter(s=>s.stopRule));
assert(guarded.length>=20&&guarded.every(s=>s.stopRule.requiredIds.length&&s.stopRule.requiredIds.every(id=>s.ids.includes(id))),'Stop-before quest rules must tie to real per-stage dialogue IDs');
assert(checkpointData.acts[1].find(s=>s.id==='a1-fairgraves').patchAlert.includes('3.29'),'Fairgraves historical accessibility issue must not be suppressed');
const htmlSource=fs.readFileSync(path.join(dir,'index.html'),'utf8');
assert(htmlSource.includes('src="./steam-quest-walkthrough.js"')&&htmlSource.includes('src="./steam-act4.js"'),'Act 4 route file must load after base Steam guide and before UI controller');

const checkpointMapped=new Set(Object.values(checkpointData.acts).flatMap(stages=>stages.flatMap(s=>s.ids)));
const ungroupedWarningRows=sourceWarnings.wikiRows.map(row=>mappedRows.find(r=>r.wikiRow===row)).filter(r=>!checkpointMapped.has(r.id));
assert(ungroupedWarningRows.length===22,'Workbook currently has 22 flagged Wiki rows not yet placed in core quest checkpoints');

assert(checkpointData?.schema===1&&checkpointData.routeSafe===false&&checkpointData.patch==='2025-wiki-legacy-unverified','Critical checkpoints must not imply verified patch-safe quest route');
const checkpointExpected={1:3,2:7,3:5,4:4,5:3,6:6,7:5,8:2,9:4};
assert(Object.entries(checkpointExpected).every(([a,n])=>checkpointData.acts[a]?.length===n),'Risk checkpoint count drift across Acts 1–9');
assert(checkpointData.acts[10]===undefined,'Act 10 must not invent a certified checkpoint without source evidence');
const act10Post=checkpointData.postQuest?.[10]||[];
assert(act10Post.length===3,'Act 10 must contain three post-quest source reminders, not missable danger flags');
assert(act10Post.map(x=>x.ids[0]).join(',')==='471,481,482','Act 10 after-quest dialogue IDs must match the Wiki 2025 source');
for(const item of act10Post){
 assert(item.act===10&&item.source.endsWith('#Act_10')&&item.timing.includes('หลังจบเควสต์'),'Invalid Act 10 post-quest reminder source '+item.id);
 const row=ctx.window.ALL_EARS_ROUTE_ACT10.records.find(r=>r.id===item.ids[0]);
 assert(row&&row.trigger?.startsWith('หลังจบ'),'Act 10 post-quest should be derived from actual route trigger '+item.id);
}

let stepRows=0;
for(const [act,list] of Object.entries(checkpointData.acts)){
 const stageIds=new Set();
 for(const stage of list){
  assert(!stageIds.has(stage.id),'Repeated stage identifier '+stage.id);stageIds.add(stage.id);
  assert(stage.act===Number(act)&&stage.before&&stage.action&&stage.risk&&stage.source.includes('Guide:All_Ears_achievement'),'Incomplete critical risk source '+stage.id);
  assert(stage.ids.length>0,'Empty checkpoint '+stage.id);
  for(const id of stage.ids){stepRows++;
   const item=d.items.find(x=>x.id===id);
   assert(!!item&&item.act===Number(act),'Checkpoint ID not in Act '+stage.id+' #'+id);
   const route=ctx.window['ALL_EARS_ROUTE_ACT'+act];
   assert(route.records.some(x=>x.id===id),'Checkpoint not linked to wiki row '+stage.id+' #'+id);
  }
 }
}
assert(stepRows===72,'Critical checkpoint crosswalk must cover 72 explicit source-linked dialogue references');
const checkpointSource=fs.readFileSync(path.join(dir,'hub.js'),'utf8');
assert(checkpointSource.includes('const sorted=[...stages];')&&!checkpointSource.includes('Number(b.priority==="critical")'),'Urgency must not reorder checkpoint progression');
assert(checkpointSource.includes('hubCheckpointRowTrigger')&&checkpointSource.includes('hubCheckpointRowWarning'),'Per-dialogue unlock timing and warnings must be visible in expanded stage');

for(let act=4;act<=9;act++){
 const covered=new Set(checkpointData.acts[act].flatMap(s=>s.ids));
 const flagged=ctx.window['ALL_EARS_ROUTE_ACT'+act].records.filter(r=>r.before);
 assert(flagged.every(r=>covered.has(r.id)),'Not all existing source flagged warnings are accessible for Act '+act);
}
assert(checkpointData.acts[3].find(x=>x.id==='a3-clarissa').ids.includes(118),'Clarissa pre-handoff source row missing');
assert(checkpointData.acts[3].find(x=>x.id==='a3-piety').ids.includes(161),'Piety pre-boss source row missing');
load('guide-descriptions.js');
const descriptions=ctx.window.POE_ITEM_DESCRIPTIONS;
assert(descriptions.schema===1&&descriptions.certifiedFor330===false,'Guide descriptions must remain patch-unverified');
let descChecked=0;
for(const [type,records] of Object.entries({ears:d.items,lore:lore.entries,waypoints:extras.waypoints,sidequests:extras.sidequests})){
 for(const item of records){
  const g=descriptions.get(type,item);descChecked++;
  assert(g&&g.action&&g.source&&g.sourceLabel&&g.patchCertified===false,'Guide description missing/provenance invalid '+type+'/'+item.id);
  assert(!/^(DO NOT|Do not|After |Before |First talk|Talk to )/.test(g.caution||''),'Untranslated caution: '+type+'/'+item.id);
  assert(!/^(After |Before |First talk)/.test(g.unlock||''),'Untranslated prerequisite: '+type+'/'+item.id);
 }
}
assert(descChecked===745,'Expected contextual help for all 745 entries');
assert(descriptions.get('ears',d.items.find(x=>x.id===21)).caution.includes('The Fetid Pool'),'Act 1 missable must be explained');
assert(descriptions.get('ears',d.items.find(x=>x.id===118)).caution.includes('Clarissa'),'Act 3 warning must be translated');
assert(descriptions.get('lore',lore.entries.find(x=>x.id===1)).tip.includes('ชื่อจดหมายอาจออกซ้ำ'),'Random Letters of Exile explanation missing');
assert(descriptions.get('lore',lore.entries.find(x=>x.id===56)).tip.includes('Instance'),'Random Library explanation missing');
assert(descriptions.get('lore',lore.entries.find(x=>x.id===125)).caution.includes('3.30'),'Vaal patch caveat missing');
const firstBranch=d.items.find(x=>x.id===89),secondBranch=d.items.find(x=>x.id===101);
assert(descriptions.get('ears',firstBranch,{first:'Alira'}).displayLabel.includes('Alira'),'Act 2 first-kill branch must follow player choice');
assert(descriptions.get('ears',firstBranch,{first:'Oak'}).action.includes('“Oak”'),'Act 2 alternative first-kill branch incorrect');
assert(descriptions.get('ears',secondBranch,{first:'Alira',second:'Kraityn'}).displayLabel.includes('Oak'),'Act 2 second-kill branch must show surviving bandit');
assert(descriptions.get('ears',secondBranch,{first:'Oak',second:'Alira'}).action.includes('“Kraityn”'),'Act 2 alternate survivor case incorrect');
assert(descriptions.get('ears',firstBranch,{}).displayLabel.includes('Bandit ที่ฆ่าคนแรก'),'Act 2 unknown branch must not assume one fixed bandit');


const firstEN=descriptions.get('ears',firstBranch,{first:'Alira'});
const secondEN=descriptions.get('ears',secondBranch,{first:'Alira',second:'Kraityn'});
const alternateEN=descriptions.get('ears',secondBranch,{first:'Oak',second:'Alira'});
assert(firstEN.displayLabelEN.includes('First defeated Bandit (Alira)')&&firstEN.actionEN.includes('BEFORE fighting the second'),'Act2 first Bandit English label and next-kill deadline must use selected branch');
assert(secondEN.displayLabelEN.includes('Surviving Bandit (Oak)')&&secondEN.actionEN.includes('Oak is still alive'),'Act2 surviving Bandit English label cannot show an unrelated branch');
assert(alternateEN.actionEN.includes('Kraityn is still alive')&&alternateEN.displayLabelEN.includes('Kraityn'),'Act2 alternate surviving Bandit English copy must follow the user choice');
assert(locale.englishHelp('ears',firstBranch,firstEN).action.includes('Alira')&&locale.englishHelp('ears',firstBranch,firstEN).caution.includes('second Bandit'),'English Act2 row-level instructions must preserve the first-kill-before-second rule');
assert(locale.englishHelp('ears',secondBranch,secondEN).action.includes('Oak')&&locale.englishHelp('ears',secondBranch,secondEN).caution.includes('third Bandit'),'English Act2 survivor context must be safe before the third kill');
assert(locale.englishHelp('ears',d.items.find(x=>x.id===21),descriptions.get('ears',d.items.find(x=>x.id===21))).unlock.includes('Mud Flats'),'Act1 detailed English row must be linked to its correct quest state');
const loreLetter=lore.entries.find(x=>x.id===1),loreLibrary=lore.entries.find(x=>x.area==='The Library'),loreLab=lore.entries.find(x=>x.act==='Labyrinth'),loreVaal=lore.entries.find(x=>x.act==='Vaal');
assert(locale.englishHelp('lore',loreLetter,descriptions.get('lore',loreLetter)).caution.includes('random'),'English Letters of Exile duplicates need explicit warning');
assert(locale.englishHelp('lore',loreLibrary,descriptions.get('lore',loreLibrary)).unlock.includes('another instance'),'English Library book search must mention instance repeats');
assert(locale.englishHelp('lore',loreLab,descriptions.get('lore',loreLab)).caution.includes('rooms'),'English Labyrinth instructions must not imply a fixed daily layout');
assert(locale.englishHelp('lore',loreVaal,descriptions.get('lore',loreVaal)).caution.includes('Map Device'),'English Vaal lore instructions must reject obsolete map-device advice');
assert(locale.englishHelp('sidequests',extras.sidequests[0],descriptions.get('sidequests',extras.sidequests[0])).caution.includes('quest'),'English sidequest guide must require an actual turn-in/completion check');
const enCaveat=fs.readFileSync(path.join(dir,'hub.js'),'utf8');
assert(enCaveat.includes('hint.displayLabelEN'),'Act2 branch label must obey the selected guidance language');


const auditedEnglishRiskRows=[];
for(let act=1;act<=10;act++){
 for(const sourceRow of ctx.window['ALL_EARS_ROUTE_ACT'+act].records.filter(r=>r.before)){
   const item=d.items.find(x=>x.id===sourceRow.id);
   const extraContext=act===2&&[89,101].includes(sourceRow.id)?{first:"Alira",second:"Kraityn"}:undefined;
   const copy=locale.englishHelp('ears',item,descriptions.get('ears',item,extraContext));
   assert(copy.caution&&!copy.caution.startsWith("Potentially missable")&&!copy.caution.startsWith("Quest-state-sensitive"),'Source-flagged missable warning must have specific English text: Act '+act+' / ID '+item.id);
   assert(!/[\u0E00-\u0E7F]/.test(copy.caution||''),'Untranslated Thai source warning in English: Act '+act+' / ID '+item.id);
   auditedEnglishRiskRows.push(item.id);
 }
}
assert(auditedEnglishRiskRows.length===62,'All 62 historical source-flagged warnings must retain English context across ten Acts');
const warnings=route.records.filter(x=>x.before);
console.log(JSON.stringify({items:d.items.length,actCounts:expected,routeRows:route.records.length,warningRows:warnings.length,patches:patches.profiles.map(p=>({id:p.id,status:p.status})),errors},null,2));
if(errors.length)process.exitCode=1;
