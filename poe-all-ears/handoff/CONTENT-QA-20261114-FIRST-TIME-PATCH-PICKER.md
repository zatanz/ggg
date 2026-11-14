# PoE Achievement Checklist — first-time patch selection UX correction
**14 November 2026 (Asia/Bangkok)**  
**Status:** source-led presentation fix, not PoE 3.30 achievement certification.

## Problem / observed cause
After PR #43, new players **could** explicitly opt into viewing historical quest guidance for their real patch 3.30 without silently selecting legacy 3.9, but the **game patch selector itself was still nested in collapsed Settings**. The first task screen only showed character and Act selectors. A beginner might conclude that the site was based on 3.9 and be unable to find the supported 3.30 historical viewing path.

## Implemented UX
- Move the one **existing** `#patch` selection control, with its `#patchStatus` and `#patchNotice`, from the nested Settings disclosure into the main `hubCampaignContext` immediately beside the first-step intro and before the character/Act row. **Do not duplicate** a second selector or create a new wizard.
- The visible label says **แพตช์ที่เล่น / Game patch** depending on the independent guidance-language setting. The canonical patch selector retains original values, selected-patch memory, explicit 3.30 opt-in, legacy 3.9 and unsupported 3.29 protections; both profile status and source note remain visible on the compact strip.
- Keep the rest of Settings for secondary language choices and character management. Compact CSS targets mobile 375px and desktop. Maintain minimum 43px select height and original keyboard accessible label; preserve the status warning.
- User selects 3.30 from the main screen: the previously implemented **historical-reference source gate** still appears; it must be consciously opened by the existing **Open historical reference for 3.30 (unverified)** action. Do not auto-consent or misrepresent the legacy route as 3.30 certified.
- Character data, 745 canonical historical IDs, active 744 marks, quest STOPs, schema:2 backup, per-character state and one `poe-selected-patch-v1` storage preference remain unchanged.

## Acceptance
1. Settings initially closed; `#hubCampaignContext #patch` visible and unique, `#hubSettings #patch` absent.
2. Select 3.30 without opening Settings: original 3.30 gate and explicit historical opt-in remain.
3. Return to legacy 3.9: Act 1 source-led steps render normally.
4. Check TH/EN label switching and mobile 375px viewport bounds, horizontal overflow zero.
5. Original data integrity and Playwright Chromium complete pass required on PR head AND final merged-master SHA, with GitHub Pages workflow for same commit. Do not report direct live HTTP readback without evidence.

## Source status
The supplied route includes historic 2025 PoE Wiki and Steam guidance; the [official 3.30 notes](https://www.pathofexile.com/forum/view-thread/4013680) do not certify a 100%-safe All Ears route. Fairgraves/Bestel dialogue timing, Act 2 first-talk conflict and Act 9 Highgate choice remain **HOLD** pending controlled in-game tests.

Related: [PR #43 patch-3.30 opt-in contract](./CONTENT-QA-20261114-PATCH330-REFERENCE-PREVIEW.md) · [Issue #30](https://github.com/zatanz/ggg/issues/30)
