# Path of Exile 1 — Achievement Companion (single-page preview)

## Issue #30 · campaign route and records

The campaign route connects the 67 additional historical Lore, Waypoint and Side Quest records listed in `route-mapping-67.json`. The Sceptre of God waypoint appears before the post-Dominus stage. Review each item's location and timing in the route before marking it.

The manual quest-step confirmation is independent of checklist marks and is saved per character. Combined backups include this confirmation while continuing to accept older backups. **Locomancer crosswalk (14 Nov 2026):** original local #90 Oriath and #91 The Templar Laboratory are historical and excluded from active progress, but still import/export unchanged. The guide tracks **89 legacy-mapped Waypoints + 1 separate Karui Shores mark = 90** as listed by the [PoE Wiki](https://www.poewiki.net/wiki/Waypoint). The new flag uses per-character `poe-karui-shores-waypoint-v1` storage and optional `karuiShores` boolean in unified schema:2 backups; older backups without the flag import as unchecked. Only mark after confirming Karui Shores on the in-game world map (U); 3.30 counter not gameplay-certified. See [Epilogue Locomancer source audit](./handoff/CONTENT-QA-20261114-LOCOMANCER-EPILOGUE.md).

Use the report link beside a task or STOP to open a prefilled GitHub issue. GitHub requires a signed-in account. The app does not submit a report until the player completes submission on GitHub.

## Patch 3.30 · opt-in historical reference (14 November 2026)

ผู้ที่เลือกเล่นแพตช์ **3.30** สามารถกด **เปิดคู่มืออ้างอิงสำหรับเล่น 3.30 (ยังไม่รับรอง)** เพื่อใช้เส้นทางและเช็กลิสต์ต้นฉบับได้ **โดยไม่เปลี่ยนตัวเลือกแพตช์กลับเป็น 3.9** ก่อนกดเปิด ระบบยังแสดงหน้าหยุดและไม่เปิดเผยข้อมูลเก่าเป็นข้อมูลที่รับรองแพตช์แล้ว

เมื่อเปิดใช้ จะมีป้ายเตือน **3.30 · กำลังดูคู่มือเก่าที่ไม่ได้รับรอง** แสดงตลอดบนหน้าเควสต์ เช็กลิสต์ และตรวจยอด/สำรอง พร้อมปุ่ม **หยุดแสดงข้อมูลเก่า** ผู้ใช้ยังต้องตรวจ STOP และตัวนับในเกมจริงทุกครั้ง การอนุญาตให้แสดงคู่มือเป็นเพียง **การตั้งค่าการอ่านข้อมูล** ไม่ใช่การยืนยัน Achievement หรือผลทดสอบ 3.30

ระบบจำแพตช์ที่เลือกและการอนุญาตแสดงข้อมูลเก่าไว้ **ในเบราว์เซอร์นี้** โดยใช้คีย์ที่ไม่ปะปนกับข้อมูลตัวละครและไม่ได้ส่งออกกับ Backup ข้อมูล 745 ID เดิม, ตัวละคร, เครื่องหมายความคืบหน้า และรูปแบบ Backup ไม่เปลี่ยน แพตช์ **3.29** ไม่ได้รับสิทธิ์เปิดคู่มือจากการอนุญาตของ 3.30 ดู [หลักฐานและรายการ QA](./handoff/CONTENT-QA-20261114-PATCH330-REFERENCE-PREVIEW.md)

## Guided campaign · 13 November 2026

The **Quests** view opens directly at the current quest. Choose a character and Act or additional area, then use the step selector to pick a different quest stage. The app remembers the last area and selected stages by character in this browser. First-time profiles start in Act 1. Route position is a display preference and is stored separately from the existing progress and backup formats.

Instructions, location, timing, STOP guidance and the canonical checkbox are in the same reading flow. A successful check moves focus to the next item or step action. **Undo last check** restores the latest inline mark in the open stage. Use **Review other items in this step** to revisit individual marks, and **Sources and full Act checklist** for references, filters and the Act inventory.

Use **Settings** for independent guidance and in-game name preferences, patch selection and legacy character tools. The **Backup & verify** view compares manual records with in-game totals and offers the combined backup. The campaign overview, patch caveats and historical source links are available below the guide.

Run `node poe-all-ears/validate-data.cjs`, `node poe-all-ears/validate-ui.cjs` and `node poe-all-ears/test-browser.cjs` from the repository root. For screenshots, set `POE_BROWSER_ARTIFACTS` to an output directory. Browser QA verifies the interface and saved state. Patch 3.29 and 3.30 gameplay remains unverified.


**เข้าใช้งานหน้าเดียว:** https://zatanz.github.io/ggg/poe-all-ears/

เว็บเดียวสำหรับ 4 Achievement: **All Ears (484 บทสนทนา)**, **No Stone Unturned (140 Lore)**, **Locomancer (91 Waypoints)** และ **No Loose Ends (30 Side Quests)** มีเมนูหลักเพียง **3 ส่วน** ได้แก่ **ตาม Act**, **เช็กลิสต์ทั้งหมด** และ **ตรวจยอด / สำรอง**; ในแต่ละ Act มีหัวข้อพับเก็บได้ พร้อมยอดความคืบหน้าและปุ่มเลือก Act 1–10

