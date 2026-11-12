# Steam Guide 2948321869 — Source-led UX and Quest Order Audit
Date: 2026-11-12 (Asia/Bangkok). User-supplied reference: https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869
Important: this is the **Steam author's 3.28 walkthrough**, not a 3.30 game-verified guide. The 3.30 launch is scheduled for November 13 PST.

## What the guide changes

The Steam guide is **zone-by-zone with interleaved All Ears and No Stone Unturned tasks**. Its fundamental unit is not an Achievement category but the **player's next irreversible quest state**. It contains 484 optional NPC dialogue entries, 140 lore entries, Act 1–10 sections, Labyrinth, Vaal Side Areas, talk-order guidance, and clear "do not" warnings.

The prior companion separated 484 + 140 + 91 + 30 items by Achievement and then offered 39 high-risk groups. That remained hard to follow because a player cannot infer a quest's safe order simply from the 4-category totals.

## Source conflict and safety implications (must not conceal)

### Fairgraves / Act 1 and Act 3

The Steam author explicitly states that the guide is **broken in 3.29 because interacting with Fairgraves did not work** (Standard was suggested as a possibility, not demonstrated as a guaranteed workaround). A July 25, 2026 community report identifies All Ears entries **34–38** as affected; a September 2026 discussion describes the same issue continuing in that league:
- https://www.reddit.com/r/pathofexile/comments/1v61ip0/dont_bother_trying_to_complete_the_all_ears/
- https://www.reddit.com/r/pathofexile/comments/1wcwo47/100ed_the_best_game_ever_made_was_about_time/

The 3.30 official patch notes alone are not character-state proof that it has been fixed. The application now **warns** at both applicable historical Fairgraves checkpoints and in the Act 1 walkthrough. Do not automatically mark those entries complete.

### Act 2 Bandits — conflicting instructions

**Steam guide:** do not talk to or kill Bandits before triggering The Darkness; then follow the kill-all branch with Eramir after each kill.

**PoE Wiki (2025):** talk to all three Bandits before activating Ancient Seal, but do not **kill** any Bandit before lifting the Seal and unlocking Darkness. It enumerates Eramir's first kill, second kill and all-killed dialogue states.

**Shared safety boundary:** do not kill / help a Bandit until the The Darkness and relevant dialogue are checked. **Disputed timing:** whether an initial Bandit conversation must occur before or after Ancient Seal. Without controlled in-game testing, these cannot both be labeled the proven route. The UI now marks source conflict amber and never shows a green "safe route" result merely because manual checkboxes are checked.

Other Act 2 order-sensitive points: Steam specifically warns that progressing **Chamber of Sins before Western Forest** may lose the Western Forest dialogues. It directs conversation with Yeena upon entering Chamber of Sins before rescuing Helena. It warns to consult Eramir with the Baleful Gem/Maligaro's Spike at the correct inventory states and before destroying the blocking roots.

## Act 1 — 9-phase researched source walkthrough (implemented)

| Phase | Location / event | Dialogue IDs | Stop boundary |
| --- | --- | --- | --- |
| 1 | Twilight Strand / Dying Exile | 1 | Listen to Introduction |
| 2 | Lioneye's Watch / talk to Nessa, Bestel, Tarkleigh and follow-up topics | 2–15 | Letters of Exile (existing No Stone lore IDs 1–15) are collected via repeated discovery; no single-click auto credit |
| 3 | Medicine Chest / return to Lioneye's Watch | 16–18 | Return for medicine/cannibal NPC topics |
| 4 | Mud Flats / Rhoas / Glyph Wall | 19–23 | **Do not enter Fetid Pool before Bestel: Undead Rhoas; do not place Strange Glyphs before Tarkleigh dialogue** |
| 5 | A Dirty Job and Goatmen | 24–25 | Check sidequest-triggered follow-up |
| 6 | The Prison / Upper Prison | 26–29 | **Do not kill Brutus before checking Bestel/Nessa/Tarkleigh and journal-based topics** |
| 7 | Prisoner's Gate after Brutus | 30–31 | **Do not enter Ship Graveyard before Bestel: Prisoner's Gate** |
| 8 | Ship Graveyard / Fairgraves | 32–38 | **Do not collect Allflame before Fairgraves → Bestel → Fairgraves dialogue sequence. 3.29 accessibility issue reported** |
| 9 | After Merveil / return to town | 39–41 | Check all three NPC follow-ups before continuing to Act 2 |

