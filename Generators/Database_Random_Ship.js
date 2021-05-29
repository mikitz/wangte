let ship_purpose = [{"d100":"01-17","Purpose":"Cargo"},
{"d100":"18-34","Purpose":"Passenger"},
{"d100":"35-51","Purpose":"Fishing"},
{"d100":"52-68","Purpose":"Military"},
{"d100":"69-85","Purpose":"Piracy"},
{"d100":"86-95","Purpose":"Mercenary"},
{"d100":"96-100","Purpose":"Ghost"}]

let ship_type = [{"d200":"01-18","Ship":"Rowboat"},
{"d200":"19-50","Ship":"Keelboat"},
{"d200":"51-76","Ship":"Longship"},
{"d200":"77-120","Ship":"Sailing ship"},
{"d200":"121-158","Ship":"Galley"},
{"d200":"159-198","Ship":"Warship"},
{"d200":"199-199","Ship":"Nautiloid"},
{"d200":"200-200","Ship":"Spelljammer"}]

let ship_crew = [{"Ship":"Rowboat","Crew":2,"Passengers":2},
{"Ship":"Keelboat","Crew":3,"Passengers":4},
{"Ship":"Longship","Crew":40,"Passengers":100},
{"Ship":"Sailing ship","Crew":30,"Passengers":20},
{"Ship":"Galley","Crew":80,"Passengers":40},
{"Ship":"Warship","Crew":40,"Passengers":60},
{"Ship":"Nautiloid","Crew":10,"Passengers":35},
{"Ship":"Spelljammer","Crew":10,"Passengers":60}]

let ship_adjective = [{"d20":1,"Adjective":"Beautiful"},
{"d20":2,"Adjective":"Bilious"},
{"d20":3,"Adjective":"Bold"},
{"d20":4,"Adjective":"Cold"},
{"d20":5,"Adjective":"Dandy"},
{"d20":6,"Adjective":"Dawn"},
{"d20":7,"Adjective":"Drunken"},
{"d20":8,"Adjective":"Fiery"},
{"d20":9,"Adjective":"Furious"},
{"d20":10,"Adjective":"Grinning"},
{"d20":11,"Adjective":"Intrepid"},
{"d20":12,"Adjective":"Jolly"},
{"d20":13,"Adjective":"Misty"},
{"d20":14,"Adjective":"Rambunctious"},
{"d20":15,"Adjective":"Red"},
{"d20":16,"Adjective":"Royal"},
{"d20":17,"Adjective":"Salty"},
{"d20":18,"Adjective":"Sinful"},
{"d20":19,"Adjective":"Twilight"},
{"d20":20,"Adjective":"Zealous"}]

let ship_noun = [{"d20":1,"Noun":"Adventure"},
{"d20":2,"Noun":"Barnacle"},
{"d20":3,"Noun":"Brawler"},
{"d20":4,"Noun":"Devil"},
{"d20":5,"Noun":"Dragon"},
{"d20":6,"Noun":"Gem"},
{"d20":7,"Noun":"Flower"},
{"d20":8,"Noun":"Jester"},
{"d20":9,"Noun":"Kraken"},
{"d20":10,"Noun":"Leviathan"},
{"d20":11,"Noun":"Mermaid"},
{"d20":12,"Noun":"Prince"},
{"d20":13,"Noun":"Princess"},
{"d20":14,"Noun":"Revenge"},
{"d20":15,"Noun":"Saber"},
{"d20":16,"Noun":"Shark"},
{"d20":17,"Noun":"Tide"},
{"d20":18,"Noun":"Treasure"},
{"d20":19,"Noun":"Victory"},
{"d20":20,"Noun":"Wanderer"}]

let ship_attitude = [{"d6":"1-2","Attitude":"Friendly"},
{"d6":"3-4","Attitude":"Neutral"},
{"d6":"5-6","Attitude":"Hostile"}]

