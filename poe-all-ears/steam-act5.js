/* Act 5 source-led itinerary: PoE Wiki 2025, Steam historical 3.28. Not patch 3.30-certified. */
(function(){
 "use strict";
 const guide=window.POE_STEAM_WALK;
 if(!guide||guide.patchCertified!==false||guide.acts[5])throw Error("Cannot attach Act 5 phases to Steam guide");
 guide.acts[5]=[
  {
    "id": "slave-pens",
    "heading": "The Slave Pens · เริ่มจาก Utula",
    "headingEN": "The Slave Pens · start with Utula",
    "place": "The Slave Pens",
    "quest": "Return to Oriath",
    "dialogueIds": [
      254,
      255,
      256,
      257,
      258,
      259,
      260,
      261
    ],
    "loreIds": [],
    "waypointIds": [
      42
    ],
    "sidequestIds": [],
    "actions": [
      "เปิด Waypoint ใน The Slave Pens และฟังคำแนะนำ Utula เมื่อพบตัวละคร",
      "เก็บหัวข้อ Introduction, Justicar Casticus, Slave Pens, Overseer's Tower, Kitava, Innocence, Templar Court และ Avarius ตามสถานะที่เปิด",
      "หากหัวข้อใดยังไม่เปิด ให้ย้อนกลับมาคุยก่อนฆ่า High Templar Avarius เพราะ Utula อาจหายไปจากเมือง"
    ],
    "actionsEN": [
      "Activate The Slave Pens Waypoint and speak to Utula when available.",
      "Check Utula's Introduction, Justicar Casticus, Slave Pens, Overseer's Tower, Kitava, Innocence, Templar Court and High Templar Avarius topics as they unlock.",
      "Revisit Utula before defeating High Templar Avarius: his dialogue may become unavailable."
    ],
    "stop": "อย่าเพิ่งฆ่า High Templar Avarius จนกว่าจะตรวจหัวข้อ Utula ที่เปิดอยู่",
    "stopEN": "Do not defeat High Templar Avarius until you have checked all currently available Utula topics.",
    "stopIds": [
      254
    ],
    "keyItems": [],
    "confidence": "historical-source-only"
  },
  {
    "id": "tower-intros",
    "heading": "Overseer's Tower · รู้จัก Lani และ Vilenta",
    "headingEN": "Overseer's Tower · meet Lani and Vilenta",
    "place": "Overseer's Tower",
    "quest": "The Key to Freedom",
    "dialogueIds": [
      262,
      263,
      264,
      265,
      266,
      267,
      268,
      269,
      270,
      271,
      272,
      273,
      274
    ],
    "loreIds": [],
    "waypointIds": [
      43
    ],
    "sidequestIds": [],
    "actions": [
      "เปิด Waypoint Overseer's Tower แล้วคุย Lani และ Vilenta พร้อมกลับไปฟัง Utula",
      "เก็บ Introduction และหัวข้อข้ามตัวละคร Lani, Vilenta, Utula ตามที่ปลดล็อก",
      "ฟัง Vilenta: Piety ก่อน Vilenta: Research (ID 271) ซึ่งเป็นหัวข้อที่เปิดภายหลัง"
    ],
    "actionsEN": [
      "Activate the Overseer's Tower Waypoint and talk to Lani and Vilenta; return to Utula when new topics appear.",
      "Collect the cross-NPC topics about Lani, Vilenta and Utula.",
      "Listen to Vilenta's Piety topic before checking Research (ID 271), which unlocks afterward."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [],
    "confidence": "historical-source-only"
  },
  {
    "id": "casticus-return",
    "heading": "The Control Blocks · หลัง Casticus ต้องกลับหา Utula",
    "headingEN": "The Control Blocks · return to Utula after Casticus",
    "place": "The Control Blocks / Overseer's Tower",
    "quest": "The Key to Freedom / In Service to Science",
    "dialogueIds": [
      275
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [
      10
    ],
    "actions": [
      "เข้า The Control Blocks เพื่อทำ The Key to Freedom และหา Miasmeter ของเควสต์ In Service to Science",
      "เมื่อจัดการ Justicar Casticus แล้ว ให้กลับ Overseer's Tower คุย Utula หัวข้อ Justicar Casticus (ID 275) ก่อนสู้ Avarius",
      "ส่ง Miasmeter ให้ Vilenta และติ๊กเควสต์รองเมื่อเกมแสดงว่าสำเร็จจริง"
    ],
    "actionsEN": [
      "Enter The Control Blocks for The Key to Freedom and recover the Miasmeter for In Service to Science.",
      "After defeating Justicar Casticus, return to Overseer's Tower and hear Utula: Justicar Casticus (ID 275).",
      "Return the Miasmeter to Vilenta and mark No Loose Ends only once the optional quest has actually completed."
    ],
    "stop": "หยุดก่อนสู้ High Templar Avarius: ต้องกลับไปฟัง Utula: Justicar Casticus (ID 275) หลังจัดการ Casticus",
    "stopEN": "Do not kill High Templar Avarius before hearing Utula: Justicar Casticus after Casticus falls.",
    "stopIds": [
      275
    ],
    "keyItems": [
      "Miasmeter",
      "Eyes of Zeal"
    ],
    "confidence": "historical-source-only"
  },
  {
    "id": "oriath-courts",
    "heading": "Oriath Square / Templar Courts · ก่อน Innocence",
    "headingEN": "Oriath Square / Templar Courts · before Innocence",
    "place": "Oriath Square / The Templar Courts",
    "quest": "Death to Purity",
    "dialogueIds": [
      276
    ],
    "loreIds": [],
    "waypointIds": [
      44,
      45
    ],
    "sidequestIds": [],
    "actions": [
      "เปิด Waypoint Oriath Square และ The Templar Courts ตามเส้นทาง",
      "เก็บ Lani: Oriath Square (ID 276) ระหว่างเดินเรื่อง Death to Purity",
      "ตรวจว่าได้ฟัง Utula หลัง Casticus แล้วก่อนเดินหน้าไปสู้ Avarius"
    ],
    "actionsEN": [
      "Activate Oriath Square and The Templar Courts Waypoints.",
      "Check Lani: Oriath Square (ID 276) while progressing Death to Purity.",
      "Confirm the post-Casticus Utula dialogue before advancing to Avarius."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [
      "Eyes of Zeal"
    ],
    "confidence": "historical-source-only"
  },
  {
    "id": "innocence-lore",
    "heading": "Chamber of Innocence · อ่านภาพกระจกก่อนบอส",
    "headingEN": "Chamber of Innocence · read stained-glass lore",
    "place": "The Chamber of Innocence",
    "quest": "Death to Purity",
    "dialogueIds": [],
    "loreIds": [
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103
    ],
    "waypointIds": [
      46
    ],
    "sidequestIds": [],
    "actions": [
      "เปิด Waypoint The Chamber of Innocence แล้วสำรวจ Stained Glass Window ทั้ง 8 รายการและ Triumph of Innocence",
      "ตรวจชื่อ Lore ทีละรายการก่อนออกจากห้อง ไม่เดาว่าอ่านภาพบานอื่นแทนกันได้",
      "หลังชนะ Innocence ต้องหยุดคุย Sin ทันที ก่อนออกจาก The Chamber of Innocence"
    ],
    "actionsEN": [
      "Activate The Chamber of Innocence Waypoint; read eight distinct Stained Glass Windows and Triumph of Innocence.",
      "Check each lore title individually; different stained-glass panels are not interchangeable.",
      "After defeating Innocence, stop and speak to Sin before leaving the chamber."
    ],
    "stop": "หลังชนะ Innocence ต้องกลับตรวจบทสนทนา Sin ในห้องนี้ก่อนออก",
    "stopEN": "After defeating Innocence, speak to Sin inside the same chamber before leaving.",
    "stopIds": [],
    "keyItems": [],
    "confidence": "historical-source-only"
  },
  {
    "id": "innocence-sin",
    "heading": "หลังชนะ Innocence · ฟัง Sin ก่อนออก",
    "headingEN": "After Innocence · speak to Sin before leaving",
    "place": "The Chamber of Innocence",
    "quest": "Death to Purity",
    "dialogueIds": [
      277
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "หลังชนะ Innocence ให้หยุดอยู่ใน The Chamber of Innocence และคุย Sin หัวข้อ Innocence (ID 277)",
      "ฟังจนจบและตรวจรายการที่เก็บแล้วในเว็บก่อนออกจากห้อง"
    ],
    "actionsEN": [
      "After defeating Innocence, immediately listen to Sin: Innocence (ID 277) in The Chamber of Innocence.",
      "Do not leave this zone before you have actually heard and recorded Sin's dialogue."
    ],
    "stop": "หยุดก่อนออกจาก The Chamber of Innocence: ต้องฟัง Sin: Innocence (ID 277) หลังสู้บอส",
    "stopEN": "Do not leave The Chamber of Innocence before listening to Sin: Innocence.",
    "stopIds": [
      277
    ],
    "keyItems": [],
    "confidence": "historical-source-only",
    "visual": {
      "asset": "./assets/act5-innocence-sin.svg",
      "title": "Death to Purity · STOP before leaving",
      "alt": "ภาพจำลองหน้า Quest Death to Purity ระบุการคุย Sin ก่อนออกจากพื้นที่ ไม่ใช่ภาพหน้าจอเกมจริง",
      "check": "หลังเอาชนะ Innocence คุย Sin: Innocence (ID 277) ใน Chamber of Innocence ก่อนออกจากพื้นที่",
      "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_5",
      "status": "mock-not-in-game"
    }
  },
  {
    "id": "vilenta-after",
    "heading": "หลัง Innocence · กลับคุย Vilenta",
    "headingEN": "After Innocence · revisit Vilenta",
    "place": "Overseer's Tower",
    "quest": "Death to Purity",
    "dialogueIds": [
      278,
      279,
      280,
      281,
      282
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "กลับคุย Vilenta ที่เมืองหลังจัดการ Innocence แล้ว",
      "ตรวจหัวข้อ Utula, The Sign of Purity, Gods, Innocence และ Chitus Cathedral ที่ปลดล็อก",
      "บทสนทนาของ Vilenta เป็นอีกสถานะหนึ่งจากช่วงก่อน Avarius"
    ],
    "actionsEN": [
      "Return to Vilenta in town after defeating Innocence.",
      "Check the newly available Utula, The Sign of Purity, Gods, Innocence and Chitus Cathedral topics.",
      "These are post-Innocence dialogue states, distinct from the pre-Avarius choices."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [],
    "confidence": "historical-source-only"
  },
  {
    "id": "bannon-chamber",
    "heading": "พบ Bannon · เก็บหัวข้อใหม่หลัง Innocence",
    "headingEN": "Meet Bannon · post-Innocence topics",
    "place": "The Chamber of Innocence / Overseer's Tower",
    "quest": "The King's Feast",
    "dialogueIds": [
      283,
      284,
      285,
      286,
      287,
      288,
      289,
      290
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "คุย Bannon ใน The Chamber of Innocence แล้วกลับสำรวจหัวข้อที่เปิด",
      "เก็บ Introduction, Utula, Overseer's Tower, Innocence, The Sign of Purity, The Ossuary, Lani และ Vilenta",
      "กลับคุยตามสถานะก่อนทำ The King's Feast / The Ravenous God ไปไกล"
    ],
    "actionsEN": [
      "Speak to Bannon in The Chamber of Innocence and revisit his newly unlocked dialogue.",
      "Check Introduction, Utula, Overseer's Tower, Innocence, The Sign of Purity, The Ossuary, Lani and Vilenta.",
      "Recheck his available topics before progressing further into The King's Feast and The Ravenous God."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [],
    "confidence": "historical-source-only"
  },
  {
    "id": "ruined-square",
    "heading": "Ruined Square · กลับตรวจ Lani และ Vilenta",
    "headingEN": "Ruined Square · recheck Lani and Vilenta",
    "place": "The Ruined Square / Overseer's Tower",
    "quest": "The King's Feast",
    "dialogueIds": [
      291,
      292,
      293,
      294
    ],
    "loreIds": [],
    "waypointIds": [
      47
    ],
    "sidequestIds": [],
    "actions": [
      "เปิด Waypoint The Ruined Square แล้วดำเนินเควสต์ The King's Feast ตามเกม",
      "กลับเมืองคุย Lani: Bannon, The King's Feast, Cult of Kitava และ Vilenta: Bannon",
      "อย่าสรุปว่าหัวข้อที่เปิดหลังคุย Bannon จะมีตั้งแต่ต้น Act"
    ],
    "actionsEN": [
      "Activate The Ruined Square Waypoint and progress The King's Feast.",
      "Return to town to hear Lani: Bannon, The King's Feast and Cult of Kitava, plus Vilenta: Bannon.",
      "These follow-up topics may unlock only after meeting Bannon."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [],
    "confidence": "historical-source-only"
  },
  {
    "id": "reliquary",
    "heading": "Reliquary · เก็บสิ่งของและ Lore ให้ครบ",
    "headingEN": "Reliquary · collect quest items and lore",
    "place": "The Reliquary",
    "quest": "Kitava's Torments",
    "dialogueIds": [],
    "loreIds": [
      104,
      105,
      106
    ],
    "waypointIds": [
      48
    ],
    "sidequestIds": [
      11
    ],
    "actions": [
      "เปิด Waypoint The Reliquary อ่าน Kitava's Hunger I, II, III แยกตามชื่อ",
      "หา Hinekora's Hair, Tukohama's Tooth และ Valako's Jaw ให้ครบตามเควสต์ Kitava's Torments",
      "กลับส่งของให้ Lani และติ๊ก No Loose Ends เมื่อเควสต์สำเร็จจริง"
    ],
    "actionsEN": [
      "Activate The Reliquary Waypoint and read Kitava's Hunger I, II and III separately.",
      "Collect Hinekora's Hair, Tukohama's Tooth and Valako's Jaw for Kitava's Torments.",
      "Return the three items to Lani; mark No Loose Ends only after the quest actually completes."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [
      "Hinekora's Hair",
      "Tukohama's Tooth",
      "Valako's Jaw"
    ],
    "confidence": "historical-source-only"
  },
  {
    "id": "ossuary-sin",
    "heading": "The Ossuary · คุย Sin ก่อนออก",
    "headingEN": "The Ossuary · speak to Sin before leaving",
    "place": "The Ossuary",
    "quest": "The Ravenous God",
    "dialogueIds": [
      295
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "เข้า The Ossuary และเก็บ Sign of Purity ตามเควสต์ The Ravenous God",
      "หลังได้ Sign of Purity แต่ยังอยู่ในพื้นที่ ให้คุย Sin หัวข้อ The Sign of Purity (ID 295)",
      "ฟังให้จบแล้วจึงออกจาก The Ossuary"
    ],
    "actionsEN": [
      "Find the Sign of Purity in The Ossuary for The Ravenous God.",
      "After obtaining it, listen to Sin: The Sign of Purity (ID 295) while still inside The Ossuary.",
      "Do not leave this zone before listening to the dialogue."
    ],
    "stop": "หยุดก่อนออกจาก The Ossuary: หลังเก็บ Sign of Purity ต้องฟัง Sin: The Sign of Purity (ID 295)",
    "stopEN": "Do not leave The Ossuary after obtaining the Sign of Purity until you have spoken to Sin.",
    "stopIds": [
      295
    ],
    "keyItems": [
      "Sign of Purity"
    ],
    "confidence": "historical-source-only",
    "visual": {
      "asset": "./assets/act5-ossuary-sign.svg",
      "title": "The Ravenous God · STOP before exiting",
      "alt": "ภาพจำลองหน้า Quest The Ravenous God ระบุการคุย Sin ก่อนออกจากพื้นที่ ไม่ใช่ภาพหน้าจอเกมจริง",
      "check": "หลังเก็บ Sign of Purity ให้คุย Sin: The Sign of Purity (ID 295) ใน The Ossuary ก่อนออกจากพื้นที่",
      "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_5",
      "status": "mock-not-in-game"
    }
  },
  {
    "id": "kitava-after",
    "heading": "หลัง Kitava · ตรวจบทสนทนาปิด Act",
    "headingEN": "After Kitava · review final dialogue",
    "place": "The Cathedral Rooftop / Overseer's Tower",
    "quest": "The Ravenous God",
    "dialogueIds": [
      296,
      297
    ],
    "loreIds": [],
    "waypointIds": [
      49
    ],
    "sidequestIds": [],
    "actions": [
      "เปิด Waypoint The Cathedral Rooftop แล้วเดินเรื่อง The Ravenous God ตามปกติ",
      "หลังสู้ Kitava ให้ฟัง Sin: Kitava และ Vilenta: Kitava (ID 296–297) ตามจุดที่พบ",
      "ก่อนข้าม Act ให้เทียบยอด All Ears, Lore, Waypoint และเควสต์รองกับเกมจริง"
    ],
    "actionsEN": [
      "Activate The Cathedral Rooftop Waypoint and progress The Ravenous God.",
      "After fighting Kitava, hear Sin: Kitava and Vilenta: Kitava (IDs 296–297) when available.",
      "Before continuing, compare All Ears, Lore, Waypoint and sidequest totals against your in-game Achievements."
    ],
    "stop": "อย่าออกจาก Act 5 ก่อนตรวจบทสนทนาหลัง Kitava",
    "stopEN": "Before leaving Act 5, check the post-Kitava dialogue.",
    "stopIds": [
      296,
      297
    ],
    "keyItems": [],
    "confidence": "historical-source-only"
  }
];
})();
