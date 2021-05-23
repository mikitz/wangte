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
function randomEncounter(){
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
    // Get Road status
    var g = document.getElementById("road")
    var road = g.options[g.selectedIndex].text
    // Get urban biome
    var urbanAreaVis = document.getElementById('ba')
    if (urbanAreaVis) {
        var h = document.getElementById("ba")
        var urbanArea = h.options[h.selectedIndex].value
    }
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
            var ncdc = oaBiome.find(i => i.Biome == biome).Day_NC_DC
            var cdc = oaBiome.find(i => i.Biome == biome).Day_C_DC
        } else {
            var ncdc = oaBiome.find(i => i.Biome == biome).Night_NC_DC
            var cdc = oaBiome.find(i => i.Biome == biome).Night_C_DC
        }
    } else if (ct === "N/A") {
        // Set Non-combat DC as the user's input
        var ncdc = parseInt(nct)
        // Pull Combat DC from database based on time of day
        if (time_of_day === "Day") {
            var cdc = oaBiome.find(i => i.Biome == biome).Day_C_DC
        } else {
            var cdc = oaBiome.find(i => i.Biome == biome).Night_C_DC
        }
    } else if (nct === "N/A") {
        // Set Combat DC as user's input
        var cdc = parseInt(ct)
        // Pull both DCs from the database based on time of day
        if (time_of_day === "Day") {
            var ncdc = oaBiome.find(i => i.Biome == biome).Day_NC_DC
        } else {
            var ncdc = oaBiome.find(i => i.Biome == biome).Night_NC_DC
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
    // Hazard
    if (roll == 1){

    }
    // Non-combat Encounter
    if (roll >= ncdc && roll < cdc) {
        var encQ = true
        // Grab the proper table
        if (urbanAreaVis && urbanArea != "no_area") {
            // Get length for the d100
            var len = eval(`${urbanArea}_nc`).length
            // Roll 1dx
            var ad100 = getRndInteger(1, len)
            // Get the rolled encounter
            var encounter = eval(`${urbanArea}_nc`)[ad100]
            // Set up the final encounter
            var encounterFinal = `<h2>NON-COMBAT ENCOUNTER</h2>${encounter} ${ED} ft. away.`
        } else if (road == 'Yes') {
            // Get length for the d100
            var len = road_nc.length
            // Roll 1dx
            var ad100 = getRndInteger(1, len)
            // Get the rolled encounter
            var encounter = road_nc[ad100]
            // Set up the final encounter
            var encounterFinal = `<h2>NON-COMBAT ENCOUNTER</h2>${encounter} ${ED} ft. away.`
        } else {
            // Set some vars to true
            var vCreature = true
            var vDice = true
            // Get length for the d100
            var len = eval(`${biome.toLowerCase()}_nc`).length
            // Roll 1dx
            var ad100 = getRndInteger(1, len)
            // var ad100 = 103
            // Get the rolled encounter
            var encounter = eval(`${biome.toLowerCase()}_nc`)[ad100]
            // SET ENCOUNTER FOR TESTING
            encounter = 'Blue Hole'
        }
        // Random Ship Encounter
        if (encounter == "Random Ship") {
            // Roll on the Random Ship Tables
                var purpose = rollTable(ship_purpose)
                var type = rollTable(ship_type)
                var adj = rollTable(ship_adjective)
                var noun = rollTable(ship_noun)
                var attitude = rollTable(ship_attitude)
                var attitudeLower = attitude.toLowerCase()
                var races = rollTable(eval(`ship_${attitudeLower}`))
                var disposition = rollTable(ship_disposition)
                if (disposition == 'Emergency') {
                    var emergency = rollTable(ship_emergency)
                } else {
                    var emergency = 'Nothing Unique'
                }
            // Build the message
            var vMessage = `The party and their ship come accross a <b>${attitude} ${purpose} ${type}</b> crewed by ${races}. <br>This <b>${races}</b> ship is called the <b>${adj} ${noun}</b>. <r>They are ${ED} ft. away from the party's ship and their disposition is <b>${disposition}</b>: ${emergency}.`
            // Set the final encounter message
            var encounterFinal = `<h2>NON-COMBAT ENCOUNTER</h2>${vMessage}`
        // Mysterious Island Encounter
        } else if (encounter == "Mysterious Island") {
            // TODO: #2 Implement Mysterious Island Encounters
            
        // Blue Hole Encounter
        } else if (encounter == "Blue Hole") {
            // Blue Hole dimensions
            var diameter = getRndInteger(1, 10) * 100
            var depth = getRndInteger(1, 10) * 100
            // GET RESULT
                // Roll on the table
                var result = rollTable(blue_hole)
                // Roll dice in result
                result = rollDice(result)
                // Replace creatures with links in result
                result = appendLink(result)
            // Build the message
            var vMessage = `The party comes across a Blue Hole that is ${diameter}ft in diameter and ${depth}ft deep. It contains ${result}.`
            // Set the final encounter message
            var encounterFinal = `<h2>NON-COMBAT ENCOUNTER</h2>${vMessage}`

        // Hazard Encounter
        } else if (encounter == 'Hazard') {
            // TODO: #3 Implement Hazard Encounters

        } else {
            // Log the encounter
            console.log(`ENCOUNTER: ${encounter}`)
            console.log(`ROLL: ${ad100}`)
            console.log(`LENGTH: ${len}`)
            if (vCreature && vDice) {
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
                // Log the creatures in the encounter
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
        // Random Ship Encounter
        if (encounter == "Random Ship") {
            // Roll on the Random Ship Tables
                var purpose = rollTable(ship_purpose)
                var type = rollTable(ship_type)
                var adj = rollTable(ship_adjective)
                var noun = rollTable(ship_noun)
                var attitude = rollTable(ship_attitude)
                var attitudeLower = attitude.toLowerCase()
                var races = rollTable(eval(`ship_${attitudeLower}`))
                var disposition = rollTable(ship_disposition)
                if (disposition == 'Emergency') {
                    var emergency = rollTable(ship_emergency)
                } else {
                    var emergency = 'Nothing Unique'
                }
            // Build the message
            var vMessage = `The party and their ship come accross a <b>${attitude} ${purpose} ${type}</b> crewed by ${races}. <br>This <b>${races}</b> ship is called the <b>${adj} ${noun}</b>. <r>They are ${ED} ft. away from the party's ship and their disposition is <b>${disposition}</b>: ${emergency}.`
            // Set the final encounter message
            var encounterFinal = `<h2>NON-COMBAT ENCOUNTER</h2>${vMessage}`
        // Mysterious Island Encounter
        } else if (encounter == "Mysterious Island") {
            // Build the message
            var vMessage = mysteriousIsland()
            // Set the final encounter message
            var encounterFinal = `<h2>NON-COMBAT ENCOUNTER</h2>${vMessage}`
        // Blue Hole Encounter
        } else if (encounter == "Blue Hole") {
            
        } else {
            // Extract creatures from the encounter 
                // Push regex matches to a list while looping through the whole DB
                var lCreatures = []
                var newregex = new RegExp('[\(*\)*]', 'gm')
                var creatureExtract = bestiary_basic.forEach(function(element){
                    var nameFixed = element.name_lower.replace(newregex, '\\$&')
                    var reFull = new RegExp(`${nameFixed}`, "g")
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
                        // Escape special RegEx characters
                        var newregex = new RegExp('[\(*\)*]', 'gm')
                        console.log(`ITEM REPLACE: ${item}\n` + 
                                    `ENCOUNTER: ${encounter}`)
                        // Extract all matches of the item
                        var regex = new RegExp(`(${item})`, "g")
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
                            var inclu = ['<','_','%','0', '>', '#'].some(el => idxExtra.includes(el))
                            var incluNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
                            // Replace creatures with links
                            if (!inclu) {
                                word = bestiary_basic.find(y => y.name_lower == word).name.toLowerCase()
                                encounter = replaceRange(encounter, idxStart, idxEnd, linkGenerator5eTools(word, bookExtract))
                            }                             
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
    vMessage = `${encounterFinal}`
    // Print the output
    var p = document.createElement('p')
    p.innerHTML = vMessage
    document.getElementById("output").appendChild(p)
    // WEATHER
    if (encQ) {
        generate_weather()
    }
}
// Function to handle extra urban environment
function urbanStuff() {
    // Get biome
    var d = document.getElementById("biome")
    var biome = d.options[d.selectedIndex].text
    // Set up the Bonus Urban Selector
    var bonus_urban = `<label for="ba">Urban Area:</label>
    <select name="ba" id="ba">
        <option value="no_area">No Specific Area</option>
        <option value="festivals">Festivals</option>
        <option value="red_light_district">Red Light District</option>
        <option value="tavern">Tavern</option>
        <option value="seedy_tavern">Seedy Tavern</option>
    </select>`
    // If Biome is Urban
    if (biome == 'Urban') {
        document.getElementById('bonus_urban').innerHTML = bonus_urban
    } else if (biome != 'Urban') {
        document.getElementById('bonus_urban').innerHTML = ""
    }
}