let islandCounts = [{"Theme":"Alien","Count":4},
{"Theme":"Cursed","Count":3},
{"Theme":"Hostile","Count":4},
{"Theme":"Sanctum","Count":4},
{"Theme":"Welcoming","Count":3},
{"Theme":"Wild","Count":3}]

let islandTheme = [{"d6":1,"Theme":"Alien"},
{"d6":2,"Theme":"Cursed"},
{"d6":3,"Theme":"Hostile"},
{"d6":4,"Theme":"Sanctum"},
{"d6":5,"Theme":"Welcoming"},
{"d6":6,"Theme":"Wild"}]

let islandDescription = [{"Theme":"Alien","Description":"Alien islands are inhabited by isolated creatures with ways of life beyond most beings' comprehensions. Everything about the culture of the island, from architecture to food, is unfamiliar and unsettling to outsiders. At your discretion the inhabitants of the island might speak, read, and write a language all their own."},
{"Theme":"Cursed","Description":"Cursed islands are steeped in dark magic from a ritual cast by necromancers, hag covens, evil spellcasters, foul deities, or worse. The island might still hold some hint as to why it was cursed, or all trace of those who brought down the affliction might have been scoured away."},
{"Theme":"Hostile","Description":"Hostile islands contain creatures that want to harm the characters. These creatures fill their islands with traps and attack outsiders out of hunger, boredom, or fear."},
{"Theme":"Sanctum","Description":"The inhabitants of sanctum islands use the seas to protect themselves and their property, or they simply enjoy the isolation a remote island affords. The creatures on sanctum islands usually live in permanent structures like abbeys, fortresses, libraries, or towers."},
{"Theme":"Welcoming","Description":"Welcoming islands host creatures that are friendly toward the characters. These creatures provide what aid they can and might even put themselves in harm's way for the characters if a friendship is established."},
{"Theme":"Wild","Description":"Nature reigns on wild islands. The creatures on the island respond to the ebb and flow of the natural world rather than trying to tame the environment."}]

let islandAlienInhabitants = [{"d6":"1","Inhabitants":"1d6 berserkers and 5d10 tribal warriors"},
{"d6":"2-3","Inhabitants":"1d6 cult fanatics and 5d10 cultists"},
{"d6":"4","Inhabitants":"1d6 lizardfolk shamans and 5d10 lizardfolk"},
{"d6":"5","Inhabitants":"1d6 bullywug croakers (see appendix C) and 5d10 bullywugs"},
{"d6":"6","Inhabitants":"1d8 locathah hunters (see appendix C) and 3d10 locathah (see appendix C)"}]

let islandAlienHooks = [{"d4":1,"Story Hook":"The leader has a spell scroll of true resurrection among its belongings."},
{"d4":2,"Story Hook":"The island contains a piece of a tablet with instructions on how to open a portal to the Far Realm."},
{"d4":3,"Story Hook":"The island's leader knows how to end a planar disease infecting a humanoid settlement."},
{"d4":4,"Story Hook":"A mage with information the characters need hides among the ranks of the inhabitants, learning their ways."}]

let islandAlienReaction = [{"d6":1,"Reaction":"The inhabitants try to force the characters to serve their leader."},
{"d6":2,"Reaction":"The inhabitants demand the characters give their leader an item worth 10d10 × 100 gp."},
{"d6":3,"Reaction":"The inhabitants wish to devour the characters."},
{"d6":4,"Reaction":"Some inhabitants are planning to rise up against their leader and ask the characters for help."},
{"d6":5,"Reaction":"The inhabitants see the characters as no more than insects and refuse to interact with them unless forced."},
{"d6":6,"Reaction":"The inhabitants see the characters as gods and can be convinced to worship them."}]

let islandAlienLeader = [{"d4":1,"Leader":"aboleth"},
{"d4":2,"Leader":"beholder"},
{"d4":3,"Leader":"death slaad"},
{"d4":4,"Leader":"kraken"}]

let islandCursedInhabitants = [{"d6":1,"Inhabitants":"5d10 specters"},
{"d6":2,"Inhabitants":"10d10 zombies"},
{"d6":3,"Inhabitants":"A coven of 3 sea hags and 1d4 flameskulls"},
{"d6":4,"Inhabitants":"1 medusa and 3d10 skeletons"},
{"d6":5,"Inhabitants":"1 vampire and 2d6 vampire spawn"},
{"d6":6,"Inhabitants":"1 demilich and 2d10 wraiths"}]

let islandCursedHooks = [{"d4":1,"Story Hook":"The island contains rare spell components the characters need."},
{"d4":2,"Story Hook":"Pirates buried treasure worth 5d6 × 1,000 gp on the island."},
{"d4":3,"Story Hook":"A keelboat carrying 1d6 commoners crashed on the island. The commoners are struggling to survive."},
{"d4":4,"Story Hook":"The ghost of a character's loved one is trapped on the island."}]

