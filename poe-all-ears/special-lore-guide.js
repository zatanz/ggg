/* Lore navigation: category labels and editorial steps only; original 140 No Stone IDs are canonical. */
window.POE_SPECIAL_LORE = {
  schema: 1,
  patchCertified: false,
  source: "https://www.poewiki.net/wiki/Guide:No_Stone_Unturned_achievement",
  labyrinth: {
    ids: [73,74,75,76,77,78,79,80,81,82],
    groups: [
      {id:"plaza",name:"ก่อนเข้า Labyrinth",note:"เข้าสู่ The Aspirants' Plaza แล้วสำรวจ Bronze Plaque ก่อนเริ่ม Labyrinth",ids:[73]},
      {id:"chambers",name:"ระหว่างสำรวจห้อง Labyrinth",note:"สำรวจจารึกและบทกลอนในห้องต่าง ๆ ผังและตำแหน่งเปลี่ยนได้ตามวัน ไม่สามารถระบุห้องตายตัวได้",ids:[74,76,77,79,80]},
      {id:"trials",name:"ช่วง Aspirant's Trial",note:"ตรวจ Bronze Inscription และ Poem ที่พบในแต่ละช่วง Trial; ต้องเก็บตามช่วงที่พบจริง ไม่จำเป็นต้องรอท้ายดันเจียน",ids:[75,78,81,82]}
    ],
    steps:["เข้าสู่ The Aspirants' Plaza หลังปลดล็อก Labyrinth ที่เกี่ยวข้อง แล้วเก็บ Bronze Plaque","เดิน Labyrinth โดยตรวจวัตถุ Lore ที่พบในแต่ละห้องและใกล้ช่วง Aspirant's Trial ตามพื้นที่จริง","ก่อนออกจาก Labyrinth ตรวจยอด 10 รายการ; หากไม่ครบ ให้กลับมารอบถัดไปและตรวจชื่อที่ยังไม่เก็บ"],
    caveat:"ตำแหน่งห้องเปลี่ยนตามวัน; ไม่ใช่เส้นทางแผนที่ตายตัวหรือหลักฐานว่าต้องเก็บทั้งหมดในการเล่นครั้งเดียว",
    layoutSource:"https://www.poewiki.net/wiki/The_Lord%27s_Labyrinth"
  },
  vaal: {
    ids:[125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140],
    letters:[125,126,127,128,129,130,131,132,133,134,135,136],
    journals:[137,138,139,140],
    steps:["สำรวจ Campaign เพื่อหาทางเข้า Vaal Side Area (พื้นที่เกิดแบบสุ่ม)","เมื่อพบพื้นที่ ให้ค้นหาชื่อ Side Area เพื่อดู Lore ที่คู่มือเก่าเชื่อมโยงไว้ แล้วสำรวจวัตถุ Vaal Letter หรือ Research Journal ใกล้ Vaal Vessel","ตรวจว่า Lore ที่พบเป็นชิ้นใหม่หรือซ้ำ แล้วทำเครื่องหมายเฉพาะรายการที่พบจริง; สร้าง Instance ใหม่หรือหา Side Area อื่นสำหรับรายการที่ยังขาด"],
    caveat:"ไม่ใช่รายการเรียงลำดับตายตัว ชื่อพื้นที่/ความสัมพันธ์จาก Wiki 2025 ยังไม่ยืนยันแพตช์ 3.30; อย่าใช้วิธี Sacrifice Fragment กับ Map Device จากคู่มือเก่า",
    areaSource:"https://www.poewiki.net/wiki/Vaal_side_area"
  }
};
