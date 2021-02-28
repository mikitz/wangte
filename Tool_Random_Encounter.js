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
        for (i = 1; i < number_of_dice; i++) {
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
                Lvl: ${lvl}
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
        var encounterFinal = 'No Random Encounter'
    }
    // Log the Checked vars
    console.log(`CHECKED VARIABLES
                Combat: ${CE}
                Non-combat: ${NCE}`)
    // Roll 1d100
    var ad100 = getRndInteger(1, 100)
    // Get some random encounters
    if (CE === true) {
        var encounter = eval(biome.toLowerCase()).filter(i => i.Level == lvl)
        encounter = encounter.find(i => i.d100 === ad100).Encounter
        const NewRegEx = /(\d+d\d+(\+)?)\w+/g // Find ndx+y (E.G. 1d4+3)
        var ndxyDice = NewRegEx.exec(encounter)
        const NewRegEx2 = /(\d+d\d)/g // Find xdx (E.G. 1d6)
        var ndxDice = NewRegEx2.exec(encounter)
        if (ndxyDice) {
            ndxyDice = ndxyDice[0]
            // Extract number of dice
            const RegEx = /\d+(?=d)/g
            var num_dice = RegEx.exec(ndxyDice)
            // Extrect Dice Sides
            const MoreRegEx = /(?<=d)(\d*)/g
            var num_of_sides = MoreRegEx.exec(ndxyDice)
            num_of_sides = num_of_sides[0]
            // Extract Modifier
            const EvenMoreRegEx = /(?<=\+)(\d*)/g
            var modifier = EvenMoreRegEx.exec(ndxyDice)
            modifier = parseInt(modifier[0])
            // Roll the dice
            var roll = fMultiRoll(num_dice, num_of_sides, 1)
            total = parseInt(roll + modifier)
            // Set up the Encounter message
            encounterFinal = encounter.replace(ndxyDice, total)
            // Log It
            console.log(`nDx+y STUFF
                        Encounter: ${encounter}
                        nDxy Dice: ${ndxyDice}
                        Dice #: ${num_dice}
                        Sides: ${num_of_sides}
                        Mod.: ${modifier}
                        Roll: ${roll}
                        Total: ${total}`)
        } else if (ndxDice) {
            ndxDice = ndxDice[0]
            // Extract number of dice
            const RegEx = /\d+(?=d)/g
            var num_dice = RegEx.exec(ndxDice)
            // Extrect Dice Sides
            const MoreRegEx = /(?<=d)(\d*)/g
            var num_of_sides = MoreRegEx.exec(ndxDice)
            num_of_sides = num_of_sides[0]
            // Roll the dice
            var total = fMultiRoll(num_dice, num_of_sides, 1)
            // Set up the Encounter message
            encounterFinal = encounter.replace(ndxDice, total)
            // Log It
            console.log(`nDx STUFF
                        Encounter: ${encounter}
                        nDx Dice: ${ndxDice}
                        Dice #: ${num_dice}
                        Sides: ${num_of_sides}
                        Total: ${total}`)
        } else {
            encounterFinal = encounter
        }

    }
    if (NCE === true) {
        
    } 
    // Logged Rolled Vars
    console.log(`ROLLED VARIABLES
                d100: ${ad100}
                d20: ${roll}
                Encounter: ${encounterFinal}
                nDx+y: ${ndxyDice}
                nDx: ${ndxDice}`)
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
    
    // Build the message
    let vMessage = `${encounterFinal}`
    // Print the output
    var p = document.createElement('p')
    p.innerHTML = vMessage
    document.getElementById("output").appendChild(p)
}