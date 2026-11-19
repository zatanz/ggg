/* Full campaign route structural release gate.
 * This is a source/data consistency test, NOT in-game 3.30 certification.
 * Run from repository root: node poe-all-ears/validate-route-closure.cjs
 */
"use strict";
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm");
const dir=__dirname,ctx={window:{}},errors=[];
function assert(condition,message){if(!condition)errors.push(message)}
function load(filename){
  const source=fs.readFileSync(path.join(dir,filename),"utf8");
  vm.runInNewContext(source,ctx,{filename});
}
[
  "data.js","approved-guidance.js","lore-data.js","extra-data.js",
  "steam-quest-walkthrough.js","poe-acts123-bilingual.js",
  "steam-act4.js","steam-act5.js","steam-act6.js","steam-act7.js",
  "steam-act8.js","steam-act9.js","steam-act10.js",
  "route-bindings.js","special-lore-guide.js"
].forEach(load);
const W=ctx.window;
const guide=W.POE_STEAM_WALK,items=W.ALL_EARS_DATA.items,
      lore=W.NO_STONE_DATA.entries,waypoints=W.POE_EXTRA_TRACKERS.waypoints,
      sidequests=W.POE_EXTRA_TRACKERS.sidequests,special=W.POE_SPECIAL_LORE;
