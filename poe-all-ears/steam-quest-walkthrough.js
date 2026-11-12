/* Zone-oriented source walkthrough; original achievement IDs reused; not patch certified. */
window.POE_STEAM_WALK = {
  "schema": 1,
  "patchCertified": false,
  "source": "https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869",
  "wiki": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement",
  "acts": {
    "1": [
      {
        "id": "strand",
        "place": "The Twilight Strand",
        "heading": "เริ่มเกม · คุยกับ Dying Exile",
        "quest": "Enemy at the Gate",
        "dialogueIds": [
          1
        ],
        "loreIds": [],
        "actions": [
          "ก่อนเข้าชายฝั่ง ตรวจบทสนทนา Introduction ของ Dying Exile"
        ],
        "stop": null,
        "confidence": "historical"
      },
      {
        "id": "town",
        "place": "Lioneye's Watch",
        "heading": "เมืองแรก · คุย NPC ให้ครบก่อนออกเดินทาง",
        "quest": "Enemy at the Gate / Mercy Mission",
        "dialogueIds": [
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "loreIds": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "actions": [
          "คุยตามลำดับ Nessa → Bestel → Tarkleigh แล้วกลับไปหา NPC ที่เพิ่งได้หัวข้อใหม่",
          "อ่าน Letters of Exile ที่พบจนตัวนับในเกมครบ 15 ข้อความ (อาจได้ข้อความซ้ำ)"
        ],
        "stop": null,
        "confidence": "historical"
      },
      {
        "id": "medicine",
        "place": "The Tidal Island / Lioneye's Watch",
        "heading": "Medicine Chest · กลับมาคุยหลังเก็บหีบยา",
        "quest": "Mercy Mission",
        "dialogueIds": [
          16,
          17,
          18
        ],
        "loreIds": [],
        "actions": [
          "รับเควสต์และเก็บ Medicine Chest ก่อน",
          "กลับเมืองแล้วตรวจหัวข้อ Cannibals และ Medicine Chest ของ Bestel / Tarkleigh"
        ],
        "stop": null,
        "confidence": "historical"
      },
      {
        "id": "mudflats",
        "place": "The Mud Flats / The Fetid Pool",
        "heading": "Rhoas และ Glyph Wall · หยุดก่อนเข้าพื้นที่หรือเปิดทาง",
        "quest": "Breaking Some Eggs / A Dirty Job",
        "dialogueIds": [
          19,
          20,
          21,
          22,
          23
        ],
        "loreIds": [],
        "actions": [
          "คุย Nessa และ Tarkleigh เรื่อง Rhoas",
          "หลังจัดการ Oozeback Bloom กลับไปฟัง Bestel: Undead Rhoas ก่อนเข้า Fetid Pool",
          "เก็บ Strange Glyphs พบ Glyph Wall แล้วกลับไปฟัง Tarkleigh เรื่อง Strange Glyphs และ Glyph Wall",
          "คุยครบแล้วจึงใส่ Glyphs เพื่อเปิดทาง"
        ],
        "stop": "ยังไม่ควรเข้า The Fetid Pool ก่อน Bestel: Undead Rhoas และยังไม่ควรใส่ Glyphs ลง Glyph Wall ก่อน Tarkleigh: Strange Glyphs/Glyph Wall",
        "stopIds": [
          21,
          22,
          23
        ],
        "confidence": "historical"
      },
      {
        "id": "pool",
        "place": "The Fetid Pool / The Ledge",
        "heading": "หลังทำ A Dirty Job · ตรวจบทสนทนาที่เพิ่งเปิด",
        "quest": "A Dirty Job",
        "dialogueIds": [
          24,
          25
        ],
        "loreIds": [],
        "actions": [
          "จัดการ Necromancer ตามเควสต์ A Dirty Job แล้วกลับคุย Tarkleigh",
          "ตรวจหัวข้อ Surviving Wraeclast ของ Bestel และ Goatmen ของ Tarkleigh ตามเงื่อนไขในเกม"
        ],
        "stop": null,
        "confidence": "historical"
      },
      {
        "id": "prison",
        "place": "The Prison / The Upper Prison",
        "heading": "ก่อนฆ่า Brutus · เก็บหัวข้อ NPC และอ่าน Journal",
        "quest": "The Caged Brute",
        "dialogueIds": [
          26,
          27,
          28,
          29
        ],
        "loreIds": [],
        "actions": [
          "เข้า Prison แล้วกลับคุย Tarkleigh เรื่อง Brutus จากนั้นคุย Bestel เรื่อง Brutus",
          "หลังพบ Piety ตรวจหัวข้อ Nessa: Piety",
          "อ่าน Shavronne's Journal ใน The Upper Prison แล้วตรวจ Bestel: Marceus Lioneye",
          "คุยครบก่อนสู้ Brutus"
        ],
        "stop": "ยังไม่ควรฆ่า Brutus ก่อนตรวจ Brutus/Piety/Marceus Lioneye ตามเงื่อนไขรายหัวข้อ",
        "stopIds": [
          26,
          27,
          28,
          29
        ],
        "confidence": "historical"
      },
      {
        "id": "prisoners-gate",
        "place": "The Prisoner's Gate",
        "heading": "หลัง Brutus · กลับเมืองก่อนเข้า Ship Graveyard",
        "quest": "The Way Forward",
        "dialogueIds": [
          30,
          31
        ],
        "loreIds": [],
        "actions": [
          "หลังฆ่า Brutus กลับเมืองคุย Nessa เรื่อง Brutus",
          "หลังเห็น Piety ปิดทางไป Western Forest ให้กลับคุย Bestel เรื่อง Prisoner's Gate ก่อนเข้า The Ship Graveyard"
        ],
        "stop": "ยังไม่ควรเข้า The Ship Graveyard ก่อนตรวจ Bestel: Prisoner's Gate",
        "stopIds": [
          31
        ],
        "confidence": "historical"
      },
      {
        "id": "fairgraves",
        "place": "The Ship Graveyard",
        "heading": "Fairgraves · ก่อนหยิบ The Allflame",
        "quest": "The Marooned Mariner",
        "dialogueIds": [
          32,
          33,
          34,
          35,
          36,
          37,
          38
        ],
        "loreIds": [],
        "actions": [
          "เข้า Ship Graveyard แล้วตรวจหัวข้อ Merveil ของ Bestel และ Tarkleigh",
          "คุย Fairgraves ครั้งแรกให้ครบ The Allflame, Merveil และ Merveil's Necklace",
          "กลับ Lioneye's Watch ฟัง Bestel: Captain Fairgraves",
          "กลับไปหา Fairgraves ฟัง The Real Fairgraves ก่อนหยิบ Allflame"
        ],
        "stop": "ยังไม่ควรเก็บ Allflame ก่อนคุย Fairgraves → Bestel → Fairgraves จนครบ",
        "stopIds": [
          34,
          35,
          36,
          37,
          38
        ],
        "confidence": "conflict",
        "patchProblem": "ผู้เขียนคู่มือ Steam รายงานว่า Fairgraves คุยไม่ได้ในแพตช์ 3.29 และยังไม่มีหลักฐานยืนยันการแก้ไขใน 3.30"
      },
      {
        "id": "merveil",
        "place": "Merveil's Cavern / Lioneye's Watch",
        "heading": "หลังฆ่า Merveil · คุย NPC ก่อนข้ามไป Act 2",
        "quest": "The Siren's Cadence",
        "dialogueIds": [
          39,
          40,
          41
        ],
        "loreIds": [],
        "actions": [
          "หลังฆ่า Merveil กลับ Lioneye's Watch",
          "คุย Nessa, Bestel และ Tarkleigh เรื่อง Merveil ให้ครบก่อนเปลี่ยน Act",
          "ตรวจยอด All Ears ที่บันทึกใน Act 1 และเปิดรายการ Lore/Waypoint/Side Quest ที่ยังขาดจากหน้ารวม Act"
        ],
        "stop": "ก่อนออก Act 1 ให้ตรวจบทสนทนาหลังฆ่า Merveil ทั้ง 3 หัวข้อ",
        "stopIds": [
          39,
          40,
          41
        ],
        "confidence": "historical"
      }
    ]
  },
  "note": "The 9 steps cover all 41 Act 1 All Ears dialogue IDs and only 15 explicitly mapped Letters of Exile Lore IDs; 14 other Act 1 Lore, Waypoints and sidequests are checked through the existing Act gate. Not a certified 3.30 walkthrough."
};
