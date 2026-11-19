# PoE 1 / 3.30 — Quest-order source delta and dependency audit (19 Nov 2026)

**Owner:** ChatGPT editorial / source reconciliation  
**Repo baseline:** `zatanz/ggg` master through merged PR #44 (`ebc05d26`)  
**Mode:** EVIDENCE-ONLY. This document is **not** permission to claim game-client verification, rewrite the 129-stage route, alter progress or replace a live STOP.  
**Question:** Can a new player follow the current Act order without losing All Ears, No Stone Unturned, Locomancer or No Loose Ends? **Not yet certified for 3.30.**

## 1. Newly checked sources and freshness

| Evidence | Direct source | What it establishes | What it does not establish |
| --- | --- | --- | --- |
| Steam guide by Pill | https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869 | As directly read 19 Nov, now titled **3.30**, Steam reports **updated 16 Nov**; Act 2 part 1 still explicitly forbids **both talking to and killing Bandits until The Darkness** | Retitling / update timestamp is not an observed complete 3.30 All Ears run; individual sections can retain historical instructions |
| PoE Wiki All Ears | https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_2 | June 2025 guide says **talk to all three Bandits before breaking Ancient Seal**, but do **not kill** before Darkness; old source for NPC and dialogue dependencies | No current-build 3.30 guarantee, and cannot resolve conflict with Steam |
| PoE Wiki Shadow of the Vaal | https://www.poewiki.net/wiki/Shadow_of_the_Vaal | Ancient Seal activation initiates quest / Darkness transition context | Does not prove the achievement accepts one first-talk sequence |
| Community 3.29 Fairgraves report | https://www.reddit.com/r/pathofexile/comments/1v61ip0/dont_bother_trying_to_complete_the_all_ears/ | Specific July 2026 complaint lists missing Fairgraves/Bestel #34–38 in 3.29 league | Cannot be transplanted to 3.30 |
| Community 3.30 discussion, 13–14 Nov | https://www.reddit.com/r/pathofexile/comments/1xvkrni/does_anyone_know_if_the_all_earsno_stone_unturned/ | A user reports Fairgraves appears back to normal; another reports completion on **Standard** | Not a documented **3.30 league** 484/484 fresh-character clear |
| Steam guide comments, read 19 Nov | https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869 | One recent player says guide works **through Act 3 so far**; another asks whether it works in Covens of Umbra | No evidenced 10-Act completion, no branch matrix, no NPC-count screenshots |

**Source-date rule:** Steam is now titled “3.30”, so existing site text calling its *current* edition only “Steam 3.28” is stale as a date label. However, upgrading the label must **not** upgrade its evidence grade to “3.30 verified.” Historic origin (earlier 3.28 text) may still be mentioned explicitly as historical.

## 2. Evidence-based dependency graph, Acts 1–3

These are **partial-order edges**, not permission to force a single total zone route. Actions on independent quests may interleave. `STOP` below means an editorial **source precaution**, not an in-game-proven irreversible lockout in 3.30.

