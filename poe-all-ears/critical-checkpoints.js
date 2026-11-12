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
    ]
  },
  "sourceStatus": "wiki-2025-quest-state-risk-only",
  "routeSafe": false
};
