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
          window.POE_APPROVED_GUIDANCE.undeadRhoas.th,
          "เก็บ Strange Glyphs พบ Glyph Wall แล้วกลับไปฟัง Tarkleigh เรื่อง Strange Glyphs และ Glyph Wall",
          "คุยครบแล้วจึงใส่ Glyphs เพื่อเปิดทาง"
        ],
        "stop": window.POE_APPROVED_GUIDANCE.undeadRhoas.stopTH + " และยังไม่ควรใส่ Glyphs ลง Glyph Wall ก่อน Tarkleigh: Strange Glyphs/Glyph Wall",
        "stopIds": [
          21,
          22,
          23
        ],
        "confidence": "historical",
        "visual": {
          "asset": "./assets/quest-journal-illustration.svg",
          "title": "Breaking Some Eggs · Strange Glyphs",
          "alt": "ภาพจำลองหน้า Quest ใน The Mud Flats และจุดที่ต้องตรวจ Strange Glyphs ก่อนใช้ Glyph Wall",
          "check": "ดู Breaking Some Eggs และตรวจหัวข้อ Strange Glyphs / Glyph Wall กับ Tarkleigh ก่อนใส่ Glyphs",
          "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_1",
          "status": "mock-not-in-game"
        }
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
          "ฟัง Bestel: Brutus ก่อนสู้ Brutus"
        ],
        "stop": "ยังไม่ควรฆ่า Brutus ก่อนฟัง Bestel: Brutus (ID 27)",
        "stopIds": [
          27
        ],
        "confidence": "historical",
        "visual": {
          "asset": "./assets/brutus-quest-illustration.svg",
          "title": "The Caged Brute · ก่อนฆ่า Brutus",
          "alt": "ภาพวาดจำลอง The Prison และ The Caged Brute เน้นตรวจบทสนทนา Brutus ก่อนฆ่าบอส",
          "check": "กลับคุย Tarkleigh แล้ว Bestel: Brutus; ตรวจเงื่อนไข Piety และ Shavronne's Journal ก่อนสู้",
          "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_1",
          "status": "mock-not-in-game"
        }
      },
      {
        "id": "prisoners-gate",
        "place": "The Prisoner's Gate",
        "heading": "หลัง Brutus · กลับเมืองตรวจบทสนทนา",
        "quest": "The Way Forward",
        "dialogueIds": [
          30,
          31
        ],
        "loreIds": [],
        "actions": [
          "หลังฆ่า Brutus กลับเมืองคุย Nessa เรื่อง Brutus",
          "หลังเห็น Piety ปิดทางไป Western Forest ให้กลับคุย Bestel เรื่อง Prisoner's Gate"
        ],
        "stop": null,
        "stopIds": [],
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
        "patchProblem": "ผู้เขียนคู่มือ Steam รายงานว่า Fairgraves คุยไม่ได้ในแพตช์ 3.29 และยังไม่มีหลักฐานยืนยันการแก้ไขใน 3.30",
        "visual": {
          "asset": "./assets/fairgraves-quest-illustration.svg",
          "title": "The Marooned Mariner · ก่อนเก็บ Allflame",
          "alt": "ภาพวาดจำลอง Ship Graveyard และ The Marooned Mariner เน้นจุดที่ยังไม่ควรหยิบ Allflame",
          "check": "คุย Fairgraves → Bestel → Fairgraves ตามลำดับ และตรวจว่าคุยได้จริงก่อนเก็บ Allflame",
          "source": "https://www.poewiki.net/wiki/The_Marooned_Mariner",
          "status": "mock-not-in-game"
        }
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
        "stop": "ก่อนทำ The Great White Beast สำเร็จ ต้องฟัง Silk (ID 57, Wiki #62) เสียก่อน",
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
        "confidence": "historical",
        "visual": {
          "asset": "./assets/sins-quest-illustration.svg",
          "title": "Intruders in Black · ก่อนช่วย Helena",
          "alt": "ภาพวาดจำลอง Chamber of Sins และ Intruders in Black เน้นการกลับไปคุย Yeena ก่อนช่วย Helena",
          "check": "หลังเข้าห้อง Chamber of Sins ให้กลับ Yeena ฟังหัวข้อ Chamber of Sins ก่อนจบ Intruders in Black",
          "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_2",
          "status": "mock-not-in-game"
        }
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
        "confidence": "historical",
        "visual": {
          "asset": "./assets/roots-quest-illustration.svg",
          "title": "The Root of the Problem · ก่อนวางยารากไม้",
          "alt": "ภาพวาดจำลอง The Wetlands และ The Root of the Problem ระบุการถือ Baleful Gem กับ Maligaro's Spike ก่อนจัดการ Lorrata",
          "check": "ถือ Baleful Gem และ Maligaro's Spike คุย Eramir: Maligaro's Creations แล้วพบ Lorrata และกลับคุย Ancient Gateway ก่อนทำลายรากไม้",
          "source": "https://www.poewiki.net/wiki/The_Root_of_the_Problem",
          "status": "mock-not-in-game"
        }
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
        "sourceConflict": "ข้อมูลหลักฐานต่างกัน: PoE Wiki แนะนำคุย Bandits ทุกคนก่อนเปิด Ancient Seal ส่วน Steam 3.28 จัดขั้นฆ่า Bandits หลัง The Darkness แต่ไม่ได้สั่งห้ามคุยก่อน Seal ยังไม่มีผลทดสอบ 3.30 ที่รับรองลำดับปลอดภัย ให้ตรวจบทสนทนาก่อนตัดสินใจฆ่าหรือช่วย",
        "visual": {
          "asset": "./assets/bandits-quest-illustration.svg",
          "title": "Deal with the Bandits · ก่อนตัดสินใจ",
          "alt": "ภาพวาดจำลอง Quest ของ Bandits ใน Vaal Ruins และคำเตือนให้เก็บ The Darkness ก่อนตัดสินใจ",
          "check": "ตรวจ The Darkness ให้ครบ และกลับ Eramir ระหว่างฆ่า Bandits ทีละตัว เงื่อนไขการคุย Bandits ครั้งแรกยังมีข้อขัดแย้ง",
          "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_2",
          "status": "mock-not-in-game"
        }
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
    ],
    "3": [
      {
        "id": "sarn-entry",
        "place": "The City of Sarn / Sarn Encampment",
        "heading": "เริ่ม Act 3 · ช่วย Clarissa ก่อนเร่งเข้า Crematorium",
        "quest": "Lost in Love",
        "dialogueIds": [
          111,
          114,
          112,
          113
        ],
        "loreIds": [
          41
        ],
        "actions": [
          "เข้า City of Sarn ให้ช่วย Clarissa และตรวจบทสนทนาของ Maramoa, Hargan และ Grigor ที่เปิดตามสถานะจริง",
          "อ่าน Ancient Graffiti ใน City of Sarn และกลับเมืองเมื่อมีหัวข้อ NPC เพิ่ม"
        ],
        "stop": "อย่าเร่งเผชิญ Piety ใน Crematorium ก่อนช่วย Clarissa และตรวจบทสนทนาต้น Act",
        "stopIds": [
          111,
          114,
          112,
          113
        ],
        "confidence": "historical"
      },
      {
        "id": "bracelet",
        "place": "The Slums / The Crematorium / Sarn Encampment",
        "heading": "Tolman's Bracelet · กลับหา Hargan ก่อนส่งของ",
        "quest": "Lost in Love",
        "dialogueIds": [
          118,
          124,
          119,
          120,
          125,
          128,
          126,
          129,
          123,
          121,
          122,
          116,
          115,
          117,
          131,
          127,
          130
        ],
        "loreIds": [
          42,
          43
        ],
        "actions": [
          "เมื่อเก็บ Tolman's Bracelet ได้ ให้กลับเมืองคุย Hargan: Introduction (Wiki #115) ขณะที่ยังถือไอเทมอยู่",
          "ตรวจ NPC ในเมืองตามเงื่อนไขของแต่ละหัวข้อ บางหัวข้อในกลุ่มนี้เปิดหลังส่ง Bracelet ไม่ใช่ทั้งหมดต้องฟังก่อน",
          "คุยหัวข้อก่อนส่งครบแล้วจึงส่ง Bracelet ให้ Clarissa รับ Sewer Keys และกลับตรวจหัวข้อหลังจบเควสต์"
        ],
        "stop": "ยังไม่ควรส่ง Tolman's Bracelet ให้ Clarissa ก่อนฟัง Hargan: Introduction (Wiki #115)",
        "stopIds": [
          118
        ],
        "confidence": "historical",
        "visual": {
          "asset": "./assets/clarissa-quest-illustration.svg",
          "title": "Lost in Love · ก่อนส่ง Tolman's Bracelet",
          "alt": "ภาพจำลองเควสต์ Lost in Love ใน Act 3 เน้นกลับไปคุย Hargan ก่อนส่ง Tolman's Bracelet ให้ Clarissa",
          "check": "ถือ Tolman's Bracelet กลับคุย Hargan: Introduction (Wiki #115) ก่อนส่งของให้ Clarissa แล้วตรวจบทสนทนาหลังรับ Sewer Keys",
          "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_3",
          "status": "mock-not-in-game"
        }
      },
      {
        "id": "sewer-blockage",
        "place": "The Sewers / Sarn Encampment",
        "heading": "Sewers · กลับหา Maramoa",
        "quest": "Victario's Secrets",
        "dialogueIds": [
          134,
          133,
          132,
          135,
          138,
          136,
          137,
          139,
          140
        ],
        "loreIds": [],
        "actions": [
          "ระหว่างเดิน Sewers ตรวจบทสนทนาของ Clarissa ตามเงื่อนไขที่เปิด",
          "เมื่อพบ Undying Blockage ให้กลับคุย Maramoa: Crossing the River (ID 140)",
          "หัวข้ออื่นในช่วง #132–139 อาจเปิดเมื่อเข้าพื้นที่ถัดไป ให้ตรวจตามเกม ไม่จำเป็นต้องปลดทุกหัวข้อก่อนจุดกั้น"
        ],
        "stop": null,
        "stopIds": [],
        "confidence": "historical"
      },
      {
        "id": "market-battlefront",
        "place": "The Marketplace / The Catacombs / The Battlefront",
        "heading": "Marketplace และ Battlefront · เก็บ Lore ระหว่างทาง",
        "quest": "The Gemling Queen / Victario's Secrets",
        "dialogueIds": [
          141,
          147
        ],
        "loreIds": [
          44,
          45,
          46,
          47
        ],
        "actions": [
          "อ่าน Ancient Notebook ที่ Marketplace และ Graffiti/Monograph ที่ Catacombs ตามชื่อในเกม",
          "เมื่อไปถึง Battlefront เก็บ Graffiti และกลับตรวจ Clarissa: Statues ตามจังหวะที่หัวข้อเปิด",
          "หากพบทางไป Solaris Temple ให้กลับตรวจ Clarissa: The Lunaris Temple"
        ],
        "stop": null,
        "stopIds": [],
        "confidence": "historical"
      },
      {
        "id": "docks-fairgraves",
        "place": "The Docks",
        "heading": "Fairgraves ที่ Docks · คุยก่อนเก็บ Decanter/Plum",
        "quest": "A Swig of Hope",
        "dialogueIds": [
          142,
          143,
          144,
          146,
          145
        ],
        "loreIds": [
          48
        ],
        "actions": [
          "ไปพบ Fairgraves ขณะยังไม่มี Decanter Spiritus หรือ Chitus' Plum ในกระเป๋า เพื่อฟัง Introduction (Wiki #153)",
          "ตรวจหัวข้อ Decanter Spiritus, Chitus' Plum, The Undying และ Resurrection ตามที่เปิด ก่อนส่งไอเทม",
          "อ่าน Graffiti ใน Docks; หาก Fairgraves ไม่ปรากฏตรวจว่าเควสต์ The Marooned Mariner ใน Act 1 สำเร็จแล้ว"
        ],
        "stop": "ยังไม่ควรถือ Decanter Spiritus หรือ Chitus' Plum ก่อนฟัง Fairgraves: Introduction (Wiki #153)",
        "stopIds": [
          142
        ],
        "confidence": "conflict",
        "patchProblem": "ผู้เขียนคู่มือ Steam รายงานว่า Fairgraves คุยไม่ได้ในแพตช์ 3.29; ยังไม่มีหลักฐานยืนยันการแก้ไขในแพตช์ 3.30"
      },
      {
        "id": "dialla-intro",
        "place": "The Solaris Temple Level 2 / Sarn Encampment",
        "heading": "Lady Dialla ครั้งแรก · ยังไม่มี Sulphite หรือ Ribbon Spool",
        "quest": "The Gemling Queen",
        "dialogueIds": [
          148,
          149,
          150,
          151,
          152
        ],
        "loreIds": [],
        "actions": [
          "ก่อนพบ Lady Dialla ครั้งแรกตรวจว่าไม่มี Thaumetic Sulphite หรือ Ribbon Spool ในกระเป๋า (Wiki #143)",
          "ฟัง Lady Dialla: Introduction แล้วกลับตรวจบทสนทนา Hargan, Grigor และ Maramoa ที่ปลดล็อก",
          "การพบ Fairgraves กับ Lady Dialla เป็นคนละเควสต์; อย่าตีความลำดับกลุ่มนี้ว่าเป็นเส้นทางที่ทดสอบกับแพตช์ใหม่แล้ว"
        ],
        "stop": "ยังไม่ควรถือ Thaumetic Sulphite หรือ Ribbon Spool ก่อนฟัง Lady Dialla: Introduction (Wiki #143)",
        "stopIds": [
          148
        ],
        "confidence": "historical"
      },
      {
        "id": "dialla-items",
        "place": "The Docks / The Battlefront / Solaris Temple Level 2",
        "heading": "รับ Sulphite และ Ribbon Spool · ตรวจสถานะทีละชิ้น",
        "quest": "The Gemling Queen / The Ribbon Spool",
        "dialogueIds": [
          153,
          154,
          156,
          157,
          155
        ],
        "loreIds": [
          49,
          50,
          51
        ],
        "actions": [
          "คุย Lady Dialla: Thaumetic Sulphite โดยยังไม่มี Ribbon Spool ตาม Wiki #148",
          "เมื่อสถานะเควสต์เปลี่ยน ค่อยตรวจหัวข้อ The Sewers, Malachai, Chitus และ Infernal Talc ที่เปิดใหม่",
          "เก็บ Journal Entry, Reverie Device และ Malachai's Journal ใน Solaris Temple Level 2"
        ],
        "stop": "ยังไม่ควรรับ Ribbon Spool ก่อนตรวจ Lady Dialla: Thaumetic Sulphite ตามเงื่อนไข (Wiki #148)",
        "stopIds": [
          153
        ],
        "confidence": "historical"
      },
      {
        "id": "ebony-pre-gravicius",
        "place": "The Ebony Barracks / Sarn Encampment",
        "heading": "ก่อนสู้ Gravicius · กลับคุย Maramoa",
        "quest": "Sever the Right Hand",
        "dialogueIds": [
          158
        ],
        "loreIds": [
          52
        ],
        "actions": [
          "หลังเข้า Ebony Barracks กลับเมืองคุย Maramoa: Crossing the River",
          "อ่าน Ancient Graffiti ใน Ebony Barracks ก่อนเดินต่อ",
          "ตรวจหัวข้อครบแล้วจึงสู้ General Gravicius"
        ],
        "stop": "ยังไม่ควรฆ่า General Gravicius ก่อน Maramoa: Crossing the River (Wiki #158)",
        "stopIds": [
          158
        ],
        "confidence": "historical"
      },
      {
        "id": "gravicius-before-piety",
        "place": "The Ebony Barracks / The Lunaris Temple / Sarn Encampment",
        "heading": "หลัง Gravicius · ตรวจ Maramoa และ Grigor ก่อน Piety",
        "quest": "Sever the Right Hand / Piety's Pets",
        "dialogueIds": [
          159,
          162,
          163,
          160,
          164,
          161
        ],
        "loreIds": [],
        "actions": [
          "หลังฆ่า Gravicius กลับตรวจ Lady Dialla, Hargan, Clarissa, Maramoa และ Grigor ในหัวข้อที่เปิด",
          "รับรางวัล Sever the Right Hand แล้วตรวจ Maramoa: Piety; คุย Grigor: The Lunaris Temple ตามเงื่อนไขใน Wiki",
          "อย่าฆ่า Piety ก่อนเก็บสองหัวข้อที่ถูกเตือนใน Wiki #163–164"
        ],
        "stop": "ยังไม่ควรฆ่า Piety ก่อน Grigor: The Lunaris Temple และ Maramoa: Piety (Wiki #163–164)",
        "stopIds": [
          164,
          161
        ],
        "confidence": "historical"
      },
      {
        "id": "after-piety",
        "place": "The Lunaris Temple / Sarn Encampment",
        "heading": "หลัง Piety · กลับเก็บหัวข้อในเมือง",
        "quest": "Piety's Pets",
        "dialogueIds": [
          167,
          166,
          165,
          168
        ],
        "loreIds": [],
        "actions": [
          "หลังฆ่า Piety กลับเมืองคุย Clarissa, Hargan และ Maramoa เรื่อง Piety",
          "ตรวจ Grigor: The Beast เมื่อหัวข้อเปิดตามสถานะเกม",
          "เทียบยอดหัวข้อที่เก็บจริงก่อนย้ายไปส่วน Library"
        ],
        "stop": null,
        "stopIds": [],
        "confidence": "historical"
      },
      {
        "id": "library",
        "place": "The Imperial Gardens / The Library / The Archives / The Sceptre of God",
        "heading": "Library และ Siosa → The Sceptre of God ก่อน Dominus",
        "quest": "A Fixture of Fate",
        "dialogueIds": [
          169,
          170,
          171,
          172,
          174,
          176,
          178,
          173,
          177,
          179,
          175
        ],
        "loreIds": [
          53,
          54,
          55,
          56,
          57,
          58,
          59,
          60,
          61,
          62,
          63,
          64,
          65,
          66,
          67,
          68,
          69,
          70
        ],
        "actions": [
          "เก็บ Bronze Monograph ใน Imperial Gardens ก่อนเข้า Library",
          "พบ Siosa และเก็บ Golden Pages ทีละหน้า แล้วกลับตรวจบทสนทนา Siosa ตามช่วงที่เปิด",
          "The Ancients 7, Purity Chronicles 6, Victario's Writings 4 รวม 17 แบบ; ตรวจชื่อแต่ละเล่ม เพราะตำแหน่งหรือข้อความที่พบอาจซ้ำ",
          "หลังเก็บหนังสือแล้ว ไป The Sceptre of God: เดินถึงชั้น 3 ให้เข้าใกล้ Waypoint #34 เพื่อปลดล็อกอัตโนมัติและตรวจว่าปรากฏบนแผนที่ ก่อนขึ้น The Upper Sceptre of God ไปสู้ Dominus"
        ],
        "stop": null,
        "stopIds": [],
        "confidence": "historical"
      },
      {
        "id": "after-dominus",
        "place": "The Sceptre of God / Sarn Encampment",
        "heading": "หลัง Dominus · กลับตรวจบทสนทนาปิด Act 3",
        "quest": "Sceptre of God",
        "dialogueIds": [
          180,
          181
        ],
        "loreIds": [
          71,
          72
        ],
        "actions": [
          "หลังฆ่า Dominus กลับเมืองคุย Maramoa: Dominus และ Piety and Dominus",
          "อ่าน Plaque และ Letter to Chitus ใน The Sceptre of God",
          "ก่อนออก Act ให้ตรวจ Lore, Waypoint และ Side Quest ที่ยังขาด และเทียบกับเกมจริง"
        ],
        "stop": "ก่อนออกจาก Act 3 ให้กลับตรวจหัวข้อหลัง Dominus ทั้งสองรายการ",
        "stopIds": [
          180,
          181
        ],
        "confidence": "historical"
      }
    ]
  },
  "note": "Act 1: 9 phases 41/41 dialogues and 15/29 lore explicitly placed. Act 2: 10 historical zone phases cover wiki rows 42–110 exactly once; source disagreement before Ancient Seal/Bandits remains unresolved, so cannot certify a safe play order. Both Acts still require separate Lore, Waypoint and Side Quest gates. Act 3: twelve historic source phases crosswalk all 71 dialogue IDs and 32 lore IDs once. Clarissa, Dialla, Fairgraves, Gravicius and Piety cautions are not gameplay-certified for patch 3.30."
};
