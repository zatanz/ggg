# PoE 1 Achievement Content QA — evidence audit, 14 November 2026 (Asia/Bangkok)
**Owner:** ChatGPT editorial. **Status:** PARTIAL VERIFIED / 3.30 GAMEPLAY HOLD. **Source branch:** `fix/poe-content-qa-bandits-evidence-20261114`.
**Do not convert source guidance into a guaranteed 3.30 perfect-run route.** This file documents claims, their evidence class, and editorial corrections. No gameplay was performed by ChatGPT.

## Cross-source classification
| Topic | What can be said | Evidence level | Editorial outcome |
|---|---|---|---|
| Act 1 Fairgraves local #34–38 | During the **3.29** league, the Steam guide author reported an inability to talk to Fairgraves; a contemporaneous community report identifies the 4 Fairgraves + 1 Bestel topics. | Historical community report, corroborated with guide author; **not GGG confirmation and not proof for 3.30** | Keep a visible caution/HOLD; never assert fixed or still broken in 3.30 |
| Act 2 before Ancient Seal | PoE Wiki All Ears advises **talk to every Bandit BEFORE opening Ancient Seal** and **do not kill before The Darkness** | Historical Wiki 2025 guide | State as historical recommended order, not patch-3.30 guarantee |
| Act 2 Steam route | Steam 3.28 guide shows **The Darkness** collection, then kill Kraityn/Alira/Oak, returning to Eramir between kills; it does **not explicitly prohibit initial Bandit conversation before Seal** | Exact guide contents and ordering | Remove unsupported claim “Steam forbids TALKING to Bandits before Seal”; disagreement about necessary first-talk timing was overstated |
| Act 2 local vs Wiki row IDs | Canonical `data.js`: #95–99 town Darkness; #100 Alira Darkness; **#101 Eramir Oak after Alira**; **#102 Oak Darkness**; **#103 Eramir Bandit Lords**. Wiki *row* 101–103 refer to variable Eramir kill-order topics and cannot be substituted for local IDs. | Direct code readback + historical Wiki table | Correct all local-ID labels without changing stored IDs |
| Act 9 Highgate | PoE Wiki 2025 lists alternate ruler outcomes on Wiki rows 441/442: Irasha recipient vs Tasuni recipient, with different NPC dialogue. Canonical local keys #441 Irasha Maraketh Justice, #442 Irasha Garukhan, #443 Tasuni Feather of Sekhema, #444 Petarus/Vanja Irasha represent historical Irasha route. | Code + 2025 Wiki | Keep branch disclaimer; 3.30 Tasuni route not certified or fully mapped |
| PoE 3.30 timeline | GGG announced release date 13 Nov PST (=14 Nov in Thailand), with later full patch notes. No complete in-game 3.30 All Ears test in this project. | Official announced date, **not gameplay proof** | Avoid timeless “3.30 is next patch” label; change to “3.30 — Achievement route unverified” |

## Correct editorial copy: Act 2, compact version
**TH** — `PoE Wiki แนะนำให้คุยกับ Bandits ทุกคนก่อนเปิด Ancient Seal และยังไม่ฆ่าก่อนตรวจ The Darkness ส่วน Steam 3.28 จัดลำดับฆ่าหลัง The Darkness แต่ไม่ได้ระบุว่าห้ามคุยก่อน Seal ข้อมูลทั้งหมดเป็นคู่มือเก่า ยังไม่รับรอง 3.30 ก่อนฆ่าหรือช่วยให้ตรวจบทสนทนาที่มีอยู่จริงและบันทึกไว้`

**EN** — `PoE Wiki advises speaking with each Bandit before the Ancient Seal and delaying kills until The Darkness. The Steam 3.28 guide places the kill sequence after The Darkness but does not forbid earlier conversation. These are historical instructions, not a verified 3.30 safe route. Review available dialogue before killing or helping any Bandit.`

## Correct editorial copy: Act 1 Fairgraves
**TH** — `มีรายงานจากผู้เล่นและผู้เขียนคู่มือ Steam ว่า Fairgraves ในลีก 3.29 ไม่เปิดบทสนทนา ทำให้ All Ears #34–38 มีความเสี่ยง ยังไม่มีผลทดสอบที่ยืนยันว่าแก้ไขแล้วหรือยังเป็นปัญหาใน 3.30`

**EN** — `Players and the Steam guide author reported inaccessible Fairgraves conversations in 3.29, affecting All Ears #34–38. Their availability in 3.30 is not independently tested.`

## Live gameplay evidence required before certifying 3.30
1. Start fresh 3.30 character in the specified mode. Screenshot NPC menu after arrival at Fairgraves before taking Allflame; record actual achievement counter and individually test #34, #35, #36, Bestel #37, Fairgraves #38. If unavailable, note area/quest state and whether different instance/mode changes it. **Do not mark unobserved topics.**
2. On a fresh Act 2 character, preserve prior quest state and capture before/after Seal, all Bandit dialogue options and The Darkness, with NPC names, local IDs and the **actual 3.30 achievement counter**. Test first-talk timing safely; do not assume a theory proves a permanent lock.
3. Test first, second and third Bandit kills with Eramir topics, recording NPC topic text and local IDs. Preserve separate counters for Wiki *rows* vs local keys.
4. Test the Irasha and Tasuni branch on separate fresh characters to capture both outcomes and their dialogue count; **do not make one character satisfy two mutually exclusive paths through manual marks**.
5. Verify any 3.30 Locomancer requirement using actual game counters; legacy waypoint #90/91 remain save-compatible historical records.

## Data integrity / deployment
The editorial update in this branch changes only explanatory text (hub.js, steam-quest-walkthrough.js, poe-acts123-bilingual.js, patches.js), not canonical ID, localStorage, save schema, achievement counts or rendered manual checkboxes. Keep the 745 legacy entries. Test data/browser before merging, and verify production release after merge.

## Sources
- [PoE Wiki All Ears (last edited June 2025)](https://www.poewiki.net/wiki/Guide:All_Ears_achievement)
- [Steam route guide 3.28 with 3.29 Fairgraves caveat](https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869)
- [Community 3.29 Fairgraves report, 25 July 2026](https://www.reddit.com/r/pathofexile/comments/1v61ip0/dont_bother_trying_to_complete_the_all_ears/)
- [Official 3.30 release timeline](https://steamcommunity.com/app/238960/announcements/)
- [Repository canonical source](https://github.com/zatanz/ggg/blob/master/poe-all-ears/data.js)
