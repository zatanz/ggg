/* Source-tied critical dialogue checkpoints; NOT a complete quest walk order or patch 3.30 verification. */
window.POE_CRITICAL_CHECKPOINTS = {
  "schema": 1,
  "patch": "2025-wiki-legacy-unverified",
  "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement",
  "acts": {
    "1": [
      {
        "id": "a1-glyphs",
        "act": 1,
        "quest": "Breaking Some Eggs",
        "heading": "The Mud Flats · ก่อนใส่ Glyph ลงกำแพง",
        "before": "ก่อนใส่ Strange Glyphs ลง Glyph Wall และก่อนเดินออกจากพื้นที่ตามเงื่อนไขบางหัวข้อ",
        "action": "เก็บ Strange Glyph อย่างน้อยหนึ่งชิ้น พบ Glyph Wall แล้วกลับไปคุย Tarkleigh และ Bestel ตามหัวข้อที่ระบุ ก่อนใส่ Glyph ลงกำแพง",
        "ids": [
          21,
          22,
          23
        ],
        "risk": "หากเปลี่ยนสถานะ Glyph Wall เร็วเกินไป บทสนทนาตามเงื่อนไขอาจหาย",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_1",
        "prereq": "The Mud Flats"
      },
      {
        "id": "a1-brutus",
        "act": 1,
        "quest": "The Caged Brute",
        "heading": "The Prison · ก่อนฆ่า Brutus",
        "before": "ก่อนฆ่า Brutus",
        "action": "หลังเข้า The Prison คุย Tarkleigh เรื่อง Brutus; กลับไป Bestel เพื่อเก็บหัวข้อ Brutus และตรวจ Nessa / Shavronne's Journal ตามเงื่อนไขของแต่ละรายการ",
        "ids": [
          26,
          27,
          28,
          29
        ],
        "risk": "อย่าฆ่า Brutus ก่อนเก็บบทสนทนาที่เปิดได้ก่อนสู้บอส",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_1",
        "prereq": "The Prison / The Upper Prison"
      },
      {
        "id": "a1-fairgraves",
        "act": 1,
        "quest": "The Marooned Mariner",
        "heading": "The Ship Graveyard · ก่อนเก็บ Allflame",
        "before": "ก่อนเก็บ Allflame",
        "action": "คุย Fairgraves ครั้งแรกให้ครบหัวข้อที่เปิดอยู่ กลับ Lioneye's Watch ถาม Bestel เรื่อง Captain Fairgraves แล้วกลับ Fairgraves เพื่อคุย The Real Fairgraves",
        "ids": [
          34,
          35,
          36,
          37,
          38
        ],
        "risk": "อย่าเก็บ Allflame ก่อนกลับไปคุย Bestel และ Fairgraves ตามลำดับที่คู่มือระบุ",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_1",
        "prereq": "The Ship Graveyard"
      }
    ],
    "2": [
      {
        "id": "a2-whitebeast",
        "act": 2,
        "quest": "The Great White Beast",
        "heading": "The Great White Beast · ก่อนส่งเควสต์",
        "before": "ก่อนทำเควสต์ The Great White Beast สำเร็จ",
        "action": "หลังรับเควสต์ ให้คุย Silk เรื่อง The Great White Beast ก่อนกลับไปจัดการและส่งเควสต์",
        "ids": [
          57
        ],
        "risk": "Silk มีหัวข้อก่อนเควสต์เสร็จและอีกหัวข้อหลังเควสต์เสร็จ อย่าสับสนว่าเป็นรายการเดียวกัน",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_2",
        "prereq": "The Forest Encampment"
      },
      {
        "id": "a2-sins",
        "act": 2,
        "quest": "Intruders in Black",
        "heading": "The Chamber of Sins · ก่อนช่วย Helena",
        "before": "ก่อนทำ Intruders in Black สำเร็จ",
        "action": "รับเควสต์แล้วคุย Greust เรื่อง Chamber of Sins; เมื่อเข้าพื้นที่ให้ย้อนมาคุย Yeena ก่อนทำเควสต์สำเร็จ",
        "ids": [
          69,
          75
        ],
        "risk": "บทสนทนา Yeena ต้องเก็บก่อนจบ Intruders in Black; รายการ Greust มีเงื่อนไขการเปิดทางกลับ",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_2",
        "prereq": "The Chamber of Sins"
      },
      {
        "id": "a2-baleful",
        "act": 2,
        "quest": "Sharp and Cruel",
        "heading": "Baleful Gem / Maligaro's Spike · ก่อนจัดการ Lorrata",
        "before": "ก่อนเปลี่ยนสถานะไอเทมและก่อนจัดการ Lorrata",
        "action": "ถือ Baleful Gem อย่างเดียวคุย Eramir ก่อน; เมื่อได้ Maligaro's Spike แล้วคุย Eramir อีกครั้ง ก่อนใช้ไอเทมกับรากไม้ที่ขวางทาง",
        "ids": [
          77,
          91,
          92
        ],
        "risk": "The Baleful Gem ต้องไม่มี Maligaro's Spike ในกระเป๋า; Maligaro's Creation และ Ancient Gateway ต้องเก็บก่อนกำจัด Lorrata",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_2",
        "prereq": "The Wetlands"
      },
      {
        "id": "a2-darkness",
        "act": 2,
        "quest": "Deal with the Bandits",
        "heading": "Ancient Seal / The Darkness · ก่อนฆ่า Bandits",
        "before": "คุย Bandits ทั้งสามก่อนเปิด Seal จากนั้นเปิด Seal และเก็บ The Darkness ก่อนฆ่า Bandits",
        "action": "คุย Alira, Oak และ Kraityn ก่อนเปิด Ancient Seal; หลังเปิดใน The Vaal Ruins ให้เก็บบทสนทนา The Darkness ของ NPC ที่เกี่ยวข้อง โดยเฉพาะ Alira และ Oak ขณะที่ยังมีชีวิต",
        "ids": [
          95,
          99,
          98,
          96,
          97,
          100,
          102
        ],
        "risk": "อย่าฆ่า Alira หรือ Oak ก่อนฟัง The Darkness; Kraityn ไม่มีบทสนทนาหัวข้อนี้ตาม Wiki ปี 2025",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_2",
        "prereq": "The Vaal Ruins",
        "priority": "critical"
      },
      {
        "id": "a2-first-kill",
        "act": 2,
        "quest": "Deal with the Bandits",
        "heading": "หลังฆ่า Bandit ตัวแรก · กลับหา Eramir",
        "before": "ก่อนฆ่า Bandit ตัวที่สอง",
        "action": "กลับคุย Eramir ในหัวข้อชื่อ Bandit ตัวที่ฆ่าเป็นคนแรก รายการนี้เปลี่ยนตามลำดับ Alira/Oak/Kraityn ที่ผู้เล่นเลือก",
        "ids": [
          89
        ],
        "risk": "อย่าฆ่า Bandit ตัวถัดไปก่อนตรวจหัวข้อ Eramir",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_2",
        "prereq": "The Forest Encampment",
        "priority": "critical"
      },
      {
        "id": "a2-second-kill",
        "act": 2,
        "quest": "Deal with the Bandits",
        "heading": "หลังฆ่า Bandit ตัวที่สอง · กลับหา Eramir",
        "before": "ก่อนฆ่า Bandit ตัวสุดท้าย",
        "action": "กลับคุย Eramir ในหัวข้อชื่อ Bandit ที่ยังมีชีวิตอยู่ (ขึ้นกับตัวแรกและตัวที่สองที่ฆ่า)",
        "ids": [
          101
        ],
        "risk": "อย่าฆ่า Bandit ตัวสุดท้ายก่อนเก็บบทสนทนานี้",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_2",
        "prereq": "The Forest Encampment",
        "priority": "critical"
      },
      {
        "id": "a2-final-kill",
        "act": 2,
        "quest": "Deal with the Bandits",
        "heading": "หลังฆ่า Bandits ครบสาม · Bandit Lords",
        "before": "หลังฆ่า Alira, Oak และ Kraityn ครบทั้งสาม ในเส้นทางที่ฆ่าทั้งหมด",
        "action": "กลับ Eramir เพื่อเก็บ Bandit Lords — QC; กรณีช่วย Bandit ต้องตรวจเงื่อนไขต่างหาก ไม่ถือว่าขั้นนี้ใช้ได้เหมือนกัน",
        "ids": [
          103
        ],
        "risk": "นี่เป็นสาขาการฆ่าทั้งสาม ไม่ใช่เส้นทางที่รับรองได้สำหรับทุกตัวเลือก Bandits",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_2",
        "prereq": "The Forest Encampment",
        "priority": "critical"
      }
    ],
    "3": [
      {
        "id": "a3-clarissa",
        "act": 3,
        "quest": "Lost in Love",
        "heading": "Tolman's Bracelet · ก่อนส่งเควสต์ให้ Clarissa",
        "before": "หลังได้ Tolman's Bracelet แต่ก่อนส่งเควสต์",
        "action": "เมื่อมี Tolman's Bracelet แล้ว ให้กลับไปคุย Hargan หัวข้อ Introduction ตามช่วงเควสต์ก่อนส่งให้ Clarissa",
        "ids": [
          118
        ],
        "risk": "การส่งเควสต์ให้ Clarissa ก่อนฟัง Hargan อาจทำให้หัวข้อนี้หาย",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_3",
        "prereq": "The Sarn Encampment",
        "priority": "critical"
      },
      {
        "id": "a3-dialla",
        "act": 3,
        "quest": "The Ribbon Spool",
        "heading": "Lady Dialla · ก่อนถือ Thaumetic Sulphite / Ribbon Spool",
        "before": "ก่อนรับ Thaumetic Sulphite หรือ Ribbon Spool (ช่วงแนะนำตัว) และก่อนถือ Ribbon Spool ในช่วงถัดไป",
        "action": "คุย Introduction กับ Lady Dialla ขณะที่ยังไม่มีไอเทมทั้งสอง ต่อมาเมื่อมี Thaumetic Sulphite ให้เก็บหัวข้อนั้นก่อนมี Ribbon Spool",
        "ids": [
          148,
          153
        ],
        "risk": "สถานะไอเทมในกระเป๋ามีผลต่อบทสนทนา Lady Dialla; อย่าเดินเควสต์เลยจังหวะก่อนคุย",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_3",
        "prereq": "The Docks / Lady Dialla"
      },
      {
        "id": "a3-fairgraves",
        "act": 3,
        "quest": "A Swig of Hope",
        "heading": "The Docks · คุย Fairgraves ก่อนถือไอเทมเควสต์",
        "before": "ก่อนมี Decanter Spiritus หรือ Chitus' Plum อยู่ในกระเป๋า",
        "action": "คุย Introduction กับ Fairgraves เมื่อพบครั้งแรกใน The Docks และยังไม่มีไอเทมเควสต์ทั้งสองในกระเป๋า",
        "ids": [
          142
        ],
        "risk": "เงื่อนไขของหัวข้อ Introduction อาจเปลี่ยนหากมี Decanter Spiritus หรือ Chitus' Plum แล้ว",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_3",
        "prereq": "The Docks"
      },
      {
        "id": "a3-gravicius",
        "act": 3,
        "quest": "Sever the Right Hand",
        "heading": "The Ebony Barracks · ก่อนฆ่า General Gravicius",
        "before": "หลังเข้า The Ebony Barracks แต่ก่อนฆ่า General Gravicius",
        "action": "กลับไปคุย Maramoa เรื่อง Crossing the River หลังเข้าพื้นที่ตามเงื่อนไข ก่อนจัดการ General Gravicius",
        "ids": [
          158
        ],
        "risk": "บทสนทนานี้มีเงื่อนไขช่วงก่อนฆ่า General Gravicius",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_3",
        "prereq": "The Ebony Barracks"
      },
      {
        "id": "a3-piety",
        "act": 3,
        "quest": "Piety's Pets",
        "heading": "The Lunaris Temple · ก่อนฆ่า Piety",
        "before": "หลังฆ่า General Gravicius และหลังส่งรางวัล Sever the Right Hand แต่ก่อนฆ่า Piety",
        "action": "ตรวจบทสนทนา Grigor เรื่อง The Lunaris Temple และ Maramoa เรื่อง Piety หลังผ่านเงื่อนไขที่ระบุใน Wiki ก่อนฆ่า Piety",
        "ids": [
          164,
          161
        ],
        "risk": "การฆ่า Piety ก่อนฟังบทสนทนาสองช่วงนี้อาจทำให้รายการ All Ears ขาด",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_3",
        "prereq": "The Sarn Encampment",
        "priority": "critical"
      }
    ],
    "4": [
      {
        "id": "a4-deshret",
        "act": 4,
        "quest": "An Indomitable Spirit",
        "heading": "The Mines · ก่อนปลดปล่อย Deshret",
        "before": "ก่อนปลดปล่อย Deshret ใน The Mines Level 2",
        "action": "หลังรับ An Indomitable Spirit ให้กลับไปคุย Kira เรื่อง Deshret ก่อนปลดปล่อยเธอ",
        "risk": "บทสนทนาของ Kira มีสถานะก่อนและหลังช่วย Deshret",
        "ids": [
          220
        ],
        "prereq": "The Mines",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_4"
      },
      {
        "id": "a4-crystal-veins",
        "act": 4,
        "quest": "The Eternal Nightmare",
        "heading": "The Crystal Veins · ก่อนเข้า Belly of the Beast",
        "before": "ก่อนจบเควสต์ของ Kaom/Daresso และก่อนเข้า The Belly of the Beast",
        "action": "คุย Lady Dialla ใน The Crystal Veins; หลังจบ The King of Desire และ The King of Fury ตรวจหัวข้อ Petarus and Vanja/Oyun; หลังใช้ Rapture Device ตรวจ Kira ก่อนเดินต่อ",
        "risk": "อย่าจบทั้งสองเส้นทางของ Kaom และ Daresso หรือเข้า Belly of the Beast ก่อนเก็บบทสนทนาตามสถานะ",
        "ids": [
          223,
          231,
          237,
          233
        ],
        "prereq": "The Crystal Veins",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_4"
      },
      {
        "id": "a4-piety",
        "act": 4,
        "quest": "The Eternal Nightmare",
        "heading": "Piety · ก่อนเข้า The Harvest",
        "before": "หลังเอาชนะ Piety ใน The Belly of the Beast แต่ก่อนเข้า The Harvest",
        "action": "คุยกับ Piety เรื่อง The Godless Three ก่อนเข้า The Harvest",
        "risk": "บทสนทนานี้อยู่หลังสู้ Piety แต่ก่อนเดินเข้าพื้นที่ถัดไป",
        "ids": [
          241
        ],
        "prereq": "The Belly of the Beast",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_4"
      },
      {
        "id": "a4-malachai",
        "act": 4,
        "quest": "The Eternal Nightmare",
        "heading": "Malachai · ก่อนส่งอวัยวะหรือฆ่าบอส",
        "before": "ก่อนส่งอวัยวะทั้งหมดให้ Piety และก่อนฆ่า Malachai",
        "action": "หลังสู้ Piety คุย Tasuni เรื่อง Malachai's Apprentices; ใน The Harvest คุย Piety เรื่อง Malachai ก่อนส่งอวัยวะ; หลังส่งแล้วคุย Dialla ก่อนฆ่า Malachai",
        "risk": "มีบทสนทนาต่างสถานะกันก่อนและหลังส่งอวัยวะ ห้ามข้ามช่วง",
        "ids": [
          245,
          247,
          248
        ],
        "prereq": "The Harvest",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_4"
      }
    ],
    "5": [
      {
        "id": "a5-utula",
        "act": 5,
        "quest": "",
        "heading": "Utula · ก่อนฆ่า High Templar Avarius",
        "before": "หลังจัดการ Justicar Casticus แต่ก่อนฆ่า High Templar Avarius",
        "action": "กลับไปคุย Utula เรื่อง Justicar Casticus ตามเงื่อนไขก่อนเดินเรื่องต่อ",
        "risk": "หลังฆ่า Avarius อาจไม่พบ Utula ในเมืองเพื่อเก็บหัวข้อนี้",
        "ids": [
          275
        ],
        "prereq": "Act 5",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_5"
      },
      {
        "id": "a5-innocence",
        "act": 5,
        "quest": "",
        "heading": "The Chamber of Innocence · ก่อนออกจากห้อง",
        "before": "หลังฆ่า Innocence แต่ก่อนออกจาก The Chamber of Innocence",
        "action": "คุย Sin หัวข้อ Innocence ทันทีหลังสู้บอส ก่อนออกจากพื้นที่",
        "risk": "บทสนทนานี้มีเงื่อนไขว่าต้องอยู่ในห้องหลังสู้บอส",
        "ids": [
          277
        ],
        "prereq": "The Chamber of Innocence",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_5"
      },
      {
        "id": "a5-ossuary",
        "act": 5,
        "quest": "",
        "heading": "The Ossuary · ก่อนออกจากพื้นที่",
        "before": "หลังได้ Sign of Purity แต่ก่อนออกจาก The Ossuary",
        "action": "คุย Sin เรื่อง The Sign of Purity ขณะที่ยังอยู่ใน The Ossuary",
        "risk": "อย่าออกจากพื้นที่ก่อนตรวจว่าฟังบทสนทนาแล้ว",
        "ids": [
          295
        ],
        "prereq": "The Ossuary",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_5"
      }
    ],
    "6": [
      {
        "id": "a6-karui",
        "act": 6,
        "quest": "The Father of War",
        "heading": "The Karui Fortress · Eye of Conquest และ Tukohama",
        "before": "ก่อนใช้ Eye of Conquest / เข้า Karui Fortress และก่อนฆ่า Tukohama",
        "action": "หลังรับเควสต์ คุย Tarkleigh / Sin ตามหัวข้อ Eye of Conquest และ Karui Fortress; คุย Bestel เรื่อง Tukohama ก่อนสู้บอส",
        "risk": "หัวข้อหนึ่งปรากฏหลังใช้ Eye of Conquest แต่ก่อนเข้าป้อม ต้องตรวจตามแต่ละช่วง",
        "ids": [
          318,
          320,
          321,
          322
        ],
        "prereq": "The Karui Fortress",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_6"
      },
      {
        "id": "a6-shavronne",
        "act": 6,
        "quest": "Essence of Umbra",
        "heading": "Shavronne · ก่อนสู้และก่อนออกจาก The Prison",
        "before": "ก่อนฆ่า Shavronne the Returned และหลังฆ่าก่อนออกจาก The Prison",
        "action": "คุย Bestel เรื่อง Shavronne ก่อนสู้; หลังสู้ให้คุย Sin แล้วจึงออกจาก The Prison",
        "risk": "ข้อความก่อนฆ่าและหลังฆ่าต้องเก็บคนละช่วง",
        "ids": [
          324,
          326
        ],
        "prereq": "The Prison",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_6"
      },
      {
        "id": "a6-ryslatha",
        "act": 6,
        "quest": "The Puppet Mistress",
        "heading": "Ryslatha · ก่อนฆ่าบอสและก่อนเข้าพื้นที่ถัดไป",
        "before": "หลังจบ Essence of Umbra แต่ก่อนฆ่า Ryslatha; ก่อนเข้า The Valley of the Fire Drinker",
        "action": "คุย Sin เรื่อง The Puppet Mistress และ The Cloven One ตามจังหวะเควสต์",
        "risk": "หัวข้อ The Cloven One ต้องคุยกับ Bestel ก่อน; อย่ารีบเข้าพื้นที่ถัดไป",
        "ids": [
          330,
          328
        ],
        "prereq": "Act 6",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_6"
      },
      {
        "id": "a6-graveyard",
        "act": 6,
        "quest": "",
        "heading": "The Ship Graveyard · ก่อนเข้า The Cavern of Anger",
        "before": "หลังคุย Nessa แต่ก่อนเดินต่อไป The Cavern of Anger",
        "action": "กลับมาคุย Tarkleigh เรื่อง The Ship Graveyard ตามเงื่อนไข",
        "risk": "อย่าเดินเข้า The Cavern of Anger ก่อนตรวจหัวข้อนี้",
        "ids": [
          333
        ],
        "prereq": "Act 6",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_6"
      },
      {
        "id": "a6-flag",
        "act": 6,
        "quest": "",
        "heading": "The Black Flag · ก่อนจุดไฟที่ Beacon",
        "before": "หลังได้ The Black Flag แต่ก่อนใช้ที่ประภาคาร",
        "action": "คุย Lilly Roth เรื่อง The Black Flag ก่อนเผาธงที่ Beacon",
        "risk": "การเปลี่ยนสถานะธงอาจทำให้หัวข้อเดิมหาย",
        "ids": [
          336
        ],
        "prereq": "The Beacon",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_6"
      },
      {
        "id": "a6-brine",
        "act": 6,
        "quest": "",
        "heading": "The Brine King's Reef · ก่อนฆ่า Tsoagoth",
        "before": "หลังถึง The Brine King's Reef แต่ก่อนฆ่า Tsoagoth",
        "action": "คุย Weylam Roth เรื่อง The Brine King's Reef และ The Brine King ก่อนสู้บอส",
        "risk": "อย่าฆ่า Tsoagoth ก่อนเก็บทั้งสองบทสนทนา",
        "ids": [
          338,
          339
        ],
        "prereq": "The Brine King's Reef",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_6"
      }
    ],
    "7": [
      {
        "id": "a7-den",
        "act": 7,
        "quest": "",
        "heading": "The Den · ก่อนเดินต่อจากทางที่ถูกปิด",
        "before": "หลังพบทางถูกปิด แต่ก่อนเดินต่อไป The Den",
        "action": "กลับไปคุย Helena หัวข้อ The Den ตามเงื่อนไขก่อนเข้าสู่พื้นที่",
        "risk": "บทสนทนานี้ผูกกับสถานะของทางที่ถูกปิด",
        "ids": [
          365
        ],
        "prereq": "Act 7",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_7"
      },
      {
        "id": "a7-maligaro",
        "act": 7,
        "quest": "",
        "heading": "Maligaro's Sanctum · ก่อนออกจากพื้นที่",
        "before": "หลังฆ่า Maligaro แต่ก่อนออกจาก Sanctum",
        "action": "คุย Sin หัวข้อ Maligaro หลังสู้บอสทันทีตามคำเตือนเดิม",
        "risk": "คำเตือนเรื่องก่อนออกจากพื้นที่เป็นข้อสังเกตจากข้อมูลเดิม ยังต้องตรวจในเกม",
        "ids": [
          369
        ],
        "prereq": "Maligaro's Sanctum",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_7"
      },
      {
        "id": "a7-gruthkul",
        "act": 7,
        "quest": "Queen of Despair",
        "heading": "Gruthkul · ก่อนฆ่าบอส",
        "before": "หลังรับ Queen of Despair แต่ก่อนฆ่า Gruthkul",
        "action": "คุย Eramir เรื่อง Gruthkul ก่อนสู้บอส",
        "risk": "อาจพลาดหัวข้อ Eramir หากจัดการ Gruthkul ก่อน",
        "ids": [
          378
        ],
        "prereq": "Act 7",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_7"
      },
      {
        "id": "a7-fireflies",
        "act": 7,
        "quest": "",
        "heading": "Fireflies / Yeena · ก่อนพบกันใน The Vaal City",
        "before": "หลังเก็บ Fireflies ครบ แต่ก่อนพบ Yeena ใน The Vaal City",
        "action": "คุย Yeena เรื่อง Arakaali's Temple ตามจังหวะเควสต์ก่อนเดินทางต่อ",
        "risk": "การพบ Yeena เร็วเกินไปอาจเปลี่ยนหัวข้อที่มีให้คุย",
        "ids": [
          382
        ],
        "prereq": "The Vaal City",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_7"
      },
      {
        "id": "a7-arakaali",
        "act": 7,
        "quest": "",
        "heading": "Temple of Decay · ก่อนออกหลังฆ่า Arakaali",
        "before": "หลังฆ่า Arakaali แต่ก่อนออกจาก Temple of Decay Level 2",
        "action": "คุย Yeena เรื่อง Arakaali หลังสู้บอสแล้วตรวจว่าฟังครบก่อนออกจากพื้นที่",
        "risk": "อย่าออกจากพื้นที่หลังฆ่าบอสโดยไม่ตรวจหัวข้อนี้",
        "ids": [
          384
        ],
        "prereq": "Temple of Decay",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_7"
      }
    ],
    "8": [
      {
        "id": "a8-love",
        "act": 8,
        "quest": "Love is Dead",
        "heading": "Love is Dead · ก่อนส่งเควสต์และก่อนออกจาก The Quay",
        "before": "ก่อนทำ Love is Dead เสร็จ และหลังฆ่า Tolman แต่ก่อนออกจาก The Quay",
        "action": "หลังรับเควสต์คุย Hargan ก่อนทำสำเร็จ; หลังจัดการ Tolman ให้คุย Clarissa ทันที ก่อนออกจาก The Quay",
        "risk": "บทสนทนาเกิดต่างจังหวะกัน ให้ตรวจทีละช่วงตามสถานะเควสต์",
        "ids": [
          407,
          411
        ],
        "prereq": "The Quay",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_8"
      },
      {
        "id": "a8-yugul",
        "act": 8,
        "quest": "Reflection of Terror",
        "heading": "Yugul · ก่อนฆ่าบอส",
        "before": "หลังจบ The Wings of Vastiri แต่ก่อนฆ่า Yugul",
        "action": "คุย Sin เรื่อง Yugul แล้วคุย Hargan หัวข้อ Yugul ก่อนสู้บอส",
        "risk": "Sin และ Hargan มีหัวข้อเรียงตามเงื่อนไขก่อนฆ่า Yugul",
        "ids": [
          409,
          410
        ],
        "prereq": "Act 8",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_8"
      }
    ],
    "9": [
      {
        "id": "a9-adus",
        "act": 9,
        "quest": "The Storm Blade",
        "heading": "The Storm Blade · ก่อนเข้า The Foothills",
        "before": "หลังจบ The Storm Blade แต่ก่อนเข้า The Foothills",
        "action": "คุย Petarus and Vanja เรื่อง General Adus ก่อนเดินไปพื้นที่ถัดไป",
        "risk": "อย่าเข้า The Foothills ก่อนตรวจหัวข้อนี้",
        "ids": [
          436
        ],
        "prereq": "Highgate",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_9"
      },
      {
        "id": "a9-garukhan",
        "act": 9,
        "quest": "",
        "heading": "Garukhan · ก่อนคุย Irasha หรือ Tasuni",
        "before": "หลังฆ่า Garukhan แต่ก่อนคุย Irasha/Tasuni",
        "action": "คุย Sin หัวข้อ Garukhan ตามจังหวะหลังสู้บอส",
        "risk": "การคุย NPC อื่นก่อนอาจเปลี่ยนหัวข้อในแหล่งอ้างอิงเก่า",
        "ids": [
          439
        ],
        "prereq": "Act 9",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_9"
      },
      {
        "id": "a9-ember",
        "act": 9,
        "quest": "",
        "heading": "The Dark Ember · ก่อนเข้า Belly of the Beast",
        "before": "หลังได้ Basilisk Acid และ Trarthan Powder แต่ก่อนเข้าพื้นที่ถัดไป",
        "action": "คุย Sin ที่ The Quarry และ Highgate ตามเงื่อนไขก่อนเข้า The Belly of the Beast",
        "risk": "ตรวจทั้งตำแหน่งและสถานะไอเทมก่อนเดินเรื่องต่อ",
        "ids": [
          445
        ],
        "prereq": "The Quarry / Highgate",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_9"
      },
      {
        "id": "a9-rescue",
        "act": 9,
        "quest": "",
        "heading": "The Depraved Trinity · ก่อนเดินไป Act 10",
        "before": "หลังฆ่า The Depraved Trinity แต่ก่อนเปลี่ยนไป Act 10",
        "action": "คุย Weylam Roth หัวข้อ Rescue หลังสู้บอสก่อนออกจาก Act 9",
        "risk": "อย่าเข้า Act 10 ก่อนฟังหัวข้อนี้",
        "ids": [
          448
        ],
        "prereq": "Act 9",
        "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_9"
      }
    ]
  },
  "sourceStatus": "wiki-2025-quest-state-risk-only",
  "routeSafe": false
};