## ภาพประกอบเควสต์แบบตรวจจุดพลาด (อัปเดต 12 พ.ย. 2026)

เพิ่มภาพจำลองหน้า World / Quest ที่เปิดดูได้จาก **ขั้นตอนนั้นโดยตรง** รวม **6 ภาพ**: Act 1 — Glyph Wall, Brutus, Fairgraves; Act 2 — Chamber of Sins ก่อนช่วย Helena, Maligaro's Spike / รากไม้ก่อนจัดการ Lorrata, Ancient Seal / Bandits. ภาพทั้งหกเป็น **ภาพจำลองต้นฉบับ ไม่ใช่ Screenshot จากเกมจริง** และมีป้ายแยกชัดเจน พร้อมข้อความภาษาไทยว่าให้ตรวจสิ่งใดในเกม แหล่งอ้างอิง และลิงก์เปิดภาพขนาดเต็ม

ภาพจะถูกพับเก็บไว้ก่อนเพื่อลดความแน่นของหน้า ข้อมูล Checklist, ตัวละครและ Backup ยังคงใช้ฐานเดิม. จุดเสี่ยงจาก Wiki ปี 2025 และคู่มือ Steam ยังต้องตรวจในแพตช์ 3.30 ก่อนอ้างว่าเป็นเส้นทางที่ปลอดภัย

ดู [รายการภาพและสิ่งที่ยังขาด](./QUEST-VISUAL-UX-STATUS.md)

## UI แบบทำตามขั้นตอนและหมวด Lore เฉพาะ (12 พฤศจิกายน 2026)

หน้า **ตาม Act** แสดงจุดตรวจเควสต์สำคัญทีละจุด พร้อมตัวเลือกเลือกขั้นตรวจ ปุ่ม **ก่อนหน้า / ถัดไป** และสถานะที่บันทึกจาก Checklist เดิม. รายการบทสนทนาที่ยาวถูกยุบไว้โดยค่าเริ่มต้นและจำการเปิด/ปิดแยกตาม Act. สิ่งที่ต้องทำเสริมจากไฟล์ Excel จะปรากฏในหมวด **คำเตือนจาก Excel ที่ต้องตรวจเพิ่ม** ซึ่งปิดอยู่จนผู้เล่นต้องการตรวจรายละเอียด.

แถบ Act มีทางลัดเพิ่มเติมสองหมวด (ยังนับใน **No Stone Unturned 140** ชิ้นเท่าเดิม):

- **The Labyrinth · 10 Lore:** แยกตามตำแหน่ง Aspirants' Plaza, ห้อง Labyrinth ที่เปลี่ยนผัง และ Aspirant's Trial. มีแนวทาง 3 ขั้นสำหรับตรวจ Lore ตามห้องที่พบจริง ไม่ใช่แผนที่ตายตัว.
- **Vaal Letter · 16 Lore:** แบ่ง **Vaal Letter 12** และ **Research Journal 4**, เริ่มจากหาพื้นที่สุ่มใน Campaign แล้วใช้ช่องค้นหาชื่อ Side Area เพื่อเทียบชื่อ Lore. ผลค้นหายังอยู่หลังติ๊กสำเร็จ. อย่าใช้วิธีเปิดด้วย Sacrifice Fragment/Map Device จากคู่มือเก่าใน 3.30.

ตรวจแฟ้ม Excel 6 ชีตแล้ว: All Ears 484, No Stone 140 และ Waypoints 91 ไม่ขาด ID; มี `WARNING` 77 แถวตามหมายเลข Wiki โดย **22 แถว** ยังไม่ได้จัดเข้าขั้นตรวจหลัก จึงแยกแสดงเป็นรายการต้องตรวจเพิ่มก่อน โดยยัง **ไม่อ้างว่าพิสูจน์ลำดับเกมจริง**. Excel มีสถานะ `Completed` 15 รายการ แต่เว็บ **ไม่แอบนำเข้าหรือทับสถานะผู้เล่น**.

อ่าน [ผลตรวจไฟล์อ้างอิงและการจัดหมวด](./REFERENCE-WORKBOOK-UX-AUDIT.md) · [Quest Sequence Audit](./QUEST-SEQUENCE-AUDIT.md).

## แนวทางใหม่: แนะนำผู้เล่นเก็บ 4 Achievement ให้ครบ 100%

หน้าแรกแสดง **745 รายการประวัติศาสตร์** โดยเส้นทางที่ให้ติ๊กมี **744 ช่อง** (ไม่นับ Waypoint เก่า 2 จุด และเพิ่ม Karui Shores อีก 1 จุด) สำหรับ 4 Achievement ไม่ใช่ Achievement ทั้งหมดของเกม. มีแผน 13 ช่วง (Act 1–10, Labyrinth, Vaal Side Areas และ Epilogue) และปุ่มเปิดช่วงแรกที่ยังไม่ทำเครื่องหมาย

