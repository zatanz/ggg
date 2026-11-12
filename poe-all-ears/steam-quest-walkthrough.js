/* Zone-oriented Steam source walkthrough; original IDs preserved and patch 3.30 unverified. */
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
    ],
    "2": [
      {
        "id": "forest-encampment",
        "place": "The Forest Encampment",
        "heading": "เข้าค่าย Forest Encampment · คุย NPC ในเมืองให้ครบ",
        "quest": "Deal with the Bandits / The Great White Beast",
        "dialogueIds": [
          42,
          43,
          44,
          49,
          52,
          53,
          45,
          47,
          50,
          54,
          46,
          58,
          55,
          61,
          60,
          63,
          62,
          59,
          51,
          56,
          57,
          48
        ],
        "loreIds": [],
        "actions": [
          "คุย Eramir, Greust, Yeena, Silk และ Helena ตามหัวข้อที่เปิด แล้วกลับคุยเรื่อง NPC หลังรู้จักกัน",
          "เมื่อได้รับ The Great White Beast ให้เก็บบทสนทนาของ Silk ก่อนทำเควสต์สำเร็จ",
          "ยังไม่ตัดสินใจเรื่อง Bandits; ลำดับคุย Bandits ก่อน/หลัง Seal ยังมีข้อขัดแย้งในคู่มือ"
        ],
        "stop": "ยังไม่ควรทำ The Great White Beast เสร็จก่อนฟัง Silk และยังไม่ควรฆ่าหรือช่วย Bandit ตัวใด",
        "stopIds": [
          57
        ],
        "confidence": "historical"
      },
      {
        "id": "old-fields",
        "place": "The Old Fields / The Den",
        "heading": "Old Fields · ตรวจบทสนทนาก่อนและหลัง The Great White Beast",
        "quest": "The Great White Beast",
        "dialogueIds": [
          64,
          65,
          66
        ],
        "loreIds": [],
        "actions": [
          "สำรวจ Old Fields และ The Den ตามเควสต์ พร้อมคุย Greust และ Yeena เรื่อง Elementals",
          "หากจัดการ Great White Beast แล้วให้กลับฟัง Silk หัวข้อที่เปลี่ยนหลังเควสต์",
          "อย่าคิดว่า Silk หัวข้อก่อนและหลังเควสต์นับเป็นรายการเดียวกัน"
        ],
        "stop": "ก่อนจัดการ The Great White Beast ต้องฟังหัวข้อ Silk ของช่วงแรก (Wiki #62) เสียก่อน",
        "stopIds": [
          57
        ],
        "confidence": "historical"
      },
      {
        "id": "western-forest",
        "place": "The Western Forest / The Riverways",
        "heading": "Western Forest ก่อน Chamber of Sins · สำรวจและกลับคุย NPC",
        "quest": "The Way Forward / Intruders in Black",
        "dialogueIds": [
          68,
          67,
          69,
          70,
          71,
          72,
          74,
          73
        ],
        "loreIds": [],
        "actions": [
          "ไป Western Forest ก่อนเร่งผ่าน Chamber of Sins ตามคำเตือนของคู่มือ Steam",
          "จัดการ Captain Arteri เพื่อเปิดเส้นทาง แล้วกลับมาคุย Greust, Eramir, Silk, Nessa, Bestel และ Tarkleigh ในหัวข้อที่เปิดใหม่",
          "ตรวจ Lore ของพื้นที่ในหมวด No Stone Unturned แยกต่างหากก่อนเร่งผ่านเควสต์"
        ],
        "stop": "ยังไม่ควรทำ Chamber of Sins หรือช่วย Helena จนกว่าจะตรวจหัวข้อ Western Forest ที่เปิดก่อน",
        "stopIds": [
          69,
          70,
          71,
          72,
          74,
          73
        ],
        "confidence": "historical"
      },
      {
        "id": "sins-before-helena",
        "place": "The Chamber of Sins",
        "heading": "เข้า Chamber of Sins · กลับไปหา Yeena ก่อนช่วย Helena",
        "quest": "Intruders in Black",
        "dialogueIds": [
          75
        ],
        "loreIds": [],
        "actions": [
          "เมื่อเข้า Chamber of Sins ให้กลับไปคุย Yeena เรื่อง Chamber of Sins",
          "ฟังหัวข้อให้ครบก่อนดำเนินเควสต์ช่วย Helena"
        ],
        "stop": "ห้ามทำ Intruders in Black จบหรือช่วย Helena ก่อนคุย Yeena: Chamber of Sins",
        "stopIds": [
          75
        ],
        "confidence": "historical"
      },
      {
        "id": "sins-after-helena",
        "place": "The Forest Encampment / Chamber of Sins",
        "heading": "หลังช่วย Helena · เก็บบทสนทนาที่เปิดใหม่",
        "quest": "Intruders in Black / Sharp and Cruel",
        "dialogueIds": [
          76,
          79,
          80,
          78,
          81,
          82,
          83,
          84,
          85,
          77,
          86,
          88,
          87
        ],
        "loreIds": [],
        "actions": [
          "หลังช่วย Helena กลับคุย NPC ทุกคนเกี่ยวกับ Helena, Fidelitas และ Baleful Gem",
          "ก่อนถือ Maligaro's Spike ต้องตรวจ Eramir: The Baleful Gem ตามเงื่อนไขของไอเทมในกระเป๋า",
          "ฟังหัวข้อ Maligaro's Spike ของ Silk / Greust / Yeena ตามลำดับที่คู่มือระบุ"
        ],
        "stop": "อย่าเปลี่ยนสถานะ Baleful Gem/Maligaro's Spike เร็วเกินไปก่อนฟัง Eramir: The Baleful Gem",
        "stopIds": [
          77
        ],
        "confidence": "historical"
      },
      {
        "id": "crypt",
        "place": "The Fellshrine Ruins / The Crypt",
        "heading": "The Crypt · กลับคุย Eramir หลังเข้าพื้นที่",
        "quest": "Through Sacred Ground",
        "dialogueIds": [
          90
        ],
        "loreIds": [],
        "actions": [
          "สำรวจ Fellshrine Ruins และ The Crypt ตามเส้นทาง",
          "กลับคุย Eramir: Fellshrine Ruins หลังเข้าพื้นที่ตามเงื่อนไขของคู่มือ Steam"
        ],
        "stop": null,
        "stopIds": [],
        "confidence": "historical"
      },
      {
        "id": "roots",
        "place": "The Wetlands / Vaal Ruins entrance",
        "heading": "Baleful Gem / Tree Roots · ต้องคุย Eramir ก่อนทำลายรากไม้",
        "quest": "Sharp and Cruel",
        "dialogueIds": [
          91,
          92,
          94,
          93
        ],
        "loreIds": [],
        "actions": [
          "เมื่อมี Baleful Gem และ Maligaro's Spike ให้คุย Eramir เรื่อง Maligaro's Creation",
          "เมื่อพบ Tree Roots ที่ขวางทางกลับคุย Eramir: Ancient Gateway ก่อนกำจัด Lorrata",
          "หลังทำลายรากไม้แล้วจึงกลับคุย Eramir และ Yeena เรื่อง Lorrata"
        ],
        "stop": "อย่าทำลายรากไม้หรือจัดการ Lorrata ก่อนฟัง Eramir: Maligaro's Creation และ Ancient Gateway",
        "stopIds": [
          91,
          92
        ],
        "confidence": "historical"
      },
      {
        "id": "ancient-seal",
        "place": "The Vaal Ruins / The Forest Encampment",
        "heading": "เปิด Ancient Seal · เก็บ The Darkness ของ NPC ในเมือง",
        "quest": "Deal with the Bandits",
        "dialogueIds": [
          95,
          99,
          98,
          96,
          97
        ],
        "loreIds": [],
        "actions": [
          "เปิด Ancient Seal เพื่อปลดหัวข้อ The Darkness ตามคำแนะนำที่ทั้งสองคู่มือเห็นตรงกัน",
          "กลับเมืองคุย Eramir, Helena, Silk, Greust และ Yeena เกี่ยวกับ The Darkness",
          "ยังไม่ฆ่าหรือช่วย Bandits; ลำดับเริ่มคุยกับ Bandits ก่อนหรือหลัง Seal ยังต้องพิสูจน์ในเกม"
        ],
        "stop": "อย่าฆ่าหรือช่วย Bandits ก่อนเก็บ The Darkness ของ NPC ที่เกี่ยวข้อง",
        "stopIds": [
          95,
          99,
          98,
          96,
          97
        ],
        "confidence": "historical"
      },
      {
        "id": "bandit-decisions",
        "place": "Western Forest / Wetlands / Broken Bridge",
        "heading": "Bandits · คุย The Darkness และกลับ Eramir หลังฆ่าทีละตัว",
        "quest": "Deal with the Bandits",
        "dialogueIds": [
          100,
          102,
          89,
          101,
          103,
          104,
          105
        ],
        "loreIds": [],
        "actions": [
          "ตรวจบทสนทนา The Darkness ของ Alira และ Oak ขณะที่ยังมีชีวิต; Kraityn ไม่มีหัวข้อนี้ตาม Wiki 2025",
          "ถ้าติดตามสายฆ่าทั้งสาม ให้กลับ Eramir หลังฆ่าตัวแรก แล้วกลับอีกครั้งหลังตัวที่สอง ก่อนฆ่าตัวสุดท้าย",
          "หลังฆ่าครบให้กลับคุย Eramir เรื่อง Bandit Lords และตรวจหัวข้อ Greust / Helena ที่เปิดเพิ่มเติม",
          "ระวัง: คำแนะนำเรื่องเวลาที่ควรคุย Bandits ครั้งแรกของ Steam และ PoE Wiki ขัดแย้งกัน ไม่ใช่เส้นทางที่รับรองแล้ว"
        ],
        "stop": "ยังไม่ควรฆ่าหรือช่วย Bandits จนกว่าจะเก็บ The Darkness ของเมืองและ Alira/Oak ครบ; และต้องกลับ Eramir ระหว่างการฆ่า",
        "stopIds": [
          95,
          99,
          98,
          96,
          97,
          100,
          102
        ],
        "confidence": "conflict",
        "sourceConflict": "ข้อขัดแย้งยังไม่คลี่คลาย: Steam ให้รอคุย Bandits หลังเปิด The Darkness แต่ PoE Wiki แนะนำคุยก่อนเปิด Ancient Seal จึงต้องตรวจในเกมก่อนทำขั้นที่เปลี่ยนสถานะ Bandits"
      },
      {
        "id": "vaal-oversoul",
        "place": "The Vaal Ruins / The Forest Encampment",
        "heading": "หลัง Vaal Oversoul · ตรวจบทสนทนา The Light ก่อนเข้า Act 3",
        "quest": "Shadow of the Vaal",
        "dialogueIds": [
          106,
          108,
          110,
          109,
          107
        ],
        "loreIds": [],
        "actions": [
          "หลังฆ่า Vaal Oversoul กลับเมือง",
          "คุย Eramir, Greust, Yeena, Silk และ Helena เรื่อง The Light ที่เปิดหลังจบเนื้อเรื่อง",
          "ตรวจยอด All Ears ใน Act 2 รวมถึง Lore, Waypoint และ Side Quest ก่อนย้าย Act"
        ],
        "stop": "ก่อนออก Act 2 ให้ตรวจ The Light ทั้งห้าหัวข้อ",
        "stopIds": [
          106,
          108,
          110,
          109,
          107
        ],
        "confidence": "historical"
      }
    ]
  },
  "note": "Act 1: 9 phases 41/41 dialogues and 15/29 lore explicitly placed. Act 2: 10 historical zone phases cover wiki rows 42–110 exactly once; source disagreement before Ancient Seal/Bandits remains unresolved, so cannot certify a safe play order. Both Acts still require separate Lore, Waypoint and Side Quest gates."
};
