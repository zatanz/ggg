/* Act 9: historical Wiki/Steam route. Ruler branch in old 484-ID tracker includes Irasha choice ONLY; 3.29 route not fully gameplay-certified. */
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
      "เข้า Shrine of the Winds ใน The Quarry แล้วจัดการ Kira และ Garukhan เพื่อเก็บ Sekhema Feather",
      "ก่อนมอบ Feather ให้ Irasha หรือ Tasuni ต้องฟัง Sin: Garukhan (ID 439) และ Petarus and Vanja: Oyun (ID 440)",
      "ตรวจครบสองหัวข้อก่อนตัดสินใจเลือกผู้รับ Feather เพราะบทสนทนาหลังเลือกแตกต่างกัน"
    ],
    "actionsEN": [
      "Defeat Kira and Garukhan at the Shrine of the Winds in The Quarry and collect the Sekhema Feather.",
      "BEFORE speaking to Irasha or Tasuni to hand in the feather, hear Sin: Garukhan (#439) and Petarus and Vanja: Oyun (#440).",
      "Do not hand in the feather before both dialogues have been heard."
    ],
    "stop": "หยุดก่อนมอบ Sekhema Feather: ต้องฟัง Sin (ID 439) และ Petarus and Vanja (ID 440) หลัง Garukhan ก่อน",
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
    "confidence": "historical-source-only",
    "visual": {
      "asset": "./assets/act9-feather-branch-decision.svg",
      "title": "The Ruler of Highgate · CHOICE CHANGES DIALOGUE",
      "alt": "ภาพจำลองลำดับเควสต์ The Ruler of Highgate บอกว่าต้องตรวจบทสนทนาเมื่อใด ไม่ใช่ภาพหน้าจอเกมจริง",
      "check": "หลังฆ่า Garukhan ให้คุย Sin และ Petarus and Vanja (ID 439/440) ก่อนเลือกผู้รับ Feather เส้นทาง Irasha เท่านั้นที่ตรงกับ ID 443/444 ของ Checklist เดิม",
      "checkEN": "After Garukhan, hear Sin #439 and Petarus and Vanja #440 BEFORE handing in the Feather. Only IRASHA's route matches the old tracker IDs #443/#444.",
      "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_9",
      "status": "mock-not-in-game"
    }
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
    "sourceNote": "ชุดข้อมูลเดิมบันทึกเพียงเส้นทางมอบ Feather ให้ Irasha; Wiki ระบุว่าเส้นทาง Tasuni สลับบทสนทนา 2 หัวข้อ ขณะนี้ยังไม่มี Local ID และการยืนยันในเกม 3.29 แบบครบทุกทางเลือกสำหรับสายนั้น",
    "sourceNoteEN": "The legacy tracker only includes the Irasha-ruler branch. The Wiki documents two alternative Tasuni-ruler dialogues, but stable tracker IDs do not exist for them. The alternate route has not been completely gameplay-verified for 3.29.",
    "confidence": "historical-source-only",
    "branchChoice": "Irasha",
    "branchRisk": true
  },
  {
    "id": "powder-acid",
    "place": "The Boiling Lake / The Refinery",
    "heading": "ก่อนเข้าท้องอสูร · ฟัง Sin ให้ครบ 3 หัวข้อ",
    "headingEN": "Before entering the Belly · review three Sin dialogue topics",
    "quest": "Recurring Nightmare",
    "dialogueIds": [
      445,
      446,
      447
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "เมื่อได้ Trarthan Powder ให้ตรวจ Sin: The Black Core (ID 446) และ Cataclysm (ID 447) ทันที ก่อนเข้า The Belly of the Beast ตามคำเตือนของฐานข้อมูลเดิม",
      "เก็บ Basilisk Acid และ Trarthan Powder ครบทั้งสองชนิด แล้วกลับคุย Sin: The Dark Ember (ID 445) ใน The Quarry และ Highgate ตามหัวข้อที่เปิด",
      "ก่อนเข้า The Belly of the Beast ต้องตรวจบทสนทนา #445, #446 และ #447 ทีละรายการ ห้ามตีความว่าเห็นหัวข้อเดียวเท่ากับฟังครบสามหัวข้อ"
    ],
    "actionsEN": [
      "After obtaining Trarthan Powder, immediately check Sin: The Black Core (ID 446) and Cataclysm (ID 447) BEFORE entering The Belly of the Beast, as the legacy checklist warns.",
      "After obtaining BOTH Basilisk Acid and Trarthan Powder, hear Sin: The Dark Ember (ID 445) in The Quarry and Highgate as available.",
      "Before entering The Belly of the Beast, verify each of #445, #446 and #447 separately. Seeing one dialogue option does not mean all three have been heard."
    ],
    "stop": "หยุดก่อนเข้า The Belly of the Beast: หลังได้ Trarthan Powder ตรวจ Sin: The Black Core (#446) และ Cataclysm (#447) จากนั้นเมื่อวัตถุดิบสองชิ้นครบ ตรวจ Sin: The Dark Ember (#445)",
    "stopEN": "STOP BEFORE entering The Belly of the Beast: after Trarthan Powder, check Sin: The Black Core (#446) and Cataclysm (#447); after BOTH ingredients, check Sin: The Dark Ember (#445).",
    "stopIds": [
      445,
      446,
      447
    ],
    "keyItems": [
      "Basilisk Acid",
      "Trarthan Powder"
    ],
    "sourceNote": "ID 446/447 ในข้อมูลเดิมมีคำเตือนว่าต้องฟังหลังได้ Trarthan Powder แต่ก่อนเข้าท้องอสูร ส่วน Wiki ระบุเงื่อนไขหลังได้ Trarthan Powder เช่นกัน จึงย้ายสองรายการออกจากช่วงหลังเข้าพื้นที่ แต่ยังไม่มีผลทดสอบยืนยันทุกทางเลือกใน 3.29",
    "sourceNoteEN": "Legacy IDs #446/#447 explicitly caution after obtaining Trarthan Powder but BEFORE entering the Belly. The 2025 Wiki also associates the topics with the powder. These now appear at the earlier decision boundary; the full 3.29 branch timing is not gameplay-certified.",
    "confidence": "historical-source-only",
    "visual": {
      "asset": "./assets/act9-ember-two-ingredients.svg",
      "title": "Recurring Nightmare · BEFORE BELLY OF THE BEAST",
      "alt": "ภาพจำลองลำดับเควสต์ Recurring Nightmare บอกว่าต้องตรวจบทสนทนาเมื่อใด ไม่ใช่ภาพหน้าจอเกมจริง",
      "check": "ได้ Basilisk Acid และ Trarthan Powder ครบแล้ว ต้องตรวจ Sin: The Dark Ember (ID 445) ที่ The Quarry และ Highgate ก่อนเข้าท้องอสูร",
      "checkEN": "After collecting BOTH Basilisk Acid and Trarthan Powder, check Sin: The Dark Ember (#445) in The Quarry AND Highgate BEFORE entering The Belly of the Beast.",
      "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_9",
      "status": "mock-not-in-game"
    }
  },
  {
    "id": "black-core",
    "place": "The Belly of the Beast / The Rotting Core",
    "heading": "เข้าสู่ The Belly of the Beast · ตรวจ Lore และเส้นทาง",
    "headingEN": "Enter The Belly of the Beast · continue the area route",
    "quest": "Recurring Nightmare",
    "dialogueIds": [],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "เข้าพื้นที่นี้เมื่อฟัง Sin #445, #446 และ #447 ครบตามหัวข้อที่เปิดในขั้นก่อนหน้าแล้ว",
      "หากยังไม่ได้ฟังครบ ให้ตรวจสถานะ NPC และบันทึกข้อผิดพลาดที่พบจริง ห้ามติ๊กย้อนหลังจากการเดา",
      "เดินหน้าไปยัง The Rotting Core และเตรียมจุดตรวจ Weylam Roth หลังชนะ The Depraved Trinity"
    ],
    "actionsEN": [
      "Enter this area only after reviewing the three Sin topics (#445–447) at the preceding quest-state checkpoint.",
      "If any topic was unavailable, record the actual NPC/quest state rather than checking it retroactively.",
      "Continue to The Rotting Core and prepare to check Weylam Roth after The Depraved Trinity."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [],
    "sourceNote": "หัวข้อ Sin #446/#447 ย้ายไปแสดงในจุดตรวจ Trarthan Powder ก่อนเข้า Belly ตามข้อมูลเดิม ไม่ใช่ว่าเข้า Belly แล้วจึงค่อยไปฟัง",
    "sourceNoteEN": "Sin #446/#447 are tracked in the pre-Belly Trarthan Powder step. Their previous placement after entering the Belly was later than the historical warning.",
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
      "หลังจัดการ The Depraved Trinity ใน The Black Heart ให้หยุดก่อนออกจาก Act 9",
      "ตามคู่มือเก่า ต้องคุย Weylam Roth สองหัวข้อ คือ Rescue (ID 448) และ Lilly (ID 449) หลังสู้",
      "ฟังครบทั้งสองหัวข้อแล้วจึงเดินทางกับ Lilly ไป Act 10"
    ],
    "actionsEN": [
      "Defeat The Depraved Trinity at The Black Heart, then stop before travelling to Act 10.",
      "After the fight, hear Weylam Roth: Rescue (#448) and Lilly (#449) according to the historical source.",
      "Do not depart with Lilly for Act 10 until both Weylam dialogues have been checked."
    ],
    "stop": "หยุดก่อนเดินทางเข้า Act 10: หลังชนะ The Depraved Trinity ต้องฟัง Weylam Roth: Rescue (ID 448) และ Lilly (ID 449)",
    "stopEN": "STOP: do not travel to Act 10 before hearing Weylam Roth: Rescue (#448) and Lilly (#449) after Depraved Trinity.",
    "stopIds": [
      448,
      449
    ],
    "keyItems": [],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only",
    "visual": {
      "asset": "./assets/act9-rescue-before-act10.svg",
      "title": "Recurring Nightmare · DO NOT ENTER ACT 10 YET",
      "alt": "ภาพจำลองลำดับเควสต์ Recurring Nightmare บอกว่าต้องตรวจบทสนทนาเมื่อใด ไม่ใช่ภาพหน้าจอเกมจริง",
      "check": "หลังฆ่า The Depraved Trinity ต้องฟัง Weylam Roth: Rescue (#448) และ Lilly (#449) ก่อนเดินทางไป Act 10",
      "checkEN": "After defeating The Depraved Trinity, hear Weylam Roth: Rescue (#448) and Lilly (#449) BEFORE travelling to Act 10.",
      "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_9",
      "status": "mock-not-in-game"
    }
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
