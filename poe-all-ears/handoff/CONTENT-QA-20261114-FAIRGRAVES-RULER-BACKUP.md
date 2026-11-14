# PoE 1 Achievement Companion — Fairgraves 3.30 and Act 9 backup QA (14 November 2026, Bangkok)

**Editorial owner:** ChatGPT. **Status:** source-reviewed, browser regression required, **NOT live 3.30 gameplay-certified**.

## 1. Act 1 Fairgraves — 3.29 historical reports vs 3.30 observations

The legacy July 25, 2026 [Reddit report](https://www.reddit.com/r/pathofexile/comments/1v61ip0/dont_bother_trying_to_complete_the_all_ears/) says **Fairgraves/Bestel local #34–38** were unavailable in the 3.29 league after the altered encounter; [the Steam 3.28/3.29 guide](https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869) also cautions against an All Ears run in that league.

The newer [13–14 November 2026 player discussion](https://www.reddit.com/r/pathofexile/comments/1xvkrni/does_anyone_know_if_the_all_earsno_stone_unturned/) contains an anecdotal report that **Fairgraves is back to normal** and an anecdote about completing All Ears in **Standard earlier in the week**. Neither commenter supplied reproducible five-topic screenshots/counters from a new 3.30 league character. This is **not** official GGG confirmation or a verified 484/484 league route.

**Approved Thai copy (compact by default):** `ลีก 3.29 มีรายงานว่า Fairgraves/Bestel ไม่เปิดบทสนทนา #34–38 แต่วันที่ 13–14 พ.ย. 2026 มีผู้เล่นระบุว่า Fairgraves กลับมาปกติในลีกใหม่ ทั้งนี้ยังไม่มีหลักฐานยืนยันว่าเก็บครบทั้ง 5 หัวข้อใน 3.30 ได้ทุกสถานะ ตรวจบทสนทนาในเกมจริงก่อนเก็บ Allflame และติ๊กเฉพาะรายการที่ฟังแล้ว`.

**Approved English copy:** `In 3.29, players reported that Fairgraves/Bestel topics #34–38 were inaccessible. On 13–14 Nov 2026, a player reported that Fairgraves was back to normal in the new league, but no complete 3.30 test of all five topics is available. Verify dialogue in-game before collecting Allflame; mark only topics actually heard.`

Keep July reports accessible beside the new report, and keep existing historical STOP ordering. Retire any user-facing implication that the **3.29 failure is itself confirmed in 3.30**. Gameplay acceptance still requires fresh-league screenshots for each local #34–38 with the NPC menu, quest state and Achievement count.

## 2. Act 9 ruler choice — export/import bug

The [PoE Wiki All Ears Act 9](https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_9) lists mutually exclusive Irasha- and Tasuni-ruler dialogue outcomes for **Wiki rows 441/442**. The project maintains local IDs **#443/#444** for the *Irasha-ruler* historical route, and a separate per-character `poe-act9-ruler-choice-v1` storage key for the selected in-game ruler.

**Bug:** The existing unified `schema:2` export included checkmarks and confirmed stages but omitted this ruler choice; importing a combined backup silently reset the restored character to `undecided`, dropping a useful permanent quest-state annotation.

**Fix:** Store optional `rulerChoice` per character in the existing `schema:2` unified backup. Export only `Irasha`, `Tasuni`, or `undecided`; on import, validate the optional value and associate it with the newly generated character ID. Existing schema:2 backups **without** a `rulerChoice` field import as undecided (no migration). Invalid non-enum values fail the entire import before writes. Include the RULER key in the best-effort storage-write rollback. No character ID, All Ears legacy ID, manual checkbox, score, or branch logic changes.

### Regression acceptance

- Actual in-app record `Irasha` exported and restored under a newly generated character ID; original record preserved.
- Other characters remain undecided if no selection was recorded; Tasuni must retain its warning as a distinct recorded outcome.
- Old `schema:2` backup without a ruler property is accepted, including waypoints #90 and #91.
- Malformed ruler values are rejected without adding a character.
- Data validation; Chromium browser tests (mobile/desktop, TH/EN, branch selection, old saves, combined import/export) must pass on PR head and merged master.
- No direct game connector, no automatic achievement marking, no fabricated 3.30 proof.

### What remains HOLD

Fairgraves #34–38 current-league five-dialogue reproduction, Act 2 Bandits timing, Act 9 Tasuni alternative dialogue count, Locomancer current in-game requirement, and overall 3.30 four-achievement completion rate.

## Sources

- https://www.reddit.com/r/pathofexile/comments/1xvkrni/does_anyone_know_if_the_all_earsno_stone_unturned/
- https://www.reddit.com/r/pathofexile/comments/1v61ip0/dont_bother_trying_to_complete_the_all_ears/
- https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869
- https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_9
- https://github.com/zatanz/ggg/issues/30
