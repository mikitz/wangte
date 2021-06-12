// Function to clear the output elements
function clear_shit(){
    document.getElementById('output').innerHTML = ""
    document.getElementById("output_link_list").innerHTML = ""
}

// Function to pick random items based on quantity and rarity
function pickItems(quantity, uiRarity, output1, output2){
    // Filter the table based on user input of rarity
        // Check if the item the user wants is magical
        if (uiRarity == "Mundane") {
            var items = mundane_items
        } else {
            var items = magic_items.filter(item => item.RARITY == uiRarity)
        }
        // Log to console
        console.log(items)

    // Get the length of the resulting array
    var table_length = items.length
        // Log it to console
        console.log(table_length)        
    
    // Alert user that their quantity exceeds possible choices
    if (quantity > table_length) {
        alert(`ITEM PICKER: The quantity (${quantity}) is larger than the possible number of choices (${table_length})! Please choose a quantity lower than ${table_length}.`)
        return
    }

    // Generate as many random integers as quantity
        // Create an empty list
        var randInts = []
        // Loop through the quantity
        for (var x = 0; x < quantity; x++) {
            // Generate a random number
            var number = (getRndInteger(0, table_length - 1))
            // Check to see if this number is already in the list
            while (randInts.includes(number) == true) {
                number = (getRndInteger(0, table_length - 1))
            }
            // Push it to the list of random integers
            randInts.push(number)
        }
        // Log it
        console.log(randInts)
    
    // Pull the rows that were randomly selected from the table
        // Loop through each random integer
        randInts.forEach(function(idx) {
            // Name
                // Pull the name from the table
                var vName = items[idx].NAME
            
            // Link
                // Pull the link from the table
                var vLink = items[idx].LINK
            
            // Linked Text List
                // Build the message of linked items
                var vMessage1 = `<a href="${vLink}" rel="noopener noreferrer" target="_blank">${vName}</a>`
                // Populate the element
                var ul1 = document.createElement('li')
                ul1.innerHTML = vMessage1
                document.getElementById(output1).appendChild(ul1)

            // List of Copyable Links    
                // Build the message of the links
                var vMessage2 = `${vName}: ${vLink}`
                // Populate the element
                var ul2 = document.createElement('li')
                ul2.innerHTML = vMessage2
                document.getElementById(output2).appendChild(ul2)
        })    
}

// Function to pick random items
function pick_item(){ // TODO: #1 Bug: cannot enter a quantity equalt to table_length, unlike the other pickers. Find this bug.
    // Clear the outputs
    clear_shit()
    // USER INPUTS
        // Get the quantity
        var quantity = document.getElementById("quantity").value
        console.log(`Quantity: ${quantity}`)
        // Check if empty
        if (quantity == "") {
            alert("Please input a quantity.")
            return
        }
        // Get the rarity
        var a = document.getElementById("rarity")
        var uiRarity = a.options[a.selectedIndex].text
        console.log(`Rarity: ${uiRarity}`)
    // RUN THE FUNCTION
        pickItems(quantity, uiRarity)
    
}

// Function pick a random creature
function pick_creature(){
    // Clear the outputs
    clear_shit()
    // Get User Inputs
        // Get the quantity
        var quantity = document.getElementById("quantity").value
        console.log(`Quantity: ${quantity}`)
        // Get the CR
        var a = document.getElementById("CR")
        var uiCR = a.options[a.selectedIndex].text
        console.log(`School: ${uiCR}`)
        // Get the Type
        var b = document.getElementById("type")
        var uiType = b.options[b.selectedIndex].text
        console.log(`Level: ${uiType}`)
        // Check if empty
        if (quantity == "") {
            alert("Please input a quantity.")
            return
        }
    // Filter
        // Filter the table based on user input
        if (uiCR == "All" && uiType == "All") {
            var items = dbCreatures
        } else if (uiType == "All") {
            var items = dbCreatures.filter(creature => creature.CR == uiCR)
        } else if (uiCR == "All") {
            var items = dbCreatures.filter(creature => creature.TYPE == uiType)
        } else {
            var items = dbCreatures.filter(creature => creature.CR == uiCR)
            items = items.filter(creature => creature.TYPE == uiType)
        }

    // Get the length of the resulting array
    var table_length = items.length
    // Log it to console
    console.log(table_length) 

    // Alert user that their quantity exceeds possible choices
    if (quantity > table_length) {
        alert(`The quantity (${quantity}) is larger than the possible number of choices (${table_length})! Please choose a quantity lower than ${table_length}.`)
        return
    }

    // Generate as many random integers as quantity
        // Create an empty list
        var randInts = []
        // Loop through the quantity
        for (var x = 0; x < quantity; x++) {
            // Generate a random number
            var number = (getRndInteger(0, table_length - 1))
            // Check to see if this number is already in the list
            while (randInts.includes(number) == true) {
                number = (getRndInteger(0, table_length - 1))
            }
            // Push it to the list of random integers
            randInts.push(number)
        }
        // Log it
        console.log(randInts)

    // Pull the rows that were randomly selected from the table
        // Loop through each random integer
        randInts.forEach(function(idx) {
            // Name
                // Pull the name from the table
                var vName = items[idx].NAME
                // Log it
                console.log(`Item: ${vName}`)
            // Link
                // PUll the link from the table
                var vLink = items[idx].LINK
                // Log it
                console.log(`Link: ${vLink}`)
            
            // Linked Text List
                // Build the message of linked items
                var vMessage1 = `<a href="${vLink}" rel="noopener noreferrer" target="_blank">${vName}</a>`
                // Populate the element
                var ul1 = document.createElement('li')
                ul1.innerHTML = vMessage1
                document.getElementById('output').appendChild(ul1)

            // List of Copyable Links    
                // Build the message of the links
                var vMessage2 = `${vName}: ${vLink}`
                // Populate the element
                var ul2 = document.createElement('li')
                ul2.innerHTML = vMessage2
                document.getElementById('output_link_list').appendChild(ul2)
        })    
}

