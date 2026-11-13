/* Act 10: historical source-led stages, not 3.30 gameplay-certified. Karui Shores dialogue excluded from original 484. */
(function(){
"use strict";const guide=window.POE_STEAM_WALK;if(!guide||guide.patchCertified!==false||guide.acts[10])throw Error("Cannot attach Act10 guide");
guide.acts[10]=[
  {
    "id": "oriath-docks-intro",
    "place": "Oriath Docks",
    "heading": "เริ่ม Act 10 · คุยทุกคนที่ Oriath Docks",
    "headingEN": "Start Act 10 · speak to everyone at Oriath Docks",
    "quest": "Safe Passage / Death and Rebirth",
    "dialogueIds": [
      453,
      454,
      455,
      456,
      457,
      458,
      459,
      460,
      461,
      462,
      463,
      464,
      465,
      466,
      469,
      470,
      467,
      468
    ],
    "loreIds": [],
    "waypointIds": [
      85
    ],
    "sidequestIds": [],
    "actions": [
      "มาถึง Oriath Docks แล้วเปิด Waypoint ก่อนเดินเรื่องต่อ",
      "ฟัง Sin, Lilly Roth, Weylam Roth และ Lani ทุกหัวข้อที่เปิด รวมถึง Welcome, Trading, Vilenta, Kitava และ The Dark Ember",
      "กลับไปคุย Lani: Lilly หลังรู้จัก Lilly Roth และ Lani: Weylam หลังคุย Weylam แล้ว อย่าติ๊กหัวข้อจากการเจอ NPC โดยไม่ได้ฟัง"
    ],
    "actionsEN": [
      "Upon arrival at Oriath Docks, activate its Waypoint.",
      "Speak to Sin, Lilly Roth, Weylam Roth and Lani about their available topics, including Welcome, Trading, Vilenta, Kitava and The Dark Ember.",
      "After meeting Lilly and Weylam, revisit Lani for Lilly and Weylam topics; check each only after hearing it."
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
    "id": "ravaged-bannon",
    "place": "The Cathedral Rooftop / The Ravaged Square",
    "heading": "ช่วย Bannon และเก็บ Cultist Tract แผ่นแรก",
    "headingEN": "Reach Bannon and collect the first Cultist Tract",
    "quest": "Safe Passage",
    "dialogueIds": [
      473,
      474,
      475,
      476,
      477,
      478
    ],
    "loreIds": [
      122
    ],
    "waypointIds": [
      86
    ],
    "sidequestIds": [],
    "actions": [
      "ผ่าน The Cathedral Rooftop ไป The Ravaged Square เปิด Waypoint แล้วค้น Cultist Tract - Relish In Hunger (#122)",
      "คุยกับ Bannon ในช่วงที่เควสต์ Safe Passage เปิด แล้วฟัง Welcome Back, Kitava's Cultists, Kitava, Innocence, Chamber of Innocence และ Kitava's Horns",
      "ตรวจทุกหัวข้อก่อนเปลี่ยนสถานะ Death and Rebirth; หากเพิ่งพบ Bannon ให้กลับตรวจอีกครั้งหลังส่ง Safe Passage"
    ],
    "actionsEN": [
      "Reach The Ravaged Square through The Cathedral Rooftop, activate its Waypoint and read Cultist Tract - Relish In Hunger (lore #122).",
      "Rescue/speak with Bannon as Safe Passage progresses, and hear Welcome Back, Kitava's Cultists, Kitava, Innocence, Chamber of Innocence and Kitava's Horns.",
      "Check the full list before changing Death and Rebirth quest state; revisit Bannon after Safe Passage if topics were not yet available."
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
    "id": "safe-passage-docks",
    "place": "Oriath Docks",
    "heading": "หลังจบ Safe Passage · คุย Lilly: Tsoatha",
    "headingEN": "After Safe Passage · hear Lilly on Tsoatha",
    "quest": "Safe Passage / Map to Tsoatha",
    "dialogueIds": [
      471,
      472
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "หลังช่วย Bannon และจบ Safe Passage ให้กลับ Oriath Docks คุย Lilly Roth: Tsoatha (#471)",
      "ฟัง Lilly Roth: The Teardrop (#472) หลังเปิดหัวข้อที่เกี่ยวข้อง แล้วรับ Map to Tsoatha",
      "อย่าเข้าใจผิดว่า Map to Tsoatha คือการเก็บบทสนทนาเท่านั้น ยังต้องหา The Teardrop และกลับส่งให้ Lilly"
    ],
    "actionsEN": [
      "After rescuing Bannon and completing Safe Passage, return to Oriath Docks and hear Lilly Roth: Tsoatha (#471).",
      "Hear Lilly Roth: The Teardrop (#472) when available, and accept Map to Tsoatha.",
      "Map to Tsoatha is a separate optional quest: find The Teardrop and return it to Lilly; hearing this dialogue alone does not complete it."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only",
    "visual": {
      "asset": "./assets/act10-lilly-tsoatha-quest.svg",
      "title": "Safe Passage / Map to Tsoatha · QUEST CHANGES AVAILABLE TOPICS",
      "alt": "ภาพจำลองลำดับเควสต์ Safe Passage / Map to Tsoatha บอกว่าต้องตรวจบทสนทนาเมื่อใด ไม่ใช่ภาพหน้าจอเกมจริง",
      "check": "หลังทำ Safe Passage สำเร็จ ให้คุย Lilly Roth: Tsoatha (#471) และ The Teardrop (#472) ก่อนหา The Teardrop ใน Reliquary และกลับส่งเควสต์",
      "checkEN": "After completing Safe Passage, hear Lilly Roth: Tsoatha (#471) and The Teardrop (#472). Then retrieve The Teardrop from the Reliquary and turn in Map to Tsoatha.",
      "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_10",
      "status": "mock-not-in-game"
    }
  },
  {
    "id": "reliquary-teardrop",
    "place": "The Reliquary",
    "heading": "หา The Teardrop · ส่ง Map to Tsoatha",
    "headingEN": "The Reliquary · recover The Teardrop",
    "quest": "Map to Tsoatha",
    "dialogueIds": [],
    "loreIds": [],
    "waypointIds": [
      89
    ],
    "sidequestIds": [
      29
    ],
    "actions": [
      "จาก The Ravaged Square เข้า The Reliquary แล้วเปิด Waypoint",
      "ค้น The Teardrop ใน The Reliquary นำกลับไปส่ง Lilly Roth ที่ Oriath Docks เพื่อจบ Map to Tsoatha",
      "ติ๊กเควสต์รอง No Loose Ends เฉพาะหลังส่งไอเท็มและรับรางวัลจริง"
    ],
    "actionsEN": [
      "Enter The Reliquary from The Ravaged Square and activate its Waypoint.",
      "Find The Teardrop and return it to Lilly Roth at Oriath Docks to complete Map to Tsoatha.",
      "Check the side quest only after handing in the item and confirming completion."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [
      "The Teardrop"
    ],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "ossuary-elixir",
    "place": "The Ossuary",
    "heading": "หา Elixir of Allure · ส่ง Weylam",
    "headingEN": "The Ossuary · collect Elixir of Allure",
    "quest": "No Love for Old Ghosts",
    "dialogueIds": [],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [
      30
    ],
    "actions": [
      "รับ No Love for Old Ghosts จาก Weylam Roth แล้วเข้า The Ossuary จาก The Ravaged Square",
      "ค้น Elixir of Allure ใน The Ossuary แล้วนำกลับไปให้ Weylam Roth",
      "ติ๊กเควสต์รองหลังส่ง Elixir จริง และตรวจรางวัล Passive Respec Points ในเกม"
    ],
    "actionsEN": [
      "Accept No Love for Old Ghosts from Weylam Roth and enter The Ossuary from The Ravaged Square.",
      "Recover Elixir of Allure in The Ossuary and return it to Weylam.",
      "Mark the optional quest only after completing the hand-in and checking the in-game Passive Respec Points reward."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [
      "Elixir of Allure"
    ],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "vilenta-controls",
    "place": "The Control Blocks",
    "heading": "เข้าถึง Control Blocks · จัดการ Vilenta",
    "headingEN": "Control Blocks · defeat Vilenta and finish quest",
    "quest": "Vilenta's Vengeance",
    "dialogueIds": [],
    "loreIds": [],
    "waypointIds": [
      88
    ],
    "sidequestIds": [
      28
    ],
    "actions": [
      "รับ Vilenta's Vengeance จาก Lani แล้วเข้า The Control Blocks ที่เชื่อมกับ The Ravaged Square",
      "เปิด Waypoint The Control Blocks ก่อนหา Vilenta และจัดการบอส",
      "กลับคุย Lani รับ Book of Skill / Passive Skill Point แล้วจึงติ๊กเควสต์รอง"
    ],
    "actionsEN": [
      "Accept Vilenta's Vengeance from Lani, then enter The Control Blocks from The Ravaged Square.",
      "Activate The Control Blocks Waypoint before defeating Vilenta.",
      "Return to Lani for the Book of Skill / Passive Skill Point reward before checking the side quest."
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
    "id": "chamber-staff",
    "place": "The Torched Courts / The Desecrated Chambers",
    "heading": "Death and Rebirth · หา Staff of Purity",
    "headingEN": "Death and Rebirth · recover the Staff of Purity",
    "quest": "Death and Rebirth",
    "dialogueIds": [],
    "loreIds": [
      123
    ],
    "waypointIds": [
      87
    ],
    "sidequestIds": [],
    "actions": [
      "ผ่าน The Torched Courts ไป The Desecrated Chambers และเปิด Waypoint",
      "อ่าน Cultist Tract - And Our Father (#123) แล้วค้น The Staff of Purity จาก Chamber of Innocence ที่ถูกทำลาย",
      "นำ The Staff of Purity กลับไป Bannon เพื่อเดินเรื่อง Death and Rebirth; อย่าติ๊กบทสนทนาหลังเควสต์ก่อนจบจริง"
    ],
    "actionsEN": [
      "Enter The Desecrated Chambers via The Torched Courts and activate its Waypoint.",
      "Read Cultist Tract - And Our Father (lore #123) and recover The Staff of Purity from the ruined Chamber of Innocence.",
      "Return The Staff of Purity to Bannon for Death and Rebirth; do not mark post-quest dialogue before completing the quest."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [
      "The Staff of Purity"
    ],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only",
    "visual": {
      "asset": "./assets/act10-bannon-staff-quest.svg",
      "title": "Death and Rebirth · KEEP QUEST-STATE ORDER",
      "alt": "ภาพจำลองลำดับเควสต์ Death and Rebirth บอกว่าต้องตรวจบทสนทนาเมื่อใด ไม่ใช่ภาพหน้าจอเกมจริง",
      "check": "อ่าน Lore Cultist Tract #123 ใน Desecrated Chambers หา Staff of Purity ให้ Bannon และตรวจบทสนทนา Sin: Kitava/Bannon (#479–480), Lilly: Innocence (#481) หลังเควสต์",
      "checkEN": "Read Cultist Tract lore #123, deliver Staff of Purity to Bannon, then check Sin: Kitava / Bannon (#479–480) and Lilly: Innocence (#481) after Death and Rebirth.",
      "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_10",
      "status": "mock-not-in-game"
    }
  },
  {
    "id": "bannon-sacrifice",
    "place": "Oriath Docks",
    "heading": "หลัง Bannon เสียสละ · คุย Sin และ Lilly",
    "headingEN": "After Bannon's sacrifice · check Sin and Lilly",
    "quest": "Death and Rebirth",
    "dialogueIds": [
      479,
      480,
      481
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "เมื่อ Bannon ใช้ The Staff of Purity ปลุก Innocence และจบ Death and Rebirth ให้ตรวจ Sin: Kitava (#479) และ Bannon (#480) ตามจังหวะหัวข้อที่ปลดล็อก",
      "กลับคุย Lilly Roth: Innocence (#481) ซึ่งเปิดหลัง Death and Rebirth",
      "ก่อนเดินไป The Canals ให้ตรวจหัวข้อที่ยังไม่ติ๊ก และเทียบในเกมจริงหาก Bannon ไม่อยู่แล้ว"
    ],
    "actionsEN": [
      "After Bannon uses The Staff of Purity to revive Innocence and Death and Rebirth completes, check Sin: Kitava (#479) and Bannon (#480) when available.",
      "Return to Lilly Roth for Innocence (#481), unlocked after Death and Rebirth.",
      "Before entering The Canals, check remaining dialogue and verify in-game if Bannon is no longer present."
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
    "id": "canals-tract",
    "place": "The Canals",
    "heading": "เก็บ Cultist Tract ใน Canals ก่อนสู้ Kitava",
    "headingEN": "The Canals · read Cultist Tract before Kitava",
    "quest": "An End to Hunger",
    "dialogueIds": [],
    "loreIds": [
      124
    ],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "ผ่าน Kitava's Horns เข้าสู่ The Canals ตามเนื้อเรื่อง",
      "อ่าน Cultist Tract - This Is How (#124) และตรวจยอด No Stone Unturned ก่อนเข้า The Feeding Trough",
      "ห้ามข้าม Lore ชิ้นนี้โดยคิดว่าจะมีโอกาสย้อนกลับได้แน่นอน"
    ],
    "actionsEN": [
      "Pass Kitava's Horns into The Canals as the campaign progresses.",
      "Read Cultist Tract - This Is How (lore #124) before entering The Feeding Trough.",
      "Check the No Stone Unturned counter rather than assuming the lore can always be revisited."
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
    "id": "kitava-after",
    "place": "The Feeding Trough / Oriath Docks",
    "heading": "หลังชนะ Kitava · ตรวจ Lilly และ Innocence",
    "headingEN": "After Kitava · check Lilly and Innocence dialogues",
    "quest": "An End to Hunger",
    "dialogueIds": [
      482,
      483,
      484
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "หลังจบ An End to Hunger / จัดการ Kitava ให้กลับตรวจ Lilly Roth: Kitava (#482) ที่เปิดหลังเควสต์",
      "ฟัง Innocence: Exile (#483) และ Sin (#484) เมื่อพบ Innocence ตามลำดับเนื้อเรื่อง",
      "ก่อนเปลี่ยนไป Epilogue ตรวจ Checklist ทั้ง 4 Achievement กับยอดในเกมจริง; Karui Shores ไม่ได้อยู่ใน All Ears 484 ID ของคู่มือเก่า"
    ],
    "actionsEN": [
      "After completing An End to Hunger and defeating Kitava, check Lilly Roth: Kitava (#482) in the post-quest state.",
      "Listen to Innocence: Exile (#483) and Sin (#484) when available during this concluding sequence.",
      "Before moving to the Epilogue, compare all four achievement counters in the game. Karui Shores dialogues are not included in the historical 484-ID All Ears guide."
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
