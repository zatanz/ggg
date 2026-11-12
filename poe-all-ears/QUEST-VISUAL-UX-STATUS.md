# Quest visuals and mock Quest UI — implementation and outstanding work
Updated 2026-11-12 Asia/Bangkok.

## Goal
Players must immediately see where they are, whom to talk to, which quest screen/status to check, what NOT to do yet, and when to continue. Illustrations must support a step, not decorate it.

## Already implemented
- Act 1, Breaking Some Eggs, The Mud Flats: original 960 x 540 SVG diagram of World / Quest U and the Glyph Wall stop warning. [See SVG](./assets/quest-journal-illustration.svg). Expand image in Mud Flats walkthrough.
- Act 2, Deal with the Bandits, Ancient Seal: original 960 x 540 SVG diagram of World / Quest U and before-Bandits reminder. [See SVG](./assets/bandits-quest-illustration.svg). Expand image in Bandit-decision walkthrough.
- Both are labeled ILLUSTRATION ONLY / NOT AN IN-GAME SCREENSHOT, have ALT descriptions and are optional disclosures to avoid a crowded screen.
- 2026-11-12 QA repair: fixed duplicate Act tab, stale Act 1 description and vague Eramir wording in the Act 2 asset; added regression checks.

## Not completed
1. No real captured PoE 3.30 Quest/World/NPC UI screenshots with a verified game build and quest state.
2. No pixel-faithful game UI mock: existing diagrams are conceptual, static and non-interactive.
3. No image for most risky decisions: Act 1 (Brutus, Fairgraves) and Act 2 (Chamber of Sins, Maligaro roots) are missing, and Acts 3–10 have no stage-specific visuals.
4. No source/build metadata or source screenshots to verify image-to-quest alignment.
5. No human readability acceptance testing on real mobile and desktop screens.

## Visual pattern for each stop-before-quest stage
- 1. Where you are: precise zone and correct in-game quest name.
- 2. What to inspect: actual Quest screen (default U, configurable) when verified, preferably a source screenshot; annotate only one relevant objective or NPC.
- 3. What NOT to do yet: warning with specific before-action gate sourced to Wiki/in-game proof; red for verified risk, amber for conflicting/unverified reference.
- 4. What confirms progress: exact dialogue/lore/quest checkbox ID in the existing tracker, then next step.
- A generated/mock image must say in Thai that it is a conceptual illustration, not a game screenshot. Authenticated screenshots must show patch/build, source, and captured quest state.
- Keep the visual collapsed until requested; one image per active step, legible zoom/fullscreen and accessible ALT.

## Priority and acceptance
P0: validate actual 3.30 Quest/World layout and collect screenshots with build and quest state.
P0: build faithful, source-mapped visual references for Act 1 Glyph Wall, Brutus, Fairgraves; Act 2 Chamber of Sins, roots, Ancient Seal/Bandits.
P1: add targeted screenshots/illustrations to Acts 3–10 as each verified walking stage is produced. Do not create generic visuals without a source-linked gameplay purpose.
P1: desktop/mobile usability test for image legibility, captions, contrast, disclosure navigation, and keyboard.
Defer: full interactive pixel-perfect game UI simulation (not necessary to manually track 100%).

Sources: [Steam guide](https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869), [research audit](./STEAM-QUEST-ORDER-UX-RESEARCH.md), [PoE Wiki](https://www.poewiki.net/wiki/Guide:All_Ears_achievement).

Passing frontend CI does not demonstrate the screenshot represents real in-game Quest UI, or certify 3.30 achievement completeness.
