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
                var vMessage1 = `<a href="${vLink}">${vName}</a>`
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

}