# Path of Exile Achievement Companion — เส้นทางสู่ 100% ของ 4 Achievement

วันที่ตรวจสถานะ: 12 พฤศจิกายน 2026 (Asia/Bangkok)
สถานะ: Historical reference / UI preview — ยังไม่ใช่คู่มือแพตช์ 3.30 ที่ผ่านการทดสอบในเกม

## ผู้เล่นต้องการอะไร

คำถามหลักคือ **จะเก็บ All Ears, No Stone Unturned, Locomancer และ No Loose Ends ให้ครบ 100% ในตัวละครที่เล่นอย่างไร** ไม่ใช่มีรายการข้อมูลมากเท่าไร

> 100% ในหน้านี้ **ไม่ใช่** 100% ของ Achievement ทั้งหมดที่มีใน Path of Exile และไม่ใช่การยืนยันว่า Achievement ถูกปลดล็อกจากเซิร์ฟเวอร์แล้ว

## เกณฑ์ความครบที่โปรเจกต์ติดตาม

| เป้าหมาย | จำนวน Checklist | แนวทาง |
| --- | ---: | --- |
| All Ears | 484 | เก็บบทสนทนาทุกหัวข้อในเงื่อนไขเควสต์ที่ถูกต้อง โดยเฉพาะช่วงก่อนเปลี่ยนสถานะถาวร |
| No Stone Unturned | 140 | Campaign 114, Labyrinth 10, Vaal Letter / Research Journal 16 |
| Locomancer | 91 | เปิด Waypoint ทุกจุดในฐานข้อมูลเดิม รวม The Aspirants' Plaza 1 และ Epilogue 2 |
| No Loose Ends | 30 | ทำเควสต์รองทั้งหมดในรายการอ้างอิง |
| **รวม** | **745** | ทำเครื่องหมายเมื่อเก็บจริง และตรวจยอดจากเกมอีกครั้ง |

ชุดความสำเร็จนี้ต้องรักษาความคืบหน้า **แยกตามตัวละคร**; การนับสำเร็จจริงให้ใช้เงื่อนไขที่เกมแสดง. แผน 13 ช่วง (Act 1–10, Labyrinth, Vaal และ Epilogue) จัดวางเพื่อค้นหาสิ่งที่ขาด ไม่ได้ยืนยันลำดับการเล่นที่ดีที่สุดหรือว่าทุกอย่างย้อนเก็บได้

## หลักการแนะนำผู้เล่น

1. **เริ่มจากเป้าหมาย ไม่ใช่ฐานข้อมูล**: ด้านบนแสดงบันทึกที่ทำแล้วจาก 745, 4 Achievement และจุดค้างแรกจากแผน 13 ช่วง
2. **เลือก Act ที่กำลังเล่น**: ถ้าเริ่มจากจุดเริ่มเกมให้เริ่ม Act 1; ถ้าเล่นอยู่ Act อื่นให้เลือก Act นั้นได้ ไม่บังคับไปตามข้อมูลแถว Wiki
3. **ก่อนเดินเรื่องต่อ**: เปิดจุดตรวจที่อาจพลาด และฟังบทสนทนาตาม `เปิดเมื่อ` / `ต้องตรวจ` ทีละหัวข้อ; ห้ามสมมติว่าเครื่องหมายเตือนจาก Excel มีลำดับที่พิสูจน์แล้ว
4. **ก่อนออกจาก Act**: ดูสี่เป้าหมาย `บทสนทนา NPC`, `Lore`, `Waypoint`, `เควสต์รอง` พร้อมยอดทำแล้ว/ยังขาด; กดเปิดเฉพาะรายการที่ยังขาดได้
5. **อย่าตีความรางวัลว่าเป็นเควสต์บังคับ**: จุดตรวจที่โยงกับรางวัล Passive/Refund Point แสดงไว้เพื่อช่วยตัดสินใจ; เงื่อนไขจำเป็นต่อ Achievement แยกจากผลต่อการผ่านเนื้อเรื่อง
6. **Labyrinth และ Vaal เป็นงานตามโอกาสที่พบ**: Labyrinth เปลี่ยนผังและห้อง; Vaal Side Area สุ่ม แบ่ง Vaal Letters 12 กับ Research Journals 4 และค้นตามชื่อพื้นที่; ไม่กำหนดเส้นทางตายตัว
7. **หลังเนื้อเรื่องอย่าลืม Epilogue**: ตรวจ Waypoint อีก 2 จุดใน Locomancer; Waypoint ของ Aspirants' Plaza อยู่ในหน้า Labyrinth
8. **ตรวจยอดกับเกมจริง**: แม้แถบบันทึกในเว็บแสดงครบ 745/745 ต้องเทียบแต่ละ Achievement กับเกม; หากไม่ตรงใช้หน้า `ตรวจยอด / สำรอง` ย้อนตรวจ และอย่าประกาศว่าได้รับ Achievement เพียงเพราะติ๊กครบ