| Priority | Area / state | Required order / review | Project crosswalk | Status |
| --- | --- | --- | --- | --- |
| P0 | Act 1, Mud Flats | Encounter glyph wall and collect glyphs → return to Tarkleigh for Strange Glyphs / Glyph Wall → **then** insert glyphs; separately after Oozeback Bloom review Bestel Undead Rhoas | All Ears local #21–23 | Steam historical steps present; 3.30 game HOLD |
| P0 | Act 1, The Prison | Check Shavronne Journal and Nessa Piety context; check Bestel Brutus before boss as source instructs. **Do not treat all nearby topics as having the same pre-Brutus lockout** | Local #27–31 | Pre/post boss boundaries differ; 3.30 HOLD |
| P0 | Act 1, Ship Graveyard | Meet Fairgraves / hear listed topics → speak to Bestel Captain Fairgraves → return to Fairgraves Real Fairgraves **before collecting Allflame**; then finish quest | Local #34–38 | 3.29 bug reported; reverted encounter plausibly restored, but 3.30 league achievement HOLD |
| P0 | Act 2, Western Forest / Chamber of Sins | Visit Western Forest and recheck town NPCs before completing Chamber of Sins; enter Chamber → return to Yeena Chamber of Sins **before rescuing Helena** | Local #69 and #75 | Directly supported as guide order; 3.30 timing HOLD |
| P0 | Act 2, Great White Beast | After quest unlock, speak to Silk The Great White Beast **before completing quest**; distinguish post-completion topic | Local #57, Wiki row #62 | Source-backed prerequisite; 3.30 HOLD |
| P0 | Act 2, Baleful Gem / Roots | Carry **Baleful Gem without Spike** for Eramir topic → acquire Spike and hear Maligaro's Creation → encounter blocking roots and discuss Ancient Gateway with Eramir **before destroying roots** → afterward discuss Lorrata | Local #77, #91, #92, #93–94 | Source-backed sequence; inspect actual item states in 3.30 |
| **BLOCKED** | Act 2, Bandit first contact | Wiki says **talk before** Ancient Seal; Steam says **do not talk before** The Darkness. Since both cannot be true in the same playthrough, **no safe fixed first-contact order** can currently be prescribed | `bandits-before-seal`, later `ancient-seal`; local #95–103 | **P0 unresolved, do not remove STOP or pick a winner** |
| P0 | Act 2, The Darkness / kills | After Seal, check town The Darkness topics and Alira/Oak while alive; on historical **kill-all** route, return to Eramir **between** bandit kills for first-/second-kill-dependent topics, then post-third topic | Local #95–103 (local IDs != Wiki rows) | Historical kill-all dependency, no 3.30 branch certification; **never auto-complete** |
| P1 | Act 3, Lost in Love | Talk to Hargan in proper Tolman's Bracelet state before handing quest in to Clarissa | Local #118 | Historical source precaution |
| P1 | Act 3, Lady Dialla | Get Introduction prior to quest items; preserve the **Sulphite without Ribbon Spool** state for later conversation | Local #148, #153 | Historical source precaution |
| P1 | Act 3, The Docks | Meet Fairgraves before carrying Decanter Spiritus / Chitus' Plum for Introduction; do not confuse 3.29 Act 1 issue with verified 3.30 Act 3 failure | Local #142 | Historical source precaution |
| P1 | Act 3, Ebony Barracks / Lunaris | Review Maramoa Crossing the River before Gravicius; separate Maramoa / Grigor Piety topics **before killing Piety** | Local #158, #161, #164 | Historical source precaution |

### What is already implemented / must not be undone

- The project already has Acts 1–10 source-led stages and associated checkboxes; it is **not missing an Act route skeleton**. Read `steam-quest-walkthrough.js`, `route-act2.js` and PR #42 before any code change.
- PR #42 already inserted an explicit pre-Ancient-Seal **source-conflict checkpoint**, requiring manual review and protecting existing save data. Keep it.
- Preserve 745 historical canonical rows; current active manual marks 744; 67 added stage references; 24 conceptual images; all character data and schema:2 backups. Do not deduce actual achievements from the web checklist.
- Leave patch 3.30 status as `released-unverified`. Reference-visibility opt-in is a UI permission, **not** a gameplay claim.

## 3. Three distinct research conclusions

**Confirmed from source text (high confidence, not gameplay):**
1. Steam retitled to 3.30 by 16 Nov while preserving the no-talk-before-Darkness Bandit instruction.
2. Wiki and Steam are directly contradictory on when to first speak to Bandits.
3. The Act 1 / Act 2 / Act 3 prerequisite edges above are present in the sources and should guide **historical conditional navigation**, rather than unqualified 'quest completed' assertions.

