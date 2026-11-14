# Act 5 — bilingual, quest-first UX and source checklist ledger

Date: November 13, 2026 (Asia/Bangkok)
Code status: staged for GitHub Actions verification
Content status: HISTORICAL Steam 3.28 / PoE Wiki June 2025. **Not verified for PoE 3.30 gameplay.**

## User job and scope
Goal: help a player manually complete the four tracked achievements, not all achievements in Path of Exile. Show one zone and quest-state phase at a time, with the immediate warning and original canonical checklist entry. No automated game reads, achievements or checkboxes.

## Act 5 canonical coverage
- 44/44 All Ears local IDs 254–297
- 12/12 No Stone Unturned local IDs 95–106, including 9 Chamber of Innocence records and 3 Reliquary records
- 8/8 Locomancer Waypoints local IDs 42–49
- 2/2 No Loose Ends optional quests: In Service to Science (10), Kitava's Torments (11)
- **66/66 distinct original Act 5 checklist references** interleaved across **12 stages**. No creation of duplicate achievement IDs. Total 745 across four tracked achievements remains unchanged.

## Missable dialogue guardrails
- ID 275: defeat Justicar Casticus, return to Utula before defeating High Templar Avarius.
- ID 277: speak to Sin **in the Chamber of Innocence after defeating Innocence but before leaving the room**.
- ID 295: speak to Sin **in The Ossuary after taking Sign of Purity but before leaving the zone**.
- **14 Nov source correction:** before defeating High Templar Avarius, verify **both Waypoints local #44 Oriath Square and #45 The Templar Courts** in the world map (U). PoE Wiki notes these areas change after Innocence, and the old Waypoints become inaccessible through ordinary progression. The new `oriath-courts` `stopWaypointIds` guard checks these exact original Waypoint IDs and confirms risky Next/dropdown skips without inventing NPC dialogue IDs; see [source audit](./handoff/CONTENT-QA-20261114-ACT5-MISSABLE-WAYPOINTS.md). **Not tested in-game on 3.30.**
- One optional step explains Kitava's Torments, with three distinct original item names (Hinekora's Hair, Tukohama's Tooth, Valako's Jaw).
- Source-led steps that contain no NPC dialogue still show Waypoints/Lore and progress correctly. All STOP source IDs belong to the exact phase in which their actionable condition occurs.

## Bilingual system behavior
Two user controls, independent and stored only in the new `poe-companion-language-v1` key:
1. **คำอธิบาย / Guidance**: ไทย (default) or English. Act 5 route has authored TH/EN heading, three action instructions per stage and specific English STOP warnings. All 745 checklist item cards can show conservative, source-grounded English action summaries; legacy Thai cautions remain available in expandable source blocks when English detail is incomplete.
2. **ชื่อเควสต์ พื้นที่ และไอเท็ม / In-game names**: canonical English (default), Thai or bilingual. Source English preserved via in-game title or inline text; unknown Thai translations fall back to English. Thai is explicitly editorial translation, not official game localization.

Do not claim full human-reviewed English translations exist for every pre-Act 5 legacy condition. The source English names and IDs are the authority.

## UX/UI improvements
- Current phase: direct zone/quest heading, completion progress across all 4 achievements, then precise STOP, action steps and required item names.
- Next button warns about unchecked STOP dialogues and respects Cancel; navigation does not manipulate quest state.
- Mobile: 10 Act choices in visible grid rather than scroll-hidden horizontal strip; keyboard focus states, labels, touch target sizes and responsive widths improved.
- Priority context on one page: 5 initial NPC rows; more rows, Lore, Waypoints, optional quest, original source details and quest illustrations are expandable, rather than competing visually.
- Two new original Act 5 Sin-related quest state diagrams, each labelled **NOT AN IN-GAME SCREENSHOT**. Total diagrams across Acts 1–5: 11.
- GitHub project-scoped UX skill: `.agents/skills/poe-achievement-ux/SKILL.md` with user-flow rules, accessibility, bilingual QA and regression gates. No account-global skill installation.

## Source evidence / release gate
- [PoE Wiki: All Ears Act 5](https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_5) (June 2025, historical).
- [PoE Wiki: Act 5](https://www.poewiki.net/wiki/Act_5).
- [PoE Wiki: Kitava's Torments](https://www.poewiki.net/wiki/Kitava%27s_Torments).
- [Steam historical zone guide](https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869).
- [PoE official 3.30 expansion announcement](https://steamcommunity.com/app/238960/announcements/).

No real patch 3.30 game-client verification or fresh-character achievement counter evidence has been collected. Source-guide route is a play aid, not a guaranteed 100% safe sequence.
