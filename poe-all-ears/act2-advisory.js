/* Source-derived Act 2 conditional dialogue model. Patch applicability NOT verified. */
window.ALL_EARS_ACT2_ADVISORY = {
  "schema": 2,
  "reviewStatus": "wiki-reviewed-patch-unverified",
  "source": "https://www.poewiki.net/wiki/Guide:All_Ears_achievement#Act_2",
  "sourceUpdated": "2025-06-30",
  "warning": "Act 2 มีบทสนทนาที่ขึ้นกับลำดับการจัดการ Bandits และ Ancient Seal ต้องคุยกับ Bandits ก่อนเปิด Ancient Seal แต่ยังไม่ควรฆ่า Bandits จนกว่าจะเปิด The Darkness ตามคู่มือ Wiki",
  "dependencies": [
    {
      "id": "bandit-introductions",
      "kind": "prerequisite",
      "condition": "talk to each bandit before breaking the Ancient Seal",
      "status": "wiki-reviewed-patch-unverified"
    },
    {
      "id": "darkness",
      "kind": "prerequisite",
      "condition": "break the Ancient Seal and unlock The Darkness dialogue before killing bandits",
      "status": "wiki-reviewed-patch-unverified"
    },
    {
      "id": "eramir-branches",
      "kind": "conditional",
      "condition": "Eramir topics depend on bandit kill order and surviving bandit",
      "status": "wiki-reviewed-patch-unverified"
    }
  ],
  "branchRows": [
    {
      "wikiRow": 101,
      "npc": "Eramir",
      "trigger": "first bandit killed",
      "variants": [
        {
          "firstKilled": "Alira",
          "topic": "Alira"
        },
        {
          "firstKilled": "Oak",
          "topic": "Oak"
        },
        {
          "firstKilled": "Kraityn",
          "topic": "Kraityn"
        }
      ]
    },
    {
      "wikiRow": 102,
      "npc": "Eramir",
      "trigger": "second bandit killed; one remains alive",
      "variants": [
        {
          "survivor": "Kraityn",
          "topic": "Kraityn"
        },
        {
          "survivor": "Oak",
          "topic": "Oak"
        },
        {
          "survivor": "Alira",
          "topic": "Alira"
        }
      ]
    },
    {
      "wikiRow": 103,
      "npc": "Eramir",
      "trigger": "all three bandits killed",
      "variants": [
        {
          "topic": "Bandit Lords"
        }
      ]
    }
  ],
  "notes": [
    "The Darkness dialogue is absent for Kraityn according to the wiki because the darkness does not reach The Broken Bridge.",
    "Wiki mentions Book of Reform (Eramir) as a possible recovery route; do not assume it works in the current patch."
  ],
  "patchCertified": false
};