// Function to pick random spells based on the quantity and level
function pickSpells(quantity, level, output1, output2){
    // Filter
        // Filter the table based on the levels
        var items = dbSpells.filter(spell => spell.RARITY == level)

    // Get the length of the resulting array
    var table_length = items.length
        // Log it to console
        console.log(table_length) 

    // // Alert user that their quantity exceeds possible choices
    // if (quantity > table_length) {
    //     alert(`SPELLS PICKER: The quantity (${quantity}) is larger than the possible number of choices (${table_length})! Please choose a quantity lower than ${table_length}.`)
    //     return
    // }

    // Generate as many random integers as quantity
        // Create an empty list
        var randInts = []
        // Loop through the quantity
        for (var x = 0; x < quantity; x++) {
            // Generate a random number
            var number = (getRndInteger(0, table_length - 1))
            // Push it to the list of random integers
            randInts.push(number)
        }
        // Log it
        console.log(randInts)

    // Pull the rows that were randomly selected from the table
        // Loop through each random integer
        randInts.forEach(function(idx) {
            // Name
                // Pull the name from the table
                var vName = items[idx].NAME
                // Log it
                console.log(`Item: ${vName}`)
            // Link
                // PUll the link from the table
                var vLink = items[idx].LINK
                // Log it
                console.log(`Link: ${vLink}`)
            
            // Linked Text List
                // Build the message of linked items
                var vMessage1 = `<a href="${vLink}" rel="noopener noreferrer" target="_blank">${vName}</a>`
                // Populate the element
                var ul1 = document.createElement('li')
                ul1.innerHTML = vMessage1
                document.getElementById(output1).appendChild(ul1)

            // List of Copyable Links    
                // Build the message of the links
                var vMessage2 = `${vName}: ${vLink}`
                // Populate the element
                var ul2 = document.createElement('li')
                ul2.innerHTML = vMessage2
                document.getElementById(output2).appendChild(ul2)
        })    
}

// Function to pick a random spell
function pick_spell(){
    // Clear the outputs
    clear_shit()
    // Get User Inputs
        // Get the quantity
        var quantity = document.getElementById("quantity").value
        console.log(`Quantity: ${quantity}`)
        // Get the School
        var a = document.getElementById("school")
        var uiSchool = a.options[a.selectedIndex].value
        console.log(`School: ${uiSchool}`)
        // Get the Level
        var b = document.getElementById("level")
        var uiLevel = b.options[b.selectedIndex].value
        console.log(`Level: ${uiLevel}`)
        // Check if empty
        if (quantity == "") {
            alert("Please input a quantity.")
            return
        }
    // Filter
        // Filter the table based on user input
        if (uiSchool == "All" && uiLevel == "All") {
            var items = dbSpells
        } else if (uiSchool == "All") {
            var items = dbSpells.filter(spell => spell.LEVEL == uiLevel)
        } else if (uiLevel == "All") {
            var items = dbSpells.filter(spell => spell.SCHOOL == uiSchool)
        } else {
            var items = dbSpells.filter(spell => spell.LEVEL == uiLevel)
            items = items.filter(spell => spell.SCHOOL == uiSchool)
        }

    // Get the length of the resulting array
    var table_length = items.length
        // Log it to console
        console.log(table_length) 

    // Alert user that their quantity exceeds possible choices
    if (quantity > table_length) {
        alert(`The quantity (${quantity}) is larger than the possible number of choices (${table_length})! Please choose a quantity lower than ${table_length}.`)
        return
    }

    // Generate as many random integers as quantity
        // Create an empty list
        var randInts = []
        // Loop through the quantity
        for (var x = 0; x < quantity; x++) {
            // Generate a random number
            var number = (getRndInteger(0, table_length - 1))
            // Check to see if this number is already in the list
            while (randInts.includes(number) == true) {
                number = (getRndInteger(0, table_length - 1))
            }
            // Push it to the list of random integers
            randInts.push(number)
        }
        // Log it
        console.log(randInts)

    // Pull the rows that were randomly selected from the table
        // Loop through each random integer
        randInts.forEach(function(idx) {
            // Name
                // Pull the name from the table
                var vName = items[idx].NAME
                // Log it
                console.log(`Item: ${vName}`)
            // Link
                // PUll the link from the table
                var vLink = items[idx].LINK
                // Log it
                console.log(`Link: ${vLink}`)
            
            // Linked Text List
                // Build the message of linked items
                var vMessage1 = `<a href="${vLink}" rel="noopener noreferrer" target="_blank">${vName}</a>`
                // Populate the element
                var ul1 = document.createElement('li')
                ul1.innerHTML = vMessage1
                document.getElementById('output').appendChild(ul1)

            // List of Copyable Links    
                // Build the message of the links
                var vMessage2 = `${vName}: ${vLink}`
                // Populate the element
                var ul2 = document.createElement('li')
                ul2.innerHTML = vMessage2
                document.getElementById('output_link_list').appendChild(ul2)
        })    
}

// Function to pull a Wild Magic Surge
function wild_magic_surge(){
    // CLEAR OUTPUT
        clear_shit()
    // DICE
        // Roll the dice
        var d20 = getRndInteger(1, 20)
        var d100 = getRndInteger(1, 100)
        var d10 = getRndInteger(1, 10)
        // Log the dice to console
        console.log(`DICE ROLLS
            d20: ${d20}
            d100: ${d100}
            d10: ${d10}`)
    // USER VARIABLES
        // Get the spell's level
        var a = document.getElementById("level")
        var uiLevel = a.options[a.selectedIndex].value
        // Log it
        console.log(`Level: ${uiLevel}`)
    // GET THE WILD SURGE RESULT
        // Check the level for N/A
        if (uiLevel == 'n/a') {
            // Roll on the table
            var vMessage = wildSurge(d20, d100)
        // Check if the d10 is equal to or less than the selected level
        } else if (d10 <= uiLevel) {
            // Roll on the table
            var vMessage = wildSurge(d20, d100)
        } else {
            // Set message to no wild surge
            var vMessage = `No Wild Surge occured!`
        }
    // PRINT THE RESULT
        // Populate the element
        var ul1 = document.createElement('p')
        ul1.innerHTML = vMessage
        document.getElementById('output').appendChild(ul1)
}

