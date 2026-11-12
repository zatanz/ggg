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
const itemPriority=(type,item,guide)=>type==="ears"&&(guide?.caution||(window.POE_WORKBOOK_WARNINGS?.wikiRows||[]).includes(getRisk({type:"ears",id:item.id,act:item.act})?.wikiRow))?"ระวังพลาด":type==="sidequests"?"จำเป็นต่อ No Loose Ends":type==="ears"?"จำเป็นต่อ All Ears":type==="lore"?"จำเป็นต่อ No Stone Unturned":"จำเป็นต่อ Locomancer";

const names={ears:"All Ears",lore:"No Stone Unturned",waypoints:"Locomancer",sidequests:"No Loose Ends"};
const uiNames={ears:"บทสนทนา NPC",lore:"สำรวจ Lore",waypoints:"จุดวาร์ป (Waypoint)",sidequests:"เควสต์รอง"};
const verbs={ears:"ฟังแล้ว",lore:"สำรวจแล้ว",waypoints:"เปิดแล้ว",sidequests:"ทำสำเร็จ"};
const routeOpen=new Set(); // Detailed category lists start collapsed; the next-step guide is the primary surface.
const criticalOpen=new Set(["a1-glyphs","a2-darkness","a3-clarissa","a4-deshret","a5-utula","a6-karui","a7-den","a8-love","a9-adus"]);
const postQuestOpen=new Set(["a10-safe-passage"]);
const specialOpen=new Set(["lab-plaza"]);
const steamExpanded=new Set();
const historicalOpen=new Set();
const routeKeys=[1,2,3,4,5,6,7,8,9,10],routes={};
routeKeys.forEach(a=>{const r=window["ALL_EARS_ROUTE_ACT"+a];if(r&&Array.isArray(r.records))routes[a]=r.records;});
const state={tab:"route",collectionType:"ears",act:"1",routeAct:"1",collectionAct:"all",status:"all",search:"",limit:12,reviewType:"lore",gameCount:"",focusByAct:{},vaalQuery:"",steamFocusByAct:{}};
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
function label(x,type){if(type==="ears"&&x.act===2){const hint=window.POE_ITEM_DESCRIPTIONS?.get(type,x,getSafety());if(hint?.displayLabel)return hint.displayLabel;}return type==="ears"?x.npc+" — "+x.dialog:type==="lore"&&x.id===73?"Bronze Plaque — The Just Goddess":x.name;}
function area(x,type){return type==="ears"?"Act "+x.act+(getRisk({id:x.id,act:x.act,type})?.area?" · "+getRisk({id:x.id,act:x.act,type}).area:""):type==="lore"?x.area:type==="waypoints"?"Waypoint · "+x.act:"Side Quest · Act "+x.act;}
function warning(x,type){if(type==="ears"){const route=getRisk({id:x.id,act:x.act,type});return route&&(route.before||route.trigger)||x.note||"";}return type==="lore"&&x.random?"จุดปรากฏหรือเนื้อหาอาจสุ่ม ต้องสำรวจซ้ำหรือเข้า Instance ใหม่":"";}
const journeyScopes=[...Array.from({length:10},(_,i)=>String(i+1)),"Labyrinth","Vaal","Epilogue"];
function scopeName(scope){return scope==="Labyrinth"?"The Labyrinth":scope==="Vaal"?"Vaal Letter / Research Journal":scope==="Epilogue"?"Epilogue · Waypoints":"Act "+scope;}
function scopeTypes(scope){return scope==="Labyrinth"?["lore","waypoints"]:scope==="Vaal"?["lore"]:scope==="Epilogue"?["waypoints"]:Object.keys(names);}
function scopeSnapshot(scope){
 const groups=scopeTypes(scope).map(type=>{const rows=records(type,scope),marked=new Set(entries(type));return {type,all:rows.length,done:rows.filter(x=>marked.has(x.id)).length,remaining:rows.filter(x=>!marked.has(x.id))};});
 return {scope,groups,all:groups.reduce((n,g)=>n+g.all,0),done:groups.reduce((n,g)=>n+g.done,0)};
}
function openJourneyScope(scope){
 if(state.tab!=="route")openTab("route");
 state.act=String(scope);state.routeAct=String(scope);state.status="all";state.search="";state.limit=12;
 renderToolbar();renderView();
}
function renderSummary(){
 const target=$("hubStats");target.replaceChildren();
 const marked=Object.keys(names).reduce((sum,type)=>sum+progress(type),0),overall=Object.values(totals).reduce((a,b)=>a+b,0);
 const hero=el("div",undefined,"hubMissionTotal");
 const intro=el("div",undefined,"hubMissionHeading");
 intro.append(el("strong","เป้าหมาย: เก็บ 4 Achievement ที่ติดตามให้ครบ 100%"),el("span","ครบทุกรายการใน Checklist ก่อนเทียบยอดจริงในเกม · เว็บไม่ตรวจความสำเร็จอัตโนมัติ","hubSubtle"));
 const score=el("div",undefined,"hubMissionScore");
 score.append(el("b",marked+" / "+overall),el("span",Math.floor(marked/overall*100)+"% ที่บันทึกในเว็บ"));
 const bar=el("progress");bar.max=overall;bar.value=marked;bar.setAttribute("aria-label","ความคืบหน้า Checklist ทั้งสี่ Achievement");hero.append(intro,score,bar);
 const snapshots=journeyScopes.map(scopeSnapshot);
 const first=snapshots.find(x=>x.done<x.all);
 const next=el("div",undefined,"hubMissionNext");
 if(first){
  const action=el("span",undefined);action.append(el("strong","จุดค้างแรกตามหมวด: "+scopeName(first.scope)),el("small","เหลือ "+(first.all-first.done)+" รายการ · ตรวจเงื่อนไขก่อนเดินเควสต์ต่อ"));
  const jump=el("button","เปิดจุดที่ยังขาด");jump.type="button";jump.onclick=()=>openJourneyScope(first.scope);
  next.append(action,jump);
 }else next.append(el("strong","ทุกช่องใน Checklist ครบแล้ว · ตรวจยอดในเกมทีละ Achievement ก่อนยืนยันว่าได้จริง"));
 hero.append(next);
 const prep=el("details",undefined,"hubRunPreflight");prep.dataset.preflight="achievement-100";
 prep.append(el("summary","ก่อนเริ่มเก็บ 100% · ตรวจโหมดเกมและจุดที่มีรายงานว่าพลาดได้"));
 const checklist=el("ul",undefined);
 ["Ruthless: PoE Wiki ระบุว่า Vaal Side Areas ไม่เกิดในโหมดนี้ จึงไม่ควรวางแผนเก็บ No Stone Unturned ให้ครบด้วยเส้นทางนี้",
 "แพตช์ 3.29 มีรายงานว่า Fairgraves คุยไม่ได้และทำให้ All Ears ขาดบทสนทนา 34–38 — 3.30 ยังไม่ผ่านการทดสอบยืนยัน",
 "Act 2: Steam กับ PoE Wiki แนะนำลำดับคุย Bandits ก่อน Ancient Seal ไม่ตรงกัน อย่าฆ่าหรือช่วย Bandit ก่อนตรวจ The Darkness",
 "เปิด U เพื่อดูแผนที่/Quest และ H เพื่อตรวจยอด Achievement ที่เกมนับ — เครื่องหมายในเว็บไม่ใช่หลักฐานจากเกม"].forEach(x=>checklist.append(el("li",x)));
 prep.append(checklist);
 const link=el("a","PoE Wiki: Ruthless mode");link.href="https://www.poewiki.net/wiki/Ruthless_mode";link.target="_blank";link.rel="noopener noreferrer";
 prep.append(link);hero.append(prep);
 const roadmap=el("details",undefined,"hubMissionRoadmap");
 roadmap.append(el("summary","ดูเส้นทางตรวจครบ: Act 1–10 / Labyrinth / Vaal / Epilogue"));
 const list=el("div",undefined,"hubMissionStages");
 for(const s of snapshots){
   const b=el("button",undefined,"hubMissionStage");b.type="button";b.dataset.scope=s.scope;
   b.append(el("strong",scopeName(s.scope)),el("span",s.done+" / "+s.all+(s.done===s.all?" · บันทึกครบ":" · เหลือ "+(s.all-s.done))));
   b.onclick=()=>openJourneyScope(s.scope);list.append(b);
 }
 roadmap.append(list);hero.append(roadmap);
 target.append(hero);
 Object.keys(names).forEach(k=>{const card=el("button",undefined,"hubStat");card.type="button";card.setAttribute("aria-label","เปิด "+names[k]);const count=progress(k);
 card.append(el("span",names[k]),el("b",count+" / "+totals[k]),el("span",count===totals[k]?"บันทึกครบ · เทียบยอดเกมอีกครั้ง":"เหลือ "+(totals[k]-count)));card.onclick=()=>openTab(k);target.append(card);});
}
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
else if(type==="ears"&&(window.POE_WORKBOOK_WARNINGS?.wikiRows||[]).includes(getRisk({type:"ears",id:x.id,act:x.act})?.wikiRow))
 info.append(el("div","ไฟล์ Excel ติด WARNING ให้หัวข้อนี้ แต่ยังต้องตรวจเงื่อนไขจากต้นทางก่อนเปลี่ยนสถานะเควสต์","hubRisk hubWorkbookRisk"));
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
 const index=Math.max(0,Math.min(stages.length-1,Number(state.focusByAct[act])||0));
 state.focusByAct[act]=index;
 const nav=el("div",undefined,"hubStepNavigator");
 const position=el("div","ขั้นตรวจ "+(index+1)+" / "+stages.length,"hubStepPosition");
 const select=el("select");select.setAttribute("aria-label","เลือกขั้นตรวจสำคัญ");
 stages.forEach((stage,i)=>{const option=el("option",(i+1)+". "+stage.heading);option.value=String(i);select.append(option);});
 select.value=String(index);
 select.onchange=()=>{state.focusByAct[act]=Number(select.value);renderView();};
 const previous=el("button","ก่อนหน้า"),next=el("button","ถัดไป");
 previous.type="button";previous.disabled=index===0;next.type="button";next.disabled=index===stages.length-1;
 previous.onclick=()=>{state.focusByAct[act]=index-1;renderView();};
 next.onclick=()=>{state.focusByAct[act]=index+1;renderView();};
 nav.append(position,select,previous,next);section.append(nav);
 const idToEntry=new Map(E.items.map(x=>[x.id,x]));
 for(const stage of [sorted[index]]){
  const n=stage.ids.filter(id=>already.has(id)).length;
  const details=el("details",undefined,"hubCheckpoint");details.dataset.stage=stage.id;
  details.open=true;
  const summary=el("summary"),heading=el("span",undefined,"hubCheckpointTitle");
  heading.append(el("strong",stage.heading),el("small",stage.before));
  const stateText=el("span",n===stage.ids.length?"เก็บครบในเว็บ":"ยังขาด "+(stage.ids.length-n),"hubCheckpointState"+(n===stage.ids.length?" complete":""));
  summary.append(heading,stateText);details.append(summary);
  const inside=el("div",undefined,"hubCheckpointBody");
  const rule=stage.stopRule;
  if(rule){
    const missing=rule.requiredIds.filter(id=>!already.has(id));
    const guard=el("div",undefined,"hubStopGate"+(missing.length?" blocked":" reviewed"));
    guard.dataset.stopStage=stage.id;guard.dataset.stopState=missing.length?"hold":"review";
    guard.append(el("strong",missing.length?"ยังไม่ควรทำ: "+rule.action:"รายการก่อนผ่านจุดนี้บันทึกครบแล้ว — ตรวจในเกมอีกครั้ง"));
    guard.append(el("p",rule.note));
    guard.append(el("div",missing.length?"ขาดอีก "+missing.length+" บทสนทนาก่อนผ่านจุดนี้":"การติ๊กครบไม่รับรองว่าสถานะเควสต์ถูกต้องกับแพตช์ 3.30","hubStopPending"));
    inside.append(guard);
  }
  if(stage.sourceConflict){
    const conflict=el("div",undefined,"hubResearchConflict");
    conflict.dataset.conflict=stage.sourceConflict.kind;
    conflict.append(el("strong","ข้อมูลจากสองคู่มือไม่ตรงกัน — ห้ามถือว่าเส้นทางนี้ปลอดภัย"),el("p",stage.sourceConflict.summary));
    const steam=el("a","คู่มือ Steam");steam.href=stage.sourceConflict.sourceA;steam.target="_blank";steam.rel="noopener noreferrer";
    const wiki=el("a","PoE Wiki");wiki.href=stage.sourceConflict.sourceB;wiki.target="_blank";wiki.rel="noopener noreferrer";
    const refs=el("div",undefined,"hubConflictLinks");refs.append(steam,wiki);conflict.append(refs);inside.append(conflict);
  }
  if(stage.patchAlert)inside.append(el("div",stage.patchAlert,"hubResearchConflict"));
  inside.append(el("p",stage.action,"hubCheckpointAction"));
  const detailsWhy=el("details",undefined,"hubCheckpointWhy");
  detailsWhy.append(el("summary","ทำไมต้องระวัง / เงื่อนไขเพิ่มเติม"),el("p",stage.risk,"hubCheckpointRisk"));
  inside.append(detailsWhy);
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
function postQuestPanel(act){
 const stages=window.POE_CRITICAL_CHECKPOINTS?.postQuest?.[act]||[];
 if(!stages.length)return null;
 const section=el("section",undefined,"hubCritical hubPostQuests");
 section.dataset.postAct=String(act);
 const head=el("div",undefined,"hubCriticalTitle");
 head.append(el("h3","หลังจบเควสต์ · กลับไปคุย NPC"),el("p","รายการที่คู่มือปี 2025 ระบุว่าเปิดหลังส่งเควสต์ ไม่ใช่คำเตือนว่าพลาดถาวรหรือเส้นทางที่ตรวจแล้วในแพตช์ 3.30","hubSubtle"));section.append(head);
 const entriesDone=new Set(entries("ears"));
 const lookup=new Map(E.items.map(x=>[x.id,x]));
 for(const stage of stages){
  const detail=el("details",undefined,"hubCheckpoint hubPostQuest"),summary=el("summary");
  detail.dataset.postStage=stage.id;detail.open=postQuestOpen.has(stage.id);
  const title=el("span",undefined,"hubCheckpointTitle");title.append(el("strong",stage.title),el("small",stage.timing));
  const complete=stage.ids.every(id=>entriesDone.has(id));
  summary.append(title,el("span",complete?"บันทึกแล้ว":"ยังไม่บันทึก","hubCheckpointState"+(complete?" complete":"")));
  detail.append(summary);
  const body=el("div",undefined,"hubCheckpointBody");
  body.append(el("p","หลังจบเควสต์แล้ว ให้กลับไปคุย NPC ตามหัวข้อในรายการด้านล่าง และทำเครื่องหมายเมื่อฟังในเกมจริง","hubCheckpointAction"));
  for(const id of stage.ids){const x=lookup.get(id);if(x)body.append(itemCard("ears",x));}
  const reward=rewardsByQuest.get(String(act)+"|"+stage.quest);
  if(reward)body.append(el("p","รางวัลอ้างอิง "+stage.quest+": "+reward.reward+" · ข้อมูลเก่า ยังไม่รับรอง 3.30","hubCheckpointReward"));
  const link=el("a","ตรวจต้นทางบน PoE Wiki");link.href=stage.source;link.target="_blank";link.rel="noopener noreferrer";
  body.append(link);detail.append(body);
  detail.addEventListener("toggle",()=>{if(detail.open)postQuestOpen.add(stage.id);else postQuestOpen.delete(stage.id)});
  section.append(detail);
 }
 return section;
}

function specialLoreRoute(target,scope){
 const guide=window.POE_SPECIAL_LORE,info=scope==="Labyrinth"?guide?.labyrinth:guide?.vaal;
 if(!info)return;
 const items=records("lore",scope),checked=new Set(entries("lore")),done=items.filter(x=>checked.has(x.id)).length;
 const title=scope==="Labyrinth"?"The Labyrinth · สำรวจ Lore 10 ชิ้น":"Vaal Letter · สำรวจ Lore 16 ชิ้น";
 const panel=section(title);panel.classList.add("hubSpecialRoute");
 const metric=el("div",undefined,"hubActProgress");
 metric.append(el("strong","เก็บแล้ว "+done+" / "+items.length+" รายการ"),el("span","นับรวมใน No Stone Unturned 140 ชิ้น · ไม่ใช่ Achievement ใหม่","hubSubtle"));panel.append(metric);
 const note=el("p",scope==="Labyrinth"?"จัดตามบริเวณที่พบ ไม่ใช่ผังห้องตายตัว Labyrinth เปลี่ยนผังเป็นระยะ จึงต้องเก็บตามพื้นที่ที่พบจริง":"Vaal Side Area เกิดแบบสุ่ม ไม่ควรฝืนเก็บตามลำดับตัวเลข รายการด้านล่างมีทั้ง Vaal Letter และ Research Journal","hubSubtle");panel.append(note);
 const steps=el("ol",undefined,"hubSpecialSteps");
 info.steps.forEach((value,i)=>{const li=el("li");li.append(el("span","ขั้น "+(i+1),"hubSpecialStepNo"),el("span",value));steps.append(li);});panel.append(steps);
 panel.append(el("div",info.caveat,"hubNotice"));
 if(scope==="Vaal")panel.append(el("div","ข้อจำกัดโหมด: PoE Wiki ระบุว่า Vaal Side Areas ไม่เกิดใน Ruthless ดังนั้นอย่าวางแผนเก็บ No Stone Unturned ครบ 140 ชิ้นด้วยคู่มือนี้ใน Ruthless โดยไม่ตรวจข้อมูลแพตช์และโหมดที่เล่น","hubResearchConflict"));
 const source=el("a","คู่มือ No Stone Unturned (PoE Wiki)");source.href=guide.source;source.target="_blank";source.rel="noopener noreferrer";
 const refs=el("p",undefined,"hubSubtle");refs.append("ข้อมูลอ้างอิงปี 2025 · ยังไม่รับรองแพตช์ 3.30 · ",source);panel.append(refs);
 function group(id,name,hint,ids,defaultOpen){
  const filtered=ids.map(id=>L.entries.find(x=>x.id===id)).filter(Boolean);
  const n=filtered.filter(x=>checked.has(x.id)).length;
  const chapter=el("details",undefined,"hubChapter hubSpecialGroup");chapter.dataset.specialGroup=id;
  chapter.open=specialOpen.has(id)||(!specialOpen.has(id)&&defaultOpen);
  const sum=el("summary"),labelNode=el("span",undefined,"hubChapterTitle");labelNode.append(el("strong",name),el("small",hint));
  sum.append(labelNode,el("span",n+" / "+filtered.length,"hubChapterCount"));chapter.append(sum);
  const body=el("div",undefined,"hubChapterBody");
  const rows=filtered.filter(x=>state.status==="all"||(state.status==="done"?checked.has(x.id):!checked.has(x.id)))
    .filter(x=>!state.search.trim()||(label(x,"lore")+" "+x.area).toLowerCase().includes(state.search.trim().toLowerCase()));
  if(!rows.length)body.append(el("p","ไม่มีรายการตามตัวกรอง","hubEmpty"));
  else{const list=el("div",undefined,"hubList");rows.forEach(x=>list.append(itemCard("lore",x)));body.append(list);}
  chapter.append(body);
  chapter.addEventListener("toggle",()=>{if(chapter.open)specialOpen.add(id);else specialOpen.delete(id);});
  panel.append(chapter);
 }
 if(scope==="Labyrinth"){
  const groups=info.groups;
  groups.forEach((g,i)=>group("lab-"+g.id,(i+1)+". "+g.name,g.note,g.ids,i===0));
  const labWaypoints=records("waypoints","Labyrinth");
  if(labWaypoints.length){
   const chapter=el("details",undefined,"hubChapter hubSpecialGroup");
   chapter.dataset.specialGroup="lab-waypoint";
   const checkedWp=new Set(entries("waypoints"));
   const summary=el("summary"),heading=el("span",undefined,"hubChapterTitle");
   heading.append(el("strong","Waypoint ของ Labyrinth"),el("small","อีก "+labWaypoints.length+" จุดใน Locomancer · นับแยกจาก Lore"));
   summary.append(heading,el("span",labWaypoints.filter(x=>checkedWp.has(x.id)).length+" / "+labWaypoints.length,"hubChapterCount"));chapter.append(summary);
   const list=el("div",undefined,"hubChapterBody"),rows=el("div",undefined,"hubList");
   labWaypoints.forEach(x=>rows.append(itemCard("waypoints",x)));list.append(rows);chapter.append(list);panel.append(chapter);
  }
  const lnk=el("a","ข้อมูลผังและ Trials — The Lord's Labyrinth");lnk.href=info.layoutSource;lnk.target="_blank";lnk.rel="noopener noreferrer";panel.append(lnk);
 }else{
  const finder=el("details",undefined,"hubChapter hubVaalGuide");finder.open=true;
  finder.append(el("summary","1. ค้นหาชื่อ Vaal Side Area ที่พบ"),vaalPanel());panel.append(finder);
  group("vaal-letters","2. Vaal Letter","12 ข้อความ · เช็กเฉพาะชิ้นที่พบจริง",info.letters,false);
  group("vaal-journals","3. Research Journal","4 ข้อความ · นับใน No Stone Unturned เดียวกัน",info.journals,false);
 }
 target.append(panel);
}
function supplementalWarnings(act){
 const rows=window.POE_WORKBOOK_WARNINGS?.wikiRows||[];
 const linked=new Set((window.POE_CRITICAL_CHECKPOINTS?.acts?.[act]||[]).flatMap(step=>step.ids));
 const unmatched=(routes[Number(act)]||[]).filter(r=>rows.includes(r.wikiRow)&&!linked.has(r.id));
 if(!unmatched.length)return null;
 const chapter=el("details",undefined,"hubChapter hubExcelWarnings");
 chapter.dataset.excelAct=String(act);
 const sum=el("summary"),label=el("span",undefined,"hubChapterTitle");
 label.append(el("strong","คำเตือนจาก Excel ที่ต้องตรวจเพิ่ม"),el("small","อีก "+unmatched.length+" บทสนทนายังไม่อยู่ในขั้นตรวจหลัก · ไม่ได้ยืนยันแพตช์ 3.30"));
 sum.append(label,el("span",unmatched.filter(r=>entries("ears").includes(r.id)).length+" / "+unmatched.length,"hubChapterCount"));chapter.append(sum);
 const body=el("div",undefined,"hubChapterBody");
 body.append(el("p","ไฟล์อ้างอิงติด WARNING ให้รายการเหล่านี้ แต่ยังไม่มีหลักฐานเพียงพอจะวางตำแหน่งในลำดับเควสต์หลักได้อย่างปลอดภัย โปรดตรวจเงื่อนไขก่อนเดินเรื่องต่อ","hubSubtle"));
 const items=new Map(E.items.map(x=>[x.id,x])),list=el("div",undefined,"hubList");
 unmatched.forEach(r=>{const item=items.get(r.id);if(item)list.append(itemCard("ears",item));});
 body.append(list);chapter.append(body);return chapter;
}
function actSteamGuide(act){
 const data=window.POE_STEAM_WALK,phases=data?.acts?.[act]||[];
 if(!phases.length)return null;
 const allEars=new Set(entries("ears")),allLore=new Set(entries("lore")),allWaypoints=new Set(entries("waypoints")),allSidequests=new Set(entries("sidequests"));
 const start=phases.findIndex(p=>p.dialogueIds.some(id=>!allEars.has(id))||(p.loreIds||[]).some(id=>!allLore.has(id))||(p.waypointIds||[]).some(id=>!allWaypoints.has(id))||(p.sidequestIds||[]).some(id=>!allSidequests.has(id)));
 const chosen=state.steamFocusByAct[act]===undefined?Math.max(0,start):Math.max(0,Math.min(phases.length-1,state.steamFocusByAct[act]));
 const phase=phases[chosen],complete=phase.dialogueIds.filter(id=>allEars.has(id)).length;
 const box=el("section",undefined,"hubWalkthrough");box.dataset.steamAct=String(act);box.dataset.phase=phase.id;
 const header=el("div",undefined,"hubWalkHeader");
 header.append(el("span","ACT "+act+" · โหมดเดินตามพื้นที่ (อ้างอิง Steam 3.28 / Wiki 2025)","hubWalkEyebrow"),el("h3","ทำตามลำดับเพื่อเก็บ All Ears "+phases.reduce((sum,p)=>sum+p.dialogueIds.length,0)+" รายการ"),el("p",act==="4"?"แสดงหนึ่งช่วงต่อครั้ง · เชื่อม 4 Achievement เข้ากับพื้นที่และเควสต์ · ยังไม่รับรองแพตช์ 3.30":"แสดงหนึ่งช่วงต่อครั้ง · ลำดับนี้ยังไม่ผ่านการทดสอบแพตช์ 3.30 · Lore, Waypoint และเควสต์รองยังต้องตรวจจากสรุป Act","hubSubtle"));
 box.append(header);
 const control=el("div",undefined,"hubStepNavigator hubWalkNavigator");
 const position=el("strong","ช่วง "+(chosen+1)+" / "+phases.length,"hubStepPosition");
 const select=el("select");select.setAttribute("aria-label","เลือกช่วงการเดิน Act "+act);
 phases.forEach((p,i)=>{const op=el("option",(i+1)+". "+p.place);op.value=String(i);select.append(op)});
 select.value=String(chosen);
 const goto=i=>{state.steamFocusByAct[act]=i;renderView();document.querySelector('[data-steam-act="'+act+'"]')?.scrollIntoView({block:"start"})};
 select.onchange=()=>goto(Number(select.value));
 const prev=el("button","ก่อนหน้า"),next=el("button","ถัดไป");
 prev.type="button";next.type="button";prev.disabled=chosen===0;next.disabled=chosen===phases.length-1;
 prev.onclick=()=>goto(chosen-1);next.onclick=()=>goto(chosen+1);
 control.append(position,select,prev,next);box.append(control);
 const head=el("div",undefined,"hubWalkFocus");
 head.append(el("h4",phase.heading),el("p","พื้นที่: "+phase.place+" · เควสต์: "+phase.quest));
 const count=el("span",complete+"/"+phase.dialogueIds.length+" บทสนทนาที่บันทึก","hubWalkCount");
 head.append(count);box.append(head);
 const pending=(phase.stopIds||[]).filter(id=>!allEars.has(id));
 if(phase.stop){
   const gate=el("div",undefined,"hubStopGate"+(pending.length?" blocked":" reviewed"));
   gate.dataset.stopPhase=phase.id;gate.dataset.stopState=pending.length?"hold":"review";
   gate.append(el("strong",pending.length?"ยังไม่ควรผ่านจุดนี้":"รายการที่ผูกกับข้อห้ามนี้ติ๊กครบแล้ว · ต้องตรวจในเกมอีกครั้ง"),el("p",phase.stop));
   if(pending.length){
     const who=pending.map(id=>{const x=E.items.find(z=>z.id===id);return x?label(x,"ears"):"ID "+id;});
     gate.append(el("div","ยังไม่บันทึก "+pending.length+" บทสนทนา: "+who.slice(0,3).join(" / ")+(who.length>3?" และอีก "+(who.length-3):""),"hubStopPending"));
   }
   box.append(gate);
 }
 if(phase.sourceConflict){
   const conflict=el("div",undefined,"hubResearchConflict");conflict.dataset.conflict="steam-vs-wiki";
   conflict.append(el("strong","ลำดับ Bandits จากสองคู่มือไม่ตรงกัน"),el("p",phase.sourceConflict));
   const links=el("div",undefined,"hubConflictLinks");
   const steam=el("a","คู่มือ Steam");steam.href=data.source;steam.target="_blank";steam.rel="noopener noreferrer";
   const wiki=el("a","PoE Wiki");wiki.href=data.wiki;wiki.target="_blank";wiki.rel="noopener noreferrer";
   links.append(steam,wiki);conflict.append(links);box.append(conflict);
 }
 if(phase.patchProblem){
   const alert=el("div",undefined,"hubResearchConflict");alert.dataset.fairgravesAlert="true";
   alert.append(el("strong","ปัญหาที่มีรายงานจากแพตช์ 3.29"),el("p",phase.patchProblem),el("p","หากคุย NPC ไม่ได้ ห้ามติ๊กว่าฟังแล้ว และอย่าสรุปว่าตัวละครนี้สามารถทำ All Ears ครบได้","hubSubtle"));box.append(alert);
 }
 const actions=el("ol",undefined,"hubWalkActions");
 phase.actions.forEach(txt=>actions.append(el("li",txt)));box.append(actions);
 if(phase.visual){
   const v=phase.visual;
   const visual=el("details",undefined,"hubQuestVisual");
   visual.dataset.visualPhase=phase.id;
   visual.append(el("summary","ดูภาพจำลองหน้า Quest · "+v.title));
   const body=el("div",undefined,"hubQuestVisualBody");
   const label=el("div",undefined,"hubVisualSourceWarning");
   label.append(el("strong","ภาพจำลองเพื่ออธิบาย — ไม่ใช่ภาพหน้าจอเกมจริง"),
     el("span","ตำแหน่งแผนที่และรูปแบบ UI เป็นภาพประกอบ ไม่ใช่หลักฐานยืนยันเควสต์ในแพตช์ 3.30"));
   body.append(label);
   const figure=el("figure",undefined,"hubQuestFigure");
   const img=el("img");img.src=v.asset;img.alt=v.alt;img.loading="lazy";img.decoding="async";
   figure.append(img,el("figcaption","ตัวอย่างแนวคิดหน้า World / Quest (ปุ่ม U ตามค่าปกติ) · "+v.title));body.append(figure);
   const check=el("div",undefined,"hubVisualCheck");
   check.append(el("strong","จุดที่ต้องตรวจในเกมจริง"),el("p",v.check));
   body.append(check);
   const links=el("div",undefined,"hubVisualLinks");
   const full=el("a","เปิดภาพจำลองขนาดเต็ม");full.href=v.asset;full.target="_blank";full.rel="noopener noreferrer";
   const source=el("a","ตรวจเงื่อนไขเควสต์จาก PoE Wiki");source.href=v.source;source.target="_blank";source.rel="noopener noreferrer";
   links.append(full,source);body.append(links);
   visual.append(body);box.append(visual);
 }
 const npc=el("section",undefined,"hubWalkCategory");
 npc.append(el("h4","บทสนทนาที่ต้องเก็บช่วงนี้"),el("p","ติ๊กเฉพาะเมื่อฟังในเกมจริงแล้ว · รายการอื่นยังอยู่ในหมวดหลักด้วย","hubSubtle"));
 const rows=el("div",undefined,"hubList");
 const ids=phase.dialogueIds.slice(0,5),hidden=phase.dialogueIds.slice(5);
 ids.forEach(id=>{const x=E.items.find(z=>z.id===id);if(x)rows.append(itemCard("ears",x))});
 npc.append(rows);
 if(hidden.length){
   const details=el("details",undefined,"hubWalkMore");details.open=steamExpanded.has(phase.id);
   details.append(el("summary","บทสนทนาที่ต้องเก็บเพิ่มอีก "+hidden.length+" รายการ"));
   const more=el("div",undefined,"hubList");hidden.forEach(id=>{const x=E.items.find(z=>z.id===id);if(x)more.append(itemCard("ears",x))});
   details.append(more);details.addEventListener("toggle",()=>{if(!details.isConnected)return;if(details.open)steamExpanded.add(phase.id);else steamExpanded.delete(phase.id);});
   if(pending.some(id=>hidden.includes(id))){
     const gate=box.querySelector('[data-stop-phase="'+phase.id+'"]');
     if(gate){const reveal=el("button","เปิดรายการบทสนทนาที่ต้องตรวจ");reveal.type="button";reveal.onclick=()=>{details.open=true;details.scrollIntoView({block:"center"});};gate.append(reveal);}
   }
   npc.append(details);
 }
 box.append(npc);
 if(phase.loreIds?.length){
   const found=phase.loreIds.filter(id=>allLore.has(id)).length;
   const section=el("details",undefined,"hubWalkLore");
   section.append(el("summary","Lore ที่เกี่ยวข้องในช่วงนี้ · "+found+" / "+phase.loreIds.length));
   section.append(el("p",act==="1"?"Letters of Exile อาจสุ่มซ้ำ ให้ตรวจยอดใน Achievement ที่เกมนับจริง":phase.id==="library"?"หนังสือใน Library อาจมีข้อความซ้ำ ให้ตรวจชื่อครบทั้ง 17 แบบกับยอดในเกมจริง":"อ่าน Lore ตามชื่อและพื้นที่ในเกมก่อนทำเครื่องหมาย; ข้อมูลยังไม่รับรองแพตช์ 3.30","hubSubtle"));
   const list=el("div",undefined,"hubList");
   phase.loreIds.forEach(id=>{const x=L.entries.find(z=>z.id===id);if(x)list.append(itemCard("lore",x))});
   section.append(list);box.append(section);
 }
 for(const [type,ids,checked,heading] of [
  ["waypoints",phase.waypointIds||[],allWaypoints,"Locomancer · Waypoint"],
  ["sidequests",phase.sidequestIds||[],allSidequests,"No Loose Ends · เควสต์รอง"]
 ]){
   if(!ids.length)continue;
   const group=el("details",undefined,"hubWalkLore hubWalkExtra");group.dataset.walkExtra=type;
   group.append(el("summary",heading+" ในช่วงนี้ · "+ids.filter(id=>checked.has(id)).length+" / "+ids.length));
   group.append(el("p",type==="waypoints"?"ติ๊กเมื่อเปิด Waypoint จริงในเกม · รหัสเดิมร่วมกับสรุป Act":"ติ๊กหลังทำเควสต์เสร็จในเกม · รหัสเดิมร่วมกับสรุป Act","hubSubtle"));
   const list=el("div",undefined,"hubList");
   ids.forEach(id=>{const x=collections[type].find(item=>item.id===id);if(x)list.append(itemCard(type,x));});
   group.append(list);box.append(group);
 }
 const foot=el("div",undefined,"hubWalkFooter");
 const ref=el("a","ตรวจลำดับกับคู่มือ Steam");ref.href=data.source;ref.target="_blank";ref.rel="noopener noreferrer";
 foot.append(el("span","ยังไม่ได้ทดสอบจริงในแพตช์ 3.30 · สีแดงคือข้อควรหยุดตรวจ ไม่ใช่สถานะที่เกมส่งมา"),ref);box.append(foot);
 return box;
}
function journeyActGuide(act){
 const card=el("section",undefined,"hubActMission");
 card.dataset.goalAct=act;
 const types=scopeTypes(act),summaries=types.map(type=>{
   const list=records(type,act),done=new Set(entries(type));
   return {type,total:list.length,done:list.filter(x=>done.has(x.id)).length,left:list.filter(x=>!done.has(x.id))};
 }).filter(x=>x.total>0);
 const complete=summaries.every(x=>x.done===x.total);
 const h=el("div",undefined,"hubActMissionHead");
 h.append(el("h3",complete?"Act "+act+" · Checklist บันทึกครบแล้ว":"Act "+act+" · ทำอย่างไรให้เก็บครบ"),el("p",complete?"ตรวจยอดที่เกมนับจริงก่อนออกจาก Act; การติ๊กครบไม่ยืนยัน Achievement จากเกม":"ก่อนเดินเรื่องต่อ ให้ตรวจบทสนทนาที่เสี่ยงพลาด แล้วเก็บ Lore, Waypoint และเควสต์รองที่พบใน Act นี้","hubSubtle"));
 card.append(h);
 const risk=(window.POE_CRITICAL_CHECKPOINTS?.acts?.[act]||[]).filter(s=>s.ids.some(id=>!entries("ears").includes(id)));
 if(risk.length){
   const top=el("div",undefined,"hubActMissionWarning");
   const text=el("div",undefined);text.append(el("strong","จุดเสี่ยงจากคู่มือเก่าที่ยังไม่บันทึกครบ: "+risk.length+" กลุ่ม"),el("span","ตรวจเหตุการณ์ก่อนเปลี่ยนสถานะเควสต์ · ไม่ใช่ลำดับเดินเกมที่รับรอง"));
   const jump=el("button","ดูจุดตรวจที่ยังขาด");jump.type="button";jump.onclick=()=>{
      if(["1","2","3","4"].includes(act)){const phases=window.POE_STEAM_WALK?.acts?.[act]||[];const found=phases.findIndex(p=>p.dialogueIds.some(id=>risk[0].ids.includes(id)));state.steamFocusByAct[act]=Math.max(0,found);renderView();document.querySelector('[data-steam-act="'+act+'"]')?.scrollIntoView({block:"start"});return;}
      const stages=window.POE_CRITICAL_CHECKPOINTS?.acts?.[act]||[];
      state.focusByAct[act]=stages.findIndex(s=>s.id===risk[0].id);renderView();
      const section=document.querySelector('[data-critical-act="'+act+'"]');section?.scrollIntoView({block:"start"});
   };
   top.append(text,jump);card.append(top);
 }
 const list=el("div",undefined,"hubActMissionList");
 for(const s of summaries){
   const row=el("div",undefined,"hubActMissionItem");
   const left=el("div",undefined,"hubActMissionItemText");
   left.append(el("strong",uiNames[s.type]),el("small",s.done+" / "+s.total+(s.done===s.total?" · บันทึกครบ":" · ขาด "+(s.total-s.done))));
   if(s.left.length){
      const example=el("span","รายการที่ยังขาด: "+label(s.left[0],s.type),"hubActMissionExample");
      left.append(example);
   }
   const btn=el("button",s.done===s.total?"เปิดตรวจซ้ำ":"ดูรายการที่ยังขาด");btn.type="button";
   btn.dataset.goalCategory=s.type;
   btn.onclick=()=>{
     for(const type of types)routeOpen.delete(act+":"+type);
     routeOpen.add(act+":"+s.type);state.status=s.done===s.total?"all":"todo";state.search="";state.limit=12;
     renderToolbar();renderView();
     document.querySelector('#hubView [data-group="'+s.type+'"]')?.scrollIntoView({block:"start"});
   };
   row.append(left,btn);list.append(row);
 }
 const gate=el("details",undefined,"hubActMissionGate");
 const gateHead=el("summary",undefined);
 const missing=summaries.reduce((sum,x)=>sum+x.total-x.done,0);
 gateHead.append(el("strong","ก่อนออกจาก Act นี้ · ตรวจ "+summaries.length+" หมวด"),el("span",missing===0?"บันทึกครบทุกหมวดแล้ว":"ยังขาด "+missing+" รายการ"));
 gate.append(gateHead,list);card.append(gate);
 const bottom=el("p","ใช้ช่องติ๊กเฉพาะหลังทำจริงในเกม · แต่ละ Achievement ต้องตรวจยอดของเกมอีกครั้ง · ข้อมูลเควสต์ยังไม่รับรองแพตช์ 3.30","hubSubtle");
 card.append(bottom);return card;
}
function epilogueRoute(target){
 const all=records("waypoints","Epilogue"),done=new Set(entries("waypoints"));
 const panel=section("Epilogue · Waypoint ที่ต้องตรวจ");panel.dataset.specialScope="Epilogue";
 panel.append(el("p","หลังจบ Act 10 ตรวจ Waypoint อีก 2 จุดจากฐานข้อมูล Locomancer เดิม ไม่เพิ่มจำนวน Achievement ใหม่ · รายการยังไม่ได้รับรองกับแพตช์ 3.30","hubSubtle"));
 const count=el("div","บันทึก "+all.filter(x=>done.has(x.id)).length+" / "+all.length+" · นับรวมใน Locomancer 91 จุด","hubActProgress");panel.append(count);
 const list=el("div",undefined,"hubList");
 all.forEach(x=>list.append(itemCard("waypoints",x)));panel.append(list);target.append(panel);
}
function renderRoute(target){if(state.act==="Labyrinth"||state.act==="Vaal"){specialLoreRoute(target,state.act);return;}if(state.act==="Epilogue"){epilogueRoute(target);return;}const act=state.act==="all"?"1":state.act, panel=section("Act "+act+" · รายการเก็บ Achievement");
panel.append(el("p","ทำเครื่องหมายหลังเก็บในเกมแล้ว · รายการจะยังอยู่ที่เดิมและเปลี่ยนเป็น “เก็บแล้ว” · คำเตือนสำคัญแสดงก่อนรายละเอียดอื่น","hubSubtle"));
const countAll=["ears","lore","waypoints","sidequests"].reduce((sum,type)=>sum+records(type,act).length,0);
const doneAll=["ears","lore","waypoints","sidequests"].reduce((sum,type)=>sum+records(type,act).filter(x=>entries(type).includes(x.id)).length,0);
const riskRemaining=records("ears",act).filter(x=>window.POE_ITEM_DESCRIPTIONS?.get("ears",x,act==="2"?getSafety():undefined)?.caution&&!entries("ears").includes(x.id)).length;
const quick=el("div",undefined,"hubActProgress");
quick.append(el("strong","เก็บแล้ว "+doneAll+" / "+countAll+" รายการ"),el("span",riskRemaining+" บทสนทนามีคำเตือนที่ต้องตรวจ","hubSubtle"));panel.append(quick);
panel.append(journeyActGuide(act));
if(["1","2","3","4"].includes(act)){
 const route=actSteamGuide(act);if(route)panel.append(route);
 if(["2","3","4"].includes(act)){const more=el("details",undefined,"hubHistoricalRisks");more.dataset.historicalRisks=act;more.open=historicalOpen.has(act);const summary=el("summary","ตรวจจุดเสี่ยงรายเควสต์เพิ่มเติม · แหล่งอ้างอิง PoE Wiki");summary.onclick=()=>{if(more.open)historicalOpen.delete(act);else historicalOpen.add(act);};more.append(summary);const critical=criticalPanel(act);if(critical)more.append(critical);more.addEventListener("toggle",()=>{if(!more.isConnected)return;if(more.open)historicalOpen.add(act);else historicalOpen.delete(act);});panel.append(more);}
 }else{const critical=criticalPanel(act);if(critical)panel.append(critical);}
const extraWarn=supplementalWarnings(act);if(extraWarn)panel.append(extraWarn);
if(act==="10"){panel.append(el("p","Act 10: ยังไม่พบคำเตือนชนิดก่อนเปลี่ยนสถานะเควสต์ในฐานข้อมูลปี 2025 ไม่ได้หมายความว่า Act 10 ปลอดภัย หรือใช้ยืนยันแพตช์ 3.30 ได้","hubNotice"));const followup=postQuestPanel(act);if(followup)panel.append(followup);}
["ears","lore","waypoints","sidequests"].forEach(type=>{
const rows=records(type,act),count=rows.filter(x=>entries(type).includes(x.id)).length;
const chapter=el("details",undefined,"hubChapter");chapter.dataset.group=type;
chapter.open=routeOpen.has(act+":"+type)||!!state.search.trim();
const summary=el("summary"),left=el("span",undefined,"hubChapterTitle");
left.append(el("strong",uiNames[type]),el("small",names[type]));summary.append(left,el("span",count+" / "+rows.length,"hubChapterCount"));
chapter.append(summary);
const content=el("div",undefined,"hubChapterBody");
if(type==="ears"){const note=el("p",undefined,"hubSubtle");const source=el("a","PoE Wiki · All Ears / Act "+act);source.href="https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_"+act;source.target="_blank";source.rel="noopener noreferrer";note.append("เรียงตามแถว Wiki 2025 · ",source);content.append(note);}
addList(content,type,act,state.limit,true);chapter.append(content);
summary.addEventListener("click",()=>{if(state.search.trim())return;const key=act+":"+type;if(chapter.open)routeOpen.delete(key);else routeOpen.add(key);});
chapter.addEventListener("toggle",()=>{if(!chapter.isConnected||state.search.trim())return;const key=act+":"+type;if(chapter.open)routeOpen.add(key);else routeOpen.delete(key);});
panel.append(chapter);
});const rewardChapter=renderActRewards(act);if(rewardChapter)panel.append(rewardChapter);target.append(panel);}
function renderCategory(target,type){const panel=section(uiNames[type]+" · "+names[type]);
const desc={lore:"Lore 140 รายการ มีทั้ง Letters of Exile, หนังสือ Library, Labyrinth และ Vaal Side Areas; ชื่อ/ตำแหน่งจากคู่มือเก่า อาจต่างจากแพตช์ใหม่",
waypoints:"รายการ Waypoint 91 จุดจากชุดอ้างอิง 3.9 อาจไม่ตรงกับแพตช์ใหม่ทุกจุด",
sidequests:"Side Quest 30 รายการจากชุดอ้างอิง 3.9 ต้องตรวจ quest-state ก่อนรับรอง",
ears:"All Ears 484 บทสนทนา (รายการเดิมแสดงด้านล่าง)"};
panel.append(el("p",desc[type],"hubSubtle"));
if(type==="lore"){
 const specialPick=el("div",undefined,"hubLoreNavigation");
 specialPick.append(el("p","No Stone Unturned: Campaign 114 · Labyrinth 10 · Vaal Side Areas 16 (รวม 140 ชิ้น)","hubSubtle"));
 [["Labyrinth","เปิดขั้นตอน The Labyrinth · 10"],["Vaal","เปิดคู่มือ Vaal Letter · 16"]].forEach(([scope,txt])=>{
  const btn=el("button",txt);btn.type="button";btn.onclick=()=>{state.routeAct=scope;openTab("route");};specialPick.append(btn);
 });
 panel.append(specialPick);
const tips=el("p","สำรวจ Lore ในเกมโดยคลิกวัตถุให้ระบบนับ ไม่จำเป็นต้องอ่านข้อความจนจบ · Letters of Exile และหนังสือใน The Library อาจต้องเข้า Instance ใหม่เพื่อให้พบทุกชิ้น","hubNotice");panel.append(tips);
const vaal=el("details",undefined,"hubChapter hubVaal");vaal.append(el("summary","ค้นหา Vaal Letter ตามชื่อ Vaal Side Area"),vaalPanel());panel.append(vaal);
}
addList(panel,type,state.act,state.limit);target.append(panel);}
function getSafety(){const c=active(),s=getBackupState(LORE),r=s.byCharacter[c.id]||{};return r.safety&&typeof r.safety==="object"?r.safety:{};}
function updateSafety(key,value){const c=active(),s=getBackupState(LORE),r=s.byCharacter[c.id]||{};r.safety=Object.assign({},r.safety||{}, {[key]:value});s.byCharacter[c.id]=r;
try{localStorage.setItem(LORE,JSON.stringify(s));refresh();}catch(e){alert("บันทึกคำเตือน Act 2 ไม่ได้");}}
function safetyPanel(){const wrap=el("div",undefined,"hubPanel");wrap.append(el("h3","ก่อนตัดสินใจกับ Bandits · ตรวจ The Darkness"),el("p","แหล่งอ้างอิงยังขัดแย้งเรื่องคุย Bandits ก่อนหรือหลัง Ancient Seal แต่เห็นตรงกันว่าห้ามฆ่าก่อนเก็บ The Darkness ให้ทำเครื่องหมายเฉพาะสิ่งที่เกิดขึ้นจริง ไม่ใช้เครื่องหมายเหล่านี้รับรองลำดับเควสต์","hubSubtle"));
wrap.append(el("p","สำคัญสำหรับ All Ears: คู่มือปี 2025 อธิบายหัวข้อ Eramir หลังฆ่า Bandits ตัวแรก ตัวที่สอง และหลังฆ่าครบทั้งสาม หากเลือกช่วย Bandit เส้นทางนี้จะใช้ตามลำดับเดียวกันไม่ได้ และยังไม่มีหลักฐานทดสอบการแก้ไขด้วย Book of Reform ในแพตช์ 3.30","hubCheckpointRisk"));
const grid=el("div",undefined,"hubCheckGrid"),checks=[["alira","เคยคุย Alira (ยังไม่รับรองเวลา)"],["oak","เคยคุย Oak (ยังไม่รับรองเวลา)"],["kraityn","เคยคุย Kraityn (ยังไม่รับรองเวลา)"],["seal","เปิด Ancient Seal แล้ว"],["darkness","ฟัง The Darkness ครบตามเงื่อนไขแล้ว"]];
const s=getSafety();
checks.forEach(([id,title])=>{const lab=el("label"),inp=el("input");inp.type="checkbox";inp.checked=s[id]===true;inp.dataset.safety=id;inp.onchange=()=>updateSafety(id,inp.checked);lab.append(inp,document.createTextNode(title));grid.append(lab);});
wrap.append(grid);
const choices=el("div",undefined,"hubControls");[["first","Bandit ที่ฆ่าคนแรก"],["second","Bandit ที่ฆ่าคนที่สอง"]].forEach(([k,l])=>{const div=el("div");const labelNode=el("label",l),sel=el("select");sel.dataset.kill=k;[["","ยังไม่ได้ฆ่า / ไม่แน่ใจ"],["Alira","Alira"],["Oak","Oak"],["Kraityn","Kraityn"]].forEach(([v,t])=>{const o=el("option",t);o.value=v;sel.append(o);});sel.value=s[k]||"";sel.onchange=()=>{const v=sel.value,other=k==="first"?"second":"first";if(v&&v===getSafety()[other]){alert("Bandits ที่ฆ่าคนแรกและคนที่สองต้องต่างกัน");sel.value=s[k]||"";return;}updateSafety(k,v);};div.append(labelNode,sel);choices.append(div);});wrap.append(choices);
const status=el("div",undefined,"hubNotice"),ss=getSafety(),intro=["alira","oak","kraityn"].every(k=>ss[k]),before=ss.seal&&ss.darkness;
let text=!before?"ยังไม่ได้บันทึก Ancient Seal และ The Darkness ครบ — อย่าเพิ่งฆ่าหรือช่วย Bandits":"บันทึก Ancient Seal และ The Darkness แล้ว แต่ยังมีข้อขัดแย้งเรื่องลำดับคุย Bandits; ตรวจในเกมก่อนเลือกเส้นทาง";
if((ss.first||ss.second)&&!before)text="ระวัง: บันทึกว่าฆ่า Bandit แล้วแต่ยังไม่ยืนยัน Ancient Seal / The Darkness — อาจพลาดบทสนทนา";
status.className="hubNotice";status.textContent=text;wrap.append(status);
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
const input=el("input");input.type="search";input.placeholder="พิมพ์ชื่อ เช่น Concealed Caldarium";input.value=state.vaalQuery;input.setAttribute("aria-label","ค้นหาชื่อ Vaal Side Area");const result=el("div",undefined,"hubList");box.append(input,result);
const show=()=>{result.replaceChildren();const q=input.value.trim().toLowerCase();if(q.length<2){result.append(el("p","พิมพ์อย่างน้อย 2 ตัวอักษรเพื่อหาชื่อ Vaal Side Area","hubSubtle"));return;}const entries=vaalMap.filter(x=>(x[0]+" "+x[2]).toLowerCase().includes(q)).slice(0,10);
entries.forEach(m=>{const lore=L.entries.find(x=>x.act==="Vaal"&&x.name.toLowerCase().includes(m[1].toLowerCase()));const r=el("div",undefined,"hubItem"),info=el("div",undefined,"hubText");info.append(el("div",m[0],"hubName"),el("div",m[2]+" · "+(lore?lore.name+" · Wiki #"+(lore.wikiRow||"?"):"ยังไม่พบรายการตรงกัน"),"hubMeta"));if(lore){const b=el("button",entriesForVaal(lore)?"สำรวจแล้ว · ยกเลิก":"บันทึกว่าสำรวจแล้ว");b.onclick=()=>writeMarks("lore",lore.id,!entriesForVaal(lore));r.append(b);}r.prepend(info);result.append(r)});
if(!entries.length)result.append(el("div","ไม่พบพื้นที่นี้ในตารางที่ตรวจชื่อไว้ อย่าเดา Lore จากชื่อที่คล้ายกัน","hubNotice"));};input.oninput=()=>{state.vaalQuery=input.value;show();};show();const ref=el("a","ที่มา: PoE Wiki — Vaal side area");ref.href="https://www.poewiki.net/wiki/Vaal_side_area";ref.target="_blank";ref.rel="noopener noreferrer";box.append(ref);return box;}
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
    b.onclick=()=>{state.act=String(i);state.limit=12;strip.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));renderView();};
    strip.append(b);
  }
  [["Labyrinth","Labyrinth · 10"],["Vaal","Vaal Letter · 16"],["Epilogue","Epilogue · 2"]].forEach(([id,name])=>{
    const btn=el("button",name);btn.type="button";btn.dataset.act=id;btn.setAttribute("aria-pressed",String(state.act===id));
    btn.onclick=()=>{state.act=id;state.routeAct=id;state.limit=12;state.search="";renderToolbar();renderView();};
    strip.append(btn);
  });
  t.append(strip);
  requestAnimationFrame(()=>{const chosen=strip.querySelector('[aria-pressed="true"]');if(chosen){strip.scrollLeft=Math.max(0,chosen.offsetLeft-strip.offsetLeft-16);}});
}
const controls=el("div",undefined,"hubControls"),act=el("select"),status=el("select"),search=el("input");
act.setAttribute("aria-label","เลือก Act หรือพื้นที่");
const acts=[["all","ทุก Act"],...[1,2,3,4,5,6,7,8,9,10].map(a=>[String(a),"Act "+a]),["Labyrinth","Labyrinth"],["Vaal","Vaal Side Areas"],["Epilogue","Epilogue"]];
acts.filter(([v])=>state.tab!=="route"||v!=="all").forEach(([v,label])=>{const o=el("option",label);o.value=v;act.append(o);});
if(state.tab==="route"&&state.act==="all")state.act="1";act.value=state.act;if(act.selectedIndex<0){act.value="all";state.act=act.value;}
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
const overview=el("section",undefined,"hubPanel");overview.id="hubOverview";overview.append(el("h2","เส้นทางสู่ 100%"),el("p","เป้าหมาย 4 Achievement · ความคืบหน้าเป็นบันทึกส่วนตัว ไม่ใช่การยืนยันจากเกม","hubSubtle"));const stats=el("div",undefined,"hubStats");stats.id="hubStats";overview.append(stats);profile.after(overview);
const controls=el("section",undefined);controls.id="hubToolbar";overview.after(controls);const view=el("section");view.id="hubView";controls.after(view);
const status=el("div","ฐานข้อมูลอ้างอิง PoE Wiki ปี 2025 / ชุดเก่า 3.9 · ยังไม่รับรองแพตช์ 3.30 เลือกเวอร์ชันข้อมูลด้านล่างก่อนใช้รายการ","hubNotice hubDataNotice");nav.after(status);
$("patch").addEventListener("change",()=>{renderView();});
$("character").addEventListener("change",()=>{setTimeout(refresh,0);});const obs=new MutationObserver(()=>{setTimeout(refresh,0);});obs.observe($("character"),{childList:true});window.addEventListener("storage",e=>{if([MAIN,LORE,EXTRA,HUB].includes(e.key))refresh();});
const initial=["route","ears","lore","waypoints","sidequests","review","collection"].includes(location.hash.slice(1))?location.hash.slice(1):"route";openTab(initial);
}
boot();
})();
