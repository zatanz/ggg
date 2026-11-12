# All Ears — Source Review 001 (2026-11-12)

## Source and version scope
- Primary source: https://www.poewiki.net/wiki/Guide:All_Ears_achievement (page reports last update 2025-06-30).
- Source reports 484 lore points in Acts 1–10 and 3.17.0 removal of Navali.
- This review records **source-confirmed guide statements**, NOT verification against the live 2026 patch.
- Current implementation's 3.9 legacy ordering is not equivalent to wiki route ordering.

## Act 1 source-backed risk constraints (wiki table)
| Wiki row | NPC / topic | Source condition | Do not proceed before | Status |
| --- | --- | --- | --- | --- |
| 27 | Bestel / Brutus | After first entering The Prison and talking to Tarkleigh | Killing Brutus | WIKI-REVIEWED; PATCH-UNVERIFIED |
| 37 | Bestel / Captain Fairgraves | After first talking to Fairgraves | Getting the Allflame | WIKI-REVIEWED; PATCH-UNVERIFIED |
| 38 | Fairgraves / The Real Fairgraves | After Bestel's Captain Fairgraves dialogue | Getting the Allflame | WIKI-REVIEWED; PATCH-UNVERIFIED |

## Act 2 branching constraints
- Wiki explicitly warns not to kill bandits before breaking the Ancient Seal and unlocking The Darkness dialogue, while also talking to each bandit before breaking the seal.
- Wiki rows 101–103 for Eramir have different dialogue topics depending on the order of bandit kills and surviving bandit; model these as conditional alternatives, not three fixed NPC/topic pairs.
- Source table is evidence for a historical/community guide only; independently confirm applicability to target patch before publication.

## QA decisions
1. Do NOT promote guide-act1.js `verified: wiki-guided` to current-patch verified; it has no row-level proof and some entries may be wrong.
2. Do NOT auto-advance users through unverified legacy list order as if it were safe.
3. Treat warnings as evidence-linked, patch-unverified until patch-specific review is complete.
4. Next batch: reconcile all 41 Act 1 wiki rows to local IDs, including duplicate NPC/topic names, then add exact source locators and dependency graph.

## Checkpoint
Source review completed for three Act 1 risk constraints and one Act 2 branching issue, not a full 484-item audit. Verified for current patch: 0/484. Do not inflate coverage.