let islandCursedCurse = [{"d6":1,"Curse":"When a creature dies on the island, its spirit rises as a specter 1d4 hours after death. The specter is obsessed with killing its former friends."},
{"d6":2,"Curse":"Creatures that aren't inhabitants of the island must succeed on a Constitution saving throw at the end of each hour they spend on the island. If they fail, they gain one level of exhaustion. The DC for this check equals 10 + the number of hours spent on the island."},
{"d6":3,"Curse":"Each day at dawn, the island conjures 2d10 magma mephits, which are hostile toward creatures that aren't inhabitants of the island."},
{"d6":4,"Curse":"Each day at dawn, the island conjures 2d10 magma mephits, which are hostile toward creatures that aren't inhabitants of the island."},
{"d6":5,"Curse":"Creatures must succeed on a DC 10 Constitution saving throw at the end of each hour they spend on the island. If they fail, they gain a 1-inch scar in a random place on their body. Only a remove curse spell or similar magic removes the scar."},
{"d6":6,"Curse":"When a creature that isn't an inhabitant of the island completes a long rest there, it must succeed on a DC 15 Wisdom saving throw or gain a random form of long-term madness (see 'Madness' in chapter 8, 'Running the Game,' of the Dungeon Master's Guide)."}]

let islandHostileInhabitants = [{"d6":1,"Inhabitants":"3d10 winged kobolds and 10d10 kobolds"},
{"d6":2,"Inhabitants":"1 goblin boss and 8d10 goblins"},
{"d6":3,"Inhabitants":"1d6 berserkers and 5d10 tribal warriors"},
{"d6":4,"Inhabitants":"1 orc chieftain, 2d10 orogs, and 5d10 orcs"},
{"d6":5,"Inhabitants":"4d10 ogres"},
{"d6":6,"Inhabitants":"3d10 trolls"}]

let islandHostileHooks = [{"d4":1,"Story Hook":"The island's leader killed an NPC the characters admired."},
{"d4":2,"Story Hook":"The island's leader has a headband of intellect."},
{"d4":3,"Story Hook":"The characters are challenged by rivals to survive a night on the island."},
{"d4":4,"Story Hook":"An eloquent invitation from the island's leader invites the characters for a hunt."}]

let islandHostileLeader = [{"d6":1,"Leader":"cloud giant"},
{"d6":2,"Leader":"hill giant"},
{"d6":3,"Leader":"oni"},
{"d6":4,"Leader":"spirit naga"},
{"d6":5,"Leader":"werewolf"},
{"d6":6,"Leader":"A chromatic dragon of the DM's choice"}]

let islandHostileMotive = [{"d4":1,"Motivation":"The leader wants to commandeer a boat to conquer other islands."},
{"d4":2,"Motivation":"The leader takes all treasure gained by its followers, growing rich off their brutality."},
{"d4":3,"Motivation":"The leader needs humanoid remains to perform a ritual with a dark purpose."},
{"d4":4,"Motivation":"The leader never ages because it consumes the souls of creatures its followers kill."}]

let islandSanctumInhabitants = [{"d6":1,"Inhabitants":"5d10 guards and 10d10 commoners"},
{"d6":2,"Inhabitants":"1 pirate captain (see appendix C); 1 pirate bosun (see appendix C); 2d4 pirate deck wizards (see appendix C); and 8d10 bandits"},
{"d6":3,"Inhabitants":"1d6 flesh golems; 1d4 priests; and 2d10 acolytes"},
{"d6":4,"Inhabitants":"2d4 veterans; 2d10 scouts; 4d10 guards"},
{"d6":5,"Inhabitants":"1d4 stone golems; 1d4 mages; and 3d10 guards"},
{"d6":6,"Inhabitants":"1 shield guardian; 2d4 knights; 2d6 priests; and 6d10 commoners"}]

let islandSanctumHooks = [{"d4":1,"Story Hook":"A spy among the inhabitants needs extraction from the island."},
{"d4":2,"Story Hook":"The island's leader misses an item (such as a flower or a particular food) that can't be found on the island and offers a reward for the item."},
{"d4":3,"Story Hook":"The island asks for aid against an adult green dragon that regularly raids it."},
{"d4":4,"Story Hook":"The island has an armory full of legendary adamantine and silvered weapons."}]