// Define a function to get a wild surge
function wildSurge(d20, rd100){
    // Extreme Result
    if (d20 <= 3) {
        var vResult = wsExtreme.find(item => item.d100 == rd100).RESULT
    // Moderate Result
    } else if (d20 <= 9) {
        var vResult = wsModerate.find(item => item.d100 == rd100).RESULT
    // Nuisance Result
    } else if (d20 <= 20) {
        var vResult = wsNuisance.find(item => item.d100 == rd100).RESULT
    }
    var vMessage = `WILD SURGE: ${vResult}`
    return vMessage
}

// Function to generate a random ship
function randomShip(){
    // CLEAR OUTPUT
        clear_shit()
    // USER VARIABLES
        // Get the quantity
        var quantity = document.getElementById("quantity").value
        console.log(`Quantity: ${quantity}`)
        // Log it
        console.log(`Level: ${quantity}`)
        // Check if empty
        if (quantity == "") {
            alert("Please input a quantity.")
            return
        }
    // PULL RESULT(S)
        // Loop through the quantities to generate that many ships
        for (q = 0; q < quantity; q++) {
            // SHIP DISTANCE FROM PARTY
                // Pull number of dice from the database
                var dice = oaEncounterDistance.find(i => i.biome == "Open_Water").number_of_dice
                // Pull the number of sides from the database
                var sides = oaEncounterDistance.find(i => i.biome == "Open_Water").number_of_sides
                // Pull the multiplier from the database
                var mult = oaEncounterDistance.find(i => i.biome == "Open_Water").multiplier
                // Roll the distance
                var ED = fMultiRoll(dice, sides, mult)
            // ROLL TABLES
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
                var cCrew = ship_crew.find(ship => ship.Ship == type).Crew
                var cPassengers = ship_crew.find(ship => ship.Ship == type).Passengers
                var qCrew = getRndInteger(1, cCrew)
                var qPassengers = getRndInteger(1, cPassengers)
            // BUILD THE MESSAGE
                var vMessage = `The party and their ship come accross a <b>${attitude} ${purpose} ${type}</b> crewed by ${qCrew} (max. ${cCrew}) ${races} with ${qPassengers} (max. ${cPassengers}) ${races} passengers on board. This <b>${races}</b> ship is called the <b>${adj} ${noun}</b>. <r>They are ${ED} ft. away from the party's ship and their disposition is <b>${disposition}</b>: ${emergency}.`
            // PRINT THE RESULT
                // Populate the element
                var ul1 = document.createElement('p')
                ul1.innerHTML = vMessage
                document.getElementById('output').appendChild(ul1)
        }
}

