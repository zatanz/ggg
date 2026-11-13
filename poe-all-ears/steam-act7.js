/* Act 7: PoE Wiki 2025 / historical Steam; not verified on PoE 3.30. All rows use original IDs. */
(function(){
"use strict";
const guide=window.POE_STEAM_WALK;
if(!guide||guide.patchCertified!==false||guide.acts[7])throw Error("Cannot attach historical Act 7 guided route");
guide.acts[7]=[
  {
    "id": "bridge-sin-weylam",
    "place": "The Bridge Encampment",
    "heading": "เริ่ม Act 7 · ฟัง Sin, Weylam และ Eramir",
    "headingEN": "Start Act 7 · hear Sin, Weylam and Eramir",
    "quest": "The Silver Locket / The Master of a Million Faces",
    "dialogueIds": [
      342,
      343,
      344,
      345,
      346,
      347,
      348,
      349
    ],
    "loreIds": [],
    "waypointIds": [
      60
    ],
    "sidequestIds": [],
    "actions": [
      "เปิด Waypoint The Bridge Encampment คุย Sin เรื่อง The Origins of the Gods และ Weylam Roth หัวข้อต้น Act ให้ครบ",
      "คุย Eramir เรื่อง Ralakesh และ Silk ก่อนเริ่มเดินทาง แล้วตรวจหัวข้อ Weylam: Merveil, Lilly, Pondium และ Brinerot",
      "อย่าเพิ่งข้ามหัวข้อ NPC ที่เปิดตอนพบเมืองครั้งแรกก่อนเดินไป The Broken Bridge"
    ],
    "actionsEN": [
      "Activate the Bridge Encampment Waypoint. Speak to Sin about The Origins of the Gods and check Weylam Roth's first topics.",
      "Speak to Eramir about Ralakesh and Silk; ask Weylam about Merveil, Lilly, Pondium and the Brinerot Clan.",
      "Collect the initially available town dialogue before departing for The Broken Bridge."
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
    "id": "bridge-yeena-helena",
    "place": "The Bridge Encampment",
    "heading": "คุย Yeena และ Helena · เก็บหัวข้อต้น Act",
    "headingEN": "Meet Yeena and Helena · first town topics",
    "quest": "Essence of the Artist / The Master of a Million Faces",
    "dialogueIds": [
      351,
      352,
      353,
      354,
      356,
      358,
      359,
      360
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "คุย Yeena: Greetings, The Forest Encampment, Silk และ Wraeclast",
      "คุย Helena: Maligaro, Silk, Greust และ Trading ให้ครบก่อนเริ่มเควสต์ Maligaro",
      "รายการ Introduction ของ Yeena และ Maligaro ของ Helena เป็นหัวข้อที่ต้องกดฟังเอง ไม่ใช่แค่เดินผ่าน NPC"
    ],
    "actionsEN": [
      "Talk to Yeena about Greetings, The Forest Encampment, Silk and Wraeclast.",
      "Talk to Helena about Maligaro, Silk, Greust and Trading before advancing the Maligaro quest.",
      "Explicitly select each dialogue topic; walking past an NPC does not count."
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
    "id": "bridge-cross-talk",
    "place": "The Bridge Encampment",
    "heading": "กลับคุยหัวข้อ NPC ที่เปิดหลังรู้จักคนอื่น",
    "headingEN": "Revisit inter-NPC topics after introductions",
    "quest": "The Master of a Million Faces",
    "dialogueIds": [
      350,
      355,
      357,
      362,
      363,
      364,
      361
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "หลังคุย Weylam แล้ว กลับคุย Eramir, Yeena และ Helena เรื่อง Weylam",
      "หลังรู้จัก Yeena, Helena และ Eramir ให้ฟัง Weylam Roth พูดถึง NPC ทั้งสาม",
      "ตรวจ Sin: The Master of a Million Faces หลังปลดล็อกหัวข้อ Ralakesh ตามเงื่อนไขที่คู่มือระบุ"
    ],
    "actionsEN": [
      "After meeting Weylam, return to Eramir, Yeena and Helena for their Weylam topics.",
      "After meeting Yeena, Helena and Eramir, hear Weylam Roth's three corresponding topics.",
      "Check Sin: The Master of a Million Faces when the Ralakesh dialogue prerequisite is met."
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
    "id": "broken-bridge-crypt",
    "place": "The Broken Bridge / The Crypt",
    "heading": "เก็บ Silver Locket และ Maligaro's Map ก่อนเข้า Sins",
    "headingEN": "Broken Bridge and Crypt · collect quest items",
    "quest": "The Silver Locket / Essence of the Artist",
    "dialogueIds": [
      366
    ],
    "loreIds": [],
    "waypointIds": [
      61,
      62
    ],
    "sidequestIds": [
      16
    ],
    "actions": [
      "รับเควสต์ The Silver Locket จาก Weylam เก็บ Silver Locket ใน The Broken Bridge แล้วส่งคืนให้ Weylam จึงติ๊กเควสต์รอง",
      "เปิด Waypoint The Crossroads แล้วเข้า The Crypt เก็บ Maligaro's Map และเปิด Waypoint The Crypt",
      "หลังได้ Maligaro's Map กลับคุย Helena: Maligaro's Map (#366) ก่อนเริ่มใช้ Map Device ที่ Chamber of Sins"
    ],
    "actionsEN": [
      "Accept The Silver Locket from Weylam, recover the Silver Locket in The Broken Bridge and return it before checking the side quest.",
      "Activate The Crossroads and The Crypt Waypoints, and obtain Maligaro's Map inside The Crypt.",
      "After collecting the map, return to Helena for Maligaro's Map (Wiki row #366) before activating the map device."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [
      "Silver Locket",
      "Maligaro's Map"
    ],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "sins-silk",
    "place": "The Chamber of Sins Level 1",
    "heading": "เข้า Chamber of Sins · ฟัง Silk ก่อนสู้ Maligaro",
    "headingEN": "Chamber of Sins · speak to Silk before Maligaro",
    "quest": "Web of Secrets / Essence of the Artist",
    "dialogueIds": [
      367,
      368
    ],
    "loreIds": [
      113
    ],
    "waypointIds": [
      63
    ],
    "sidequestIds": [],
    "actions": [
      "เปิด Waypoint The Chamber of Sins แล้วอ่าน Maligaro's Manifesto ใน Level 1",
      "คุย Silk: Black Death และ Silk's Journey (#367–368) ขณะอยู่ใน The Chamber of Sins Level 1",
      "ใช้ Maligaro's Map กับ Map Device เพื่อเปิด Maligaro's Sanctum หลังตรวจหัวข้อเหล่านี้"
    ],
    "actionsEN": [
      "Activate The Chamber of Sins Waypoint and discover Maligaro's Manifesto in Level 1.",
      "Talk to Silk about Black Death and Silk's Journey (Wiki rows #367–368) in The Chamber of Sins Level 1.",
      "Use Maligaro's Map in the Map Device to access Maligaro's Sanctum after checking the dialogue."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [
      "Maligaro's Map"
    ],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "maligaro-after",
    "place": "Maligaro's Sanctum",
    "heading": "หลังฆ่า Maligaro · คุย Sin ก่อนออกจาก Sanctum",
    "headingEN": "After Maligaro · speak to Sin before leaving",
    "quest": "Essence of the Artist",
    "dialogueIds": [
      369
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "หลังจัดการ Maligaro, the Artist ให้ฟัง Sin: Maligaro (#369) ก่อนออกจาก Maligaro's Sanctum",
      "ติ๊กเฉพาะเมื่อบทสนทนาในเกมเล่นจบจริงแล้ว และตรวจทางออกก่อนเปลี่ยนสถานะเควสต์"
    ],
    "actionsEN": [
      "After defeating Maligaro, the Artist, listen to Sin: Maligaro (Wiki row #369) before leaving Maligaro's Sanctum.",
      "Only mark the dialogue after listening to it in-game, then proceed to the exit."
    ],
    "stop": "ห้ามออกจาก Maligaro's Sanctum ก่อนตรวจ Sin: Maligaro หลังสู้บอส (ข้อควรระวังจากคู่มือเก่า)",
    "stopEN": "STOP: after defeating Maligaro, check Sin: Maligaro before leaving the Sanctum (historical caution).",
    "stopIds": [
      369
    ],
    "keyItems": [],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "black-venom-followup",
    "place": "The Bridge Encampment / The Chamber of Sins",
    "heading": "ส่ง Black Venom แล้วกลับคุยทุก NPC ที่ปลดล็อก",
    "headingEN": "After Black Venom · revisit all unlocked NPCs",
    "quest": "Web of Secrets",
    "dialogueIds": [
      370,
      371,
      372,
      373,
      374,
      375
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "หลังได้ Black Venom จาก Maligaro ให้ส่งกับ Silk และตรวจ Sin: Arakaali ก่อนฟัง Sin: The Spinner of Shadows",
      "กลับคุย Eramir: Silk, Arakaali's Temple, Arakaali และ Yeena: Silk, Arakaali (#371–375)",
      "หัวข้อชุดนี้เปิดหลังสถานะเควสต์เปลี่ยน อย่าเหมารวมกับหัวข้อ NPC ที่ฟังช่วงต้น Act"
    ],
    "actionsEN": [
      "After obtaining Black Venom, give it to Silk and check Sin: Arakaali before The Spinner of Shadows.",
      "Return to Eramir for Silk, Arakaali's Temple and Arakaali, then Yeena for Silk and Arakaali (Wiki rows #371–375).",
      "These are post-quest dialogue states, not the initial town topics."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [
      "Black Venom"
    ],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "den-before",
    "place": "The Chamber of Sins Level 2 / The Den",
    "heading": "เห็นทางถูกปิด · ต้องคุย Helena ก่อนเข้า Den",
    "headingEN": "Blocked route · speak to Helena before entering Den",
    "quest": "The Master of a Million Faces",
    "dialogueIds": [
      365
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "เมื่อเห็นทางไป The Forest Encampment เดิมถูกปิด ให้กลับคุย Helena: The Den (#365)",
      "คุยให้จบก่อนเดินต่อผ่าน The Chamber of Sins Level 2 เข้า The Den",
      "คำเตือนในไฟล์เก่าระบุ The Fellshrine Ruins แต่ PoE Wiki ระบุ 'ก่อนเดินต่อสู่ The Den' ให้ยึดเหตุการณ์ทางถูกปิดและตรวจในเกม"
    ],
    "actionsEN": [
      "After discovering the blocked route to the old Forest Encampment, return to Helena for The Den (Wiki row #365).",
      "Complete that dialogue before proceeding through The Chamber of Sins Level 2 into The Den.",
      "Legacy notes mention The Fellshrine Ruins, while the Wiki specifies before continuing toward The Den. Treat this as a historical conflict requiring in-game verification."
    ],
    "stop": "อย่าเข้า The Den ก่อนคุย Helena: The Den หลังเห็นทางถูกปิด",
    "stopEN": "STOP: do not enter The Den before hearing Helena: The Den after discovering the blocked passage.",
    "stopIds": [
      365
    ],
    "keyItems": [],
    "sourceNote": "ไฟล์เก่าเตือนก่อนเข้า The Fellshrine Ruins แต่ PoE Wiki เตือนก่อนเดินต่อ The Den ทั้งสองแหล่งไม่ตรงกัน",
    "sourceNoteEN": "The legacy source warns about The Fellshrine Ruins; the Wiki instead warns before continuing toward The Den. The discrepancy is not gameplay-resolved.",
    "confidence": "historical-source-only"
  },
  {
    "id": "ashen-greust",
    "place": "The Den / The Ashen Fields",
    "heading": "ผ่าน Den แล้วจัดการ Greust · กลับคุย Helena และ Yeena",
    "headingEN": "Through Den and Ashen Fields · after Greust",
    "quest": "The Master of a Million Faces",
    "dialogueIds": [
      380,
      379
    ],
    "loreIds": [
      114
    ],
    "waypointIds": [
      64,
      65
    ],
    "sidequestIds": [],
    "actions": [
      "เปิด Waypoint The Den และ The Ashen Fields; ก่อนสู้ Greust สำรวจ Ode to Ralakesh ใน Ashen Fields",
      "หลังจบ The Master of a Million Faces ให้กลับเมืองฟัง Helena: Greust (#376) และ Yeena: Greust (#377)",
      "อย่าติ๊กหัวข้อหลังจบเควสต์ก่อนจัดการ Greust/Ralakesh จริง"
    ],
    "actionsEN": [
      "Activate The Den and The Ashen Fields Waypoints, and discover Ode to Ralakesh near Greust's arena.",
      "After completing The Master of a Million Faces, return to town for Helena: Greust (Wiki #376) and Yeena: Greust (#377).",
      "Do not mark post-Greust dialogue until the boss sequence has actually completed."
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
    "id": "northern-memorial",
    "place": "The Northern Forest",
    "heading": "ทำ In Memory of Greust · ส่ง Greust's Necklace",
    "headingEN": "Northern Forest · complete Greust memorial",
    "quest": "In Memory of Greust",
    "dialogueIds": [],
    "loreIds": [],
    "waypointIds": [
      66
    ],
    "sidequestIds": [
      17
    ],
    "actions": [
      "รับ Greust's Necklace จาก Helena หลังเหตุการณ์ Greust แล้วเดินทางเข้า The Northern Forest",
      "เปิด Waypoint The Northern Forest จากนั้นนำ Greust's Necklace ไปวางที่ Azmeri shrine",
      "กลับส่งเควสต์ In Memory of Greust กับ Helena แล้วจึงติ๊ก No Loose Ends"
    ],
    "actionsEN": [
      "After Greust's story, take Greust's Necklace from Helena and enter The Northern Forest.",
      "Activate The Northern Forest Waypoint and place Greust's Necklace at the Azmeri shrine.",
      "Return to Helena to complete In Memory of Greust before checking No Loose Ends."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [
      "Greust's Necklace"
    ],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "kishara-start",
    "place": "The Bridge Encampment",
    "heading": "รับ Kishara's Star และคุย Weylam ก่อนออกเมือง",
    "headingEN": "Kishara's Star · speak with Weylam before leaving",
    "quest": "Kishara's Star",
    "dialogueIds": [
      377
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "รับเควสต์ Kishara's Star จาก Weylam Roth ที่ Bridge Encampment",
      "ฟัง Weylam Roth: Kishara (#378) หลังรับเควสต์ ก่อนเดินทางไป The Causeway",
      "ไอเท็ม Kishara's Star อยู่ที่ The Causeway ช่วงใกล้ทางออกสู่ The Vaal City; อย่าเพิ่งติ๊กว่าเควสต์เสร็จ"
    ],
    "actionsEN": [
      "Accept Kishara's Star from Weylam Roth in The Bridge Encampment.",
      "After starting the quest, listen to Weylam Roth: Kishara (Wiki row #378) before travelling to The Causeway.",
      "Kishara's Star is located near the Causeway's exit toward The Vaal City; do not mark the quest completed yet."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [
      "Kishara's Star"
    ],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "gruthkul-before",
    "place": "The Dread Thicket / The Bridge Encampment",
    "heading": "รับ Queen of Despair · คุย Eramir ก่อนฆ่า Gruthkul",
    "headingEN": "Queen of Despair · hear Eramir before Gruthkul",
    "quest": "Queen of Despair",
    "dialogueIds": [
      376,
      378
    ],
    "loreIds": [
      115
    ],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "รับ Queen of Despair จาก Sin แล้วฟัง Sin: The Mother of Despair (#379)",
      "กลับคุย Eramir: Gruthkul (#380) หลังรับเควสต์ แต่ต้องทำก่อนฆ่า Gruthkul ใน The Dread Thicket",
      "เมื่อเข้า The Dread Thicket ให้ค้น Shrine to Arakaali - As Her Fury (Lore #115) ก่อนเดินเรื่องต่อ"
    ],
    "actionsEN": [
      "Start Queen of Despair with Sin and hear The Mother of Despair (Wiki #379).",
      "After accepting the quest but BEFORE killing Gruthkul in The Dread Thicket, speak to Eramir: Gruthkul (Wiki #380).",
      "Discover Shrine to Arakaali in The Dread Thicket (lore #115) before leaving."
    ],
    "stop": "ห้ามฆ่า Gruthkul ก่อนฟัง Eramir: Gruthkul หลังรับ Queen of Despair",
    "stopEN": "STOP: do not kill Gruthkul before Eramir: Gruthkul after accepting Queen of Despair.",
    "stopIds": [
      378
    ],
    "keyItems": [],
    "sourceNote": "ไฟล์เดิมโยงหัวข้อ Sin: The Mother of Despair กับเหตุการณ์ Greust แต่ Wiki ระบุว่าเปิดหลังรับ Queen of Despair",
    "sourceNoteEN": "The legacy note associates Sin's Mother of Despair dialogue with Greust; the Wiki associates it with starting Queen of Despair.",
    "confidence": "historical-source-only"
  },
  {
    "id": "gruthkul-after",
    "place": "The Dread Thicket / The Bridge Encampment",
    "heading": "หลัง Gruthkul · ฟัง Eramir ก่อนปิดเควสต์",
    "headingEN": "After Gruthkul · return to Eramir",
    "quest": "Queen of Despair",
    "dialogueIds": [
      381
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [
      18
    ],
    "actions": [
      "หลังจัดการ Gruthkul ให้กลับ Bridge Encampment คุย Eramir: Gruthkul (#381) ในสถานะหลังสู้",
      "ส่ง Queen of Despair ให้สำเร็จจริง แล้วติ๊กเควสต์รอง No Loose Ends",
      "ตรวจให้แน่ใจว่าไม่สับสน Eramir: Gruthkul ก่อนสู้ (#380) กับหลังสู้ (#381)"
    ],
    "actionsEN": [
      "After defeating Gruthkul, return to Eramir and hear his post-boss Gruthkul topic (Wiki row #381).",
      "Complete Queen of Despair before marking it as a finished No Loose Ends side quest.",
      "Do not confuse Eramir's pre-boss topic (#380) with the post-boss topic (#381)."
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
    "id": "fireflies-return",
    "place": "The Dread Thicket / The Bridge Encampment",
    "heading": "เก็บ Fireflies ครบ 7 · คุย Yeena ก่อนพบใน Vaal City",
    "headingEN": "After seven Fireflies · speak to Yeena before Vaal City",
    "quest": "Lighting the Way",
    "dialogueIds": [
      382
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "เก็บ Firefly ให้ครบเจ็ดชิ้นใน The Dread Thicket สำหรับ Lighting the Way",
      "กลับไปหา Yeena ที่ Bridge Encampment และฟัง Arakaali's Temple (#382) ก่อนพบ Yeena ใน The Vaal City",
      "หมายเหตุ Excel เก่าเตือนก่อนเข้า The Causeway ส่วน Wiki เตือนก่อนพบ Yeena ใน Vaal City ให้ตรวจหัวข้อนี้ทันทีหลัง Fireflies ครบ"
    ],
    "actionsEN": [
      "Collect all seven Fireflies in The Dread Thicket for Lighting the Way.",
      "Return to Yeena in The Bridge Encampment and hear Arakaali's Temple (Wiki #382) BEFORE meeting Yeena in The Vaal City.",
      "An older workbook warns before entering The Causeway, whereas the Wiki warns before meeting Yeena in The Vaal City; check this dialogue as soon as you have all Fireflies."
    ],
    "stop": "Fireflies ครบแล้ว อย่าไปพบ Yeena ใน The Vaal City ก่อนคุย Arakaali's Temple ที่เมือง",
    "stopEN": "STOP: once all seven Fireflies are found, hear Yeena: Arakaali's Temple in town BEFORE meeting her in The Vaal City.",
    "stopIds": [
      382
    ],
    "keyItems": [
      "Firefly"
    ],
    "sourceNote": "ไฟล์เก่าเตือนก่อนเข้า The Causeway แต่ Wiki ระบุ 'ก่อนพบ Yeena ใน The Vaal City' ยังไม่มีผลทดสอบแยกความต่าง",
    "sourceNoteEN": "Legacy notes say 'before entering The Causeway' but the Wiki says 'before meeting Yeena in The Vaal City'. No patch 3.30 test resolves the difference.",
    "confidence": "historical-source-only"
  },
  {
    "id": "causeway-kishara",
    "place": "The Causeway",
    "heading": "หา Kishara's Star และ Lore ก่อนเข้า Vaal City",
    "headingEN": "The Causeway · collect Kishara's Star and lore",
    "quest": "Kishara's Star",
    "dialogueIds": [],
    "loreIds": [
      116
    ],
    "waypointIds": [
      67
    ],
    "sidequestIds": [
      19
    ],
    "actions": [
      "เปิด Waypoint The Causeway แล้วสำรวจ Shrine to Arakaali - As Our Queen's (Lore #116)",
      "ค้นหา Kishara's Star ใกล้ทางออก The Causeway ไป The Vaal City แล้วกลับส่ง Weylam Roth เพื่อจบเควสต์รอง",
      "ก่อนเดินเข้าพื้นที่ถัดไป ตรวจว่า Yeena: Arakaali's Temple (#382) ถูกฟังแล้วหลังเก็บ Fireflies ครบ"
    ],
    "actionsEN": [
      "Activate The Causeway Waypoint and discover its Shrine to Arakaali lore (#116).",
      "Recover Kishara's Star near the exit to The Vaal City and return it to Weylam Roth to complete the optional quest.",
      "Before moving on, confirm you heard Yeena: Arakaali's Temple (#382) after collecting all seven Fireflies."
    ],
    "stop": null,
    "stopEN": null,
    "stopIds": [],
    "keyItems": [
      "Kishara's Star"
    ],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "vaal-city",
    "place": "The Vaal City",
    "heading": "เข้า Vaal City · กลับคุย Eramir และอ่าน Lore",
    "headingEN": "Vaal City · revisit Eramir and collect lore",
    "quest": "Lighting the Way",
    "dialogueIds": [
      383
    ],
    "loreIds": [
      117,
      118
    ],
    "waypointIds": [
      68
    ],
    "sidequestIds": [],
    "actions": [
      "เมื่อเข้า The Vaal City ครั้งแรกให้เปิด Waypoint และอ่าน Shrine to Arakaali - Our Great Goddess กับ Love Letter",
      "กลับไป Bridge Encampment ฟัง Eramir: The Vaal City (#383) ซึ่งเปิดหลังเข้าพื้นที่ครั้งแรก",
      "จึงกลับไปพบ Yeena ที่ The Vaal City เพื่อเดินเรื่อง Lighting the Way ต่อ โดยต้องตรวจ #382 มาก่อน"
    ],
    "actionsEN": [
      "On first reaching The Vaal City, activate its Waypoint and discover Shrine to Arakaali and Love Letter.",
      "Return to Eramir in The Bridge Encampment for The Vaal City (Wiki #383), unlocked after your first entry.",
      "Then meet Yeena in The Vaal City for Lighting the Way, after confirming you completed #382 in town."
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
    "id": "temple-level-one",
    "place": "The Temple of Decay Level 1",
    "heading": "เข้า Temple of Decay · เก็บ Lore ชั้นแรก",
    "headingEN": "Temple of Decay Level 1 · collect its lore",
    "quest": "The Mother of Spiders",
    "dialogueIds": [],
    "loreIds": [
      119
    ],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "เมื่อ Yeena เปิดทางด้วย Fireflies ให้เข้า The Temple of Decay Level 1 ตามเควสต์ The Mother of Spiders",
      "อ่าน Shrine to Arakaali - Our Temple Of (Lore #119) ก่อนขึ้น Level 2",
      "จดชื่อ Lore และยอดเกมที่นับจริงก่อนเข้าสู้ Arakaali"
    ],
    "actionsEN": [
      "After Yeena opens the way with Fireflies, enter The Temple of Decay Level 1 for The Mother of Spiders.",
      "Discover Shrine to Arakaali - Our Temple Of (lore #119) before moving to Level 2.",
      "Compare the exact lore title with the in-game counter before proceeding."
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
    "id": "temple-arakaali-after",
    "place": "The Temple of Decay Level 2",
    "heading": "หลังฆ่า Arakaali · คุย Yeena ก่อนออกจาก Temple",
    "headingEN": "After Arakaali · speak to Yeena before leaving",
    "quest": "The Mother of Spiders",
    "dialogueIds": [
      384
    ],
    "loreIds": [
      120
    ],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "ก่อนสู้ Arakaali สำรวจ Shrine to Arakaali - Even As Our (Lore #120) ใน Temple of Decay Level 2",
      "หลังฆ่า Arakaali, Spinner of Shadows ให้คุย Yeena: Arakaali (#384) ภายในพื้นที่ก่อนออก",
      "ห้ามออกจาก Temple of Decay Level 2 จนกว่าจะยืนยันว่าฟังบทสนทนา Yeena หลังบอสจริง"
    ],
    "actionsEN": [
      "Discover Shrine to Arakaali - Even As Our (lore #120) in The Temple of Decay Level 2.",
      "After defeating Arakaali, Spinner of Shadows, speak to Yeena: Arakaali (Wiki #384) before leaving the area.",
      "Do not exit Temple of Decay Level 2 until you have actually listened to Yeena's post-boss dialogue."
    ],
    "stop": "ห้ามออกจาก Temple of Decay Level 2 หลังฆ่า Arakaali ก่อนฟัง Yeena: Arakaali",
    "stopEN": "STOP: after killing Arakaali, hear Yeena: Arakaali before leaving Temple of Decay Level 2.",
    "stopIds": [
      384
    ],
    "keyItems": [],
    "sourceNote": null,
    "sourceNoteEN": null,
    "confidence": "historical-source-only"
  },
  {
    "id": "act7-final",
    "place": "The Bridge Encampment / The Temple of Decay",
    "heading": "หลังจบ Arakaali · กลับเก็บบทสนทนาปิด Act",
    "headingEN": "After Arakaali · town dialogue and counters",
    "quest": "The Mother of Spiders",
    "dialogueIds": [
      385,
      386
    ],
    "loreIds": [],
    "waypointIds": [],
    "sidequestIds": [],
    "actions": [
      "หลังจบ Arakaali กลับคุย Eramir: Silk และ Yeena: Silk (#385–386) ซึ่งเป็นหัวข้อหลังบอส",
      "ตรวจยอด All Ears, No Stone Unturned, Locomancer และ No Loose Ends กับเกมจริงทีละหมวด",
      "หากยังขาด ให้ย้อนช่วงที่ค้างก่อนข้ามไป Act 8; เครื่องหมายในเว็บไม่ใช่ยอดที่เกมยืนยัน"
    ],
    "actionsEN": [
      "After defeating Arakaali, return for Eramir: Silk and Yeena: Silk (Wiki #385–386).",
      "Compare All Ears, No Stone Unturned, Locomancer and No Loose Ends with in-game achievement totals.",
      "Review any unchecked earlier stage before proceeding to Act 8; the website's manual checkboxes are not game verification."
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
