# Acts 9–10 — source-bound 100% route, bilingual UI and branch integrity

Reviewed: November 13, 2026 (Asia/Bangkok).
Release gate: source-led historical guide; **not PoE patch 3.30 gameplay-certified**.

## Canonical coverage, no invented IDs

| Act | All Ears local IDs | No Stone Unturned | Locomancer | No Loose Ends | Original records | Bilingual phases |
|---|---|---|---|---|---:|---:|
| 9 | 417–452 (36) | 0 | 79–84 (6) | 24–27 (4) | **46** | **11** |
| 10 | 453–484 (32) | 122–124 (3) | 85–89 (5) | 28–30 (3) | **43** | **10** |
| **Combined** | **68** | **3** | **11** | **7** | **89** | **21** |

These are the unchanged historical tracker IDs. The canonical totals for the project's **four** achievements remain 484 All Ears, 140 No Stone Unturned, 91 Locomancer and 30 No Loose Ends = **745**. Do not call 745 the total number of all Path of Exile achievements. After Acts 9–10, all 10 Acts have source-guided routes, while additional Labyrinth, Vaal and Epilogue checklist work remains in its existing, separate views.

## Act 9: irreversible state and route gates

1. Hear 36 original NPC dialogues in source- and quest-state groups, including Sin, Petarus and Vanja, Irasha, Tasuni and Weylam.
2. **The Storm Blade**: after turning it in, hear Petarus and Vanja: General Adus (local #436) BEFORE entering The Foothills.
3. **The Oasis**: on seeing the sandstorm barrier, check Sin: Queen of the Sands (#437). The optional quest completes only after fighting Shakari.
4. **Recurring Nightmare, first Dark Ember**: in The Quarry, hear Sin: The Dark Ember (#438) while you do **not** have Trarthan Powder. Do not collect the powder first.
5. **The Ruler of Highgate**: after defeating Garukhan and Kira and acquiring Sekhema Feather, hear Sin: Garukhan (#439) and Petarus and Vanja: Oyun (#440) before choosing a recipient.
6. **IMPORTANT BRANCH LIMIT**: the legacy 484-ID source includes **Irasha as ruler** at Wiki row 441→ local #443 (Tasuni: Feather) and Wiki row 442→ local #444 (Petarus and Vanja: Irasha). If **Tasuni** becomes ruler, the Wiki's corresponding row dialogues become Irasha: Feather and Petarus and Vanja: Tasuni, without stable local IDs in the original tracker. This is an incompatible achievement branch, **NOT another two checkboxes to mark as equivalent**. The site now has a per-character ruler selector, defaults to not chosen, and shows permanent visible warnings on both Act 9 and the main 100%-target dashboard when Tasuni is selected.
7. **Recurring Nightmare, second Dark Ember**: after obtaining BOTH Basilisk Acid (Boiling Lake) and Trarthan Powder (Refinery), talk to Sin in The Quarry and Highgate for #445 BEFORE entering the Belly of the Beast.
8. **Sin The Black Core/Cataclysm**: original #446–447 have old pre-Belly warnings but source timing is not reproduced in patch 3.30; listen immediately when available, do not assume you can return later.
9. **After Depraved Trinity**: check Weylam Roth: Rescue (#448) and Lilly (#449) BEFORE travelling to Act 10; return to Highgate for three post-Recurring Nightmare The Beast lines (#450–452).
10. Four original Act 9 optional quest IDs: The Storm Blade, Queen of the Sands, Fastis Fortuna (Calendar of Fortune), The Ruler of Highgate.

The irreversible ruler choice is kept in the separate localStorage key `poe-act9-ruler-choice-v1` keyed by character ID, **not in the existing character export/backup format**. Selecting a ruler does not mark game dialogue, change the 745 canonical IDs or claim a live-game verified 100% result. On a fresh browser or after importing a backup, the choice must be reviewed again.

## Act 10: end-campaign and optional quests

1. **Oriath Docks**: hear Sin, Lilly, Weylam and Lani introductory topics, then revisit Lani for Lilly and Weylam after introductions.
2. **The Ravaged Square**: interact with Cultist Tract - Relish In Hunger (#122), activate the Waypoint, and talk to Bannon during Safe Passage.
3. **After Safe Passage**: hear Lilly Roth: Tsoatha (#471) and The Teardrop (#472).
4. **Map to Tsoatha**: obtain The Teardrop from The Reliquary; turn in to Lilly; mark original sidequest #29 after completion. Preserve original Waypoint #89.
5. **No Love for Old Ghosts**: obtain Elixir of Allure in The Ossuary and deliver to Weylam, checking respec rewards; original sidequest #30.
6. **Vilenta's Vengeance**: kill Vilenta in The Control Blocks, activate Waypoint #88, turn in to Lani for passive point; original sidequest #28.
7. **Death and Rebirth**: read Cultist Tract - And Our Father (#123) in The Desecrated Chambers, obtain The Staff of Purity, deliver to Bannon, then check Sin: Kitava and Bannon (#479/#480) when opened and Lilly: Innocence (#481) after Death and Rebirth.
8. **The Canals**: Cultist Tract - This Is How (#124) before proceeding to Kitava.
9. **After An End to Hunger**: Lilly Roth: Kitava (#482), Innocence: Exile (#483) and Sin (#484) in their post-quest state.
10. No Karui Shores optional dialogue is included in the historical 484-ID All Ears reference. Epilogue Waypoint checks remain a separate scope.

## Bilingual and UX/UI evidence

- 21 new zone/quest-state phases use independent Thai/English route headlines, step actions and STOP warnings; source game-name display supports English, editorial Thai or both. New source-specific English notes cover all 68 original finale NPC IDs.
- Forward dropdown jumps in Acts 9–10 cannot silently bypass unchecked STOP checkpoints. Previous/Next behavior is preserved; no game-completion or checkbox state is auto-inferred.
- Five new original 960×540 concept decision diagrams: Act 9 Sekhema Feather choice, Act 9 second Dark Ember, Act 9 Weylam pre-Act10, Act 10 Lilly Tsoatha/Teardrop, and Act 10 Bannon/Staff of Purity. Every diagram is explicitly **NOT AN IN-GAME SCREENSHOT**, with specific in-page TH/EN action checks. Total **24** conceptual images across the project.
- Quest image disclosures remain open across language changes; Lore, Waypoint and sidequest disclosures preserve opened state on checkbox refresh.
- All 10 Acts are selectable on 375px mobile; heading, category shortcuts, and branch choice are keyboard accessible and individually labelled.
- The existing project-specific UX Skill was extended. No new global account skill was installed, and the original checklist/backup schema is preserved.

## Open correctness holds — do not claim guaranteed 100%

- Source evidence is 2025 PoE Wiki plus legacy Steam/3.9 data; **not verified with a fresh character and real game Achievement counters in PoE patch 3.30**.
- Historical All Ears ruler branch has no canonical Tasuni alternate ID mapping, and source Wiki rows do not establish both dialogues as simultaneous.
- Historical Locomancer records = 91, while later Wiki version history reported removal of an Oriath waypoint and 90 required; do not silently migrate records without a compatible test.
- Act 2 Bandits timing differences between old Steam and Wiki; Act 1 Fairgraves bug reports on patch 3.29; both require targeted in-game regression.
- Artwork is conceptual and explicitly not a verified screenshot from current PoE game.
- Quest choice per-character selection is local UI metadata and not part of current backup export.
- Automated Chromium tests validate browser behavior, not that an Achievement unlocked on live servers.

## References

- [All Ears Act 9/10, both Highgate ruler branches (PoE Wiki, June 2025)](https://www.poewiki.net/wiki/Guide:All_Ears_achievement)
- [The Ruler of Highgate](https://www.poewiki.net/wiki/The_Ruler_of_Highgate)
- [Recurring Nightmare](https://www.poewiki.net/wiki/Recurring_Nightmare)
- [Act 9 campaign route](https://www.poewiki.net/wiki/Act_9)
- [Act 10 campaign route](https://www.poewiki.net/wiki/Act_10)
- [Map to Tsoatha](https://www.poewiki.net/wiki/Map_to_Tsoatha)
- [No Love for Old Ghosts](https://www.poewiki.net/wiki/No_Love_for_Old_Ghosts)
- [Vilenta's Vengeance](https://www.poewiki.net/wiki/Vilenta%27s_Vengeance)
- [Death and Rebirth](https://www.poewiki.net/wiki/Death_and_Rebirth)
- [Legacy Act 9 ID map and choice inventory](./act9-inventory.json)
- [Legacy Act 10 ID map](./act10-inventory.json)
- [Original historical Steam source](https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869)
