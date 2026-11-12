---
name: poe-achievement-ux
description: Apply quest-driven UX/UI and bilingual accessibility standards when editing the Path of Exile Achievement Companion website.
---

# PoE Achievement UX/UI Skill — project-scoped

This skill applies only to `poe-all-ears/` in the `zatanz/ggg` repository. It is not a global ChatGPT skill.

## User job and information priority
Help players manually complete the four tracked achievements: All Ears, No Stone Unturned, Locomancer, No Loose Ends. Focus on the current Act and quest phase, the exact next action and STOP-before-missing requirements; keep historic source disclosures, deep lists, reward metadata and backups secondary.

1. Show Act, stage, area, quest title, progress of all four categories.
2. Show exact critical dialog with its before-action timing first. STOP must use text AND contrast, not color only.
3. Show 2–4 actionable steps. Hide long NPC/lore lists behind clearly labelled disclosures, but make all missable rows reachable directly.
4. Show only context-linked relevant item names, Waypoints and Side Quest entries, using canonical IDs once per phase.
5. Preserve optional images as original sourced conceptual artwork labelled NOT AN IN-GAME SCREENSHOT, never pretend official screenshots.

## Two independent languages
- Guidance preference: Thai or English. Name preference: English, Thai or both. Default guidance Thai / game names English. Keep these independent in their own localStorage key, separate from player and backup data.
- Official English names and canonical numerical IDs remain source truth. Thai names are editorial translations, not verified official game localization. Unknown names fall back to exact English, without invented Thai.
- Act 5 has reviewed bilingual route actions; other Acts use conservative English help when full translation is unavailable and allow expansion of the original Thai source. Never hide a missable warning because of language choice.
- Search works with both language name variants. Preserve item/quest identity when language changes.
- Avoid claiming that an English mode makes all 745 legacy row-level descriptions fully translated.

## UX and accessibility
- One task per phase as primary surface; present progressive disclosure. Keep explicit Previous and Next; warn but do not permanently block when stepping past unchecked STOP lines.
- Maintain 44px minimum interactive target and visible keyboard focus, legible contrast, labelled controls, correct language semantics and mobile 375px with no horizontal document overflow.
- On mobile, display all ten Act choices without sideways scrolling; keep selection state and scroll orientation obvious.
- Switching modes must not change character, checked records, Act/phase, backup schema or quest state.
- Verify names and warnings in English and Thai using source links; do not use approximate OCR or screenshots as proof of game state.

## Validation and release
- Check Act ID coverage once per category and exact 745 canonical records unchanged.
- Run `node poe-all-ears/validate-data.cjs`, `node poe-all-ears/validate-ui.cjs`, and Playwright `node poe-all-ears/test-browser.cjs`.
- Exercise English description + Thai and bilingual game name modes, reload persistence, checkbox and character preservation, STOP Next warning, keyboard focus, mobile grid and alt text.
- Inspect GitHub Actions and Pages after PR/merge. Mark 3.30 gameplay unverified until personally reproduced in a compatible game client.