// Function to generate a Myserious Island
function mysteriousIsland(){
    // CLEAR OUTPUT
    clear_shit()
    if (!!document.getElementById("quantity")) {
        // USER VARIABLES
        // Get the quantity
        var quantity = document.getElementById("quantity").value
        console.log(`Quantity: ${quantity}`)
        // Log it
        console.log(`Level: ${quantity}`)
        // Check if empty
        if (quantity == "") {
            alert("Please input a quantity.")
            return
        }
    // PULL RESULT(S)
        // Loop through the quantities to generate that many ships
        for (q = 0; q < quantity; q++) {
            // Set up an output list
            var lOutput = []
            // THEME
                // Get the island theme
                var theme = rollTable(islandTheme)
                // Add the theme to the list
                lOutput.push(`Theme: ${theme}`)
            // THEME DESCRIPTION
                // Get the description
                var description = islandDescription.find(i => i.Theme == theme).Description
                // Push it to the list
                lOutput.push(`<br>Description: ${description}`)
            // STORY HOOK
                // Roll on the table
                var storyHook = rollTable(eval(`island${theme}Hooks`))
                // Roll dice within the output
                storyHook = rollDice(storyHook)
                // Add links to creatures
                storyHook = appendLink(storyHook)
                // Push it to the output list
                lOutput.push(`<br>Story Hook: ${storyHook}`)
            // INHABITANTS
                // Roll on the table
                var inhabitants = rollTable(eval(`island${theme}Inhabitants`))
                // Roll dice within the output
                inhabitants = rollDice(inhabitants)
                // Add links to creatures
                inhabitants = appendLink(inhabitants)
                // Push it to the output list
                lOutput.push(`<br>Inhabitants: ${inhabitants}`)
            // REACTIONS
                // Check if theme is Alien or Sanctum
                if (theme == 'Alien' || theme == 'Sanctum') {
                    // Roll on the table
                    var reaction = rollTable(eval(`island${theme}Reaction`))
                    // Roll dice within the output
                    reaction = rollDice(reaction)
                    // Add links to creatures
                    reaction = appendLink(reaction)
                    // Push it to the output list
                    lOutput.push(`<br>Inhabitants Reaction: ${reaction}`)
                }
            // LEADER
                // Check if theme is NOT Cursed or Wild
                if (theme != 'Cursed' && theme != 'Wild') {
                    // Roll on the table
                    var leader = rollTable(eval(`island${theme}Leader`))
                    // Roll dice within the output
                    leader = rollDice(leader)
                    // Add links to creatures
                    leader = appendLink(leader)
                    // Push it to the output list
                    lOutput.push(`<br>Leader: ${leader}`)
                }
            // MISC
                // Check if theme is Cursed
                if (theme == 'Cursed') {
                    // Get the curse afflicting the island
                        // Roll on the table
                        var curse = rollTable(eval(`island${theme}Curse`))
                        // Roll dice within the output
                        curse = rollDice(curse)
                        // Add links to creatures
                        curse = appendLink(curse)
                        // Push it to the output list
                        lOutput.push(`<br>Curse: ${curse}`)
                // Check if theme is Hostile
                } else if (theme == 'Hostile') {
                    // Get the Leader's motive
                        // Roll on the table
                        var motive = rollTable(eval(`island${theme}Motive`))
                        // Roll dice within the output
                        motive = rollDice(motive)
                        // Add links to creatures
                        motive = appendLink(motive)
                        // Push it to the output list
                        lOutput.push(`<br>Leader Motive: ${motive}`)
                // Check if theme is Wild
                } else if (theme == 'Wild') {
                    // Get the island's feature
                        // Roll on the table
                        var feature = rollTable(eval(`island${theme}Feature`))
                        // Roll dice within the output
                        feature = rollDice(feature)
                        // Add links to creatures
                        feature = appendLink(feature)
                        // Push it to the output list
                        lOutput.push(`<br>Island Feature: ${feature}`)
                }
                // OUTPUT
                    // Set up the message
                    var vMessage = `<H2>MYSTERIOUS ISLAND ENCOUNTER</H2>`
                    // Assemble the message
                    lOutput.forEach(i => {
                        vMessage += `${i}`
                    })
                // PRINT THE RESULT
                    // Populate the element
                    var ul1 = document.createElement('p')
                    ul1.innerHTML = vMessage
                    document.getElementById('output').appendChild(ul1)
        }
    return vMessage
    } else {
        // Set up an output list
        var lOutput = []
        // THEME
            // Get the island theme
            var theme = rollTable(islandTheme)
            // Add the theme to the list
            lOutput.push(`Theme: ${theme}`)
        // THEME DESCRIPTION
            // Get the description
            var description = islandDescription.find(i => i.Theme == theme).Description
            // Push it to the list
            lOutput.push(`<br>Description: ${description}`)
        // STORY HOOK
            // Roll on the table
            var storyHook = rollTable(eval(`island${theme}Hooks`))
            // Roll dice within the output
            storyHook = rollDice(storyHook)
            // Add links to creatures
            storyHook = appendLink(storyHook)
            // Push it to the output list
            lOutput.push(`<br>Story Hook: ${storyHook}`)
        // INHABITANTS
            // Roll on the table
            var inhabitants = rollTable(eval(`island${theme}Inhabitants`))
            // Roll dice within the output
            inhabitants = rollDice(inhabitants)
            // Add links to creatures
            inhabitants = appendLink(inhabitants)
            // Push it to the output list
            lOutput.push(`<br>Inhabitants: ${inhabitants}`)
        // REACTIONS
            // Check if theme is Alien or Sanctum
            if (theme == 'Alien' || theme == 'Sanctum') {
                // Roll on the table
                var reaction = rollTable(eval(`island${theme}Reaction`))
                // Roll dice within the output
                reaction = rollDice(reaction)
                // Add links to creatures
                reaction = appendLink(reaction)
                // Push it to the output list
                lOutput.push(`<br>Inhabitants Reaction: ${reaction}`)
            }
        // LEADER
            // Check if theme is NOT Cursed or Wild
            if (theme != 'Cursed' && theme != 'Wild') {
                // Roll on the table
                var leader = rollTable(eval(`island${theme}Leader`))
                // Roll dice within the output
                leader = rollDice(leader)
                // Add links to creatures
                leader = appendLink(leader)
                // Push it to the output list
                lOutput.push(`<br>Leader: ${leader}`)
            }
        // MISC
            // Check if theme is Cursed
            if (theme == 'Cursed') {
                // Get the curse afflicting the island
                    // Roll on the table
                    var curse = rollTable(eval(`island${theme}Curse`))
                    // Roll dice within the output
                    curse = rollDice(curse)
                    // Add links to creatures
                    curse = appendLink(curse)
                    // Push it to the output list
                    lOutput.push(`<br>Curse: ${curse}`)
            // Check if theme is Hostile
            } else if (theme == 'Hostile') {
                // Get the Leader's motive
                    // Roll on the table
                    var motive = rollTable(eval(`island${theme}Motive`))
                    // Roll dice within the output
                    motive = rollDice(motive)
                    // Add links to creatures
                    motive = appendLink(motive)
                    // Push it to the output list
                    lOutput.push(`<br>Leader Motive: ${motive}`)
            // Check if theme is Wild
            } else if (theme == 'Wild') {
                // Get the island's feature
                    // Roll on the table
                    var feature = rollTable(eval(`island${theme}Feature`))
                    // Roll dice within the output
                    feature = rollDice(feature)
                    // Add links to creatures
                    feature = appendLink(feature)
                    // Push it to the output list
                    lOutput.push(`<br>Island Feature: ${feature}`)
            }
            // OUTPUT
                // Set up the message
                var vMessage = `<H2>MYSTERIOUS ISLAND ENCOUNTER</H2>`
                // Assemble the message
                lOutput.forEach(i => {
                    vMessage += `${i}`
                })
            // PRINT THE RESULT
                // Populate the element
                var ul1 = document.createElement('p')
                ul1.innerHTML = vMessage
                document.getElementById('output').appendChild(ul1)
        }
    return vMessage
    }

