# Quest UI illustrations — current implementation and evidence boundaries
Updated: 2026-11-12 Asia/Bangkok

## Purpose
Each high-risk walkthrough step should show (1) real quest name and area, (2) the decision to postpone, (3) the NPC/item/dialogue that must be checked, and (4) the next action. The image is an optional aid, **not proof of in-game state**.

## Implemented: 6 illustrations (4 newly added)

| Act | Step and actual quest | Original mock SVG | Check before proceeding |
| --- | --- | --- | --- |
| 1 | The Mud Flats / Breaking Some Eggs | [Glyph Wall](./assets/quest-journal-illustration.svg) | Tarkleigh's Strange Glyphs and Glyph Wall before insertion |
| 1 | The Prison / The Caged Brute | [Brutus](./assets/brutus-quest-illustration.svg) | Tarkleigh then Bestel's Brutus dialogue, Piety and journal prerequisites before boss |
| 1 | Ship Graveyard / The Marooned Mariner | [Fairgraves](./assets/fairgraves-quest-illustration.svg) | Fairgraves → Bestel → Fairgraves before Allflame; 3.29 NPC issue still not confirmed fixed |
| 2 | Chamber of Sins / Intruders in Black | [Before Helena](./assets/sins-quest-illustration.svg) | Yeena's Chamber of Sins dialogue before completing quest / rescuing Helena |
| 2 | Wetlands / The Root of the Problem | [Before roots](./assets/roots-quest-illustration.svg) | With Baleful Gem and Maligaro's Spike, see Eramir's Maligaro's Creations then Ancient Gateway before Lorrata |
| 2 | Ancient Seal / Deal with the Bandits | [Bandits](./assets/bandits-quest-illustration.svg) | The Darkness before permanent Bandit choice; re-check disputed first-contact timing |

Images are author-created static SVG source assets. Each is loaded only when expanding **ดูภาพจำลองหน้า Quest**, includes Thai ALT text, a clearly visible statement **ภาพจำลองเพื่ออธิบาย — ไม่ใช่ภาพหน้าจอเกมจริง**, a separate plain-language action, direct full-resolution SVG link and the exact supporting Wiki source. They appear **in the relevant phase**, not in a separate gallery, and are never counted toward Achievement completion.

The 4 new assets use a 960×540 original fantasy-inspired interface concept. They deliberately do not claim to reproduce PoE's quest panel pixel-for-pixel. Their text and visual geography are conceptual diagrams, not source screenshots. The original two diagrams remain at 960×540 as well.

## External actual UI references (context only — not copied into the repository)
- [PoE Vault beginner guide: real Act 1 World screen](https://www.poe-vault.com/guides/path-of-exile-beginner-guide-welcome-to-wraeclast-fresh-exiles-start-here)
- [PoE Wiki All Ears](https://www.poewiki.net/wiki/Guide:All_Ears_achievement)
- [PoE Wiki The Marooned Mariner](https://www.poewiki.net/wiki/The_Marooned_Mariner)
- [PoE Wiki Intruders in Black](https://www.poewiki.net/wiki/Intruders_in_Black)
- [PoE Wiki The Root of the Problem](https://www.poewiki.net/wiki/The_Root_of_the_Problem)

## Acceptance checks
- Six exact phase ID → image asset associations, quest name, provenance flag and source URL are validated statically.
- Browser regression verifies all six SVGs load, captions and ALT information are present, image disclosure works, full-size links open independently, and an Act 2 roots illustration fits a narrow 390px viewport without horizontal overflow.
- The same 745 existing Achievement IDs and single character-progress store are used; mock images never mark tasks automatically.

## Still not finished
- No verified actual 3.30 client screenshot for these quests; in-game UI cannot be certified from SVG diagrams.
- No faithfully rebuilt, interactive 1:1 PoE Quest interface; it is optional and not essential to a 100% manual checklist.
- Act 3–10 do not yet have walkthrough-integrated quest illustrations; their prerequisite walk order must be sourced first.
- No user acceptance testing across real devices or confirmation that screenshots accurately match a current client build; font size on narrow screens still needs human review.
- No in-game proof that 3.29 Fairgraves failures, Act 2 Bandit ordering or current-patch Vaal Side Area behavior are resolved.

## Next priorities
P0: source-act and game-state verification (Fairgraves, Bandit branches, Maligaro inventory, rescue quest timing); capture patch version + quest-state evidence rather than assuming historic data is current.
P1: add images to Acts 3–10 only as reliable, phase-specific steps are built, and validate UI against legitimate current screenshots.
P1: human visual testing (mobile readability, visual attention, colors, accessibility and navigation time).
Defer: fully interactive Quest UI simulation and class-specific rewards.

References: [Steam source guide](https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869), [Steam/Wiki research](./STEAM-QUEST-ORDER-UX-RESEARCH.md), [Road to 100%](./ROAD-TO-100-PERCENT.md).

## Progress update — Act 3 (2026-11-12)

Seven total author-created, static source-linked SVG mock illustrations are now implemented: the previous six plus **Act 3 / Lost in Love / Tolman's Bracelet**, a clearly labeled non-screenshot phase visual. Acts 4–10 still have no in-context quest illustrations. Act 3's 71 dialogue IDs and 32 lore IDs are interleaved in twelve historical zone phases, but source chronology and the graphics are **not** gameplay proof for patch 3.30. Update the implementation roster to seven; preserve the original six associations.

## Act 4 visual checkpoint (2026-11-12)

Two additional source-linked conceptual 960×540 SVGs have been attached: (1) **An Indomitable Spirit** before freeing Deshret, and (2) **The Eternal Nightmare** before handing organs to Piety. Total is now **9 original illustrations** across Acts 1–4. Both are expandable per phase, have Thai ALT, source links, direct full-size source assets and a conspicuous *not a real game screenshot* notice. No PoE 3.30 captured quest-screen art has been verified.

## Act 5 language and visual UX additions (November 2026)

Two new source-linked 960×540 original SVG diagrams illustrate the exact Sin dialogue stops in **Death to Purity** (Act 5, after Innocence and before exiting Chamber) and **The Ravenous God** (after collecting Sign of Purity, before exiting Ossuary). **11 total illustrated quest-state checkpoints**, none claimed to be verified PoE game screenshots. Each new visual has the real quest title, per-phase link, screenshot disclaimer and an explicit action check.

A new independent language panel chooses guidance language and quest/item name language, with mobile-readable labels. Act 5 route steps have authored TH/EN copy. The older Acts retain original Thai detail disclosure in English mode where translation is not yet reviewed; this is a known limitation, not silently omitted content.

## Act 6 quest-state visuals and usability update (2026-11-13)

Two original 960×540 static conceptual SVG figures were added with source-linked STOP boundaries: (1) **The Father of War** — after using Eye of Conquest and before entering The Karui Fortress, return to Tarkleigh; (2) **The Brine King** — hear both Weylam Roth topics before killing Tsoagoth. Each image includes real quest names, specific dialogue ID numbers, clear non-screenshot labels and a text counterpart on the page. The project now contains **13 source-associated conceptual figures** across Acts 1–6. The main current-stage route is displayed before a collapsed Act-wide checklist, with jump controls to four achievement categories and group-expansion persistence.
