// Function to generate inventory for a magic item shop
function generateMagicShop(){
    // CLEAR OUTPUTS
        // Output
        document.getElementById('output').innerHTML = ""
        // List
        document.getElementById('output_link_list').innerHTML = ""
    // USER INPUTS
        // Get the population
        var population = document.getElementById("population").value
        console.log(`Population: ${population}`)
        // Check if empty
        if (population == "") {
            alert("Please input a population.")
            return
        }
    // PULL NECESSARY VARS FROM TABLES
        // Set up empty lists
        var diceSizes = []
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
    // GENERATE ITEMS BASED ON QUANTITIES (STOCK DICE ROLLS)
        // Loop through the 2 lists
        for (idx = 0; idx < rarities.length; idx++) {
            pickItems(rolls[idx] * stockMultiplier, rarities[idx])
        }    
}