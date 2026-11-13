# Path of Exile 1 UI visual theme — Codex implementation spec
Date: 2026-11-14 | Applies to: PoE Achievement Companion | Theme direction: **PoE 1 Wraeclast / ancient dark fantasy**
**Status: design spec only, not implemented.** This supersedes generic modern SaaS / PoE 2 visual cues.

## Reference art direction (PoE 1 only)
- Classic Path of Exile 1 in-game **World Map, Quest panel, Inventory and passive/Atlas tree**: dark iron/charcoal frames, aged parchment, muted old-gold/bronze filigree, stone/leather/grain texture, engraved chapter headings, subdued blue waypoint nodes and restrained red/amber risk accents.
- Reference links:
  - https://www.pathofexile.com/forum/view-thread/2037138 (PoE 1 world map + quest/reward screenshot)
  - https://www.pathofexile.com/forum/view-thread/2530502 (PoE 1 inventory screenshot)
  - https://store.steampowered.com/app/238960/Path_of_Exile/ (PoE 1 official game listing/screenshots)
- Use references for **visual study**, not automatic reproduction of copyrighted game art, logos, icons, UI textures or game fonts; use original CSS gradients, ornaments, SVG shapes or assets with verified rights. Do not fetch or embed screenshots as website background without permission. Do not label as official GGG product.

## Existing code and design delta
- Current source: index.html inline CSS :root = background #121419, surface #1b1e25, line #353945, accent #d6b777, Georgia headings; hub.css and campaign.css contain additional component rules.
- The current dark palette is a usable base but flat/modern rounded cards and generic panels do not feel specifically PoE 1. Improve visual hierarchy, texture, framing, distinct navigation and RPG chapter identity without clutter.
- Apply to **the full live single-page experience**, not only hero; include hub, current-quest/resume, Act tabs, four achievement views, STOP, report interface, dialogs, progress, settings, backup, mobile. Unify both CSS files and inline CSS using design tokens. Audit old preview page separately only where still publicly linked.

## Proposed tokens (starting points, adjust after actual contrast tests)
:root {
 --poe-bg: #10100f;          /* near-black stone */
 --poe-surface: #1c1a17;     /* charcoal */
 --poe-surface-raised: #26221c;
 --poe-panel-border: #5d4a32; /* aged bronze */
 --poe-border-soft: #39332a;
 --poe-text: #eee4d1;       /* light parchment */
 --poe-text-muted: #c3b7a3;
 --poe-gold: #c9a368;       /* antique gold */
 --poe-gold-bright: #e4c58c;
 --poe-waypoint: #7daec6;   /* blue waypoint, not primary CTA */
 --poe-done: #8cab83;       /* checked complete */
 --poe-stop: #e4a36a;       /* amber high-risk, high contrast */
 --poe-danger: #d98175;
}
Use color tokens + text labels/icons together for statuses; never encode STOP solely as red and completion solely as green. Contrast test WCAG AA: 4.5:1 for normal body text and 3:1 for large UI text; 3:1 control borders and focus indicators where applicable.

## Visual structure / screen hierarchy
1. **Header and identity:** concise "POE ACHIEVEMENT COMPANION" title + understated stone/iron decorative rule, small chapter motif; avoid full-screen hero artwork that hides current quest. Serif/display gothic-like type for a few headings; Thai body uses highly legible system Thai fonts and no decorative blackletter for Thai copy.
2. **Current quest & Resume panel — most prominent:** bronze-framed quest parchment panel at top, shows Act, area, quest name, one clear "สิ่งที่ต้องทำต่อ" (next action) and CTA. A **single** real step progress meter with readable X/Y; split "last viewed" from "manually checked" and "player-confirmed quest complete." Deprioritize 4-achievement aggregate metric to a secondary view.
3. **Act route/quest chapter selectors:** map parchment/iron tabs, active chapter indicated by a simple bronze notch/underline and accessible text, not glow everywhere. Quest sequence should read like an RPG journal: clear step headers, locations, NPC names, instructions.
4. **Achievements:** same data, fewer visible layers. Use tabs or well-separated categories; keep four task types distinguishable by label and small motif (scroll/dialogue/waypoint/quest), not by four bright colors.
5. **STOP / must-check:** readable amber/ember-bordered panel, concise "หยุดตรวจจุดนี้" label, task and reason + return-to-task action; **historical/unverified** STOP differentiated from proven trigger, no fake certainty.
6. **Checked state:** discreet moss-green check + struck state/marked label, never hide content or change canonical state when user navigates. Important unmarked items remain fully readable.
7. **Player feedback:** small "ข้อมูลนี้ผิด?" at the actual content item, opening a short, uncluttered bronze-framed modal/sheet with prefilled ID/Act; optional description and no mandatory player account if backend supports anonymous reports. Don't cover gameplay checklist with persistent floating reporting controls.
8. **Footer and utility:** backup, patch, reference links accessible but not visually competing with the current task.

## Decorative rules
- Subtle aged texture via CSS noise / radial gradients / engraved borders on a small number of major surfaces only. **No heavy textures under body text** and no actual game screenshot wallpaper.
- Use dark matte backgrounds, asymmetrical iron dividers, small bronze corners / linework. Avoid excessive bevels, giant glows, saturated gradients, glassmorphism, neon cyberpunk, purple PoE 2 references, or faux-inventory grids for text-heavy checklists.
- Prefer compact, practical cards and high-density information handled by progressive disclosure; reduce visible panels, not more containers.
- Borders and ornamentation scale down on mobile; keep minimum 44x44 CSS px tap targets, sensible font sizes and responsive 320–360px layouts.
- Buttons: primary raised bronze with readable dark text; secondary iron-outline, disabled visibly distinguishable; focus rings obvious and not obscured by sticky navigation.
- Motion limited to small feedback transitions; prefers-reduced-motion supported. No autoplay animations.

## Quality acceptance, screenshots and regression
1. Provide desktop and mobile screenshots for: home/current quest, Act 2 quest/STOP, All Ears checklist, Lore/Waypoint, report form and historic Epilogue. Compare each against the above PoE 1 moodboard and current hierarchy.
2. It feels recognizably PoE **1** but stays more legible than the original in-game UI, especially Thai and new users.
3. The first screen answers: where am I in the guide, what should I do next, what is checked vs actually confirmed? Important STOP is visible without a decorative layer burying it.
4. Preserve keyboard navigation, visible focus, reader landmarks, contrast, mobile scroll, no horizontal overflow, normal operation with textures disabled.
5. Preserve existing storage data, all 745 historical rows, ID mapping and source content untouched by visual restyling.
6. Do not call complete until frontend tests and view-level review pass; no silent change to master.

## Codex task precedence
Apply this visual system **together** with issue #30's new learner-first quest/progress UX; not as a cosmetic patch that preserves confusing old information architecture. If time is tight, implement legible layout/progress hierarchy first, then visual ornament.