// Function to generate a Hazard
function hazard(biome){
    // Roll on the table
    var type = rollTable(eval(`hazard${biome}Type`))
    // Log it
    console.log(`                   Hazard Type: ${type}`)
// HAZARD DC
    // Roll on the table
    var vDC = rollTable(eval(`hazard${biome}DC`))
    // Log it
    console.log(`                   Hazard DC: ${vDC}`)
// SPECIFIC HAZARD TYPE
    // Set up the eval of the pulled type
        // Check if there are spaces in the rolled type
        if (type.includes(" ")) {
            // Replace spaces with underscore
            var table1 = type.replace(/ /g,"_")
            // Evaluate the table to pull from it
            table = eval(`hazard${biome}${table1}`)
            // Pull from the table
            var description = table.find(x => x.DC == vDC).Description
        } else {
            // Evaluate the table to pull from it
            var table1 = eval(`hazard${biome}${type}`)
            // Pull from the table
            var description = table1.find(x => x.DC == vDC).Description
        }
        // Log it
        console.log(`                   ${type}: ${description}`)
// HANDLE DICE IN THE DESCRIPTION
    // Roll the dice using the custom-built function
    description = rollDice(description)
    console.log(`                   ${type} (ROLLED): ${description}`)
// HANDLE MAGICAL STORMS AND FOG
    // Roll 1d10 to determine if it's magical
    var magical = getRndInteger(1, 10)
    // Log it
    console.log(`                   Magic Roll: ${magical}`)
    // Check the hazard type and if the 1d10 above is a 1
    if (type == 'Storm' && magical == 1) {
        // Determine the type of magical storm
        var magicalType = rollTable(eval(`hazard${biome}StormMagical`))
        // Log it
        console.log(`                   Magic Storm: ${magicalType}`)
    } else if (type == 'Fog' && magical == 1) {
        // Determien the type of magical fog
        var magicalType = rollTable(eval(`hazard${biome}FogMagical`))
        // Log it
        console.log(`                   Magic Fog: ${magicalType}`)
    } else if (type == 'Whirlpool' && magical == 1) {
        var magicalType = rollTable(eval(`hazard${biome}WhirlpoolMagical`))
    } else {
        var magicalType = `Non-magical`
    }
// EXPORT THE MESSAGE
    // Build the message
    var vMessage = `${type} (${magicalType}) with a DC of ${vDC}<br> Description: ${description}`
    // Handle visibility if the hazard is Fog
    if (type == 'Fog') {
        // Pull the distance from the obscured table
        var visibleDistance = eval(`hazard${biome}FogThickness`).find(i => i.Thickness == description).Visibility
        // Log it
        console.log(`                   Visibility: ${visibleDistance}`)
        // Append to the message
        vMessage += `<br>Visibility: ${visibleDistance}`
    }
    // Send it
    var encounterFinal = `<h2>HAZARD</h2>${vMessage}`
// DISPLAY RESULTS TABLE
    // Check for spaces in the hazard type
    if (type.includes(" ")) {
        // Replace spaces with underscore
        var type = type.replace(/ /g,"_")
    }
    // Set the table
    var vTable = eval(`hazard${biome}CheckResults${type}HTML`)
    // Print the results table
    var p = document.createElement('table')
    p.innerHTML = vTable
    document.getElementById("table_output").appendChild(p)
    return encounterFinal
}

// Function to generate a shipwreck
function randomShipwreck(element) {
    // CLEAR OUTPUT
    clear_shit()
    // USER VARIABLES
        // Get the quantity
        if (!!document.getElementById("quantity")) {
            var quantity = document.getElementById("quantity").value
            // Log it
            console.log(`Quantity: ${quantity}`)
            // Check if empty
            if (quantity == "") {
                alert("Please input a quantity.")
                return
            }
        }
        
    // PULL RESULT(S)
        if (!!document.getElementById("quantity")) {
            // Loop through the quantities to generate that many ships
            for (q = 0; q < quantity; q++) {
                // Roll on the table
                var wreck = rollTable(tableShipwreck)
                // Roll dice in it
                wreck = rollDice(wreck)
                // Replace creatures with links
                wreck = appendLink(wreck)
                // OUTPUT
                    // Set up the message
                    var vMessage = `<H2>SHIPWRECK ENCOUNTER</H2>`
                    // Assemble the message
                    vMessage += `Contents: ${wreck}`
                // PRINT THE RESULT
                    // Populate the element
                    var ul1 = document.createElement('p')
                    ul1.innerHTML = vMessage
                    document.getElementById(element).appendChild(ul1)
            }
        } else {
            // Roll on the table
            var wreck = rollTable(tableShipwreck)
            // Roll dice in it
            wreck = rollDice(wreck)
            // Replace creatures with links
            wreck = appendLink(wreck)
            // OUTPUT
                // Set up the message
                var vMessage = `<H2>SHIPWRECK ENCOUNTER</H2>`
                // Assemble the message
                vMessage += `Contents: ${wreck}`
            // PRINT THE RESULT
                // Populate the element
                var ul1 = document.createElement('p')
                ul1.innerHTML = vMessage
                document.getElementById(element).appendChild(ul1)
        }
    
    // RETURN
    return vMessage
}

