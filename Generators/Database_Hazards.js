let hazardOpen_WaterType = [{"d100":"1-14","Type":"Crew Conflict"},
{"d100":"15-49","Type":"Storm"},
{"d100":"50-63","Type":"Fire"},
{"d100":"64-77","Type":"Infestation"},
{"d100":"78-91","Type":"Fog"},
{"d100":"92-100","Type":"Whirlpool"}]

let hazardOpen_WaterDC = [{"d20":"1-9","DC":10},
{"d20":"10-17","DC":15},
{"d20":"18-19","DC":20},
{"d20":"20","DC":25}]

let hazardOpen_WaterCrew_Conflict = [{"DC":10,"Description":"Minor scuffle or petty theft"},
{"DC":15,"Description":"Brawl involving several people, theft of a valuable"},
{"DC":20,"Description":"Large brawl resulting in several injuries, theft of a prized item"},
{"DC":25,"Description":"Murder, serious brawl involving most of the crew"}]

let hazardOpen_WaterStorm = [{"DC":10,"Description":"Heavy gale"},
{"DC":15,"Description":"Strong storm"},
{"DC":20,"Description":"Typical hurricane"},
{"DC":25,"Description":"Overwhelming hurricane"}]

let hazardOpen_WaterFire = [{"DC":10,"Description":"Small, contained fire, equivalent to an oil lantern"},
{"DC":15,"Description":"Dangerous flame, equivalent to a large campfire, or multiple, smaller fires ignited at once"},
{"DC":20,"Description":"Intense fire with significant chance to spread, equivalent to a bonfire"},
{"DC":25,"Description":"Sudden, pervasive flames, such as from igniting a hold filled with flammable cargo"}]

let hazardOpen_WaterFog = [{"DC":10,"Description":"Light"},
{"DC":15,"Description":"Moderate"},
{"DC":20,"Description":"Heavy"},
{"DC":25,"Description":"Very Heavy"}]

let hazardOpen_WaterFogThickness = [{"Thickness":"Light","Visibility":"30 ft."},
{"Thickness":"Moderate","Visibility":"20 ft."},
{"Thickness":"Heavy","Visibility":"10 ft."},
{"Thickness":"Very heavy","Visibility":"5 ft."}]

let hazardOpen_WaterInfestation = [{"DC":10,"Description":"Minor bug or rat infestation, common cold"},
{"DC":15,"Description":"Persistent bug or rat infestation, stomach ailment or typical flu"},
{"DC":20,"Description":"Serious bug or rat infestation, contagious flu or spoiled food"},
{"DC":25,"Description":"Overwhelming bug or rat infestation, lethal plague"}]

let hazardOpen_WaterWhirlpool = [{"DC":10,"Description":"A rank 1 whirlpool with a diameter of 4d10 ft., a velocity of 5 ft. and a DC of 10."},
{"DC":15,"Description":"A rank 2 whirlpool with a diameter of 10d10 ft. a velocity of 15 ft. and a DC of 15."},
{"DC":20,"Description":"A rank 3 whirlpool with a diameter of 20d10 ft., a velocity of 25 ft., and a DC of 20."},
{"DC":25,"Description":"A rank 4 whirlpool with a diameter of 30d10 ft., a velocity of 35 ft., and a DC of 25."}]

let hazardOpen_WaterFogMagical = [{"d6":"1-2","Type":"Ghost Fog"},
{"d6":"3-4","Type":"Shadowfell Fog"},
{"d6":"5-6","Type":"Wild Magic Fog"}]

let hazardOpen_WaterStormMagical = [{"d8":1,"Type":"Abjuration"},
{"d8":2,"Type":"Conjuration"},
{"d8":3,"Type":"Divination"},
{"d8":4,"Type":"Enchantment"},
{"d8":5,"Type":"Evocation"},
{"d8":6,"Type":"Illusion"},
{"d8":7,"Type":"Necromancy"},
{"d8":8,"Type":"Transmutation"}]

let hazardOpen_WaterWhirlpoolMagical = [{"d10":"1-3","Destination":"Underdark"},
{"d10":"4","Destination":"Elemental Plane of Water"},
{"d10":"5","Destination":"Elemental Plane of Earth"},
{"d10":"6","Destination":"Feywild"},
{"d10":"7","Destination":"Shadowfell"},
{"d10":"8","Destination":"Astral Plane"},
{"d10":"9","Destination":"Outlands"},
{"d10":"10","Destination":"Outer Plane of the DM's choice"}]

