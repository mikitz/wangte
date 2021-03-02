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
function clear_output() {
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
// Define a function to replace a string by index range
// Source: https://stackoverflow.com/a/12568270/3725925
function replaceRange(str, start, end, substitute) {
    return str.substring(0, start) + substitute + str.substring(end);
}

// Define a function to generate a 5etools link based on the creature name and book
function linkGenerator5eTools(Creature, Book) {
    let creatureLink = Creature.replace(/ /g, "%20")
    let link = `<a href="https://5e.tools/bestiary.html#${creatureLink}_${Book}" target="_blank" rel="noreferrer noopener">${Creature}</a>`
    return link
}
// Define a function to get the link on DnDBeyond
function linkGeneratorBeyond(Creature) {
    let creatureLink = Creature.replace(/ /g, "-")
    let link = `<a href="https://www.dndbeyond.com/monsters/${creatureLink}" target="_blank" rel="noreferrer noopener">${Creature}</a>`
    return link
}

// Define the function to generate a random encounter
function tool_random_encounter(){
    clear_output()
    clear_weather()
    // Log a seperator
    console.log("~~~~~~~~~~~~~~~~RANDOM ENCOUNTER~~~~~~~~~~~~~~~~~~~~~~")
    // Get default adjustments
    var a = document.getElementById("combat_threshold")
    var ct = a.options[a.selectedIndex].text
    var b = document.getElementById("non-combat_threshold")
    var nct = b.options[b.selectedIndex].text
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
    } else if (ct === "N/A") {
        // Set Non-combat DC as the user's input
        var ncdc = parseInt(nct)
        // Pull Combat DC from database based on time of day
        if (time_of_day === "Day") {
            var cdc = oaData.find(i => i.Biome == biome).Day_C_DC
        } else {
            var cdc = oaData.find(i => i.Biome == biome).Night_C_DC
        }
    } else if (nct === "N/A") {
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
        var encQ = true
        var len = eval(`${biome.toLowerCase()}_nc`).length       
        // Roll 1dx
        var ad100 = getRndInteger(1, len)
        var encounter = eval(`${biome.toLowerCase()}_nc`)[ad100]
        console.log(encounter)
        // Extract creatures from the encounter and replace them with links
        var creatureExtract = bestiary_basic.forEach(function(element){
            var nameFixed = element.name_lower.replace("(", "\(")
            nameFixed = nameFixed.replace(")", "\)")
            var creatureName = `(${nameFixed}[a-z]\b)`
            var reFull = new RegExp(`${creatureName}`, "g")
            var inc = encounter.match(reFull)
            if (inc) {
                inc = inc.sort(function(a, b){return b.length - a.length})
                console.log(inc)
                for (k = 0; k < inc.length; k++) {
                    var creatureExtract = inc[k]
                    var bookExtract = bestiary_basic.find(r => r.name_lower == creatureExtract).book_lower
                    encounter = encounter.replace(creatureExtract, linkGenerator5eTools(creatureExtract, bookExtract))
                }
                return creatureExtract
            }
        })
        console.log(`Creature: ${creatureExtract}`)
        // Extract dice groups from encounter
        const NewRegEx = /(?:\d+d\d*\+?\d*)/gm
        var aDice = encounter.match(NewRegEx)
        console.log(aDice)
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
            var encounterFinal = `<h2>NON-COMBAT ENCOUNTER</h2>${encounterF}`
        } else {
            var encounterFinal = `<h2>NON-COMBAT ENCOUNTER</h2>${encounter} ${ED} ft. away.`
        }
    }
    // Combat Encounter
    if (roll >= cdc) {
        var encQ = true
        // Roll 1d100
        var ad100 = getRndInteger(1, 100)
        // Get the data from the DB
        var encounter = eval(biome.toLowerCase()).filter(n => n.Level == lvl)
        encounter = encounter.find(x => x.d100 === ad100).Encounter
        console.log('ENCOUNTER')
        console.log(encounter)
        // Extract creatures from the encounter 
            // Push regex matches to a list while looping through the whole DB
            var lCreatures = []
            var creatureExtract = bestiary_basic.forEach(function(element){
                var nameFixed = element.name_lower.replace(/\)/g, "\)")
                var creatureName = nameFixed.replace(/\(/g, "\(")
                var reFull = new RegExp(`${creatureName}`, "g")
                // RegEx still doesn't find "half-ogre (ogrillon)"
                var inc = encounter.match(reFull)
                if (inc) {
                    // Sort inc by length to swap out longer strings first
                    inc = inc.sort(function(a, b){return b.length - a.length})
                    // Loop through inc and append each element to lCreatures
                    for (m = 0; m < inc.length; m++) {
                        lCreatures.push(inc[m])
                    }
                    console.log("--INC--")
                    console.log(inc)
                }
            })
            // Manipulate the list
            console.log("++++++++CREATURE LIST++++++++")
            console.log(lCreatures)
                // Remove duplicates
                lCreatures = lCreatures.filter (function (value, index, array) { 
                    return array.indexOf (value) == index;
                });
                console.log("========CREATURE LIST========")
                console.log(lCreatures)
                // Check if any of the elements are in the other elements
                // Loop through the list
                for (z = 0; z < lCreatures.length; z++) {
                    var item = lCreatures[z]
                    var bookExtract = bestiary_basic.find(r => r.name_lower == item).book_lower
                    console.log(`ITEM: ${item}`)
                    // Extract all matches of the item
                    var regex = new RegExp(item, 'g')
                    var regMatch = encounter.match(regex)
                    console.log("REGMATCH")
                    console.log(regMatch)
                    // Log their indecies to a list
                    var lIndecies = []
                    while ((match = regex.exec(encounter)) != null) {
                        lIndecies.push(match.index)
                    }
                    console.log("INDEX LIST")
                    console.log(lIndecies)
                    // Loop through the matches by index checking
                    for (m = 0; m < regMatch.length; m++) {
                        // Needed variables
                        var idxStart = lIndecies[m]
                        var word = regMatch[m]
                        var idxEnd = idxStart + word.length
                        var idxRange = encounter.substring(idxStart, idxEnd)
                        var idxExtra = encounter.substring(idxStart - 1, idxEnd + 1)
                        // Check for undesirables
                        var inclu = ['<','_','%','0', '>'].some(el => idxExtra.includes(el))
                        var incluNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
                        // Define function to add the links
                        function addLinks(){
                            // if (incluNum) {
                            //     encounter = replaceRange(encounter, idxStart, idxEnd, linkGenerator5eTools(word, bookExtract))
                            // } else 
                            if (!inclu) {
                                encounter = replaceRange(encounter, idxStart, idxEnd, linkGenerator5eTools(word, bookExtract))
                            }                             
                        }
                        // Run said function
                        addLinks()
                        // Log for debugging
                        console.log(`INDEX VARS
                        Start: ${idxStart}
                        End: ${idxEnd}
                        Word: ${word}
                        Substring: ${idxRange}
                        Extra: ${idxExtra}`)
                    }
                }
        console.log(`Creature: ${creatureExtract}`)
        // Extract dice groups from encounter
        const NewRegEx = /(?:\d+d\d*\+?\d*)/gm
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
            var encounterFinal = `<h2>COMBAT ENCOUNTER</h2>${encounterF}`
        } else {
            var encounterFinal = `<h2>COMBAT ENCOUNTER</h2>${encounter} ${ED} ft. away.`
        }
    }
    // No Random Encounter
    if (roll < ncdc && roll < cdc) {
        var encQ = false
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
    // WEATHER
    if (encQ) {
        generate_weather()
    }
}