let ship_friendly = [{"d100":"01-05","Race":"Dragonborn"},
{"d100":"06-10","Race":"Dwarves"},
{"d100":"11-30","Race":"Elves"},
{"d100":"31-40","Race":"Gnomes"},
{"d100":"41-50","Race":"Tieflings"},
{"d100":"51-60","Race":"Halflings"},
{"d100":"61-100","Race":"Humans"}]

let ship_neutral = [{"d100":"01-05","Race":"Dragonborn"},
{"d100":"06-10","Race":"Dwarves"},
{"d100":"11-30","Race":"Lizardfolk"},
{"d100":"31-40","Race":"Hobgoblins"},
{"d100":"41-50","Race":"Orcs"},
{"d100":"51-60","Race":"Halflings"},
{"d100":"61-100","Race":"Humans"}]

let ship_hostile = [{"d100":"01-05","Race":"Frost giants"},
{"d100":"06-10","Race":"Kobolds"},
{"d100":"11-30","Race":"Orcs"},
{"d100":"31-40","Race":"Hobgoblins"},
{"d100":"41-50","Race":"Undead"},
{"d100":"51-60","Race":"Gnolls"},
{"d100":"61-100","Race":"Humans"}]

let ship_disposition = [{"d10":"1","Disposition":"Diseased"},
{"d10":"2","Disposition":"Emergency"},
{"d10":"3","Disposition":"Help with purpose"},
{"d10":"4","Disposition":"Mutiny"},
{"d10":"5","Disposition":"Trading"},
{"d10":"6-10","Disposition":"No special disposition"}]

let ship_emergency = [{"d4":1,"Emergency":"The ship's crew is lost."},
{"d4":2,"Emergency":"The ship is damaged and can't be steered as it drifts with the current."},
{"d4":3,"Emergency":"The ship is stuck on a sandbar."},
{"d4":4,"Emergency":"The ship is sinking."}]

let blue_hole = [{"d10":1,"Creatures or Treasure":"2d10 sahuagin"},
{"d10":2,"Creatures or Treasure":"1d1 giant octopus"},
{"d10":3,"Creatures or Treasure":"1d4 + 1 chuuls"},
{"d10":4,"Creatures or Treasure":"1 sea hag and 2d4 merrow"},
{"d10":5,"Creatures or Treasure":"1d1 plesiosaurus"},
{"d10":6,"Creatures or Treasure":"1d4 swarms of quippers"},
{"d10":7,"Creatures or Treasure":"2d4 reef sharks"},
{"d10":8,"Creatures or Treasure":"1d1 giant shark"},
{"d10":9,"Creatures or Treasure":"1d6 items from <a href='https://5e.tools/tables.html#magic%20item%20table%20a_dmg' rel='noopener noreferrer' target='_blank'>Magic Item Table A</a> in Chapter 7"},
{"d10":10,"Creatures or Treasure":"Treasure rolled on the <a href='https://5e.tools/tables.html#treasure%20hoard%3a%20challenge%200%e2%80%944_dmg' rel='noopener noreferrer' target='_blank'>Treasure Hoard: Challenge 0–4</a> table in Chapter 7"}]

let tableShipwreck = [{"d10":1,"Creatures or Treasure":"1 sahuagin priestess and 2d10 sahuagin"},
{"d10":2,"Creatures or Treasure":"1 young bronze dragon"},
{"d10":3,"Creatures or Treasure":"4d10 giant crabs"},
{"d10":4,"Creatures or Treasure":"3d10 giant sea horses"},
{"d10":5,"Creatures or Treasure":"1d4 hunter sharks"},
{"d10":6,"Creatures or Treasure":"1 giant octopus"},
{"d10":7,"Creatures or Treasure":"2d6 merrow"},
{"d10":8,"Creatures or Treasure":"2d10 merfolk"},
{"d10":9,"Creatures or Treasure":"1d6 items from Magic Item Table B in chapter 7, "},
{"d10":10,"Creatures or Treasure":"Treasure rolled on the Treasure Hoard: Challenge 5–10 table in chapter 7, "}]