**Community observations (medium/low confidence):**
1. Fairgraves may have returned to pre-3.29 presentation; a separate Standard playthrough success report exists. These do not prove current 3.30 league full completion.
2. One recent Steam commenter reports the guide works to Act 3. This is not a full 484-dialogue audit.

**Open / cannot responsibly decide:**
1. Which **first-talk** Bandit order works for every 3.30 All Ears condition.
2. Whether Fairgraves #34–38 and all related later dialogue reliably register on a **fresh 3.30 league** character.
3. Irasha/Tasuni Act 9 branch coverage, Vaal / Labyrinth random lore counts, and the in-game four-achievement counters.
4. Whether any arbitrary 10-Act total ordering yields 100%; partial dependencies only are source-backed.

## 4. Execution handoff — next grounded work, not a speculative code rewrite

**Editorial / ChatGPT:**
1. Build an **Act-by-Act dependency crosswalk** between actual source instructions and the existing 129 route stages, splitting each `after` / `before` / item-presence / NPC / sidequest edge; start Act 1–3 and then Act 4–10.
2. Keep distinct source version/date and evidence grade for each edge. Mark source conflict as unresolved with both URLs. Avoid using stale Wiki row numbers as canonical local IDs.
3. Only propose concrete UI copy fixes where a sentence is disproved by available source text, e.g. date/title of Steam guide. **Never silently change the in-game decision path.**

**Codex / engineering, only after a reviewed concrete content diff:**
1. Small targeted patch on a feature branch, preserving current UI, save storage, IDs, manual marks, feedback and existing STOP logic.
2. Run data/UI validators, Chromium mobile/desktop, TH/EN, branch STOP and export/import regression.
3. Merge/deploy only with proven tests; log actual SHA and readback. Do not mark 3.30 certified.

**In-game test matrix still required:**
- Two fresh characters (same build/league/game version), record game version and quest journal, capture NPC topics and actual All Ears counts **before Seal**, **after Seal/The Darkness**, **after each kill**; test contradictory first-talk variants independently.
- Fresh 3.30 league character: collect and screenshot Fairgraves/Bestel #34–38 and the Act 3 Fairgraves follow-on, including resulting in-game counters.
- Test Act 9 Irasha and Tasuni branches separately, then reconcile the game's four achievement counters, with proof of full clear if asserting 100%.

**Release gate:** This evidence-only audit creates **no game UI or production code changes**. Its acceptance is a readable source-linked record, with conflicts preserved and next concrete QA targets. All unproven gameplay stays HOLD.

## 5. Source file / issue links

