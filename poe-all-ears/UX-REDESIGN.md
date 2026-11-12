# PoE 1 Achievement Companion — UX revision 2026-11-12

## Player feedback
- The previous six top-level tabs forced the player to decide which Achievement to track before knowing what to do in the current Act.
- Four expanded lists in an Act made scrolling and scanning inefficient, especially on mobile.
- Wording such as "Recheck", "Safety", and generic "ติ๊ก" described the web app instead of the actions performed in Path of Exile.
- Random Lore, especially Vaal Side Areas, needs search that is useful without populating a wall of results by default.

## IA options considered

| Option | Strength | Trade-off | Decision |
| --- | --- | --- | --- |
| Four independent tracker pages | Simple implementation | Forces switching during one campaign playthrough | Rejected as primary workflow |
| Six main tabs on one page | Direct access to every feature | Too many choices; repetitive UI | Replaced |
| **Act-first journal with three primary sections** | Follows how people play: progress through Acts, then browse or reconcile | Cross-Achievement route order requires verified area data | **Implemented** |

### Chosen IA / interaction
1. **ตาม Act** — one row of Act 1–10 shortcuts. Each Act has four collapsible groups with progress counts. NPC dialogues open by default; the other groups remain visible as headers and can be expanded when needed. Default filter is incomplete entries.
2. **เช็กลิสต์ทั้งหมด** — secondary four-way choice for All Ears, Lore, Waypoints, and Side Quests. On mobile, all four choices appear as a 2x2 grid without horizontal scrolling. Existing detailed All Ears list remains available here.
3. **ตรวจยอด / สำรอง** — manual count comparison, a collapsible Act 2 safety checklist, and a single-file all-character backup.
4. Character selection stays global. Advanced rename/delete and legacy backup actions are available from an expandable **จัดการตัวละคร** disclosure instead of taking space during play.
5. No hidden game-state monitoring. A checkbox records a player's own confirmation only. Unsupported patch routes remain gated, while export and Recheck remain available.

## Thai copy and PoE lexicon

| Prior UI / general wording | Replacement | Why |
| --- | --- | --- |
| เล่นตาม Act (claimed walkthrough by implication) | รายการตาม Act / ตาม Act | Source-based reference order is not a certified safe route |
| All Ears (alone in row labels) | บทสนทนา NPC / ฟังแล้ว | Reflects the actual in-game action |
| No Stone Unturned / อ่าน Stone | สำรวจ Lore / สำรวจแล้ว | In-game counting requires interaction, not reading the full text (PoE Wiki) |
| Waypoints / ติ๊ก | จุดวาร์ป (Waypoint) / เปิดแล้ว | Identifies which object the character interacts with |
| Side Quests / ติ๊ก | เควสต์รอง / ทำสำเร็จ | Clear completion action |
| Recheck | ตรวจยอด Achievement กับเกม | Explains what the player can actually do |
| Safety Checkpoint | ตรวจจุดที่อาจพลาด | Explains the in-game consequence |
| ยังไม่ติ๊ก / ติ๊กแล้ว | ยังไม่ได้เก็บ / เก็บแล้ว | Consistent status vocabulary |
| Vaal random info | ค้นหา Vaal Letter ตามชื่อ Vaal Side Area | Ties user search to the visible game location |

Keep official names **Eramir, Helena, Alira, Oak, Kraityn, The Darkness, Ancient Seal, Wraeclast, Vaal Letter, Research Journal, All Ears, No Stone Unturned, Locomancer, No Loose Ends** in English. Do not casually localize official NPC, item or quest names; players need exact strings to find them in-game.

## What this redesign does not assert
- It does not establish a certified 3.30 traversal, a verified order of all quest states, or guaranteed Vaal spawns.
- The historic Wiki 2025 and 3.9 reference data are clearly labelled. No original progress IDs or legacy import keys were changed.
- The live URL still requires an independent human visual/usability session. GitHub Actions Chromium smoke tests are automated tests, not a human UX review.
- Remaining gameplay QA is tracked in [PATCH-330-AUDIT.md](./PATCH-330-AUDIT.md) and [DELIVERY-PLAN.md](./DELIVERY-PLAN.md).

## References
- https://www.poewiki.net/wiki/Guide:All_Ears_achievement
- https://www.poewiki.net/wiki/Guide:No_Stone_Unturned_achievement
- https://www.poewiki.net/wiki/Environmental_lore
