# Path of Exile 1 — Achievement Companion (single-page preview)

**เข้าใช้งานหน้าเดียว:** https://zatanz.github.io/ggg/poe-all-ears/

เว็บเดียวสำหรับ 4 Achievement: **All Ears (484 บทสนทนา)**, **No Stone Unturned (140 Lore)**, **Locomancer (91 Waypoints)** และ **No Loose Ends (30 Side Quests)** มีโหมด **เล่นตาม Act** สำหรับแสดงทั้งสี่หมวดร่วมกัน และแท็บแยกสำหรับค้นหาหรือแก้ไขเฉพาะประเภท

## ฟีเจอร์หน้าเดียว

- เลือกตัวละครด้านบนเพียงจุดเดียว: สี่หมวดบันทึกแยกกันต่อหนึ่งตัวละคร; ไม่รวมความคืบหน้าหลายตัวละคร
- **เล่นตาม Act** แสดง All Ears ตามลำดับ PoE Wiki ปี 2025 แยกจาก Lore, Waypoint, Side Quest ตามหมวด ไม่อ้างว่าเป็นลำดับเดินเควสต์ทั้งหมดที่ได้รับรอง
- **Act 2 Safety** เก็บเช็กลิสต์คุยกับ Bandits, Ancient Seal, The Darkness และลำดับการจัดการ Bandits แบบกรอกเอง; คำเตือนต้องตรวจตามแพตช์และการเล่นจริงอีกครั้ง
- **Vaal side area search** ค้นชื่อพื้นที่จากตัวอย่างใน PoE Wiki และจับคู่กับ Vaal Letter/Research Journal; ใช้ ID เก่าเพื่อไม่เปลี่ยนเซฟ แต่แสดงหมายเลข Wiki แยก (16 รายการ)
- **Progress Recheck** เปรียบเทียบยอดที่เกมแสดงกับจำนวนที่ติ๊ก แล้วบันทึกจุดเทียบยอดตรงกันเป็น baseline สำหรับย้อนตรวจ; ไม่สามารถระบุรายการที่พลาดจากเกมอัตโนมัติ
- **Backup รวม (v2)** ส่งออกไฟล์เดียวสำหรับทุกตัวละครและทั้งสี่หมวด; นำเข้าเป็นตัวละครใหม่โดยไม่ทับเซฟเดิม ตรวจรูปแบบก่อนนำเข้า และทดสอบใน Chromium
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
- **Backup/migration:** existing All Ears backup format and storage key remain unchanged. Lore and Waypoint/Quest trackers use independent localStorage keys and each has its own export/import button. To move progress between devices, export **all three** backup files. Import adds/merges supplemental checked entries; it does not erase existing legacy progress.
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
