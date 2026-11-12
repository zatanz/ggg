/* Unified Achievement Companion: progressive single-page UI. Old All Ears v1 stays canonical. */
(function(){
"use strict";
const E=window.ALL_EARS_DATA,L=window.NO_STONE_DATA,X=window.POE_EXTRA_TRACKERS,B=window.POE_HUB_BRIDGE;
if(!E||!L||!X||!B){return;}
const MAIN="poe-all-ears-user-data-v1",LORE="poe-companion-lore-v1",EXTRA="poe-companion-extras-v1",HUB="poe-unified-review-v2";
const collections={ears:E.items,lore:L.entries,waypoints:X.waypoints,sidequests:X.sidequests};
const totals={ears:484,lore:140,waypoints:91,sidequests:30};
const rewardIndex=window.POE_QUEST_REWARDS?.acts||[];
const rewardsByQuest=new Map(rewardIndex.flatMap(a=>a.quests.map(q=>[String(a.act)+"|"+q.name,q])));
const rewardTypes={passive:"Passive Skill Point",refund:"Passive Refund Point",gem:"Skill / Support Gem",item:"ไอเทม / อุปกรณ์",choice:"ตัวเลือก Bandits"};
const rewardPriority=q=>q.type==="passive"?"ควรเก็บ · Passive Point":q.type==="refund"?"ควรเก็บ · Refund Point":q.type==="choice"?"ระวัง · มีผลต่อทางเลือก":"ตามความต้องการ · ไม่ใช่รางวัล Achievement";
const itemPriority=(type,item,guide)=>type==="ears"&&guide?.caution?"ระวังพลาด":type==="sidequests"?"จำเป็นต่อ No Loose Ends":type==="ears"?"จำเป็นต่อ All Ears":type==="lore"?"จำเป็นต่อ No Stone Unturned":"จำเป็นต่อ Locomancer";

const names={ears:"All Ears",lore:"No Stone Unturned",waypoints:"Locomancer",sidequests:"No Loose Ends"};
const uiNames={ears:"บทสนทนา NPC",lore:"สำรวจ Lore",waypoints:"จุดวาร์ป (Waypoint)",sidequests:"เควสต์รอง"};
const verbs={ears:"ฟังแล้ว",lore:"สำรวจแล้ว",waypoints:"เปิดแล้ว",sidequests:"ทำสำเร็จ"};
const routeOpen=new Set(["ears"]);
const criticalOpen=new Set(["a1-glyphs","a2-darkness","a3-clarissa","a4-deshret","a5-utula","a6-karui","a7-den","a8-love","a9-adus"]);
const routeKeys=[1,2,3,4,5,6,7,8,9,10],routes={};
routeKeys.forEach(a=>{const r=window["ALL_EARS_ROUTE_ACT"+a];if(r&&Array.isArray(r.records))routes[a]=r.records;});
const state={tab:"route",collectionType:"ears",act:"1",routeAct:"1",collectionAct:"all",status:"all",search:"",limit:40,reviewType:"lore",gameCount:""};
const $=id=>document.getElementById(id);
function el(tag,text,cls){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;}
function safeParse(key){try{return JSON.parse(localStorage.getItem(key))||null;}catch(e){return null;}}
function validIDs(type,ids){const max=totals[type];return Array.isArray(ids)?[...new Set(ids.filter(i=>Number.isInteger(i)&&i>=1&&i<=max))].sort((a,b)=>a-b):[];}
function active(){const s=B.read(),id=$("character").value;return s.characters.find(c=>c.id===id)||s.characters.find(c=>c.id===s.active)||s.characters[0];}
function entries(type){const char=active();if(!char)return [];if(type==="ears")return validIDs("ears",char.checked);
const raw=safeParse(type==="lore"?LORE:EXTRA),rec=raw&&raw.version===1&&raw.byCharacter&&raw.byCharacter[char.id];
return validIDs(type,rec&&rec[type]);}
function progress(type){return entries(type).length;}
function getBackupState(key){const data=safeParse(key);return data&&data.version===1&&data.byCharacter&&typeof data.byCharacter==="object"&&!Array.isArray(data.byCharacter)?data:{version:1,byCharacter:{}};}
function writeMarks(type,id,done){if(type==="ears"){const ok=B.mark(id,done);if(ok)refresh();return;}
const key=type==="lore"?LORE:EXTRA, char=active();if(!char)return;
const s=getBackupState(key),rec=s.byCharacter[char.id]||{},before=validIDs(type,rec[type]),next=done?[...new Set(before.concat(id))]:before.filter(i=>i!==id);
rec[type]=validIDs(type,next);s.byCharacter[char.id]=rec;
try{localStorage.setItem(key,JSON.stringify(s));refresh();}catch(e){alert("บันทึกข้อมูลไม่ได้ กรุณาสำรองข้อมูลและตรวจพื้นที่เก็บข้อมูลเบราว์เซอร์");}}
function getRisk(x){if(x.type!=="ears")return null;return (routes[x.act]||[]).find(r=>r.id===x.id)||null;}
function sortedAllEars(act){const base=E.items.filter(x=>String(x.act)===String(act)),r=routes[Number(act)]||[];if(!r.length)return base;
const byId=new Map(base.map(x=>[x.id,x]));return r.map(x=>byId.get(x.id)).filter(Boolean);}
function records(type,act){if(type==="ears"){if(act==="all")return E.items;return sortedAllEars(act);}return collections[type].filter(x=>act==="all"||String(x.act)===String(act));}
function label(x,type){if(type==="ears"&&x.act===2){const hint=window.POE_ITEM_DESCRIPTIONS?.get(type,x,getSafety());if(hint?.displayLabel)return hint.displayLabel;}return type==="ears"?x.npc+" — "+x.dialog:x.name;}
function area(x,type){return type==="ears"?"Act "+x.act+(getRisk({id:x.id,act:x.act,type})?.area?" · "+getRisk({id:x.id,act:x.act,type}).area:""):type==="lore"?x.area:type==="waypoints"?"Waypoint · "+x.act:"Side Quest · Act "+x.act;}
function warning(x,type){if(type==="ears"){const route=getRisk({id:x.id,act:x.act,type});return route&&(route.before||route.trigger)||x.note||"";}return type==="lore"&&x.random?"จุดปรากฏหรือเนื้อหาอาจสุ่ม ต้องสำรวจซ้ำหรือเข้า Instance ใหม่":"";}
function renderSummary(){const target=$("hubStats");target.replaceChildren();Object.keys(names).forEach(k=>{const card=el("button",undefined,"hubStat");card.type="button";card.setAttribute("aria-label","เปิด "+names[k]);const count=progress(k);
card.append(el("span",names[k]+" · "+uiNames[k]),el("b",count+" / "+totals[k]),el("span",count===totals[k]?"บันทึกครบในเว็บ · ยังต้องเทียบเกม":"เหลือ "+(totals[k]-count)+" รายการ"));card.onclick=()=>openTab(k);target.append(card);});}
function itemCard(type,x){
const done=entries(type).includes(x.id),guide=window.POE_ITEM_DESCRIPTIONS?.get(type,x,type==="ears"&&x.act===2?getSafety():undefined),row=el("div",undefined,"hubItem"+(done?" done":"")),box=el("input"),info=el("div",undefined,"hubText");
row.dataset.state=done?"done":"todo";
box.type="checkbox";box.checked=done;box.setAttribute("aria-label",verbs[type]+" — "+label(x,type));
box.addEventListener("change",()=>{if(type==="ears"&&box.checked&&guide?.caution&&!confirm("ระวังพลาดบทสนทนา (ข้อมูล Wiki เก่า ยังไม่รับรอง 3.30):\n"+guide.caution+"\n\nคุณฟังหัวข้อนี้ในเกมแล้วใช่หรือไม่?")){box.checked=false;return;}writeMarks(type,x.id,box.checked);});
const name=el("div",undefined,"hubName");name.append(document.createTextNode(label(x,type)));info.append(name);
const meta=el("div",undefined,"hubCompactMeta"),priority=el("span",itemPriority(type,x,guide),"hubPriority"+(type==="ears"&&guide?.caution?" hubUrgent":""));
meta.append(priority);
if(type==="sidequests"){
const reward=rewardsByQuest.get(String(x.act)+"|"+x.name);
if(reward)meta.append(el("span","รางวัล: "+reward.reward,"hubRewardPreview"));
}
info.append(meta);
if(type==="ears"&&guide?.caution)info.append(el("div","ก่อนทำต่อ: "+guide.caution,"hubRisk"));
if(guide){
 const detail=el("details",undefined,"hubItemHelp"),head=el("summary","วิธีเก็บ · เงื่อนไข · ที่มา"),body=el("div",undefined,"hubItemHelpBody");detail.append(head);
 function fact(label,value){if(!value)return;const line=el("div",undefined,"hubFact");line.append(el("strong",label),el("span",value));body.append(line);}
 fact("วิธีเก็บ",guide.action);fact("พื้นที่ / NPC",guide.location);fact("เงื่อนไข",guide.unlock);fact("ห้ามพลาด",guide.caution);fact("หมายเหตุ",guide.tip);
 if(type==="sidequests"){const reward=rewardsByQuest.get(String(x.act)+"|"+x.name);if(reward)fact("รางวัลเควสต์",reward.reward+" (ข้อมูลเก่า ไม่ใช่รางวัล Achievement)");}
 if(!guide.detailsKnown)body.append(el("p","ยังไม่มีรายละเอียดเงื่อนไขรายรายการที่ยืนยันกับเกม 3.30","hubUnverifiedText"));
 const source=el("a","ดูแหล่งอ้างอิง");source.href=guide.source;source.target="_blank";source.rel="noopener noreferrer";
 body.append(el("p","ข้อมูลอ้างอิงเก่า · ยังไม่ยืนยันกับแพตช์ 3.30","hubSubtle"),source);detail.append(body);info.append(detail);
}
const stateText=el("span",done?"เก็บแล้ว":"ยังไม่เก็บ","hubItemState");row.append(box,info,stateText);return row;
}
function filterRows(type,act){const done=new Set(entries(type)),query=state.search.toLowerCase();return records(type,act).filter(x=> (state.status==="all"||(state.status==="done"?done.has(x.id):!done.has(x.id)))&&(!query||(label(x,type)+" "+area(x,type)+" "+(window.POE_ITEM_DESCRIPTIONS?.get(type,x,type==="ears"&&x.act===2?getSafety():undefined)?.action||"")+" "+(window.POE_ITEM_DESCRIPTIONS?.get(type,x)?.caution||"")).toLowerCase().includes(query)));}
function addList(target,type,act,max,compact=false){const list=filterRows(type,act),shown=max?list.slice(0,max):list;
if(!compact){const heading=el("div",undefined,"hubInlineRow");heading.append(el("h3",uiNames[type]),el("span",list.length+" รายการที่แสดง","hubSubtle"));target.append(heading);}
if(!list.length){target.append(el("div","ไม่มีรายการตามตัวกรอง","hubEmpty"));return;}
const container=el("div",undefined,"hubList");let oldArea="";
shown.forEach(x=>{
if(state.tab==="route"&&type!=="ears"&&type!=="sidequests"){const group=area(x,type);if(oldArea!==group){container.append(el("div",group,"hubGroup"));oldArea=group;}}
container.append(itemCard(type,x));});target.append(container);
if(shown.length<list.length){const more=el("button","ดูเพิ่มอีก "+(list.length-shown.length)+" รายการ","hubShowMore");more.onclick=()=>{state.limit=1000;renderView();};target.append(more);}}
function section(title){const d=el("section",undefined,"hubSection");d.append(el("h2",title));return d;}
function renderActRewards(act){
const group=rewardIndex.find(x=>String(x.act)===String(act));if(!group||!group.quests.length)return null;
const chapter=el("details",undefined,"hubChapter hubRewards");chapter.dataset.extra="rewards";
const summary=el("summary"),heading=el("span",undefined,"hubChapterTitle");
const major=group.quests.filter(q=>q.type==="passive"||q.type==="refund").length;
heading.append(el("strong","รางวัลเควสต์ใน Act นี้"),el("small",major+" เควสต์ให้ Passive/Refund Point · "+group.quests.length+" เควสต์ในฐานข้อมูล"));
summary.append(heading,el("span","เปิดดูรางวัล","hubChapterCount"));chapter.append(summary);
const content=el("div",undefined,"hubChapterBody");
content.append(el("p","แสดงรางวัลตามเควสต์ (ข้อมูลอ้างอิงเดิม) · ไม่ใช่รายการที่นับใน Achievement · คำว่า ควรเก็บ หมายถึงรางวัล Passive/Refund Point ไม่ได้ยืนยันว่าเป็นเควสต์จำเป็นต่อเนื้อเรื่อง","hubSubtle"));
const list=el("div",undefined,"hubRewardList");
for(const q of [...group.quests].sort((a,b)=>Number(["passive","refund","choice"].includes(b.type))-Number(["passive","refund","choice"].includes(a.type)))){
const card=el("div",undefined,"hubRewardRow"),title=el("div",undefined,"hubRewardName");
title.append(el("strong",q.name),el("span",rewardPriority(q),"hubRewardKind"));
card.append(title,el("p",q.reward,"hubRewardText"));
const achievement=collections.sidequests.some(item=>String(item.act)===String(act)&&item.name===q.name);
card.append(el("p",achievement?"จำเป็นต่อ No Loose Ends · เมื่อทำเควสต์นี้สำเร็จ ให้ทำเครื่องหมายในหมวดเควสต์รอง":"ไม่อยู่ในรายการ No Loose Ends ที่ใช้อ้างอิง · ไม่ได้หมายความว่าข้ามเควสต์เนื้อเรื่องได้","hubSubtle"));
list.append(card);}
content.append(list);
const source=el("a","ตรวจรางวัลตามแพตช์จาก PoE Wiki");source.href=window.POE_QUEST_REWARDS.source;source.target="_blank";source.rel="noopener noreferrer";content.append(source);chapter.append(content);return chapter;
}
function criticalPanel(act){
 const all=window.POE_CRITICAL_CHECKPOINTS;
 const stages=all?.acts?.[act]||[];
 if(!stages.length)return null;
 const section=el("section",undefined,"hubCritical");
 section.dataset.criticalAct=act;
 const title=el("div",undefined,"hubCriticalTitle");
 title.append(el("h3","ก่อนเดินเควสต์ต่อ · จุดที่อาจพลาด"),el("p","กลุ่มจุดเสี่ยงจากคู่มือปี 2025 · แต่ละบทสนทนาอาจเปิดคนละช่วง ให้ดูเงื่อนไขรายบรรทัดก่อนทำ · ไม่ใช่ลำดับเดินเควสต์ครบทุกเส้นทาง และยังไม่รับรอง 3.30","hubSubtle"));
 section.append(title);
 const already=new Set(entries("ears"));
 const sorted=[...stages]; // Preserve authored stage/source grouping; urgency is a label, never reorders quest timing.
 const riskLeft=sorted.filter(s=>!s.ids.every(id=>already.has(id))).length;
 section.append(el("div","ยังมี "+riskLeft+" / "+stages.length+" กลุ่มที่ทำเครื่องหมายไม่ครบ (บันทึกด้วยมือ)","hubCriticalCount"));
 const idToEntry=new Map(E.items.map(x=>[x.id,x]));
 for(const stage of sorted){
  const n=stage.ids.filter(id=>already.has(id)).length;
  const details=el("details",undefined,"hubCheckpoint");details.dataset.stage=stage.id;
  details.open=criticalOpen.has(stage.id);
  const summary=el("summary"),heading=el("span",undefined,"hubCheckpointTitle");
  heading.append(el("strong",stage.heading),el("small",stage.before));
  const stateText=el("span",n===stage.ids.length?"เก็บครบในเว็บ":"ยังขาด "+(stage.ids.length-n),"hubCheckpointState"+(n===stage.ids.length?" complete":""));
  summary.append(heading,stateText);details.append(summary);
  const inside=el("div",undefined,"hubCheckpointBody");
  if(stage.priority==="critical")inside.append(el("p","จุดเสี่ยงสูง · ตรวจเงื่อนไขก่อนเปลี่ยนสถานะเควสต์","hubCriticalWarning"));
  inside.append(el("p",stage.action,"hubCheckpointAction"));
  inside.append(el("p","ก่อนดำเนินเรื่อง: "+stage.risk,"hubCheckpointRisk"));
  if(act==="2"&&stage.id==="a2-darkness"){
    const safety=el("details",undefined,"hubCheckpointSafety");
    safety.open=true;
    safety.append(el("summary","บันทึกว่าคุยกับ Bandits / เปิด Ancient Seal แล้ว"),safetyPanel());
    inside.append(safety);
  }
  const req=el("div",undefined,"hubCheckpointRows");
  for(const id of stage.ids){
    const item=idToEntry.get(id);
    if(!item)continue;
    const line=el("label",undefined,"hubCheckpointRow"),check=el("input"),info=el("span",undefined,"hubCheckpointItemInfo"),name=el("span",label(item,"ears"),"hubCheckpointItemName"),marked=el("span",already.has(id)?"ฟังแล้ว":"ยังไม่ฟัง","hubCheckpointRowState");
    const guide=window.POE_ITEM_DESCRIPTIONS?.get("ears",item,act==="2"?getSafety():undefined);
    const fromSource=getRisk({type:"ears",id,act:Number(act)});
    const condition=guide?.unlock||fromSource?.trigger||"";
    const caution=guide?.caution||fromSource?.before||"";
    info.append(name);
    if(condition)info.append(el("small","เปิดเมื่อ: "+condition,"hubCheckpointRowTrigger"));
    if(caution)info.append(el("small","ต้องตรวจ: "+caution,"hubCheckpointRowWarning"));
    if(!condition&&!caution)info.append(el("small","ยังไม่มีเงื่อนไขรายบรรทัดในไฟล์ต้นทาง · ตรวจคู่มือก่อนเดินต่อ","hubCheckpointRowUnknown"));
    check.type="checkbox";check.checked=already.has(id);check.dataset.checkpointId=String(id);
    check.setAttribute("aria-label","ฟังบทสนทนาแล้ว — "+label(item,"ears"));
    check.addEventListener("change",()=>{
      const hint=window.POE_ITEM_DESCRIPTIONS?.get("ears",item,act==="2"?getSafety():undefined);
      if(check.checked&&hint?.caution&&!confirm("จุดที่อาจพลาดตาม Wiki ปี 2025 (ยังไม่รับรอง 3.30):\n"+hint.caution+"\n\nฟังบทสนทนานี้ในเกมจริงแล้วใช่หรือไม่?")){check.checked=false;return;}
      writeMarks("ears",id,check.checked);
    });
    line.append(check,info,marked);req.append(line);
  }
  inside.append(req);
  const reward=rewardsByQuest.get(String(act)+"|"+stage.quest);
  if(reward){inside.append(el("div","เควสต์ที่เกี่ยวข้อง: "+stage.quest+" · รางวัลอ้างอิง: "+reward.reward,"hubCheckpointReward"));}
  const ref=el("a","ตรวจเงื่อนไขกับ PoE Wiki");ref.href=stage.source;ref.target="_blank";ref.rel="noopener noreferrer";
  inside.append(el("p","ข้อมูลปี 2025 · ต้องตรวจซ้ำในเกมตามแพตช์ที่เล่น","hubSubtle"),ref);
  details.append(inside);
  details.addEventListener("toggle",()=>{if(details.open)criticalOpen.add(stage.id);else criticalOpen.delete(stage.id);});
  section.append(details);
 }
 return section;
}
function renderRoute(target){const act=state.act==="all"?"1":state.act, panel=section("Act "+act+" · รายการเก็บ Achievement");
panel.append(el("p","ทำเครื่องหมายหลังเก็บในเกมแล้ว · รายการจะยังอยู่ที่เดิมและเปลี่ยนเป็น “เก็บแล้ว” · คำเตือนสำคัญแสดงก่อนรายละเอียดอื่น","hubSubtle"));
const countAll=["ears","lore","waypoints","sidequests"].reduce((sum,type)=>sum+records(type,act).length,0);
const doneAll=["ears","lore","waypoints","sidequests"].reduce((sum,type)=>sum+records(type,act).filter(x=>entries(type).includes(x.id)).length,0);
const riskRemaining=records("ears",act).filter(x=>window.POE_ITEM_DESCRIPTIONS?.get("ears",x,act==="2"?getSafety():undefined)?.caution&&!entries("ears").includes(x.id)).length;
const quick=el("div",undefined,"hubActProgress");
quick.append(el("strong","เก็บแล้ว "+doneAll+" / "+countAll+" รายการ"),el("span",riskRemaining+" บทสนทนามีคำเตือนที่ต้องตรวจ","hubSubtle"));panel.append(quick);
const critical=criticalPanel(act);if(critical)panel.append(critical);
if(act==="10")panel.append(el("p","Act 10: ฐานข้อมูล Wiki ปี 2025 ที่ใช้ยังไม่มีรายการจุดเสี่ยงแบบก่อนเปลี่ยนสถานะเควสต์ในส่วนนี้ ไม่ได้หมายความว่า Act 10 ปลอดภัยหรือผ่านการตรวจแพตช์ 3.30","hubNotice"));
["ears","lore","waypoints","sidequests"].forEach(type=>{
const rows=records(type,act),count=rows.filter(x=>entries(type).includes(x.id)).length;
const chapter=el("details",undefined,"hubChapter");chapter.dataset.group=type;
chapter.open=routeOpen.has(type)||!!state.search.trim();
const summary=el("summary"),left=el("span",undefined,"hubChapterTitle");
left.append(el("strong",uiNames[type]),el("small",names[type]));summary.append(left,el("span",count+" / "+rows.length,"hubChapterCount"));
chapter.append(summary);
const content=el("div",undefined,"hubChapterBody");
if(type==="ears"){const note=el("p",undefined,"hubSubtle");const source=el("a","PoE Wiki · All Ears / Act "+act);source.href="https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_"+act;source.target="_blank";source.rel="noopener noreferrer";note.append("เรียงตามแถว Wiki 2025 · ",source);content.append(note);}
addList(content,type,act,state.limit,true);chapter.append(content);
chapter.addEventListener("toggle",()=>{if(!state.search.trim()){if(chapter.open)routeOpen.add(type);else routeOpen.delete(type);}});
panel.append(chapter);
});const rewardChapter=renderActRewards(act);if(rewardChapter)panel.append(rewardChapter);target.append(panel);}
function renderCategory(target,type){const panel=section(uiNames[type]+" · "+names[type]);
const desc={lore:"Lore 140 รายการ มีทั้ง Letters of Exile, หนังสือ Library, Labyrinth และ Vaal Side Areas; ชื่อ/ตำแหน่งจากคู่มือเก่า อาจต่างจากแพตช์ใหม่",
waypoints:"รายการ Waypoint 91 จุดจากชุดอ้างอิง 3.9 อาจไม่ตรงกับแพตช์ใหม่ทุกจุด",
sidequests:"Side Quest 30 รายการจากชุดอ้างอิง 3.9 ต้องตรวจ quest-state ก่อนรับรอง",
ears:"All Ears 484 บทสนทนา (รายการเดิมแสดงด้านล่าง)"};
panel.append(el("p",desc[type],"hubSubtle"));
if(type==="lore"){
const tips=el("p","สำรวจ Lore ในเกมโดยคลิกวัตถุให้ระบบนับ ไม่จำเป็นต้องอ่านข้อความจนจบ · Letters of Exile และหนังสือใน The Library อาจต้องเข้า Instance ใหม่เพื่อให้พบทุกชิ้น","hubNotice");panel.append(tips);
const vaal=el("details",undefined,"hubChapter hubVaal");vaal.append(el("summary","ค้นหา Vaal Letter ตามชื่อ Vaal Side Area"),vaalPanel());panel.append(vaal);
}
addList(panel,type,state.act,state.limit);target.append(panel);}
function getSafety(){const c=active(),s=getBackupState(LORE),r=s.byCharacter[c.id]||{};return r.safety&&typeof r.safety==="object"?r.safety:{};}
function updateSafety(key,value){const c=active(),s=getBackupState(LORE),r=s.byCharacter[c.id]||{};r.safety=Object.assign({},r.safety||{}, {[key]:value});s.byCharacter[c.id]=r;
try{localStorage.setItem(LORE,JSON.stringify(s));refresh();}catch(e){alert("บันทึกคำเตือน Act 2 ไม่ได้");}}
function safetyPanel(){const wrap=el("div",undefined,"hubPanel");wrap.append(el("h3","ก่อนเปิด Ancient Seal / สู้ Bandits"),el("p","ทำเครื่องหมายหลังคุยกับ Alira, Oak และ Kraityn แล้ว เปิด Ancient Seal เพื่อฟัง The Darkness ที่เกี่ยวข้องก่อนฆ่า Bandits (Kraityn ไม่มีหัวข้อนี้ตาม Wiki ปี 2025)","hubSubtle"));
const grid=el("div",undefined,"hubCheckGrid"),checks=[["alira","คุยกับ Alira แล้ว"],["oak","คุยกับ Oak แล้ว"],["kraityn","คุยกับ Kraityn แล้ว"],["seal","เปิด Ancient Seal แล้ว"],["darkness","ฟัง The Darkness ครบตามเงื่อนไขแล้ว"]];
const s=getSafety();
checks.forEach(([id,title])=>{const lab=el("label"),inp=el("input");inp.type="checkbox";inp.checked=s[id]===true;inp.dataset.safety=id;inp.onchange=()=>updateSafety(id,inp.checked);lab.append(inp,document.createTextNode(title));grid.append(lab);});
wrap.append(grid);
const choices=el("div",undefined,"hubControls");[["first","Bandit ที่ฆ่าคนแรก"],["second","Bandit ที่ฆ่าคนที่สอง"]].forEach(([k,l])=>{const div=el("div");const labelNode=el("label",l),sel=el("select");sel.dataset.kill=k;[["","ยังไม่ได้ฆ่า / ไม่แน่ใจ"],["Alira","Alira"],["Oak","Oak"],["Kraityn","Kraityn"]].forEach(([v,t])=>{const o=el("option",t);o.value=v;sel.append(o);});sel.value=s[k]||"";sel.onchange=()=>{const v=sel.value,other=k==="first"?"second":"first";if(v&&v===getSafety()[other]){alert("Bandits ที่ฆ่าคนแรกและคนที่สองต้องต่างกัน");sel.value=s[k]||"";return;}updateSafety(k,v);};div.append(labelNode,sel);choices.append(div);});wrap.append(choices);
const status=el("div",undefined,"hubNotice"),ss=getSafety(),intro=["alira","oak","kraityn"].every(k=>ss[k]),before=ss.seal&&ss.darkness;
let text=!intro?"ยังไม่ได้ยืนยันว่าคุยกับ Bandits ทั้งสามก่อนเปิด Ancient Seal":!before?"คุย Bandits แล้ว แต่ยังไม่ได้ยืนยันทั้ง Ancient Seal และ The Darkness":"ตรวจเงื่อนไขเบื้องต้นครบตามที่คุณทำเครื่องหมายแล้ว แต่ยังไม่รับรองเส้นทางในเกม";
if((ss.first||ss.second)&&!before)text="ระวัง: มีการฆ่า Bandit แล้วโดยยังไม่ยืนยัน Ancient Seal / The Darkness — อาจพลาดบทสนทนา";
status.className=before&&intro?"hubGood":"hubNotice";status.textContent=text;wrap.append(status);
if(ss.first||ss.second){const remaining=["Alira","Oak","Kraityn"].filter(k=>k!==ss.first&&k!==ss.second);wrap.append(el("p","หลังฆ่า Bandit ตัวแรก หัวข้อ Eramir จะเปลี่ยนตามตัวที่ฆ่า; หลังตัวที่สองขึ้นกับตัวที่รอด ("+(remaining.join(", ")||"ไม่มี")+") ตรวจหัวข้อจริงในเกม (Wiki แถว 101–103)","hubSubtle"));}
const ref=el("a","อ่านเงื่อนไข Act 2 จาก PoE Wiki");ref.href="https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_2";ref.target="_blank";ref.rel="noopener noreferrer";wrap.append(ref);return wrap;}
const vaalMap=[
["Abandoned Dam","Atziri Is My","The Dried Lake"],["Ancient Catacomb","Queen Atziri Forfeited","The Dried Lake"],["Arcane Chambers","What Did I","The Lunaris Temple"],["Blind Alley","Atziri Is My","The Quay / Grain Gate"],
["Clouded Ledge","I Had Nothing","The Ridge"],["Concealed Caldarium","I Had Nothing","The Bath House"],["Concealed Cavity","Atziri Promises Us","The Coast / Tidal Island (Act 6)"],["Covered-up Hollow","There Was No","The Den / Fellshrine Ruins"],["Cremated Archives","I Am Templar","The Torched Courts"],["Deathly Chambers","I Have Been","The Ossuary"],
["Desolate Isle","I Had Nothing","The Boiling Lake"],["Desolate Track","For Seven Years","The Ascent / Descent"],["Disused Furnace","I Should Have","The Crematorium"],["Entombed Alcove","Atziri Is My","The Crypt"],["Entombed Chamber","Queen Atziri Forfeited","The Catacombs"],
["Flooded Complex","I Had Nothing","The Causeway"],["Forbidden Archives","I Am Templar","The Templar Courts"],["Forbidden Chamber","For Seven Years","The Vaal Ruins / Caverns"],["Forgotten Conduit","I Had Nothing","The Aqueduct"],["Forgotten Oubliette","Atziri Promises Us","The Lower Prison (Act 6)"],
["Haunted Mineshaft","I Should Have","The Crystal Veins / Tunnel"],["Hidden Patch","I Should Have","The Old Fields / Crossroads"],["Inner Grounds","A Ring","The Imperial Gardens"],["Moonlit Chambers","What Did I","The Lunaris Temple (Act 8)"],["Mystical Clearing","I Was To","The Riverways"],
["Narrow Ravine","I Am But","The Western Forest / Wetlands"],["Neglected Cellar","Our Queen Has","The Marketplace / Battlefront"],["Quarantined Quarters","I Was To","The Slums"],["Radiant Pools","I Had Nothing","The Mud Flats (Act 6)"],["Reclaimed Barracks","The Artefacts Which","The Control Blocks"],
["Remote Gulch","What Did I","Prisoner's Gate / Ship Graveyard"],["Restricted Collection","My Beautiful Queen","The Reliquary"],["Restricted Gallery","What Did I","The Library / Archives"],["Sacred Chambers","I Am But","Solaris Temple"],["Sealed Basement","I Am Templar","Oriath Square / Ravaged Square"],
["Sealed Corridors","For Seven Years","The Sceptre of God"],["Sealed Repository","I Had Nothing","The Crypt (Act 7)"],["Secluded Canal","The Artefacts Which","Oriath Square / Canals"],["Secluded Copse","Our Queen Has","Northern Forest / Dread Thicket"],
["Secret Laboratory","There Was No","Chamber of Sins"],["Shifting Sands","I Had Nothing","The Vastiri Desert"],["Side Chapel","My Beautiful Queen","Cathedral Rooftop"],["Stagnant Canal","There Was No","The Docks"],["Strange Sinkhole","Atziri Promises Us","Cavern of Wrath / Coast"],["Sunken Shingle","I Had Nothing","The Ship Graveyard / Reef"],["Twisted Inquisitorium","I Have Been","Chamber of Innocence"],["Walled-off Ducts","I Had Nothing","The Sewers / Toxic Conduits"]
];
function vaalPanel(){const box=el("div",undefined,"hubPanel");box.append(el("h3","Vaal Letter / Research Journal · ค้นหาตามชื่อ Side Area"),el("p","การเกิด Vaal Side Area เป็นแบบสุ่ม แต่ชนิดข้อความสัมพันธ์กับชื่อพื้นที่ในคู่มือ Wiki ปี 2025 ตารางนี้ยังไม่ผ่านการตรวจแพตช์ 3.30","hubSubtle"));
box.append(el("div","แพตช์ 3.30: วิธีเปิด Vaal Side Area ด้วย Map Device ในคู่มือเก่าใช้เป็นแนวทางไม่ได้ ให้ตามหาใน Campaign และตรวจเวอร์ชันเกมอีกครั้ง","hubNotice"));
const input=el("input");input.type="search";input.placeholder="พิมพ์ชื่อ เช่น Concealed Caldarium";input.setAttribute("aria-label","ค้นหาชื่อ Vaal Side Area");const result=el("div",undefined,"hubList");box.append(input,result);
const show=()=>{result.replaceChildren();const q=input.value.trim().toLowerCase();if(q.length<2){result.append(el("p","พิมพ์อย่างน้อย 2 ตัวอักษรเพื่อหาชื่อ Vaal Side Area","hubSubtle"));return;}const entries=vaalMap.filter(x=>(x[0]+" "+x[2]).toLowerCase().includes(q)).slice(0,10);
entries.forEach(m=>{const lore=L.entries.find(x=>x.act==="Vaal"&&x.name.toLowerCase().includes(m[1].toLowerCase()));const r=el("div",undefined,"hubItem"),info=el("div",undefined,"hubText");info.append(el("div",m[0],"hubName"),el("div",m[2]+" · "+(lore?lore.name+" · Wiki #"+(lore.wikiRow||"?"):"ยังไม่พบรายการตรงกัน"),"hubMeta"));if(lore){const b=el("button",entriesForVaal(lore)?"สำรวจแล้ว · ยกเลิก":"บันทึกว่าสำรวจแล้ว");b.onclick=()=>writeMarks("lore",lore.id,!entriesForVaal(lore));r.append(b);}r.prepend(info);result.append(r)});
if(!entries.length)result.append(el("div","ไม่พบพื้นที่นี้ในตารางที่ตรวจชื่อไว้ อย่าเดา Lore จากชื่อที่คล้ายกัน","hubNotice"));};input.oninput=show;show();const ref=el("a","ที่มา: PoE Wiki — Vaal side area");ref.href="https://www.poewiki.net/wiki/Vaal_side_area";ref.target="_blank";ref.rel="noopener noreferrer";box.append(ref);return box;}
function entriesForVaal(lore){return entries("lore").includes(lore.id);}
function currentReview(){const c=active(),s=safeParse(HUB);return s&&s.schema===2&&s.byCharacter&&s.byCharacter[c.id]||{};}
function saveReview(review){const c=active(),raw=safeParse(HUB),s=raw&&raw.schema===2&&raw.byCharacter?raw:{schema:2,byCharacter:{}};s.byCharacter[c.id]=review;try{localStorage.setItem(HUB,JSON.stringify(s));return true;}catch(e){alert("บันทึกจุดตรวจสอบไม่ได้");return false;}}
function reviewPanel(){const panel=section("ตรวจยอด Achievement กับเกม");
panel.append(el("p","กรอกยอด Achievement ที่เห็นในเกม แล้วเทียบกับที่ทำเครื่องหมายไว้ · เว็บนี้อ่านข้อมูลจากเกมไม่ได้และบอกชิ้นที่ขาดแน่นอนไม่ได้","hubSubtle"));
const controls=el("div",undefined,"hubControls"),select=el("select"),input=el("input"),cmp=el("button","เปรียบเทียบยอด");
select.setAttribute("aria-label","เลือก Achievement ที่จะตรวจ");Object.entries(names).forEach(([k,v])=>{const o=el("option",v);o.value=k;select.append(o)});select.value=state.reviewType;select.onchange=()=>{state.reviewType=select.value;state.gameCount="";renderView();};input.type="number";input.min="0";input.max=String(totals[state.reviewType]);input.step="1";input.value=state.gameCount;input.placeholder="จำนวนที่เกมแสดง";input.setAttribute("aria-label","กรอกจำนวนที่เกมแสดง");input.oninput=()=>state.gameCount=input.value;
cmp.className="primary";const out=el("div");cmp.onclick=()=>{const n=Number(input.value);out.replaceChildren();if(input.value.trim()===""||!Number.isInteger(n)||n<0||n>totals[state.reviewType]){out.append(el("div","กรอกจำนวนเต็ม 0–"+totals[state.reviewType],"hubNotice"));return;}const checked=progress(state.reviewType),diff=checked-n;const summary=el("div","Checklist "+checked+" / เกม "+n+". "+(diff===0?"ยอดตรงกัน แต่ยังต้องตรวจว่าสำรวจหรือฟังครบตามรายการจริง":diff>0?"Checklist มากกว่าเกม "+diff+" รายการ":"เกมมากกว่า Checklist "+(-diff)+" รายการ"),diff===0?"hubGood":"hubNotice");out.append(summary);const baseline=currentReview()?.baselines?.[state.reviewType];if(diff!==0&&baseline){const added=entries(state.reviewType).filter(id=>!baseline.ids.includes(id)),t=el("div",undefined,"hubSection");t.append(el("p","รายการที่ทำเครื่องหมายเพิ่มหลังเทียบยอดตรงกันครั้งล่าสุด (ใช้ย้อนตรวจ ไม่ใช่หลักฐานว่าเกมไม่ได้นับ):","hubSubtle"));const ul=el("ul");added.slice(0,45).forEach(id=>{const x=collections[state.reviewType].find(z=>z.id===id);if(x)ul.append(el("li",label(x,state.reviewType)))});if(!added.length)ul.append(el("li","ไม่มีรายการใหม่หลังจุดเทียบยอด โปรดย้อนตรวจรายการก่อนหน้าและรายการที่ยังไม่ได้เก็บ"));t.append(ul);out.append(t);}};
const checkpoint=el("button","บันทึกยอดที่ตรงกัน");checkpoint.onclick=()=>{const n=Number(input.value),type=state.reviewType;if(input.value.trim()===""||!Number.isInteger(n)||n!==progress(type)){alert("บันทึกจุดเทียบได้เมื่อยอดในเกมตรงกับจำนวนที่ติ๊กในเว็บเท่านั้น");return;}const s=currentReview();if(!s.baselines)s.baselines={};s.baselines[type]={count:n,ids:entries(type),at:new Date().toISOString()};if(saveReview(s)){out.replaceChildren();out.append(el("div","บันทึกจุดเทียบยอดแล้ว (ยืนยันเฉพาะจำนวน)","hubGood"));}};
controls.append(select,input,cmp,checkpoint);panel.append(controls,out);
const old=currentReview()?.baselines?.[state.reviewType];if(old)panel.append(el("p","จุดเทียบยอดล่าสุด: "+old.count+" รายการ · "+old.at,"hubSubtle"));
const safety=el("details",undefined,"hubChapter");safety.append(el("summary","ตรวจจุดเสี่ยง Act 2 · Bandits / Ancient Seal"),safetyPanel());
panel.append(safety,exportPanel());return panel;}
function exportPanel(){const panel=el("div",undefined,"hubPanel");panel.append(el("h3","สำรองข้อมูลทุก Achievement"),el("p","ส่งออกไฟล์เดียวเก็บความคืบหน้าทุกตัวละครไว้ · นำเข้าเป็นตัวละครใหม่ ไม่ทับข้อมูลเดิม","hubSubtle"));
const row=el("div",undefined,"hubInlineRow"),exp=el("button","ดาวน์โหลด Backup รวม"),imp=el("button","นำเข้า Backup รวม"),file=el("input");file.type="file";file.accept="application/json,.json";file.hidden=true;
exp.className="primary";exp.onclick=()=>{const s=B.read(),l=getBackupState(LORE),x=getBackupState(EXTRA),h=safeParse(HUB)||{};const characters=s.characters.map(c=>{const lr=l.byCharacter[c.id]||{},ex=x.byCharacter[c.id]||{},rv=h.byCharacter&&h.byCharacter[c.id]||{};return {name:c.name,ears:validIDs("ears",c.checked),lore:validIDs("lore",lr.lore),waypoints:validIDs("waypoints",ex.waypoints),sidequests:validIDs("sidequests",ex.sidequests),safety:lr.safety||{},baselines:rv.baselines||{}};});const blob=new Blob([JSON.stringify({app:"poe-unified-companion",schema:2,exportedAt:new Date().toISOString(),characters},null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=el("a");a.href=url;a.download="poe-achievements-all-characters.json";a.click();setTimeout(()=>URL.revokeObjectURL(url),5000);};
imp.onclick=()=>file.click();file.onchange=async()=>{const f=file.files[0];file.value="";if(!f||f.size>4e6){alert("ไฟล์ไม่ถูกต้องหรือใหญ่เกิน 4 MB");return;}try{const obj=JSON.parse(await f.text()),records=obj.characters;if(obj.app!=="poe-unified-companion"||obj.schema!==2||!Array.isArray(records)||!records.length||records.length>100)throw Error("invalid");
for(const c of records){if(!c||typeof c.name!=="string"||!c.name.trim()||c.name.length>60)throw Error("name");for(const type of Object.keys(names)){const ids=c[type];if(!Array.isArray(ids)||ids.length>totals[type]||ids.some(z=>!Number.isInteger(z)||z<1||z>totals[type]))throw Error("ids");}}
const main=B.read();if(main.characters.length+records.length>100)throw Error("limit");if(!confirm("นำเข้า "+records.length+" ตัวละครเป็นรายการใหม่? จะไม่ลบข้อมูลเดิม และโหลดหน้าอีกครั้งเมื่อสำเร็จ"))return;
const originals=[MAIN,LORE,EXTRA,HUB].map(key=>[key,localStorage.getItem(key)]),newMain=JSON.parse(JSON.stringify(main)),newLore=getBackupState(LORE),newExtras=getBackupState(EXTRA),newHub=safeParse(HUB)||{schema:2,byCharacter:{}};if(!newHub.byCharacter)newHub.byCharacter={};
records.forEach((c,i)=>{const id="hub-"+Date.now().toString(36)+"-"+i+"-"+Math.random().toString(36).slice(2,9);newMain.characters.push({id,name:c.name.trim(),checked:validIDs("ears",c.ears)});newLore.byCharacter[id]={lore:validIDs("lore",c.lore),safety:c.safety&&typeof c.safety==="object"?c.safety:{},checkpoint:null};newExtras.byCharacter[id]={waypoints:validIDs("waypoints",c.waypoints),sidequests:validIDs("sidequests",c.sidequests)};newHub.byCharacter[id]={baselines:{}};});
try{localStorage.setItem(MAIN,JSON.stringify(newMain));localStorage.setItem(LORE,JSON.stringify(newLore));localStorage.setItem(EXTRA,JSON.stringify(newExtras));localStorage.setItem(HUB,JSON.stringify(newHub));location.reload();}catch(e){originals.forEach(([k,v])=>{try{if(v===null)localStorage.removeItem(k);else localStorage.setItem(k,v)}catch(_e){}});alert("นำเข้าไม่สำเร็จ ระบบพยายามคืนข้อมูลเดิมแล้ว กรุณาตรวจ Backup ก่อนลองซ้ำ");}
}catch(e){alert("ไฟล์ Backup ไม่ถูกต้องหรือเกินขีดจำกัดตัวละคร");}};
row.append(exp,imp,file);panel.append(row);return panel;}
function renderView(){const panel=$("hubView");panel.replaceChildren();if(state.tab==="ears")return;
if($("patch").value!=="legacy-3.9"&&state.tab!=="review"){
  const warning=el("div",undefined,"hubPanel");warning.append(el("h2","ยังไม่มีรายการที่ตรวจรับรองสำหรับแพตช์นี้"),el("p","ข้อมูลในเว็บไซต์มาจากคู่มือ 2025 / ตาราง 3.9 เท่านั้น ไม่แสดงเส้นทางเก่าโดยอ้างว่าใช้กับ 3.29 หรือ 3.30 ได้","hubNotice"));
  const button=el("button","ดูรายการประวัติศาสตร์ (ยังไม่รับรองแพตช์)");button.onclick=()=>{$("patch").value="legacy-3.9";$("patch").dispatchEvent(new Event("change",{bubbles:true}));renderView();};warning.append(button);panel.append(warning);return;
}
if(state.tab==="route"){renderRoute(panel);return;}if(state.tab==="review"){if($("patch").value!=="legacy-3.9")panel.append(el("div","หมายเหตุ: ตัวเลขและข้อมูลอ้างอิงยังเป็นชุดประวัติศาสตร์ ไม่รับรองสำหรับแพตช์ที่เลือก แต่สามารถสำรองข้อมูลทั้งหมดได้ตามปกติ","hubNotice"));panel.append(reviewPanel());return;}renderCategory(panel,state.tab);}
function renderToolbar(){const t=$("hubToolbar");t.replaceChildren();
if(state.tab==="review")return;
if(state.tab!=="route"){
const pick=el("div",undefined,"hubCategoryPicker");pick.setAttribute("role","group");pick.setAttribute("aria-label","เลือกประเภท Achievement");
Object.keys(names).forEach(type=>{const button=el("button",uiNames[type]);button.type="button";button.dataset.category=type;button.setAttribute("aria-pressed",String(state.tab===type));button.onclick=()=>openTab(type);pick.append(button);});
t.append(pick);
}
if(state.tab==="ears")return;
if(state.tab==="route"){
  const strip=el("div",undefined,"hubActStrip");strip.setAttribute("role","group");strip.setAttribute("aria-label","เลือก Act");
  for(let i=1;i<=10;i++){
    const b=el("button","Act "+i);b.type="button";b.dataset.act=String(i);b.setAttribute("aria-pressed",String(state.act===String(i)));
    b.onclick=()=>{state.act=String(i);state.limit=40;strip.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));renderView();};
    strip.append(b);
  }
  t.append(strip);
  requestAnimationFrame(()=>{const chosen=strip.querySelector('[aria-pressed="true"]');if(chosen){strip.scrollLeft=Math.max(0,chosen.offsetLeft-strip.offsetLeft-16);}});
}
const controls=el("div",undefined,"hubControls"),act=el("select"),status=el("select"),search=el("input");
act.setAttribute("aria-label","เลือก Act หรือพื้นที่");
const acts=[["all","ทุก Act"],...[1,2,3,4,5,6,7,8,9,10].map(a=>[String(a),"Act "+a]),["Labyrinth","Labyrinth"],["Vaal","Vaal Side Areas"],["Epilogue","Epilogue"]];
acts.filter(([v])=>state.tab!=="route"||(!isNaN(Number(v))&&v!=="all")).forEach(([v,label])=>{const o=el("option",label);o.value=v;act.append(o);});
if(state.tab==="route"&&(state.act==="all"||isNaN(Number(state.act))))state.act="1";act.value=state.act;if(act.selectedIndex<0){act.value="all";state.act=act.value;}
act.onchange=()=>{state.act=act.value;state.limit=40;renderView();};search.type="search";search.value=state.search;search.placeholder="ค้นหาชื่อ NPC, บทสนทนา หรือพื้นที่";search.setAttribute("aria-label","ค้นหา");search.oninput=()=>{state.search=search.value;state.limit=40;renderView();};
[["all","ทั้งหมด (เห็นสถานะ)"],["todo","ยังไม่เก็บ"],["done","เก็บแล้ว"]].forEach(([v,l])=>{const o=el("option",l);o.value=v;status.append(o);});status.value=state.status;status.setAttribute("aria-label","ตัวกรองสถานะ");status.onchange=()=>{state.status=status.value;state.limit=40;renderView();};
if(state.tab==="route")controls.append(search,status);else controls.append(act,search,status);t.append(controls);}
function openTab(tab){if(tab==="collection")tab=state.collectionType||"ears";
const previous=state.tab==="route"?"route":state.tab==="review"?"review":"collection";
if(previous==="route")state.routeAct=state.act;
if(previous==="collection")state.collectionAct=state.act;
if(Object.keys(names).includes(tab))state.collectionType=tab;
state.tab=tab;document.body.dataset.hubTab=tab;
const group=tab==="route"||tab==="review"?tab:"collection";
if(group==="route")state.act=state.routeAct;
if(group==="collection")state.act=state.collectionAct;
[...document.querySelectorAll("#hubNav button")].forEach(btn=>{const yes=btn.dataset.tab===group;btn.setAttribute("aria-selected",String(yes));});
$("hubView").hidden=tab==="ears";$("hubToolbar").hidden=tab==="review";state.limit=40;state.search="";renderToolbar();renderView();renderSummary();
try{history.replaceState(null,"","#"+tab);}catch(e){}
}
function refresh(){renderSummary();if(state.tab!=="ears")renderView();}
function boot(){const wrap=document.querySelector(".wrap"),header=wrap.querySelector("header"),profile=wrap.querySelector('section[aria-label="เลือกตัวละคร"]');if(!header||!profile)return;
const nav=el("nav",undefined);nav.id="hubNav";nav.setAttribute("aria-label","เมนูหลัก");const tabs=[["route","ตาม Act"],["collection","เช็กลิสต์ทั้งหมด"],["review","ตรวจยอด / สำรอง"]];
tabs.forEach(([id,label])=>{const b=el("button",label);b.type="button";b.dataset.tab=id;b.onclick=()=>openTab(id);nav.append(b);});header.after(nav);
const profileRows=profile.querySelectorAll(".ctrls");
if(profileRows.length>=2){
  const manage=el("details",undefined,"hubManage");manage.id="hubManage";
  manage.append(el("summary","จัดการตัวละครและสำรองข้อมูล All Ears แบบเดิม"));
  const tools=el("div",undefined,"ctrls");
  ["renameChar","deleteChar","export","import","reset"].forEach(id=>{const button=$(id);if(button)tools.append(button);});
  manage.append(tools);const fileInput=$("file");if(fileInput)manage.append(fileInput);
  profileRows[1].remove();profileRows[0].after(manage);
}
const overview=el("section",undefined,"hubPanel");overview.id="hubOverview";overview.append(el("h2","ความคืบหน้าของตัวละคร"),el("p","เช็กเฉพาะสิ่งที่ทำแล้วในเกม · ตัวเลขเป็นบันทึกของคุณ ไม่ใช่ข้อมูลจากเซิร์ฟเวอร์ PoE","hubSubtle"));const stats=el("div",undefined,"hubStats");stats.id="hubStats";overview.append(stats);profile.after(overview);
const controls=el("section",undefined);controls.id="hubToolbar";overview.after(controls);const view=el("section");view.id="hubView";controls.after(view);
const status=el("div","ฐานข้อมูลอ้างอิง PoE Wiki ปี 2025 / ชุดเก่า 3.9 · ยังไม่รับรองแพตช์ 3.30 เลือกเวอร์ชันข้อมูลด้านล่างก่อนใช้รายการ","hubNotice hubDataNotice");nav.after(status);
$("patch").addEventListener("change",()=>{renderView();});
$("character").addEventListener("change",()=>{setTimeout(refresh,0);});const obs=new MutationObserver(()=>{setTimeout(refresh,0);});obs.observe($("character"),{childList:true});window.addEventListener("storage",e=>{if([MAIN,LORE,EXTRA,HUB].includes(e.key))refresh();});
const initial=["route","ears","lore","waypoints","sidequests","review","collection"].includes(location.hash.slice(1))?location.hash.slice(1):"route";openTab(initial);
}
boot();
})();