let hazardOpen_WaterCheckResultsCrew_Conflict = [{"Result":"Total Success","Effect":"The crew's quality score increases by 1 for 1d4 days and the hazard ends."},
{"Result":"Success","Effect":"The hazard ends."},
{"Result":"Failure","Effect":"The crew's quality score decreases by 1."},
{"Result":"Total Failure","Effect":"The crew's quality score decreases by 1, and the crew immediately mutinies."}]

let hazardOpen_WaterCheckResultsFog = [{"Result":"Total Success","Effect":"The fog has no effect on navigation, and the crew's quality increases by 1 for 1d3 days."},
{"Result":"Success","Effect":"The fog has no effect on navigation."},
{"Result":"Failure","Effect":"The fog slows the ship, reducing its travel pace and speed by half for the day."},
{"Result":"Total Failure","Effect":"The fog slows the ship and disorients the crew, reducing the vessel's travel pace and speed by half for the day and causing it to move in a random direction."}]

let hazardOpen_WaterCheckResultsInfestation = [{"Result":"Total Success","Effect":"The crew's quality score increases by 1 for 1d4 days, and the hazard ends."},
{"Result":"Success","Effect":"The hazard ends."},
{"Result":"Failure","Effect":"The crew's quality score decreases by 1."},
{"Result":"Total Failure","Effect":"The crew's quality score decreases by 1, and the distraction caused by the crisis forces the ship to move at half speed that day."}]

let hazardOpen_WaterCheckResultsWhirlpool = [{"Result":"Total Success","Effect":"The vessel uses the whirlpool to its advantage and increases its speed by 20 ft. during its current turn."},
{"Result":"Success","Effect":"The vessel can move normally on its turn."},
{"Result":"Failure","Effect":"The vessel is immediately moved toward the vortex's center at the whirlpool's velocity, and the vessel is restrained by the whirlpool until the start of its next turn."},
{"Result":"Total Failure","Effect":"As a failure. Additionally, if the vessel is in the whirlpool at the start of its next turn, all checks the vessel makes to determine the whirlpool's effects are made with disadvantage on that turn."}]

let hazardOpen_WaterCheckResultsStorm = [{"Result":"Total Success","Effect":"The ship survives unscathed. The crew's quality score increases by 1 for 1d4 days."},
{"Result":"Success","Effect":"The ship survives unscathed."},
{"Result":"Failure","Effect":"The ship's components each take 4d10 bludgeoning damage. The crew's quality score decreases by 1. The ship struggles, moving at half speed that day."},
{"Result":"Total Failure","Effect":"The ship's components each take 10d10 bludgeoning damage. The crew's quality score decreases by 2, and 10 percent of the crew is washed overboard and lost. The ship is blown off course and struggles to recover its bearings, moving in a random direction."}]

let hazardOpen_WaterCheckResultsFire = [{"Result":"Total Success","Effect":"The fire is extinguished with nothing beyond cosmetic damage."},
{"Result":"Success","Effect":"The fire is extinguished, but the hull and 1d3 other random components take 6d6 fire damage."},
{"Result":"Failure","Effect":"The hull and 1d3 other random components take 6d6 fire damage, and the fire continues. Make another set of checks."},
{"Result":"Total Failure","Effect":"The crew's quality score decreases by 1 due to injuries, while the hull and 1d3 other random components take 6d6 fire damage. The fire continues. Make another set of checks."}]

let hazardOpen_WaterCheckResultsFireHTML = `<table class="styled-table">
<thead><tr class="tableizer-firstrow"><th colspan="2">Fire Check Results</th></tr></thead><tbody>
 <tr><td style="width: 100px">Result</td><td style="width: 600px">Effect</td></tr>
 <tr><td>Total Success</td><td style="width: 600px">The fire is extinguished with nothing beyond cosmetic damage.</td></tr>
 <tr><td>Success</td><td style="width: 600px">The fire is extinguished, but the hull and 1d3 other random components take 6d6 fire damage.</td></tr>
 <tr><td>Failure</td><td style="width: 600px">The hull and 1d3 other random components take 6d6 fire damage, and the fire continues. Make another set of checks.</td></tr>
 <tr><td>Total Failure</td><td style="width: 600px">The crew's quality score decreases by 1 due to injuries, while the hull and 1d3 other random components take 6d6 fire damage. The fire continues. Make another set of checks.</td></tr>
</tbody></table>`