// Function to generate a random NPC
function generateNPC(element){
    // CLEAR OUTPUT
    clear_shit()
        // Get the quantity
        if (!!document.getElementById("quantity")) {
            var quantity = document.getElementById("quantity").value
            // Log it
            console.log(`Quantity: ${quantity}`)
            // Check if empty
            if (quantity == "") {
                quantity = 1
            }
        }
    // Loop through the quantities to generate that many ships
    for (q = 0; q < quantity; q++) {
        // USER VARIABLES
            // Get the age algorithm
            var a = document.getElementById("age_algorithm")
            var uiAgeAlgo = a.options[a.selectedIndex].text
            console.log(`School: ${uiAgeAlgo}`)
        
        // ROLL TABLES
            if (uiAgeAlgo == 'Real-world Data') {
                // Sex
                var sex = rollTable(tableNPCSexRealWorld)
                // Gender
                var gender = rollTable(tableNPCGenderRealWorld)
                    // Set up transgenders
                    if (gender == 'transgender') {
                        if (sex == 'male') {
                            gender = 'transwoman'
                        } else if (sex == 'female') {
                            gender = 'transman'
                        } else {
                            var rGender = getRndInteger(1, 2)
                            if (rGender == 1) {
                                gender = 'transman'
                            } else {
                                gender = 'transwoman'
                            }
                        }
                }
                // Sexual Orientation
                var sexualOrientation = rollTable(tableNPCSexualOrientationRealWorld)
                // Relationship Orientation
                var relationshipOrientation = rollTable(tableNPCRelationshipOrientationRealWorld)
            } else {
                // Sex
                var sex = rollTable(tableNPCSex)
                // Gender
                var gender = rollTable(tableNPCGender)
                console.log(`GENDER #1: ${gender}`)
                    // Set up transgenders
                    if (gender == 'transgender') {
                        if (sex == 'male') {
                            gender = 'transwoman'
                        } else if (sex == 'female') {
                            gender = 'transman'
                        } else {
                            var rGender = getRndInteger(1, 2)
                            if (rGender == 1) {
                                gender = 'transman'
                            } else {
                                gender = 'transwoman'
                            }
                        }
                }
                // Sexual Orientation
                var sexualOrientation = rollTable(tableNPCSexualOrientation)
                // Relationship Orientation
                var relationshipOrientation = rollTable(tableNPCRelationshipOrientation)
            }    
            // Pronouns
            if (gender == 'cisgender' && sex == 'male') {
                var pronouns = 'he/his/him'
            } else if (gender == 'cisgender' && sex == 'female') {
                var pronouns = 'she/her/her'
            } else if (gender == 'transman') {
                var rPronouns = getRndInteger(1, 2)
                if (rPronouns == 1) {
                    var pronouns = 'he/his/him'
                } else {
                    var pronouns = 'they/their/them'
                }
            } else if (gender == 'transwoman') {
                var rPronouns = getRndInteger(1, 2)
                if (rPronouns == 1) {
                    var pronouns = 'she/her/her'
                } else {
                    var pronouns = 'they/their/them'
                }
            } else if (gender != 'cisgender') {
                var pronouns = 'they/their/them'
            } else {
                var pronouns = rollTable(tableNPCPronouns)
            }
            // Alignment
            var alignment = rollTable(tableNPCAlignment)
            // Body Shape
            if (gender == 'female'){
                var bodyShape = rollTable(tableNPCBodyShapeFemale)
            } else if (gender == 'male'){
                var bodyShape = rollTable(tableNPCBodyShapeMale)
            } else {
                // Roll 1d2 to see which gender table to roll on
                var roll = getRndInteger(1, 2)
                // Logic to parse the roll
                if (roll == 1){
                    var bodyShape = rollTable(tableNPCBodyShapeFemale)
                } else {
                    var bodyShape = rollTable(tableNPCBodyShapeMale)
                }   
            }
            // Relationship Status
            if (relationshipOrientation == 'monoamorous') {
                var relationshipStatus = rollTable(tableNPCRelationshipStatusMonoamorous)
            } else if (relationshipOrientation == 'polyamorous') {
                var relationshipStatus = rollDice(rollTable(tableNPCRelationshipStatusPolyamorour))
            }
            // Body Type
            var bodyType = rollTable(tableNPCBodyType)
            // Pregnant
            if (sex == 'female' || sex == 'intersex') {
                var pregnantStatus = rollTable(tableNPCPregnantStatus)
            } else {
                var pregnantStatus = 'N/A'
            }
            // Hair Length
            var hairLength = rollTable(tableNPCHairLength)
            // Hair Type
            var hairType = rollTable(tableNPCHairType)
            // Hair Color
            var hairColor = rollTable(tableNPCHairColor)
            // Face Shape
            var faceShape = rollTable(tableNPCFaceShape)
            // Eye Color
            var eyeColor = rollTable(tableNPCEyeColor)
            // Voice Quirk
            var voiceQuirk = rollTable(tableNPCVoiceQuirk)

            // RACE
                // Roll
                var raceRoll = getRndInteger(1, 100)
                // Race
                var race = tableNPCRace.find(i => i.d100 == raceRoll).RACE
                    // SET RACE FOR TESTING
                    //var race = `Aarakocra`
                console.log(`Race: ${race}`)
                // Base Height
                var baseHeight = parseInt(tableNPCRace.find(i => i.d100 == raceRoll).BASE_HEIGHT_IN)
                console.log(`Base Height: ${baseHeight}`)
                // Height Mod
                var heightMod = rollDice(tableNPCRace.find(i => i.d100 == raceRoll).HEIGHT_MOD)
                console.log(`Height Mod: ${heightMod}`)
                // Base Weight
                var baseWeight = parseInt(tableNPCRace.find(i => i.d100 == raceRoll).BASE_WEIGHT_LBS)
                console.log(`Base Weight: ${baseWeight}`)
                // Weight Mod
                var weightMod = rollDice(tableNPCRace.find(i => i.d100 == raceRoll).WEIGHT_MOD)
                console.log(`Weight Mod: ${weightMod}`)
                // Life Expectancy at Birth (LEB)
                var LEB = tableNPCRace.find(i => i.d100 == raceRoll).AGE_LEB
                // Adult Age
                var ageAdult = tableNPCRace.find(i => i.d100 == raceRoll).AGE_ADULT
                // Languages
                var languages = tableNPCRace.find(i => i.d100 == raceRoll).LANGUAGES
                // Languages Extra
                var languagesExtra = tableNPCRace.find(i => i.d100 == raceRoll).LANGUAGES_EXTRA
                    // Get extra languages
                    if (languagesExtra != null) {
                        // Create an emtpy list to store the extra languages in
                        var langList = []
                        // Loop through the extra language number
                        for (i = 0; i < languagesExtra; i++){
                            // Exotic Languages or Common Language
                            var langRoll = getRndInteger(1, 10)
                            if (langRoll == 10) {
                                var langExtra = rollTable(tableLanguagesExotic)
                                // Check if it's already in the race's language
                                while (languages.includes(langExtra) || langList.includes(langExtra)) {
                                    langExtra = rollTable(tableLanguagesExotic)
                                }
                            } else {
                                var langExtra = rollTable(tableLanguagesCommon)
                                // Check if it's already in the race's language
                                while (languages.includes(langExtra || langList.includes(langExtra)) ) {
                                    langExtra = rollTable(tableLanguagesCommon)
                                }
                            }
                            console.log(`# of Extra Langs: ${languagesExtra}`)
                            console.log(`LANG EXTRA: ${langExtra}`)
                            // Push to the list
                            langList.push(langExtra)    
                        }
                        console.log(langList)
                        var extraLanguages = langList.join(", ")
                        console.log(`Extra Langs: ${extraLanguages}`)
                        
                    } else {
                        var extraLanguages = ''
                    }

            // BACKGROUND
                // Pick a random background
                let background = randomProperty(tableBackgrounds)
                // Background Name
                var bgName = background.NAME
                // Background Languages
                var bgLanguages = background.LANGUAGES
                // Personality Trait
                var traits = background.PERSONALITY_TRAIT
                var traitList = traits.split("-----")
                var trait = randomProperty(traitList)
                // Ideal
                var ideals = background.IDEAL
                var idealList = ideals.split("-----")
                var ideal = randomProperty(idealList)
                // Flaw
                var flaws = background.FLAW
                var flawList = flaws.split("-----")
                var flaw = randomProperty(flawList)
                // Bond
                var bonds = background.BOND
                var bondList = bonds.split("-----")
                var bond = randomProperty(bondList)
                // Language Count
                var langCount = background.LANGUAGES_COUNT
                // Languages
                var bgLanguages = background.LANGUAGES
                    // Update Languages
                    if (langCount != null) {
                        // Create an emtpy list to store the extra languages in
                        var langList = []
                        // Loop through the extra language number
                        for (i = 0; i < langCount; i++){
                            // Exotic Languages or Common Language
                            var langRoll = getRndInteger(1, 10)
                            if (langRoll == 10) {
                                var langExtra = rollTable(tableLanguagesExotic)
                                // Check if it's already in the race's language
                                while (languages.includes(langExtra) || langList.includes(langExtra)) {
                                    langExtra = rollTable(tableLanguagesExotic)
                                }
                            } else {
                                var langExtra = rollTable(tableLanguagesCommon)
                                // Check if it's already in the race's language
                                while (languages.includes(langExtra || langList.includes(langExtra)) ) {
                                    langExtra = rollTable(tableLanguagesCommon)
                                }
                            }
                            console.log(`# of BG Langs: ${langCount}`)
                            console.log(`LANG EXTRA BG: ${langExtra}`)
                            // Push to the list
                            langList.push(langExtra)    
                        }
                        console.log(langList)
                        var languagesMore = langList.join(", ")                        
                    } else if (bgLanguages != "") {
                        var languagesMore = bgLanguages
                    } else {
                        var languagesMore = ''
                    }
                    console.log(`BG Langs: ${languagesMore}`)
            // PERSONALITY
                // Roll a die
                let rPersonality = getRndInteger(1, 16)
                // Name
                let personalityName = tableNPCPersonality.find(row => row.d16 == rPersonality).NAME
                // Type
                let personalityType = tableNPCPersonality.find(row => row.d16 == rPersonality).TYPE
                // Description
                let personalityDescription = tableNPCPersonality.find(row => row.d16 == rPersonality).DESCRIPTION

            // Weight
            var weightPounds = +baseWeight + (+heightMod * +weightMod)
            var weightKGS = +weightPounds / 2.205
            // Height
            var heightInches = +baseHeight + +heightMod
            var heightCM = +heightInches * 2.54
            // AGE
                if (uiAgeAlgo == 'Real-world Data') {
                    // LEB Percent
                    var sexTable = 'total'
                    // Age Mod
                        var d4 = getRndInteger(1, LEB * 0.04167)
                        // Plus or Minus Age
                        var minusPlus = getRndInteger(1, 2)
                        if (minusPlus == 1) {
                            var ageMod = -d4
                        } else {
                            var ageMod = d4
                        }
                    // Roll d10,000,000
                    var d10mil = getRndInteger(1, 1000000)
                    console.log(`Roll 10 Mill: ${d10mil}`)
                    // Loop through the table and roll some dice
                    var tabletable = eval(`tableNPCAge_${sexTable}`)
                    console.log(`Table Table: tableNPCAge_${sexTable}`)
                    // Loop through each row of the table
                    for (row = 0; row < tabletable.length; row++) {
                        // Pull the d10000000 value
                        var val10mil = tabletable[row].d1000000
                        console.log(`10 Mil Value: ${val10mil} ---- LEB Percent: ${row.LEB_PERCENT}`)
                        // Check if the roll is equal to or greater than val10mil
                        if (d10mil >= val10mil) {
                            var LEBPercent = tabletable[row].LEB_PERCENT
                            console.log(`LEB Percent: ${LEBPercent}`)
                            break
                        }
                    }
                    // Age
                    var age = Math.round((LEB + ageMod) * LEBPercent)
                } else {
                    // Age
                    var age = getRndInteger(1, LEB)
                }
                console.log(`Age: ${age}`)
            
            // Name
            //var name = 'Chicken Taco'
            var sexUpper = sex.toUpperCase()
            // Sex proper
            var sexProper = sex.toProperCase()
            var raceUpper = race.toUpperCase()
            raceUpper = raceUpper.replace(/\s/g, '_')
            raceUpper = raceUpper.replace("'", "")
            console.log(`RACE UPPER: ${raceUpper}`)
            // Replace hyphens with a space
            var raceReplace = race.replace("-", " ")
            // Replace ( with a space
            raceReplace = raceReplace.replace("(", " ")
            // Replace ) with a space
            raceReplace = raceReplace.replace(")", " ")
            // Replace forward slashes with a space
            raceReplace = raceReplace.replace("/", " ")
            // Replace apostrophe with a space
            raceReplace = raceReplace.replace("'", "")
            // Title case
            raceReplace = raceReplace.toProperCase()
            // Replace white spaces with nothing
            raceReplace = raceReplace.replace(/\s/g, '')
            // Log the race with all things replaced
            console.log(`Race Replace: ${raceReplace}`)
            // Log the table name it looks for
            console.log(`Table Name: tableName${raceReplace}${sexProper}`)
            // Do some logic
            if (sex == 'male' || sex == 'female'){
                var name = randomProperty(eval(`tableName${raceReplace}${sexProper}`))[eval(`"${raceUpper}_${sexUpper}"`)]
            } else {
                // Roll to see if it's male or female
                var rSex = getRndInteger(1, 2)
                if (rSex == 1) {
                    var name = randomProperty(eval(`tableName${raceReplace}Male`))[eval(`"${raceUpper}_MALE"`)]
                } else {
                    var name = randomProperty(eval(`tableName${raceReplace}Female`))[eval(`"${raceUpper}_FEMALE"`)]
                }
            }
            console.log(name)
        
        // OUTPUT
            // Set up the message
            var vMessage = `<H2>${name}</H2>`
            // Assemble the messages
            mBiology = `<b>Race:</b> ${race} <br>
                        <b>Height:</b> ${convertInches(heightInches)} (${Math.round(heightCM, 0)} cm) <br>
                         <b>Weight:</b> ${weightPounds} lbs (${Math.round(weightKGS, 0)} kg) <br>
                         <b>Age:</b> ${age} (LEB: ${LEB}) [Adulthood: ${ageAdult}]<br>
                         <b>Sex:</b> ${sex} <br>
                         <b>Pregnancy:</b> ${pregnantStatus} <br>`
            mIdentity = `<b>Gender Identity:</b> ${gender} <br>
                        <b>Pronouns:</b> ${pronouns} <br>
                        <b>Sexual Orientation:</b> ${sexualOrientation} <br>
                        <b>Relationship Orientation:</b> ${relationshipOrientation} <br>`
            mPersonality = `<b>Alignment:</b> ${alignment} <br>
                            <b>Voice Quirk:</b> ${voiceQuirk} <br>
                            <b>Personality:</b> ${personalityName} (${personalityType})  <br>
                            <b>Personality Description:</b> ${personalityDescription}  <br>`
            mCharacter = `<b>Languages:</b> Common, ${languages}, ${languagesMore}, ${extraLanguages} <br>
                        <b>Relationship Status:</b> ${relationshipStatus} <br>
                        <b>Background:</b> ${bgName} <br>
                        <b>Trait:</b> ${trait} <br>
                        <b>Bond:</b> ${bond} <br>
                        <b>Flaw:</b> ${flaw} <br>
                        <b>Ideal:</b> ${ideal} <br>`
            mPhysicalAppearace = `<b>Body Shape:</b> ${bodyShape} <br>
                                <b>Body Type:</b> ${bodyType} <br>
                                <b>Hair Length:</b> ${hairLength} <br>
                                <b>Hair Type:</b> ${hairType} <br>
                                <b>Hair Color:</b> ${hairColor} <br>
                                <b>Face Shape:</b> ${faceShape} <br>
                                <b>Eye Color:</b> ${eyeColor}`
            //vMessage += `<button onclick="rollTable('')">Reroll</button> <b>Race:</b> ${race} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Height:</b> ${convertInches(heightInches)} (${Math.round(heightCM, 0)} cm) <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Weight:</b> ${weightPounds} lbs (${Math.round(weightKGS, 0)} kg) <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Age:</b> ${age} (LEB: ${LEB}) [Adulthood: ${ageAdult}]<br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Sex:</b> ${sex} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Gender Identity:</b> ${gender} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Pronouns:</b> ${pronouns} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Pregnancy:</b> ${pregnantStatus} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Sexual Orientation:</b> ${sexualOrientation} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Relationship Orientation:</b> ${relationshipOrientation} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Languages:</b> Common, ${languages}, ${languagesMore}, ${extraLanguages} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Alignment:</b> ${alignment} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Voice Quirk:</b> ${voiceQuirk} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Personality:</b> ${personalityName} (${personalityType})  <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Personality Description:</b> ${personalityDescription}  <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Background:</b> ${bgName} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Trait:</b> ${trait} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Bond:</b> ${bond} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Flaw:</b> ${flaw} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Ideal:</b> ${ideal} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Body Type:</b> ${bodyType} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Relationship Status:</b> ${relationshipStatus} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Body Shape:</b> ${bodyShape} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Hair Length:</b> ${hairLength} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Hair Type:</b> ${hairType} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Hair Color:</b> ${hairColor} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Face Shape:</b> ${faceShape} <br>
            //            <button onclick="rollTable('')">Reroll</button> <b>Eye Color:</b> ${eyeColor} `
        // END MESSAGE

        // POPULATE TABLE ROW
            // Create a new row
            var row = document.createElement('tr')
            row.setAttribute('id', `row${q}`)
            document.getElementById('table_output').appendChild(row)
                // Biology
                var tBiology = document.createElement('td')
                tBiology.setAttribute('id', `biology${q}`)
                tBiology.setAttribute('style', 'text-align: left !important;')
                document.getElementById(`row${q}`).appendChild(tBiology)
                // Identity
                var tIdentity = document.createElement('td')
                tIdentity.setAttribute('id', `identity${q}`)
                tIdentity.setAttribute('style', 'text-align: left !important;')
                document.getElementById(`row${q}`).appendChild(tIdentity)
                // Personality
                var tAppearance = document.createElement('td')
                tAppearance.setAttribute('id', `personality${q}`)
                tAppearance.setAttribute('style', 'text-align: left !important;')
                document.getElementById(`row${q}`).appendChild(tAppearance)
                // Character
                var tCharacter = document.createElement('td')
                tCharacter.setAttribute('id', `character${q}`)
                tCharacter.setAttribute('style', 'text-align: left !important;')
                document.getElementById(`row${q}`).appendChild(tCharacter)
                // Appearance
                var tAppearance = document.createElement('td')
                tAppearance.setAttribute('id', `physical_apperance${q}`)
                tAppearance.setAttribute('style', 'text-align: left !important;')
                document.getElementById(`row${q}`).appendChild(tAppearance)
        // PRINT THE RESULT
            // Populate Biology
            var pBiology = document.createElement('p')
            pBiology.innerHTML = mBiology
            document.getElementById(`biology${q}`).appendChild(pBiology)
            // Populate Identity
            var pIdentity = document.createElement('p')
            pIdentity.innerHTML = mIdentity
            document.getElementById(`identity${q}`).appendChild(pIdentity)
            // Populate Personality
            var pPersonality = document.createElement('p')
            pPersonality.innerHTML = mPersonality
            document.getElementById(`personality${q}`).appendChild(pPersonality)
            // Populate Character
            var pCharacter = document.createElement('p')
            pCharacter.innerHTML = mCharacter
            document.getElementById(`character${q}`).appendChild(pCharacter)
            // Populate Physical Apperance
            var pPhysicalApperance = document.createElement('p')
            pPhysicalApperance.innerHTML = mPhysicalAppearace
            document.getElementById(`physical_apperance${q}`).appendChild(pPhysicalApperance)
            // // Populate the element
            // var ul1 = document.createElement('p')
            // ul1.innerHTML = vMessage
            // document.getElementById(element).appendChild(ul1)
    }
}

// Function to clear the NPC Gen. table
function clearTable(tablename, quantity) {
    for (id = 1; id < quantity + 1; id++) {
        document.getElementById('table_output').deleteRow(id)
    }
}