เมื่อเข้า Act จะเห็น **เป้าหมาย 4 ด้านที่ต้องตรวจให้ครบก่อนออกจาก Act** ได้แก่ บทสนทนา NPC, Lore, Waypoint, เควสต์รอง (แสดงเฉพาะประเภทที่มีรายการ) พร้อมจำนวนที่ยังขาดและปุ่มเปิด Checklist เฉพาะที่ยังไม่เก็บ. หากมีจุดเสี่ยงจากคู่มือเก่า จะแสดงทางลัดไปยังจุดตรวจที่ยังไม่ครบก่อน

หมวด Labyrinth นับ Lore 10 และ Waypoint ของ The Aspirants' Plaza อีก 1 จุด ส่วน Epilogue มีช่องติ๊ก **Karui Shores** ใหม่ที่เก็บสถานะแยกตามตัวละครและสำรองใน Backup รวมได้ โดยไม่ใช้ ID #90 Oriath หรือ #91 The Templar Laboratory ซึ่งคงไว้เป็นรายการประวัติศาสตร์รองรับเซฟเก่า. ตัวนับเส้นทางคือ **89 Waypoint เดิมที่ยังใช้อ้างอิง + Karui Shores = 90 จุดตาม Wiki**; ยอดปลดล็อกจริงในเกม 3.30 ยังไม่ได้รับรอง. ฐานข้อมูลต้นทาง 745 ID เดิมไม่ถูกเปลี่ยน

**เงื่อนไขผ่าน:** ติ๊กครบในเว็บเป็นเพียงบันทึกของผู้เล่น ต้องตรวจยอดจากเกมจริงเพื่อยืนยัน Achievement ที่ปลดแล้ว. ข้อมูลการเดินเควสต์ 3.30 ยังไม่ผ่านการทดสอบกับเกมจริง จึงยังไม่อ้างว่าเป็นเส้นทางปลอดภัยครบถ้วน

อ่านคู่มือ [เส้นทางสู่ 100%](./ROAD-TO-100-PERCENT.md) และ [หลักฐานจุดเสี่ยง](./QUEST-SEQUENCE-AUDIT.md)

## วิธีใช้งาน (UI ปรับปรุงจากฟีดแบ็กผู้เล่นจริง)

1. เลือกตัวละครของคุณด้านบน
2. กด **ตาม Act** เลือก Act ที่กำลังเล่นจากแถบ Act 1–10 และเปิดหมวดที่ต้องการเก็บ: **บทสนทนา NPC**, **สำรวจ Lore**, **จุดวาร์ป (Waypoint)**, **เควสต์รอง**
3. ทำเครื่องหมายเมื่อได้ **ฟัง / สำรวจ / เปิด / ทำสำเร็จ** ในเกมแล้ว; ค่าเริ่มต้นแสดงทุกรายการพร้อมสถานะ “เก็บแล้ว / ยังไม่เก็บ” โดยรายการจะไม่หายทันทีเมื่อทำเครื่องหมาย
4. เลือก **เช็กลิสต์ทั้งหมด** เมื่อต้องการดูรายการแยกประเภท หรือค้นหา Vaal Letter ตามชื่อ Vaal Side Area
5. เลือก **ตรวจยอด / สำรอง** เพื่อกรอกจำนวน Achievement ที่เกมแสดง เทียบความคืบหน้า และส่งออกข้อมูลทั้งสี่หมวดเป็นไฟล์เดียว

ชื่อ NPC เควสต์ ไอเท็ม และพื้นที่ยึด **ชื่ออังกฤษจากเกม** เป็นหลัก โดยเลือกแสดงชื่อภาษาอังกฤษ ชื่อไทยที่เกลาเพื่อช่วยอ่าน หรือทั้งสองแบบได้อิสระจากภาษาคำอธิบาย ส่วน Lore ให้ผู้เล่น **โต้ตอบกับวัตถุและเทียบยอดที่เกมนับจริง** ก่อนติ๊ก ไม่อ้างว่าเพียงเดินผ่านหรือเห็นวัตถุก็นับแล้ว.

อ่าน [แนวทาง UX/คำศัพท์ฉบับล่าสุด](./UX-REDESIGN.md).

## คำอธิบายระหว่างเล่น (อัปเดต 12 พฤศจิกายน 2026)

ระบบหน้าเดียวแสดงชื่อรายการ ความสำคัญ และสถานะก่อน เพื่อลดความแน่น โดยกด **วิธีเก็บ · เงื่อนไข · ที่มา** เพื่อเปิดรายละเอียด ได้แก่ พื้นที่หรือ NPC, เงื่อนไขก่อนเก็บ, จุดที่ห้ามพลาด, หมายเหตุ, แหล่งข้อมูล และสถานะการตรวจแพตช์

