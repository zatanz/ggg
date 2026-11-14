# PoE 1 Achievement Companion — 3.30 current-game reference preview UX

**Date:** 14 Nov 2026 (Asia/Bangkok)  
**Scope:** Current-game usability without declaring legacy content patch certified.  
**Source reliability:** Historical 2025 PoE Wiki, original 3.9 records and later user-supplied Steam notes. **Not** an in-game 3.30 achievement test.

## Problem

The site has 129 source-led quest stages across Acts 1–10 and manual checklists across four achievements. Yet choosing patch **3.30** hid the legacy NPC list and the entire guided campaign. The only button changed the selected patch to **legacy-3.9**, which is confusing to a player whose actual game is 3.30 and obscures which version they are playing.

## Implementation

- Keep patch **3.30** in the selected patch control while offering one prominent, explicitly labelled **Open historical reference for 3.30 (unverified)** action. Do **not** silently switch to 3.9.
- Until the user opts in, the 3.30 gate remains intact. After opting in, the existing source-led quest and manual checklist are available as **historical references only**, not a patch-certified data profile. All existing critical STOP checks (Act 2 pre-Seal, Act 5 Waypoints, Act 6 Nessa/Beacon, Acts 7–10) remain in place.
- Every active view (Quests, Checklists, Backup & verify) retains a compact top status notice: **3.30 · Historical reference, NOT patch-certified** with **Hide historical reference** action. Do not hide warnings in a collapsed Settings menu. English and Thai copy use independent guidance language.
- Local-only opt-in key `poe-330-historical-reference-preview-v1` is strictly scoped to patch **3.30**, and the selected patch key `poe-selected-patch-v1` remembers the user's chosen game version through reloads. The legacy `legacy-3.9` profile and unsupported `3.29` gate are unaffected. User can disable preview, retain patch 3.30, and restore the gate at any time.
- Existing native 484 All Ears rows and progress are available only in the historical profile or after the explicit 3.30 reference opt-in; patch 3.29 remains blocked. Quest rewards are **not** relabelled as 3.30 verified.
- Opt-in and patch selection are display-only device settings. Do not modify per-character achievement marks, route IDs, first-talk manual review, selected character, legacy 745 IDs, 67 extra route bindings or unified schema:2 backups. The preview status is not a character-specific achievement and is not exported.
- Release note for 3.30 now says **released**, not **scheduled**, while preserving status `released-unverified`, `dialogues:null`, `guide:null`, `rewards:null`.

## Acceptance checks

1. Patch 3.30 selected, no consent: route gated, old records hidden, review/backup still accessible.
2. Click explicit opt-in: patch selector **still 3.30**, status **still unverified**, quest/collection views render, STOP gates remain, compact warning present in all three views.
3. Reload: patch selection and opt-in persist with warning; TH/EN copy matches guidance setting.
4. Disable preview: still on 3.30, guide hidden and gate restored; reload remains disabled. Patch 3.29 cannot inherit approval. Original legacy 3.9 view still works.
5. Consent + navigation never tick any canonical achievement item. Re-running Chromium, validation and post-merge Pages verification required before marking deployed.

## Known limitations

There is **no** complete fresh-patch 3.30 game-character certification of All Ears, No Stone Unturned, Locomancer, or No Loose Ends. The actual in-game counters may vary; 484/484 in this historical list is not proof of unlocking the achievement.

Source-of-truth links:
- [Official 3.30 patch notes](https://www.pathofexile.com/forum/view-thread/4013680)
- [PoE Wiki: All Ears](https://www.poewiki.net/wiki/Guide:All_Ears_achievement)
- [PoE Wiki: No Stone Unturned](https://www.poewiki.net/wiki/Guide:No_Stone_Unturned_achievement)
- [Issue #30](https://github.com/zatanz/ggg/issues/30)
