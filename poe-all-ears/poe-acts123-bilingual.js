/* Reviewed English quest-state wording for Acts 1–3. Historical source only; not certified for PoE 3.30. */
(function(){
"use strict";
const walk=window.POE_STEAM_WALK;if(!walk||walk.patchCertified!==false)throw Error("Base quest route missing");
const translated={
  "1": {
    "strand": [
      "Speak with the Dying Exile before entering the Coast",
      [
        "Talk to the Dying Exile on the Twilight Strand and finish the Introduction dialogue."
      ],
      null
    ],
    "town": [
      "Lioneye's Watch · hear the opening conversations",
      [
        "Speak with Nessa, Bestel and Tarkleigh. Return to them when meeting another NPC unlocks new topics.",
        "Interact with Letters of Exile until you have collected all fifteen distinct letters. Repeated letters do not count twice."
      ],
      null
    ],
    "medicine": [
      "Mercy Mission · return after finding the Medicine Chest",
      [
        "Accept Mercy Mission and retrieve the Medicine Chest from the Tidal Island.",
        "Return to Lioneye's Watch and check the Cannibals and Medicine Chest topics with Bestel and Tarkleigh."
      ],
      null
    ],
    "mudflats": [
      "Mud Flats · talk before entering the pool or inserting glyphs",
      [
        "Ask Nessa and Tarkleigh about the Rhoas.",
        window.POE_APPROVED_GUIDANCE.undeadRhoas.en,
        "Collect the Strange Glyphs, find the Glyph Wall, then return for Tarkleigh: Strange Glyphs and Glyph Wall.",
        "Only insert the glyphs after both conversations are complete."
      ],
      "STOP: " + window.POE_APPROVED_GUIDANCE.undeadRhoas.stopEN + ", or insert glyphs before Tarkleigh's Strange Glyphs and Glyph Wall topics."
    ],
    "pool": [
      "A Dirty Job · check dialogues after the quest",
      [
        "Complete A Dirty Job by defeating the necromancer, then talk to Tarkleigh.",
        "Check Bestel: Surviving Wraeclast and Tarkleigh: Goatmen when their topics become available."
      ],
      null
    ],
    "prison": [
      "The Caged Brute · talk before fighting Brutus",
      [
        "Enter the Prison and return to Tarkleigh and Bestel for their Brutus topics.",
        "After meeting Piety, hear Nessa: Piety.",
        "Read Shavronne's Journal in the Upper Prison, then check Bestel: Marceus Lioneye.",
        "Hear Bestel: Brutus before killing Brutus."
      ],
      "STOP: hear Bestel: Brutus (local ID 27) before killing Brutus."
    ],
    "prisoners-gate": [
      "After Brutus · revisit town",
      [
        "After defeating Brutus, return to town and ask Nessa about Brutus.",
        "After seeing Piety block the Western Forest route, hear Bestel: Prisoner's Gate."
      ],
      null
    ],
    "fairgraves": [
      "Fairgraves · finish the dialogue sequence before the Allflame",
      [
        "After reaching the Ship Graveyard, check Bestel and Tarkleigh's Merveil topics.",
        "Speak to Fairgraves about the Allflame, Merveil and Merveil's Necklace.",
        "Return to Lioneye's Watch for Bestel: Captain Fairgraves.",
        "Return to Fairgraves for The Real Fairgraves BEFORE picking up the Allflame."
      ],
      "STOP: do not pick up the Allflame until you have heard the Fairgraves → Bestel → Fairgraves dialogue sequence."
    ],
    "merveil": [
      "After Merveil · finish Act 1 dialogues before leaving",
      [
        "After defeating Merveil, return to Lioneye's Watch.",
        "Hear Nessa, Bestel and Tarkleigh's Merveil topics before leaving Act 1.",
        "Compare your Act 1 All Ears progress and any outstanding lore, Waypoints and side quests with the actual game."
      ],
      "STOP: before leaving Act 1, check all three post-Merveil town conversations."
    ]
  },
  "2": {
    "forest-encampment": [
      "Forest Encampment · speak to the town NPCs first",
      [
        "Speak with Eramir, Greust, Yeena, Silk and Helena. Revisit NPCs when introductions unlock additional topics.",
        "After starting The Great White Beast, hear Silk's pre-completion dialogue.",
        "Do not decide the Bandits yet: historical Steam and Wiki guidance disagree on the first-talk order around the Ancient Seal."
      ],
      "STOP: hear Silk's pre-completion Great White Beast dialogue. Do not kill or help any Bandit before reviewing the conflicting source timings."
    ],
    "old-fields": [
      "Old Fields · separate Silk's before/after quest topics",
      [
        "Explore the Old Fields and the Den; ask Greust and Yeena about Elementals as the topics appear.",
        "After defeating the Great White Beast, return for Silk's updated dialogue.",
        "Silk has separate dialogue before and after the quest. Check both, not just one."
      ],
      "STOP: hear Silk: The Great White Beast (local ID #57, Wiki row #62) before completing the quest."
    ],
    "western-forest": [
      "Western Forest · revisit town before helping Helena",
      [
        "Explore the Western Forest before rushing through the Chamber of Sins, following the older Steam caution.",
        "After defeating Captain Arteri, revisit Greust, Eramir, Silk, Nessa, Bestel and Tarkleigh for newly available topics.",
        "Review the area's No Stone Unturned lore separately before advancing."
      ],
      "STOP: check the Western Forest topics that unlock before entering the Chamber of Sins or rescuing Helena."
    ],
    "sins-before-helena": [
      "Chamber of Sins · talk to Yeena before rescuing Helena",
      [
        "After entering the Chamber of Sins, return to Yeena for the Chamber of Sins topic.",
        "Finish this dialogue BEFORE completing Intruders in Black and rescuing Helena."
      ],
      "STOP: hear Yeena: Chamber of Sins before rescuing Helena or completing Intruders in Black."
    ],
    "sins-after-helena": [
      "After Helena · check the Baleful Gem quest state",
      [
        "After rescuing Helena, revisit town NPCs about Helena, Fidelitas and the Baleful Gem.",
        "Check Eramir: The Baleful Gem before changing the inventory state by acquiring Maligaro's Spike.",
        "Listen to Silk, Greust and Yeena's Maligaro's Spike topics as their quest conditions allow."
      ],
      "STOP: do not change the Baleful Gem / Maligaro's Spike quest state before hearing Eramir: The Baleful Gem."
    ],
    "crypt": [
      "The Crypt · return to Eramir after entering",
      [
        "Explore the Fellshrine Ruins and the Crypt.",
        "After entering the area, return for Eramir: Fellshrine Ruins, as noted by the historical guide."
      ],
      null
    ],
    "roots": [
      "Tree Roots · hear Eramir before clearing the obstruction",
      [
        "Once you have the Baleful Gem and Maligaro's Spike, ask Eramir about Maligaro's Creation.",
        "When you find the blocked Tree Roots, return for Eramir: Ancient Gateway BEFORE clearing the roots or defeating Lorrata.",
        "After clearing the path, revisit Eramir and Yeena for the Lorrata topics."
      ],
      "STOP: hear Eramir: Maligaro's Creation and Ancient Gateway before destroying the roots or dealing with Lorrata."
    ],
    "ancient-seal": [
      "Ancient Seal · collect the town's Darkness dialogue",
      [
        "Open the Ancient Seal to unlock the Darkness topics according to both historical guides.",
        "Return for Eramir, Helena, Silk, Greust and Yeena's Darkness conversations.",
        "Do not kill or help the Bandits yet. The sources disagree about when the first Bandit conversations should happen relative to the Seal."
      ],
      "STOP: hear the town's Darkness dialogues before killing or helping any Bandit."
    ],
    "bandit-decisions": [
      "Bandits · talk first and revisit Eramir after each kill",
      [
        "While Alira and Oak are still alive, check their Darkness topics. The 2025 Wiki does not list a matching topic for Kraityn.",
        "For the kill-all route, return to Eramir after killing the first Bandit and again after the second, BEFORE killing the third.",
        "After all three are dead, hear Eramir: Bandit Lords and check the newly available Greust and Helena dialogue.",
        "Steam and PoE Wiki disagree on when to first talk to the Bandits relative to the Seal. This timing is not patch-certified."
      ],
      "STOP: collect the town, Alira and Oak Darkness topics before making irreversible Bandit decisions. Revisit Eramir BETWEEN kills."
    ],
    "vaal-oversoul": [
      "After Vaal Oversoul · finish the Light topics",
      [
        "After defeating the Vaal Oversoul, return to Forest Encampment.",
        "Speak to Eramir, Greust, Yeena, Silk and Helena about the Light in their post-boss state.",
        "Check Act 2 dialogue, lore, Waypoint and side-quest counts against the game before leaving the Act."
      ],
      "STOP: hear all five Light topics before leaving Act 2."
    ]
  },
  "3": {
    "sarn-entry": [
      "Act 3 entry · rescue Clarissa before Crematorium",
      [
        "After entering the City of Sarn, rescue Clarissa and check Maramoa, Hargan and Grigor's early dialogue as it unlocks.",
        "Read Ancient Graffiti in the City of Sarn and revisit town when new NPC topics appear."
      ],
      "STOP: rescue Clarissa and check the opening Act 3 topics before rushing to the Piety encounter in the Crematorium."
    ],
    "bracelet": [
      "Tolman's Bracelet · hear Hargan before turning it in",
      [
        "After picking up Tolman's Bracelet, return to Hargan for Introduction (Wiki row #115) while you still have the item.",
        "Check each town topic at its actual quest state. Some conversations in this group unlock AFTER you hand in the Bracelet.",
        "Once the pre-handover topic is complete, give the Bracelet to Clarissa for the Sewer Keys, then check post-quest dialogue."
      ],
      "STOP: hear Hargan: Introduction (Wiki row #115) BEFORE giving Tolman's Bracelet to Clarissa."
    ],
    "sewer-blockage": [
      "Sewers · revisit Maramoa",
      [
        "In the Sewers, check Clarissa's topics as they become available.",
        "After seeing the Undying Blockage, return for Maramoa: Crossing the River (local ID 140).",
        "Other Wiki rows #132–139 can unlock after entering later areas; do not assume they must all be available at this blockage."
      ],
      null
    ],
    "market-battlefront": [
      "Marketplace and Battlefront · collect the area's lore",
      [
        "Read Ancient Notebook in the Marketplace and the named Graffiti and Monograph entries in the Catacombs.",
        "At the Battlefront, collect its Graffiti and check Clarissa: Statues when unlocked.",
        "If you find the route to Solaris Temple, return to check Clarissa: The Lunaris Temple."
      ],
      null
    ],
    "docks-fairgraves": [
      "Fairgraves at the Docks · talk before collecting quest items",
      [
        "Meet Fairgraves without Decanter Spiritus or Chitus' Plum in your inventory to hear Introduction (Wiki row #153).",
        "Check the Decanter Spiritus, Chitus' Plum, The Undying and Resurrection topics when available, before handing in the items.",
        "Read the Docks Graffiti. If Fairgraves is missing, check whether you completed The Marooned Mariner in Act 1."
      ],
      "STOP: hear Fairgraves: Introduction BEFORE picking up Decanter Spiritus or Chitus' Plum."
    ],
    "dialla-intro": [
      "Lady Dialla · first conversation before collecting items",
      [
        "Before meeting Lady Dialla, confirm that you have NEITHER Thaumetic Sulphite nor Ribbon Spool in your inventory (Wiki row #143).",
        "Hear Dialla: Introduction, then revisit Hargan, Grigor and Maramoa for unlocked town topics.",
        "Fairgraves and Dialla belong to different quests; the historical route does not prove the current patch's timing."
      ],
      "STOP: meet and hear Lady Dialla: Introduction before collecting Thaumetic Sulphite or Ribbon Spool."
    ],
    "dialla-items": [
      "Sulphite and Ribbon Spool · preserve the item-state order",
      [
        "Hear Lady Dialla: Thaumetic Sulphite while you do NOT have Ribbon Spool (Wiki row #148).",
        "As the quest state changes, check The Sewers, Malachai, Chitus and Infernal Talc topics when available.",
        "Read Journal Entry, Reverie Device and Malachai's Journal in Solaris Temple Level 2."
      ],
      "STOP: hear Lady Dialla: Thaumetic Sulphite before taking Ribbon Spool, according to the historical item-state condition."
    ],
    "ebony-pre-gravicius": [
      "Ebony Barracks · speak to Maramoa before Gravicius",
      [
        "After entering Ebony Barracks, return to Maramoa for Crossing the River.",
        "Read Ancient Graffiti in the Ebony Barracks.",
        "Fight General Gravicius only after checking the dialogue."
      ],
      "STOP: hear Maramoa: Crossing the River (Wiki row #158) BEFORE killing General Gravicius."
    ],
    "gravicius-before-piety": [
      "After Gravicius · check town topics before Piety",
      [
        "After defeating Gravicius, revisit Lady Dialla, Hargan, Clarissa, Maramoa and Grigor for unlocked dialogue.",
        "Claim Sever the Right Hand's reward, then check Maramoa: Piety and Grigor: The Lunaris Temple as their source conditions allow.",
        "Do not kill Piety before the two source-flagged topics (Wiki rows #163–164)."
      ],
      "STOP: hear Grigor: The Lunaris Temple and Maramoa: Piety before killing Piety."
    ],
    "after-piety": [
      "After Piety · collect the remaining town conversations",
      [
        "After defeating Piety, return for Clarissa, Hargan and Maramoa's Piety topics.",
        "Check Grigor: The Beast when that topic unlocks.",
        "Compare the in-game topic count before proceeding to the Library."
      ],
      null
    ],
    "library": [
      "Library and Siosa · collect all seventeen distinct books",
      [
        "Read Bronze Monograph in the Imperial Gardens before heading into the Library.",
        "Meet Siosa, collect the Golden Pages and revisit his dialogue at the relevant quest states.",
        "Collect the seventeen distinct books: seven The Ancients, six Purity Chronicles and four Victario's Writings. Check each title; repeated books do not count again."
      ],
      null
    ],
    "after-dominus": [
      "After Dominus · finish Act 3 conversations and lore",
      [
        "After defeating Dominus, return for Maramoa: Dominus and Piety and Dominus.",
        "Read Plaque and Letter to Chitus in the Sceptre of God.",
        "Before leaving Act 3, check outstanding lore, Waypoints and side quests against your in-game counter."
      ],
      "STOP: check both post-Dominus Maramoa topics before leaving Act 3."
    ]
  }
};
for(const [act,entries] of Object.entries(translated)){
 const phases=walk.acts[act];if(!Array.isArray(phases))throw Error("Missing Act "+act);
 const ids=new Set(phases.map(p=>p.id));const translatedIds=Object.keys(entries);
 if(ids.size!==translatedIds.length||translatedIds.some(id=>!ids.has(id)))throw Error("Incomplete English route for Act "+act);
 for(const p of phases){const [headingEN,actionsEN,stopEN]=entries[p.id];
  if(!headingEN||actionsEN.length!==p.actions.length||p.stop&&!stopEN||!p.stop&&stopEN)throw Error("Translation state mismatch "+act+":"+p.id);
  p.headingEN=headingEN;p.actionsEN=actionsEN;if(stopEN)p.stopEN=stopEN;
 }
}
})();
