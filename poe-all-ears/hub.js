/* Unified Achievement Companion: progressive single-page UI. Old All Ears v1 stays canonical. */
(function(){
"use strict";
const E=window.ALL_EARS_DATA,L=window.NO_STONE_DATA,X=window.POE_EXTRA_TRACKERS,B=window.POE_HUB_BRIDGE,LANG=window.POE_LANGUAGE;
if(!E||!L||!X||!B||!LANG){return;}
const tr=(th,en)=>LANG.tr(th,en),gameName=s=>LANG.term(s),descEN=()=>LANG.get().description==="en";
const MAIN="poe-all-ears-user-data-v1",LORE="poe-companion-lore-v1",EXTRA="poe-companion-extras-v1",HUB="poe-unified-review-v2",RULER="poe-act9-ruler-choice-v1";
const collections={ears:E.items,lore:L.entries,waypoints:X.waypoints,sidequests:X.sidequests};
const totals={ears:484,lore:140,waypoints:91,sidequests:30};
const rewardIndex=window.POE_QUEST_REWARDS?.acts||[];
const rewardsByQuest=new Map(rewardIndex.flatMap(a=>a.quests.map(q=>[String(a.act)+"|"+q.name,q])));
const rewardTypes={passive:"Passive Skill Point",refund:"Passive Refund Point",gem:"Skill / Support Gem",item:"ไอเทม / อุปกรณ์",choice:"ตัวเลือก Bandits"};
const rewardPriority=q=>q.type==="passive"?tr("ควรเก็บ · Passive Point","Useful · Passive Skill Point"):q.type==="refund"?tr("ควรเก็บ · Refund Point","Useful · Passive Refund Point"):q.type==="choice"?tr("ระวัง · มีผลต่อทางเลือก","Choice affects your character"):tr("ตามความต้องการ · ไม่ใช่รางวัล Achievement","Optional reward · not an achievement unlock");
const itemPriority=(type,item,guide)=>type==="ears"&&(guide?.caution||(window.POE_WORKBOOK_WARNINGS?.wikiRows||[]).includes(getRisk({type:"ears",id:item.id,act:item.act})?.wikiRow))?"ระวังพลาด":type==="sidequests"?"จำเป็นต่อ No Loose Ends":type==="ears"?"จำเป็นต่อ All Ears":type==="lore"?"จำเป็นต่อ No Stone Unturned":"จำเป็นต่อ Locomancer";

const names={ears:"All Ears",lore:"No Stone Unturned",waypoints:"Locomancer",sidequests:"No Loose Ends"};
const uiNames={ears:"บทสนทนา NPC",lore:"สำรวจ Lore",waypoints:"จุดวาร์ป (Waypoint)",sidequests:"เควสต์รอง"};
const categoryName=type=>tr(uiNames[type],{ears:"NPC dialogues",lore:"Lore",waypoints:"Waypoints",sidequests:"Side quests"}[type]);
const verbs={ears:"ฟังแล้ว",lore:"สำรวจแล้ว",waypoints:"เปิดแล้ว",sidequests:"ทำสำเร็จ"};
const routeOpen=new Set(); // Detailed category lists start collapsed; the next-step guide is the primary surface.
const criticalOpen=new Set(["a1-glyphs","a2-darkness","a3-clarissa","a4-deshret","a5-utula","a6-karui","a7-den","a8-love","a9-adus"]);
const postQuestOpen=new Set(["a10-safe-passage"]);
const specialOpen=new Set(["lab-plaza"]);
const steamExpanded=new Set();
const walkExpanded=new Set(); // Current-step Lore/Waypoint/sidequest disclosures survive checkbox re-renders.
const historicalOpen=new Set();
const routeKeys=[1,2,3,4,5,6,7,8,9,10],routes={};
routeKeys.forEach(a=>{const r=window["ALL_EARS_ROUTE_ACT"+a];if(r&&Array.isArray(r.records))routes[a]=r.records;});
const state={tab:"route",collectionType:"ears",act:"1",routeAct:"1",collectionAct:"all",status:"all",search:"",limit:12,reviewType:"lore",gameCount:"",focusByAct:{},vaalQuery:"",steamFocusByAct:{},skippedRisk:null,fairgravesExpanded:null,referenceShelfOpen:false,evidenceExpandedByAct:{}};
const $=id=>document.getElementById(id);
function el(tag,text,cls){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;}
function safeParse(key){try{return JSON.parse(localStorage.getItem(key))||null;}catch(e){return null;}}
function validIDs(type,ids){const max=totals[type];return Array.isArray(ids)?[...new Set(ids.filter(i=>Number.isInteger(i)&&i>=1&&i<=max))].sort((a,b)=>a-b):[];}
function active(){const s=B.read(),id=$("character").value;return s.characters.find(c=>c.id===id)||s.characters.find(c=>c.id===s.active)||s.characters[0];}
function rulerChoice(){
 const char=active();
 const stored=safeParse(RULER);
 return char&&stored&&["Irasha","Tasuni"].includes(stored[char.id])?stored[char.id]:"undecided";
}
function saveRulerChoice(choice){
 const char=active();if(!char||!["undecided","Irasha","Tasuni"].includes(choice))return;
 const stored=safeParse(RULER)||{};
 if(choice==="undecided")delete stored[char.id];else stored[char.id]=choice;
 try{localStorage.setItem(RULER,JSON.stringify(stored));renderSummary();renderView();}catch(_){alert(tr("ไม่สามารถบันทึกตัวเลือกผู้ปกครองได้","Could not save the ruler choice."));}
}
function entries(type){const char=active();if(!char)return [];if(type==="ears")return validIDs("ears",char.checked);
const raw=safeParse(type==="lore"?LORE:EXTRA),rec=raw&&raw.version===1&&raw.byCharacter&&raw.byCharacter[char.id];
return validIDs(type,rec&&rec[type]);}
function progress(type){return entries(type).length;}
function getBackupState(key){const data=safeParse(key);return data&&data.version===1&&data.byCharacter&&typeof data.byCharacter==="object"&&!Array.isArray(data.byCharacter)?data:{version:1,byCharacter:{}};}
function writeMarks(type,id,done){if(type==="ears"){const ok=B.mark(id,done);if(ok)refresh();return;}
const key=type==="lore"?LORE:EXTRA, char=active();if(!char)return;
const s=getBackupState(key),rec=s.byCharacter[char.id]||{},before=validIDs(type,rec[type]),next=done?[...new Set(before.concat(id))]:before.filter(i=>i!==id);
rec[type]=validIDs(type,next);s.byCharacter[char.id]=rec;
try{localStorage.setItem(key,JSON.stringify(s));refresh();}catch(e){alert(tr("บันทึกข้อมูลไม่ได้ กรุณาสำรองข้อมูลและตรวจพื้นที่เก็บข้อมูลเบราว์เซอร์","Could not save progress. Back up your data and check browser storage availability."));}}
function getRisk(x){if(x.type!=="ears")return null;return (routes[x.act]||[]).find(r=>r.id===x.id)||null;}
function sortedAllEars(act){const base=E.items.filter(x=>String(x.act)===String(act)),r=routes[Number(act)]||[];if(!r.length)return base;
const byId=new Map(base.map(x=>[x.id,x]));return r.map(x=>byId.get(x.id)).filter(Boolean);}
function records(type,act){if(type==="ears"){if(act==="all")return E.items;return sortedAllEars(act);}return collections[type].filter(x=>act==="all"||String(x.act)===String(act));}
function label(x,type){if(type==="ears"&&x.act===2){const hint=window.POE_ITEM_DESCRIPTIONS?.get(type,x,getSafety());if(hint?.displayLabel)return descEN()&&hint.displayLabelEN?hint.displayLabelEN:hint.displayLabel;}return LANG.entry(type,x,type==="lore"&&x.id===73?"Bronze Plaque — The Just Goddess":x.name);}
function area(x,type){return type==="ears"?"Act "+x.act+(getRisk({id:x.id,act:x.act,type})?.area?" · "+gameName(getRisk({id:x.id,act:x.act,type}).area):""):type==="lore"?gameName(x.area):type==="waypoints"?"Waypoint · "+x.act:"Side Quest · Act "+x.act;}
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
 state.act=String(scope);state.routeAct=String(scope);state.skippedRisk=null;state.status="all";state.search="";state.limit=12;
 renderToolbar();renderView();renderSummary();
}
function fairgravesCurrentRisk(){
 const card=el("details",undefined,"hubCurrentPatchRisk");card.dataset.currentRisk="fairgraves-329";
 card.open=state.fairgravesExpanded===null?state.routeAct==="1":state.fairgravesExpanded;
 // Persist only an explicit user toggle; automatic defaults track the selected Act.
 card.addEventListener("click",event=>{if(event.target.closest("summary")&&event.currentTarget===card)state.fairgravesExpanded=!card.open;});
 const summary=el("summary");
 summary.append(el("strong",tr("Act 1 · รายงานปัญหา Fairgraves #34–38 ใน 3.29","Act 1 · reported Fairgraves #34–38 issue in 3.29")),
 el("small",tr("รายงานจากผู้เล่น · เปิดดูหลักฐานและข้อควรระวัง","Player reports · expand for sources and precautions")));
 card.append(summary,el("p",tr("ผู้เล่นหลายคนและผู้จัดทำคู่มือ Steam รายงานว่าคุย Fairgraves ไม่ได้ในลีก 3.29 ส่งผลต่อบทสนทนา #34–38 ทั้ง 5 รายการ ซึ่งอาจทำให้ All Ears ไม่สำเร็จในลีกดังกล่าว ยังไม่ยืนยันว่าปัญหาเกิดกับทุกตัวละครหรือแก้ไขแล้ว","Players and the Steam guide author reported that Fairgraves dialogue in the 3.29 league may be unavailable, affecting five entries (#34–38). This may block All Ears on affected characters. It is not established whether every character is affected or the issue was fixed.")));
 const actions=el("div",undefined,"hubCurrentRiskActions"),button=el("button",tr("ตรวจ Fairgraves ใน Act 1","Review Fairgraves in Act 1"));button.type="button";
 button.onclick=()=>{openJourneyScope("1");const detail=document.querySelector('[data-evidence-act="1"]');if(detail)detail.open=true;detail?.scrollIntoView({block:"start"});};
 const source=el("a",tr("คู่มือและรายงาน Steam","Steam guide and reports"));source.href="https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869";source.target="_blank";source.rel="noopener noreferrer";
 const community=el("a",tr("รายงานผู้เล่น Reddit","Player reports on Reddit"));community.href="https://www.reddit.com/r/pathofexile/comments/1v61ip0/dont_bother_trying_to_complete_the_all_ears/";community.target="_blank";community.rel="noopener noreferrer";
 actions.append(button,source,community);card.append(actions,el("small",tr("หลักฐาน: รายงานผู้เล่นเดือนกรกฎาคม 2026 ไม่ใช่ประกาศจาก GGG · ตัวละคร Standard อาจต่างจากลีก","Evidence: July 2026 player reports, not an official GGG confirmation. Standard characters may differ from league characters."),"hubSubtle"));return card;
}
function renderQuickStart(){
 const card=$("hubQuickStart");if(!card)return;card.replaceChildren();
 const scopes=journeyScopes,chosen=scopes.includes(state.routeAct)?state.routeAct:"1";
 const current=scopeSnapshot(chosen),allChecked=Object.keys(names).reduce((n,t)=>n+progress(t),0);
 const phases=window.POE_STEAM_WALK?.acts?.[chosen]||[];
 const groups={ears:new Set(entries("ears")),lore:new Set(entries("lore")),waypoints:new Set(entries("waypoints")),sidequests:new Set(entries("sidequests"))};
 const fields={ears:"dialogueIds",lore:"loreIds",waypoints:"waypointIds",sidequests:"sidequestIds"};
 const index=phases.findIndex(p=>Object.entries(fields).some(([t,key])=>(p[key]||[]).some(id=>!groups[t].has(id))));
 const phase=index>=0?phases[index]:phases[0];
 const eyebrow=el("span",tr("เริ่มที่นี่ · สำหรับผู้เล่นครั้งแรก","START HERE · First-time completion guide"),"hubBeginnerEyebrow");
 card.append(eyebrow,el("h2",tr("ทำ Achievement 100% แบบทีละขั้น","Your first 100% achievement run, step by step")));
 card.append(el("p",tr("ไม่ต้องอ่านทุกตาราง เริ่มจากตัวละครที่เล่นอยู่ เลือก Act ที่กำลังทำ แล้วตรวจสิ่งที่ต้องเก็บก่อนเดินเรื่องต่อ","You do not need to learn the entire tracker. Choose your character and current Act, then check the next task before advancing."),"hubBeginnerIntro"));
 const steps=el("div",undefined,"hubBeginnerSteps");
 const first=el("div",undefined,"hubBeginnerStep");
 first.append(el("b","1"),el("span",tr("ใช้ตัวละครเดียวสำหรับ All Ears","Use one character for All Ears")));
 const second=el("div",undefined,"hubBeginnerStep");
 second.append(el("b","2"),el("span",tr("เลือก Act ที่กำลังเล่น","Choose the Act you are playing")));
 const third=el("div",undefined,"hubBeginnerStep");
 third.append(el("b","3"),el("span",tr("ฟังหรือเก็บในเกมจริง แล้วค่อยติ๊ก","Collect in-game first; then check the box")));
 steps.append(first,second,third);card.append(steps);
 const picker=el("label",undefined,"hubBeginnerPicker");
 picker.append(el("span",tr("ตอนนี้กำลังเล่นถึงไหน?","Where are you in the campaign?")));
 const select=el("select");select.id="hubBeginnerAct";
 select.setAttribute("aria-label",tr("เลือก Act ที่กำลังเล่นเพื่อดูขั้นตอนต่อไป","Choose your current Act for the next step"));
 scopes.forEach(id=>{const o=el("option",scopeName(id));o.value=id;select.append(o)});
 select.value=chosen;
 select.onchange=()=>{state.routeAct=select.value;state.act=select.value;if(state.tab!=="route")openTab("route");else{renderToolbar();renderView();renderSummary();}document.querySelector("#hubBeginnerAct")?.focus({preventScroll:true});};
 picker.append(select);card.append(picker);
 const currentBox=el("div",undefined,"hubBeginnerCurrent");currentBox.dataset.beginnerScope=chosen;
 currentBox.append(el("strong",tr("สิ่งที่ควรทำต่อ","What to do next")));
 if(current.done===current.all){
  currentBox.append(el("p",tr("ติ๊กครบในพื้นที่นี้แล้ว แต่ต้องตรวจยอดในเกมอีกครั้ง","Every item here is marked; verify the actual in-game counters before treating it as complete.")));
 }else if(phase){
  currentBox.append(el("p",(descEN()?(phase.headingEN||phase.place):phase.heading),"hubBeginnerQuest"));
  currentBox.append(el("p",tr("ไปที่: ","Go to: ")+gameName(phase.place)+" · "+tr("เควส: ","Quest: ")+gameName(phase.quest),"hubBeginnerWhere"));
  const steps=descEN()?(phase.actionsEN||[]):phase.actions||[];
  if(steps.length){
   currentBox.append(el("strong",tr("ต้องทำอะไรในเกม","What to do in-game")));
   const guide=el("ol",undefined,"hubBeginnerInstructions");
   steps.slice(0,3).forEach(x=>guide.append(el("li",x)));
   currentBox.append(guide);
   if(steps.length>3)currentBox.append(el("small",tr("เปิดคู่มือด้านล่างเพื่อดูขั้นตอนที่เหลือ","Open the quest guide below for the remaining steps")));
  }else currentBox.append(el("p",tr("ตรวจบทสนทนาและรายการในช่วงนี้จากคู่มือด้านล่างก่อนเดินเควสต่อ","Review this stage's dialogue and checklist below before advancing."),"hubBeginnerWhere"));
  currentBox.append(el("small",tr("เหลือ ","Remaining ")+(current.all-current.done)+tr(" รายการในพื้นที่นี้ · ติ๊กเมื่อทำในเกมจริงแล้วเท่านั้น"," items in this area · check only after collecting in-game")));
  if(phase.stop&&(phase.stopIds||[]).some(id=>!groups.ears.has(id))){
   currentBox.append(el("p",tr("จุดที่ต้องระวังก่อนทำเควสต่อ: ","Before you advance, check: ")+(descEN()?(phase.stopEN||phase.stop):phase.stop),"hubBeginnerStop"));
  }
 }else{
  currentBox.append(el("p",tr("ยังมีรายการค้างในพื้นที่นี้ เปิดคู่มือเพื่อดูรายการตามหมวด","Some entries remain here. Open the guide to review the available checklist categories.")));
 }
 card.append(currentBox);
 const action=el("button",current.done===current.all?tr("ตรวจรายการในพื้นที่นี้","Review this area"):tr("เปิดขั้นตอนที่ต้องทำต่อ","Show my next step"),"hubBeginnerCTA");
 action.type="button";action.dataset.beginnerContinue="true";
 action.onclick=()=>{
  if(index>=0)state.steamFocusByAct[chosen]=index;
  openJourneyScope(chosen);
  const walkthrough=document.querySelector('[data-steam-act="'+chosen+'"]');
  if(walkthrough){
   walkthrough.tabIndex=-1;walkthrough.focus({preventScroll:true});walkthrough.scrollIntoView({block:"start"});
  }else document.querySelector('#hubView')?.scrollIntoView({block:"start"});
 };
 card.append(action,el("p",tr("ขั้นตอนที่แสดงคือรายการแรกที่ยังไม่ได้ติ๊ก ไม่ได้แปลว่าเกมรู้ว่าคุณอยู่เควสนี้ · คำเตือน STOP มาจากแหล่งอ้างอิงและยังไม่รับรองทุกเงื่อนไขใน 3.29 · ยอด "+allChecked+" / 745 เป็นการบันทึกด้วยตัวเอง","The suggested step is your first unchecked item, not your detected in-game quest state. STOP warnings are source-based and not fully certified for 3.29. Your "+allChecked+" / 745 checks are manual notes."),"hubBeginnerFineprint"));
}
function renderSummary(){
 renderQuickStart();
 const target=$("hubStats");target.replaceChildren();
 const marked=Object.keys(names).reduce((sum,type)=>sum+progress(type),0),overall=Object.values(totals).reduce((a,b)=>a+b,0);
 const hero=el("div",undefined,"hubMissionTotal");
 const intro=el("div",undefined,"hubMissionHeading");
 intro.append(el("strong",tr("เป้าหมาย: ติ๊ก Checklist ให้ครบ 100% ของ 4 Achievement ที่ติดตาม","Goal: mark 100% of the four tracked achievement checklists")),el("span",tr("ติ๊กเฉพาะสิ่งที่เก็บแล้วในเกม และเทียบยอด Achievement จริงอีกครั้ง · เว็บไม่ตรวจให้อัตโนมัติ","Mark only items you have collected in-game, then compare actual achievement counts. This site cannot detect your game progress."),"hubSubtle"));
 const score=el("div",undefined,"hubMissionScore");
 score.append(el("b",marked+" / "+overall),el("span",Math.floor(marked/overall*100)+tr("% ที่บันทึกในเว็บ","% marked in this guide")));
 const bar=el("progress");bar.max=overall;bar.value=marked;bar.setAttribute("aria-label",tr("ความคืบหน้า 4 Achievement ที่บันทึกไว้ในเว็บ","Progress marked for four tracked achievements"));hero.append(intro,score,bar);

 if(rulerChoice()==="Tasuni"){
   const integrity=el("div",undefined,"hubBranchWarning");integrity.dataset.rulerIntegrity="Tasuni";
   integrity.append(el("strong",tr("ข้อมูลไม่ครอบคลุมทางเลือก Tasuni ของ Act 9","Act 9 Tasuni branch is not represented in the legacy tracker")),
   el("p",tr("ตัวละครนี้เลือก Tasuni แต่ All Ears #443/#444 มาจากเส้นทาง Irasha · แม้ติ๊กครบ 484/484 ก็ยังไม่ยืนยันว่าเก็บครบจริง","This character chose Tasuni, but All Ears #443/#444 are from the Irasha path. Even 484/484 manual checks cannot certify completion.")));
   hero.append(integrity);
 }
 const snapshots=journeyScopes.map(scopeSnapshot);
 const first=snapshots.find(x=>x.done<x.all);
 const next=el("div",undefined,"hubMissionNext");next.dataset.missionScope="selected";
 const scope=journeyScopes.includes(state.routeAct)?state.routeAct:"1";
 const selected=snapshots.find(x=>x.scope===scope);
 const left=selected?selected.all-selected.done:0;
 const text=el("span",undefined);
 if(selected){
  text.append(el("strong",tr("กำลังดู: ","Viewing: ")+scopeName(scope)+" · "+selected.done+" / "+selected.all),
    el("small",left?tr("ยังไม่ได้ทำเครื่องหมาย ","Not yet marked: ")+left+tr(" รายการในพื้นที่นี้"," items in this area"):tr("ติ๊กครบในพื้นที่นี้ · ตรวจยอดในเกมก่อนเดินต่อ","All marked in this area · verify in-game progress")));
  const phases=window.POE_STEAM_WALK?.acts?.[scope]||[];
  const checked={ears:new Set(entries("ears")),lore:new Set(entries("lore")),waypoints:new Set(entries("waypoints")),sidequests:new Set(entries("sidequests"))};
  const fields={ears:"dialogueIds",lore:"loreIds",waypoints:"waypointIds",sidequests:"sidequestIds"};
  const pendingIndex=phases.findIndex(p=>Object.entries(fields).some(([type,key])=>(p[key]||[]).some(id=>!checked[type].has(id))));
  if(left&&pendingIndex>=0){
    const phase=phases[pendingIndex];
    text.append(el("small",tr("ช่วงที่ควรตรวจต่อ: ","Next step to review: ")+(descEN()?(phase.headingEN||phase.place):phase.heading),"hubMissionPhase"));
    const risk=phases.find((p,i)=>i<=pendingIndex&&p.stop&&(p.stopIds||[]).some(id=>!checked.ears.has(id)));
    if(risk)text.append(el("small",tr("มีจุด STOP ที่ยังไม่ตรวจ: ","Unchecked STOP checkpoint: ")+(descEN()?(risk.stopEN||risk.headingEN):risk.stop),"hubMissionRisk"));
  }
  const jump=el("button",left?tr("เปิดช่วงที่ต้องทำต่อ","Open next quest step"):tr("ตรวจรายการในพื้นที่นี้","Review this area"));jump.type="button";
  jump.onclick=()=>{if(pendingIndex>=0)state.steamFocusByAct[scope]=pendingIndex;openJourneyScope(scope);};
  next.append(text,jump);
 }else next.append(el("strong",tr("ยังไม่พบพื้นที่ที่เลือก","No selected area found")));
 hero.append(next);
 if(first&&first.scope!==scope){
  const earliest=el("div",undefined,"hubFirstMissing");earliest.dataset.firstMissing=first.scope;
  earliest.append(el("span",tr("จุดค้างแรกของทั้งเส้นทาง: ","Earliest unchecked area across the route: ")+scopeName(first.scope)+tr(" · เหลือ "," · remaining ")+(first.all-first.done)),
    el("button",tr("กลับไปตรวจจุดแรก","Review earliest incomplete area")));
  const go=earliest.querySelector("button");go.type="button";go.onclick=()=>openJourneyScope(first.scope);
  hero.append(earliest);
 }else if(!first){
  hero.append(el("p",tr("ติ๊กครบทุกช่องแล้ว แต่ยังต้องเทียบยอด Achievement กับเกมจริง","All manual checklist entries are checked; verify actual achievements in-game."),"hubSubtle"));
 }
 hero.append(fairgravesCurrentRisk());
 const sourceAlert=el("details",undefined,"hubEvidencePanel hubGlobalEvidence");
 sourceAlert.dataset.evidenceScope="global";
 const sourceTitle=el("summary");sourceTitle.append(el("strong",tr("ตรวจข้อมูลที่อาจทำให้พลาด: Waypoint / Bandits / Vaal","Check potentially missable steps: Waypoints / Bandits / Vaal")),
 el("small",tr("ข้อมูลเดิมบางส่วนไม่ตรงกับเวอร์ชันใหม่ · เปิดอ่านก่อนทำตาม","Some old instructions may be obsolete · review before following")));
 sourceAlert.append(sourceTitle);
 const sourceBody=el("div",undefined,"hubEvidenceBody");
 [
 [tr("Locomancer: ฐานข้อมูลเดิม 91 Waypoints แต่ PoE Wiki ระบุว่าเคยแก้ Achievement ให้ใช้ 90 จุดแล้ว และตั้งแต่ 3.25 Waypoint จะเปิดเองเมื่อเดินผ่าน · ยังไม่ได้ยืนยันยอดจริงจากเกม 3.29","Locomancer: this tracker contains 91 legacy Waypoints; PoE Wiki documents a later 90-waypoint requirement and automatic activation since 3.25. The exact live 3.29 count is not independently certified."),"https://www.poewiki.net/wiki/Waypoint"],
 [tr("Vaal Side Area: คำแนะนำเก่าบางแหล่งเกี่ยวกับ Fragment/Map Device อาจใช้ไม่ได้ในเวอร์ชันปัจจุบัน ควรตรวจพื้นที่จริงและเงื่อนไข Lore จากคู่มือปัจจุบัน ก่อนใช้เส้นทางนั้น","Vaal Side Areas: older Fragment / Map Device instructions may be version-specific. Verify actual lore availability and areas for the current playable patch rather than assuming an old farming route still works."),"https://www.poewiki.net/wiki/Vaal_side_area"],
 [tr("Act 2: ลำดับ Bandits / The Darkness ใน Steam และ PoE Wiki ไม่ตรงกัน · ดูคำเตือนใน Act 2 ก่อนเลือกช่วยหรือฆ่า","Act 2: Steam and PoE Wiki disagree on Bandit / Darkness ordering. Open Act 2 warnings before choosing to help or kill."),"https://www.poewiki.net/wiki/Guide:All_Ears_achievement"]
 ].forEach(([copy,url])=>{const p=el("p",copy),a=el("a",tr("ดูแหล่งอ้างอิง","View source"));a.href=url;a.target="_blank";a.rel="noopener noreferrer";p.append(document.createTextNode(" · "),a);sourceBody.append(p);});
 sourceAlert.append(sourceBody);hero.append(sourceAlert);
 const prep=el("details",undefined,"hubRunPreflight");prep.dataset.preflight="achievement-100";
 prep.append(el("summary",tr("เช็กก่อนเริ่ม · จุดที่อาจพลาดและข้อจำกัดของแพตช์","Before you start · missable steps and patch limitations")));
 const checklist=el("ul",undefined);
 [[ "Ruthless: คู่มือ PoE Wiki ระบุว่า Vaal Side Area ไม่เกิดในโหมดนี้ จึงไม่ควรใช้เส้นทางนี้เป็นหลักฐานว่าจะเก็บ No Stone Unturned ครบ", "Ruthless: the PoE Wiki says Vaal Side Areas do not spawn in this mode. This route cannot certify No Stone Unturned here." ],
 [ "Act 1: มีรายงานว่า Fairgraves อาจคุยไม่ได้ในแพตช์ 3.29 ทำให้ All Ears ขาดหัวข้อ #34–38 · ยังไม่มีผลตรวจเกม 3.29 ครบทุกสถานะ", "Act 1: Fairgraves dialogue #34–38 was reportedly unavailable in patch 3.29; the issue is not fully reproduced across all 3.29 character states." ],
 [ "Act 2: คู่มือ Steam กับ PoE Wiki ให้ลำดับคุย Bandits / Ancient Seal ต่างกัน ต้องตรวจบทสนทนา The Darkness ก่อนตัดสินใจฆ่าหรือช่วย", "Act 2: Steam and PoE Wiki disagree on the Bandits / Ancient Seal order. Check the Darkness topics before choosing whom to kill or help." ],
 [ "เปิด Quest Log และหน้า Achievement ในเกมเพื่อเทียบยอดจริง · เครื่องหมายในเว็บเป็นเพียงบันทึกของคุณ", "Open the in-game Quest Log and Achievement panel to compare real counts. Website checkmarks are manual notes, not game verification." ]].forEach(([th,en])=>checklist.append(el("li",tr(th,en))));
 prep.append(checklist);
 const link=el("a","PoE Wiki: Ruthless mode");link.href="https://www.poewiki.net/wiki/Ruthless_mode";link.target="_blank";link.rel="noopener noreferrer";
 prep.append(link);hero.append(prep);
 const roadmap=el("details",undefined,"hubMissionRoadmap");
 roadmap.append(el("summary",tr("ดูรายการที่ต้องเก็บทั้งหมด: Act 1–10 / Labyrinth / Vaal / Epilogue","See all remaining tasks: Acts 1–10 / Labyrinth / Vaal / Epilogue")));
 const list=el("div",undefined,"hubMissionStages");
 for(const s of snapshots){
   const b=el("button",undefined,"hubMissionStage");b.type="button";b.dataset.scope=s.scope;
   b.append(el("strong",scopeName(s.scope)),el("span",s.done+" / "+s.all+(s.done===s.all?tr(" · ติ๊กครบแล้ว"," · all marked"):tr(" · เหลือ "," · remaining ")+(s.all-s.done))));
   b.onclick=()=>openJourneyScope(s.scope);list.append(b);
 }
 roadmap.append(list);hero.append(roadmap);
 target.append(hero);
 Object.keys(names).forEach(k=>{const card=el("button",undefined,"hubStat");card.type="button";card.setAttribute("aria-label",tr("เปิดรายการ ","Open list for ")+names[k]);const count=progress(k);
 card.append(el("span",names[k]),el("b",count+" / "+totals[k]),el("span",count===totals[k]?tr("ติ๊กครบ · ตรวจยอดในเกม","All marked · verify in-game"):tr("เหลือ ","Remaining: ")+(totals[k]-count)));card.onclick=()=>openTab(k);target.append(card);});
}
function findRelevantStage(type,x){
 const stages=window.POE_STEAM_WALK?.acts?.[String(x.act)]||[];
 const field={ears:"dialogueIds",lore:"loreIds",waypoints:"waypointIds",sidequests:"sidequestIds"}[type];
 if(!field)return null;
 const index=stages.findIndex(p=>(p[field]||[]).includes(x.id));
 return index<0?null:{index,phase:stages[index]};
}
function itemCard(type,x){
 const done=entries(type).includes(x.id),original=window.POE_ITEM_DESCRIPTIONS?.get(type,x,type==="ears"&&x.act===2?getSafety():undefined);
 const guide=descEN()?LANG.englishHelp(type,x,original):original;
 const row=el("div",undefined,"hubItem"+(done?" done":"")),box=el("input"),info=el("div",undefined,"hubText");
 row.dataset.state=done?"done":"todo";
 const shown=label(x,type),canonical=type==="ears"?x.npc+" — "+x.dialog:x.name;
 box.type="checkbox";box.checked=done;
 box.dataset.trackType=type;box.dataset.trackId=String(x.id);
 box.setAttribute("aria-label",(done?tr("ยกเลิกเครื่องหมายว่าเก็บแล้ว — ","Unmark collected — "):tr("ทำเครื่องหมายว่าเก็บแล้ว — ","Mark as collected — "))+canonical);
 box.addEventListener("change",()=>{
   if(type==="ears"&&box.checked&&original?.caution&&!confirm(tr("หัวข้อนี้มีเงื่อนไขที่อาจพลาดได้ (อ้างอิงคู่มือเก่า ยังไม่ยืนยันแพตช์ 3.29):\\n","This dialogue may be missable (historical guide, not patch 3.29-verified):\\n")+(guide?.caution||original.caution)+"\\n\\n"+tr("ฟังหัวข้อนี้ในเกมจบแล้วใช่ไหม?","Did you finish listening to this topic in-game?"))){box.checked=false;return;}
   const restoreFocus=document.activeElement===box;
   writeMarks(type,x.id,box.checked);
   if(restoreFocus){
     const same=[...document.querySelectorAll('#hubView input[data-track-type="'+type+'"][data-track-id="'+x.id+'"]')];
     const visible=same.find(node=>node.getClientRects().length>0);
     if(visible)visible.focus({preventScroll:true});
   }
 });
 const name=el("div",shown,"hubName");
 if(LANG.get().names==="th"&&shown!==canonical){name.title=canonical;const originalName=el("small",canonical,"hubCanonicalName");originalName.lang="en";info.append(name,originalName);}else info.append(name);
 const meta=el("div",undefined,"hubCompactMeta");
 const priorityText=type==="ears"&&original?.caution?tr("ต้องฟังก่อนเดินเรื่องต่อ","Check before advancing"):type==="sidequests"?tr("เควสต์รอง · ต้องทำให้จบ","Side quest · finish it"):tr("เก็บรายการนี้ในเกม","Collect this in-game");
 meta.append(el("span",priorityText,"hubPriority"+(type==="ears"&&original?.caution?" hubUrgent":"")));
 if(type==="sidequests"){const reward=rewardsByQuest.get(String(x.act)+"|"+x.name);if(reward)meta.append(el("span",tr("รางวัล: ","Reward: ")+reward.reward,"hubRewardPreview"));}
 info.append(meta);
 if(type==="ears"&&guide?.caution)info.append(el("div",tr("ก่อนเดินเรื่องต่อ: ","Before advancing: ")+guide.caution,"hubRisk"));
 else if(type==="ears"&&(window.POE_WORKBOOK_WARNINGS?.wikiRows||[]).includes(getRisk({type:"ears",id:x.id,act:x.act})?.wikiRow))
   info.append(el("div",tr("ไฟล์ Excel ติด WARNING แต่ยังต้องตรวจเงื่อนไขจากต้นทาง","Historical spreadsheet flag: verify quest conditions in the source before advancing"),"hubRisk hubWorkbookRisk"));
 if(guide){
   const detail=el("details",undefined,"hubItemHelp"),head=el("summary",tr("ทำอย่างไร · ทำตอนไหน · ตรวจจากที่ไหน","What to do · When · Source")),body=el("div",undefined,"hubItemHelpBody");detail.append(head);
   function fact(title,value){if(!value)return;const line=el("div",undefined,"hubFact");line.append(el("strong",title),el("span",value));body.append(line);}
   fact(tr("ต้องทำอะไร","What to do"),guide.action);fact(tr("ไปที่ไหน / หาใคร","Where / who"),guide.location);fact(tr("ทำได้เมื่อไร","When it becomes available"),guide.unlock);fact(tr("อย่าเพิ่งทำอะไร","Before you move on"),guide.caution);fact(tr("ข้อมูลเพิ่มเติม","More information"),guide.tip);
   const linked=findRelevantStage(type,x);
   if(linked){
     const text=descEN()?(linked.phase.headingEN||"Route step "+(linked.index+1)):linked.phase.heading;
     fact(tr("อยู่ในช่วงเควสต์","Related quest stage"),"Act "+x.act+" · "+(linked.index+1)+". "+text);
     const open=el("button",tr("ดูขั้นตอนของช่วงนี้","Open this quest step"),"hubOpenLinkedStage");
     open.type="button";open.dataset.openStage=linked.phase.id;open.dataset.linkedAct=String(x.act);
     open.onclick=()=>{
       openJourneyScope(String(x.act));
       state.steamFocusByAct[String(x.act)]=linked.index;
       renderView();
       document.querySelector('[data-steam-act="'+x.act+'"]')?.scrollIntoView({block:"start"});
     };
     body.append(open);
   }
   if(type==="sidequests"){const reward=rewardsByQuest.get(String(x.act)+"|"+x.name);if(reward)fact(tr("รางวัลเควสต์","Quest reward"),reward.reward+" · "+tr("ข้อมูลเก่า ไม่ใช่รางวัล Achievement","Historical reward, not an achievement unlock"));}
   if(descEN()&&original?.caution){
      const thai=el("details",undefined,"hubOriginalThai");thai.lang="th";
      thai.append(el("summary","Original Thai source warning"),el("p",original.caution));body.append(thai);
   }
   if(!guide.detailsKnown)body.append(el("p",tr("ยังไม่มีรายละเอียดเงื่อนไขรายรายการที่ยืนยันกับเกม 3.29","Exact conditions have not been verified in-game for patch 3.29"),"hubUnverifiedText"));
   const source=el("a",tr("ดูแหล่งอ้างอิง","Open source"));source.href=guide.source;source.target="_blank";source.rel="noopener noreferrer";
   body.append(el("p",tr("ข้อมูลจากคู่มือเก่า · ยังไม่รับรองครบทุกกรณีของ 3.29","Historical source · not fully verified for 3.29"),"hubSubtle"),source);detail.append(body);info.append(detail);
 }
 row.append(box,info,el("span",done?tr("เก็บแล้ว","Done"):tr("ยังไม่เก็บ","To do"),"hubItemState"));
 return row;
}
function filterRows(type,act){const done=new Set(entries(type)),query=state.search.toLowerCase();return records(type,act).filter(x=> (state.status==="all"||(state.status==="done"?done.has(x.id):!done.has(x.id)))&&(!query||(LANG.bilingualIndex(type==="ears"?x.dialog:x.name)+" "+label(x,type)+" "+area(x,type)+" "+(window.POE_ITEM_DESCRIPTIONS?.get(type,x,type==="ears"&&x.act===2?getSafety():undefined)?.action||"")+" "+(window.POE_ITEM_DESCRIPTIONS?.get(type,x)?.caution||"")).toLowerCase().includes(query)));}
function addList(target,type,act,max,compact=false){const list=filterRows(type,act),shown=max?list.slice(0,max):list;
if(!compact){const heading=el("div",undefined,"hubInlineRow");heading.append(el("h3",categoryName(type)),el("span",list.length+tr(" รายการที่แสดง"," visible entries"),"hubSubtle"));target.append(heading);}
if(!list.length){target.append(el("div",tr("ไม่มีรายการตามตัวกรอง","No matching items"),"hubEmpty"));return;}
const container=el("div",undefined,"hubList");let oldArea="";
shown.forEach(x=>{
if(state.tab==="route"&&type!=="ears"&&type!=="sidequests"){const group=area(x,type);if(oldArea!==group){container.append(el("div",group,"hubGroup"));oldArea=group;}}
container.append(itemCard(type,x));});target.append(container);
if(shown.length<list.length){const more=el("button",tr("ดูเพิ่มอีก ","Show ")+(list.length-shown.length)+tr(" รายการ"," more items"),"hubShowMore");more.onclick=()=>{state.limit=1000;renderView();};target.append(more);}}
function section(title){const d=el("section",undefined,"hubSection");d.append(el("h2",title));return d;}
function renderActRewards(act){
const group=rewardIndex.find(x=>String(x.act)===String(act));if(!group||!group.quests.length)return null;
const chapter=el("details",undefined,"hubChapter hubRewards");chapter.dataset.extra="rewards";
const summary=el("summary"),heading=el("span",undefined,"hubChapterTitle");
const major=group.quests.filter(q=>q.type==="passive"||q.type==="refund").length;
heading.append(el("strong",tr("รางวัลเควสต์ใน Act นี้","Quest rewards in this Act")),el("small",major+tr(" เควสต์ให้ Passive/Refund Point · "," quests grant Passive / Refund Points · ")+group.quests.length+tr(" เควสต์ในฐานข้อมูล"," quests in the historical reward index")));
summary.append(heading,el("span",tr("เปิดดูรางวัล","View rewards"),"hubChapterCount"));chapter.append(summary);
const content=el("div",undefined,"hubChapterBody");
content.append(el("p",tr("แสดงรางวัลตามเควสต์ (ข้อมูลอ้างอิงเดิม) · ไม่ใช่รายการที่นับใน Achievement · คำว่า ควรเก็บ หมายถึงรางวัล Passive/Refund Point ไม่ได้ยืนยันว่าเป็นเควสต์จำเป็นต่อเนื้อเรื่อง","Historical quest rewards are listed for convenience and do not count as achievement checklist entries. Useful means it grants Passive or Refund Points, not that the quest is mandatory for story progression."),"hubSubtle"));
const list=el("div",undefined,"hubRewardList");
for(const q of [...group.quests].sort((a,b)=>Number(["passive","refund","choice"].includes(b.type))-Number(["passive","refund","choice"].includes(a.type)))){
const card=el("div",undefined,"hubRewardRow"),title=el("div",undefined,"hubRewardName");
title.append(el("strong",q.name),el("span",rewardPriority(q),"hubRewardKind"));
card.append(title,el("p",q.reward,"hubRewardText"));
const achievement=collections.sidequests.some(item=>String(item.act)===String(act)&&item.name===q.name);
card.append(el("p",achievement?tr("จำเป็นต่อ No Loose Ends · เมื่อทำเควสต์นี้สำเร็จ ให้ทำเครื่องหมายในหมวดเควสต์รอง","Tracked by No Loose Ends · mark the side-quest checklist only after finishing the quest"):tr("ไม่อยู่ในรายการ No Loose Ends ที่ใช้อ้างอิง · ไม่ได้หมายความว่าข้ามเควสต์เนื้อเรื่องได้","Not in the historical No Loose Ends checklist · this does not mean you can skip a story quest"),"hubSubtle"));
list.append(card);}
content.append(list);
const source=el("a",tr("ตรวจรางวัลตามแพตช์จาก PoE Wiki","Check current quest rewards on PoE Wiki"));source.href=window.POE_QUEST_REWARDS.source;source.target="_blank";source.rel="noopener noreferrer";content.append(source);chapter.append(content);return chapter;
}
function criticalPanel(act){
 const all=window.POE_CRITICAL_CHECKPOINTS;
 const stages=all?.acts?.[act]||[];
 if(!stages.length)return null;
 const section=el("section",undefined,"hubCritical");
 section.dataset.criticalAct=act;
 const title=el("div",undefined,"hubCriticalTitle");
 title.append(el("h3",tr("ก่อนเดินเควสต์ต่อ · จุดที่อาจพลาด","Before advancing · missable dialogue checkpoints")),el("p",tr("กลุ่มจุดเสี่ยงจากคู่มือปี 2025 · แต่ละบทสนทนาอาจเปิดคนละช่วง ให้ดูเงื่อนไขรายบรรทัดก่อนทำ · ไม่ใช่ลำดับเดินเควสต์ครบทุกเส้นทาง และยังไม่รับรอง 3.29","Historical 2025 risk groups. Individual dialogue topics can unlock at different quest stages; check each condition before acting. This is not a patch 3.29-certified complete route."),"hubSubtle"));
 section.append(title);
 const already=new Set(entries("ears"));
 const sorted=[...stages]; // Preserve authored stage/source grouping; urgency is a label, never reorders quest timing.
 const riskLeft=sorted.filter(s=>!s.ids.every(id=>already.has(id))).length;
 section.append(el("div",tr("ยังมี ","Still unchecked: ")+riskLeft+" / "+stages.length+tr(" กลุ่ม (ติ๊กเองในเว็บ)"," historical checkpoint groups · manual marks only"),"hubCriticalCount"));
 const index=Math.max(0,Math.min(stages.length-1,Number(state.focusByAct[act])||0));
 state.focusByAct[act]=index;
 const nav=el("div",undefined,"hubStepNavigator");
 const position=el("div",tr("ขั้นตรวจ ","Checkpoint ")+(index+1)+" / "+stages.length,"hubStepPosition");
 const select=el("select");select.setAttribute("aria-label",tr("เลือกขั้นตรวจสำคัญ","Select historical risk checkpoint"));
 stages.forEach((stage,i)=>{const eng=window.POE_CRITICAL_LANGUAGE?.acts?.[stage.id];const option=el("option",(i+1)+". "+(descEN()&&eng?eng[0]:stage.heading));option.value=String(i);select.append(option);});
 select.value=String(index);
 select.onchange=()=>{state.focusByAct[act]=Number(select.value);renderView();};
 const previous=el("button",tr("ก่อนหน้า","Previous")),next=el("button",tr("ถัดไป","Next"));
 previous.type="button";previous.disabled=index===0;next.type="button";next.disabled=index===stages.length-1;
 previous.onclick=()=>{state.focusByAct[act]=index-1;renderView();};
 next.onclick=()=>{state.focusByAct[act]=index+1;renderView();};
 nav.append(position,select,previous,next);section.append(nav);
 const idToEntry=new Map(E.items.map(x=>[x.id,x]));
 for(const stage of [sorted[index]]){
  const n=stage.ids.filter(id=>already.has(id)).length;
  const en=descEN()?window.POE_CRITICAL_LANGUAGE?.acts?.[stage.id]:null;
  const details=el("details",undefined,"hubCheckpoint");details.dataset.stage=stage.id;
  details.open=true;
  const summary=el("summary"),heading=el("span",undefined,"hubCheckpointTitle");
  heading.append(el("strong",en?en[0]:stage.heading),el("small",en?en[1]:stage.before));
  const stateText=el("span",n===stage.ids.length?tr("เก็บครบในเว็บ","All marked in this guide"):tr("ยังขาด ","Still unchecked: ")+(stage.ids.length-n),"hubCheckpointState"+(n===stage.ids.length?" complete":""));
  summary.append(heading,stateText);details.append(summary);
  const inside=el("div",undefined,"hubCheckpointBody");
  const rule=stage.stopRule;
  if(rule){
    const missing=rule.requiredIds.filter(id=>!already.has(id));
    const guard=el("div",undefined,"hubStopGate"+(missing.length?" blocked":" reviewed"));
    guard.dataset.stopStage=stage.id;guard.dataset.stopState=missing.length?"hold":"review";
    guard.append(el("strong",missing.length?tr("ยังไม่ควรทำ: ","STOP before: ")+(en?en[2]:rule.action):tr("รายการก่อนผ่านจุดนี้บันทึกครบแล้ว — ตรวจในเกมอีกครั้ง","All required topics are marked · verify in-game before advancing")));
    guard.append(el("p",en?en[1]:rule.note));
    guard.append(el("div",missing.length?tr("ขาดอีก ","Still unchecked: ")+missing.length+tr(" บทสนทนาก่อนผ่านจุดนี้"," dialogues before this transition"):tr("การติ๊กครบไม่รับรองว่าสถานะเควสต์ถูกต้องกับแพตช์ 3.29","Checkmarks do not certify the correct quest state for patch 3.29."),"hubStopPending"));
    inside.append(guard);
  }
  if(stage.sourceConflict){
    const conflict=el("div",undefined,"hubResearchConflict");
    conflict.dataset.conflict=stage.sourceConflict.kind;
    conflict.append(el("strong",tr("ข้อมูลจากสองคู่มือไม่ตรงกัน — ห้ามถือว่าเส้นทางนี้ปลอดภัย","Conflicting sources · do not assume this route is safe")),el("p",en?"Steam and PoE Wiki differ about the Bandits / Ancient Seal sequence. Confirm the actual dialogue in-game before making an irreversible choice; this route is not patch-certified.":stage.sourceConflict.summary));
    const steam=el("a",tr("คู่มือ Steam","Steam guide"));steam.href=stage.sourceConflict.sourceA;steam.target="_blank";steam.rel="noopener noreferrer";
    const wiki=el("a","PoE Wiki");wiki.href=stage.sourceConflict.sourceB;wiki.target="_blank";wiki.rel="noopener noreferrer";
    const refs=el("div",undefined,"hubConflictLinks");refs.append(steam,wiki);conflict.append(refs);inside.append(conflict);
  }
  if(stage.patchAlert){inside.append(el("div",en?(stage.id==="a1-fairgraves"?"Patch 3.29 reports describe Fairgraves dialogue #34–38 as unavailable. Patch 3.29 is unverified; do not mark these topics unless actually heard.":"A historical NPC dialogue availability report exists; patch 3.29 is unverified."):stage.patchAlert,"hubResearchConflict"));if(en){const original=el("details",undefined,"hubOriginalThai");original.lang="th";original.append(el("summary","Original Thai patch report"),el("p",stage.patchAlert));inside.append(original);}}
  inside.append(el("p",en?en[1]:stage.action,"hubCheckpointAction"));
  const detailsWhy=el("details",undefined,"hubCheckpointWhy");
  detailsWhy.append(el("summary",tr("ทำไมต้องระวัง / เงื่อนไขเพิ่มเติม","Why this can be missed / source conditions")),el("p",en?en[3]:stage.risk,"hubCheckpointRisk"));
  inside.append(detailsWhy);
  if(act==="2"&&stage.id==="a2-darkness"){
    const safety=el("details",undefined,"hubCheckpointSafety");
    safety.open=true;
    safety.append(el("summary",tr("บันทึกว่าคุยกับ Bandits / เปิด Ancient Seal แล้ว","Record Bandit conversations / Ancient Seal state")),safetyPanel());
    inside.append(safety);
  }
  const req=el("div",undefined,"hubCheckpointRows");
  for(const id of stage.ids){
    const item=idToEntry.get(id);
    if(!item)continue;
    const line=el("label",undefined,"hubCheckpointRow"),check=el("input"),info=el("span",undefined,"hubCheckpointItemInfo"),name=el("span",label(item,"ears"),"hubCheckpointItemName"),marked=el("span",already.has(id)?tr("ฟังแล้ว","Heard in-game"):tr("ยังไม่ฟัง","Not heard yet"),"hubCheckpointRowState");
    const guide=window.POE_ITEM_DESCRIPTIONS?.get("ears",item,act==="2"?getSafety():undefined);
    const fromSource=getRisk({type:"ears",id,act:Number(act)});
    const displayed=descEN()?LANG.englishHelp("ears",item,guide):guide;
    const condition=displayed?.unlock||(descEN()?"":fromSource?.trigger)||"";
    const caution=displayed?.caution||(descEN()?"":fromSource?.before)||"";
    info.append(name);
    if(condition)info.append(el("small",tr("เปิดเมื่อ: ","Available when: ")+condition,"hubCheckpointRowTrigger"));
    if(caution)info.append(el("small",tr("ต้องตรวจ: ","Do not miss: ")+caution,"hubCheckpointRowWarning"));
    if(!condition&&!caution)info.append(el("small",tr("ยังไม่มีเงื่อนไขรายบรรทัดในไฟล์ต้นทาง · ตรวจคู่มือก่อนเดินต่อ","No verified per-topic trigger is available in the historical source; check before advancing."),"hubCheckpointRowUnknown"));
    check.type="checkbox";check.checked=already.has(id);check.dataset.checkpointId=String(id);
    check.setAttribute("aria-label",tr("ฟังบทสนทนาแล้ว — ","Dialogue heard in-game — ")+label(item,"ears"));
    check.addEventListener("change",()=>{
      const hint=window.POE_ITEM_DESCRIPTIONS?.get("ears",item,act==="2"?getSafety():undefined);
      const displayedHint=descEN()?LANG.englishHelp("ears",item,hint):hint;
      if(check.checked&&hint?.caution&&!confirm(tr("จุดที่อาจพลาดตาม Wiki ปี 2025 (ยังไม่รับรอง 3.29):\n","Missable topic in the 2025 Wiki (not verified for patch 3.29):\n")+(displayedHint?.caution||hint.caution)+"\n\n"+tr("ฟังบทสนทนานี้ในเกมจริงแล้วใช่หรือไม่?","Did you finish listening to this topic in-game?"))){check.checked=false;return;}
      writeMarks("ears",id,check.checked);
    });
    line.append(check,info,marked);req.append(line);
  }
  inside.append(req);
  const reward=rewardsByQuest.get(String(act)+"|"+stage.quest);
  if(reward){inside.append(el("div",tr("เควสต์ที่เกี่ยวข้อง: ","Related quest: ")+stage.quest+tr(" · รางวัลอ้างอิง: "," · historical reward: ")+reward.reward,"hubCheckpointReward"));}
  const ref=el("a",tr("ตรวจเงื่อนไขกับ PoE Wiki","Verify conditions on PoE Wiki"));ref.href=stage.source;ref.target="_blank";ref.rel="noopener noreferrer";
  inside.append(el("p",tr("ข้อมูลปี 2025 · ต้องตรวจซ้ำในเกมตามแพตช์ที่เล่น","2025 historical source · verify dialogue and quest state in your actual patch"),"hubSubtle"),ref);
  if(en){const original=el("details",undefined,"hubOriginalThai");original.lang="th";original.append(el("summary","Original Thai source notes"),el("p",stage.before),el("p",stage.action),el("p",stage.risk));inside.append(original);}
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
 head.append(el("h3",tr("หลังจบเควสต์ · กลับไปคุย NPC","After quest completion · revisit the NPC")),el("p",tr("รายการที่คู่มือปี 2025 ระบุว่าเปิดหลังส่งเควสต์ ไม่ใช่คำเตือนว่าพลาดถาวรหรือเส้นทางที่ตรวจแล้วในแพตช์ 3.29","These 2025 source topics unlock after a quest turn-in. They are not automatically permanently missable and have not been gameplay-verified for patch 3.29."),"hubSubtle"));section.append(head);
 const entriesDone=new Set(entries("ears"));
 const lookup=new Map(E.items.map(x=>[x.id,x]));
 for(const stage of stages){
  const detail=el("details",undefined,"hubCheckpoint hubPostQuest"),summary=el("summary");
  detail.dataset.postStage=stage.id;detail.open=postQuestOpen.has(stage.id);
  const title=el("span",undefined,"hubCheckpointTitle"),en=descEN()?window.POE_CRITICAL_LANGUAGE?.postQuest?.[stage.id]:null;title.append(el("strong",en?en[0]:stage.title),el("small",en?en[1]:stage.timing));
  const complete=stage.ids.every(id=>entriesDone.has(id));
  summary.append(title,el("span",complete?tr("บันทึกแล้ว","Marked in guide"):tr("ยังไม่บันทึก","Not marked yet"),"hubCheckpointState"+(complete?" complete":"")));
  detail.append(summary);
  const body=el("div",undefined,"hubCheckpointBody");
  body.append(el("p",en?en[1]: "หลังจบเควสต์แล้ว ให้กลับไปคุย NPC ตามหัวข้อในรายการด้านล่าง และทำเครื่องหมายเมื่อฟังในเกมจริง","hubCheckpointAction"));
  for(const id of stage.ids){const x=lookup.get(id);if(x)body.append(itemCard("ears",x));}
  const reward=rewardsByQuest.get(String(act)+"|"+stage.quest);
  if(reward)body.append(el("p",tr("รางวัลอ้างอิง ","Historical reward for ")+stage.quest+": "+reward.reward+tr(" · ข้อมูลเก่า ยังไม่รับรอง 3.29"," · not patch 3.29-certified"),"hubCheckpointReward"));
  const link=el("a",tr("ตรวจต้นทางบน PoE Wiki","Check the original PoE Wiki entry"));link.href=stage.source;link.target="_blank";link.rel="noopener noreferrer";
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
 const title=scope==="Labyrinth"?tr("The Labyrinth · เก็บ Lore 10 ชิ้น","The Labyrinth · collect 10 Lore entries"):tr("Vaal Side Areas · เก็บ Lore 16 ชิ้น","Vaal Side Areas · collect 16 Lore entries");
 const panel=section(title);panel.classList.add("hubSpecialRoute");
 const metric=el("div",undefined,"hubActProgress");
 metric.append(el("strong",tr("เก็บแล้ว ","Marked: ")+done+" / "+items.length+tr(" รายการ"," entries")),el("span",tr("รายการเหล่านี้นับรวมใน No Stone Unturned 140 ชิ้น ไม่ใช่ Achievement แยก","These entries count toward No Stone Unturned (140), not a separate achievement"),"hubSubtle"));panel.append(metric);
 const note=el("p",scope==="Labyrinth"?tr("ตรวจตามห้องที่พบจริง ผัง Labyrinth เปลี่ยนได้ จึงไม่ใช่เส้นทางตายตัว","Follow the rooms you actually find; Labyrinth layouts can change, so this is not a fixed path."):tr("Vaal Side Area เกิดแบบสุ่ม ไม่ต้องเก็บตามลำดับ ID ด้านล่างมีทั้ง Vaal Letter และ Research Journal","Vaal Side Areas appear unpredictably. Do not follow ID order; check both Vaal Letters and Research Journals."),"hubSubtle");panel.append(note);
 const steps=el("ol",undefined,"hubSpecialSteps");
 const localizedSteps=descEN()?(info.stepsEN||info.steps):info.steps;
 localizedSteps.forEach((value,i)=>{const li=el("li");li.append(el("span",tr("ขั้น ","Step ")+(i+1),"hubSpecialStepNo"),el("span",value));steps.append(li);});panel.append(steps);
 panel.append(el("div",descEN()?(info.caveatEN||info.caveat):info.caveat,"hubNotice"));
 if(scope==="Vaal")panel.append(el("div",tr("ข้อจำกัดโหมด: PoE Wiki ระบุว่า Vaal Side Areas ไม่เกิดใน Ruthless จึงยังใช้คู่มือนี้รับรอง No Stone Unturned 140 ชิ้นในโหมดนั้นไม่ได้","Mode limitation: the PoE Wiki states that Vaal Side Areas do not appear in Ruthless. This historical guide cannot certify all 140 No Stone Unturned entries in that mode."),"hubResearchConflict"));
 const source=el("a",tr("คู่มือ No Stone Unturned (PoE Wiki)","No Stone Unturned guide (PoE Wiki)"));source.href=guide.source;source.target="_blank";source.rel="noopener noreferrer";
 const refs=el("p",undefined,"hubSubtle");refs.append(tr("อ้างอิง Wiki ปี 2025 · ตรวจชื่อ Lore ที่พบจริงใน 3.29 · ","Historical 2025 Wiki reference · confirm the actual 3.29 lore found · "),source);panel.append(refs);
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
  if(!rows.length)body.append(el("p",tr("ไม่มีรายการตรงกับตัวกรอง","No matching entries"),"hubEmpty"));
  else{const list=el("div",undefined,"hubList");rows.forEach(x=>list.append(itemCard("lore",x)));body.append(list);}
  chapter.append(body);
  chapter.addEventListener("toggle",()=>{if(chapter.open)specialOpen.add(id);else specialOpen.delete(id);});
  panel.append(chapter);
 }
 if(scope==="Labyrinth"){
  const groups=info.groups;
  groups.forEach((g,i)=>{const en=info.groupEN?.[g.id];group("lab-"+g.id,(i+1)+". "+(descEN()&&en?en.name:g.name),descEN()&&en?en.note:g.note,g.ids,i===0);});
  const labWaypoints=records("waypoints","Labyrinth");
  if(labWaypoints.length){
   const chapter=el("details",undefined,"hubChapter hubSpecialGroup");
   chapter.dataset.specialGroup="lab-waypoint";
   const checkedWp=new Set(entries("waypoints"));
   const summary=el("summary"),heading=el("span",undefined,"hubChapterTitle");
   heading.append(el("strong",tr("Waypoint ของ Labyrinth","Labyrinth Waypoints")),el("small",tr("อีก ","")+labWaypoints.length+tr(" จุดใน Locomancer · นับแยกจาก Lore"," Locomancer locations · tracked separately from Lore")));
   summary.append(heading,el("span",labWaypoints.filter(x=>checkedWp.has(x.id)).length+" / "+labWaypoints.length,"hubChapterCount"));chapter.append(summary);
   const list=el("div",undefined,"hubChapterBody"),rows=el("div",undefined,"hubList");
   labWaypoints.forEach(x=>rows.append(itemCard("waypoints",x)));list.append(rows);chapter.append(list);panel.append(chapter);
  }
  const lnk=el("a",tr("ข้อมูลผังและ Trials — The Lord's Labyrinth","Layout and Trials — The Lord's Labyrinth"));lnk.href=info.layoutSource;lnk.target="_blank";lnk.rel="noopener noreferrer";panel.append(lnk);
 }else{
  const finder=el("details",undefined,"hubChapter hubVaalGuide");finder.open=true;
  finder.append(el("summary",tr("1. ค้นหาชื่อ Vaal Side Area ที่พบ","1. Find the Vaal Side Area you entered")),vaalPanel());panel.append(finder);
  group("vaal-letters","2. Vaal Letter",tr("12 ข้อความ · ติ๊กเฉพาะชิ้นที่อ่านจริง","12 entries · mark only letters you have read in-game"),info.letters,false);
  group("vaal-journals","3. Research Journal",tr("4 ข้อความ · นับรวมใน No Stone Unturned","4 entries · part of the same No Stone Unturned achievement"),info.journals,false);
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
 label.append(el("strong",tr("คำเตือนจาก Excel ที่ต้องตรวจเพิ่ม","More historical spreadsheet warnings")),el("small",tr("อีก ","Still outside the main checkpoints: ")+unmatched.length+tr(" บทสนทนายังไม่อยู่ในขั้นตรวจหลัก · ไม่ได้ยืนยันแพตช์ 3.29"," NPC topics · patch 3.29 not verified")));
 sum.append(label,el("span",unmatched.filter(r=>entries("ears").includes(r.id)).length+" / "+unmatched.length,"hubChapterCount"));chapter.append(sum);
 const body=el("div",undefined,"hubChapterBody");
 body.append(el("p",tr("ไฟล์อ้างอิงติด WARNING ให้รายการเหล่านี้ แต่ยังไม่มีหลักฐานเพียงพอจะวางตำแหน่งในลำดับเควสต์หลักได้อย่างปลอดภัย โปรดตรวจเงื่อนไขก่อนเดินเรื่องต่อ","The original spreadsheet flags these topics, but we lack enough evidence to place them safely in the main quest sequence. Read each source-linked condition before changing quest state."),"hubSubtle"));
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
 const phaseCount={ears:phase.dialogueIds||[],lore:phase.loreIds||[],waypoints:phase.waypointIds||[],sidequests:phase.sidequestIds||[]};
 const checkedGroups={ears:allEars,lore:allLore,waypoints:allWaypoints,sidequests:allSidequests};
 const phaseTotal=Object.values(phaseCount).reduce((n,ids)=>n+ids.length,0);
 const phaseDone=Object.entries(phaseCount).reduce((n,[k,ids])=>n+ids.filter(id=>checkedGroups[k].has(id)).length,0);
 header.append(el("span","ACT "+act+" · "+tr("เส้นทางตามพื้นที่ · คู่มือประวัติศาสตร์","Source-led route · historical guide"),"hubWalkEyebrow"),
   el("h3",tr("ตรวจเส้นทางอ้างอิง All Ears ","Review source-led route for ")+phases.reduce((sum,p)=>sum+p.dialogueIds.length,0)+tr(" บทสนทนา"," NPC dialogues")),
   el("p",tr("แสดงทีละช่วงพร้อม 4 Achievement · อ้างอิงคู่มือเดิม ยังไม่ได้พิสูจน์ทุกเงื่อนไขในเกม 3.29","One step at a time across four achievements · historical route, not fully gameplay-verified in 3.29"),"hubSubtle"));
 const status=el("div",undefined,"hubWalkStageProgress");status.dataset.phaseProgress=phase.id;
 status.append(el("strong",tr("ช่วงนี้เก็บแล้ว ","This step: ")+phaseDone+" / "+phaseTotal),
 el("span",phaseTotal?Math.floor(phaseDone/phaseTotal*100)+"%":tr("รายการไม่มีในช่วงนี้","No tracked tasks")));
 const meter=el("progress");meter.value=phaseDone;meter.max=Math.max(1,phaseTotal);meter.setAttribute("aria-label",tr("ความคืบหน้าในช่วงเควสต์นี้","Achievement checklist progress in this quest step"));status.append(meter);header.append(status);
 box.append(header);
 const control=el("div",undefined,"hubStepNavigator hubWalkNavigator");
 const position=el("strong",tr("ช่วง ","Step ")+(chosen+1)+" / "+phases.length,"hubStepPosition");
 const select=el("select");select.setAttribute("aria-label",tr("เลือกช่วงการเดิน Act ","Choose walkthrough step in Act ")+act);
 phases.forEach((p,i)=>{const op=el("option",(i+1)+". "+gameName(p.place));op.value=String(i);select.append(op)});
 select.value=String(chosen);
 const goto=(i,reviewSkip=false,focusControl="select")=>{
  const target=Math.max(0,Math.min(phases.length-1,i));
  if(reviewSkip&&["7","8","9","10"].includes(act)&&target>chosen){
   const outstanding=phases.slice(chosen,target).filter(p=>p.stop&&(p.stopIds||[]).some(id=>!allEars.has(id)));
   if(outstanding.length){
    const first=outstanding[0];
    const msg=tr(
      "กำลังข้ามจุดเสี่ยงที่ยังไม่บันทึก "+outstanding.length+" ช่วง\\nจุดแรก: "+first.stop+"\\n\\nการเปลี่ยนหน้าไม่ได้ยืนยันว่าปลอดภัย ต้องการข้ามไปดูช่วงอื่นหรือไม่?",
      "You are skipping "+outstanding.length+" unchecked STOP checkpoint(s).\\nFirst: "+(first.stopEN||first.stop)+"\\n\\nNavigation is not proof of quest safety. Jump anyway?"
    );
    if(!confirm(msg)){select.value=String(chosen);return;}
   }
  }
  // In early Acts, navigation is a preview: preserve an explicit, reviewable skip notice
  // instead of falsely treating a UI jump as quest-state completion.
  if(reviewSkip&&["1","2","3","4","5","6"].includes(act)&&target>chosen){
   const outstanding=phases.slice(chosen,target).filter(p=>p.stop&&(p.stopIds||[]).some(id=>!allEars.has(id)));
   state.skippedRisk=outstanding.length?{act,from:outstanding[0].id,count:outstanding.length}:null;
  }else if(state.skippedRisk?.act===act&&target<=chosen){state.skippedRisk=null;}
  state.steamFocusByAct[act]=target;renderView();
  const activePhase=document.querySelector('[data-steam-act="'+act+'"]');
  activePhase?.scrollIntoView({block:"start"});
  const nav=activePhase?.querySelector('.hubWalkNavigator');
  const candidate=focusControl==="prev"?nav?.querySelector('button[data-step-nav="prev"]'):
    focusControl==="next"?nav?.querySelector('button[data-step-nav="next"]'):
    focusControl==="jump"?nav?.querySelector('button[data-jump-incomplete]'):null;
  const focusTarget=candidate&&!candidate.disabled?candidate:nav?.querySelector("select");
  focusTarget?.focus({preventScroll:true});
 };
 select.onchange=()=>goto(Number(select.value),true);
 const prev=el("button",tr("ก่อนหน้า","Previous")),next=el("button",tr("ถัดไป","Next"));
 prev.type="button";next.type="button";prev.dataset.stepNav="prev";next.dataset.stepNav="next";prev.disabled=chosen===0;next.disabled=chosen===phases.length-1;
 prev.onclick=()=>goto(chosen-1,false,"prev");
 next.onclick=()=>{
  const stillMissing=(phase.stopIds||[]).filter(id=>!allEars.has(id));
  if(phase.stop&&stillMissing.length&&!confirm(tr(
   "จุดเสี่ยงนี้ยังไม่ได้ติ๊กครบ: "+phase.stop+"\n\nปุ่มถัดไปเป็นเพียงการเปลี่ยนหน้า ไม่ได้ยืนยันว่าเควสต์ปลอดภัย ต้องการดูช่วงถัดไปหรือไม่?",
   "You still have an unresolved STOP warning: "+(phase.stopEN||phase.stop)+"\n\nNext only changes the guide step. It does not prove the quest is safe. Continue?"
  )))return;
  goto(chosen+1,false,"next");
 };
 const jump=el("button",tr("ไปช่วงแรกที่ยังขาด","First incomplete step"),"hubJumpMissing");jump.type="button";
 jump.dataset.jumpIncomplete="true";jump.disabled=start<0||chosen===start;
 jump.onclick=()=>goto(start<0?0:start,true,"jump");
 control.append(position,jump,select,prev,next);box.append(control);
 if(state.skippedRisk?.act===act){
  const skipped=state.skippedRisk,first=phases.findIndex(p=>p.id===skipped.from),origin=phases[first];
  if(origin&&first>=0){
   const notice=el("section",undefined,"hubSkippedRisk");
   notice.dataset.skippedRisk=act;notice.setAttribute("role","status");
   notice.append(el("strong",tr("คุณข้ามจุดตรวจที่ยังไม่ได้บันทึก "+skipped.count+" ช่วง","You skipped "+skipped.count+" unchecked STOP checkpoint(s)")),
    el("p",tr("จุดแรก: ","First unresolved step: ")+(descEN()?(origin.stopEN||origin.headingEN||origin.place):origin.stop||origin.heading)));
   const review=el("button",tr("กลับไปตรวจจุดแรก","Review first missed checkpoint"));review.type="button";
   review.onclick=()=>{state.skippedRisk=null;state.steamFocusByAct[act]=first;renderView();document.querySelector('[data-steam-act="'+act+'"]')?.scrollIntoView({block:"start"});};
   notice.append(review,el("small",tr("การเลื่อนหน้าคู่มือไม่เปลี่ยนสถานะเควสต์ในเกม · ยังไม่ใช่หลักฐานว่าเก็บครบ","Guide navigation does not change game quest states or certify achievement completion.")));
   box.insertBefore(notice,control);
  }
 }
 const head=el("div",undefined,"hubWalkFocus");
 head.append(el("h4",descEN()?(phase.headingEN||("Route step: "+phase.place)):phase.heading),
 el("p",tr("พื้นที่: ","Area: ")+gameName(phase.place)+" · "+tr("เควสต์: ","Quest: ")+gameName(phase.quest)));
 if(phase.keyItems?.length){
  const items=el("div",undefined,"hubQuestItems");
  items.append(el("strong",tr("ไอเท็มสำคัญ: ","Key items: ")));
  phase.keyItems.forEach((name,i)=>{const tag=el("span",gameName(name),"hubQuestItem");tag.title=name;tag.lang=LANG.get().names==="th"?"th":"en";items.append(tag)});
  const note=el("small",tr("ชื่อไทยเป็นคำแปลประกอบ ไม่ใช่ชื่อทางการในเกม","Thai terms are editorial aids, not verified in-game names"),"hubSubtle");items.append(note);head.append(items);
 }
 const count=el("span",phase.dialogueIds.length?
    complete+"/"+phase.dialogueIds.length+tr(" บทสนทนาที่บันทึก"," NPC dialogues checked"):
    tr("ช่วงนี้มีเฉพาะ Lore / Waypoint / เควสต์รอง","This step contains Lore / Waypoints / side quests only"),"hubWalkCount");
 head.append(count);box.insertBefore(head,control);
 // Focus on the first unmarked task within the selected stage, prioritizing an unchecked STOP.
 const unchecked=Object.entries(phaseCount).flatMap(([type,ids])=>ids.filter(id=>!checkedGroups[type].has(id)).map(id=>({type,id})));
 const urgent=unchecked.find(x=>x.type==="ears"&&(phase.stopIds||[]).includes(x.id));
 const current=urgent||unchecked[0];
 const focus=el("section",undefined,"hubNextAction");focus.dataset.nextAction=phase.id;
 const focusTitle=el("strong",current?tr("รายการที่ควรตรวจต่อในช่วงนี้","Next item to verify in this step"):tr("รายการในช่วงนี้ทำเครื่องหมายครบแล้ว","All items in this step are checked"));
 focus.append(focusTitle);
 if(current){
  const item=collections[current.type].find(x=>x.id===current.id);
  const typeName=current.type==="ears"?"All Ears":current.type==="lore"?"No Stone Unturned":current.type==="waypoints"?"Locomancer":"No Loose Ends";
  focus.append(el("p",(item?label(item,current.type):"ID "+current.id)+" · "+typeName,"hubNextActionItem"));
  // Tell the player what this exact entry requires, not just which achievement category contains it.
  if(item){
   const original=window.POE_ITEM_DESCRIPTIONS?.get(current.type,item,current.type==="ears"&&item.act===2?getSafety():undefined);
   const guide=descEN()?LANG.englishHelp(current.type,item,original):original;
   const facts=el("dl",undefined,"hubCurrentTaskFacts");
   for(const [caption,value] of [
     [tr("ต้องทำอะไร","Do this"),guide?.action],
     [tr("ไปที่ไหน / คุยกับใคร","Where / who"),guide?.location],
     [tr("ทำเมื่อไร","When"),guide?.unlock]
   ]){
    if(!value)continue;
    const pair=el("div",undefined,"hubCurrentTaskFact");
    pair.append(el("dt",caption),el("dd",value));facts.append(pair);
   }
   if(facts.childElementCount)focus.append(facts);
   else focus.append(el("p",tr("เปิดรายการด้านล่างเพื่อดูชื่อที่ต้องตรวจในเกม ไม่มีเงื่อนไขรายรายการที่ยืนยันได้เพิ่ม","Open the exact checklist entry below to verify its in-game name. No additional verified per-item conditions are available."),"hubSubtle"));
  }
  const button=el("button",tr("ไปยังรายการนี้เพื่อติ๊กหลังทำจริง","Go to this exact item to mark it after playing"));button.type="button";
  button.dataset.openCurrentItem=current.type+":"+current.id;
  button.onclick=()=>{
   const area=box.querySelector('[data-walk-type="'+current.type+'"]');
   if(!area)return;
   if(area.tagName==="DETAILS")area.open=true;
   const row=area.querySelector('input[data-track-type="'+current.type+'"][data-track-id="'+current.id+'"]');
   if(!row)return;
   const hidden= row.closest("details");
   if(hidden&&!hidden.open)hidden.open=true;
   row.focus({preventScroll:true});
   row.closest(".hubItem")?.scrollIntoView({block:"center"});
  };
  focus.append(button);
 }else{
  focus.append(el("p",tr("เครื่องหมายในเว็บไม่ใช่หลักฐานว่า Achievement สำเร็จ ตรวจยอดจริงในเกมก่อนเดินเรื่องต่อ","Manual marks are not proof that the achievement unlocked. Compare against the actual game before advancing."),"hubSubtle"));
 }
 box.insertBefore(focus,control);
 const pending=(phase.stopIds||[]).filter(id=>!allEars.has(id));
 if(phase.stop){
   const gate=el("div",undefined,"hubStopGate"+(pending.length?" blocked":" reviewed"));
   gate.dataset.stopPhase=phase.id;gate.dataset.stopState=pending.length?"hold":"review";
   gate.append(el("strong",pending.length?tr("ยังไม่ควรผ่านจุดนี้","STOP: do not progress yet"):tr("ติ๊กครบแล้ว · ต้องตรวจในเกมอีกครั้ง","Checked in this guide · verify in-game")),
 el("p",descEN()?(phase.stopEN||"Review all missable dialogue and the original Thai warning before changing quest state."):phase.stop));
 if(descEN()&&!phase.stopEN){const source=el("details",undefined,"hubOriginalThai");source.lang="th";source.append(el("summary","Original Thai STOP detail"),el("p",phase.stop));gate.append(source);}
   if(pending.length){
     const who=pending.map(id=>{const x=E.items.find(z=>z.id===id);return x?label(x,"ears"):"ID "+id;});
     gate.append(el("div",tr("ยังไม่บันทึก ","Still unchecked: ")+pending.length+tr(" บทสนทนา: "," dialogue(s): ")+who.slice(0,3).join(" / ")+(who.length>3?tr(" และอีก "," and ")+(who.length-3)+" more":""),"hubStopPending"));
   }
   box.insertBefore(gate,focus);
 }
 if(phase.sourceConflict){
   const conflict=el("div",undefined,"hubResearchConflict");conflict.dataset.conflict="steam-vs-wiki";
   conflict.append(el("strong",tr("ลำดับ Bandits จากสองคู่มือไม่ตรงกัน","Bandit quest order differs between sources")),
 el("p",descEN()?"Steam 3.28 and PoE Wiki 2025 prescribe incompatible Bandit-first-talk timing. Neither route is fully verified for 3.29; review both original sources before an irreversible choice.":phase.sourceConflict));
   if(descEN()){const original=el("details",undefined,"hubOriginalThai");original.lang="th";original.append(el("summary","Original Thai source note"),el("p",phase.sourceConflict));conflict.append(original);}
   const links=el("div",undefined,"hubConflictLinks");
   const steam=el("a",tr("คู่มือ Steam","Steam walkthrough"));steam.href=data.source;steam.target="_blank";steam.rel="noopener noreferrer";
   const wiki=el("a","PoE Wiki");wiki.href=data.wiki;wiki.target="_blank";wiki.rel="noopener noreferrer";
   links.append(steam,wiki);conflict.append(links);box.append(conflict);
 }
 if(act==="9"&&phase.branchChoice){
 const chosenRuler=rulerChoice();
 const frame=el("section",undefined,"hubBranchChoice");frame.dataset.rulerBranch=chosenRuler;
 const heading=el("strong",tr("ตัดสินใจครั้งเดียว · ผู้ปกครอง Highgate","Irreversible choice · Highgate ruler"));
 const label=el("label",tr("ผู้ที่ได้รับ Sekhema Feather:","Who received the Sekhema Feather:"));
 const select=el("select");select.setAttribute("aria-label",tr("บันทึกผู้ปกครอง Highgate ที่เลือกแล้วในเกม","Record the Highgate ruler actually chosen in-game"));
 [["undecided",tr("ยังไม่เลือก","Not chosen yet")],["Irasha","Irasha"],["Tasuni","Tasuni"]].forEach(([value,name])=>{const o=el("option",name);o.value=value;select.append(o);});
 select.value=chosenRuler;select.onchange=()=>{
  saveRulerChoice(select.value);
  const replacement=document.querySelector('#hubView [data-phase="ruler-irasha-choice"] .hubBranchChoice select');
  replacement?.focus({preventScroll:true});
 };label.append(select);
 const msg=chosenRuler==="Tasuni"?
 tr("เส้นทาง Tasuni ไม่ตรงกับ ID #443/#444 ในฐานข้อมูลเก่า: ห้ามติ๊กสองรายการนั้นแทนบทสนทนา Irasha และยังยืนยัน All Ears 100% จากรายการนี้ไม่ได้","Tasuni route is NOT represented by historic IDs #443/#444. Do not check these as substitutes. This tracker cannot certify All Ears 100% for the Tasuni branch."):
 chosenRuler==="Irasha"?
 tr("ตรงกับฐานข้อมูลเดิม: หลังส่ง Feather ให้ Irasha ตรวจ Tasuni: Feather, Petarus and Vanja: Irasha ก่อนติ๊ก ID #443/#444","Matches the original tracker: after giving the Feather to Irasha, hear Tasuni: Feather and Petarus and Vanja: Irasha before marking #443/#444."):
 tr("ยังไม่เลือก: สำรวจบทสนทนาก่อนส่ง Feather ให้ฝ่ายใดฝ่ายหนึ่ง เพราะฐานข้อมูลเดิมมี ID สำหรับ Irasha เท่านั้น","No choice yet: check dialogue before handing in the Feather. The historical dataset has stable IDs for Irasha's branch only.");
 frame.append(heading,el("p",tr("ช่องนี้บันทึกการเลือกที่ทำไปแล้วในเกมเท่านั้น ไม่ได้เลือกผู้ปกครองให้ตัวละคร และไม่เปลี่ยนผลเควสต์ในเกม","This field only records the choice you have already made in-game. It does not choose a ruler or change the game's quest outcome."),"hubSubtle"),label,el("p",msg));
 const citation=el("a",tr("ดูผลของการเลือกทั้งสองแบบจาก PoE Wiki","Compare both ruler branches on PoE Wiki"));
 citation.href="https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_9";citation.target="_blank";citation.rel="noopener noreferrer";frame.append(citation);
 box.append(frame);
 }
 if(act==="9"&&rulerChoice()==="Tasuni"&&!phase.branchChoice){
 const banner=el("div",undefined,"hubBranchWarning");banner.dataset.rulerIntegrity="Tasuni";
 banner.append(el("strong",tr("คำเตือน: ตัวละครนี้เลือก Tasuni","Warning: this character chose Tasuni")),el("p",tr("Checklist ประวัติศาสตร์มี #443/#444 ของทาง Irasha เท่านั้น ไม่รองรับการยืนยัน All Ears 100% ในทาง Tasuni","Historical #443/#444 represent the Irasha path only; the tracker cannot certify the Tasuni path as 100%.")));
 box.append(banner);
 }
 if(phase.sourceNote){
   const caution=el("details",undefined,"hubSourceDiscrepancy");caution.dataset.sourceNote=phase.id;
   if(phase.postQuestReview){caution.dataset.postQuestReview=phase.id;caution.open=true;}
   const summary=el("summary",phase.postQuestReview?
     tr("ตรวจบทสนทนาหลังจบเควสต์ · ฟังแล้วจึงติ๊ก","After-quest dialogue check · mark only after hearing"):
     tr("ข้อแตกต่างระหว่างแหล่งข้อมูล · ยังไม่รับรองแพตช์","Historical sources disagree · not patch-certified"));
   caution.append(summary,el("p",descEN()?(phase.sourceNoteEN||"Review the original Thai source difference before advancing."):phase.sourceNote));
   const links=el("div",undefined,"hubConflictLinks");
   const wiki=el("a","PoE Wiki · All Ears Act "+act);wiki.href="https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_"+act;wiki.rel="noopener noreferrer";wiki.target="_blank";
   const legacy=el("a",tr("หมายเหตุเดิมใน Act "+act+" Inventory","Legacy Act "+act+" source notes"));legacy.href="./act"+act+"-inventory.json";legacy.rel="noopener noreferrer";legacy.target="_blank";
   if(act==="8"){const waypoint=el("a","PoE Wiki · Waypoint");waypoint.href="https://www.poewiki.net/wiki/Waypoint";waypoint.rel="noopener noreferrer";waypoint.target="_blank";links.append(waypoint);}
   links.append(wiki,legacy);caution.append(links);box.append(caution);
 }
 if(phase.patchProblem){
   const alert=el("div",undefined,"hubResearchConflict");alert.dataset.fairgravesAlert="true";
   alert.append(el("strong",tr("ปัญหาที่มีรายงานจากแพตช์ 3.29","Reported issue from patch 3.29")),
 el("p",descEN()?"Community reports describe inaccessible NPC dialogue in 3.29. This project's 3.29 gameplay reproduction is still incomplete.":phase.patchProblem),
 el("p",tr("หากคุย NPC ไม่ได้ ห้ามติ๊กว่าฟังแล้ว และอย่าสรุปว่าตัวละครนี้สามารถทำ All Ears ครบได้","If an NPC topic is unavailable, do not mark it heard or assume this character can complete All Ears."),"hubSubtle"));
 if(descEN()){const original=el("details",undefined,"hubOriginalThai");original.lang="th";original.append(el("summary","Original Thai report"),el("p",phase.patchProblem));alert.append(original);}
 box.append(alert);
 }
 const actions=el("ol",undefined,"hubWalkActions");
 const instructions=descEN()?(phase.actionsEN||["Check all source-linked NPC and lore entries in this stage.","Review the original Thai quest-state conditions below before changing game state."]):phase.actions;
 instructions.forEach(txt=>actions.append(el("li",txt)));
 // The instruction list is the primary task, not another card below the warnings and controls.
 focus.insertBefore(el("strong",tr("ทำตามขั้นตอนนี้ในเกม","Do this in-game, in order"),"hubActionInstructionsLabel"),focus.querySelector("button"));
 focus.insertBefore(actions,focus.querySelector("button"));
 if(descEN()&&!phase.actionsEN){
  const original=el("details",undefined,"hubOriginalThai hubWalkSource");original.lang="th";
  original.append(el("summary","Original Thai step-by-step instructions"));
  const list=el("ol");phase.actions.forEach(txt=>list.append(el("li",txt)));original.append(list);box.append(original);
 }
 const taskNav=el("div",undefined,"hubWalkTaskNav");taskNav.setAttribute("aria-label",tr("รายการในช่วงปัจจุบัน","Tasks in this step"));
 for(const [type,ids] of Object.entries(phaseCount)){
   if(!ids.length)continue;
   const saved=checkedGroups[type],finished=ids.filter(id=>saved.has(id)).length;
   const button=el("button",undefined,"hubWalkTaskJump"+(finished===ids.length?" isDone":""));
   button.type="button";button.dataset.jumpType=type;
   const noun=type==="ears"?tr("บทสนทนา","Dialogues"):type==="lore"?"Lore":type==="waypoints"?"Waypoints":tr("เควสต์รอง","Side quests");
   button.append(el("span",noun),el("strong",finished+" / "+ids.length));
   button.setAttribute("aria-label",noun+": "+finished+" / "+ids.length);
   button.onclick=()=>{
     const area=box.querySelector('[data-walk-type="'+type+'"]');
     if(area?.tagName==="DETAILS")area.open=true;
     if(area)area.scrollIntoView({block:"center"});
   };
   taskNav.append(button);
 }
 if(taskNav.childElementCount){box.append(el("p",tr("เปิดรายการที่ต้องเก็บในช่วงนี้:","Jump to this step’s required tasks:"),"hubSubtle hubTaskNavLead"),taskNav);}
 if(phase.visual){
   const v=phase.visual;
   const visual=el("details",undefined,"hubQuestVisual");
   visual.dataset.visualPhase=phase.id;
   const visualKey=act+":"+phase.id+":visual";
   visual.open=walkExpanded.has(visualKey);
   visual.addEventListener("toggle",()=>{if(!visual.isConnected)return;if(visual.open)walkExpanded.add(visualKey);else walkExpanded.delete(visualKey);});
   visual.append(el("summary",tr("ดูภาพจำลองหน้า Quest · ","Show concept quest UI · ")+gameName(v.title)));
   const body=el("div",undefined,"hubQuestVisualBody");
   const label=el("div",undefined,"hubVisualSourceWarning");
   label.append(el("strong",tr("ภาพจำลองเพื่ออธิบาย — ไม่ใช่ภาพหน้าจอเกมจริง","Concept illustration — NOT an actual in-game screenshot")),
     el("span",tr("รูปแบบ UI เป็นภาพประกอบ ไม่ใช่หลักฐานยืนยันเงื่อนไขเควสต์ใน 3.29","Mock interface only; not evidence that the quest works in 3.29.")));
   body.append(label);
   const figure=el("figure",undefined,"hubQuestFigure");
   const img=el("img");img.src=v.asset;img.alt=v.alt;img.loading="lazy";img.decoding="async";
   figure.append(img,el("figcaption",tr("ตัวอย่างแนวคิดหน้า World / Quest (ปุ่ม U ตามค่าปกติ) · ","Concept World / Quest screen (U by default) · ")+gameName(v.title)));body.append(figure);
   const check=el("div",undefined,"hubVisualCheck");
   check.append(el("strong",tr("จุดที่ต้องตรวจในเกมจริง","What to verify in the actual game")),el("p",descEN()?(v.checkEN||"Verify the quest state and NPC dialogue in the live game. Switch guidance to Thai for the original detailed check."):v.check));
   body.append(check);
   const links=el("div",undefined,"hubVisualLinks");
   const full=el("a",tr("เปิดภาพจำลองขนาดเต็ม","Open full-size illustration"));full.href=v.asset;full.target="_blank";full.rel="noopener noreferrer";
   const source=el("a",tr("ตรวจเงื่อนไขเควสต์จาก PoE Wiki","Verify quest details at PoE Wiki"));source.href=v.source;source.target="_blank";source.rel="noopener noreferrer";
   links.append(full,source);body.append(links);
   visual.append(body);box.append(visual);
 }
 if(phase.dialogueIds.length){
 const npc=el("section",undefined,"hubWalkCategory");npc.dataset.walkType="ears";
 npc.append(el("h4",tr("บทสนทนาที่ต้องเก็บช่วงนี้","NPC dialogues in this step")),el("p",tr("ติ๊กเฉพาะเมื่อฟังในเกมจริงแล้ว · รายการอื่นยังอยู่ในหมวดหลักด้วย","Check only after hearing the in-game dialogue. These use the original checklist records."),"hubSubtle"));
 const rows=el("div",undefined,"hubList");
 const ids=phase.dialogueIds.slice(0,5),hidden=phase.dialogueIds.slice(5);
 ids.forEach(id=>{const x=E.items.find(z=>z.id===id);if(x)rows.append(itemCard("ears",x))});
 npc.append(rows);
 if(hidden.length){
   const details=el("details",undefined,"hubWalkMore");details.open=steamExpanded.has(phase.id);
   details.append(el("summary",tr("เปิดบทสนทนาเพิ่มอีก ","Show ")+hidden.length+tr(" รายการ"," more dialogues")));
   const more=el("div",undefined,"hubList");hidden.forEach(id=>{const x=E.items.find(z=>z.id===id);if(x)more.append(itemCard("ears",x))});
   details.append(more);details.addEventListener("toggle",()=>{if(!details.isConnected)return;if(details.open)steamExpanded.add(phase.id);else steamExpanded.delete(phase.id);});
   if(pending.some(id=>hidden.includes(id))){
     const gate=box.querySelector('[data-stop-phase="'+phase.id+'"]');
     if(gate){const reveal=el("button",tr("เปิดรายการบทสนทนาที่ต้องตรวจ","Reveal required dialogue"));reveal.type="button";reveal.onclick=()=>{details.open=true;details.scrollIntoView({block:"center"});};gate.append(reveal);}
   }
   npc.append(details);
 }
 box.append(npc);
 }
 if(phase.loreIds?.length){
   const found=phase.loreIds.filter(id=>allLore.has(id)).length;
   const section=el("details",undefined,"hubWalkLore");section.dataset.walkType="lore";
   const sectionKey=act+":"+phase.id+":lore";section.open=walkExpanded.has(sectionKey);
   section.addEventListener("toggle",()=>{if(!section.isConnected)return;if(section.open)walkExpanded.add(sectionKey);else walkExpanded.delete(sectionKey)});
   section.append(el("summary",tr("Lore ในช่วงนี้ · ","Lore in this step · ")+found+" / "+phase.loreIds.length));
   section.append(el("p",tr(act==="1"?"Letters of Exile อาจสุ่มซ้ำ ให้ตรวจยอดใน Achievement ที่เกมนับจริง":phase.id==="library"?"หนังสือใน Library อาจมีข้อความซ้ำ ให้ตรวจชื่อครบทั้ง 17 แบบกับยอดในเกมจริง":"อ่าน Lore ตามชื่อและพื้นที่ในเกมก่อนทำเครื่องหมาย; ข้อมูลยังไม่รับรองแพตช์ 3.29","Check each exact lore title in-game before marking. Historic mapping is not patch 3.29 certified."),"hubSubtle"));
   const list=el("div",undefined,"hubList");
   phase.loreIds.forEach(id=>{const x=L.entries.find(z=>z.id===id);if(x)list.append(itemCard("lore",x))});
   section.append(list);box.append(section);
 }
 for(const [type,ids,checked,heading] of [
  ["waypoints",phase.waypointIds||[],allWaypoints,tr("Locomancer · Waypoint","Locomancer · Waypoints")],
  ["sidequests",phase.sidequestIds||[],allSidequests,tr("No Loose Ends · เควสต์รอง","No Loose Ends · Side quests")]
 ]){
   if(!ids.length)continue;
   const group=el("details",undefined,"hubWalkLore hubWalkExtra");group.dataset.walkExtra=type;group.dataset.walkType=type;
   const groupKey=act+":"+phase.id+":"+type;group.open=walkExpanded.has(groupKey);
   group.addEventListener("toggle",()=>{if(!group.isConnected)return;if(group.open)walkExpanded.add(groupKey);else walkExpanded.delete(groupKey)});
   group.append(el("summary",heading+tr(" ในช่วงนี้ · "," in this step · ")+ids.filter(id=>checked.has(id)).length+" / "+ids.length));
   group.append(el("p",tr(type==="waypoints"?"ติ๊กเมื่อเปิด Waypoint จริงในเกม · รหัสเดิมร่วมกับสรุป Act":"ติ๊กหลังทำเควสต์เสร็จในเกม · รหัสเดิมร่วมกับสรุป Act",type==="waypoints"?"Check only after activating this Waypoint in-game.":"Check only after completing this optional quest in-game."),"hubSubtle"));
   const list=el("div",undefined,"hubList");
   ids.forEach(id=>{const x=collections[type].find(item=>item.id===id);if(x)list.append(itemCard(type,x));});
   group.append(list);box.append(group);
 }
 const foot=el("div",undefined,"hubWalkFooter");
 const ref=el("a",tr("ตรวจลำดับกับคู่มือ Steam","Review historical Steam route"));ref.href=data.source;ref.target="_blank";ref.rel="noopener noreferrer";
 foot.append(el("span",tr("ยังไม่ได้ทดสอบจริงในแพตช์ 3.29 · สีแดงคือข้อควรหยุดตรวจ ไม่ใช่สถานะที่เกมส่งมา","Not tested in patch 3.29 · STOP warnings are based on research, not live game telemetry")),ref);box.append(foot);
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
 h.append(el("h3",complete?"Act "+act+" · "+tr("Checklist บันทึกครบแล้ว","All checklist entries marked"):"Act "+act+" · "+tr("ทำอย่างไรให้เก็บครบ","What to collect")),el("p",tr(complete?"ตรวจยอดที่เกมนับจริงก่อนออกจาก Act; การติ๊กครบไม่ยืนยัน Achievement จากเกม":"ก่อนเดินเรื่องต่อ ให้ตรวจบทสนทนาที่เสี่ยงพลาด แล้วเก็บ Lore, Waypoint และเควสต์รองที่พบใน Act นี้",complete?"Check actual in-game counters before leaving the Act; manual marks are not proof of an unlock.":"Review missable NPC dialogue before story transitions, plus the Act’s Lore, Waypoints and optional quests."),"hubSubtle"));
 card.append(h);
 const risk=(window.POE_CRITICAL_CHECKPOINTS?.acts?.[act]||[]).filter(s=>s.ids.some(id=>!entries("ears").includes(id)));
 if(risk.length){
   const top=el("div",undefined,"hubActMissionWarning");
   const text=el("div",undefined);text.append(el("strong",tr("จุดเสี่ยงจากคู่มือเก่าที่ยังไม่บันทึกครบ: ","Unchecked historical risk groups: ")+risk.length),el("span",tr("ตรวจเหตุการณ์ก่อนเปลี่ยนสถานะเควสต์ · ไม่ใช่ลำดับเดินเกมที่รับรอง","Review quest transitions before acting. This is not a certified safe route.")));
   const jump=el("button",tr("ดูจุดตรวจที่ยังขาด","Open next risk checkpoint"));jump.type="button";jump.onclick=()=>{
      if(["1","2","3","4","5","6","7","8","9","10"].includes(act)){const phases=window.POE_STEAM_WALK?.acts?.[act]||[];const found=phases.findIndex(p=>p.dialogueIds.some(id=>risk[0].ids.includes(id)));state.steamFocusByAct[act]=Math.max(0,found);renderView();document.querySelector('[data-steam-act="'+act+'"]')?.scrollIntoView({block:"start"});return;}
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
   left.append(el("strong",categoryName(s.type)),el("small",s.done+" / "+s.total+(s.done===s.total?tr(" · บันทึกครบ"," · done"):tr(" · ขาด "," · remaining ")+(s.total-s.done))));
   if(s.left.length){
      const example=el("span",tr("รายการที่ยังขาด: ","Next unchecked: ")+label(s.left[0],s.type),"hubActMissionExample");
      left.append(example);
   }
   const btn=el("button",s.done===s.total?tr("เปิดตรวจซ้ำ","Review"):tr("ดูรายการที่ยังขาด","Show remaining"));btn.type="button";
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
 gateHead.append(el("strong",tr("ก่อนออกจาก Act นี้ · ตรวจ ","Before leaving this Act · Review ")+summaries.length+tr(" หมวด"," groups")),el("span",missing===0?tr("บันทึกครบทุกหมวดแล้ว","All groups checked"):tr("ยังขาด ","Remaining: ")+missing+tr(" รายการ"," entries")));
 gate.append(gateHead,list);card.append(gate);
 const bottom=el("p",tr("ใช้ช่องติ๊กเฉพาะหลังทำจริงในเกม · แต่ละ Achievement ต้องตรวจยอดของเกมอีกครั้ง · ข้อมูลเควสต์ยังไม่รับรองแพตช์ 3.29","Check entries only after actual gameplay. Verify each achievement counter in-game; quest guidance is not certified for patch 3.29."),"hubSubtle");
 card.append(bottom);return card;
}
function epilogueRoute(target){
 const all=records("waypoints","Epilogue"),done=new Set(entries("waypoints"));
 const panel=section(tr("Epilogue · ตรวจ Waypoint ที่เหลือ","Epilogue · remaining Waypoints"));panel.dataset.specialScope="Epilogue";
 panel.append(el("p",tr("หลัง Act 10 ให้ตรวจ Waypoint อีก 2 จุดตามฐานข้อมูล Locomancer เดิม ทั้งสองจุดนับใน Achievement เดิม ไม่ใช่ Achievement ใหม่ · ยังไม่ยืนยันแพตช์ 3.29","After Act 10, verify the two remaining Waypoints in the legacy Locomancer list. These are not a new achievement, and their patch 3.29 requirements are unverified."),"hubSubtle"));
 const count=el("div",tr("ติ๊กแล้ว ","Marked: ")+all.filter(x=>done.has(x.id)).length+" / "+all.length+tr(" · นับใน Locomancer 91 จุด (ฐานข้อมูลเก่า)"," · part of the 91-entry legacy Locomancer list"),"hubActProgress");panel.append(count);
 const list=el("div",undefined,"hubList");
 all.forEach(x=>list.append(itemCard("waypoints",x)));panel.append(list);target.append(panel);
}
// Show conflicts where a player decides what to do, not only in the footer.
function routeEvidencePanel(act){
 const issues={
  "1":[["Fairgraves #34–38 · current 3.29 reports","Fairgraves #34–38 · รายงานใน 3.29","Community reports describe five inaccessible Fairgraves/Bestel dialogues after the Act 1 rework. If the NPC cannot be spoken to, do not mark these as heard or assume the achievement is possible on this league character.","มีรายงานว่าการปรับเควสต์ Act 1 ทำให้บทสนทนา Fairgraves/Bestel 5 รายการเข้าไม่ถึง หากคุยไม่ได้ อย่าติ๊กว่าได้ฟังแล้ว และอย่าสรุปว่าตัวละครในลีกนี้เก็บ All Ears ได้แน่นอน","https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869"]],
  "2":[["Bandits / The Darkness","Bandits / The Darkness","PoE Wiki: TALK to every Bandit BEFORE opening the Ancient Seal, but do not kill before The Darkness. Steam 3.28: do NOT TALK TO or kill Bandits until AFTER triggering The Darkness. These instructions directly conflict; neither is verified as universally safe for 3.29. Eramir #101–103 depend on the first/second kill order.","PoE Wiki: คุย Bandits ทุกคนก่อนเปิด Ancient Seal แต่ห้ามฆ่าก่อน The Darkness ส่วน Steam 3.28: ห้ามแม้แต่คุยหรือฆ่า Bandits ก่อนเปิด The Darkness ทั้งสองแหล่งขัดกันโดยตรง ยังไม่มีหลักฐานรับรองว่าลำดับใดปลอดภัยเสมอสำหรับ 3.29 ส่วน Eramir #101–103 ขึ้นกับลำดับการฆ่าจริง","https://www.poewiki.net/wiki/Guide:All_Ears_achievement"],["Steam 3.28 route","ลำดับจาก Steam 3.28","Compare the Steam route against the Wiki before advancing; neither is fully gameplay-verified for 3.29.","เทียบลำดับจากคู่มือ Steam กับ Wiki ก่อนเล่นต่อ ทั้งคู่ยังไม่ผ่านการทดสอบครบใน 3.29","https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869"]],
  "7":[["Yeena / Helena timing","จังหวะ Yeena / Helena","Source guides differ on several before/after conversations. Check the current STOP step before entering the next area.","คู่มือเก่ามีจังหวะบทสนทนาบางจุดไม่ตรงกัน ตรวจจุดหยุดก่อนเข้าพื้นที่ถัดไป","https://www.poewiki.net/wiki/Guide:All_Ears_achievement"]],
  "9":[["Irasha / Tasuni branch","ทางเลือก Irasha / Tasuni","The legacy #443/#444 identifiers describe one ruler branch. Do not assume a complete 484/484 check proves the alternate route.","ID #443/#444 ในข้อมูลเดิมอ้างถึงทางเลือกผู้ปกครองฝั่งหนึ่ง ห้ามถือว่าติ๊ก 484/484 แล้วยืนยันอีกทางเลือกได้","https://www.poewiki.net/wiki/Guide:All_Ears_achievement"]]
 };
 const list=issues[String(act)]||[];
 if(!list.length)return null;
 const box=el("details",undefined,"hubEvidencePanel");
 box.dataset.evidenceAct=String(act);
 // The initial message stays compact; explicit differences remain one click away.
 box.open=Object.hasOwn(state.evidenceExpandedByAct,String(act))?state.evidenceExpandedByAct[String(act)]:["1","2","9"].includes(String(act));
 const summary=el("summary");
 summary.addEventListener("click",()=>{state.evidenceExpandedByAct[String(act)]=!box.open;});
 summary.append(el("strong",tr("แหล่งข้อมูลมีข้อขัดแย้ง · ตรวจลำดับก่อนเล่นต่อ","Source disagreement · verify before advancing")),el("small",tr("ยังไม่มีหลักฐานเกม 3.29 ยืนยันทุกเงื่อนไข · "+list.length+" ประเด็น","Not fully verified in live 3.29 · "+list.length+" issue(s)")));
 box.append(summary);
 const body=el("div",undefined,"hubEvidenceBody");
 list.forEach(([en,th,detailEN,detailTH,href])=>{
  const entry=el("div",undefined,"hubEvidenceIssue");
  entry.append(el("strong",tr(th,en)),el("p",tr(detailTH,detailEN)));
  const source=el("a",tr("เปิดหลักฐานต้นทาง","Read original source"));
  source.href=href;source.target="_blank";source.rel="noopener noreferrer";
  entry.append(source);body.append(entry);
 });
 body.append(el("p",tr("ระดับหลักฐาน: คู่มือเก่าและ Wiki · ยังไม่มีหลักฐาน 3.29 ครบทุกทางเลือก ห้ามถือว่าเป็นเส้นทางปลอดภัยที่รับรองแล้ว","Evidence: historical guides and Wiki; no complete 3.29 branch-by-branch gameplay verification. Not a certified missable-safe route."),"hubSubtle"));
 box.append(body);return box;
}
function renderRoute(target){if(state.act==="Labyrinth"||state.act==="Vaal"){specialLoreRoute(target,state.act);return;}if(state.act==="Epilogue"){epilogueRoute(target);return;}const act=state.act==="all"?"1":state.act, panel=section("Act "+act+" · "+tr("รายการเก็บ Achievement","Achievement route"));
panel.append(el("p",tr("ทำเครื่องหมายหลังเก็บในเกมแล้ว · รายการจะยังอยู่ที่เดิมและเปลี่ยนเป็น “เก็บแล้ว” · คำเตือนสำคัญแสดงก่อนรายละเอียดอื่น","Check only after collecting in-game. Completed entries remain in place; important STOP warnings appear before details."),"hubSubtle"));
const countAll=["ears","lore","waypoints","sidequests"].reduce((sum,type)=>sum+records(type,act).length,0);
const doneAll=["ears","lore","waypoints","sidequests"].reduce((sum,type)=>sum+records(type,act).filter(x=>entries(type).includes(x.id)).length,0);
const riskRemaining=records("ears",act).filter(x=>window.POE_ITEM_DESCRIPTIONS?.get("ears",x,act==="2"?getSafety():undefined)?.caution&&!entries("ears").includes(x.id)).length;
const quick=el("div",undefined,"hubActProgress");
quick.append(el("strong",tr("เก็บแล้ว ","Checked: ")+doneAll+" / "+countAll+tr(" รายการ"," entries")),el("span",riskRemaining+tr(" บทสนทนามีคำเตือนที่ต้องตรวจ"," dialogue warnings to review"),"hubSubtle"));panel.append(quick);
const evidence=routeEvidencePanel(act);if(evidence)panel.append(evidence);
const reference=el("details",undefined,"hubReferenceShelf");reference.dataset.referenceAct=act;
reference.open=state.referenceShelfOpen;
reference.addEventListener("toggle",()=>{if(reference.isConnected)state.referenceShelfOpen=reference.open;});
const referenceTitle=el("summary");
// Record the user's explicit choice before native details toggle; frequent route re-renders can occur before an async toggle event.
referenceTitle.addEventListener("click",()=>{state.referenceShelfOpen=!reference.open;});
referenceTitle.append(el("strong",tr("รายละเอียดเพิ่มเติม · หลักฐานและรายการทั้งหมด","More details · sources and full checklists")),
 el("small",tr("เปิดเมื่อต้องการเทียบข้อมูลเดิม จุดเสี่ยงจาก Wiki และรายการ 4 Achievement","Expand for older evidence, Wiki warnings and all four achievement inventories")));
reference.append(referenceTitle);
const actMission=journeyActGuide(act);
if(["1","2","3","4","5","6","7","8","9","10"].includes(act)){
 const route=actSteamGuide(act);if(route)panel.append(route);
 const moreMission=el("details",undefined,"hubActSummaryMore");moreMission.dataset.actSummary=act;
 moreMission.append(el("summary",tr("ดูภาพรวม 4 Achievement / รายการที่ยังขาด","View four-achievement overview and remaining tasks")),actMission);
 reference.append(moreMission);
 if(["2","3","4","5","6","7","8","9","10"].includes(act)){const more=el("details",undefined,"hubHistoricalRisks");more.dataset.historicalRisks=act;more.open=historicalOpen.has(act);const summary=el("summary",tr("ตรวจจุดเสี่ยงรายเควสต์เพิ่มเติม · แหล่งอ้างอิง PoE Wiki","More historic quest warnings · PoE Wiki evidence"));summary.onclick=()=>{if(more.open)historicalOpen.delete(act);else historicalOpen.add(act);};more.append(summary);const critical=criticalPanel(act);if(critical)more.append(critical);more.addEventListener("toggle",()=>{if(!more.isConnected)return;if(more.open)historicalOpen.add(act);else historicalOpen.delete(act);});reference.append(more);}
 }else{reference.append(actMission);const critical=criticalPanel(act);if(critical)reference.append(critical);}
const extraWarn=supplementalWarnings(act);if(extraWarn)reference.append(extraWarn);
if(act==="10"){reference.append(el("p",tr("Act 10: ฐานข้อมูลปี 2025 ไม่มีคำเตือนก่อนเปลี่ยนสถานะเควสต์แยกต่างหาก ไม่ได้หมายความว่าปลอดภัยในเกม 3.29","Act 10: the 2025 source has no separate pre-transition STOP groups. This is not proof of safety or 3.29 gameplay verification."),"hubNotice"));const followup=postQuestPanel(act);if(followup)reference.append(followup);}
["ears","lore","waypoints","sidequests"].forEach(type=>{
const rows=records(type,act),count=rows.filter(x=>entries(type).includes(x.id)).length;
const chapter=el("details",undefined,"hubChapter");chapter.dataset.group=type;
chapter.open=routeOpen.has(act+":"+type)||!!state.search.trim();
const summary=el("summary"),left=el("span",undefined,"hubChapterTitle");
left.append(el("strong",categoryName(type)),el("small",names[type]));summary.append(left,el("span",count+" / "+rows.length,"hubChapterCount"));
chapter.append(summary);
const content=el("div",undefined,"hubChapterBody");
if(type==="ears"){const note=el("p",undefined,"hubSubtle");const source=el("a","PoE Wiki · All Ears / Act "+act);source.href="https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_"+act;source.target="_blank";source.rel="noopener noreferrer";note.append(tr("เรียงตามแถว Wiki 2025 · ","Ordered by 2025 Wiki rows · "),source);content.append(note);}
addList(content,type,act,state.limit,true);chapter.append(content);
summary.addEventListener("click",()=>{if(state.search.trim())return;const key=act+":"+type;if(chapter.open)routeOpen.delete(key);else routeOpen.add(key);});
chapter.addEventListener("toggle",()=>{if(!chapter.isConnected||state.search.trim())return;const key=act+":"+type;if(chapter.open)routeOpen.add(key);else routeOpen.delete(key);});
reference.append(chapter);
});const rewardChapter=renderActRewards(act);if(rewardChapter)reference.append(rewardChapter);
panel.append(reference);
target.append(panel);}
function renderCategory(target,type){const panel=section(categoryName(type)+" · "+names[type]);
const desc={lore:tr("Lore 140 รายการแบ่งเป็น Campaign, Labyrinth และ Vaal Side Areas โดย Letters of Exile และหนังสือ Library อาจออกซ้ำ ต้องนับเฉพาะข้อความ/เล่มที่ยังไม่ได้เก็บจริง","140 historical Lore entries across the campaign, Labyrinth and Vaal Side Areas. Letters of Exile and Library book variants can repeat; only mark a distinct entry after encountering it."),
waypoints:tr("รายการ Waypoint 91 จุดจากชุดอ้างอิง 3.9 อาจไม่ตรงกับแพตช์ใหม่ทุกจุด","91 legacy Waypoint entries from patch 3.9 data. The actual current patch requirements may differ."),
sidequests:tr("Side Quest 30 รายการจากชุดอ้างอิง 3.9 ต้องตรวจ quest-state ก่อนรับรอง","30 historical optional quest entries. Confirm each quest state and turn-in in-game before marking it."),
ears:tr("All Ears 484 บทสนทนา (รายการเดิมแสดงด้านล่าง)","All Ears: 484 historical dialogue topics. Mark only conversations actually heard in-game.")};
panel.append(el("p",desc[type],"hubSubtle"));
if(type==="lore"){
 const specialPick=el("div",undefined,"hubLoreNavigation");
 specialPick.append(el("p",tr("No Stone Unturned: Campaign 114 · Labyrinth 10 · Vaal Side Areas 16 (รวม 140 ชิ้น)","No Stone Unturned: Campaign 114 · Labyrinth 10 · Vaal Side Areas 16 (total 140 Lore entries)"),"hubSubtle"));
 [["Labyrinth",tr("เปิดขั้นตอน The Labyrinth · 10","Open Labyrinth guide · 10")],["Vaal",tr("เปิดคู่มือ Vaal Letter · 16","Open Vaal Letter guide · 16")]].forEach(([scope,txt])=>{
  const btn=el("button",txt);btn.type="button";btn.onclick=()=>{state.routeAct=scope;openTab("route");};specialPick.append(btn);
 });
 panel.append(specialPick);
const tips=el("p",tr("สำรวจ Lore ในเกมโดยคลิกวัตถุให้ระบบนับ ไม่จำเป็นต้องอ่านข้อความจนจบ · Letters of Exile และหนังสือใน The Library อาจต้องเข้า Instance ใหม่เพื่อให้พบทุกชิ้น","Interact with each Lore object in-game and verify the counter; you do not need to read every line. Letters of Exile and Library books may repeat across instances, so revisit until you find each distinct entry."),"hubNotice");panel.append(tips);
const vaal=el("details",undefined,"hubChapter hubVaal");vaal.append(el("summary",tr("ค้นหา Vaal Letter ตามชื่อ Vaal Side Area","Find Vaal Letters by Side Area name")),vaalPanel());panel.append(vaal);
}
addList(panel,type,state.act,state.limit);target.append(panel);}
function getSafety(){const c=active(),s=getBackupState(LORE),r=s.byCharacter[c.id]||{};return r.safety&&typeof r.safety==="object"?r.safety:{};}
function updateSafety(key,value){const c=active(),s=getBackupState(LORE),r=s.byCharacter[c.id]||{};r.safety=Object.assign({},r.safety||{}, {[key]:value});s.byCharacter[c.id]=r;
try{localStorage.setItem(LORE,JSON.stringify(s));refresh();}catch(e){alert(tr("บันทึกคำเตือน Act 2 ไม่ได้","Could not save Act 2 quest preflight."));}}
function safetyPanel(){
 const wrap=el("div",undefined,"hubPanel");
 wrap.append(
   el("h3",tr("ก่อนตัดสินใจกับ Bandits · ตรวจ The Darkness","Before choosing Bandits · check The Darkness")),
   el("p",tr("แหล่งอ้างอิงยังขัดแย้งเรื่องคุย Bandits ก่อนหรือหลัง Ancient Seal แต่เห็นตรงกันว่าห้ามฆ่าก่อนเก็บ The Darkness ให้ทำเครื่องหมายเฉพาะสิ่งที่เกิดขึ้นจริง ไม่ใช้เครื่องหมายเหล่านี้รับรองลำดับเควสต์",
     "Steam and PoE Wiki disagree on when to first speak with Bandits relative to the Ancient Seal. Both require checking Darkness dialogue before making an irreversible kill/help choice. These are manual notes, not proof of a patch-safe route."),"hubSubtle")
 );
 wrap.append(el("p",tr(
   "สำคัญสำหรับ All Ears: คู่มือปี 2025 อธิบายหัวข้อ Eramir หลังฆ่า Bandits ตัวแรก ตัวที่สอง และหลังฆ่าครบทั้งสาม หากเลือกช่วย Bandit เส้นทางนี้จะใช้ตามลำดับเดียวกันไม่ได้ และยังไม่มีหลักฐานทดสอบในโปรเจกต์ว่า Book of Reform กู้หัวข้อที่พลาดไปใน 3.29 ได้",
   "All Ears caution: the 2025 route includes distinct Eramir topics after your first kill, second kill and all three kills. Helping a Bandit does not follow the same route. No in-game 3.29 evidence here establishes that Book of Reform can restore missed dialogue."
 ),"hubCheckpointRisk"));
 const s=getSafety(),grid=el("div",undefined,"hubCheckGrid");
 const checks=[
  ["alira","เคยคุย Alira (ยังไม่รับรองเวลา)","Spoke to Alira (timing unverified)"],
  ["oak","เคยคุย Oak (ยังไม่รับรองเวลา)","Spoke to Oak (timing unverified)"],
  ["kraityn","เคยคุย Kraityn (ยังไม่รับรองเวลา)","Spoke to Kraityn (timing unverified)"],
  ["seal","เปิด Ancient Seal แล้ว","Opened the Ancient Seal"],
  ["darkness","ฟัง The Darkness ครบตามเงื่อนไขแล้ว","Heard all applicable Darkness topics"]
 ];
 checks.forEach(([id,th,en])=>{
   const label=el("label"),checkbox=el("input");
   checkbox.type="checkbox";checkbox.checked=s[id]===true;checkbox.dataset.safety=id;
   checkbox.onchange=()=>updateSafety(id,checkbox.checked);
   label.append(checkbox,document.createTextNode(tr(th,en)));grid.append(label);
 });
 wrap.append(grid);
 const choices=el("div",undefined,"hubControls");
 [["first","Bandit ที่ฆ่าคนแรก","First Bandit you killed"],["second","Bandit ที่ฆ่าคนที่สอง","Second Bandit you killed"]].forEach(([key,th,en])=>{
   const group=el("div"),name=el("label",tr(th,en)),select=el("select");
   select.dataset.kill=key;
   [["",tr("ยังไม่ได้ฆ่า / ไม่แน่ใจ","Not killed / unsure")],["Alira","Alira"],["Oak","Oak"],["Kraityn","Kraityn"]].forEach(([value,title])=>{
      const opt=el("option",title);opt.value=value;select.append(opt);
   });
   select.value=s[key]||"";
   select.onchange=()=>{
     const value=select.value,other=key==="first"?"second":"first";
     if(value&&value===getSafety()[other]){
       alert(tr("Bandits ที่ฆ่าคนแรกและคนที่สองต้องต่างกัน","Your first and second defeated Bandits must be different."));
       select.value=s[key]||"";return;
     }
     updateSafety(key,value);
   };
   group.append(name,select);choices.append(group);
 });
 wrap.append(choices);
 const state=el("div",undefined,"hubNotice"),saved=getSafety(),sealed=!!(saved.seal&&saved.darkness);
 let message=sealed?
   tr("บันทึก Ancient Seal และ The Darkness แล้ว แต่คู่มือยังขัดแย้งเรื่องลำดับคุย Bandits · ตรวจในเกมก่อนเลือกเส้นทาง",
      "Ancient Seal and Darkness are marked, but the historical guides still disagree on first-talk order. Check in-game before choosing."):
   tr("ยังไม่ได้บันทึก Ancient Seal และ The Darkness ครบ · อย่าเพิ่งฆ่าหรือช่วย Bandits",
      "Ancient Seal and Darkness are not both marked. Do not kill or help Bandits yet.");
 if((saved.first||saved.second)&&!sealed)message=tr(
   "ระวัง: บันทึกว่าฆ่า Bandit แล้ว แต่ยังไม่ยืนยัน Ancient Seal / The Darkness · อาจพลาดบทสนทนา",
   "Warning: a Bandit kill was recorded before Seal / Darkness verification. Dialogue may already have been missed."
 );
 state.textContent=message;wrap.append(state);
 if(saved.first||saved.second){
   const remaining=["Alira","Oak","Kraityn"].filter(n=>n!==saved.first&&n!==saved.second);
   wrap.append(el("p",tr(
     "หลังฆ่าตัวแรก ให้คุย Eramir ตามชื่อ Bandit ที่ฆ่า; หลังฆ่าตัวที่สอง ให้คุยตามชื่อ Bandit ที่ยังรอด (",
     "After your first kill, hear Eramir's topic for the defeated Bandit. After your second, hear the topic for the survivor ("
   )+(remaining.join(", ")||tr("ไม่มี","none"))+tr(") · ต้องตรวจหัวข้อจริงในเกม (Wiki แถว 101–103)",") · verify actual in-game topics (Wiki rows 101–103)."),"hubSubtle"));
 }
 const wiki=el("a",tr("อ่านเงื่อนไข Act 2 จาก PoE Wiki","Review Act 2 requirements on PoE Wiki"));
 wiki.href="https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_2";wiki.target="_blank";wiki.rel="noopener noreferrer";wrap.append(wiki);
 return wrap;
}
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
function vaalPanel(){const box=el("div",undefined,"hubPanel");box.append(el("h3",tr("Vaal Letter / Research Journal · ค้นหาตามชื่อพื้นที่","Vaal Letter / Research Journal · search by Side Area name")),el("p",tr("Vaal Side Area เกิดแบบสุ่ม ข้อมูลชื่อพื้นที่มาจาก PoE Wiki ปี 2025 ต้องเทียบสิ่งที่พบจริงใน 3.29 ก่อนทำเครื่องหมาย","Vaal Side Areas appear at random. This area-to-lore mapping is from the 2025 Wiki; confirm what you encounter in 3.29 before marking it."),"hubSubtle"));
box.append(el("div",tr("สำหรับ 3.29: ตารางนี้แสดง Lore ตามชื่อพื้นที่ ไม่ใช่การรับรองวิธีฟาร์มผ่าน Map Device ตรวจพื้นที่และ Lore ที่พบจริงก่อนติ๊ก","For 3.29: this area-to-lore table is not a certified Map Device farming route. Verify the actual area and lore before checking it."),"hubNotice"));
const input=el("input");input.type="search";input.placeholder=tr("พิมพ์ชื่อ เช่น Concealed Caldarium","Type an area name, e.g. Concealed Caldarium");input.value=state.vaalQuery;input.setAttribute("aria-label",tr("ค้นหาชื่อ Vaal Side Area","Search Vaal Side Area name"));const result=el("div",undefined,"hubList");box.append(input,result);
const show=()=>{result.replaceChildren();const q=input.value.trim().toLowerCase();if(q.length<2){result.append(el("p",tr("พิมพ์ชื่อพื้นที่อย่างน้อย 2 ตัวอักษร","Enter at least 2 characters to search for an area"),"hubSubtle"));return;}const entries=vaalMap.filter(x=>(x[0]+" "+x[2]).toLowerCase().includes(q)).slice(0,10);
entries.forEach(m=>{const lore=L.entries.find(x=>x.act==="Vaal"&&x.name.toLowerCase().includes(m[1].toLowerCase()));const r=el("div",undefined,"hubItem"),info=el("div",undefined,"hubText");info.append(el("div",m[0],"hubName"),el("div",m[2]+" · "+(lore?lore.name+" · Wiki #"+(lore.wikiRow||"?"):tr("ยังไม่พบรายการที่ตรงกัน","No exact lore match yet")),"hubMeta"));if(lore){const b=el("button",entriesForVaal(lore)?tr("สำรวจแล้ว · ยกเลิก","Marked · undo"):tr("บันทึกว่าสำรวจแล้ว","Mark as collected"));b.onclick=()=>writeMarks("lore",lore.id,!entriesForVaal(lore));r.append(b);}r.prepend(info);result.append(r)});
if(!entries.length)result.append(el("div",tr("ไม่พบชื่อพื้นที่ในตารางต้นทาง อย่าเดาชื่อ Lore จากพื้นที่ที่ชื่อคล้ายกัน","This area is not in the checked reference list. Do not guess a Lore item from a similar name."),"hubNotice"));};input.oninput=()=>{state.vaalQuery=input.value;show();};show();const ref=el("a",tr("ที่มา: PoE Wiki — Vaal side area","Source: PoE Wiki — Vaal side area"));ref.href="https://www.poewiki.net/wiki/Vaal_side_area";ref.target="_blank";ref.rel="noopener noreferrer";box.append(ref);return box;}
function entriesForVaal(lore){return entries("lore").includes(lore.id);}
function currentReview(){const c=active(),s=safeParse(HUB);return s&&s.schema===2&&s.byCharacter&&s.byCharacter[c.id]||{};}
function saveReview(review){const c=active(),raw=safeParse(HUB),s=raw&&raw.schema===2&&raw.byCharacter?raw:{schema:2,byCharacter:{}};s.byCharacter[c.id]=review;try{localStorage.setItem(HUB,JSON.stringify(s));return true;}catch(e){alert("บันทึกจุดตรวจสอบไม่ได้");return false;}}
function reviewPanel(){const panel=section(tr("ตรวจยอด Achievement กับเกม","Compare achievement counts with your game"));
panel.append(el("p",tr("กรอกยอด Achievement ที่เกมแสดง แล้วเทียบกับจำนวนที่ติ๊กไว้ในเว็บ · หากไม่ตรง ให้ย้อนตรวจรายการก่อนหน้า เว็บไม่รู้ว่าชิ้นใดเกมยังไม่นับ","Enter the achievement count shown in-game and compare it with your marked entries. If they differ, review previous steps; this site cannot identify which items the game did not count."),"hubSubtle"));
const controls=el("div",undefined,"hubControls"),select=el("select"),input=el("input"),cmp=el("button",tr("เปรียบเทียบยอด","Compare counts"));
select.setAttribute("aria-label",tr("เลือก Achievement ที่จะตรวจ","Select achievement to compare"));Object.entries(names).forEach(([k,v])=>{const o=el("option",v);o.value=k;select.append(o)});select.value=state.reviewType;select.onchange=()=>{state.reviewType=select.value;state.gameCount="";renderView();};input.type="number";input.min="0";input.max=String(totals[state.reviewType]);input.step="1";input.value=state.gameCount;input.placeholder=tr("จำนวนที่เกมแสดง","Count shown in-game");input.setAttribute("aria-label",tr("กรอกจำนวนที่เกมแสดง","Enter actual in-game count"));input.oninput=()=>state.gameCount=input.value;
cmp.className="primary";const out=el("div");cmp.onclick=()=>{const n=Number(input.value);out.replaceChildren();if(input.value.trim()===""||!Number.isInteger(n)||n<0||n>totals[state.reviewType]){out.append(el("div",tr("กรอกจำนวนเต็มตั้งแต่ 0 ถึง ","Enter a whole number from 0 to ")+totals[state.reviewType],"hubNotice"));return;}const checked=progress(state.reviewType),diff=checked-n;const summary=el("div",tr("ที่ติ๊กในเว็บ: ","Marked in guide: ")+checked+tr(" / เกม: "," / in-game: ")+n+". "+(diff===0?tr("ยอดเท่ากัน แต่ยังต้องตรวจว่าทุกชิ้นถูกนับจริง","Counts match, but you still need to verify each item is counted in-game"):diff>0?tr("เว็บมากกว่าเกม ","Guide marks exceed game count by ")+diff+tr(" รายการ"," items"):tr("เกมมากกว่าเว็บ ","Game count exceeds guide marks by ")+(-diff)+tr(" รายการ"," items")),diff===0?"hubGood":"hubNotice");out.append(summary);const baseline=currentReview()?.baselines?.[state.reviewType];if(diff!==0&&baseline){const added=entries(state.reviewType).filter(id=>!baseline.ids.includes(id)),t=el("div",undefined,"hubSection");t.append(el("p",tr("รายการที่ติ๊กเพิ่มหลังจากครั้งล่าสุดที่ยอดตรงกัน ใช้ช่วยย้อนตรวจ ไม่ได้หมายความว่าเกมไม่นับรายการเหล่านี้:","Items marked since the last matching-count checkpoint. Use this list for review; it does not prove the game failed to count these entries:"),"hubSubtle"));const ul=el("ul");added.slice(0,45).forEach(id=>{const x=collections[state.reviewType].find(z=>z.id===id);if(x)ul.append(el("li",label(x,state.reviewType)))});if(!added.length)ul.append(el("li",tr("ไม่มีรายการที่ติ๊กเพิ่มหลังจุดเทียบยอด ลองตรวจรายการก่อนหน้านั้นและรายการที่ยังค้าง","No new marks since your checkpoint. Review earlier and still-unchecked entries.")));t.append(ul);out.append(t);}};
const checkpoint=el("button",tr("บันทึกจุดที่ยอดตรงกัน","Save matching-count checkpoint"));checkpoint.onclick=()=>{const n=Number(input.value),type=state.reviewType;if(input.value.trim()===""||!Number.isInteger(n)||n!==progress(type)){alert(tr("บันทึกได้เมื่อยอดในเกมเท่ากับจำนวนที่ติ๊กไว้ในเว็บเท่านั้น","You can save a checkpoint only when the in-game count matches your guide marks."));return;}const s=currentReview();if(!s.baselines)s.baselines={};s.baselines[type]={count:n,ids:entries(type),at:new Date().toISOString()};if(saveReview(s)){out.replaceChildren();out.append(el("div",tr("บันทึกจุดเทียบยอดแล้ว (ยืนยันเฉพาะตัวเลข ไม่ใช่การปลด Achievement)","Matching-count checkpoint saved (numbers only, not achievement unlock confirmation)."),"hubGood"));}};
controls.append(select,input,cmp,checkpoint);panel.append(controls,out);
const old=currentReview()?.baselines?.[state.reviewType];if(old)panel.append(el("p",tr("จุดเทียบยอดล่าสุด: ","Last matching checkpoint: ")+old.count+tr(" รายการ · "," entries · ")+old.at,"hubSubtle"));
const safety=el("details",undefined,"hubChapter");safety.append(el("summary",tr("ตรวจจุดเสี่ยง Act 2 · Bandits / Ancient Seal","Review Act 2 risks · Bandits / Ancient Seal")),safetyPanel());
panel.append(safety,exportPanel());return panel;}
function exportPanel(){const panel=el("div",undefined,"hubPanel");panel.append(el("h3",tr("สำรองข้อมูลทุก Achievement","Back up all tracked achievements")),el("p",tr("ส่งออกเป็นไฟล์เดียวสำหรับทุกตัวละคร · เมื่อนำเข้าจะเพิ่มเป็นตัวละครใหม่ ไม่เขียนทับข้อมูลเดิม","Export one file for all characters. Import adds new character entries and does not overwrite existing ones."),"hubSubtle"));
const row=el("div",undefined,"hubInlineRow"),exp=el("button",tr("ดาวน์โหลด Backup รวม","Download combined backup")),imp=el("button",tr("นำเข้า Backup รวม","Import combined backup")),file=el("input");file.type="file";file.accept="application/json,.json";file.hidden=true;
exp.className="primary";exp.onclick=()=>{const s=B.read(),l=getBackupState(LORE),x=getBackupState(EXTRA),h=safeParse(HUB)||{};const characters=s.characters.map(c=>{const lr=l.byCharacter[c.id]||{},ex=x.byCharacter[c.id]||{},rv=h.byCharacter&&h.byCharacter[c.id]||{};return {name:c.name,ears:validIDs("ears",c.checked),lore:validIDs("lore",lr.lore),waypoints:validIDs("waypoints",ex.waypoints),sidequests:validIDs("sidequests",ex.sidequests),safety:lr.safety||{},baselines:rv.baselines||{}};});const blob=new Blob([JSON.stringify({app:"poe-unified-companion",schema:2,exportedAt:new Date().toISOString(),characters},null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=el("a");a.href=url;a.download="poe-achievements-all-characters.json";a.click();setTimeout(()=>URL.revokeObjectURL(url),5000);};
imp.onclick=()=>file.click();file.onchange=async()=>{const f=file.files[0];file.value="";if(!f||f.size>4e6){alert(tr("ไฟล์ไม่ถูกต้องหรือใหญ่เกิน 4 MB","Invalid file or larger than 4 MB."));return;}try{const obj=JSON.parse(await f.text()),records=obj.characters;if(obj.app!=="poe-unified-companion"||obj.schema!==2||!Array.isArray(records)||!records.length||records.length>100)throw Error("invalid");
for(const c of records){if(!c||typeof c.name!=="string"||!c.name.trim()||c.name.length>60)throw Error("name");for(const type of Object.keys(names)){const ids=c[type];if(!Array.isArray(ids)||ids.length>totals[type]||ids.some(z=>!Number.isInteger(z)||z<1||z>totals[type]))throw Error("ids");}}
const main=B.read();if(main.characters.length+records.length>100)throw Error("limit");if(!confirm(tr("นำเข้า ","Import ")+records.length+tr(" ตัวละครเป็นรายการใหม่? จะไม่ลบข้อมูลเดิม และโหลดหน้าใหม่เมื่อสำเร็จ"," character(s) as new entries? Existing data will remain and the page will reload after success.")))return;
const originals=[MAIN,LORE,EXTRA,HUB].map(key=>[key,localStorage.getItem(key)]),newMain=JSON.parse(JSON.stringify(main)),newLore=getBackupState(LORE),newExtras=getBackupState(EXTRA),newHub=safeParse(HUB)||{schema:2,byCharacter:{}};if(!newHub.byCharacter)newHub.byCharacter={};
records.forEach((c,i)=>{const id="hub-"+Date.now().toString(36)+"-"+i+"-"+Math.random().toString(36).slice(2,9);newMain.characters.push({id,name:c.name.trim(),checked:validIDs("ears",c.ears)});newLore.byCharacter[id]={lore:validIDs("lore",c.lore),safety:c.safety&&typeof c.safety==="object"?c.safety:{},checkpoint:null};newExtras.byCharacter[id]={waypoints:validIDs("waypoints",c.waypoints),sidequests:validIDs("sidequests",c.sidequests)};newHub.byCharacter[id]={baselines:{}};});
try{localStorage.setItem(MAIN,JSON.stringify(newMain));localStorage.setItem(LORE,JSON.stringify(newLore));localStorage.setItem(EXTRA,JSON.stringify(newExtras));localStorage.setItem(HUB,JSON.stringify(newHub));location.reload();}catch(e){originals.forEach(([k,v])=>{try{if(v===null)localStorage.removeItem(k);else localStorage.setItem(k,v)}catch(_e){}});alert(tr("นำเข้าไม่สำเร็จ ระบบพยายามคืนข้อมูลเดิมแล้ว กรุณาตรวจ Backup ก่อนลองซ้ำ","Import failed. The app attempted to restore your previous data. Verify your backup before retrying."));}
}catch(e){alert(tr("ไฟล์ Backup ไม่ถูกต้องหรือเกินขีดจำกัดตัวละคร","Invalid backup file or character limit exceeded."));}};
row.append(exp,imp,file);panel.append(row);return panel;}
function renderView(){const panel=$("hubView");panel.replaceChildren();if(state.tab==="ears")return;
if($("patch").value!=="legacy-3.9"&&state.tab!=="review"){
  const warning=el("div",undefined,"hubPanel");warning.append(el("h2",tr("ยังไม่มีคู่มือรับรองแยกสำหรับแพตช์นี้","No separately certified guide for this patch")),el("p",tr("ข้อมูลอ้างอิงจาก PoE Wiki ปี 2025 และชุดเก่า 3.9 สามารถเปิดตรวจขั้นตอนได้ แต่ยังไม่ใช่ผลทดสอบการเล่นครบทุกทางเลือกใน 3.29","This historical reference uses 2025 PoE Wiki and legacy 3.9 records. It is not a fully verified 3.29 missable-safe playthrough."),"hubNotice"));
  const button=el("button",tr("ดูรายการประวัติศาสตร์ (ยังไม่รับรองแพตช์)","View historical guide (not patch-certified)"));button.onclick=()=>{$("patch").value="legacy-3.9";$("patch").dispatchEvent(new Event("change",{bubbles:true}));renderView();};warning.append(button);panel.append(warning);return;
}
if(state.tab==="route"){renderRoute(panel);return;}if(state.tab==="review"){if($("patch").value!=="legacy-3.9")panel.append(el("div",tr("หมายเหตุ: ตัวเลขและข้อมูลอ้างอิงยังเป็นชุดประวัติศาสตร์ ไม่รับรองสำหรับแพตช์ที่เลือก แต่ยังสำรองข้อมูลได้ตามปกติ","Note: counts and references are historical, not certified for the selected patch. You can still back up your progress."),"hubNotice"));panel.append(reviewPanel());return;}renderCategory(panel,state.tab);}
function renderToolbar(){const t=$("hubToolbar");t.replaceChildren();
if(state.tab==="review")return;
if(state.tab!=="route"){
const pick=el("div",undefined,"hubCategoryPicker");pick.setAttribute("role","group");pick.setAttribute("aria-label",tr("เลือกประเภท Achievement","Choose achievement category"));
Object.keys(names).forEach(type=>{const button=el("button",uiNames[type]);button.type="button";button.dataset.category=type;button.setAttribute("aria-pressed",String(state.tab===type));button.onclick=()=>openTab(type);pick.append(button);});
t.append(pick);
}
if(state.tab==="ears")return;
if(state.tab==="route"){
  const strip=el("div",undefined,"hubActStrip");strip.setAttribute("role","group");strip.setAttribute("aria-label",tr("เลือก Act","Select Act"));
  for(let i=1;i<=10;i++){
    const b=el("button","Act "+i);b.type="button";b.dataset.act=String(i);b.setAttribute("aria-pressed",String(state.act===String(i)));
    b.onclick=()=>{state.act=String(i);state.routeAct=state.act;state.limit=12;strip.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));renderView();renderSummary();};
    strip.append(b);
  }
  [["Labyrinth","Labyrinth · 10"],["Vaal","Vaal Letter · 16"],["Epilogue","Epilogue · 2"]].forEach(([id,name])=>{
    const btn=el("button",name);btn.type="button";btn.dataset.act=id;btn.setAttribute("aria-pressed",String(state.act===id));
    btn.onclick=()=>{state.act=id;state.routeAct=id;state.limit=12;state.search="";renderToolbar();renderView();renderSummary();};
    strip.append(btn);
  });
  t.append(strip);
  requestAnimationFrame(()=>{const chosen=strip.querySelector('[aria-pressed="true"]');if(chosen){strip.scrollLeft=Math.max(0,chosen.offsetLeft-strip.offsetLeft-16);}});
}
const controls=el("div",undefined,"hubControls"),act=el("select"),status=el("select"),search=el("input");
act.setAttribute("aria-label",tr("เลือก Act หรือพื้นที่","Select Act or area"));
const acts=[["all",tr("ทุก Act","All Acts")],...[1,2,3,4,5,6,7,8,9,10].map(a=>[String(a),"Act "+a]),["Labyrinth","Labyrinth"],["Vaal","Vaal Side Areas"],["Epilogue","Epilogue"]];
acts.filter(([v])=>state.tab!=="route"||v!=="all").forEach(([v,label])=>{const o=el("option",label);o.value=v;act.append(o);});
if(state.tab==="route"&&state.act==="all")state.act="1";act.value=state.act;if(act.selectedIndex<0){act.value="all";state.act=act.value;}
act.onchange=()=>{state.act=act.value;if(state.tab==="route")state.routeAct=state.act;state.limit=40;renderView();renderSummary();};search.type="search";search.value=state.search;search.placeholder=tr("ค้นหาชื่อ NPC หัวข้อ หรือพื้นที่","Search NPCs, dialogue topics or areas");search.setAttribute("aria-label",tr("ค้นหา","Search"));search.oninput=()=>{state.search=search.value;state.limit=40;renderView();};
[["all",tr("ทั้งหมด (พร้อมสถานะ)","All items and statuses")],["todo",tr("ยังไม่เก็บ","Not collected")],["done",tr("เก็บแล้ว","Collected")]].forEach(([v,l])=>{const o=el("option",l);o.value=v;status.append(o);});status.value=state.status;status.setAttribute("aria-label",tr("ตัวกรองสถานะ","Filter by collection status"));status.onchange=()=>{state.status=status.value;state.limit=40;renderView();};
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
tabs.forEach(([id,label])=>{const b=el("button",label);b.type="button";b.dataset.tab=id;b.onclick=()=>openTab(id);nav.append(b);});
 const languagePanel=el("section",undefined,"hubLanguagePanel");languagePanel.id="hubLanguagePanel";
 const heading=el("div",undefined,"hubLanguageHeading"),languageTitle=el("strong"),languageSubtitle=el("small");heading.append(languageTitle,languageSubtitle);
 const languageChoices=el("div",undefined,"hubLanguageChoices");
 function choose(id,options){
   const wrap=el("label",undefined,"hubLanguageChoice"),title=el("span"),select=el("select");select.id=id;
   options.forEach(([value,label])=>{const item=el("option",label);item.value=value;select.append(item);});
   wrap.append(title,select);languageChoices.append(wrap);return {title,select};
 }
 const guidance=choose("hubDescriptionLanguage",[["th","ไทย · คำอธิบาย"],["en","English · Instructions"]]);
 const namesChoice=choose("hubGameNames",[["en","English · In-game names"],["both","ไทย + English"],["th","ไทย · คำแปลประกอบ"]]);
 const languageNote=el("p",undefined,"hubLanguageNote");languagePanel.append(heading,languageChoices,languageNote);
 header.after(languagePanel);languagePanel.after(nav);
 const updateLanguageLabels=()=>{
   const locale=LANG.get();document.documentElement.lang=locale.description;document.body.dataset.descriptionLang=locale.description;
   guidance.select.value=locale.description;namesChoice.select.value=locale.names;
   languageTitle.textContent=tr("ตั้งค่าภาษาในการเล่น","Language and in-game terminology");
   languageSubtitle.textContent=tr("แยกคำแนะนำออกจากชื่อเควสต์/ไอเท็ม","Guidance language and game names are independent");
   guidance.title.textContent=tr("คำอธิบาย / วิธีเก็บ","Guidance / instructions");
   namesChoice.title.textContent=tr("ชื่อเควสต์ พื้นที่ และไอเท็ม","Quest, area and item names");
   languageNote.textContent=tr(
    "ชื่อไทยเป็นคำแปลช่วยอ่าน ไม่ใช่ชื่อทางการในเกม · Act 1–10 มีคำแนะนำตามช่วงเควสต์ทั้งไทยและอังกฤษ แต่ยังต้องตรวจเงื่อนไขกับแพตช์จริง",
    "Thai names are editorial aids, not official game localization. All ten Acts have Thai and English quest-stage instructions, but patch-specific conditions still require in-game verification."
   );
   const title=header.querySelector("h1"),intro=header.querySelector("p");
   if(title)title.textContent=tr("บันทึก Achievement","Achievement Companion");
   if(intro)intro.textContent=tr("ทำตามช่วงเควสต์ทีละขั้น เก็บบทสนทนา Lore จุดวาร์ป และเควสต์รอง โดยดูคำเตือนก่อนข้ามเหตุการณ์ที่พลาดได้","Follow one quest stage at a time, collecting dialogue, Lore, Waypoints and side quests. Review STOP warnings before changing irreversible quest states.");
   const statusNote=wrap.querySelector(".tips");
   if(statusNote){
     const overview=el("p");
     const wiki=el("a","PoE Wiki");wiki.href="https://www.poewiki.net/wiki/Guide:All_Ears_achievement";wiki.target="_blank";wiki.rel="noopener noreferrer";
     overview.append(el("strong",tr("สถานะข้อมูล: ","Source status: ")),
       document.createTextNode(tr("มีคู่มือตามช่วงเควสต์ Act 1–10 ครบสองภาษาแล้ว แต่ยังไม่ได้ยืนยันเงื่อนไขทั้งหมดด้วยเกม 3.29 ตรวจบทสนทนาที่เสี่ยงพลาดเทียบกับ ","Acts 1–10 have bilingual quest-stage guidance, but the 3.29 conditions are not fully gameplay-certified. Compare missable dialogue against ")),
       wiki,document.createTextNode(tr(" ก่อนเดินเรื่องต่อ"," before advancing")));
     const warning=el("p");
     warning.append(el("strong",tr("จุดที่ต้องระวัง: ","Important: ")),
       document.createTextNode(tr("All Ears ต้องเก็บกับตัวละครเดียว ระวังบทสนทนาที่หายหลังฆ่าบอส ส่งเควสต์ หรือเลือกทางแยก โดยเฉพาะ Act 2 Bandits, Act 3 Clarissa และ Act 9 Sekhema Feather","All Ears must be completed on one character. Some dialogue disappears after a boss fight, quest hand-in or irreversible choice. Pay particular attention to Act 2 Bandits, Act 3 Clarissa and Act 9 Sekhema Feather.")));
     statusNote.replaceChildren(overview,warning);
   }
   [["route","ทำตามเควส","Follow quests"],["collection","รายการทั้งหมด","All checklists"],["review","สำรองและตรวจยอด","Backup and verify"]].forEach(([id,th,en])=>{const btn=nav.querySelector('[data-tab="'+id+'"]');if(btn)btn.textContent=tr(th,en);});
   const manageTitle=document.querySelector("#hubManage>summary");if(manageTitle)manageTitle.textContent=tr("จัดการตัวละครและสำรองข้อมูล All Ears แบบเดิม","Manage characters and legacy All Ears backup");
   const overviewTitle=document.querySelector("#hubOverview>h2");if(overviewTitle)overviewTitle.textContent=tr("เส้นทางสู่ 100%","Path to 100%");
   const overviewSub=document.querySelector("#hubOverview>p");if(overviewSub)overviewSub.textContent=tr("เป้าหมาย 4 Achievement · ความคืบหน้าเป็นบันทึกส่วนตัว ไม่ใช่การยืนยันจากเกม","Four tracked achievements · checklist records are manual, not game-provided proof");
   const advancedSummary=document.querySelector("#hubAdvancedDashboard>summary");if(advancedSummary)advancedSummary.textContent=tr("ข้อมูลเพิ่มเติม · ความคืบหน้าทั้งหมดและแหล่งอ้างอิง","More tools · complete progress and references");
 const notice=document.querySelector(".hubDataNotice");if(notice)notice.textContent=tr("ฐานข้อมูลอ้างอิง PoE Wiki ปี 2025 / ชุดเก่า 3.9 · ยังไม่รับรองแพตช์ 3.29","Historical data: PoE Wiki 2025 / legacy 3.9 · NOT certified for patch 3.29");
 };
 const changeLanguage=(key,value)=>{if(!LANG.set(key,value))return;updateLanguageLabels();renderToolbar();renderSummary();renderView();};
 guidance.select.onchange=()=>changeLanguage("description",guidance.select.value);
 namesChoice.select.onchange=()=>changeLanguage("names",namesChoice.select.value);
 updateLanguageLabels();
const profileRows=profile.querySelectorAll(".ctrls");
if(profileRows.length>=2){
  const manage=el("details",undefined,"hubManage");manage.id="hubManage";
  manage.append(el("summary",tr("จัดการตัวละครและสำรองข้อมูล All Ears แบบเดิม","Manage characters and legacy All Ears backup")));
  const tools=el("div",undefined,"ctrls");
  ["renameChar","deleteChar","export","import","reset"].forEach(id=>{const button=$(id);if(button)tools.append(button);});
  manage.append(tools);const fileInput=$("file");if(fileInput)manage.append(fileInput);
  profileRows[1].remove();profileRows[0].after(manage);
}
const beginner=el("section",undefined,"hubQuickStart");beginner.id="hubQuickStart";beginner.setAttribute("aria-label",tr("เริ่มทำ Achievement 100% สำหรับผู้เล่นครั้งแรก","Start a 100% achievement run for the first time"));
const advanced=el("details",undefined,"hubAdvancedDashboard");advanced.id="hubAdvancedDashboard";
advanced.open=localStorage.getItem("poe-guide-dashboard-details-v1")==="open";
const advancedSummary=el("summary",tr("ข้อมูลเพิ่มเติม · ความคืบหน้าทั้งหมดและแหล่งอ้างอิง","More tools · complete progress and references"));
advancedSummary.addEventListener("click",()=>{try{localStorage.setItem("poe-guide-dashboard-details-v1",advanced.open?"closed":"open");}catch(_){}});
advanced.append(advancedSummary);
const overview=el("section",undefined,"hubPanel");overview.id="hubOverview";overview.append(el("h2",tr("เส้นทางสู่ 100%","Path to 100%")),el("p",tr("เป้าหมาย 4 Achievement · ความคืบหน้าเป็นบันทึกส่วนตัว ไม่ใช่การยืนยันจากเกม","Four tracked achievements · checklist records are manual, not game-provided proof"),"hubSubtle"));const stats=el("div",undefined,"hubStats");stats.id="hubStats";overview.append(stats);advanced.append(overview);
profile.after(beginner);beginner.after(advanced);
const controls=el("section",undefined);controls.id="hubToolbar";advanced.after(controls);const view=el("section");view.id="hubView";controls.after(view);
const status=el("div",tr("ฐานข้อมูลอ้างอิง PoE Wiki ปี 2025 / ชุดเก่า 3.9 · ยังไม่รับรองแพตช์ 3.29","Historical data: PoE Wiki 2025 / legacy 3.9 · NOT certified for patch 3.29"),"hubNotice hubDataNotice");nav.after(status);
$("patch").addEventListener("change",()=>{renderView();});
$("character").addEventListener("change",()=>{setTimeout(refresh,0);});const obs=new MutationObserver(()=>{setTimeout(refresh,0);});obs.observe($("character"),{childList:true});window.addEventListener("storage",e=>{if([MAIN,LORE,EXTRA,HUB].includes(e.key))refresh();});
const initial=["route","ears","lore","waypoints","sidequests","review","collection"].includes(location.hash.slice(1))?location.hash.slice(1):"route";openTab(initial);
}
boot();
})();