const categorySpecs=[
 {key:"dialogueIds",kind:"All Ears",source:items,expected:484,campaign:484,include:x=>true},
 {key:"loreIds",kind:"Lore",source:lore,expected:140,campaign:114,include:x=>typeof x.act==="number"},
 {key:"waypointIds",kind:"Waypoints",source:waypoints,expected:91,campaign:88,include:x=>typeof x.act==="number"},
 {key:"sidequestIds",kind:"Side Quests",source:sidequests,expected:30,campaign:30,include:x=>true}
];
const sourceByType=Object.fromEntries(categorySpecs.map(spec=>[
 spec.key,new Map(spec.source.map(record=>[record.id,record]))
]));
for(const spec of categorySpecs){
 assert(spec.source.length===spec.expected,spec.kind+": expected canonical source count "+spec.expected+", got "+spec.source.length);
 assert(sourceByType[spec.key].size===spec.source.length,spec.kind+": duplicate canonical source IDs");
}
assert(guide.patchCertified===false,"Historical guide must not be marked 3.30 certified");
assert(typeof guide.source==="string"&&guide.source.includes("steamcommunity.com"),"Steam guide source link missing");
assert(typeof guide.wiki==="string"&&guide.wiki.includes("poewiki.net"),"Wiki guide source link missing");
const summaries=[],allRefs=Object.fromEntries(categorySpecs.map(x=>[x.key,[]]));
let stagesCount=0,stopCount=0,conflictCount=0,lookbackCount=0;
for(let act=1;act<=10;act++){
 const phases=guide.acts[act],seenPhaseIds=new Set();
 assert(Array.isArray(phases)&&phases.length>0,"Missing or empty Act "+act+" route");
 if(!phases)continue;
 let actStops=0;
 for(let i=0;i<phases.length;i++){
  const phase=phases[i],prefix="Act "+act+" "+String(i+1).padStart(2,"0")+" "+phase.id;
  stagesCount++;
  assert(!!phase.id&&!seenPhaseIds.has(phase.id),prefix+": missing or duplicate phase identity");
  seenPhaseIds.add(phase.id);
  assert(typeof phase.place==="string"&&phase.place.length>=3,prefix+": missing player area");
  assert(typeof phase.quest==="string"&&phase.quest.length>=3,prefix+": missing quest context");
  assert(typeof phase.heading==="string"&&phase.heading.length>=5,prefix+": missing Thai stage heading");
  assert(typeof phase.headingEN==="string"&&phase.headingEN.length>=5,prefix+": missing English stage heading");
  assert(Array.isArray(phase.actions)&&phase.actions.length>0&&phase.actions.every(x=>typeof x==="string"&&x.length>=8),prefix+": missing Thai actions");
  assert(Array.isArray(phase.actionsEN)&&phase.actionsEN.length===phase.actions.length&&phase.actionsEN.every(x=>typeof x==="string"&&x.length>=8),prefix+": English action count/text mismatch");
  assert(["historical","historical-source-only","conflict"].includes(phase.confidence),prefix+": unrecognized source confidence");
  if(phase.confidence==="conflict"){
   conflictCount++;
   assert(!!(phase.sourceConflict||phase.patchProblem||phase.sourceNote||phase.sourceNoteEN),prefix+": conflict status lacks explanation");
  }
  for(const spec of categorySpecs){
   const values=phase[spec.key]||[],prefix2=prefix+" "+spec.kind;
   assert(Array.isArray(values),prefix2+": IDs not an array");
   if(!Array.isArray(values))continue;
   assert(values.every(x=>Number.isInteger(x)),prefix2+": noninteger ID");
   assert(new Set(values).size===values.length,prefix2+": duplicate ID within step");
   for(const id of values){
    const record=sourceByType[spec.key].get(id);
    assert(!!record,prefix2+": ID "+id+" absent from source");
    if(record)assert(record.act===act,prefix2+": ID "+id+" belongs to "+record.act+" not "+act);
    allRefs[spec.key].push(id);
   }
  }
  if(phase.stop){
   stopCount++;actStops++;
   assert(typeof phase.stop==="string"&&phase.stop.length>=8,prefix+": empty STOP explanation");
   assert(typeof phase.stopEN==="string"&&phase.stopEN.length>=8,prefix+": missing English STOP explanation");
   const requirements=[["stopIds","dialogueIds"],["stopWaypointIds","waypointIds"]];
   for(const [stopField,refField] of requirements){
    const requirementsIDs=phase[stopField]||[];
    assert(Array.isArray(requirementsIDs),prefix+": "+stopField+" is not an array");
    if(!Array.isArray(requirementsIDs))continue;
    assert(new Set(requirementsIDs).size===requirementsIDs.length,prefix+": duplicate "+stopField);
    for(const id of requirementsIDs){
     const idx=phases.findIndex(p=>(p[refField]||[]).includes(id));
     assert(idx>=0,prefix+": "+stopField+" #"+id+" has no linked task in this Act");
     assert(idx<=i,prefix+": "+stopField+" #"+id+" points to a FUTURE stage");
     if(idx>=0&&idx<i)lookbackCount++;
    }
   }
  }else{
   assert(!(phase.stopIds||[]).length&&!((phase.stopWaypointIds||[]).length),prefix+": STOP IDs without a visible STOP");
  }
 }
 summaries.push({act,stages:phases.length,stops:actStops});
}
assert(stagesCount===129,"Expected 129 campaign phases; found "+stagesCount);
assert(stopCount===62,"Expected 62 STOP stages after Act 1 Ship Graveyard caution; found "+stopCount);
assert(conflictCount===4,"Expected 4 source-conflict stages; found "+conflictCount);
for(const spec of categorySpecs){
 const refs=allRefs[spec.key],unique=new Set(refs),prefix=spec.kind;
 assert(refs.length===spec.campaign,prefix+": "+refs.length+" campaign IDs, expected "+spec.campaign);
 assert(unique.size===refs.length,prefix+": canonical ID is attached to multiple stages");
 // Campaign fields deliberately exclude special-area lore and the Labyrinth waypoint.
 const expectedCampaign=new Set(spec.source.filter(spec.include).map(x=>x.id));
 if(spec.key==="loreIds"){
  const specialLore=new Set([...special.labyrinth.ids,...special.vaal.ids]);
  assert(specialLore.size===26,"Expected 26 special Labyrinth / Vaal Lore IDs");
  for(const id of specialLore)assert(!unique.has(id),"Special Lore #"+id+" must not be duplicated inside campaign");
  for(const id of spec.source)if(!specialLore.has(id.id))assert(unique.has(id.id),"Campaign Lore #"+id.id+" absent from the 129-stage route");
 }else if(spec.key==="waypointIds"){
  for(let id=1;id<=89;id++)if(id!==35)assert(unique.has(id),"Campaign Waypoint #"+id+" absent from the route");
  assert(!unique.has(35)&&!unique.has(90)&&!unique.has(91),"Labyrinth and obsolete Epilogue waypoints must not count as campaign");
  assert(waypoints.find(x=>x.id===35)?.act==="Labyrinth","Labyrinth Waypoint #35 must remain in the special area");
  assert(waypoints.find(x=>x.id===90)?.act==="Epilogue"&&waypoints.find(x=>x.id===91)?.act==="Epilogue","Legacy Epilogue waypoint IDs must remain backup-compatible but inactive");
 }else{
  for(const id of expectedCampaign)assert(unique.has(id),prefix+": canonical #"+id+" is not attached to a stage");
 }
}
const bindings=W.POE_ROUTE_BINDINGS||[];
assert(bindings.length===67,"Expected 67 editorial route bindings; found "+bindings.length);
const bindingTypes={lore:25,waypoints:34,sidequests:8};
for(const [type,n] of Object.entries(bindingTypes))assert(bindings.filter(x=>x.type===type).length===n,type+": expected "+n+" supplementary route links");
assert(special.labyrinth.ids.length===10&&special.vaal.ids.length===16,"Lore special-area quantities must remain 10 + 16");
assert(lookbackCount===6,"Expected 6 cross-stage STOP ID dependencies (Silk #57 and five Darkness topics), found "+lookbackCount);
const act1=guide.acts[1];
assert(act1.find(x=>x.id==="prisoners-gate")?.stopIds.join(",")==="31","Act 1 Prisoner's Gate source caution must prevent silent Ship Graveyard progression");
assert(act1.find(x=>x.id==="pool")?.sidequestIds.includes(2)&&act1.find(x=>x.id==="pool")?.actions.join(" ").includes("The Flooded Depths"),"Act 1 sidequest #2 must explain how to reach The Flooded Depths");
const hub=fs.readFileSync(path.join(dir,"hub.js"),"utf8");
assert(hub.includes('const prior=phases.findIndex(entry=>entry.id!==phase.id&&pending.some(id=>(entry.dialogueIds||[]).includes(id)))'),"The live UI must still expose a previous-stage review button for cross-stage STOPs");
assert(hub.includes('review.onclick=()=>goto(prior,false,"task")'),"Cross-stage STOP review button must navigate to the earlier dialogue");
const patch=fs.readFileSync(path.join(dir,"patches.js"),"utf8");
assert(patch.includes("released-unverified"),"Patch 3.30 must remain explicitly game-unverified");
if(errors.length){
 console.error("FULL ROUTE QA FAILED ("+errors.length+" issues):");
 errors.forEach((x,i)=>console.error((i+1)+". "+x));
 process.exit(1);
}
console.log("FULL ROUTE STRUCTURAL QA PASS: "+stagesCount+" stages, "+stopCount+" STOPs, "+conflictCount+" conflict stages, "+lookbackCount+" cross-stage STOP links.");
console.log("Canonical campaign references (nonduplicate): "+categorySpecs.map(x=>x.kind+" "+allRefs[x.key].length).join(" | "));
console.log("Special scope: 10 Labyrinth Lore + 16 Vaal Lore + 1 Labyrinth Waypoint; Karui Shores separate; Epilogue 90/91 retained only for backups.");
console.log("Acts: "+summaries.map(x=>x.act+"="+x.stages+" stages/"+x.stops+" STOPs").join("; "));
console.log("SOURCE-LEVEL STRUCTURAL PASS ONLY. This does NOT certify PoE 3.30 dialogue availability, source correctness, or actual achievement completion.");
