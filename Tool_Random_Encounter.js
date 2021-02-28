// Declare a function to select a random value from a dictionary
// Source: https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};
// Function to get a random integer
// Source: https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
    return parseInt((Math.floor(Math.random() * (max - min)) + min))
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
    if (number_of_dice > 1) {
        for (x = 0; x < number_of_dice; x++) {
            a = getRndInteger(1, dice_sides)
            aRolls.push(a)
        }
        // Get the sum of the array
        var total = aRolls.reduce((a, b) => a + b, 0) * multiplier
    } else {
        var total = getRndInteger(1, dice_sides)
    }
    return parseInt(total)
}
// Define the function to generate a random encounter
function tool_random_encounter(){
    clear_sail()
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
    // Get the season
    var f = document.getElementById("season")
    var season = f.options[f.selectedIndex].text
    // Check to see if nct is lower than ct
    if (parseInt(nct) >= parseInt(ct)) {
        alert("Non-combat Encounter DC MUST be lower than Combat Encounter DC")
    }
    // Log initial vars
    console.log(`INITIAL VARIABLES
                Lvl: ${lvl}
                Biome: ${biome}
                Time of Day: ${time_of_day}
                Season: ${season}`)
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
    // Roll the dice and see if it produces a random encounter or not
    var roll = getRndInteger(1, 20)
    // Non-combat Encounter
    if (roll >= ncdc && roll < cdc) {
        var len = eval(`${biome.toLowerCase()}_nc`).length
        // Roll 1dx
        var ad100 = getRndInteger(1, len)
        var encounter = eval(`${biome.toLowerCase()}_nc`)[ad100]
        console.log(encounter)
        var encounterFinal = `<h3>NON-COMBAT ENCOUNTER</h3>`
        encounterFinal += encounter + ` ${ED} ft. away.`
    }
    // Combat Encounter
    if (roll >= cdc) {
        // Roll 1d100
        var ad100 = getRndInteger(1, 100)
        // Get the data from the DB
        var encounter = eval(biome.toLowerCase()).filter(n => n.Level == lvl)
        encounter = encounter.find(x => x.d100 === ad100).Encounter
        const NewRegEx = /(?:\d+d\d*\+?\d*)/gm // Find all dice groups
        var aDice = encounter.match(NewRegEx)
        // Check to see if aDice is not empty
        if (aDice) {
            var encounterF = encounter
            // Log for debugging
            console.log("aDice")
            console.log(aDice)
            // Loop through aDice and calculate totals for each element
            for (i = 0; i < aDice.length; i++) {
                // Extract number of dice
                const RegEx = /\d+(?=d)/g
                var num_dice = RegEx.exec(aDice[i])
                // Extrect Dice Sides
                const MoreRegEx = /(?<=d)(\d*)/g
                var num_of_sides = MoreRegEx.exec(aDice[i])
                num_of_sides = num_of_sides[0]
                // Extract Modifier
                const EvenMoreRegEx = /(?<=\+)(\d*)/g
                var modifier = EvenMoreRegEx.exec(aDice[i])
                if (modifier) {modifier = parseInt(modifier[0])}
                else {modifier = 0}
                // Total
                var total = fMultiRoll(num_dice, num_of_sides, 1)
                total = total + modifier
                // Log for debugging
                console.log(`${aDice[i]}'s total is ${total}`)
                // Set up the Encounter message
                console.log(`${i}: ${encounterF}`)
                encounterF = encounterF.replace(aDice[i], total)
            }
            encounterF += ` ${ED} ft. away.`
            var encounterFinal = `<h3>COMBAT ENCOUNTER</h3><br>${encounterF}`
        } else {
            var encounterFinal = `<h3>COMBAT ENCOUNTER</h3><br>${encounter} ${ED} ft. away.`
        }
    }
    // No Random Encounter
    if (roll < ncdc && roll < cdc) {
        encounterFinal = `No Random Encounter`
    }
    // Logged Rolled Vars
    console.log(`ROLLED VARIABLES
                d100: ${ad100}
                d20: ${roll}
                Encounter: ${encounterFinal}`)
    // Build the message
    let vMessage = `${encounterFinal}`
    // Print the output
    var p = document.createElement('p')
    p.innerHTML = vMessage
    document.getElementById("output").appendChild(p)
}