- [Current source-led walkthrough](../steam-quest-walkthrough.js)
- [Canonical Act 2 source crosswalk](../route-act2.js)
- [Earlier first-talk conflict resolution PR #42](https://github.com/zatanz/ggg/pull/42)
- [Earlier editorial source correction](./CONTENT-QA-20261114-ACT2-FIRST-TALK-CONFLICT-CORRECTION.md)
- [Tracking Issue #30](https://github.com/zatanz/ggg/issues/30)


## 6. Act 4–10 source cross-check (19 Nov): prioritize exact state boundaries

Cross-checked the same currently titled Steam 3.30 guide against the project's already-published source-led route and older PoE Wiki. This is a **source-level** cross-check, not a 3.30 client test.

| Act | Stage edge to preserve in guide | Local All Ears / Waypoint references | Source status / important nuance |
| --- | --- | --- | --- |
| **4** | After Voll, speak to Kira about Deshret **before freeing Deshret**. Speak to Dialla about Kaom and Daresso in the Crystal Veins **before both bosses are complete**. After Piety, speak before entering Harvest; speak to Piety **without handing over organs**, then to Dialla after handing over organs but **before Malachai**. | All Ears #220, #223–224, #241, #247–248 | Steam Act 4 part 1/2 and PoE Wiki 2025; independently triggered topics, not a single “check all before boss” checkbox |
| **4 — important source divergence** | After killing Daresso and giving Eye of Desire, Steam says review Petarus/Vanja and Tasuni topics **before entering Kaom's Dream**; PoE Wiki #231–232 instead states **before entering Belly of the Beast**. | Wiki rows #231–232 (map to canonical project IDs; verify crosswalk before editing) | **Do not silently overwrite the project's corrected Wiki boundary**. Steam's earlier boundary is a conservative route-specific order, not proof that entering Kaom's Dream destroys dialogue. Source conflict/different strictness, 3.30 HOLD |
| **5** | Utula Justicar Casticus after fight **before Avarius**; check Waypoints Oriath Square / Templar Courts on map **before Avarius**; after Innocence, speak to Sin **before leaving Chamber of Innocence**; after taking Sign of Purity, speak to Sin **before exiting Ossuary**. | All Ears #275, #277, #295; Waypoints #44–45 | Steam Act 5 + Wiki 2025; site Act 5 waypoint guard already shipped in PR #39; possible Courts workaround ≠ safe skip |
| **6** | After using Eye of Conquest, check Tarkleigh **before Karui Fortress**; after Shavronne, check Sin **before leaving boss area**. Following Nessa rescue, review Bestel/Tarkleigh topics earlier than Western Forest / Cavern of Anger; keep Black Flag / Beacon states separate. | Wiki #321–322 and #326–327; Bestel/Tarkleigh #332–333, Lilly #336 | Steam Act 6; PR #40 fixed order after prior misplaced Nessa step. Legacy Western Forest warning may be stricter than Wiki and is not 3.30-proven |
| **7** | After Maligaro, speak to Sin **before leaving Sanctum**; after Greust, speak to Sin before the next zone; handle Helena Den and Yeena seven Fireflies / Arakaali separately at their own unlock states. | Wiki rows #369–370, #376 and #365/#382 | Steam Act 7; source-led route presently exists, but patch-dependent lockout severity remains HOLD |
| **8** | After Doedre, Sin before exiting; after Wings of Vastiri, speak to Sin **then Hargan about Yugul before killing Yugul**; after Tolman, see Clarissa in The Quay; check Orbs of Sun/Moon topics before bosses. | Wiki #403, #409–410, #411–415 | Steam Act 8 and Wiki 2025 agree on Yugul subject order; take care local IDs for Clarissa/Maramoa differ from Wiki row numbers |
| **9** | After Storm Blade, speak with Petarus/Vanja General Adus before Foothills; in Quarry, check Sin Dark Ember in the correct powder state; after Garukhan, speak to Sin before Irasha/Tasuni; record branch outcome rather than treat both as obtainable in one run. | Wiki #436, #438–445 | Steam Act 9 uses **give Irasha feather** (one branch); not proof of alternate Tasuni branch. PR #36 preserves per-character ruler choice in backups |
| **10** | Record initial town topics, then review quest-dependent topics after Safe Passage, Death and Rebirth, and An End to Hunger; do not assume no missable topics because old route lacks a `before` field. | Local #471, #481, #482 reminders | Steam guide intro says last required dialogue is after defeating Kitava and **before Karui Shores**; project keeps post-quest reminders; 3.30 end-to-end verification missing |

**Act 4 explicit source URLs:**
- Steam (updated 16 Nov; Act 4 part 2): https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869
- PoE Wiki (updated 30 Jun 2025; rows #231–232): https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_4
- Existing PR #15 corrected a previously overstrict deadline in favor of the Wiki: https://github.com/zatanz/ggg/pull/15

**Editorial result:** All Acts 1–10 now have at least one reviewed *source-described* dependency in this ledger. That does **not** mean every individual record, all special-area lore, each route branch, or all 129 stages have been freshly certified. The immediate implementable changes are **source freshness labels and precise confidence wording**. Next full audit must compare every individual stage transition and ID against the source and game evidence; no automatic public route-order change is authorized by this document alone.
