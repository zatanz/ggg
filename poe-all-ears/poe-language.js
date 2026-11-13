/* Project-specific display preferences; does not alter achievement data, saved characters or backups.
   Thai glossary entries are editorial translations, not verified in-game localized strings. */
(function(){
"use strict";
const KEY="poe-companion-language-v1";
const glossary={
  "Return to Oriath": "กลับสู่โอริอาธ",
  "The Key to Freedom": "กุญแจสู่อิสรภาพ",
  "In Service to Science": "ภารกิจเพื่อวิทยาการ",
  "Death to Purity": "จุดจบแห่งความบริสุทธิ์",
  "The King's Feast": "งานเลี้ยงของราชา",
  "Kitava's Torments": "ความทรมานของคิทาวา",
  "The Ravenous God": "เทพเจ้าผู้หิวโหย",
  "The Eternal Nightmare": "ฝันร้ายนิรันดร์",
  "An Indomitable Spirit": "จิตวิญญาณที่ไม่ยอมแพ้",
  "The King of Desire": "ราชาแห่งความปรารถนา",
  "The King of Fury": "ราชาแห่งความพิโรธ",
  "The Slave Pens": "คอกทาส",
  "Overseer's Tower": "หอคอยผู้คุม",
  "The Control Blocks": "เขตควบคุม",
  "Oriath Square": "จัตุรัสโอริอาธ",
  "The Templar Courts": "ศาลเทมพลาร์",
  "The Chamber of Innocence": "ห้องโถงแห่งอินโนเซนซ์",
  "The Ruined Square": "จัตุรัสที่พังทลาย",
  "The Reliquary": "คลังวัตถุโบราณ",
  "The Ossuary": "สุสานกระดูก",
  "The Cathedral Rooftop": "ดาดฟ้าวิหาร",
  "The Ascent": "เส้นทางขึ้นเขา",
  "The Mines": "เหมือง",
  "The Mines Level 2": "เหมืองชั้นที่ 2",
  "The Aqueduct": "ทางส่งน้ำ",
  "Highgate": "ไฮเกต",
  "The Dried Lake": "ทะเลสาบแห้ง",
  "The Crystal Veins": "สายแร่คริสตัล",
  "The Grand Arena": "สนามประลองใหญ่",
  "Kaom's Dream": "ความฝันของคาออม",
  "Kaom's Stronghold": "ป้อมปราการคาออม",
  "The Belly of the Beast": "ท้องอสูร",
  "The Harvest": "เขตเก็บเกี่ยว",
  "Miasmeter": "เครื่องวัดไมแอสมา",
  "Eyes of Zeal": "ดวงตาแห่งศรัทธา",
  "Sign of Purity": "สัญลักษณ์แห่งความบริสุทธิ์",
  "The Sign of Purity": "สัญลักษณ์แห่งความบริสุทธิ์",
  "Hinekora's Hair": "เส้นผมแห่งฮิเนโครา",
  "Tukohama's Tooth": "เขี้ยวแห่งทูโคฮามา",
  "Valako's Jaw": "ขากรรไกรแห่งวาลาโค",
  "Kitava's Hunger I": "ความหิวโหยของคิทาวา I",
  "Kitava's Hunger II": "ความหิวโหยของคิทาวา II",
  "Kitava's Hunger III": "ความหิวโหยของคิทาวา III",
  "The Slave Pens Waypoint": "จุดวาร์ปคอกทาส",
  "The Ossuary Waypoint": "จุดวาร์ปสุสานกระดูก",
  "Lioneye's Watch": "ที่พักไลออนอาย",
  "The Twilight Strand": "ชายฝั่งทไวไลต์",
  "The Coast": "ชายฝั่ง",
  "The Tidal Island": "เกาะน้ำขึ้น",
  "The Mud Flats": "ที่ราบโคลน",
  "The Karui Fortress": "ป้อมคารุย",
  "The Karui Fortress entrance": "ทางเข้าป้อมคารุย",
  "The Ridge": "สันเขา",
  "The Prison": "เรือนจำ",
  "Shavronne's Tower": "หอคอยชาฟรอน",
  "Prisoner's Gate": "ประตูนักโทษ",
  "The Western Forest": "ป่าตะวันตก",
  "The Wetlands": "พื้นที่ชุ่มน้ำ",
  "The Riverways": "เส้นทางริมแม่น้ำ",
  "The Valley of the Fire Drinker": "หุบเขาผู้ดื่มไฟ",
  "The Southern Forest": "ป่าทางใต้",
  "The Cavern of Anger": "ถ้ำแห่งโทสะ",
  "The Beacon": "หอประภาคาร",
  "The Brine King's Reef": "แนวปะการังราชาแห่งทะเลเค็ม",
  "The Ship Graveyard": "สุสานเรือ",
  "Fallen from Grace": "ผู้พลัดจากความศักดิ์สิทธิ์",
  "Bestel's Epic": "มหากาพย์ของเบสเทล",
  "The Father of War": "บิดาแห่งสงคราม",
  "Essence of Umbra": "แก่นแท้แห่งอัมบรา",
  "The Cloven One": "ผู้มีกีบแยก",
  "The Puppet Mistress": "นายหญิงเชิดหุ่น",
  "The Brine King": "ราชาแห่งทะเลเค็ม",
  "The Black Flag": "ธงดำ",
  "Eye of Conquest": "ดวงตาแห่งชัยชนะ",
  "Message in a Bottle": "สาส์นในขวด",
  "Leatherbound Logbook": "สมุดบันทึกปกหนัง",
  "Shavronne's Manifesto": "คำประกาศของชาฟรอน",
  "Letter Fragment": "เศษจดหมาย",
  "Templar Report": "รายงานเทมพลาร์",
  "Shrine to the Brine King": "ศาลเจ้าราชาแห่งทะเลเค็ม",
  "The Bridge Encampment": "ค่ายสะพาน",
  "The Broken Bridge": "สะพานหัก",
  "The Crossroads": "ทางแยก",
  "The Fellshrine Ruins": "ซากปรักแห่งเฟลไชร์น",
  "The Crypt": "สุสานใต้ดิน",
  "The Chamber of Sins Level 1": "ห้องโถงแห่งบาป ชั้น 1",
  "The Chamber of Sins Level 2": "ห้องโถงแห่งบาป ชั้น 2",
  "Maligaro's Sanctum": "สถานศักดิ์สิทธิ์ของมาลิกาโร",
  "The Den": "ถ้ำเดน",
  "The Ashen Fields": "ทุ่งเถ้าถ่าน",
  "The Northern Forest": "ป่าทางเหนือ",
  "The Dread Thicket": "พงไพรแห่งความหวาดกลัว",
  "The Causeway": "ทางยกระดับ",
  "The Vaal City": "นครวาล",
  "The Temple of Decay": "วิหารแห่งความเสื่อมสลาย",
  "The Temple of Decay Level 1": "วิหารแห่งความเสื่อมสลาย ชั้น 1",
  "The Temple of Decay Level 2": "วิหารแห่งความเสื่อมสลาย ชั้น 2",
  "The Silver Locket": "จี้ล็อกเก็ตสีเงิน",
  "Silver Locket": "จี้ล็อกเก็ตสีเงิน",
  "Essence of the Artist": "แก่นแท้ของศิลปิน",
  "Web of Secrets": "ใยแห่งความลับ",
  "The Master of a Million Faces": "เจ้าแห่งใบหน้านับล้าน",
  "In Memory of Greust": "รำลึกถึงกรูสต์",
  "Queen of Despair": "ราชินีแห่งความสิ้นหวัง",
  "Kishara's Star": "ดาราของคิชารา",
  "Lighting the Way": "แสงส่องทาง",
  "The Mother of Spiders": "มารดาแห่งแมงมุม",
  "Maligaro's Map": "แผนที่ของมาลิกาโร",
  "Black Venom": "พิษดำ",
  "Greust's Necklace": "สร้อยคอของกรูสต์",
  "Firefly": "หิ่งห้อย",
  "Maligaro's Manifesto": "คำประกาศของมาลิกาโร",
  "Ode to Ralakesh": "บทสดุดีราลาเคช",
  "Love Letter": "จดหมายรัก",
  "Shrine to Arakaali": "ศาลเจ้าอาราคาอาลี"
};
const highRisk={
  "21": "Before entering The Fetid Pool, collect the relevant Oozeback Bloom dialogue.",
  "22": "After collecting a Strange Glyph, talk before inserting any glyph in the Glyph Wall.",
  "23": "Check the Glyph Wall dialogue before inserting the Strange Glyphs.",
  "28": "Listen to this topic before defeating Brutus.",
  "29": "Read Shavronne's Journal and speak before defeating Brutus.",
  "31": "Listen before leaving for The Ship Graveyard.",
  "37": "Talk to Fairgraves before collecting the Allflame.",
  "38": "Talk before collecting the Allflame.",
  "220": "After accepting An Indomitable Spirit, hear Kira: Deshret before freeing Deshret.",
  "223": "Speak with Dialla in The Crystal Veins before finishing the Kaom and Daresso boss stories.",
  "224": "Speak with Dialla in The Crystal Veins before finishing the Kaom and Daresso boss stories.",
  "241": "After defeating Piety, hear The Godless Three before entering The Harvest.",
  "245": "Speak with Tasuni about Malachai's Apprentices before killing Malachai.",
  "247": "Talk to Piety: Malachai before handing in every organ.",
  "248": "After handing in all organs, talk to Dialla: Malachai before killing Malachai.",
  "254": "Check Utula before defeating High Templar Avarius, since he can become unavailable.",
  "275": "After defeating Justicar Casticus, talk to Utula BEFORE killing High Templar Avarius.",
  "277": "After defeating Innocence, speak with Sin inside the Chamber of Innocence before leaving.",
  "295": "After picking up the Sign of Purity, speak to Sin inside The Ossuary before leaving.",
  "318": "After seeing the Karui Fortress entrance and talking to Tarkleigh, hear Sin: The Father of War.",
  "320": "Hear Bestel: Tukohama after receiving The Father of War and BEFORE killing Tukohama.",
  "321": "Talk to Tarkleigh: The Eye of Conquest after obtaining the Eye, BEFORE using it.",
  "322": "Talk to Tarkleigh: The Karui Fortress AFTER using the Eye of Conquest, BEFORE entering the fortress. Check hidden quest dialogue options.",
  "324": "After defeating Tukohama, talk to Bestel: Shavronne of Umbra BEFORE defeating Shavronne.",
  "326": "After defeating Shavronne, talk to Sin before leaving The Prison (historic source warning).",
  "328": "After starting The Cloven One with Bestel, speak to Sin BEFORE entering The Valley of the Fire Drinker.",
  "330": "After Essence of Umbra, hear Sin: The Puppet Mistress BEFORE killing Ryslatha.",
  "333": "After meeting Nessa in Prisoner's Gate, hear Tarkleigh: The Ship Graveyard BEFORE entering The Cavern of Anger.",
  "336": "After collecting The Black Flag, talk to Lilly Roth BEFORE burning the flag at The Beacon.",
  "338": "After arriving at The Brine King's Reef, talk to Weylam Roth BEFORE killing Tsoagoth.",
  "339": "After arriving at The Brine King's Reef, hear Weylam Roth: The Brine King BEFORE killing Tsoagoth.",
  "365": "After finding the blocked route to the old Forest Encampment, speak to Helena: The Den BEFORE entering The Den. Legacy notes disagree on the area boundary.",
  "366": "After obtaining Maligaro's Map from The Crypt, speak to Helena BEFORE using the map device.",
  "369": "AFTER killing Maligaro, the Artist, speak to Sin: Maligaro BEFORE leaving Maligaro's Sanctum (historical caution).",
  "370": "After giving Black Venom to Silk and speaking to Sin about Arakaali, check Sin: The Spinner of Shadows.",
  "376": "After completing The Master of a Million Faces, speak to Sin about The Mother of Despair only when Queen of Despair becomes available.",
  "377": "After accepting Kishara's Star from Weylam, listen to Weylam: Kishara BEFORE continuing to The Causeway.",
  "378": "After starting Queen of Despair, hear Eramir: Gruthkul BEFORE killing Gruthkul.",
  "380": "AFTER finishing The Master of a Million Faces, return for Helena: Greust.",
  "381": "AFTER killing Gruthkul, return to Eramir for the post-boss Gruthkul topic (separate from #378).",
  "382": "AFTER collecting all seven Fireflies, hear Yeena: Arakaali's Temple in town BEFORE meeting Yeena in The Vaal City.",
  "383": "After first entering The Vaal City, revisit Eramir for The Vaal City.",
  "384": "AFTER killing Arakaali, speak to Yeena: Arakaali BEFORE leaving Temple of Decay Level 2.",
  "385": "After killing Arakaali, return to Eramir: Silk.",
  "386": "After killing Arakaali, return to Yeena: Silk."
};
const valid={description:["th","en"],names:["en","both","th"]};
let prefs={description:"th",names:"en"};
try{const stored=JSON.parse(localStorage.getItem(KEY)||"{}");for(const k of Object.keys(valid)){if(valid[k].includes(stored[k]))prefs[k]=stored[k];}}catch(_){}
function set(k,v){if(!valid[k]?.includes(v))return false;prefs[k]=v;try{localStorage.setItem(KEY,JSON.stringify(prefs));}catch(_){}return true;}
function tr(th,en){return prefs.description==="en"?en:th;}
function term(value){
 if(typeof value!=="string"||!value)return value;
 const t=value.trim();
 if(!t)return value;
 const translation=glossary[t]||(t.includes(" / ")?t.split(" / ").map(i=>glossary[i.trim()]||i.trim()).join(" / "):null);
 if(!translation||prefs.names==="en")return t;
 if(prefs.names==="both")return translation+" · "+t;
 return translation;
}
function bilingualIndex(value){
 const t=String(value||"");
 const translated=glossary[t]||(t.includes(" / ")?t.split(" / ").map(i=>glossary[i.trim()]||i.trim()).join(" / "):null);
 return (t+" "+(translated||"")).toLowerCase();
}
function entry(type,item,label){
 if(type==="ears"){const npc=item.npc==="Lily Roth"?"Lilly Roth":String(item.npc||"").replace(/ \*$/,"");return npc+" — "+term(item.dialog);}
 return term(label||item.name);
}
function englishHelp(type,item,guide){
 const act=item.act,base=String(item.name||item.dialog||""),where=String(item.area||"Act "+act);
 let action="",location="",unlock="",caution="",tip="";
 if(type==="ears"){
   action="Listen to "+item.npc+" discussing \""+item.dialog+"\" in Act "+act+" before marking this dialogue as heard.";
   location="Act "+act+" · "+item.npc;
   unlock="The exact quest-state trigger varies. Check the historical source and current NPC options.";
   caution=highRisk[String(item.id)]||(guide?.caution?"Quest-state-sensitive dialogue: read the original Thai source note below before advancing.":"");
 }else if(type==="lore"){
   action="Read \""+base+"\" in "+where+"; mark it only after the in-game interaction.";
   location=where;unlock="Find and interact with the exact lore object.";
   caution=item.random?"This lore encounter can vary by instance. Check the in-game count.":"";
 }else if(type==="waypoints"){
   action="Activate the Waypoint in "+base+" and check that it is available for travel.";
   location="Act "+act+" · "+base;unlock="Reach this area and activate the Waypoint.";
 }else{
   action="Finish the optional quest \""+base+"\" in Act "+act+" before marking it completed.";
   location="Act "+act;unlock="Confirm completion in the in-game quest journal.";
 }
 if(type==="ears"&&act===7){
   const special={
    361:"After Eramir: Ralakesh and Sin: Ralakesh dialogues are available.",
    365:"After seeing the blocked route to the old Forest Encampment, BEFORE entering The Den.",
    366:"After collecting Maligaro's Map from The Crypt.",
    367:"After meeting Silk in The Chamber of Sins Level 1.",
    368:"After speaking to Silk in the Chamber of Sins Level 1.",
    369:"AFTER killing Maligaro the Artist, BEFORE leaving Maligaro's Sanctum.",
    370:"After giving Black Venom to Silk and hearing Sin: Arakaali.",
    371:"After giving Black Venom to Silk.",
    372:"After giving Black Venom to Silk.",
    373:"After giving Black Venom to Silk.",
    374:"After giving Black Venom to Silk.",
    375:"After giving Black Venom to Silk.",
    376:"After accepting Queen of Despair.",
    377:"After accepting Kishara's Star from Weylam.",
    378:"After accepting Queen of Despair, BEFORE killing Gruthkul.",
    379:"After finishing The Master of a Million Faces.",
    380:"After finishing The Master of a Million Faces.",
    381:"AFTER killing Gruthkul.",
    382:"AFTER collecting seven Fireflies in The Dread Thicket, BEFORE meeting Yeena in The Vaal City.",
    383:"After first entering The Vaal City.",
    384:"AFTER killing Arakaali, BEFORE leaving Temple of Decay Level 2.",
    385:"After killing Arakaali.",
    386:"After killing Arakaali."
   };
   unlock=special[item.id]||unlock;
 }
 if(type==="ears"&&act===6){
   const special={
     318:"After finding the Karui Fortress gate and speaking to Tarkleigh.",
     319:"After Sin: The Father of War.",
     320:"After receiving The Father of War, BEFORE killing Tukohama.",
     321:"After obtaining the Eye of Conquest, BEFORE using it.",
     322:"AFTER using the Eye of Conquest but BEFORE entering The Karui Fortress; check hidden quest dialogue.",
     323:"After using the Eye of Conquest.",
     324:"After defeating Tukohama, BEFORE defeating Shavronne.",
     325:"After defeating Tukohama.",
     326:"AFTER defeating Shavronne; speak to Sin before leaving The Prison.",
     327:"After completing Essence of Umbra.",
     328:"After receiving The Cloven One from Bestel, BEFORE entering The Valley of the Fire Drinker.",
     329:"After hearing Sin: The Cloven One.",
     330:"After completing Essence of Umbra, BEFORE killing Ryslatha.",
     331:"After Sin: The Puppet Mistress.",
     332:"After speaking with Nessa in Prisoner's Gate.",
     333:"After meeting Nessa in Prisoner's Gate, BEFORE entering The Cavern of Anger.",
     334:"After talking to Nessa in The Cavern of Anger.",
     335:"After Sin: The Brine King, when the next option appears.",
     336:"After obtaining The Black Flag, BEFORE burning it at The Beacon.",
     337:"After first entering The Beacon.",
     338:"Upon arriving at The Brine King's Reef, BEFORE killing Tsoagoth.",
     339:"Upon arriving at The Brine King's Reef, BEFORE killing Tsoagoth.",
     340:"After completing The Brine King.",
     341:"After completing The Brine King."
   };
   unlock=special[item.id]||unlock;
 }
 if(type==="ears"&&act===5){
   const special={271:"Listen to Vilenta: Piety first to unlock Research.",275:"After defeating Justicar Casticus and before defeating Avarius.",277:"Immediately after defeating Innocence, before leaving the chamber.",295:"After obtaining the Sign of Purity in The Ossuary, before exiting."};
   unlock=special[item.id]||unlock;
 }
 tip=guide?.caution?"The detailed historical Thai caution is retained below; do not treat this English summary as patch 3.30 validation.":"This is a historical guide, not verified for patch 3.30.";
 return {action,location,unlock,caution,tip,source:guide?.source||"https://www.poewiki.net/wiki/Guide:All_Ears_achievement",sourceLabel:guide?.sourceLabel||"Source",detailsKnown:!!guide?.detailsKnown,patchCertified:false};
}
window.POE_LANGUAGE=Object.freeze({get:()=>({...prefs}),set,tr,term,entry,bilingualIndex,englishHelp,hasNameTranslation:s=>!!glossary[s],glossary:Object.freeze(glossary)});
})();
