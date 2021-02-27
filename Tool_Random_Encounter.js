// Declare a function to select a random value from a dictionary
// Source: https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};
// Function to get a random integer
// Source: https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
// Clears "output"
function clear_sail() {
    document.getElementById('output').innerHTML = ""
}
// Define a dice function to roll multiple dice
function fMultiRoll(number_of_dice, dice_sides, multiplier) {
    // Define an empty array to store the rolls
    aRolls = []
    // Loop through all the dice and return random integers
    for (i = 1; i < number_of_dice; i++) {
        a = getRndInteger(1, dice_sides)
        aRolls.push(a)
    }
    // Get the sum of the array
    var total = aRolls.reduce((a, b) => a + b, 0) * multiplier
    return total
}
// Define the function to generate a random encounter
function tool_random_encounter(){
    // Log a seperator
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    // Get default adjustments
    var a = document.getElementById("combat_threshold")
    var nct = a.options[a.selectedIndex].text
    var b = document.getElementById("non-combat_threshold")
    var ct = b.options[b.selectedIndex].text
    // Get level range
    var c = document.getElementById("lvl-range")
    var lvl = c.options[c.selectedIndex].text
    // Get biome
    var d = document.getElementById("biome")
    var biome = d.options[d.selectedIndex].text
    // Get time of day
    var e = document.getElementById("time_of_day")
    var time_of_day = e.options[e.selectedIndex].text
    // Check to see if nct is lower than ct
    if (parseInt(nct) >= parseInt(ct)) {
        alert("Non-combat Encounter DC MUST be lower than Combat Encounter DC")
    }
    // Log initial vars
    console.log(`INITIAL VARIABLES
                Level Range: ${lvl}
                Biome: ${biome}
                Time of Day: ${time_of_day}`)
    // If statement to check whether defaults persist
    if (nct === "N/A" && ct === "N/A") {
        // Pull both DCs from the database based on time of day
        if (time_of_day === "Day") {
            var ncdc = oaData.find(i => i.Biome == biome).Day_NC_DC
            var cdc = oaData.find(i => i.Biome == biome).Day_C_DC
        } else {
            var ncdc = oaData.find(i => i.Biome == biome).Night_NC_DC
            var cdc = oaData.find(i => i.Biome == biome).Night_C_DC
        }
    } else if (nct === "N/A") {
        // Set Non-combat DC as the user's input
        var ncdc = parseInt(nct)
        // Pull Combat DC from database based on time of day
        if (time_of_day === "Day") {
            var cdc = oaData.find(i => i.Biome == biome).Day_C_DC
        } else {
            var cdc = oaData.find(i => i.Biome == biome).Night_C_DC
        }
    } else if (ct === "N/A") {
        // Set Combat DC as user's input
        var cdc = parseInt(ct)
        // Pull both DCs from the database based on time of day
        if (time_of_day === "Day") {
            var ncdc = oaData.find(i => i.Biome == biome).Day_NC_DC
        } else {
            var ncdc = oaData.find(i => i.Biome == biome).Night_NC_DC
        }
    } else {
        // Use user inputs as the DCs
        var cdc = parseInt(ct)
        var ncdc = parseInt(nct)
    }
    // Log the pulled data
    console.log(`PULLED DATA
                Non-combat DC: ${ncdc}
                Combat DC: ${cdc}`)
    // Roll the dice and see if it produces a random encounter or not
    var roll = getRndInteger(1, 20)
    // Check the roll against the non-combat DC
    if (roll >= ncdc && roll < cdc) {
        var NCE = true
    } else {
        var NCE = false
    } 
    // Check the roll against the combat DC
    if (roll >= cdc) {
        var CE = true 
    } else {
        var CE = false
    }
    // Roll 1d100
    var d100 = getRndInteger(1, 100)
    // Log the Checked vars
    console.log(`CHECKED VARIABLES
                1d100: ${d100}
                Roll: ${roll}
                Combat: ${CE}
                Non-combat: ${NCE}`)
    // Get some random encounters
    if (CE === true) {
        var first_filter = eval(biome.toLowerCase()).filter(i => i.Level == lvl)
        console.log(first_filter)
        var second_filter = first_filter.find(i => i.d100 = d100).Encounter
        console.log(second_filter)
    }
    if (NCE === true) {

    }
    // Determine Encounter Distance
    // Pull number of dice from the database
    var dice = oaEncounterDistance.find(i => i.biome == biome).number_of_dice
    // Pull the number of sides from the database
    var sides = oaEncounterDistance.find(i => i.biome == biome).number_of_sides
    // Pull the multiplier from the database
    var mult = oaEncounterDistance.find(i => i.biome == biome).multiplier
    // Roll the distance
    var ED = fMultiRoll(dice, sides, mult)
    // Log the Encounter Distnace Variables
    console.log(`ENCOUNTER DISTANCE
                Dice #: ${dice}
                Sides: ${sides}
                Multiplier: ${mult}
                Distance: ${ED} ft.`)
}