let hazardOpen_WaterCheckResultsCrew_ConflictHTML = `<table class="styled-table">
<thead><tr class="tableizer-firstrow"><th colspan="2">Crew Conflict Check Results</th></tr></thead><tbody>
 <tr><td style="width: 100px">Result</td><td style="width: 600px">Effect</td></tr>
 <tr><td>Total Success</td><td style="width: 600px">The crew's quality score increases by 1 for 1d4 days and the hazard ends.</td></tr>
 <tr><td>Success</td><td style="width: 600px">The hazard ends.</td></tr>
 <tr><td>Failure</td><td style="width: 600px">The crew's quality score decreases by 1.</td></tr>
 <tr><td>Total Failure</td><td style="width: 600px">The crew's quality score decreases by 1, and the crew immediately mutinies.</td></tr>
</tbody></table>`

let hazardOpen_WaterCheckResultsStormHTML = `<table class="styled-table">
<thead><tr class="tableizer-firstrow"><th colspan="2">Storm Check Results</th></tr></thead><tbody>
 <tr><td style="width: 100px">Result</td><td style="width: 600px">Effect</td></tr>
 <tr><td>Total Success</td><td style="width: 600px">The ship survives unscathed. The crew's quality score increases by 1 for 1d4 days.</td></tr>
 <tr><td>Success</td><td style="width: 600px">The ship survives unscathed.</td></tr>
 <tr><td>Failure</td><td style="width: 600px">The ship's components each take 4d10 bludgeoning damage. The crew's quality score decreases by 1. The ship struggles, moving at half speed that day.</td></tr>
 <tr><td>Total Failure</td><td style="width: 600px">The ship's components each take 10d10 bludgeoning damage. The crew's quality score decreases by 2, and 10 percent of the crew is washed overboard and lost. The ship is blown off course and struggles to recover its bearings, moving in a random direction.</td></tr>
</tbody></table>`

let hazardOpen_WaterCheckResultsWhirlpoolHTML = `<table class="styled-table">
<thead><tr class="tableizer-firstrow"><th colspan="2">Whirlpool Check Results</th></tr></thead><tbody>
 <tr><td style="width: 100px">Result</td><td style="width: 600px">Effect</td></tr>
 <tr><td>Total Success</td><td style="width: 600px">The vessel uses the whirlpool to its advantage and increases its speed by 20 ft. during its current turn.</td></tr>
 <tr><td>Success</td><td style="width: 600px">The vessel can move normally on its turn.</td></tr>
 <tr><td>Failure</td><td style="width: 600px">The vessel is immediately moved toward the vortex's center at the whirlpool's velocity, and the vessel is restrained by the whirlpool until the start of its next turn.</td></tr>
 <tr><td>Total Failure</td><td style="width: 600px">As a failure. Additionally, if the vessel is in the whirlpool at the start of its next turn, all checks the vessel makes to determine the whirlpool's effects are made with disadvantage on that turn.</td></tr>
</tbody></table>`

let hazardOpen_WaterCheckResultsInfestationHTML = `<table class="styled-table">
<thead><tr class="tableizer-firstrow"><th colspan="2">Infestation Check Results</th></tr></thead><tbody>
 <tr><td style="width: 100px">Result</td><td style="width: 600px">Effect</td></tr>
 <tr><td>Total Success</td><td style="width: 600px">The crew's quality score increases by 1 for 1d4 days, and the hazard ends.</td></tr>
 <tr><td>Success</td><td style="width: 600px">The hazard ends.</td></tr>
 <tr><td>Failure</td><td style="width: 600px">The crew's quality score decreases by 1.</td></tr>
 <tr><td>Total Failure</td><td style="width: 600px">The crew's quality score decreases by 1, and the distraction caused by the crisis forces the ship to move at half speed that day.</td></tr>
</tbody></table>`

let hazardOpen_WaterCheckResultsFogHTML = `<table class="styled-table">
<thead><tr class="tableizer-firstrow"><th colspan="2">Fog Check Results</th></tr></thead><tbody>
 <tr><td style="width: 100px">Result</td><td style="width: 600px">Effect</td></tr>
 <tr><td>Total Success</td><td style="width: 600px">The fog has no effect on navigation, and the crew's quality increases by 1 for 1d3 days.</td></tr>
 <tr><td>Success</td><td style="width: 600px">The fog has no effect on navigation.</td></tr>
 <tr><td>Failure</td><td style="width: 600px">The fog slows the ship, reducing its travel pace and speed by half for the day.</td></tr>
 <tr><td>Total Failure</td><td style="width: 600px">The fog slows the ship and disorients the crew, reducing the vessel's travel pace and speed by half for the day and causing it to move in a random direction.</td></tr>
</tbody></table>`