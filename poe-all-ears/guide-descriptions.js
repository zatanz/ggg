/* Source-grounded Thai gameplay descriptions. Routes and Act 1 guide are historical 2025 and unverified for 3.30. */
(function(){
"use strict";
const legacy={"21":["กำจัด Oozeback Bloom ที่ The Mud Flats แล้ว","อย่าเข้า The Fetid Pool ก่อนคุย"],"22":["เก็บ Strange Glyph อย่างน้อยหนึ่งชิ้นแล้ว","อย่าใส่ Glyph ลง Glyph Wall ก่อนคุย"],"23":["พบ Glyph Wall แล้ว","อย่าใส่ Glyph ลงกำแพงก่อนคุย"],"28":["พบ Piety แล้ว","อย่าฆ่า Brutus ก่อนฟังหัวข้อนี้"],"29":["สำรวจ Shavronne's Journal แล้ว","อย่าฆ่า Brutus ก่อนคุย"],"31":["พบ Piety ขวางทางแล้ว","อย่าเข้า The Ship Graveyard ก่อนคุย"],"37":["คุยกับ Fairgraves ครั้งแรกแล้ว","อย่าเก็บ Allflame ก่อนคุย"],"38":["คุย Bestel เรื่อง Captain Fairgraves แล้ว","อย่าเก็บ Allflame ก่อนคุย"],"48":["รับเควสต์ Deal with the Bandits แล้ว","อย่าฆ่า Bandits ก่อนเก็บบทสนทนา The Darkness"],"75":["เข้า The Chamber of Sins แล้ว","ให้คุยก่อนช่วย Helena"],"89":["ฆ่า Kraityn แล้ว","อย่าเพิ่งฆ่า Alira หรือ Oak ก่อนคุย Eramir"],"91":["ได้ Baleful Gem และ Maligaro's Spike แล้ว","อย่าใช้ไอเทมกับ Lorrata ก่อนคุย"],"92":["พบ Lorrata ที่ The Wetlands แล้ว","อย่าใช้ไอเทมกับรากไม้ที่ขวางทางก่อนคุย"],"101":["ฆ่า Alira แล้ว","อย่าฆ่า Oak ก่อนคุย Eramir"],"103":["ฆ่า Oak แล้ว","ตรวจบทสนทนา Eramir ที่ขึ้นตามลำดับ Bandits"],"140":["พบทางถูกขวางใน The Sewers แล้ว","อย่าเข้า The Marketplace ก่อนคุย"],"142":[null,"ต้องยังไม่มี Decanter Spiritus หรือ Chitus' Plum ใน Inventory ตามตารางเก่า"],"146":["คุยหัวข้อนี้กับ Fairgraves แล้ว","จากนั้นจึงส่ง Decanter Spiritus และ Chitus' Plum"],"148":[null,"ต้องยังไม่มี Thaumetic Sulphite หรือ Ribbon Spool ใน Inventory ตามตารางเก่า"],"149":["กลับเมืองหลังคุยกับ Dialla แล้ว","อย่าคุยกับ Dialla ต่อก่อนเก็บหัวข้อนี้"],"153":["ได้ Thaumetic Sulphite แล้ว","อย่าถือ Ribbon Spool ตอนคุยหัวข้อนี้"],"154":["ได้ Ribbon Spool แล้ว",null],"158":["เข้า The Ebony Barracks แล้ว","อย่าฆ่า General Gravicius ก่อนคุย"],"161":["ฆ่า General Gravicius แล้ว","อย่าฆ่า Piety ก่อนคุย"],"231":["มอบ The Eye of Desire ให้ Dialla แล้ว","อย่าเข้า Kaom's Dream ก่อนคุย"],"233":["มอบ The Eye of Fury ให้ Dialla แล้ว","อย่าเข้า The Belly of the Beast ก่อนคุย"],"241":["สู้ Piety แล้ว","อย่าเข้า The Harvest ก่อนคุย"],"247":["พบ Piety ใน The Harvest แล้ว","อย่าส่งอวัยวะทั้งหมดให้ Piety ก่อนคุย"],"248":["ส่งอวัยวะทั้งหมดให้ Piety แล้ว","อย่าฆ่า Malachai ก่อนคุย"],"275":["ฆ่า Justicar Casticus แล้ว","อย่าเข้า Oriath Square ก่อนคุย"],"277":["ฆ่า Innocence แล้ว","อย่าออกจาก The Chamber of Innocence ก่อนคุย"],"283":["คุยใน The Chamber of Innocence แล้ว","อย่าเข้า The Torched Courts ก่อนคุย"],"295":["ได้ Sign of Purity แล้ว","อย่าออกจาก The Ossuary ก่อนคุย"],"318":["เข้าพื้นที่แล้ว","อย่าใช้ Eye of Conquest ก่อนคุย Tarkleigh และ Sin"],"321":["ได้ Eye of Conquest แล้ว","อย่าใช้ Eye of Conquest เปิดประตูก่อนคุย"],"322":["ใช้ Eye of Conquest แล้ว","อย่าเข้า The Karui Fortress ก่อนคุย"],"326":["ฆ่า Shavronne แล้ว","อย่าออกจาก The Prison ก่อนคุย"],"332":["คุยกับ Nessa แล้ว","อย่าเข้า The Western Forest ก่อนคุย Bestel"],"336":["ได้ The Black Flag แล้ว","อย่าเข้า The Beacon ก่อนคุย"],"338":["ถึง The Brine King's Reef แล้ว","อย่าฆ่า Tsoagoth ก่อนคุย"],"339":["ถึง The Brine King's Reef แล้ว","อย่าฆ่า Tsoagoth ก่อนคุย"],"361":["คุย Sin หัวข้อ Ralakesh แล้ว",null],"365":["เห็นเส้นทางถูกปิดแล้ว","อย่าเข้า The Fellshrine Ruins ก่อนคุย"],"369":["ฆ่า Maligaro แล้ว","อย่าออกจาก Maligaro's Sanctum ก่อนคุย"],"370":["คุย Sin หัวข้อ Arakaali แล้ว",null],"376":["ฆ่า Greust แล้ว","อย่าเข้า The Northern Forest ก่อนคุย"],"382":["เก็บ Fireflies ครบแล้ว","อย่าเข้า The Causeway ก่อนคุย"],"384":["ฆ่า Arakaali แล้ว","อย่าออกจาก Temple of Decay ก่อนคุย"],"403":["ฆ่า Doedre แล้ว","อย่าออกจาก Doedre's Cesspool ก่อนคุย"],"409":["ทำ The Wings of Vastiri สำเร็จแล้ว","อย่าฆ่า Yugul ก่อนคุย"],"410":["ทำ The Wings of Vastiri สำเร็จแล้ว","อย่าฆ่า Yugul ก่อนคุย"],"411":["ฆ่า Tolman แล้ว","อย่าออกจาก The Quay ก่อนคุย"],"414":["มี Sun Orb และ Moon Orb อยู่ใน Inventory แล้ว",null],"436":["ได้ The Storm Blade แล้ว","อย่าเข้า The Foothills ก่อนคุย"],"437":["พบทางถูกปิดแล้ว","อย่าเข้า The Foothills ก่อนคุย"],"439":["ฆ่า Garukhan แล้ว","อย่าคุยกับ Irasha หรือ Tasuni ก่อนคุย Sin"],"440":["ฆ่า Garukhan แล้ว","อย่าคุยกับ Irasha หรือ Tasuni ก่อนคุย Petarus and Vanja"],"441":["มอบ Sekhema Feather ให้ Irasha แล้ว",null],"446":["ได้ Trarthan Powder แล้ว","อย่าเข้า The Belly of the Beast ก่อนคุย"],"447":["ได้ Trarthan Powder แล้ว","อย่าเข้า The Belly of the Beast ก่อนคุย"],"448":["ฆ่า The Depraved Trinity แล้ว","อย่าไป Act 10 ก่อนคุย Weylam Roth"],"449":["ฆ่า The Depraved Trinity แล้ว","อย่าไป Act 10 ก่อนคุย Weylam Roth"]};
const stripNpc=name=>String(name||"").replace(/\s*\*\s*$/,"").trim();
const stripTopic=name=>String(name||"").replace(/\s*-\s*QC\b/g,"").replace(/\s*-\s*\(!\)/g,"").replace(/\s*-\s*Talk to Yeena First\b/gi,"").trim();
const routeAct3Thai={"118":["หลังได้ Tolman's Bracelet","อย่าเพิ่งส่งเควสต์ให้ Clarissa"],"142":["คุยกับ Fairgraves ครั้งแรกใน The Docks","ต้องไม่มี Decanter Spiritus หรือ Chitus' Plum ในกระเป๋า"],"148":["คุย Lady Dialla เป็นครั้งแรก","ต้องไม่มี Thaumetic Sulphite หรือ Ribbon Spool ในกระเป๋า"],"153":["หลังแสดง Thaumetic Sulphite ให้ Lady Dialla","ต้องไม่มี Ribbon Spool อยู่ในกระเป๋า"],"158":["หลังเข้า The Ebony Barracks","อย่าฆ่า General Gravicius ก่อนเก็บบทสนทนา"],"161":["หลังจบ Sever the Right Hand และรับรางวัลจาก Maramoa","อย่าฆ่า Piety ก่อนเก็บบทสนทนา"],"164":["หลังฆ่า General Gravicius","อย่าฆ่า Piety ก่อนเก็บบทสนทนา"]};
const source="https://www.poewiki.net/wiki/Guide:All_Ears_achievement";
const loreSource="https://www.poewiki.net/wiki/Guide:No_Stone_Unturned_achievement";
const routeByAct={};
for(let a=1;a<=10;a++){const route=window["ALL_EARS_ROUTE_ACT"+a];routeByAct[a]=new Map((route&&route.records||[]).map(r=>[r.id,r]));}
const draft=window.ALL_EARS_GUIDE?.entries||{};
function forEars(item,context){
const r=routeByAct[item.act]?.get(item.id)||{},extra=legacy[item.id]||[],g=item.act===1?draft[String(item.id)]:null;
const topic=stripTopic(item.dialog),npc=stripNpc(item.npc);
let action;
if(/Introduction/i.test(topic)){action="ไปหา "+npc+" แล้วฟังหัวข้อ Introduction ให้จบ ก่อนทำเครื่องหมายว่าเก็บแล้ว";}else{action="คุยกับ "+npc+" เลือกหัวข้อ “"+topic+"” แล้วฟังให้จบ จึงค่อยทำเครื่องหมายว่าเก็บแล้ว";}
if(g?.steps)action=g.steps;
let displayLabel="",displayLabelEN="",actionEN="",cautionEN="";
const bandits=["Alira","Oak","Kraityn"],first=bandits.includes(context?.first)?context.first:"",second=bandits.includes(context?.second)&&context.second!==first?context.second:"";
if(item.act===2&&r.wikiRow===101){
 displayLabel="Eramir — หัวข้อ Bandit ที่ฆ่าคนแรก"+(first?" ("+first+")":"");
 displayLabelEN="Eramir — First defeated Bandit"+(first?" ("+first+")":"");
 actionEN=first?"After killing "+first+" as the FIRST Bandit, return to Eramir and hear the “"+first+"” topic BEFORE fighting the second Bandit.":"After killing the first Bandit, return to Eramir and listen to the topic named after the Bandit you defeated (Alira, Oak or Kraityn) BEFORE fighting the second.";
 cautionEN="Before killing the second Bandit, hear Eramir's topic for the FIRST Bandit you killed.";
 action=first?"หลังฆ่า "+first+" เป็น Bandit คนแรก ให้กลับมาคุยกับ Eramir แล้วเลือกหัวข้อ “"+first+"” ก่อนฆ่าคนที่สอง":"หลังฆ่า Bandit คนแรก ให้กลับมาคุยกับ Eramir แล้วเลือกหัวข้อชื่อ Bandit ตัวที่ฆ่า (Alira / Oak / Kraityn) ก่อนฆ่าคนถัดไป";
}
if(item.act===2&&r.wikiRow===102){
 const survivor=first&&second?bandits.find(n=>n!==first&&n!==second):"";
 displayLabel="Eramir — หัวข้อ Bandit ที่ยังมีชีวิต"+(survivor?" ("+survivor+")":"");
 displayLabelEN="Eramir — Surviving Bandit"+(survivor?" ("+survivor+")":"");
 actionEN=survivor?"After killing your SECOND Bandit, return to Eramir and hear the “"+survivor+"” topic while "+survivor+" is still alive, BEFORE fighting the third.":"After killing the second Bandit, return to Eramir and hear the topic named after the ONE Bandit still alive (Alira, Oak or Kraityn) BEFORE killing the third.";
 cautionEN="Before killing the third Bandit, return to Eramir for the topic naming the Bandit who is still alive.";
 action=survivor?"หลังฆ่า Bandit ตัวที่สอง ให้คุยกับ Eramir หัวข้อ “"+survivor+"” เพราะ "+survivor+" ยังมีชีวิตอยู่ ก่อนฆ่าคนสุดท้าย":"หลังฆ่า Bandit ตัวที่สอง ให้คุย Eramir หัวข้อชื่อ Bandit ที่ยังมีชีวิตอยู่ (Alira / Oak / Kraityn) ก่อนฆ่าคนสุดท้าย";
}
if(item.act===2&&r.wikiRow===103){
 displayLabel="Eramir — Bandit Lords (หลังฆ่าทั้งสาม)";
 displayLabelEN="Eramir — Bandit Lords (after all three)";
 actionEN="After defeating Alira, Oak and Kraityn, return to Eramir and hear the “Bandit Lords” topic.";
 action="หลังฆ่า Alira, Oak และ Kraityn ครบทั้งสาม ให้กลับไปคุย Eramir หัวข้อ “Bandit Lords”";
}

const translate=routeAct3Thai[item.id]||[];
const unlock=(r.trigger&&/^[A-Za-z]/.test(r.trigger)?translate[0]||extra[0]||"":r.trigger)||translate[0]||extra[0]||"";
const caution=(r.before&&/^[A-Za-z]/.test(r.before)?translate[1]||extra[1]||"":r.before)||g?.warning||translate[1]||extra[1]||"";
let location=r.area||"";
if(!location&&item.act===1&&item.id>=2&&item.id<=15)location="Lioneye's Watch (อ้างอิงคำแนะนำ Act 1 เดิม)";
const tags=[];
if(item.dialog.includes("QC"))tags.push("QC เป็นสัญลักษณ์ในข้อมูลต้นทาง บอกว่าหัวข้อนี้อาจเปิดหลังจบเควสต์");
if(item.dialog.includes("(!)"))tags.push("ต้นทางกำกับเครื่องหมาย (!) ไว้กับบทสนทนา ต้องตรวจว่า NPC มีหัวข้อนี้จริง");
if(item.npc.includes("*"))tags.push("NPC คนนี้อาจอยู่ในพื้นที่ระหว่างเควสต์ ไม่ได้ยืนอยู่ในเมืองตลอด");
if(!r.before&&!g?.warning&&!extra[1]&&item.note)tags.push("มีคำเตือนจากตาราง 3.9 ที่ยังไม่ได้เกลาและตรวจแยก ให้เปิด Wiki ก่อนเปลี่ยนสถานะเควสต์");
return {action,actionEN,displayLabel,displayLabelEN,cautionEN,location,unlock,caution,tip:tags.join(" · "),source:r.source||source+"#Act_"+item.act,sourceLabel:g||r.trigger||r.before?"PoE Wiki ปี 2025 + ร่างคำแนะนำ":"ชื่อหัวข้อจาก Wiki 2025 / เช็กลิสต์เก่า",status:g?.review_status||r.review||"historical-wiki-2025",patchCertified:false,detailsKnown:!!(g?.steps||r.trigger||r.before||extra[0]||extra[1])};
}
function forLore(item){
let action="ไปที่ "+item.area+" หา “"+item.name+"” แล้วกดอ่านหรือโต้ตอบกับวัตถุในเกม ก่อนทำเครื่องหมายว่าเก็บแล้ว";
let tip="ตรวจชื่อ Lore และยอดที่เกมนับหลังโต้ตอบ อย่าติ๊กจากการเดินผ่านหรือเห็นชื่อวัตถุเท่านั้น";
let caution="";
if(item.id<=15){action="ที่ Lioneye's Watch คลิก Letters of Exile ตามเสาหรือป้าย จนพบจดหมายของ "+item.name.replace("Letters of Exile - ","");tip="ชื่อจดหมายอาจออกซ้ำ: ติ๊กเฉพาะชิ้นที่เห็นและยังไม่เคยเก็บ อย่าติ๊กเพิ่มตามจำนวนครั้งที่คลิก";caution="ข้อความสุ่มและอาจต้องคลิกซ้ำหลายครั้ง";}
else if(item.area==="The Library"){action="เข้า The Library แล้วสำรวจชุดหนังสือ “"+item.name+"”";tip="หนึ่ง Instance จะสุ่มหนังสือแต่ละชุด; สร้าง Instance ใหม่เพื่อหาหนังสือเล่มที่ยังไม่ได้เก็บ";caution="เล่มเดิมอาจออกซ้ำ อย่าเพิ่มยอดเมื่อพบซ้ำ";}
else if(item.act==="Labyrinth"){action="เข้า Labyrinth แล้วโต้ตอบกับ “"+item.name+"” ในช่วงพื้นที่/Trial ที่ระบุ";tip="เส้นทาง Labyrinth อาจเปลี่ยนประจำวัน ต้องตรวจตำแหน่งใน Instance จริง";caution="ชื่อพื้นที่เก่าบางจุดระบุเพียง Labyrinth Area - Changes Daily";}
else if(item.act==="Vaal"){action="พบ Vaal Side Area ที่มีบันทึกนี้ แล้วโต้ตอบกับ “"+item.name+"”";tip="ใช้ช่องค้นหาชื่อ Vaal Side Area เพื่อเทียบกับประเภท Vaal Letter / Research Journal; ชื่อบันทึกและพื้นที่มาจากคู่มือปี 2025";caution="Side Area ที่เกิดพบอาจสุ่ม; การฟาร์มผ่าน Map Device แบบเก่าใช้กับ 3.30 ไม่ได้";}
return {action,location:item.area,unlock:"",caution,tip,source:loreSource,sourceLabel:"PoE Wiki 2025 / ชุดรายการประวัติศาสตร์ 3.9",status:"historical-patch-unverified",patchCertified:false,detailsKnown:true};
}
function forWaypoint(item){
return {action:"เดินทางไป "+item.name+" แล้วเปิดแผนที่เพื่อตรวจว่าจุดวาร์ปของพื้นที่นี้ใช้งานได้ จึงทำเครื่องหมายว่าเก็บแล้ว",location:item.name,unlock:"จุดวาร์ปบางแห่งเปิดให้อัตโนมัติในเกมรุ่นใหม่ ไม่จำเป็นต้องกดคลิกทุกจุด ให้ดูสถานะจริงในเกม",caution:"ฐานข้อมูลเดิมมี 91 จุด แต่จำนวนที่เกมรุ่นใหม่ต้องใช้อาจต่างออกไป ยังไม่รับรองกับแพตช์ 3.30",tip:"ต้องตรวจด้วยตัวละครที่ต้องการเก็บ Locomancer การเดินถึงพื้นที่แต่ยังใช้จุดวาร์ปไม่ได้ ไม่ถือว่าตรวจผ่าน",source:"https://www.poewiki.net/wiki/Waypoint",sourceLabel:"ชื่อพื้นที่จากเช็กลิสต์ประวัติศาสตร์ 3.9",status:"historical-patch-unverified",patchCertified:false,detailsKnown:false};
}
function forQuest(item){
return {action:"เปิดบันทึกเควสต์ (Quest Log) แล้วทำ “"+item.name+"” ให้จบ รวมถึงกลับไปส่งเควสต์หรือรับรางวัลถ้ามี ก่อนทำเครื่องหมายว่าเก็บแล้ว",location:"Act "+item.act,unlock:"ให้ดูช่วงเควสต์ที่เชื่อมกับรายการนี้ในคู่มือ Act เพื่อทราบลำดับพื้นที่และ NPC ตามข้อมูลต้นทาง",caution:"รายละเอียดยังไม่ยืนยันกับแพตช์ 3.30 อย่าติ๊กว่าเสร็จเพียงเพราะรับเควสต์หรือสู้บอสแล้ว",tip:"ตรวจสถานะเควสต์และยอด No Loose Ends จากในเกมจริง เพราะเครื่องหมายบนเว็บเป็นการบันทึกด้วยตนเอง",source:"https://www.poewiki.net/wiki/Quest",sourceLabel:"ชื่อเควสต์จากเช็กลิสต์ประวัติศาสตร์ 3.9",status:"historical-patch-unverified",patchCertified:false,detailsKnown:false};
}
window.POE_ITEM_DESCRIPTIONS={schema:1,sourcePatch:"2025-wiki-and-3.9-legacy",certifiedFor330:false,get:function(type,item,context){if(!item)return null;return type==="ears"?forEars(item,context):type==="lore"?forLore(item):type==="waypoints"?forWaypoint(item):type==="sidequests"?forQuest(item):null}};
})();
