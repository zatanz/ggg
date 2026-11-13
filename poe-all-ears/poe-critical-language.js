/* English presentation for 39 historical NPC risk groups and three Act 10 post-quest panels.
  Does not change original Wiki rows, quest-state evidence, canonical IDs or patch certification. */
(function(){
"use strict";
const lang={
  "schema": 1,
  "patchCertified": false,
  "acts": {
    "a1-glyphs": [
      "The Mud Flats · dialogue before the Glyph Wall",
      "After Oozeback Bloom, hear Bestel: Undead Rhoas before entering the Fetid Pool. Hear Tarkleigh's Strange Glyphs and Glyph Wall topics before inserting the glyphs.",
      "Entering the Fetid Pool or inserting Strange Glyphs into the wall",
      "Bestel's pool deadline and Tarkleigh's glyph deadline are separate. Check the correct dialogue before each event."
    ],
    "a1-brutus": [
      "The Prison · check NPCs before Brutus",
      "After entering the Prison, return for Tarkleigh and Bestel's Brutus dialogue. Check Nessa: Piety and the Marceus Lioneye topic after reading Shavronne's Journal.",
      "Defeating Brutus before the required conversations",
      "Some topics appear at different points before the fight. Do not assume they all unlock at once."
    ],
    "a1-fairgraves": [
      "Ship Graveyard · speak before taking the Allflame",
      "Speak to Fairgraves about the Allflame and Merveil, return to Bestel for Captain Fairgraves, then hear The Real Fairgraves back at the Ship Graveyard.",
      "Picking up the Allflame before the Fairgraves → Bestel → Fairgraves conversations",
      "Older patch reports describe unavailable Fairgraves dialogue. If the topic is missing, do not mark it as heard."
    ],
    "a2-whitebeast": [
      "The Great White Beast · speak to Silk first",
      "After accepting The Great White Beast, hear Silk's first topic before completing the quest. Return for the updated topic afterwards.",
      "Completing The Great White Beast before the pre-completion dialogue",
      "The historical source distinguishes Silk's dialogue before and after completion."
    ],
    "a2-sins": [
      "Chamber of Sins · return before rescuing Helena",
      "Before finishing Intruders in Black, return to Yeena for her Chamber of Sins topic. Check Western Forest topics first as their triggers allow.",
      "Rescuing Helena or finishing Intruders in Black prematurely",
      "These topics can have different unlock conditions. Read the per-dialogue requirements."
    ],
    "a2-baleful": [
      "Baleful Gem · preserve the inventory and roots state",
      "Check Eramir: The Baleful Gem before changing the inventory state. With Baleful Gem and Maligaro's Spike, hear Maligaro's Creation and Ancient Gateway before clearing Tree Roots.",
      "Destroying Tree Roots, defeating Lorrata, or acquiring the wrong quest item too early",
      "The conditions for the three dialogue entries are not identical; follow the exact per-entry timing."
    ],
    "a2-darkness": [
      "Ancient Seal / The Darkness · before choosing Bandits",
      "Hear the town Darkness dialogue after the Ancient Seal. Hear Alira and Oak's available Darkness topics while they remain alive, then verify the historical source disagreement before making your choice.",
      "Killing or helping a Bandit before reviewing Darkness dialogue",
      "The Steam guide and PoE Wiki disagree about the first Bandit conversation relative to the Seal. No patch 3.30-safe ordering is certified."
    ],
    "a2-first-kill": [
      "After your first Bandit kill · return to Eramir",
      "If using the kill-all route, return to Eramir immediately after killing the first Bandit. The topic depends on which Bandit you killed.",
      "Killing the second Bandit before speaking with Eramir",
      "Do not use another player's choice as your topic name. The first kill determines the Eramir dialogue."
    ],
    "a2-second-kill": [
      "After your second Bandit kill · return to Eramir",
      "After killing the second Bandit, return to Eramir. The dialogue is named for the Bandit who is still alive.",
      "Killing the third Bandit before hearing the survivor-specific topic",
      "The remaining Bandit depends on your first two kills; verify the in-game topic instead of using a fixed example."
    ],
    "a2-final-kill": [
      "After all three Bandits · hear Bandit Lords",
      "For the kill-all route, return to Eramir after defeating all three Bandit leaders and hear Bandit Lords.",
      "Leaving without the post-completion Bandit Lords topic",
      "This is a separate post-quest conversation; it does not replace either intermediate Eramir return."
    ],
    "a3-clarissa": [
      "Tolman's Bracelet · before handing it to Clarissa",
      "While you still carry Tolman's Bracelet, return for Hargan: Introduction. Then hand the Bracelet to Clarissa and check the conversations unlocked afterwards.",
      "Handing Tolman's Bracelet to Clarissa before Hargan's topic",
      "The group includes both before- and after-handover dialogues. Do not assume every topic belongs before turn-in."
    ],
    "a3-dialla": [
      "Lady Dialla · before holding Sulphite or Ribbon Spool",
      "First meet Lady Dialla without Thaumetic Sulphite or Ribbon Spool in your inventory. After that, check the separate item-state topics as they unlock.",
      "Taking Thaumetic Sulphite or Ribbon Spool before the first dialogue",
      "The initial Dialla topic and her later Sulphite topic depend on different inventory states."
    ],
    "a3-fairgraves": [
      "The Docks · speak to Fairgraves before collecting items",
      "Hear Fairgraves: Introduction while carrying neither Decanter Spiritus nor Chitus' Plum. Check further topics before handing in the quest items.",
      "Picking up Decanter Spiritus or Chitus' Plum before Introduction",
      "If Fairgraves does not appear, check The Marooned Mariner in Act 1; do not mark an unavailable dialogue."
    ],
    "a3-gravicius": [
      "Ebony Barracks · return before fighting Gravicius",
      "After entering the Ebony Barracks, return to Maramoa for Crossing the River. Read the area's Graffiti before advancing.",
      "Defeating General Gravicius before Maramoa's topic",
      "Check the NPC dialogue after entering the area, not only after killing the boss."
    ],
    "a3-piety": [
      "After Gravicius · two topics before fighting Piety",
      "Claim the Sever the Right Hand reward, then hear Maramoa: Piety and Grigor: The Lunaris Temple as their respective source conditions unlock.",
      "Defeating Piety before hearing both flagged topics",
      "Two separate NPC conversations are involved; verify each one before the fight."
    ],
    "a4-deshret": [
      "The Mines · talk to Kira before freeing Deshret",
      "After accepting An Indomitable Spirit, return to Highgate to hear Kira: Deshret before releasing Deshret in Mines Level 2.",
      "Freeing Deshret before hearing Kira",
      "The dialogue is tied to the accepted quest state, not only arriving in the Mines."
    ],
    "a4-crystal-veins": [
      "Crystal Veins · talk to Dialla before finishing both paths",
      "While in The Crystal Veins, hear Lady Dialla's Kaom and Daresso topics before finishing both boss questlines. Revisit Highgate when either Eye is delivered.",
      "Completing both Kaom and Daresso paths without checking Dialla",
      "The historic entries span several quest states; use the individual topic requirements."
    ],
    "a4-piety": [
      "After Piety · before entering The Harvest",
      "Immediately after defeating Piety, hear The Godless Three before entering The Harvest.",
      "Entering The Harvest before the Piety topic",
      "Check the topic before leaving the post-boss encounter."
    ],
    "a4-malachai": [
      "Malachai · distinct before-and-after organ states",
      "Hear Tasuni: Malachai's Apprentices before killing Malachai. In The Harvest, hear Piety: Malachai BEFORE handing in all organs, then Lady Dialla: Malachai AFTER the hand-in but BEFORE the boss.",
      "Handing in the last organ or killing Malachai before the matching topics",
      "Three different dialogue stages are involved. A single visit does not satisfy all of them."
    ],
    "a5-utula": [
      "Utula · after Casticus, before Avarius",
      "After defeating Justicar Casticus, return to Utula and hear Justicar Casticus BEFORE fighting High Templar Avarius.",
      "Defeating High Templar Avarius before the Utula follow-up",
      "Utula may become unavailable after this story transition in the historical guide."
    ],
    "a5-innocence": [
      "Chamber of Innocence · talk to Sin before exiting",
      "After defeating Innocence, speak to Sin about Innocence in the same chamber before you leave.",
      "Leaving the Chamber of Innocence after the boss fight",
      "Listen to the dialogue before moving to the next area."
    ],
    "a5-ossuary": [
      "The Ossuary · Sin after the Sign of Purity",
      "After finding the Sign of Purity, hear Sin: The Sign of Purity inside the Ossuary.",
      "Leaving the Ossuary after obtaining the Sign of Purity",
      "The dialogue requires the post-item quest state; verify it before the area exit."
    ],
    "a6-karui": [
      "Karui Fortress · multiple Eye and Tukohama gates",
      "Before Tukohama, hear Bestel: Tukohama. After obtaining Eye of Conquest, hear Tarkleigh: The Eye of Conquest BEFORE using it; after using it, hear The Karui Fortress BEFORE entering.",
      "Killing Tukohama, using the Eye, or entering the Fortress before the corresponding topic",
      "This checkpoint includes multiple independent deadlines. Do not treat the entire group as a single quest state."
    ],
    "a6-shavronne": [
      "Shavronne · talk before fighting and after defeating her",
      "Hear Bestel: Shavronne of Umbra after Tukohama but BEFORE killing Shavronne. Afterwards, check Sin: Shavronne before leaving the Prison.",
      "Fighting Shavronne before Bestel's topic, or leaving the Prison before Sin's follow-up",
      "The pre-boss and post-boss NPC topics are distinct."
    ],
    "a6-ryslatha": [
      "Ryslatha · Sin's topic before the boss",
      "After completing Essence of Umbra and receiving the appropriate quest, hear Sin: The Puppet Mistress BEFORE killing Ryslatha.",
      "Killing Ryslatha before hearing Sin: The Puppet Mistress",
      "Some historic text also warns about The Cloven One's area transition; review the related Act phase separately."
    ],
    "a6-graveyard": [
      "Ship Graveyard · Tarkleigh before Cavern of Anger",
      "After meeting Nessa at Prisoner's Gate, return for Tarkleigh: The Ship Graveyard BEFORE entering The Cavern of Anger.",
      "Entering The Cavern of Anger without Tarkleigh's topic",
      "The topic is tied to meeting Nessa and the subsequent area transition."
    ],
    "a6-flag": [
      "The Black Flag · speak to Lilly before burning it",
      "After obtaining The Black Flag, hear Lilly Roth: The Black Flag BEFORE burning the flag at The Beacon.",
      "Burning The Black Flag at The Beacon before speaking with Lilly",
      "Lilly's Beacon/Brine King follow-ups have later unlock conditions."
    ],
    "a6-brine": [
      "Brine King's Reef · hear Weylam twice before Tsoagoth",
      "On reaching The Brine King's Reef, hear Weylam Roth: The Brine King's Reef and The Brine King BEFORE killing Tsoagoth.",
      "Killing Tsoagoth without both Weylam Roth conversations",
      "These are two separate historical All Ears IDs; check both."
    ],
    "a7-den": [
      "Blocked route · speak to Helena before The Den",
      "When you discover the blocked route to the old Forest Encampment, hear Helena: The Den BEFORE entering The Den.",
      "Entering The Den before Helena: The Den",
      "Legacy notes disagree on the exact map boundary. Check the dialogue immediately on seeing the obstruction."
    ],
    "a7-maligaro": [
      "After Maligaro · hear Sin before leaving the Sanctum",
      "After killing Maligaro the Artist, hear Sin: Maligaro BEFORE leaving Maligaro's Sanctum.",
      "Leaving Maligaro's Sanctum immediately after the fight",
      "This is a historical missable warning, not a patch 3.30 reproduction."
    ],
    "a7-gruthkul": [
      "Gruthkul · return to Eramir before fighting",
      "After accepting Queen of Despair, hear Eramir: Gruthkul BEFORE killing Gruthkul.",
      "Killing Gruthkul before Eramir's topic",
      "The pre-boss topic is distinct from a separate post-boss conversation."
    ],
    "a7-fireflies": [
      "Seven Fireflies · speak to Yeena before Vaal City",
      "After collecting all seven Fireflies, return to Bridge Encampment and hear Yeena: Arakaali's Temple BEFORE meeting her in The Vaal City.",
      "Meeting Yeena in The Vaal City before the town dialogue",
      "Older notes mention The Causeway instead. Verify the town dialogue as soon as all seven Fireflies are collected."
    ],
    "a7-arakaali": [
      "After Arakaali · speak to Yeena before leaving",
      "After defeating Arakaali, hear Yeena: Arakaali inside Temple of Decay Level 2 BEFORE leaving the area.",
      "Leaving Temple of Decay Level 2 after killing Arakaali",
      "The dialogue appears in the immediate post-boss state in the historical source."
    ],
    "a8-love": [
      "Love is Dead · Hargan before, Clarissa after Tolman",
      "After starting Love is Dead, hear Hargan: The Ankh of Eternity before completing it. After killing Tolman, hear Clarissa: The Ankh of Eternity before leaving The Quay.",
      "Finishing Love is Dead before Hargan, or leaving The Quay before Clarissa",
      "The two NPC topics are unlocked at different moments; check both."
    ],
    "a8-yugul": [
      "Yugul · Sin first, then Hargan, before the boss",
      "After The Wings of Vastiri, hear Sin: Yugul, then Hargan: Yugul, both BEFORE killing Yugul.",
      "Defeating Yugul before the two town conversations",
      "The source specifies a sequence: Sin first and Hargan afterwards."
    ],
    "a9-adus": [
      "The Storm Blade · hear General Adus before Foothills",
      "After handing in The Storm Blade, hear Petarus and Vanja: General Adus BEFORE entering The Foothills.",
      "Entering The Foothills before the General Adus topic",
      "The topic unlocks after the quest turn-in, not on first entering the desert."
    ],
    "a9-garukhan": [
      "After Garukhan · speak before choosing a ruler",
      "After defeating Garukhan, hear Sin: Garukhan and Petarus and Vanja: Oyun BEFORE handing Sekhema Feather to either Irasha or Tasuni.",
      "Handing the Feather to either ruler before both topics",
      "The choice changes later dialogue. The historical tracker only maps the Irasha branch reliably."
    ],
    "a9-ember": [
      "The Dark Ember · both ingredients before the Belly",
      "Collect Basilisk Acid and Trarthan Powder, then hear Sin: The Dark Ember in the relevant Quarry/Highgate state BEFORE entering the Belly of the Beast.",
      "Entering the Belly of the Beast before the after-ingredients Sin topic",
      "There is a separate earlier Sin topic when you do NOT have Trarthan Powder. These must not be merged."
    ],
    "a9-rescue": [
      "After Depraved Trinity · Weylam before Act 10",
      "After defeating The Depraved Trinity, hear Weylam Roth: Rescue and Lilly BEFORE travelling to Act 10.",
      "Travelling to Act 10 before Weylam Roth's two topics",
      "The historical source lists two separate Weylam dialogues after the fight."
    ]
  },
  "postQuest": {
    "a10-safe-passage": [
      "After Safe Passage · return for Lilly Roth",
      "After completing Safe Passage, hear Lilly Roth: Tsoatha before progressing Map to Tsoatha."
    ],
    "a10-death-rebirth": [
      "After Death and Rebirth · hear Lilly Roth",
      "After completing Death and Rebirth, hear Lilly Roth: Innocence."
    ],
    "a10-end-hunger": [
      "After An End to Hunger · hear Lilly Roth",
      "After completing An End to Hunger, hear Lilly Roth: Kitava."
    ]
  }
};
const original=window.POE_CRITICAL_CHECKPOINTS;
if(!original||original.routeSafe!==false||lang.patchCertified!==false)throw Error("Historical critical source unavailable");
const canonical=Object.values(original.acts).flatMap(stages=>stages.map(s=>s.id));
const authored=Object.keys(lang.acts);
if(canonical.length!==39||authored.length!==canonical.length||canonical.some(id=>!lang.acts[id]))throw Error("Incomplete English critical guidance");
const canonicalPost=Object.values(original.postQuest||{}).flatMap(stages=>stages.map(s=>s.id));
if(canonicalPost.length!==3||canonicalPost.some(id=>!lang.postQuest[id]))throw Error("Incomplete English post-quest guidance");
window.POE_CRITICAL_LANGUAGE=Object.freeze(lang);
})();
