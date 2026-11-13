/* Act 9: historical Wiki/Steam route. Ruler branch in old 484-ID tracker includes Irasha choice ONLY; 3.30 NOT certified. */
(function(){
"use strict";
const guide=window.POE_STEAM_WALK;if(!guide||guide.patchCertified!==false||guide.acts[9])throw Error("Cannot attach historical Act9 route");
guide.acts[9]=[
  {
    "id": "highgate-arrive",
    "place": "The Blood Aqueduct / Highgate",
    "heading": "เข้า Act 9 · คุย NPC ใน Highgate ให้ครบ",
    "headingEN": "Arrive in Highgate · complete town introductions",
    "quest": "Recurring Nightmare / The Ruler of Highgate",
    "dialogueIds": [
      417,
      418,
      419,
      420,
      422,
      431,
      432,
      423,
      424,
      425,
      426,
      427,
      428,
      429,
      430,
      421,
      433,
      434,
      435
    ],
    "loreIds": [],
    "waypointIds": [
      79,
      80
    ],
    "sidequestIds": [],
    "actions": [
      "จาก The Blood Aqueduct เปิด Waypoint แล้วกลับ Highgate เปิด Waypoint ประจำเมือง",
      "คุย Sin, Petarus and Vanja, Tasuni และ Irasha ให้ครบหัวข้อต้น Act ก่อนเดินเรื่องต่อ รวมถึงหัวข้อ Oyun, Kira และ Maraketh Tradition",
      "หลังฟัง Irasha แนะนำตัวแล้ว กลับคุย Petarus and Vanja, Tasuni และ Sin เรื่อง Irasha/Garukhan ตามที่ปลดล็อก"
    ],
    "actionsEN": [
      "Activate The Blood Aqueduct and Highgate Waypoints.",
      "Speak to Sin, Petarus and Vanja, Tasuni and Irasha about their initial topics, including Oyun, Kira and Maraketh Tradition.",
      "After meeting Irasha, revisit Petarus and Vanja, Tasuni and Sin for Irasha/Garukhan topics when unlocked."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "desert-storm-blade",
    "place": "The Vastiri Desert / Highgate",
    "heading": "ได้ Storm Blade แล้ว · คุย Adus ก่อน Foothills",
    "headingEN": "Storm Blade found · hear General Adus before Foothills",
    "quest": "The Storm Blade",
    "dialogueIds": [
      436
    ],
    "loreIds": [],
    "waypointIds": [
      81
    ],
    "sidequestIds": [
      24
    ],
    "actions": [
      "ไป The Vastiri Desert เปิด Waypoint และเก็บ Storm Blade ส่ง Petarus and Vanja เพื่อจบ The Storm Blade",
      "หลังส่งเควสต์ให้ฟัง Petarus and Vanja: General Adus (#436) ก่อนเดินเข้า The Foothills",
      "ตรวจว่าติ๊ก No Loose Ends: The Storm Blade หลังจบเควสต์จริง แล้วค่อยเดินต่อ"
    ],
    "actionsEN": [
      "Activate The Vastiri Desert Waypoint, retrieve Storm Blade and return it to Petarus and Vanja.",
      "After completing the quest, hear Petarus and Vanja: General Adus (#436) BEFORE entering The Foothills.",
      "Mark The Storm Blade optional quest only after turn-in."
    ],
    "stop": "ห้ามเข้า The Foothills หลังส่ง Storm Blade ก่อนฟัง Petarus and Vanja: General Adus (#436)",
    "stopEN": "STOP: hear Petarus and Vanja: General Adus (#436) after Storm Blade but BEFORE entering The Foothills.",
    "stopIds": [
      436
    ],
    "keyItems": [
      "Storm Blade"
    ],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "oasis-sandstorm",
    "place": "The Vastiri Desert / The Oasis",
    "heading": "เห็นทางเข้า Oasis ถูกพายุปิด · ฟัง Sin",
    "headingEN": "Blocked Oasis entrance · ask Sin before proceeding",
    "quest": "Queen of the Sands",
    "dialogueIds": [
      437
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [
      25
    ],
    "actions": [
      "เมื่อเห็นพายุทรายที่ปิดทางเข้า The Oasis ให้กลับฟัง Sin: Queen of the Sands (#437)",
      "ทำเควสต์ Queen of the Sands ตามสถานะจริงและกลับรับรางวัลหลังจัดการ Shakari ใน The Oasis",
      "ติ๊กเควสต์รอง Queen of the Sands หลังจบจริง ไม่ใช่ตอนเห็นทางถูกปิด"
    ],
    "actionsEN": [
      "After encountering the sandstorm barrier blocking The Oasis, hear Sin: Queen of the Sands (#437).",
      "Complete Queen of the Sands by defeating Shakari in The Oasis and collecting the quest reward.",
      "Do not mark the side quest completed merely because you saw the blocked passage."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "foothills-fortune",
    "place": "The Foothills",
    "heading": "ค้น Calendar of Fortune และส่ง Fastis Fortuna",
    "headingEN": "Foothills · recover the Calendar of Fortune",
    "quest": "Fastis Fortuna",
    "dialogueIds": [],
    "loreIds": [],
    "waypointIds": [
      82
    ],
    "sidequestIds": [
      26
    ],
    "actions": [
      "เข้า The Foothills หลังตรวจบทสนทนา General Adus แล้วเปิด Waypoint",
      "รับ Fastis Fortuna จาก Petarus and Vanja ค้น Calendar of Fortune บริเวณ Boulderback และนำกลับ Highgate",
      "กลับคุย Petarus and Vanja รับรางวัลแล้วจึงติ๊ก Fastis Fortuna"
    ],
    "actionsEN": [
      "Enter The Foothills after General Adus dialogue and activate the Waypoint.",
      "Accept Fastis Fortuna from Petarus and Vanja; find Calendar of Fortune near Boulderback and return it to Highgate.",
      "Claim the reward before marking the side quest complete."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [
      "Calendar of Fortune"
    ],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "tunnel-quarry-prepowder",
    "place": "The Tunnel / The Quarry",
    "heading": "ก่อนเก็บ Trarthan Powder · ฟัง Sin ใน Quarry",
    "headingEN": "Before Trarthan Powder · hear Sin in The Quarry",
    "quest": "Recurring Nightmare",
    "dialogueIds": [
      438
    ],
    "loreIds": [],
    "waypointIds": [
      83,
      84
    ],
    "sidequestIds": [],
    "actions": [
      "ผ่าน The Tunnel เปิด Waypoint แล้วถึง The Quarry เปิด Waypoint",
      "พบ Sin ใน The Quarry ขณะยังไม่มี Trarthan Powder แล้วฟัง The Dark Ember (#438)",
      "ยังไม่เก็บ Trarthan Powder จาก The Refinery ก่อนคุย Sin ในสถานะนี้"
    ],
    "actionsEN": [
      "Activate The Tunnel and The Quarry Waypoints.",
      "While you do NOT have Trarthan Powder, speak to Sin in The Quarry for The Dark Ember (#438).",
      "Do not collect Trarthan Powder from The Refinery before checking this conversation."
    ],
    "stop": "ห้ามเก็บ Trarthan Powder ก่อนฟัง Sin: The Dark Ember ใน The Quarry (#438)",
    "stopEN": "STOP: before collecting Trarthan Powder, hear Sin: The Dark Ember in The Quarry (#438).",
    "stopIds": [
      438
    ],
    "keyItems": [
      "Trarthan Powder"
    ],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "garukhan-post",
    "place": "The Quarry / The Shrine of the Winds",
    "heading": "หลังฆ่า Garukhan · อย่าเพิ่งส่ง Feather",
    "headingEN": "After Garukhan · delay choosing a ruler",
    "quest": "The Ruler of Highgate",
    "dialogueIds": [
      439,
      440
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "เข้า Shrine of the Winds ที่ The Quarry ต่อสู้ Kira และ Garukhan แล้วเก็บ Sekhema Feather",
      "ก่อนคุย Irasha หรือ Tasuni เรื่องการส่ง Feather ให้ฟัง Sin: Garukhan (#439) และ Petarus and Vanja: Oyun (#440)",
      "อย่าเพิ่งมอบ Feather จนกว่าจะติ๊กว่าฟังทั้งสองบทสนทนาแล้ว"
    ],
    "actionsEN": [
      "Defeat Kira and Garukhan at the Shrine of the Winds in The Quarry and collect the Sekhema Feather.",
      "BEFORE speaking to Irasha or Tasuni to hand in the feather, hear Sin: Garukhan (#439) and Petarus and Vanja: Oyun (#440).",
      "Do not hand in the feather before both dialogues have been heard."
    ],
    "stop": "หลังฆ่า Garukhan ห้ามส่ง Feather ให้ Irasha หรือ Tasuni ก่อนฟัง Sin และ Petarus and Vanja (#439–440)",
    "stopEN": "STOP: after Garukhan, do not give the Feather to Irasha or Tasuni before Sin #439 and Petarus and Vanja #440.",
    "stopIds": [
      439,
      440
    ],
    "keyItems": [
      "Sekhema Feather"
    ],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "ruler-irasha-choice",
    "place": "Highgate",
    "heading": "เลือกผู้ปกครอง Highgate · ชุดข้อมูลเดิมรองรับ Irasha เท่านั้น",
    "headingEN": "Choose Highgate's ruler · historic tracker supports Irasha branch",
    "quest": "The Ruler of Highgate",
    "dialogueIds": [
      443,
      444,
      441,
      442
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [
      27
    ],
    "actions": [
      "การเลือกครั้งนี้เปลี่ยนบทสนทนาอย่างถาวรในตัวละคร: คู่มือดั้งเดิมจัด ID #443 Tasuni: Feather of Sekhema และ #444 Petarus and Vanja: Irasha สำหรับเส้นทางส่ง Feather ให้ Irasha",
      "ถ้าต้องการทำตาม Checklist เดิม ให้ส่ง Sekhema Feather ให้ Irasha แล้วฟัง Tasuni: Feather, Petarus and Vanja: Irasha จากนั้น Irasha: Maraketh Justice (#441) และ Garukhan (#442)",
      "หากเลือก Tasuni บทสนทนา Wiki row 441–442 จะกลายเป็น Irasha: Feather และ Petarus and Vanja: Tasuni แต่ฐานข้อมูลเดิมไม่มี ID สำหรับทางเลือกนี้ อย่าติ๊ก #443/#444 แทนและอย่าอ้าง 100% จาก Checklist นี้"
    ],
    "actionsEN": [
      "This decision changes dialogue availability. The 484-ID historical tracker has local #443 Tasuni: Feather and #444 Petarus and Vanja: Irasha for the IRASHA ruler branch.",
      "To follow the current legacy tracker, give the Sekhema Feather to Irasha, then hear Tasuni: Feather, Petarus and Vanja: Irasha, Irasha: Maraketh Justice (#441) and Garukhan (#442).",
      "If you choose Tasuni, Wiki rows 441–442 instead refer to Irasha: Feather and Petarus and Vanja: Tasuni, with NO corresponding stable IDs in this project's old tracker. Do NOT check #443/#444 as substitutes or assume 100%."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [
      "Sekhema Feather"
    ],
    "sourceNote": "ชุดข้อมูลเดิมบันทึกเพียงเส้นทางมอบ Feather ให้ Irasha; Wiki ระบุว่าเส้นทาง Tasuni สลับบทสนทนา 2 หัวข้อ ขณะนี้ยังไม่มี Local ID และการเทสต์ในเกมแพตช์ 3.30 สำหรับสายนั้น",
    "sourceNoteEN": "The legacy tracker only includes the Irasha-ruler branch. The Wiki documents two alternative Tasuni-ruler dialogues, but stable tracker IDs do not exist for them. Patch 3.30 branch completeness is unverified.",
    "confidence": "historical-source-only",
    "branchChoice": "Irasha",
    "branchRisk": true
  },
  {
    "id": "powder-acid",
    "place": "The Boiling Lake / The Refinery",
    "heading": "เก็บกรดและผง · อย่าเพิ่งเข้าท้องอสูร",
    "headingEN": "Collect both ingredients · pause before entering the Beast",
    "quest": "Recurring Nightmare",
    "dialogueIds": [
      445
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "ไป The Boiling Lake เก็บ Basilisk Acid และ The Refinery เก็บ Trarthan Powder ตามเควสต์ Recurring Nightmare",
      "เมื่อได้ของครบแล้วคุย Sin ทั้งใน Highgate และ The Quarry ตามหัวข้อ The Dark Ember (#445)",
      "อย่าเข้า The Belly of the Beast ก่อนตรวจ The Dark Ember จากสถานะหลังได้ของครบ"
    ],
    "actionsEN": [
      "Collect Basilisk Acid in The Boiling Lake and Trarthan Powder in The Refinery for Recurring Nightmare.",
      "After obtaining BOTH ingredients, hear Sin: The Dark Ember in Highgate and in The Quarry, as available (#445).",
      "Do not enter The Belly of the Beast before checking this post-ingredients dialogue."
    ],
    "stop": "ห้ามเข้า The Belly of the Beast ก่อนฟัง Sin: The Dark Ember หลังได้ Basilisk Acid และ Trarthan Powder (#445)",
    "stopEN": "STOP: with both Basilisk Acid and Trarthan Powder, hear Sin: The Dark Ember (#445) BEFORE entering The Belly of the Beast.",
    "stopIds": [
      445
    ],
    "keyItems": [
      "Basilisk Acid",
      "Trarthan Powder"
    ],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "black-core",
    "place": "The Belly of the Beast / The Rotting Core",
    "heading": "เข้าสู่แกนอสูร · ฟัง Sin ให้ครบ",
    "headingEN": "Inside the Beast · hear Sin before continuing",
    "quest": "Recurring Nightmare",
    "dialogueIds": [
      446,
      447
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "หลังตรวจ The Dark Ember จึงเข้า The Belly of the Beast และ The Rotting Core",
      "ตรวจ Sin: The Black Core (#446) และ Cataclysm (#447) ในช่วงที่เปิดบทสนทนา",
      "สองหัวข้อนี้มีคำเตือนเก่าที่อาจผูกกับจังหวะหลังเก็บ Trarthan Powder ก่อนเข้า Belly; หากพบเปิดเร็วกว่านั้นให้ฟังทันที ห้ามเดาว่ากลับมาฟังภายหลังได้"
    ],
    "actionsEN": [
      "After completing The Dark Ember, enter The Belly of the Beast and The Rotting Core.",
      "Check Sin: The Black Core (#446) and Cataclysm (#447) as soon as the topics appear.",
      "Historical notes may place these dialogues after Trarthan Powder but BEFORE entering the Belly. If they appear earlier, hear them immediately; do not assume you can return later."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [],
    "sourceNote": "หมายเหตุเก่าระบุ #446/#447 หลังได้ Trarthan Powder แต่ก่อนเข้า Belly of the Beast ขณะที่ลำดับพื้นที่ทำให้การเปิดหัวข้อจริงต้องทดสอบ; ไม่ควรเลื่อนผ่านจุดนี้โดยไม่ตรวจ Sin",
    "sourceNoteEN": "Legacy notes require Sin: The Black Core and Cataclysm after Trarthan Powder, potentially before entering the Belly. Their exact unlock location/timing requires in-game confirmation.",
    "confidence": "historical-source-only"
  },
  {
    "id": "trinity-rescue",
    "place": "The Rotting Core / The Black Heart",
    "heading": "หลังฆ่า Depraved Trinity · คุย Weylam ก่อน Act 10",
    "headingEN": "After Depraved Trinity · speak to Weylam BEFORE Act 10",
    "quest": "Recurring Nightmare",
    "dialogueIds": [
      448,
      449
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "จัดการ The Depraved Trinity ใน The Black Heart แล้วหยุดก่อนเดินทางไป Act 10",
      "ตามคู่มือเก่าฟัง Weylam Roth: Rescue (#448) และ Lilly (#449) ให้ครบหลังสู้",
      "อย่าเลือกเดินทางกับ Lilly ไป Act 10 ก่อนตรวจบทสนทนา Weylam ทั้งสอง"
    ],
    "actionsEN": [
      "Defeat The Depraved Trinity at The Black Heart, then stop before travelling to Act 10.",
      "After the fight, hear Weylam Roth: Rescue (#448) and Lilly (#449) according to the historical source.",
      "Do not depart with Lilly for Act 10 until both Weylam dialogues have been checked."
    ],
    "stop": "ห้ามเดินทางเข้า Act 10 ก่อนฟัง Weylam Roth: Rescue (#448) และ Lilly (#449) หลัง Depraved Trinity",
    "stopEN": "STOP: do not travel to Act 10 before hearing Weylam Roth: Rescue (#448) and Lilly (#449) after Depraved Trinity.",
    "stopIds": [
      448,
      449
    ],
    "keyItems": [],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "post-beast-town",
    "place": "Highgate",
    "heading": "หลัง Recurring Nightmare · กลับคุยปิดท้าย Act 9",
    "headingEN": "After Recurring Nightmare · finish Highgate dialogue",
    "quest": "Recurring Nightmare",
    "dialogueIds": [
      450,
      451,
      452
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "หลังจบ Recurring Nightmare ให้กลับ Highgate และฟัง Petarus and Vanja: The Beast (#450), Irasha: The Beast (#451) และ Tasuni: The Beast (#452)",
      "ตรวจยอดทั้ง 4 Achievement กับตัวเกม และตรวจตัวเลือกผู้ปกครอง Highgate ก่อนขึ้นเรือไป Act 10",
      "หากเลือก Tasuni อย่าอ้าง Checklist 484 ID เดิมว่าแสดงบทสนทนาทุกทางเลือกครบ"
    ],
    "actionsEN": [
      "After Recurring Nightmare, return to Highgate and hear Petarus and Vanja: The Beast (#450), Irasha: The Beast (#451) and Tasuni: The Beast (#452).",
      "Compare all four achievement counters with the game and review the irreversible Highgate ruler decision before sailing to Act 10.",
      "If Tasuni was chosen, do not claim the fixed 484-ID historical tracker covers every alternate dialogue."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  }
];
})();