- **All Ears (484 รายการ):** แสดง NPC และหัวข้อบทสนทนาโดยรักษาชื่ออังกฤษตามเกม; Act 1 มีร่างขั้นตอนภาษาไทยจาก guide-act1.js ทั้ง 41 รายการ; ไฟล์ Route และหมายเหตุจากตารางเก่าช่วยระบุเงื่อนไขพิเศษของ Acts อื่น แต่ **ไม่ได้แปลว่าครบหรือผ่านการตรวจรายรายการกับ 3.30**.
- **Act 2 สาขา Bandits:** หัวข้อ Eramir แถว Wiki #101 เปลี่ยนตาม Bandit ตัวแรกที่ฆ่า และ #102 เปลี่ยนตาม Bandit ที่เหลือรอด; เชื่อมกับตัวเลือกในกล่อง Safety แทนการแสดงหัวข้อ Kraityn/Oak แบบตายตัว. ทั้ง 69 รายการสามารถกดดูเพิ่มได้จนครบ.
- **No Stone Unturned (140 รายการ):** ระบุพื้นที่และวัตถุ; Letters of Exile, หนังสือ The Library และ Vaal Side Areas มีคำเตือนเรื่องการสุ่ม/ข้อความซ้ำ. ต้องโต้ตอบกับวัตถุในเกม ไม่จำเป็นต้องอ่านทุกประโยค.
- **Locomancer (91 รายการ):** ระบุพื้นที่ที่ต้องเข้าไปเปิด Waypoint พร้อมบอกชัดว่ารายการยังไม่ได้ตรวจยืนยันแพตช์ 3.30.
- **No Loose Ends (30 รายการ):** ระบุชื่อเควสต์และ Act ตามตารางเก่า ให้ตรวจ Quest Log และจบเควสต์จริง; ข้อมูล NPC ผู้มอบเควสต์/ขั้นตอนละเอียดที่ยังไม่มีหลักฐานจะขึ้นว่าไม่ยืนยัน แทนการเดา.
- **หมายเหตุจาก Excel รุ่นเก่า:** แปลงคำเตือนเฉพาะจุดสำคัญ 62 รายการเป็นภาษาไทย โดยยังแยกสถานะว่าเป็น **ข้อมูลอ้างอิงประวัติศาสตร์** ไม่ใช่หลักฐานว่าทดสอบในเกม 3.30 แล้ว.

**ขอบเขตสำคัญ:** มีบรรทัดแนะนำเบื้องต้นครบทุกรายการรวม 745 รายการ แต่ไม่ได้มีคำอธิบายเฉพาะสถานการณ์ที่พิสูจน์แล้วครบ 745 รายการ. ข้อความที่ไม่มีเงื่อนไขยืนยันจะแสดงตามจริงว่าไม่มีข้อมูลรายรายการที่รับรอง. ดู [ผลตรวจและสิ่งที่ต้องพิสูจน์ในเกม](./PATCH-330-AUDIT.md).

## รางวัลจากเควสต์ (Quest Rewards)

แท็บ **ตาม Act** มีหมวดพับเก็บ **รางวัลเควสต์** แสดงข้อมูลอ้างอิง 58 เควสต์ใน Acts 1–10 แยกจากรายการ Achievement โดยไม่มีช่องทำเครื่องหมาย จึงไม่ทำให้ยอด All Ears / No Stone Unturned / Locomancer / No Loose Ends เปลี่ยน

