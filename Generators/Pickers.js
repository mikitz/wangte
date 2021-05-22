// Function to clear the output elements
function clear_shit(){
    document.getElementById('output').innerHTML = ""
    document.getElementById("output_link_list").innerHTML = ""
}

// Function to pick random items
function pick_item(){
    // Clear the outputs
    clear_shit()
    // Get the quantity
    var quantity = document.getElementById("quantity").value
    console.log(`Quantity: ${quantity}`)
    // Get the rarity
    var a = document.getElementById("rarity")
    var uiRarity = a.options[a.selectedIndex].text
    console.log(`Rarity: ${uiRarity}`)
    
    // Filter the table based on user input of rarity
        // Check if the item the user wants is magical
        if (uiRarity == "mundane") {
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
            var number = getRndInteger(1, table_length)
            // Check to see if this number is already in the list
            while (randInts.includes(number) == true) {
                number = getRndInteger(1, table_length)
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
            var number = getRndInteger(1, table_length)
            // Check to see if this number is already in the list
            while (randInts.includes(number) == true) {
                number = getRndInteger(1, table_length)
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