## การออกแบบ UX ที่ใช้อยู่

- เริ่มจากภาพรวมความคืบหน้า 745 รายการ แยก 4 ความสำเร็จ
- มีปุ่มเปิดช่วงที่ยังขาดรายการแรก และแผน 13 ช่วงแบบพับเก็บได้
- หน้า Act แสดงจุดตรวจสำคัญเพียงหนึ่งจุดต่อครั้ง พร้อมปุ่ม `ก่อนหน้า/ถัดไป`
- หน้าสรุป Act แสดงสี่เป้าหมายพร้อมจำนวนและตัวอย่างรายการยังขาด; ปุ่มของแต่ละเป้าหมายเปิด Checklist เฉพาะที่ขาดทันที
- รายการ 22 คำเตือนจาก Excel ที่ยังไม่เข้าจุดตรวจเสี่ยงหลักยังอยู่ในหมวดตรวจเพิ่ม ไม่ถูกใส่ลำดับเควสต์แบบเดา
- UI และตัวนับอ่านข้อมูลชุดเดิม ไม่แก้ ID, นับเพิ่มซ้ำ, ล้างการทำเครื่องหมาย, หรือเปลี่ยน Backup Schema
- ยังต้องตรวจ UX จากผู้เล่นจริง (เวลาเพื่อหางานต่อ, สถานะที่แสดง, จำนวนคลิก, คีย์บอร์ด/มือถือ)

## ช่องว่างด้านข้อมูลที่ต้องปิดก่อนประกาศคู่มือ 100%

- **P0:** เส้นทางเควสต์จริงที่พิสูจน์กับเกม 3.30, โดยเฉพาะ All Ears 484 หัวข้อและ Eramir/Bandits ทุกสาขา
- **P0:** ตรวจแถว WARNING จาก Excel ให้ครบ พร้อมหลักฐานของจังหวะเควสต์ ไม่ใช่เพียงเปิดให้ค้นเจอ
- **P1:** ตรวจการเกิด Lore ใน Labyrinth และ Vaal Side Area หลังเปลี่ยนแพตช์; พฤติกรรมสุ่มต้องมีหลักฐานที่ทำซ้ำได้
- **P1:** ตรวจ Waypoints 91 และ Side Quests 30 ว่าตรงกับ Achievement ในแพตช์ล่าสุด
- **P1:** ตรวจการแสดงรางวัล 58 เควสต์และผลต่อความสำคัญ โดยไม่ต้องทำ Gem/อุปกรณ์แยกคลาส
- **P1:** ทดสอบกับผู้เล่นจริงแบบจบ Act พร้อมตรวจยอด
- **พักไว้:** แยกคลาส/รางวัลตามคลาส, build optimizer, คำนวณเส้นทางแผนที่ที่ไม่มีหลักฐาน

**มาตรฐานความถูกต้อง:** ผ่าน GitHub Actions หมายถึง UI และข้อมูลอ้างอิงทำงานตามที่ทดสอบ ไม่ใช่หลักฐานว่าผู้เล่นจะได้ Achievement 100% ใน 3.30 จริง

## เอกสารหลัก