- ระบุชื่อเควสต์ ประเภทรางวัล และสรุปรางวัล ได้แก่ Passive Skill Point, Passive Refund Point, Skill/Support Gem, อุปกรณ์ และตัวเลือก Bandits
- รายละเอียด **เควสต์รอง** ที่ตรงกับฐานรางวัลจะมีรางวัลอ้างอิงในกล่องวิธีเก็บด้วย
- ตารางรางวัลเดิมอยู่ที่ quest-rewards.js: 58 รายการ / 10 Acts (9, 5, 7, 3, 6, 6, 7, 5, 4, 6)
- สำหรับ Gem/อุปกรณ์ที่ตัวเลือกเปลี่ยนตามคลาส ให้เปิด [PoE Wiki: List of quest rewards](https://www.poewiki.net/wiki/List_of_quest_rewards) ตรวจรายคลาสก่อนตัดสินใจ และข้อมูลยัง **ไม่ได้รับรองแพตช์ 3.30**
- **รางวัลเควสต์ไม่ใช่รางวัลจากการปลด Achievement** เว็บไม่มีข้อมูลยืนยันว่ารางวัล cosmetic/Steam สำหรับ Achievement เหล่านี้มีอะไรบ้าง จึงไม่แสดงว่าได้รับไอเทมจากการติ๊ก Checklist

## จุดตรวจสำคัญก่อนเปลี่ยนสถานะเควสต์ (Act 1–10)

ในโหมด **ตาม Act** มีส่วน **ก่อนเดินเควสต์ต่อ · จุดที่อาจพลาด** ก่อนแสดง Checklist ที่ยาวทั้งหมด. ครอบคลุม **39 กลุ่ม / 72 รายการบทสนทนา** ซึ่งอ้างอิงเงื่อนไขจาก PoE Wiki ปี 2025 และใช้ checkbox ร่วมกับ All Ears เดิม; ไม่มีการเพิ่มรายการ Achievement ใหม่.

- **Act 1 (3 กลุ่ม):** ตรวจ Strange Glyphs ก่อนใส่ Glyph Wall, บทสนทนา Brutus ก่อนฆ่าบอส, Fairgraves/Bestel ก่อนเก็บ Allflame.
- **Act 2 (7 กลุ่ม):** The Great White Beast, Intruders in Black, Baleful Gem/Spike และลำดับ The Darkness → Bandit ตัวแรก/ตัวที่สอง → กลับ Eramir ทุกครั้งก่อนฆ่าตัวถัดไป. เชื่อมเช็กลิสต์ Bandit manual state กับหน้าจุดตรวจหลัก.
- **Act 3 (5 กลุ่ม):** ก่อนส่ง Tolman's Bracelet ให้ Clarissa, ลำดับไอเทมของ Lady Dialla / Fairgraves, ก่อนฆ่า General Gravicius และ Piety.
- **Act 4–9 (24 กลุ่ม):** รวบรวมคำเตือนก่อนจบเควสต์ สู้บอส หรือออกจากพื้นที่ตามข้อความ `before` ที่มีอยู่ในไฟล์ Route เดิมอีก 37 รายการ โดยจัดกลุ่มให้เปิดอ่านตามบริบทของ Act นั้น
- **Act 10:** ไม่มีจุดตรวจแบบดังกล่าวในฐานอ้างอิงที่ใช้ จึงขึ้นข้อจำกัดชัดเจนว่าไม่ได้หมายความว่าไม่มีความเสี่ยง
- เควสต์ที่มีรางวัลอ้างอิงในฐานเดิมจะแสดงรางวัลในกล่องจุดตรวจเดียวกัน เพื่อไม่ต้องค้นในอีกหมวด.
- **ข้อจำกัด:** เป็นกลุ่มจุดที่อาจพลาด ไม่ใช่การยืนยันเส้นทางเดินเนื้อเรื่องครบทุกเควสต์ และยังไม่ได้ทดสอบจริงในแพตช์ 3.30.


**แก้ลำดับและจังหวะบทสนทนา:** ไม่ย้ายกลุ่มเสี่ยงสูงขึ้นมาแซงกลุ่มก่อนหน้า และในกลุ่มที่มีหลายบทสนทนาจะแสดงเวลา **เปิดเมื่อ / ต้องตรวจ** แยกทุกรายการโดยอ้างอิงไฟล์ Route. Act 3 แปลงเงื่อนไขที่เดิมเป็นภาษาอังกฤษอีก 7 รายการให้เป็นภาษาไทย.

**Act 10:** เพิ่ม 3 กลุ่ม **หลังจบเควสต์** สำหรับ Lilly Roth หลังจบ Safe Passage, Death and Rebirth และ An End to Hunger (ตาม Wiki ปี 2025). เป็นบทสนทนาที่ต้องกลับไปคุยหลังเควสต์ ไม่ใช่หลักฐานว่าเป็นจุดพลาดถาวร. ส่วนจุดเสี่ยงก่อนเควสต์ใน Act 10 ยังไม่มีหลักฐานชัดจากชุด Route เดิม. ดู [การตรวจลำดับและข้อจำกัด](./QUEST-SEQUENCE-AUDIT.md).

**คำเตือน Bandits:** เส้นทางที่คู่มือปี 2025 อธิบายสำหรับ Eramir หลังฆ่าครั้งที่หนึ่ง ครั้งที่สอง และครบสามตัว ต้องแยกจากกรณีเลือกช่วย Bandit; ยังไม่มีการยืนยันว่า Book of Reform แก้สถานะที่พลาดได้ใน 3.30.

อ่าน [การตรวจลำดับเควสต์และข้อจำกัด](./QUEST-SEQUENCE-AUDIT.md) และ [Matrix การตรวจแพตช์](./PATCH-330-AUDIT.md).

## UX รอบล่าสุด: รายการที่อ่านง่ายและความสำคัญ

- เมื่อเริ่มใช้ โหมด **ตาม Act** จะแสดง **ทั้งหมด (เห็นสถานะ)** เป็นค่าเริ่มต้น รายการที่ทำเครื่องหมายแล้วจะ **ไม่หาย** แต่แสดงป้าย **เก็บแล้ว** และสียืนยันแยกจาก **ยังไม่เก็บ**.
- แต่ละแถวแสดงชื่อรายการ ความสำคัญ และสถานะก่อน ส่วนวิธีเก็บ พื้นที่ เงื่อนไข และที่มาอยู่ในปุ่มขยาย คำเตือนเกี่ยวกับบทสนทนาที่อาจพลาดยังมองเห็นได้ทันที.
- **จำเป็นต่อ Achievement** หมายถึงรายการอ้างอิงที่ต้องเก็บเพื่อให้ Achievement ประเภทนั้นครบ ไม่ได้แปลว่าเป็นเควสต์บังคับของเนื้อเรื่อง.
- ใน **รางวัลเควสต์ของ Act** จัด Passive Skill/Refund Point เป็น **ควรเก็บ**, เควสต์ที่มีตัวเลือกสำคัญเป็น **ระวัง**, ส่วน Gem/อุปกรณ์เป็น **ตามความต้องการ**. นี่เป็นลำดับความสำคัญของรางวัล ไม่ใช่การรับรองว่าข้ามเควสต์เนื้อเรื่องได้.
- รางวัลเควสต์ที่ตรงกับรายการ **No Loose Ends** จะแสดงในบรรทัดของเควสต์นั้นเพื่อช่วยค้นหา โดยแยกรางวัลออกจากตัวนับ Achievement ชัดเจน.
- คงข้อมูลอ้างอิงเดิมทั้งหมด; การตรวจรับรองกับแพตช์ 3.30 และการทดสอบผู้เล่นจริงยังต้องทำ.
- รายละเอียดรางวัล **แยกคลาส, Gem ทีละชิ้น, และอุปกรณ์ทีละรุ่น** ถูกเลื่อนไปทำภายหลัง แทนการเพิ่มความซับซ้อนให้ UI ตอนนี้.

ดู [บันทึกปัญหาและลำดับงาน](./UX-PRIORITY-BACKLOG.md).

## ฟีเจอร์หน้าเดียว

- เลือกตัวละครด้านบนเพียงจุดเดียว: สี่หมวดบันทึกแยกกันต่อหนึ่งตัวละคร; ไม่รวมความคืบหน้าหลายตัวละคร
- **เล่นตาม Act** แสดง All Ears ตามลำดับ PoE Wiki ปี 2025 แยกจาก Lore, Waypoint, Side Quest ตามหมวด ไม่อ้างว่าเป็นลำดับเดินเควสต์ทั้งหมดที่ได้รับรอง
- **Act 2 Safety** เก็บเช็กลิสต์คุยกับ Bandits, Ancient Seal, The Darkness และลำดับการจัดการ Bandits แบบกรอกเอง; คำเตือนต้องตรวจตามแพตช์และการเล่นจริงอีกครั้ง
- **Vaal side area search** ค้นชื่อพื้นที่จากตัวอย่างใน PoE Wiki และจับคู่กับ Vaal Letter/Research Journal; ใช้ ID เก่าเพื่อไม่เปลี่ยนเซฟ แต่แสดงหมายเลข Wiki แยก (16 รายการ)
- **Progress Recheck** เปรียบเทียบยอดที่เกมแสดงกับจำนวนที่ติ๊ก แล้วบันทึกจุดเทียบยอดตรงกันเป็น baseline สำหรับย้อนตรวจ; ไม่สามารถระบุรายการที่พลาดจากเกมอัตโนมัติ
- **Backup รวม (v2)** ส่งออกไฟล์เดียวสำหรับทุกตัวละครและทั้งสี่หมวด รวมตัวเลือกผู้ปกครอง Highgate (Irasha/Tasuni) ที่บันทึกไว้; นำเข้าเป็นตัวละครใหม่โดยไม่ทับเซฟเดิม ยังรองรับไฟล์ v2 เก่าที่ไม่มีฟิลด์นี้ และตรวจรูปแบบก่อนนำเข้า
- ตัวหน้าหลักยังใช้ข้อมูล All Ears และ Backup v1 เดิมได้เหมือนเดิม; หน้า companion.html / extras.html / walkthrough.html ยังเก็บไว้เพื่อรองรับลิงก์เก่า แต่ไม่จำเป็นต้องสลับหน้าเพื่อใช้งานหลัก

**คำเตือนด้านข้อมูล:** ชุดชื่อและลำดับ All Ears มาจาก PoE Wiki ฉบับปี 2025 และ Excel 3.9; ชุด Lore/Waypoint/Side Quest ตรงกับ Excel เดิมแต่ยังไม่ยืนยันกับแพตช์ 3.30 ที่เปิด 13 พฤศจิกายน 2026 (PST). Patch Notes 3.30 ระบุว่า Vaal Side Areas จะไม่ปรากฏใน Maps อีกต่อไป; ไม่ควรใช้วิธีฟาร์มจากคู่มือ Map Device เก่า. `0/484` คือจำนวนรายการที่ได้รับรองด้วยหลักฐานในเกมปัจจุบัน ณ Checkpoint นี้ ไม่ใช่จำนวนรายการที่อยู่ในเว็บ

**QA:** [ชุดตรวจ GitHub Actions](https://github.com/zatanz/ggg/actions/workflows/all-ears-validation.yml) ทดสอบ Validation และ Chromium/browser smoke ทั้งหน้าเดียว, เซฟ, Backup, อุปกรณ์มือถือ. การผ่าน CI **ไม่เท่ากับ** การรับรองเงื่อนไข Achievement ในเกม.

**แหล่งอ้างอิง:** [All Ears (Wiki)](https://www.poewiki.net/wiki/Guide:All_Ears_achievement) · [No Stone Unturned (Wiki)](https://www.poewiki.net/wiki/Guide:No_Stone_Unturned_achievement) · [Vaal side area (Wiki)](https://www.poewiki.net/wiki/Vaal_side_area) · [PoE 3.30 Patch Notes](https://poedb.tw/us/Version_3.30.0) · [Checkpoint](./DELIVERY-PLAN.md)

---

## เอกสารและข้อมูลรุ่นเดิม

# All Ears Checklist — รายละเอียดรุ่นเดิม

## Companion update — 2026-11-12
Three additional tracker surfaces are now available as historical, manual-use aids:

- **[No Stone Unturned / Act 2 Safety / Vaal search / Recheck](https://zatanz.github.io/ggg/poe-all-ears/companion.html):** 140 lore markers, filter by Act/area, 16 Vaal lore entries (12 letters and 4 journals), manually confirmed Act 2 prerequisites, and a count comparison with an optional previous matching checkpoint.
- **[Locomancer + No Loose Ends](https://zatanz.github.io/ggg/poe-all-ears/extras.html):** 91 waypoint markers and 30 side quest markers from a historical 3.9 reference. **Not current-patch certified.**
- **[Classic All Ears](https://zatanz.github.io/ggg/poe-all-ears/):** existing 484 stable dialogue IDs and character data are unchanged; [Guided Preview](https://zatanz.github.io/ggg/poe-all-ears/walkthrough.html) now has Act 2 wiki-based missable confirmation prompts and links to companion tools.

### Data and patch limitations

- All Ears 484 IDs are cross-mapped to PoE Wiki's 2025 guide, but **0/484 are certified for patch 3.30**. The same limitation applies to every supplemental list; labels and area names may be abbreviated or obsolete.
- These web pages **do not connect to the game**. Recheck compares only the player's manually entered total with manually checked entries. Matching totals do **not** guarantee correct specific items, and mismatches do not identify exact missing items.
- Vaal Side Area spawns can vary. A small area-name lookup maps only specifically sourced examples; unknown area names are reported as unknown rather than guessed.
- Patch 3.30 notes remove Vaal Side Areas from Maps and make old Sacrifice/Mortal Fragment farming instructions obsolete. Do not use the legacy Map Device strategy without checking the target patch.
- **Backup/migration:** The legacy All Ears backup format and storage key remain unchanged. For a complete move between devices, prefer the **unified Backup & verify > combined backup (schema:2)**; it covers all four checklists, per-character quest confirmations and optional Highgate ruler choice. Older combined backups without `rulerChoice` remain importable. Standalone legacy exports still exist for backwards compatibility, but do **not** transfer this newer ruler-choice metadata. Import adds new characters rather than overwriting the existing ones.
- The historical source spreadsheet supplied by the user marked its prose privately owned; the companion publishes only factual item identifiers/locations, not its commentary or guide text.
- Current deployment/build and smoke tests check UI and persistence, **not** in-game applicability. See [delivery plan](./DELIVERY-PLAN.md).


**แผนส่งมอบและจุดทำงานต่อ:** [DELIVERY-PLAN.md](./DELIVERY-PLAN.md) — แยกงานที่ทำแล้วจากงานที่ยังไม่ผ่าน QA และกำหนด Release Gates

เช็กลิสต์บทสนทนา NPC สำหรับ Achievement **All Ears** จำนวน **484 รายการ / 10 Acts** มีตัวละครแยกกัน บันทึกอัตโนมัติผ่าน localStorage และดาวน์โหลด/นำเข้าข้อมูลสำรองได้

## เปิดใช้เว็บ

- **GitHub Pages (ตรวจผล deploy แล้ว; ยังไม่ได้ทดสอบการใช้งานจริงในเบราว์เซอร์):** https://zatanz.github.io/ggg/poe-all-ears/
- **ซอร์สโค้ด:** https://github.com/zatanz/ggg/tree/master/poe-all-ears
- ไม่ต้องสร้างบัญชีและไม่มีบริการเซิร์ฟเวอร์เก็บข้อมูลผู้เล่น

## ตั้งค่า/ตรวจ GitHub Pages (หากจำเป็น)

1. ไปที่ https://github.com/zatanz/ggg/settings/pages
2. **Build and deployment → Source:** เลือก **Deploy from a branch**
3. **Branch:** เลือก **master** และโฟลเดอร์ **/(root)**
4. กด **Save** จากนั้นดูสถานะ Deploy และ URL ที่ GitHub รายงานในหน้า Settings → Pages
5. ทดสอบลิงก์จริงจากมือถือ และเปิดหน้าใน Private/Incognito เพื่อตรวจว่าสามารถเข้าถึงได้โดยไม่ลงชื่อเข้าใช้

เว็บ static อยู่ใน \`poe-all-ears/index.html\` และโหลดข้อมูลจาก \`poe-all-ears/data.js\` โดยไม่มีขั้นตอน build

## วิธีใช้

1. เพิ่มชื่อของตัวละคร หรือเลือกตัวละครที่มีอยู่
2. กรอง Act / สถานะ แล้วติ๊กบทสนทนาที่คุยแล้ว
3. ดูจำนวนรวม 0–484 และความคืบหน้าในแต่ละ Act
4. สำรองเป็น \`poe-all-ears-backup.json\` เป็นระยะ และใช้ปุ่ม Import เมื่อต้องย้ายอุปกรณ์

**ความเป็นส่วนตัว:** เก็บสถานะไว้ในเบราว์เซอร์ของแต่ละคนเท่านั้น เว็บไม่ส่งชื่อผู้เล่นไปยัง GitHub หากล้างข้อมูลไซต์ ความคืบหน้าในอุปกรณ์นั้นจะหาย นอกจากมีไฟล์สำรอง

## ความถูกต้องและข้อจำกัดของข้อมูล

- จำนวน 484 และ Act counts: อ้างอิง [PoE Wiki — Guide: All Ears achievement](https://www.poewiki.net/wiki/Guide:All_Ears_achievement) (หน้า wiki ระบุว่าปรับปรุงล่าสุด 30 มิ.ย. 2025)
- รายการรายละเอียดเริ่มจาก [เช็กลิสต์ MysticalChill เวอร์ชัน 3.9](https://docs.google.com/spreadsheets/d/1RWPN_NO3wcl7QRTHP6iTONG-T47VForpQgZ-eN2IQzc/edit) และปรับจำนวนให้ตรงกับเวอร์ชันที่เลิกใช้ Navali: ลบบทสนทนา Navali 20 รายการ และบทสนทนา Weylam Roth / Kitava ใน Act 10 อีก 1 รายการ ได้ 484 รายการ (Act 1–10: 41, 69, 71, 72, 44, 44, 45, 30, 36, 32)
- **สำคัญ:** ลำดับบทสนทนาบางส่วนยังอิงเช็กลิสต์เก่า และยังไม่ได้รับการยืนยันว่าเป็นลำดับการเดิน/เงื่อนไขเดียวกับ Wiki ปัจจุบันทุกรายการ โปรดอ่านคู่มือ Wiki ประกอบ โดยเฉพาะจุดที่พลาดแล้วคุยซ้ำไม่ได้
- Achievement ต้องทำบทสนทนาให้ครบในตัวละครเดียว; คะแนนที่ต่างตัวละครกันไม่สามารถนำมารวมกันได้
- สคริปต์นี้เป็นโครงการแฟนทำ ไม่เกี่ยวข้องหรือได้รับการรับรองโดย Grinding Gear Games

## ตรวจรับ

- ชุดข้อมูล 484 ID แบบไม่ซ้ำ
- ครบ 10 Acts
- ฟีเจอร์เพิ่ม/เปลี่ยนชื่อ/ลบตัวละคร และบันทึกแยกความคืบหน้า
- ส่งออก/นำเข้าไฟล์ JSON
- รองรับหน้าจอมือถือด้วย responsive CSS

หมายเหตุ: การมีไฟล์อยู่บน GitHub **ไม่ได้แปลว่า Pages ถูกเปิดแล้ว**; ต้องตรวจ deployment จริงใน GitHub Settings → Pages

## ปรับภาษาคำอธิบายทั้งเว็บไซต์ — 13 พฤศจิกายน 2026

คู่มือ **Act 1–10 มีขั้นตอนและคำเตือนแบบไทย–อังกฤษตามช่วงเควสต์ครบแล้ว** รวมถึงเขียนอังกฤษเฉพาะ Act 1–3 ใหม่ 31 ช่วงและเกลาภาษาไทยจุดเสี่ยงอีก 20 ช่วง. ชื่อเกมภาษาไทยเป็นคำแปลประกอบ ไม่ใช่ชื่ออย่างเป็นทางการ และสามารถเลือกภาษาเฉพาะคำอธิบายแยกจากชื่อได้. รายละเอียดในแต่ละช่อง Checklist แสดงว่าจะทำอะไร เมื่อไร ต้องระวังอะไร และมีปุ่มเปิดช่วงเควสต์ที่เกี่ยวข้อง. หน้า Labyrinth, Vaal, Epilogue, ตรวจยอด และสำรองข้อมูลมีคำอธิบายสองภาษาด้วย. ยังไม่รับรองความถูกต้องกับแพตช์ 3.30 หรือการปลด Achievement 100% จริง. [ดูรายงานตรวจภาษาและ UX](./LANGUAGE-EDITORIAL-QA.md).

## คู่มือจุดเสี่ยงสองภาษา — 13 พฤศจิกายน 2026

แผงเตือนเควสต์ที่อาจพลาดเพิ่มเติม **39 กลุ่ม** และบทสนทนาหลังจบเควสต์ Act 10 อีก **3 กลุ่ม** มีข้อความภาษาอังกฤษที่อธิบายเหตุการณ์ วิธีป้องกัน และเหตุผลประกอบแล้ว ไม่ได้เปลี่ยน ID ที่เกมต้องนับ. ตัวช่วย Bandits ของ Act 2, รายละเอียด Lore, รางวัลเควสต์ และคำเตือนจากไฟล์ต้นทางรองรับการเลือกภาษาคำอธิบาย. แหล่งข้อมูลไทยเดิมยังเปิดตรวจย้อนหลังได้. **คำเตือนเหล่านี้อ้างอิง Wiki/คู่มือเก่า ไม่ใช่การรับรองแพตช์ 3.30 หรือหลักฐานปลด Achievement 100%**. อ่าน [รายงานตรวจภาษา](./LANGUAGE-EDITORIAL-QA.md).
