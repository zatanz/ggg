/* Act 8 source-led historical quest states (PoE Wiki 2025), not gameplay-certified for 3.30. */
(function(){
"use strict";
const guide=window.POE_STEAM_WALK;
if(!guide||guide.patchCertified!==false||guide.acts[8])throw Error("Cannot attach Act 8 source route");
guide.acts[8]=[
  {
    "id": "sarn-intro",
    "place": "The Sarn Ramparts / The Sarn Encampment",
    "heading": "กลับ Sarn · คุย Maramoa, Hargan, Clarissa",
    "headingEN": "Return to Sarn · initial town conversations",
    "quest": "Essence of the Hag",
    "dialogueIds": [
      387,
      388,
      389,
      390,
      392,
      394,
      395,
      396,
      397,
      398
    ],
    "loreIds": [],
    "waypointIds": [
      69,
      70
    ],
    "sidequestIds": [],
    "actions": [
      "ผ่าน The Sarn Ramparts เปิด Waypoint และเข้า The Sarn Encampment เปิด Waypoint อีกจุด",
      "คุย Maramoa: Grigor, Clarissa and Tolman, Gemling Legionnaires; คุย Hargan: Greetings, Clarissa and Tolman, Grigor",
      "คุย Clarissa: Tolman, Grigor, Emperor Veruso และ The Ankh of Eternity ให้ครบก่อนเปลี่ยนสถานะ Love is Dead"
    ],
    "actionsEN": [
      "Activate the Sarn Ramparts and Sarn Encampment Waypoints.",
      "Talk to Maramoa about Grigor, Clarissa and Tolman, and Gemling Legionnaires; then Hargan about Greetings, Clarissa and Tolman, and Grigor.",
      "Talk to Clarissa about Tolman, Grigor, Emperor Veruso and The Ankh of Eternity before changing the Love is Dead quest state."
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
    "id": "sarn-gods-doedre",
    "place": "The Sarn Encampment",
    "heading": "ฟัง Sin เรื่องสุริยะ–จันทรา และคุย Hargan",
    "headingEN": "Sin, Solaris and Lunaris · unlock quest dialogues",
    "quest": "Essence of the Hag / Solar Eclipse / Lunar Eclipse",
    "dialogueIds": [
      399,
      401,
      400,
      402,
      393,
      391
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "ฟัง Sin: The Eternal Sun แล้ว Solaris; ฟัง The Eternal Moon แล้ว Lunaris เพื่อเปิดบทสนทนาตามลำดับ",
      "หลังคุย Maramoa: Gemling Legionnaires ให้ฟัง Hargan: Solaris and Lunaris",
      "รับ Essence of the Hag แล้วคุย Sin ก่อนตรวจ Hargan: Doedre Darktongue (#402) ตามเงื่อนไขของคู่มือ"
    ],
    "actionsEN": [
      "Listen to Sin: The Eternal Sun before Solaris, and The Eternal Moon before Lunaris.",
      "After hearing Maramoa: Gemling Legionnaires, talk to Hargan: Solaris and Lunaris.",
      "Accept Essence of the Hag, speak to Sin, then check Hargan: Doedre Darktongue (Wiki row #402)."
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
    "id": "doedre-cesspool",
    "place": "The Toxic Conduits / Doedre's Cesspool",
    "heading": "หลังชนะ Doedre · คุย Sin ก่อนออก",
    "headingEN": "After Doedre · check Sin before leaving",
    "quest": "Essence of the Hag",
    "dialogueIds": [
      403
    ],
    "loreIds": [],
    "waypointIds": [
      71
    ],
    "sidequestIds": [],
    "actions": [
      "เข้า The Toxic Conduits ต่อไป Doedre's Cesspool แล้วจัดการ Doedre the Vile",
      "หลังสู้ให้คุย Sin: Doedre (ID 403) ตามที่เปิด แล้วตรวจให้ครบก่อนออกจากพื้นที่ตามข้อมูลเก่า (ยังไม่ใช่ผลยืนยันในเกม 3.29)",
      window.POE_APPROVED_GUIDANCE.toxicConduits.th
    ],
    "actionsEN": [
      "Travel from The Toxic Conduits to Doedre's Cesspool and defeat Doedre the Vile.",
      "After the boss, hear Sin: Doedre (ID 403) before leaving as an earlier legacy precaution, not a verified 3.29 miss.",
      window.POE_APPROVED_GUIDANCE.toxicConduits.en
    ],
    "stop": "หลังฆ่า Doedre ให้ตรวจ Sin: Doedre (ID 403) ก่อนออกจาก Doedre's Cesspool ตามข้อควรระวังจากฐานข้อมูลเก่า; PoE Wiki ระบุเพียงว่าหัวข้อเปิดหลังฆ่าบอส",
    "stopEN": "STOP: after defeating Doedre, hear Sin: Doedre (ID 403) before leaving the Cesspool as a legacy precaution. The Wiki documents only the post-boss unlock, not a proven 3.29 exit deadline.",
    "stopIds": [
      403
    ],
    "keyItems": [],
    "sourceNote": "หมายเหตุเดิมกำชับอย่าออกจาก Doedre's Cesspool ก่อนคุย Sin แต่ PoE Wiki 2025 ระบุเพียง 'หลังฆ่า Doedre'; Waypoint #71 ใช้ชื่อ The Toxic Conduits ขณะที่ทางเข้าถึง Waypoint อยู่ฝั่ง Cesspool หลังสู้",
    "sourceNoteEN": "The legacy source says do not leave Doedre's Cesspool before Sin, while Wiki 2025 only says after defeating Doedre. Waypoint #71 is historically named The Toxic Conduits, but its actual activation is reached on the Cesspool side after the fight. No 3.29 gameplay experiment in this project confirms that exiting removes the topic.",
    "confidence": "historical-source-only",
    "visual": {
      "asset": "./assets/act8-doedre-sin-quest.svg",
      "title": "Essence of the Hag · AFTER BOSS · before exit",
      "alt": "ภาพจำลองลำดับเควสต์ Essence of the Hag บอก NPC และบทสนทนาที่ต้องทำก่อนข้ามจุดเสี่ยง ไม่ใช่ภาพหน้าจอเกมจริง",
      "check": "หลังชนะ Doedre ให้คุย Sin: Doedre (ID 403) ตามคำเตือนเก่า ก่อนออกจาก Doedre's Cesspool แล้วตรวจ Waypoint จากแผนที่เกม",
      "checkEN": "After defeating Doedre, hear Sin: Doedre (ID 403) before leaving the Cesspool (legacy source caution). Confirm the shared Waypoint is actually active before checking it.",
      "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_8",
      "status": "mock-not-in-game"
    }
  },
  {
    "id": "doedre-town-orbs",
    "place": "The Sarn Encampment",
    "heading": "หลัง Doedre · ฟัง Maramoa เรื่อง Sun/Moon Orb",
    "headingEN": "After Doedre · return for Sun/Moon topics",
    "quest": "Solar Eclipse / Lunar Eclipse",
    "dialogueIds": [
      404,
      405
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "หลังฆ่า Doedre และปลดล็อกเส้นทาง ให้กลับคุย Maramoa: The Sun Orb (#404) และ The Moon Orb (#405)",
      "ตรวจสองหัวข้อนี้ก่อนเดินทางต่อสาย Solaris/Lunaris; ยังไม่ต้องติ๊ก The Orbs of Sun and Moon (#414–415) ซึ่งเปิดหลังได้ Orb ทั้งคู่"
    ],
    "actionsEN": [
      "After defeating Doedre, return to Maramoa for The Sun Orb (#404) and The Moon Orb (#405).",
      "These topics unlock now; save The Orbs of Sun and Moon dialogues (#414–415) for after you obtain both quest orbs."
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
    "id": "quay-love-pre",
    "place": "The Quay / The Sarn Encampment",
    "heading": "Love is Dead · คุย Hargan ก่อนจบเควสต์",
    "headingEN": "Love is Dead · hear Hargan before completing",
    "quest": "Love is Dead",
    "dialogueIds": [
      407
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "รับเควสต์ Love is Dead จาก Clarissa แล้วไป The Quay เก็บ Ankh of Eternity จาก Sealed Casket",
      "ก่อนนำ Ankh ไปใช้ปิดเควสต์ ให้กลับเมืองคุย Hargan หัวข้อ The Ankh of Eternity (ID 407)",
      "ฟังหัวข้อ Hargan ให้จบก่อนสู้ Tolman หรือส่ง Love is Dead"
    ],
    "actionsEN": [
      "Start Love is Dead with Clarissa; in The Quay recover the Ankh of Eternity from the Sealed Casket.",
      "Before using the Ankh to finish the quest, return to town and hear Hargan: The Ankh of Eternity (Wiki #407).",
      "Do not finish Love is Dead or defeat Tolman before recording Hargan's dialogue."
    ],
    "stop": "หยุดก่อนจบ Love is Dead: ต้องฟัง Hargan: The Ankh of Eternity (ID 407) หลังรับเควสต์",
    "stopEN": "STOP: do not complete Love is Dead before hearing Hargan: The Ankh of Eternity (#407).",
    "stopIds": [
      407
    ],
    "keyItems": [
      "Ankh of Eternity"
    ],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "quay-tolman-after",
    "place": "The Quay",
    "heading": "หลังสู้ Tolman · คุย Clarissa ก่อนออกจาก The Quay",
    "headingEN": "After Tolman · talk to Clarissa before exiting The Quay",
    "quest": "Love is Dead",
    "dialogueIds": [
      411,
      413
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "นำ Ankh of Eternity ไปใช้ที่ Resurrection Site ใน The Quay แล้วสู้ Tolman ตามเควสต์",
      "หลังสู้ ให้คุย Clarissa ภายใน The Quay สองหัวข้อ คือ The Ankh of Eternity (ID 411) และ Tolman (ID 413 ตรงกับ Wiki row 412)",
      "ฟังครบทั้งสองหัวข้อก่อนเดินออกจาก The Quay"
    ],
    "actionsEN": [
      "Use the Ankh of Eternity at the Resurrection Site in The Quay and complete the Tolman encounter.",
      "After the fight, speak with Clarissa: The Ankh of Eternity (local #411) and Tolman (local #413, Wiki row #412) while still in The Quay.",
      "Do not leave The Quay before checking both topics, particularly #411, which the source flags as missable."
    ],
    "stop": "หยุดก่อนออกจาก The Quay: หลังสู้ Tolman ต้องฟัง Clarissa: The Ankh of Eternity (ID 411) และ Tolman (ID 413)",
    "stopEN": "STOP: after killing Tolman, hear Clarissa: The Ankh of Eternity (#411) before leaving The Quay.",
    "stopIds": [
      411,
      413
    ],
    "keyItems": [
      "Ankh of Eternity"
    ],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only",
    "visual": {
      "asset": "./assets/act8-tolman-clarissa-quest.svg",
      "title": "Love is Dead · AFTER TOLMAN · before exit",
      "alt": "ภาพจำลองลำดับเควสต์ Love is Dead บอก NPC และบทสนทนาที่ต้องทำก่อนข้ามจุดเสี่ยง ไม่ใช่ภาพหน้าจอเกมจริง",
      "check": "ก่อนจบ Love is Dead ต้องคุย Hargan: The Ankh of Eternity (ID 407); หลังฆ่า Tolman ต้องคุย Clarissa: The Ankh of Eternity (ID 411) และ Tolman (ID 413) ก่อนออกจาก The Quay",
      "checkEN": "Before finishing Love is Dead hear Hargan: The Ankh of Eternity (#407); after killing Tolman, hear Clarissa: The Ankh of Eternity (#411) and Tolman (#413) before leaving The Quay.",
      "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_8",
      "status": "mock-not-in-game"
    }
  },
  {
    "id": "love-return",
    "place": "The Sarn Encampment",
    "heading": "กลับเมือง · ส่ง Love is Dead และฟัง Maramoa",
    "headingEN": "Return to town · finish Love is Dead and revisit Maramoa",
    "quest": "Love is Dead",
    "dialogueIds": [
      412
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [
      20
    ],
    "actions": [
      "หลังเก็บบทสนทนา Clarissa ใน The Quay แล้ว ให้กลับเมืองส่งเควสต์ Love is Dead กับ Clarissa",
      "ฟัง Maramoa: Clarissa and Tolman (#412 ของฐานข้อมูล, Wiki row 413) หลังสถานะเควสต์เปลี่ยน",
      "ติ๊ก No Loose Ends: Love is Dead เฉพาะหลังส่งเควสต์สำเร็จจริง"
    ],
    "actionsEN": [
      "After completing the Clarissa dialogues in The Quay, return to town and turn in Love is Dead.",
      "Listen to Maramoa: Clarissa and Tolman (local #412, Wiki row #413) when the post-quest topic appears.",
      "Mark the Love is Dead side quest only after its actual completion."
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
    "id": "grain-gate",
    "place": "The Grain Gate",
    "heading": "เก็บ Official Orders และจบ Gemling Legion",
    "headingEN": "Grain Gate · Official Orders and Gemling Legion",
    "quest": "The Gemling Legion",
    "dialogueIds": [],
    "loreIds": [
      121
    ],
    "waypointIds": [
      73
    ],
    "sidequestIds": [
      21
    ],
    "actions": [
      "จาก The Quay เดินไป The Grain Gate แล้วเปิด Waypoint",
      "ค้น Official Orders (Lore #121) ใน The Grain Gate และกำจัด Gemling Legionnaires ตามเควสต์ที่ Maramoa ให้",
      "กลับเมืองส่ง The Gemling Legion แล้วจึงติ๊ก No Loose Ends ไม่ต้องเดาว่าเควสต์สำเร็จจากการฆ่ามอนสเตอร์อย่างเดียว"
    ],
    "actionsEN": [
      "Travel from The Quay to The Grain Gate and activate the Waypoint.",
      "Discover Official Orders (lore #121) and defeat the Gemling Legionnaires for Maramoa's quest.",
      "Return to Maramoa and complete The Gemling Legion before marking the side quest."
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
    "id": "imperial-solaris",
    "place": "The Imperial Fields / The Solaris Temple",
    "heading": "เส้นทาง Solaris · เปิด Waypoint และเก็บ Sun Orb",
    "headingEN": "Solaris branch · Waypoints and Sun Orb",
    "quest": "Solar Eclipse",
    "dialogueIds": [],
    "loreIds": [],
    "waypointIds": [
      74,
      75,
      76
    ],
    "sidequestIds": [],
    "actions": [
      "ไป The Imperial Fields เปิด Waypoint แล้วเข้า The Solaris Temple Level 1 เปิด Waypoint ของ Solaris Temple",
      "เดินต่อเข้า Solaris Temple Level 2 เพื่อหา Sun Orb ตามเควสต์ Solar Eclipse",
      "ไป The Solaris Concourse เปิด Waypoint อีกจุด แล้วตรวจของที่ได้จริงใน Inventory"
    ],
    "actionsEN": [
      "Activate the Imperial Fields Waypoint, then the Solaris Temple Level 1 Waypoint.",
      "Reach Solaris Temple Level 2 and obtain the Sun Orb for Solar Eclipse.",
      "Activate Solaris Concourse Waypoint and confirm the quest item in your inventory."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [
      "Sun Orb"
    ],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "bath-hector",
    "place": "The Grand Promenade / The Bath House",
    "heading": "หา Wings of Vastiri · คุย Hargan เรื่อง Hector",
    "headingEN": "Bath House · get Wings and hear Hargan about Hector",
    "quest": "The Wings of Vastiri",
    "dialogueIds": [
      406
    ],
    "loreIds": [],
    "waypointIds": [
      72
    ],
    "sidequestIds": [],
    "actions": [
      "จาก The Grand Promenade เข้า The Bath House เปิด Waypoint; ในพื้นที่ยังมี Trial of Ascendancy แยกจาก 4 Achievement นี้",
      "เริ่ม The Wings of Vastiri จาก Hargan และฟัง Hargan: Hector Titucius (#406) ก่อนจบเควสต์",
      "ตามหา Hector Titucius ใน Bath House แล้วเก็บ Wings of Vastiri เพื่อนำกลับเมือง"
    ],
    "actionsEN": [
      "From The Grand Promenade reach The Bath House and activate its Waypoint; its Ascendancy Trial is separate from these four achievements.",
      "Start The Wings of Vastiri with Hargan and hear Hargan: Hector Titucius (#406).",
      "Defeat Hector Titucius in The Bath House and collect the Wings of Vastiri to return to town."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [
      "Wings of Vastiri"
    ],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "wings-return",
    "place": "The Sarn Encampment",
    "heading": "ส่ง Wings of Vastiri แล้วเปิดเงื่อนไข Yugul",
    "headingEN": "Turn in Wings of Vastiri · unlock Yugul prerequisites",
    "quest": "The Wings of Vastiri",
    "dialogueIds": [
      408
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [
      22
    ],
    "actions": [
      "นำ Wings of Vastiri ส่งให้ Hargan เพื่อจบเควสต์ แล้วฟัง Hargan: The Wings of Vastiri (#408)",
      "ติ๊ก No Loose Ends: The Wings of Vastiri หลังได้สถานะเควสต์สำเร็จจริง",
      "เมื่อทำเควสต์นี้เสร็จแล้ว จึงเริ่มตรวจบทสนทนาที่จำเป็นก่อนสู้ Yugul"
    ],
    "actionsEN": [
      "Return Wings of Vastiri to Hargan, complete the quest and hear Hargan: The Wings of Vastiri (#408).",
      "Only mark the optional quest completed after actually turning it in.",
      "Completion of this quest unlocks Yugul dialogue prerequisites that must be handled before killing Yugul."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [
      "Wings of Vastiri"
    ],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "yugul-before",
    "place": "The Sarn Encampment / The High Gardens",
    "heading": "ก่อนสู้ Yugul · คุย Sin แล้ว Hargan",
    "headingEN": "Before Yugul · hear Sin, then Hargan",
    "quest": "Reflection of Terror",
    "dialogueIds": [
      409,
      410
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "ทำเควสต์ The Wings of Vastiri ให้เสร็จ แล้วคุย Sin หัวข้อ Yugul (ID 409) ที่เมือง",
      "หลังคุย Sin ให้คุย Hargan หัวข้อ Yugul (ID 410) ต่อ",
      "ฟังครบสองหัวข้อจึงเดินทางผ่าน The Bath House เข้า The High Gardens เพื่อสู้ Yugul"
    ],
    "actionsEN": [
      "After completing The Wings of Vastiri, listen to Sin: Yugul (#409) in town.",
      "Then hear Hargan: Yugul (#410) after Sin's topic becomes available.",
      "Travel via The Bath House to The High Gardens but do not kill Yugul until both conversations have been heard."
    ],
    "stop": "หยุดก่อนฆ่า Yugul: ต้องฟัง Sin: Yugul (ID 409) แล้วต่อด้วย Hargan: Yugul (ID 410)",
    "stopEN": "STOP: do not kill Yugul before hearing Sin: Yugul (#409) AND Hargan: Yugul (#410), in that order.",
    "stopIds": [
      409,
      410
    ],
    "keyItems": [],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only",
    "visual": {
      "asset": "./assets/act8-yugul-preboss-quest.svg",
      "title": "Reflection of Terror · BEFORE BOSS · two NPCs",
      "alt": "ภาพจำลองลำดับเควสต์ Reflection of Terror บอก NPC และบทสนทนาที่ต้องทำก่อนข้ามจุดเสี่ยง ไม่ใช่ภาพหน้าจอเกมจริง",
      "check": "จบ The Wings of Vastiri ก่อน แล้วคุย Sin: Yugul (ID 409) ตามด้วย Hargan: Yugul (ID 410) ก่อนฆ่า Yugul ใน The High Gardens",
      "checkEN": "Complete The Wings of Vastiri, hear Sin: Yugul (#409) then Hargan: Yugul (#410), and only then kill Yugul in The High Gardens.",
      "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_8",
      "status": "mock-not-in-game"
    }
  },
  {
    "id": "yugul-after",
    "place": "The High Gardens / The Sarn Encampment",
    "heading": "หลังฆ่า Yugul · กลับรับรางวัล Reflection of Terror",
    "headingEN": "After Yugul · finish Reflection of Terror",
    "quest": "Reflection of Terror",
    "dialogueIds": [],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [
      23
    ],
    "actions": [
      "เมื่อฟัง Sin และ Hargan ครบแล้ว จึงไป The Pools of Terror ที่ The High Gardens เพื่อจัดการ Yugul",
      "กลับเมืองส่ง Reflection of Terror ให้ NPC ที่เกี่ยวข้อง โดยตรวจสถานะเควสต์และรางวัล Passive Skill Point",
      "ติ๊ก No Loose Ends: Reflection of Terror เฉพาะเมื่อเควสต์จบในเกมจริงแล้ว"
    ],
    "actionsEN": [
      "Only after checking Sin and Hargan, defeat Yugul in The Pools of Terror at The High Gardens.",
      "Return to town to finish Reflection of Terror, checking the quest completion and Passive Skill Point reward.",
      "Mark this side quest only after it is completed in-game."
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
    "id": "lunaris-branch",
    "place": "The Lunaris Concourse / The Lunaris Temple",
    "heading": "เส้นทาง Lunaris · เปิด Waypoint และเก็บ Moon Orb",
    "headingEN": "Lunaris branch · Waypoints and Moon Orb",
    "quest": "Lunar Eclipse",
    "dialogueIds": [],
    "loreIds": [],
    "waypointIds": [
      77,
      78
    ],
    "sidequestIds": [],
    "actions": [
      "ผ่าน The Bath House เข้า The Lunaris Concourse เปิด Waypoint",
      "เข้าสู่ The Lunaris Temple Level 1 เปิด Waypoint แล้วเดินต่อ Level 2",
      "เก็บ Moon Orb จากเควสต์ Lunar Eclipse และตรวจว่ามี Moon Orb ใน Inventory"
    ],
    "actionsEN": [
      "From The Bath House reach The Lunaris Concourse and activate the Waypoint.",
      "Enter Lunaris Temple Level 1 and activate its Waypoint, then reach Level 2.",
      "Obtain the Moon Orb for Lunar Eclipse and confirm it in your inventory."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [
      "Moon Orb"
    ],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "orbs-town",
    "place": "The Sarn Encampment",
    "heading": "เก็บ Sun Orb + Moon Orb ครบ · กลับคุยเมือง",
    "headingEN": "Both Sun and Moon Orbs · revisit town",
    "quest": "Solar Eclipse / Lunar Eclipse",
    "dialogueIds": [
      414,
      415
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "เมื่อได้ Sun Orb และ Moon Orb ครบทั้งสองชิ้น ให้กลับเมืองก่อนสู้ Solaris และ Lunaris",
      "คุย Maramoa: The Orbs of Sun and Moon (#414) และ Hargan: The Orbs of Sun and Moon (#415)",
      "ตรวจว่าได้รับ Orb ทั้งสองจริงแล้วจึงติ๊กบทสนทนา; อย่าสับสนกับหัวข้อ Sun Orb และ Moon Orb หลัง Doedre"
    ],
    "actionsEN": [
      "Once you have BOTH Sun Orb and Moon Orb, return to town before the Solaris/Lunaris boss fight.",
      "Listen to Maramoa: The Orbs of Sun and Moon (#414) and Hargan: The Orbs of Sun and Moon (#415).",
      "Confirm you possess both items; these are separate from the earlier single-orb topics after Doedre."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [
      "Sun Orb",
      "Moon Orb"
    ],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "sisters-after",
    "place": "The Harbour Bridge / The Sarn Encampment",
    "heading": "จบ Solar Eclipse และ Lunar Eclipse · ฟัง Hargan",
    "headingEN": "After Solaris and Lunaris · hear Hargan",
    "quest": "Solar Eclipse / Lunar Eclipse",
    "dialogueIds": [
      416
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "หลังตรวจทุกบทสนทนาตามช่วงก่อนหน้า ไป The Harbour Bridge และจัดการ Solaris กับ Lunaris",
      "เมื่อ Solar Eclipse และ Lunar Eclipse เสร็จแล้ว กลับคุย Hargan: Solaris and Lunaris (#416)",
      "เทียบยอด All Ears, No Stone Unturned, Locomancer และ No Loose Ends ที่เกมนับจริงก่อนออกจาก Act 8"
    ],
    "actionsEN": [
      "After checking prior dialogues, defeat Solaris and Lunaris at The Harbour Bridge.",
      "After completing Solar Eclipse and Lunar Eclipse, return for Hargan: Solaris and Lunaris (Wiki #416).",
      "Compare the in-game achievement counters for all four tracked achievements before leaving Act 8."
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
