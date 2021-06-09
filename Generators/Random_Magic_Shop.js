// Function to clear outputs
function clearEverything(){
    // CLEAR OUTPUTS
        // Output Items
        document.getElementById('output_items').innerHTML = ""
        // List Items
        document.getElementById('output_link_list_items').innerHTML = ""
        // Output Spells
        document.getElementById('output_spells').innerHTML = ""
        // List Spells
        document.getElementById('output_link_list_spells').innerHTML = ""
        // Text input
        document.getElementById('population').value = ""
}


// Function to generate inventory for a magic item shop
function generateMagicShop(){
    // CLEAR OUTPUTS
        // Output Items
        document.getElementById('output_items').innerHTML = ""
        // List Items
        document.getElementById('output_link_list_items').innerHTML = ""
        // Output Spells
        document.getElementById('output_spells').innerHTML = ""
        // List Spells
        document.getElementById('output_link_list_spells').innerHTML = ""
    // USER INPUTS
        // Get the population
        var population = document.getElementById("population").value
        console.log(`Population: ${population}`)
        // Check if empty
        if (population == "") {
            alert("Please input a population.")
            return
        } else if (population > 1000000) {
            var population = 1000000
        }
        // Get wealth
        var wealth = document.getElementById('wealth').value
        // Get magicness
        var magicness = document.getElementById('magicness').value
    // PULL NECESSARY VARS FROM TABLES
        // Set up empty lists
        var diceSizes = []
        // Pull the wealth mod
        var modWealth = tableWealth.find(i => i.WEALTH == wealth).MODIFIER
        // Pull the magicness mod
        var modMagicness = tableMagicness.find(i => i.MAGICNESS == magicness).MODIFIER
        // Stock Multiplier
            // Loop through the first key's values and determine if population is in the range
            for (r = 0; r < tableStockMultipliers.length; r++) {
                var blah = Object.values(tableStockMultipliers)[r].Population
                // Parse the range
                    // Get the first number
                    const RegEx1 = /^(\d+)/gm
                    var firstNum = blah.match(RegEx1)
                    firstNum = firstNum[0]
                    // Get the second number
                    const RegEx2 = /(\d+)$/gm
                    var secondNum = blah.match(RegEx2)
                    secondNum = secondNum[0]
                // Determine if the population is within the range
                if (population <= parseInt(secondNum) && population >= parseInt(firstNum)) {
                    var stockMultiplier = Object.values(tableStockMultipliers)[r].Stock_Multiplier 
                    break
                }
            }
            // Log it
            console.log(`Stock Multiplier: ${stockMultiplier}`)
        // Stock Die Size
            // Set up the rarities list
            var rarities = ['Common', 'Uncommon', 'Rare', 'VeryRare']
            // Loop through the different tables
            rarities.forEach(t => {
                // Loop through the first key's values and determine if population is in the range
                for (r = 0; r < eval(`tableDieSize${t}`).length; r++){
                    var blah = Object.values(eval(`tableDieSize${t}`))[r].Population
                    // Parse the range
                        // Get the first number
                        const RegEx1 = /^(\d+)/gm
                        var firstNum = blah.match(RegEx1)
                        firstNum = firstNum[0]
                        // Get the second number
                        const RegEx2 = /(\d+)$/gm
                        var secondNum = blah.match(RegEx2)
                        secondNum = secondNum[0]
                    // Determine if the population is within the range
                    if (population <= parseInt(secondNum) && population >= parseInt(firstNum)) {
                        var result = Object.values(eval(`tableDieSize${t}`))[r].Die_Size
                        result = (result * modMagicness) * modWealth
                        diceSizes.push(result)
                        break
                    }
                }
            })
            // Log the lists
            console.log(rarities)
            console.log(diceSizes)
    // STOCK DICE (QUANTITY)
        // Create an empty list for the results
        var rolls = []
        // Roll the Stock Die for each rarity
        diceSizes.forEach(r => {
            // Roll it
            var roll = getRndInteger(1, r)
            // Push it to the list
            rolls.push(roll)
        })
        // Log it
        console.log(rolls)
    // CHECK LIST
    if (rolls.reduce((a, b) => a + b, 0) == 0) {
        var vMessage = 'This city regrets to inform you there is nothing in stock. Perhaps they have a quest for the party to get some stock?'
        // Populate the items element saying nothing for sale
        var ul2 = document.createElement('li')
        ul2.innerHTML = vMessage
        document.getElementById('output_items').appendChild(ul2)

        var ul1 = document.createElement('li')
        ul1.innerHTML = vMessage
        document.getElementById('output_spells').appendChild(ul1)
    } else {
        // GENERATE ITEMS BASED ON QUANTITIES (STOCK DICE ROLLS)
            // Loop through the 2 lists
            for (idx = 0; idx < rarities.length; idx++) {
                pickItems(rolls[idx] * stockMultiplier, rarities[idx], 'output_items', 'output_link_list_items')
            }    
        // GENERATE SPELL COMPONENTS BASED ON QUANTITIES
            // Loop through the 2 lists
            for (idx = 0; idx < rarities.length; idx++) {
                pickSpells(rolls[idx] * stockMultiplier, rarities[idx], 'output_spells', 'output_link_list_spells')
        }
    }
        
}