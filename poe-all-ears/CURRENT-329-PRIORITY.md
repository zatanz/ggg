# Current playable patch priority — 3.29

Updated 2026-11-13, Asia/Bangkok.
Scope: Path of Exile 1 Achievement Companion, 4 tracked achievements only.

## Decision

Prioritize verification and usability against **3.29, the latest playable patch before the scheduled 3.30 launch**. The 3.29 Curse of the Allflame league ended on November 9, 2026 PST, but that does not by itself establish that 3.30 is already live. GGG's November 12 launch notice schedules 3.30 servers live on November 13, 19:00 UTC (November 14, 02:00 Bangkok). This priority note is time-scoped; reevaluate live version after that time, rather than automatically certifying anything.

This project will **not** block current editorial, interaction, accessibility or historical source reconciliation work while waiting for 3.30. PR #11 (3.30 in-game acceptance plan) stays deferred. Keep 3.30 patch profile unverified and do not merge speculative achievement requirements.

## P0 — next independent work

1. **All Ears:** compare 484 historical records to PoE Wiki's conditions, source warnings, and Steam guide line by line, with special focus on missable pre/post boss conversations and Act 2 Bandits. Record source differences rather than inventing one safe branch.
2. **No Stone Unturned:** check 140 record mapping and unique lore counter semantics, separating random Letters, Library, Labyrinth and Vaal subsets.
3. **Locomancer:** reconcile the 91 historical IDs to the version history reporting 90. Do not delete a record or migrate progress until the exact 3.29 counter and node list is evidenced.
4. **No Loose Ends:** verify each of the 30 historical quests and turn-in conditions, distinct from quest reward lookup.
5. **Player flow:** first actionable stage above long lists, explicit STOP actor/event, category list on request, stable checkbox after marking, separate language preferences and canonical English game terms.

## P1 — practical UX and localization

- Improve first-screen information hierarchy: current step and risk first; keep profile/patch controls secondary where possible, without hiding the selected character.
- Test language selection mid-route, keyboard focus, 320/375px mobile and backup restore; authored English rather than unlabelled Thai fragments.
- Correct text to say **historical guide / incomplete 3.29 validation**, rather than leading with unreleased 3.30 in every warning.
- Collect in-game proof as available, but do not treat lack of full game testing as a reason to stop source editorial and UI polish.

## Deferred

- Full 3.30 484/140/waypoints/30 verification, new league-specific behavior and gameplay release certification.
- Unneeded skill-gem/build optimization for the focused four-achievement guide.

## Reliability rule

Historical source match ≠ 3.29 gameplay observation ≠ confirmed achievement unlock. Cite the exact source for each potentially irreversible action. Never imply that manually checked 745/745 equals real unlock, and preserve per-character local data IDs and backup schemas.

Sources:
- https://steamcommunity.com/app/238960/announcements/
- https://www.poewiki.net/wiki/Guide:All_Ears_achievement
- https://www.poewiki.net/wiki/Guide:No_Stone_Unturned_achievement
- https://www.poewiki.net/wiki/Waypoint
- https://steamcommunity.com/sharedfiles/filedetails/?id=2948321869