let islandSanctumReaction = [{"d6":1,"Reaction":"The characters are allowed on the island, but the inhabitants don't allow the characters into any buildings."},
{"d6":2,"Reaction":"The inhabitants like the characters and give them advice to help them impress the island's leader."},
{"d6":3,"Reaction":"Some unhappy inhabitants believe the characters are their ticket off the island. They flirt, lie, bribe, and beg to be taken away."},
{"d6":4,"Reaction":"The inhabitants attempt to convince the characters to use the island as a base of operations and contribute to the community."},
{"d6":5,"Reaction":"The inhabitants hunger for information about the outside world and allow the characters to use news as currency."},
{"d6":6,"Reaction":"The inhabitants don't trust the characters. All Charisma checks made to influence the inhabitants have disadvantage."}]

let islandSanctumLeader = [{"d6":1,"Leader":"archmage"},
{"d6":2,"Leader":"lich"},
{"d6":3,"Leader":"night hag"},
{"d6":4,"Leader":"noble"},
{"d6":5,"Leader":"rakshasa"},
{"d6":6,"Leader":"werebear"}]

let islandWelcomingInhabitants = [{"d6":1,"Inhabitants":"5d10 aarakocra"},
{"d6":2,"Inhabitants":"8d8 pixies and 8d8 sprites"},
{"d6":3,"Inhabitants":"1d6 lizardfolk shamans and 5d10 lizardfolk"},
{"d6":4,"Inhabitants":"1d6 druids and 5d10 tribal warriors"},
{"d6":5,"Inhabitants":"3d10 centaurs"},
{"d6":6,"Inhabitants":"3d10 scouts and 5d10 commoners"}]

let islandWelcomingHooks = [{"d4":1,"Story Hook":"The island is a colony or outpost sponsored by a nation or wealthy noble the characters are associated with."},
{"d4":2,"Story Hook":"The island's residents swear a character looks like a beloved past leader. Melancholy, they treat the characters as they would their lost hero."},
{"d4":3,"Story Hook":"The island never gets visitors. The characters' arrival is cause for a peculiar but earnest celebration."},
{"d4":4,"Story Hook":"The island's leader is a long-lost relative or friend of a character's family."}]

let islandWelcomingLeader = [{"d6":1,"Leader":"bard (see appendix C)"},
{"d6":2,"Leader":"druid"},
{"d6":3,"Leader":"guardian naga"},
{"d6":4,"Leader":"treant"},
{"d6":5,"Leader":"unicorn"},
{"d6":6,"Leader":"A metallic dragon of the DM's choice"}]

let islandWildInhabitants = [{"d20":1,"Encounter":"2d8 baboons"},
{"d20":2,"Encounter":"1d4 brown bears"},
{"d20":3,"Encounter":"1 owlbear"},
{"d20":4,"Encounter":"2d6 giant toads"},
{"d20":5,"Encounter":"2d10 giant wasps"},
{"d20":6,"Encounter":"2d4 giant spiders"},
{"d20":7,"Encounter":"4d4 pixies or 4d4 sprites"},
{"d20":8,"Encounter":"1d4 blink dogs"},
{"d20":9,"Encounter":"1 pirate captain (see appendix C) and 3d10 bandits digging up buried treasure"},
{"d20":10,"Encounter":"3d6 tribal warriors"},
{"d20":11,"Encounter":"2d4 druids"},
{"d20":12,"Encounter":"1d6 dryads"},
{"d20":13,"Encounter":"2d4 centaurs"},
{"d20":14,"Encounter":"1 ankheg"},
{"d20":15,"Encounter":"1d10 giant boars"},
{"d20":16,"Encounter":"2d6 giant eagles"},
{"d20":17,"Encounter":"1d4 giant apes"},
{"d20":18,"Encounter":"1d4 treants"},
{"d20":19,"Encounter":"1 roc"},
{"d20":20,"Encounter":"1d4 veteran explorers"}]

let islandWildHooks = [{"d4":1,"Story Hook":"The island hides a spring that restores life to anyone washed in it, as per the raise dead spell. A creature can only benefit from the spring once."},
{"d4":2,"Story Hook":"A djinni recluse dwells on the island and grants favors."},
{"d4":3,"Story Hook":"Pixies beg the characters to help them oust a group of 3d10 trophy hunters (scouts) from the island."},
{"d4":4,"Story Hook":"The island holds the tomb of an archdruid, which contains a portal to the Feywild."}]

let islandWildFeature = [{"d6":1,"Feature":"A waterfall flows up a mountainside."},
{"d6":2,"Feature":"The island slowly rotates clockwise."},
{"d6":3,"Feature":"Geysers shoot bright light into the sky at night."},
{"d6":4,"Feature":"Razorvine (see "},
{"d6":5,"Feature":"Rain on the island creates a beautiful melody."},
{"d6":6,"Feature":"All beasts on the island have truesight out to a range of 120 ft."}]