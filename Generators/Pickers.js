// Function to clear the output elements
function clear_shit(){
    document.getElementById('output').innerHTML = ""
    document.getElementById("output_link_list").innerHTML = ""
}

// Function to pick random items based on quantity and rarity
function pickItems(quantity, uiRarity){
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
            
            // Link
                // Pull the link from the table
                var vLink = items[idx].LINK
            
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
        var uiSchool = a.options[a.selectedIndex].text
        console.log(`School: ${uiSchool}`)
        // Get the Level
        var b = document.getElementById("level")
        var uiLevel = b.options[b.selectedIndex].text
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