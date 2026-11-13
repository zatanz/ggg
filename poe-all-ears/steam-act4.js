/* Historical Steam 3.28 / Wiki 2025 Act 4 itinerary. Does NOT certify patch 3.30. */
(function(){
 const guide=window.POE_STEAM_WALK;
 if(!guide||guide.patchCertified!==false||guide.acts[4])throw Error("Act 4 source guide base not ready");
 guide.acts[4]=[
  {
    "id": "aqueduct",
    "place": "The Aqueduct / Highgate",
    "heading": "เข้า Highgate · คุย NPC ชุดแรก",
    "quest": "The Eternal Nightmare",
    "dialogueIds": [
      182,
      183,
      184,
      185,
      186,
      187,
      188,
      189,
      190,
      191,
      192,
      193,
      194,
      195,
      196,
      197,
      198,
      199
    ],
    "loreIds": [
      83
    ],
    "waypointIds": [
      36,
      37
    ],
    "sidequestIds": [],
    "actions": [
      "อ่าน Note ใน Aqueduct และเปิด Waypoint ของ Aqueduct / Highgate",
      "คุย Kira → Petarus and Vanja → Tasuni → Oyun → Dialla ให้ครบตามคู่มือ Steam",
      "หัวข้อที่เปิดหลังรู้จัก NPC คนอื่นอยู่ในช่วงถัดไป"
    ],
    "stop": null,
    "stopIds": [],
    "confidence": "historical"
  },
  {
    "id": "highgate-followups",
    "place": "Highgate",
    "heading": "Highgate · กลับคุยเรื่อง NPC คนอื่น",
    "quest": "The Eternal Nightmare",
    "dialogueIds": [
      200,
      201,
      202,
      203,
      204,
      205,
      206,
      207,
      208,
      209,
      210,
      211,
      212
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "กลับไปคุย Kira, Petarus and Vanja, Tasuni, Oyun และ Dialla อีกครั้งหลังเปิดหัวข้อใหม่",
      "ตรวจ The Beast, Deshret, Voll และบทสนทนาเรื่อง NPC ตามที่ปรากฏ ก่อนออกจาก Highgate"
    ],
    "stop": null,
    "stopIds": [],
    "confidence": "historical"
  },
  {
    "id": "voll-mines",
    "place": "The Dried Lake / Highgate",
    "heading": "หลัง Voll · ก่อนปลดปล่อย Deshret",
    "quest": "An Indomitable Spirit",
    "dialogueIds": [
      213,
      214,
      215,
      216,
      217,
      218,
      219,
      220
    ],
    "loreIds": [
      84
    ],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "ที่ The Dried Lake อ่าน Voll's Confession และจัดการ Voll เพื่อเปิดทางเข้า The Mines",
      "หลังรับเควสต์ An Indomitable Spirit ให้กลับ Highgate คุย Kira หัวข้อ Deshret (ID 220) ก่อนปลดปล่อย Deshret ใน The Mines Level 2",
      "ตรวจหัวข้อเกี่ยวกับ The Mines, Voll และ The Rapture Device ที่เพิ่งเปิดก่อนเดินเรื่องต่อ"
    ],
    "stop": "หยุดก่อนปลดปล่อย Deshret: ต้องฟัง Kira: Deshret (ID 220) ให้จบก่อน",
    "stopIds": [
      220
    ],
    "confidence": "historical",
    "visual": {
      "asset": "./assets/deshret-quest-illustration.svg",
      "title": "An Indomitable Spirit · ก่อนช่วย Deshret",
      "alt": "ภาพจำลองหน้า Quest An Indomitable Spirit แสดงการกลับคุย Kira ก่อนปลดปล่อย Deshret ใน Mines",
      "check": "หลังรับ An Indomitable Spirit ให้ฟัง Kira: Deshret (ID 220) ก่อนช่วย Deshret",
      "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_4",
      "status": "mock-not-in-game"
    }
  },
  {
    "id": "deshret-after",
    "place": "The Mines Level 2 / Highgate",
    "heading": "หลังช่วย Deshret · กลับคุย Kira และ Oyun",
    "quest": "An Indomitable Spirit",
    "dialogueIds": [
      221,
      222
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [
      9
    ],
    "actions": [
      "หลังช่วย Deshret ให้กลับ Highgate ฟัง Kira และ Oyun: Deshret",
      "เมื่อเควสต์ An Indomitable Spirit สำเร็จจริง ค่อยติ๊ก No Loose Ends"
    ],
    "stop": null,
    "stopIds": [],
    "confidence": "historical"
  },
  {
    "id": "crystal-veins",
    "place": "The Crystal Veins / Highgate",
    "heading": "พบ Dialla ก่อนจบเส้นทาง Kaom และ Daresso",
    "quest": "The King of Desire / The King of Fury",
    "dialogueIds": [
      223,
      224,
      225,
      226,
      227,
      228,
      229,
      230
    ],
    "loreIds": [
      85
    ],
    "waypointIds": [
      38
    ],
    "sidequestIds": [],
    "actions": [
      "เปิด Waypoint The Crystal Veins และอ่าน Malachai's Notebook",
      "คุย Lady Dialla เรื่อง Kaom และ Daresso ก่อนจบเควสต์บอสทั้งสองสาย",
      "กลับ Highgate ตรวจ Petarus and Vanja, Tasuni และ Oyun ในหัวข้อใหม่"
    ],
    "stop": "อย่าจบทั้งสองเควสต์ Kaom/Daresso ก่อนตรวจ Dialla ใน Crystal Veins",
    "stopIds": [
      223,
      224
    ],
    "confidence": "historical"
  },
  {
    "id": "daresso-after",
    "place": "The Grand Arena / Highgate",
    "heading": "หลัง Daresso · เก็บบทสนทนาก่อนเข้า Belly of the Beast",
    "quest": "The King of Desire",
    "dialogueIds": [
      231,
      232
    ],
    "loreIds": [
      86,
      87,
      88
    ],
    "waypointIds": [
      39
    ],
    "sidequestIds": [],
    "actions": [
      "เปิด Waypoint Grand Arena และอ่าน Plaque 3 รายการ",
      "หลังสังหาร Daresso และส่ง The Eye of Desire ให้ Dialla กลับ Highgate คุย Petarus and Vanja กับ Tasuni: Daresso ก่อนเข้า The Belly of the Beast"
    ],
    "stop": "ตาม PoE Wiki #231–232 ต้องฟัง Petarus and Vanja / Tasuni: Daresso หลังจบ The King of Desire และก่อนเข้า The Belly of the Beast (ไม่ใช่ก่อนเข้า Kaom's Dream)",
    "stopIds": [
      231,
      232
    ],
    "confidence": "historical"
  },
  {
    "id": "kaom-after",
    "place": "Kaom's Dream / Kaom's Stronghold / Highgate",
    "heading": "หลัง Kaom · ตรวจเมืองก่อนเข้า Belly of the Beast",
    "quest": "The King of Fury",
    "dialogueIds": [
      233,
      234,
      235,
      236,
      237,
      238,
      239
    ],
    "loreIds": [
      89,
      90,
      91,
      92
    ],
    "waypointIds": [
      40
    ],
    "sidequestIds": [],
    "actions": [
      "อ่าน Weathered Carving 4 รายการ และเปิด Waypoint Kaom's Stronghold",
      "หลังสังหาร Kaom ส่ง The Eye of Fury แล้วกลับ Highgate",
      "คุย Kira, Petarus and Vanja, Tasuni, Oyun และ Dialla ตามเงื่อนไขหลังใช้ Rapture Device"
    ],
    "stop": "ยังไม่ควรเข้า The Belly of the Beast ก่อนเก็บบทสนทนาหลัง Kaom/Rapture Device",
    "stopIds": [
      233,
      234,
      235,
      236,
      237,
      238,
      239
    ],
    "confidence": "historical"
  },
  {
    "id": "belly-intro",
    "place": "The Belly of the Beast",
    "heading": "Belly of the Beast · ตรวจ Tasuni: Ghasts",
    "quest": "The Eternal Nightmare",
    "dialogueIds": [
      240
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "ตรวจหัวข้อ Tasuni: Ghasts ที่ปลดล็อก",
      "หลังต่อสู้ Piety ต้องหยุดตรวจ The Godless Three ก่อนเข้า Harvest"
    ],
    "stop": null,
    "stopIds": [],
    "confidence": "historical"
  },
  {
    "id": "piety-after",
    "place": "The Belly of the Beast",
    "heading": "ชนะ Piety แล้ว · ห้ามเข้า Harvest ทันที",
    "quest": "The Eternal Nightmare",
    "dialogueIds": [
      241
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "หลังชนะ Piety คุย Piety: The Godless Three ก่อนผ่านออกไป Harvest"
    ],
    "stop": "อย่าเข้า The Harvest ก่อนฟัง Piety: The Godless Three",
    "stopIds": [
      241
    ],
    "confidence": "historical"
  },
  {
    "id": "piety-town",
    "place": "Highgate",
    "heading": "หลัง Piety · ตรวจ Tasuni ก่อนสู้ Malachai",
    "quest": "The Eternal Nightmare",
    "dialogueIds": [
      242,
      243,
      244,
      245,
      246
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "กลับเมืองคุย Petarus and Vanja, Tasuni และ Dialla ในหัวข้อที่เปิดหลังชนะ Piety",
      "ตรวจ Tasuni: Malachai's Apprentices (ID 245) ก่อนฆ่า Malachai"
    ],
    "stop": "ยังไม่ควรฆ่า Malachai ก่อนฟัง Tasuni: Malachai's Apprentices",
    "stopIds": [
      245
    ],
    "confidence": "historical"
  },
  {
    "id": "harvest-before",
    "place": "The Harvest",
    "heading": "พบ Piety ใน Harvest · คุยก่อนส่งอวัยวะ",
    "quest": "The Eternal Nightmare",
    "dialogueIds": [
      247
    ],
    "loreIds": [
      93
    ],
    "waypointIds": [
      41
    ],
    "sidequestIds": [],
    "actions": [
      "เข้า The Harvest เปิด Waypoint และอ่าน Malachai's Dedication",
      "ก่อนส่งอวัยวะครบ ให้คุย Piety หัวข้อ Malachai (ID 247) และฟังให้จบ",
      "ตรวจว่าบันทึกหัวข้อนี้แล้ว จึงค่อยส่งอวัยวะต่อให้ Piety"
    ],
    "stop": "หยุดก่อนส่งอวัยวะชิ้นสุดท้าย: ต้องฟัง Piety: Malachai (ID 247) ก่อน",
    "stopIds": [
      247
    ],
    "confidence": "historical",
    "visual": {
      "asset": "./assets/piety-organs-quest-illustration.svg",
      "title": "The Eternal Nightmare · ก่อนส่งอวัยวะให้ Piety",
      "alt": "ภาพจำลองหน้า Quest The Eternal Nightmare แยกก่อนส่งอวัยวะให้ Piety และหลังส่งให้กลับคุย Dialla",
      "check": "ก่อนส่งอวัยวะฟัง Piety: Malachai (ID 247); หลังส่งแล้วฟัง Dialla: Malachai (ID 248) ก่อนฆ่าบอส",
      "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_4",
      "status": "mock-not-in-game"
    }
  },
  {
    "id": "harvest-after",
    "place": "The Harvest",
    "heading": "หลังส่งอวัยวะ · คุย Dialla ก่อนฆ่า Malachai",
    "quest": "The Eternal Nightmare",
    "dialogueIds": [
      248
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "หลังส่งอวัยวะให้ Piety ครบแล้ว ให้กลับไปคุย Lady Dialla หัวข้อ Malachai (ID 248)",
      "ตรวจว่าฟังหัวข้อหลังส่งอวัยวะจริงแล้ว จึงเข้าไปสู้ Malachai"
    ],
    "stop": "หยุดก่อนฆ่า Malachai: ต้องฟัง Lady Dialla: Malachai (ID 248) หลังส่งอวัยวะครบก่อน",
    "stopIds": [
      248
    ],
    "confidence": "historical"
  },
  {
    "id": "malachai-after",
    "place": "Highgate / The Ascent",
    "heading": "หลัง Malachai · เก็บหัวข้อและ Lore ปิด Act",
    "quest": "The Eternal Nightmare",
    "dialogueIds": [
      249,
      250,
      251,
      252,
      253
    ],
    "loreIds": [
      94
    ],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "หลังฆ่า Malachai กลับ Highgate ฟัง Kira, Petarus and Vanja, Tasuni และ Oyun ทุกหัวข้อที่เปิด",
      "อ่าน Resonator Instructions ใน The Ascent",
      "ตรวจยอดสี่ Achievement ก่อนออกจาก Act 4"
    ],
    "stop": "ก่อนออกจาก Act 4 ให้กลับคุย NPC หลัง Malachai",
    "stopIds": [
      249,
      250,
      251,
      252,
      253
    ],
    "confidence": "historical"
  }
];
// English text is authored per quest-state; never translate a STOP deadline by guessing.
const english={
  "aqueduct":["Enter Highgate · meet the first town NPCs",[
    "Read the Note in the Aqueduct and discover the Aqueduct and Highgate Waypoints.",
    "Speak with Kira, Petarus and Vanja, Tasuni, Oyun and Lady Dialla as the historical source introduces them.",
    "Return for cross-NPC topics after meeting each person; these unlock in later stages."
  ],null],
  "highgate-followups":["Highgate · return for newly unlocked NPC topics",[
    "Speak again to Kira, Petarus and Vanja, Tasuni, Oyun and Lady Dialla after introductions unlock new topics.",
    "Review The Beast, Deshret, Voll and topics about other NPCs as they appear."
  ],null],
  "voll-mines":["After Voll · talk to Kira BEFORE freeing Deshret",[
    "Read Voll's Confession at the Dried Lake, then defeat Voll to gain access to the Mines.",
    "After receiving An Indomitable Spirit, return to Highgate for Kira: Deshret (checklist ID 220) BEFORE freeing Deshret in Mines Level 2.",
    "Review newly unlocked Mines, Voll and Rapture Device dialogue before continuing."
  ],"STOP: hear Kira: Deshret (checklist ID 220; Wiki #219) before freeing Deshret."],
  "deshret-after":["After freeing Deshret · return to Kira and Oyun",[
    "Return to Highgate after freeing Deshret and listen to Kira and Oyun: Deshret.",
    "Only mark An Indomitable Spirit in No Loose Ends after the quest is actually completed."
  ],null],
  "crystal-veins":["Crystal Veins · meet Dialla before finishing both boss quests",[
    "Activate the Crystal Veins Waypoint and collect Malachai's Notebook.",
    "Speak to Lady Dialla about Kaom and Daresso before completing BOTH The King of Fury and The King of Desire.",
    "Revisit Petarus and Vanja, Tasuni and Oyun in Highgate for the resulting topics."
  ],"STOP: speak to Lady Dialla in the Crystal Veins before completing both Kaom and Daresso quest lines (Wiki #223–224)."],
  "daresso-after":["After Daresso · check two dialogues before Belly of the Beast",[
    "Activate the Grand Arena Waypoint and discover the three Plaque lore entries.",
    "After completing The King of Desire, return to Highgate for Petarus and Vanja: Daresso and Tasuni: Daresso BEFORE entering The Belly of the Beast."
  ],"STOP: hear the two post-Daresso town topics before entering The Belly of the Beast (Wiki #231–232). Entering Kaom's Dream alone is not the sourced deadline."],
  "kaom-after":["After Kaom · review town conversations before Belly of the Beast",[
    "Discover the four Weathered Carvings and activate the Kaom's Stronghold Waypoint.",
    "After defeating Kaom and handing in The Eye of Fury, return to Highgate.",
    "Check Oyun, Tasuni, Petarus and Vanja, Kira and Lady Dialla's newly unlocked topics after the Rapture Device changes state."
  ],"STOP: complete the relevant post-Kaom and post-Rapture Device conversations BEFORE entering The Belly of the Beast (Wiki #233–239)."],
  "belly-intro":["Belly of the Beast · review Tasuni: Ghasts",[
    "Review the newly unlocked Tasuni: Ghasts dialogue.",
    "After the Piety encounter, check The Godless Three before entering The Harvest."
  ],null],
  "piety-after":["After Piety · do NOT enter the Harvest immediately",[
    "Talk to Piety about The Godless Three after the encounter in the Belly of the Beast, before entering The Harvest."
  ],"STOP: hear Piety: The Godless Three before entering The Harvest (Wiki #241)."],
  "piety-town":["After Piety · review Tasuni before killing Malachai",[
    "Return to Highgate and review newly available Petarus and Vanja, Tasuni and Lady Dialla topics.",
    "Hear Tasuni: Malachai's Apprentices (checklist ID 245; Wiki #246) BEFORE killing Malachai."
  ],"STOP: hear Tasuni: Malachai's Apprentices before defeating Malachai (Wiki #246)."],
  "harvest-before":["The Harvest · speak to Piety before the final organ hand-in",[
    "Activate the Harvest Waypoint and collect Malachai's Dedication lore.",
    "Listen to Piety: Malachai (checklist ID 247) while at least one organ has NOT yet been handed in.",
    "Only hand in the final organ after recording the actual in-game dialogue."
  ],"STOP: hear Piety: Malachai (Wiki #247) BEFORE handing in all organs."],
  "harvest-after":["After the organ hand-in · speak to Dialla before Malachai",[
    "After handing all organs to Piety, hear Lady Dialla: Malachai (checklist ID 248).",
    "Verify that the post-hand-in dialogue was heard before fighting Malachai."
  ],"STOP: hear Lady Dialla: Malachai (Wiki #248) AFTER handing in all organs but BEFORE killing Malachai."],
  "malachai-after":["After Malachai · finish Highgate dialogue and Act 4 lore",[
    "After defeating Malachai, revisit Kira, Petarus and Vanja, Tasuni and Oyun for their newly unlocked topics.",
    "Read Resonator Instructions in the Ascent.",
    "Compare the four tracked achievement counts with your in-game progress before leaving Act 4."
  ],"Before leaving Act 4, revisit the post-Malachai NPC conversations (Wiki #249–253)."]
};
const phases=guide.acts[4];
if(phases.length!==Object.keys(english).length)throw Error("Act 4 English phase coverage mismatch");
for(const phase of phases){
 const strings=english[phase.id];
 if(!strings||strings[1].length!==phase.actions.length||!!strings[2]!==!!phase.stop)throw Error("Act 4 English timing mismatch: "+phase.id);
 phase.headingEN=strings[0];phase.actionsEN=strings[1];
 if(strings[2])phase.stopEN=strings[2];
}
})();
