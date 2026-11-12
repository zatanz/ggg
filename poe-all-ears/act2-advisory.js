/* Act 2 quest-state advisory; source guide only, current patch not verified. */
window.ALL_EARS_ACT2_ADVISORY = {
 schema:1,reviewStatus:"source-guided-patch-unverified",
 source:"https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_2",
 warning:"Act 2 มีบทสนทนาที่ขึ้นกับลำดับการจัดการ Bandits และการเปิด Ancient Seal อย่าใช้รายการเรียงตรงเป็นเส้นทางปลอดภัยจนกว่าจะตรวจเงื่อนไขครบ",
 dependencies:[
 {id:"bandit-introductions",state:"unknown",note:"ตรวจบทสนทนาของ Bandit แต่ละคนก่อนเปลี่ยนสถานะเควสต์"},
 {id:"ancient-seal",state:"unknown",note:"ตรวจบทสนทนา The Darkness ก่อนจัดการ Bandits ตามข้อควรระวังของคู่มือ Wiki"},
 {id:"eramir-branches",state:"conditional",note:"หัวข้อสนทนาของ Eramir เปลี่ยนตามตัวเลือก Bandits; ต้องแยกเงื่อนไขก่อนสร้างเส้นทางจริง"}
 ]
};
