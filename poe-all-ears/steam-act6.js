/* Act 6: source-led historical Wiki 2025 + Steam 3.28; NOT patch 3.30 gameplay-certified. */
(function(){
"use strict";
const guide=window.POE_STEAM_WALK;
if(!guide||guide.patchCertified!==false||guide.acts[6])throw Error("Cannot attach Act 6 source route");
guide.acts[6]=[
  {
    "id": "lioneyes-intro",
    "place": "Lioneye's Watch",
    "heading": "กลับ Lioneye's Watch · เริ่มคุย NPC ให้ครบ",
    "headingEN": "Lioneye's Watch · introduce everyone",
    "quest": "Essence of Umbra",
    "dialogueIds": [
      302,
      303,
      304,
      305,
      298,
      300,
      306,
      307,
      309,
      310,
      311,
      314,
      315,
      299,
      301,
      308,
      312,
      313
    ],
    "loreIds": [],
    "waypointIds": [
      50
    ],
    "sidequestIds": [],
    "actions": [
      "เปิด Waypoint Lioneye's Watch แล้วคุย Lilly Roth, Bestel, Tarkleigh และ Sin ให้ครบตามหัวข้อที่ปรากฏ",
      "กลับไปคุย NPC หลังรู้จัก Lilly เพื่อเปิดบทสนทนา Bestel: Lilly, Tarkleigh: Lilly และ Life with Lilly",
      "ฟัง Sin: The Essence of Umbra ก่อน Shavronne's Soul และ The Rise of the Gods ก่อน The Beast"
    ],
    "actionsEN": [
      "Activate Lioneye's Watch Waypoint; speak with Lilly Roth, Bestel, Tarkleigh and Sin about all available topics.",
      "Revisit Bestel and Tarkleigh after meeting Lilly to unlock the related topics, including Life with Lilly.",
      "Listen to Sin: The Essence of Umbra before Shavronne's Soul and The Rise of the Gods before The Beast."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [],
    "confidence": "historical-source-only"
  },
  {
    "id": "twilight-tidal",
    "place": "The Twilight Strand / The Tidal Island / The Coast",
    "heading": "เก็บเควสต์เสริมและ Lore ต้น Act",
    "headingEN": "Early Act 6 · optional quests and lore",
    "quest": "Fallen from Grace / Bestel's Epic",
    "dialogueIds": [
      316,
      317
    ],
    "loreIds": [
      107,
      108
    ],
    "waypointIds": [
      51
    ],
    "sidequestIds": [
      12,
      13
    ],
    "actions": [
      "ทำ Fallen from Grace ที่ The Twilight Strand และอ่าน Message in a Bottle (Lore #107)",
      "ไป The Coast เปิด Waypoint แล้วสำรวจ The Tidal Island เพื่ออ่าน Leatherbound Logbook (#108)",
      "ส่งงาน Fallen from Grace กับ Bestel's Epic ให้สำเร็จจริงก่อนติ๊กเควสต์รอง และฟัง Lilly: Virtue Gems / Trade หลังจบ Fallen from Grace"
    ],
    "actionsEN": [
      "Complete Fallen from Grace at The Twilight Strand and interact with Message in a Bottle (lore #107).",
      "Activate The Coast Waypoint, visit The Tidal Island and discover Leatherbound Logbook (lore #108).",
      "Finish both optional quests before checking them; after Fallen from Grace, ask Lilly about Virtue Gems and Trade."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [],
    "confidence": "historical-source-only"
  },
  {
    "id": "karui-intro",
    "place": "The Mud Flats / Lioneye's Watch",
    "heading": "เห็นทางเข้า Karui Fortress · คุย Sin และ Bestel",
    "headingEN": "Before Karui Fortress · speak to Sin and Bestel",
    "quest": "The Father of War",
    "dialogueIds": [
      318,
      319,
      320
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "พบทางไป The Karui Fortress แล้วกลับคุย Tarkleigh เพื่อเปิดหัวข้อ The Father of War ของ Sin",
      "ฟัง Sin: The Father of War และ Tukohama ตามลำดับ แล้วฟัง Bestel: Tukohama หลังรับเควสต์",
      "ยังไม่ฆ่า Tukohama จนกว่าจะตรวจบทสนทนา Bestel: Tukohama (Wiki #320)"
    ],
    "actionsEN": [
      "Discover the route to The Karui Fortress, speak with Tarkleigh, then listen to Sin: The Father of War and Tukohama.",
      "After receiving The Father of War, hear Bestel: Tukohama (Wiki row #320).",
      "Do not kill Tukohama before you have listened to Bestel's topic."
    ],
    "stop": "ก่อนฆ่า Tukohama ต้องเก็บ Bestel: Tukohama ตามเงื่อนไขเควสต์",
    "stopEN": "Before killing Tukohama, confirm Bestel: Tukohama is heard.",
    "stopIds": [
      320
    ],
    "keyItems": [],
    "confidence": "historical-source-only"
  },
  {
    "id": "eye-before",
    "place": "The Mud Flats / Lioneye's Watch",
    "heading": "ได้ Eye of Conquest · ฟัง Tarkleigh ก่อนใช้",
    "headingEN": "Eye of Conquest · talk before using",
    "quest": "The Father of War",
    "dialogueIds": [
      321
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "หลังเก็บ Eye of Conquest ให้กลับ Lioneye's Watch และคุย Tarkleigh หัวข้อ The Eye of Conquest (ID 321)",
      "ฟังจนจบก่อนนำ Eye of Conquest ไปใช้เปิดทางเข้า The Karui Fortress"
    ],
    "actionsEN": [
      "After obtaining the Eye of Conquest, return to Lioneye's Watch and hear Tarkleigh: The Eye of Conquest (Wiki #321).",
      "Do not use the Eye of Conquest on the Karui Fortress entrance before confirming that dialogue."
    ],
    "stop": "หยุดก่อนใช้ Eye of Conquest: ต้องฟัง Tarkleigh: The Eye of Conquest (ID 321) ให้จบ",
    "stopEN": "STOP: do not use the Eye of Conquest before hearing Tarkleigh's topic.",
    "stopIds": [
      321
    ],
    "keyItems": [
      "Eye of Conquest"
    ],
    "confidence": "historical-source-only"
  },
  {
    "id": "eye-after",
    "place": "The Karui Fortress entrance / Lioneye's Watch",
    "heading": "ใช้ Eye แล้ว · ต้องกลับคุย Tarkleigh ก่อนเข้าป้อม",
    "headingEN": "After using the Eye · talk before entering",
    "quest": "The Father of War",
    "dialogueIds": [
      322,
      323
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "ใช้ Eye of Conquest เปิดประตูแล้วหยุด อย่าเพิ่งเดินเข้า The Karui Fortress",
      "กลับไปคุย Tarkleigh หัวข้อ The Karui Fortress (ID 322) ซึ่งอาจอยู่ในเมนูบทสนทนาเควสต์",
      "ตรวจหัวข้อ Karui Revenants (ID 323) ที่เปิดตามสถานะเกม แล้วจึงกลับไปเข้าป้อม"
    ],
    "actionsEN": [
      "Use the Eye of Conquest to open the gate, but stop before actually entering The Karui Fortress.",
      "Return to Tarkleigh and hear the often-hidden The Karui Fortress quest-topic (Wiki #322).",
      "Check Karui Revenants (Wiki #323) when available before entering the fortress."
    ],
    "stop": "หยุดก่อนเข้า The Karui Fortress: ต้องกลับไปฟัง Tarkleigh: The Karui Fortress (ID 322) หลังใช้ Eye แล้ว",
    "stopEN": "STOP: do not enter The Karui Fortress before Tarkleigh: The Karui Fortress.",
    "stopIds": [
      322
    ],
    "keyItems": [
      "Eye of Conquest"
    ],
    "confidence": "historical-source-only",
    "visual": {
      "asset": "./assets/act6-karui-eye-states.svg",
      "title": "The Father of War · STOP after using the Eye",
      "alt": "ภาพจำลองสถานะเควสต์ The Father of War เพื่อแสดงลำดับบทสนทนาที่ต้องตรวจ ไม่ใช่ภาพหน้าจอเกมจริง",
      "check": "ใช้ Eye of Conquest แล้วกลับคุย Tarkleigh: The Karui Fortress (ID 322) ในหัวข้อ Quest ก่อนเข้าป้อม",
      "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_6",
      "status": "mock-not-in-game"
    }
  },
  {
    "id": "tukohama-after",
    "place": "The Karui Fortress / The Ridge / Lioneye's Watch",
    "heading": "หลัง Tukohama · กลับคุยเรื่อง Shavronne",
    "headingEN": "After Tukohama · return for Shavronne dialogue",
    "quest": "Essence of Umbra / The Father of War",
    "dialogueIds": [
      324,
      325
    ],
    "loreIds": [],
    "waypointIds": [
      52
    ],
    "sidequestIds": [],
    "actions": [
      "หลังจัดการ Tukohama ไป The Ridge และเปิด Waypoint",
      "กลับเมืองคุย Bestel และ Tarkleigh เรื่อง Shavronne of Umbra (#324–325)",
      "ห้ามฆ่า Shavronne the Returned ก่อนตรวจหัวข้อ Bestel: Shavronne of Umbra"
    ],
    "actionsEN": [
      "After defeating Tukohama, reach The Ridge and activate its Waypoint.",
      "Return to town to hear Bestel and Tarkleigh: Shavronne of Umbra (#324–325).",
      "Do not defeat Shavronne the Returned before checking Bestel's Shavronne dialogue."
    ],
    "stop": "ก่อนฆ่า Shavronne the Returned ให้ฟัง Bestel: Shavronne of Umbra",
    "stopEN": "STOP before Shavronne the Returned: hear Bestel: Shavronne of Umbra.",
    "stopIds": [
      324
    ],
    "keyItems": [],
    "confidence": "historical-source-only"
  },
  {
    "id": "shavronne-after",
    "place": "The Prison / Shavronne's Tower",
    "heading": "หลังฆ่า Shavronne · คุย Sin ก่อนออก",
    "headingEN": "After Shavronne · speak to Sin before leaving",
    "quest": "Essence of Umbra",
    "dialogueIds": [
      326
    ],
    "loreIds": [
      109
    ],
    "waypointIds": [
      53
    ],
    "sidequestIds": [],
    "actions": [
      "เปิด Waypoint The Prison และอ่าน Shavronne's Manifesto ใน Shavronne's Tower",
      "หลังสู้ Shavronne the Returned ให้ฟัง Sin: Shavronne (#326)",
      "บันทึกว่าฟังจริงแล้วก่อนออกจากพื้นที่ The Prison (ข้อควรระวังจากคู่มือเก่า)"
    ],
    "actionsEN": [
      "Activate The Prison Waypoint and discover Shavronne's Manifesto inside Shavronne's Tower.",
      "After defeating Shavronne the Returned, listen to Sin: Shavronne (Wiki #326).",
      "Confirm the dialogue before leaving The Prison, following the historic missable guidance."
    ],
    "stop": "หลังฆ่า Shavronne ต้องคุย Sin ก่อนออกจาก The Prison ตามคำเตือนประวัติศาสตร์",
    "stopEN": "After killing Shavronne, speak to Sin before leaving The Prison (historic warning).",
    "stopIds": [
      326
    ],
    "keyItems": [],
    "confidence": "historical-source-only"
  },
  {
    "id": "umbra-complete",
    "place": "Prisoner's Gate / Lioneye's Watch",
    "heading": "จบ Essence of Umbra · กลับตรวจ Tarkleigh",
    "headingEN": "After Essence of Umbra · revisit Tarkleigh",
    "quest": "Essence of Umbra",
    "dialogueIds": [
      327
    ],
    "loreIds": [],
    "waypointIds": [
      54
    ],
    "sidequestIds": [],
    "actions": [
      "ผ่าน Prisoner's Gate เปิด Waypoint แล้วกลับเมืองตรวจเควสต์ Essence of Umbra",
      "ฟัง Tarkleigh: Shavronne of Umbra ที่เปิดหลังจบเควสต์ (#327)",
      "บทสนทนานี้เป็นสถานะหลังเควสต์ ไม่ใช่จุดที่ต้องฟังก่อนฆ่า Shavronne"
    ],
    "actionsEN": [
      "Activate Prisoner's Gate Waypoint and revisit town after completing Essence of Umbra.",
      "Hear Tarkleigh: Shavronne of Umbra (#327), unlocked after the quest completes.",
      "This is a post-quest dialogue, not the earlier pre-Shavronne topic."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [],
    "confidence": "historical-source-only"
  },
  {
    "id": "ryslatha",
    "place": "The Western Forest / The Wetlands",
    "heading": "ก่อน Ryslatha · ฟัง Sin แล้วค่อยจบเควสต์",
    "headingEN": "Before Ryslatha · hear Sin and finish quest",
    "quest": "The Puppet Mistress",
    "dialogueIds": [
      330,
      331
    ],
    "loreIds": [],
    "waypointIds": [
      55
    ],
    "sidequestIds": [
      15
    ],
    "actions": [
      "เริ่ม The Puppet Mistress แล้วคุย Sin: The Puppet Mistress (#328) ก่อนฆ่า Ryslatha",
      "เมื่อฟังแล้วจึงคุย Sin: Ryslatha (#329) ตามหัวข้อที่ปลดล็อก",
      "เดินผ่าน The Western Forest เปิด Waypoint และติ๊ก The Puppet Mistress หลังทำเควสต์สำเร็จจริง"
    ],
    "actionsEN": [
      "After receiving The Puppet Mistress, hear Sin: The Puppet Mistress (Wiki #328) before killing Ryslatha.",
      "Then check Sin: Ryslatha (Wiki #329), which unlocks from the earlier dialogue.",
      "Activate The Western Forest Waypoint and mark The Puppet Mistress only after completing the quest."
    ],
    "stop": "ห้ามฆ่า Ryslatha ก่อนคุย Sin: The Puppet Mistress",
    "stopEN": "STOP: do not kill Ryslatha before hearing Sin: The Puppet Mistress.",
    "stopIds": [
      330
    ],
    "keyItems": [],
    "confidence": "historical-source-only"
  },
  {
    "id": "abberath",
    "place": "The Riverways / The Valley of the Fire Drinker",
    "heading": "The Cloven One · ฟัง Sin ก่อนเข้าพื้นที่",
    "headingEN": "The Cloven One · ask Sin before entering",
    "quest": "The Cloven One",
    "dialogueIds": [
      328,
      329
    ],
    "loreIds": [],
    "waypointIds": [
      56
    ],
    "sidequestIds": [
      14
    ],
    "actions": [
      "รับเควสต์ The Cloven One จาก Bestel แล้วกลับคุย Sin: The Cloven One (#330)",
      "ตรวจ Sin: Abberath (#331) หลังเปิดบทสนทนาแรก",
      "ก่อนเข้า The Valley of the Fire Drinker ให้ฟังครบ แล้วเปิด The Riverways Waypoint; ติ๊กเควสต์รองหลังสำเร็จจริง"
    ],
    "actionsEN": [
      "Start The Cloven One from Bestel, then listen to Sin: The Cloven One (Wiki #330).",
      "Listen to Sin: Abberath (#331) after the first topic unlocks.",
      "Before entering The Valley of the Fire Drinker, check these conversations. Activate The Riverways Waypoint and mark the quest only when completed."
    ],
    "stop": "อย่าเข้า The Valley of the Fire Drinker ก่อนฟัง Sin: The Cloven One",
    "stopEN": "STOP: do not enter The Valley of the Fire Drinker before Sin: The Cloven One.",
    "stopIds": [
      328
    ],
    "keyItems": [],
    "confidence": "historical-source-only"
  },
  {
    "id": "nessa-ships",
    "place": "Prisoner's Gate / The Southern Forest",
    "heading": "หลังพบ Nessa · ฟัง Bestel และ Tarkleigh ก่อนเข้า Western Forest",
    "headingEN": "After meeting Nessa · speak to Bestel and Tarkleigh before Western Forest",
    "quest": "The Brine King",
    "dialogueIds": [
      332,
      333
    ],
    "loreIds": [],
    "waypointIds": [
      57
    ],
    "sidequestIds": [],
    "actions": [
      "หลังพบ Nessa ที่ Prisoner's Gate ให้กลับ Lioneye's Watch เพื่อคุย Bestel และ Tarkleigh เรื่อง The Ship Graveyard ทั้งสองหัวข้อ",
      "สำหรับ Bestel: The Ship Graveyard (ID 332) ฐานข้อมูลเดิมเตือนก่อนเข้า The Western Forest ขณะที่ PoE Wiki 2025 เพียงระบุว่าหัวข้อเปิดหลังคุย Nessa",
      "สำหรับ Tarkleigh: The Ship Graveyard (ID 333) PoE Wiki ระบุให้ฟังก่อนเข้า The Cavern of Anger ตรวจทั้งสองหัวข้อทันทีเพื่อไม่ต้องเสี่ยงกับจุดเปลี่ยนสถานะ"
    ],
    "actionsEN": [
      "After speaking to Nessa in Prisoner's Gate, return to Lioneye's Watch and hear both Bestel and Tarkleigh: The Ship Graveyard.",
      "For Bestel: The Ship Graveyard (local ID 332), the legacy checklist says before entering The Western Forest, whereas PoE Wiki 2025 only documents the topic unlocking after Nessa.",
      "For Tarkleigh: The Ship Graveyard (ID 333), the Wiki warns before entering The Cavern of Anger. Check both as soon as they unlock; these different deadlines are not gameplay-verified in 3.29."
    ],
    "stop": "หยุดตรวจหลังคุย Nessa: ฟัง Bestel: The Ship Graveyard (ID 332) ก่อนเข้า The Western Forest ตามข้อมูลเดิม และ Tarkleigh หัวข้อเดียวกัน (ID 333) ก่อนเข้า The Cavern of Anger ตาม Wiki",
    "stopEN": "STOP: after meeting Nessa, check Bestel: The Ship Graveyard (ID 332) before The Western Forest (legacy precaution) and Tarkleigh: The Ship Graveyard (ID 333) before The Cavern of Anger (Wiki).",
    "stopIds": [
      332,
      333
    ],
    "keyItems": [],
    "confidence": "historical-source-only",
    "sourceNote": "ข้อมูลเดิม #332 เตือนก่อนเข้า Western Forest แต่ PoE Wiki 2025 ระบุเพียงว่าเปิดหลังคุย Nessa ที่ Prisoner's Gate; ส่วน #333 Wiki เตือนก่อนเข้า Cavern of Anger จึงแยกสองเส้นตายและแนะนำให้ฟังทันทีเมื่อหัวข้อเปิด ยังไม่มีผลทดสอบกับเกม 3.29 ยืนยันว่า #332 หายเมื่อเข้า Western Forest",
    "sourceNoteEN": "Legacy #332 warns before entering The Western Forest; PoE Wiki 2025 only lists speaking to Nessa in Prisoner's Gate as its prerequisite. Wiki #333 warns before The Cavern of Anger. These are different deadlines: hear both immediately. No 3.29 gameplay test proves #332 disappears on entering the Western Forest."
  },
  {
    "id": "cavern-sin",
    "place": "The Cavern of Anger",
    "heading": "The Cavern of Anger · ฟัง Sin หลังพบ Nessa",
    "headingEN": "Cavern of Anger · check Sin after meeting Nessa",
    "quest": "The Brine King",
    "dialogueIds": [
      334,
      335
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "หลังคุย Nessa ใน The Cavern of Anger ให้เปิดหัวข้อ Sin: The Brine King (#334)",
      "ตรวจ Sin: Tsoagoth (#335) ต่อเมื่อปลดล็อก",
      "เก็บบทสนทนาให้ครบก่อนเดินต่อไปยัง The Beacon"
    ],
    "actionsEN": [
      "After speaking with Nessa in The Cavern of Anger, listen to Sin: The Brine King (Wiki #334).",
      "Check Sin: Tsoagoth (#335) when it unlocks.",
      "Confirm both Sin topics before heading for The Beacon."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [],
    "confidence": "historical-source-only"
  },
  {
    "id": "beacon-flag",
    "place": "The Beacon / Lioneye's Watch",
    "heading": "The Black Flag · กลับคุย Lilly ก่อนเข้า Beacon",
    "headingEN": "The Black Flag · talk to Lilly before entering the Beacon",
    "quest": "The Brine King",
    "dialogueIds": [
      336,
      337
    ],
    "loreIds": [
      110,
      111
    ],
    "waypointIds": [
      58
    ],
    "sidequestIds": [],
    "actions": [
      "เมื่อได้ The Black Flag ให้กลับ Lioneye's Watch ฟัง Lilly Roth: The Black Flag (ID 336) ก่อนเข้า The Beacon ตามข้อมูลเก่า; PoE Wiki กำหนดอย่างช้าที่สุดก่อนเผาธง",
      "เมื่อเข้า The Beacon ให้ฟัง Lilly Roth: The Brine King (#337) ตามเงื่อนไขที่เปิด",
      "เปิด Waypoint The Beacon และอ่าน Letter Fragment / Templar Report (#110–111) ก่อนออกจากพื้นที่"
    ],
    "actionsEN": [
      "Once you obtain The Black Flag, return to Lilly Roth in Lioneye's Watch and hear The Black Flag (ID 336) BEFORE entering The Beacon according to legacy data; the 2025 Wiki states no later than burning the flag.",
      "On entering The Beacon, check Lilly Roth: The Brine King (#337) when available.",
      "Activate The Beacon Waypoint and discover Letter Fragment and Templar Report (#110–111)."
    ],
    "stop": "หยุดก่อนเข้า The Beacon: ต้องคุย Lilly Roth: The Black Flag (ID 336) ให้ครบก่อน ข้อมูลเก่าเตือนเร็วกว่าจุดเผาธงใน Wiki",
    "stopEN": "STOP: hear Lilly Roth: The Black Flag (ID 336) BEFORE entering The Beacon (early legacy caution). The 2025 Wiki cautions before burning the flag.",
    "stopIds": [
      336
    ],
    "keyItems": [
      "The Black Flag"
    ],
    "sourceNote": "ข้อควรระวังเรื่องกำหนดเวลา: ข้อมูลเดิมของ ID 336 เตือนก่อนเข้า The Beacon แต่ PoE Wiki ปี 2025 เตือนก่อนเผา The Black Flag ใช้เงื่อนไขที่เร็วกว่าเพื่อเลี่ยงความเสี่ยง โดยยังไม่มีผลทดสอบ 3.29 ยืนยันว่าการเข้า Beacon ทำให้หัวข้อหาย",
    "sourceNoteEN": "Deadline discrepancy: legacy checklist ID 336 cautions before entering The Beacon, while the 2025 PoE Wiki warns before burning The Black Flag. Follow the earlier precaution; there is no 3.29 game evidence here that entering the Beacon makes the topic disappear.",
    "confidence": "historical-source-only"
  },
  {
    "id": "reef-weylam",
    "place": "The Brine King's Reef",
    "heading": "ถึง Reef แล้ว · ต้องคุย Weylam 2 หัวข้อก่อนสู้",
    "headingEN": "Brine King's Reef · talk to Weylam twice before boss",
    "quest": "The Brine King",
    "dialogueIds": [
      338,
      339
    ],
    "loreIds": [
      112
    ],
    "waypointIds": [
      59
    ],
    "sidequestIds": [],
    "actions": [
      "เมื่อถึง The Brine King's Reef ให้ตรวจ Waypoint และอ่าน Shrine to the Brine King (Lore ID 112)",
      "ก่อนสู้ Tsoagoth ให้คุย Weylam Roth สองหัวข้อ คือ The Brine King's Reef (ID 338) และ The Brine King (ID 339)",
      "ฟังครบทั้งสองหัวข้อและตรวจเครื่องหมายแล้ว จึงค่อยสู้ Tsoagoth"
    ],
    "actionsEN": [
      "On reaching The Brine King's Reef, activate the Waypoint and discover Shrine to the Brine King (lore #112).",
      "Before defeating Tsoagoth, listen to BOTH Weylam Roth topics: The Brine King's Reef (#338) and The Brine King (#339).",
      "Verify that both dialogues were heard before beginning the boss encounter."
    ],
    "stop": "หยุดก่อนฆ่า Tsoagoth: ต้องฟัง Weylam Roth ทั้งสองหัวข้อ (ID 338 และ 339)",
    "stopEN": "STOP: do not kill Tsoagoth before hearing both Weylam Roth dialogues.",
    "stopIds": [
      338,
      339
    ],
    "keyItems": [],
    "confidence": "historical-source-only",
    "visual": {
      "asset": "./assets/act6-weylam-brine-reef.svg",
      "title": "The Brine King · STOP before Tsoagoth",
      "alt": "ภาพจำลองสถานะเควสต์ The Brine King เพื่อแสดงลำดับบทสนทนาที่ต้องตรวจ ไม่ใช่ภาพหน้าจอเกมจริง",
      "check": "เมื่อถึง The Brine King's Reef ให้ฟัง Weylam Roth ทั้งสองหัวข้อ (ID 338 และ 339) ก่อนสู้ Tsoagoth",
      "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_6",
      "status": "mock-not-in-game"
    }
  },
  {
    "id": "brine-after",
    "place": "Lioneye's Watch / The Brine King's Reef",
    "heading": "หลังสู้ Brine King · กลับตรวจเมืองก่อน Act 7",
    "headingEN": "After the Brine King · revisit town before Act 7",
    "quest": "The Brine King",
    "dialogueIds": [
      340,
      341
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "หลังจบเควสต์ The Brine King ให้กลับฟัง Lilly Roth: The Brine King และ Bestel: The Brine King (#340–341)",
      "เทียบยอด All Ears, No Stone Unturned, Locomancer และ No Loose Ends กับยอดในเกมก่อนออกจาก Act 6"
    ],
    "actionsEN": [
      "After completing The Brine King, return to Lilly Roth and Bestel for their post-quest dialogue (#340–341).",
      "Compare All Ears, No Stone Unturned, Locomancer and No Loose Ends progress with in-game achievement totals before leaving Act 6."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [],
    "confidence": "historical-source-only"
  }
];
})();