The 9 groups crosswalk **all 41 original Act 1 All Ears IDs exactly once**. They explicitly include only 15 Letters of Exile Lore IDs in phase 2. **The other 14 Act 1 Lore, 1+ campaign Waypoints and sidequests are tracked in the existing per-Act completion gate, not silently claimed to be placed chronologically.** Do not treat the nine phases alone as completing all of Act 1's four Achievements.

## Explicit quest stop gates (implemented)

Added 22 sourced *before-action* gates to the previous historical checkpoints across Acts 1–9. Red means **"ยังไม่ควรทำ"** while identified prerequisites remain unchecked. Amber means a source disagreement or item check has been marked but **not game certified**. Green is reserved only for the player's manually checked item—not permission to change quest states.

When a checkpoint mixes dialogues that trigger **before and after** the same event, its gate links only to the specific pre-action IDs. The detailed trigger/warning for each item remains accessible from that item. No new item IDs, progress stores, or auto-completion.

## In-game UI reference and the illustration

PoE 1's World / Quest panel opens with **U**, and Achievements can be found with **H** (default bindings may be remapped). The companion includes an **original 960×540 vector quest-screen mock illustration** for the Mud Flats stage, with an explicit **NOT AN IN-GAME SCREENSHOT** watermark. It visualizes which in-game quest state to inspect and how to relate it to the guide, without copying third-party Steam screenshots or presenting generated UI as a current-patch screenshot.

Sources for the actual UI:
- https://www.poewiki.net/wiki/Quest
- https://poedb.tw/th/Navigation
- https://www.poe-vault.com/guides/path-of-exile-beginner-guide-welcome-to-wraeclast-fresh-exiles-start-here

## UI changes

1. **Navigation:** dark blue-grey inactive buttons; high-contrast amber active buttons. Strong keyboard focus outlines.
2. **Action hierarchy:** one active Act 1 phase; one selected risk checkpoint for later Acts; primary red quest stop gate; hidden secondary explanations.
3. **Context:** named quest and location first; short sequential actions second; clickable canonical dialogue IDs third; details/links on demand.
4. **Evidence:** amber "source conflict" and explicit patch uncertainty, not a false green verified status.
5. **Graphic:** collapsible original illustration that explains U/Quest UI and the red boundary while keeping initial screen compact.
6. **Tracking:** 745 original checkbox IDs unchanged; no class-specific rewards or extra gamer telemetry.

## Remaining validation — prioritized

- **P0 GAME EVIDENCE:** Verify 3.30 Fairgraves interaction and All Ears counters on fresh characters in league vs Standard; preserve screenshots/video and exact build.
- **P0 SOURCE CONFLICT:** Controlled Act 2 Bandit/Ancient Seal test matrix (talk before, talk after, don't kill until Darkness, Eramir between kills). Do not present a guaranteed safe choice before evidence.
- **P0 FULL ROUTE:** Extend actual Steam zone-oriented chronology across Acts 2–10, interleave all 140 lore, 91 waypoints and 30 sidequests without inventing quest dependencies.
- **P0 PATCH:** Check 3.30 Vaal Side Area acquisition after Sacrifice Fragment removal.
- **P1 UX QA:** Real-user task testing (find current action; understand STOP; locate correct quest screen with U; find missing item; mobile and keyboard).
- **P1 REWARD:** Verify the current 58-quest reward index as reference, then associate rewards with a valid step when source-backed.
- **DEFER:** Class-specific gem and equipment reward variants, build optimization, unsourced procedural pathfinding.

## Source hierarchy

1. Actual in-game evidence under a named patch/build and recorded quest state
2. Official GGG patch notes / verified technical behavior
3. Current PoE Wiki route with source-specific constraints
4. Steam user walkthrough and screenshots
5. User-provided Excel workbook WARNING flags

Passing browser CI validates program behavior but **never raises the patch 3.30 gameplay certification status**.
