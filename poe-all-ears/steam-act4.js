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
      "อ่าน Voll's Confession ใน Dried Lake และจัดการ Voll เพื่อเปิดทางไป Mines",
      "หลังรับ An Indomitable Spirit ให้กลับ Highgate ฟัง Kira: Deshret (ID 220) ก่อนปลดปล่อย Deshret ใน Mines Level 2",
      "ตรวจบทสนทนาเกี่ยวกับ The Mines, Voll และ The Rapture Device"
    ],
    "stop": "ยังไม่ควรปลดปล่อย Deshret ก่อนฟัง Kira: Deshret",
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
    "heading": "หลัง Daresso · กลับเมืองก่อนเข้า Kaom's Dream",
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
      "หลังสังหาร Daresso และส่ง The Eye of Desire ให้ Dialla ให้กลับเมืองฟัง Petarus and Vanja และ Tasuni: Daresso"
    ],
    "stop": "ยังไม่ควรเข้า Kaom's Dream ก่อนเก็บบทสนทนาหลัง Daresso",
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
      "เปิด Waypoint และอ่าน Malachai's Dedication",
      "คุย Piety: Malachai (ID 247) ขณะที่ยังไม่ได้ส่งอวัยวะทั้งหมด",
      "ฟังครบแล้วจึงส่งอวัยวะตามเควสต์"
    ],
    "stop": "อย่าส่งอวัยวะทั้งหมดให้ Piety ก่อนฟัง Piety: Malachai",
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
      "หลังส่งอวัยวะทั้งหมดให้ Piety กลับตรวจ Lady Dialla: Malachai (ID 248)",
      "เมื่อหัวข้อหลังส่งเปิดแล้วจึงไปสู้ Malachai"
    ],
    "stop": "อย่าฆ่า Malachai ก่อนฟัง Dialla: Malachai",
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
})();