- [Workbook and UX Audit](./REFERENCE-WORKBOOK-UX-AUDIT.md)
- [Quest Sequence Audit](./QUEST-SEQUENCE-AUDIT.md)
- [3.30 Patch Audit](./PATCH-330-AUDIT.md)
- [Delivery Plan](./DELIVERY-PLAN.md)
- [PoE Wiki: All Ears](https://www.poewiki.net/wiki/Guide:All_Ears_achievement)
- [PoE Wiki: No Stone Unturned](https://www.poewiki.net/wiki/Guide:No_Stone_Unturned_achievement)

## ชุดดำเนินงานต่อ — Act 3 source-guided walkthrough (12 พฤศจิกายน 2026)

- เพิ่ม Act 3 **12 ช่วง** ครอบคลุม All Ears 71/71 local IDs แบบไม่ซ้ำ และ Lore No Stone Unturned 32/32 local IDs (41–72) ตามพื้นที่ โดยยังรักษา IDs เดิมและเซฟผู้เล่นทั้งหมด
- แสดงจุดหยุดก่อนส่ง Tolman's Bracelet ให้ Clarissa, ก่อนพบ Lady Dialla พร้อม Sulphite/Spool, ก่อนถือ Decanter Spiritus/Chitus' Plum, ก่อนฆ่า Gravicius/Piety และก่อนเข้า Marketplace หลัง Undying Blockage; บางหัวข้อในกลุ่มจะเปิดหลังเหตุการณ์นั้น ไม่ได้แปลว่าต้องครบทั้งกลุ่มก่อนผ่าน
- เพิ่มภาพจำลอง Lost in Love สำหรับจุด Hargan–Clarissa (ไม่ใช่ภาพหน้าจอจริง); เปิดเฉพาะเมื่อผู้เล่นขอดู
- เรียงเป็นช่วงตามคู่มือ Steam/PoE Wiki ปี 2025 ไม่ได้ยืนยันเส้นทางหรือประกัน Achievement ในแพตช์ 3.30 ซึ่งยังไม่เปิด ณ วันที่ทำรายการ
- ขั้นต่อไป: ทดสอบ P0 กับเกมจริงในแพตช์ 3.30, สาขา Bandits / Fairgraves และต่อ Act 4–10 พร้อมเก็บหลักฐานสถานะเควสต์

## Act 4 delivered: 4-Achievement stage sequence (2026-11-12)

- Act 4 source-guided UI: **13 phases**, exactly **72 All Ears + 12 Lore + 6 Waypoints + 1 No Loose Ends** canonical entries placed in context, with no new ID, local-storage key or backup version. The roadmap still totals 745 records.
- Prominent irreversible-action cautions from Steam 3.28 / PoE Wiki 2025: Kira before freeing Deshret; Dialla in Crystal Veins; post-Daresso and post-Kaom return-dialogues; Piety before Harvest; the separated pre/post-organ dialogue states; after-Malachai town conversations.
- Expanded Lore / Waypoint / sidequest disclosures are visible in their relevant phase. Existing Act 4 Wiki risk checkpoints remain accessible separately and source evidence limitations remain visible.
- Two original 960×540 SVG quest illustrations are added to Act 4 and clearly identified as **not actual game screenshots**. They illustrate dialogue sequence rather than in-game UI accuracy.
- Site code and CI do not certify game version 3.30. See [Act 4 research and verification ledger](./ACT4-WALKTHROUGH-AUDIT.md). Next: Acts 5–10, source-based route and 3.30 gameplay evidence once a build is available.

## Act 5 / bilingual and UX workflow (November 2026)

- 12 source-led stages with 66 canonical entries: All Ears 44, No Stone 12, Locomancer 8, No Loose Ends 2; original backup and per-character progression preserved.
- Independent language controls: guidance TH/EN and quest/area/item names EN/TH/both. Canonical English source always recoverable; Thai names are explicitly editorial, not official.
- Stage-level four-achievement progress, STOP Next confirmation and visible mobile Act grid reduce missing quest information and horizontal-navigation confusion.
- 2 original conceptual Act 5 images bring total to 11. Project-scoped skill: `../.agents/skills/poe-achievement-ux/SKILL.md`. See [Act 5 bilingual/UX evidence](./ACT5-BILINGUAL-UX-AUDIT.md). Acts 6–10 still need source-led stages; no patch 3.30 in-game certification yet.
