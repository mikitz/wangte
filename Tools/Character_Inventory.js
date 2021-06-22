// Function to create a new character
function createCharacter(){
    // Check if character_list exists
    if (!localStorage.getItem('character_list')) {
        // Set an empty array if not
        localStorage.setItem('character_list', '[]')
    }
    // Parse the JSON to read it
    let characterList = JSON.parse(localStorage.getItem('character_list'))
    console.log(characterList)
    // Set the name to user's input
    let name = prompt("Please enter your character's name:", "Bilbo Baggins")
    // See if name is blank
    if (name == "") {
        alert("Characters cannot be nameless! Sorry about that, Anon ;)")
        createCharacter()
    // If being null
    } else if (name != null) {
        // Set up the new character's name
        localStorage.setItem(`${name}.name`, name)
        // Push the name to our list that is stored
        characterList.push(name)
        console.log(characterList)
        // Set the new array to the local storage
        localStorage.setItem('character_list', JSON.stringify(characterList))
        // Set up the currency local storage
        localStorage.setItem(`${name}.currency`, '{"copper": "0", "silver": "0", "electrum": "0", "gold": "0", "platinum": "0"}')
        // Set up the transaction local storage
        localStorage.setItem(`${name}.transactions`, '[]')
        // Set up the transaction ID
        localStorage.setItem(`${name}.tranID`, 0)
    }
    populateCharacterList()
}
// Set this to change on load
function populateCharacterList(){
    // Get the element
    let dropdown = document.getElementById('characterList')
    // Set the innerHTML to nothing
    dropdown.innerHTML = ''
    // Load the character list from local storage 
    let characterList = JSON.parse(localStorage.getItem('character_list'))
    // Loop through each character in the list
    characterList.forEach((character) => {
        // Create a new option element
        let option = document.createElement('option')
        // Set the value
        option.value = character
        // Set up the innerHTML
        option.innerHTML = character
        // Add it to the dropdown
        dropdown.appendChild(option)
    })
    
}
// Function to save currency
function saveCurrency(){
    // USER INPUTS
        // Get Copper
        let copper = parseInt(document.getElementById('addCopper').value)
            // If copper is null set it to 0
            if (!copper) {
                copper = 0
            }
        console.log(`USER Copper: ${copper}`)
        // Get Silver
        let silver = parseInt(document.getElementById('addSilver').value)
            // If silver is null set it to 0
            if (!silver) {
                silver = 0
            }
        console.log(`USER Silver: ${silver}`)
        // Get Electrum
        let electrum = parseInt(document.getElementById('addElectrum').value)
            // If electrum is null set it to 0
            if (!electrum) {
                electrum = 0
            }
        console.log(`USER Electrum: ${electrum}`)
        // Get Gold
        let gold = parseInt(document.getElementById('addGold').value)
            // If gold is null set it to 0
            if (!gold) {
                gold = 0
            }
        console.log(`USER Gold: ${gold}`)
        // Get Platinum
        let platinum = parseInt(document.getElementById('addPlatinum').value)
            // If platinum is null set it to 0
            if (!platinum) {
                platinum = 0
            }
        console.log(`USER Platinum: ${platinum}`)
        // Character Name
        let a = document.getElementById("characterList")
        let name = a.options[a.selectedIndex].value
        console.log(`USER Name: ${name}`)
    // LOCAL STORAGE PULL
        // Currency
        let currency = JSON.parse(localStorage.getItem(`${name}.currency`))
        console.log('CURRENCY')
        console.log(currency)
        // Currency Variables
            // Copper
            let copperLocal = parseInt(currency.copper)
            console.log(`LOCAL Copper: ${copperLocal}`)
            // Silver
            let silverLocal = parseInt(currency.silver)
            console.log(`LOCAL Silver: ${silverLocal}`)
            // Electrum
            let electrumLocal = parseInt(currency.electrum)
            console.log(`LOCAL Electrum: ${electrumLocal}`)
            // Gold
            let goldLocal = parseInt(currency.gold)
            console.log(`LOCAL Gold: ${goldLocal}`)
            // Platinum
            let platinumLocal = parseInt(currency.platinum)
            console.log(`LOCAL Platinum: ${platinumLocal}`)
    // LOCAL PUSH
        // Set the correct values in the JSON by adding the pulled values to the user-input values
            // Copper
            currency.copper = copperLocal + copper
            // Silver
            currency.silver = silverLocal + silver
            // Electrum
            currency.electrum = electrumLocal + electrum
            // Gold
            currency.gold = goldLocal + gold
            // Platinum
            currency.platinum = platinumLocal + platinum
            // Log it
            console.log('CURRENCY (POST UPDATE)')
            console.log(currency)
    // WRITE TO LOCAL STORAGE
        // Currency
        localStorage.setItem(`${name}.currency`, JSON.stringify(currency))
    // CLEAR TEXT BOXES
        // Copper
        document.getElementById('addCopper').value = ''
        // Silver
        document.getElementById('addSilver').value = ''
        // Electrum
        document.getElementById('addElectrum').value = ''
        // Gold
        document.getElementById('addGold').value = ''
        // Platinum
        document.getElementById('addPlatinum').value = ''
    // UPDATEE CURRENCY
    updateCurrency('copper_display')
    updateCurrency('silver_display')
    updateCurrency('electrum_display')
    updateCurrency('gold_display')
    updateCurrency('platinum_display')
    totalCurrency('copperTotal')
    totalCurrency('silverTotal')
    totalCurrency('electrumTotal')
    totalCurrency('goldTotal')
    totalCurrency('platinumTotal')
}
// Function to update currencies
function updateCurrency(id){
    // Pull the currency from the id
    let currency = id.replace('_display', '')
    // Character Name
    let a = document.getElementById("characterList")
    let name = a.options[a.selectedIndex].value
    // Pull data from Local Storage
    var currencyValue = JSON.parse(localStorage.getItem(`${name}.currency`))[currency]
    console.log(`${currency}: ${currencyValue}`)
    // Update the displayed text
    document.getElementById(id).innerHTML = currencyValue.toLocaleString()
}
// Function to purchase something
function purchase(){
    // USER INPUTS
        // Get Copper
        let copper = -parseInt(document.getElementById('addCopper').value)
            // If copper is null set it to 0
            if (!copper) {
                copper = 0
            }
        console.log(`USER Copper: ${copper}`)
        // Get Silver
        let silver = -parseInt(document.getElementById('addSilver').value)
            // If silver is null set it to 0
            if (!silver) {
                silver = 0
            }
        console.log(`USER Silver: ${silver}`)
        // Get Electrum
        let electrum = -parseInt(document.getElementById('addElectrum').value)
            // If electrum is null set it to 0
            if (!electrum) {
                electrum = 0
            }
        console.log(`USER Electrum: ${electrum}`)
        // Get Gold
        let gold = -parseInt(document.getElementById('addGold').value)
            // If gold is null set it to 0
            if (!gold) {
                gold = 0
            }
        console.log(`USER Gold: ${gold}`)
        // Get Platinum
        let platinum = -parseInt(document.getElementById('addPlatinum').value)
            // If platinum is null set it to 0
            if (!platinum) {
                platinum = 0
            }
        console.log(`USER Platinum: ${platinum}`)
        // Character Name
        let a = document.getElementById("characterList")
        let name = a.options[a.selectedIndex].value
        console.log(`USER Name: ${name}`)
        // Note
        let note = document.getElementById('valueInputNote').value
            // If note is null
            if (!note) {
                note = 'No note.'
            }
        console.log(note)
    // LOCAL STORAGE PULL
        // Currency
        let currency = JSON.parse(localStorage.getItem(`${name}.currency`))
        console.log('CURRENCY')
        console.log(currency)
        // Currency Variables
            // Copper
            let copperLocal = parseInt(currency.copper)
            console.log(`LOCAL Copper: ${copperLocal}`)
            // Silver
            let silverLocal = parseInt(currency.silver)
            console.log(`LOCAL Silver: ${silverLocal}`)
            // Electrum
            let electrumLocal = parseInt(currency.electrum)
            console.log(`LOCAL Electrum: ${electrumLocal}`)
            // Gold
            let goldLocal = parseInt(currency.gold)
            console.log(`LOCAL Gold: ${goldLocal}`)
            // Platinum
            let platinumLocal = parseInt(currency.platinum)
            console.log(`LOCAL Platinum: ${platinumLocal}`)
        // Transaction
            // Transactions object array
            let transactions = JSON.parse(localStorage.getItem(`${name}.transactions`))
            console.log(transactions)
            // Transaction ID
            let tranID = JSON.parse(localStorage.getItem(`${name}.tranID`))
            // Transaction Variables
            let transactionArray = {"ID": tranID, "type": "purchase", "copper": copper, "silver": silver, "electrum": electrum, "gold": gold, "platinum": platinum, "note": note}
    // NON-SUFFICIENT FUNDS
        // Complex implemenatation
        // Pulls the total for the currency(ies) used and check to make sure the purchase value is less than the stored value
        // Then converts the purchase price to other denominations
        // Convert the denominations to gold
        let copperGold = copper / 100
        let silverGold = silver / 10
        let electrumGold = electrum / 2
        let goldGold = gold * 1
        let platinumGold = platinum * 10
        // Sum them
        let sumGold = copperGold + silverGold + electrumGold + goldGold + platinumGold
        // Pull the Gold Total and compare
        let goldTotal = parseFloat(document.getElementById('goldTotal').innerHTML)
        // Compare
        if (Math.abs(sumGold) > goldTotal) {
            alert(`Can you really make a purchase that costs ${Math.abs(sumGold)} gp while only having ${goldTotal} gp? Cheeky ;)`)
            return
        }
        // Simple implemenation
        // Only on a per-denomination basis
        if (Math.abs(copper) > copperLocal) {
            alert(`Can you really make a purchase that costs ${Math.abs(copper)} cp while only having ${copperLocal} cp? Cheeky ;)`)
            return
        }
        if (Math.abs(silver) > silverLocal) {
            alert(`Can you really make a purchase that costs ${Math.abs(silver)} sp while only having ${silverLocal} sp? Cheeky ;)`)
            return
        }
        if (Math.abs(electrum) > electrumLocal) {
            alert(`Can you really make a purchase that costs ${Math.abs(electrum)} ep while only having ${electrumLocal} ep? Cheeky ;)`)
            return
        }
        if (Math.abs(gold) > goldLocal) {
            alert(`Can you really make a purchase that costs ${Math.abs(gold)} gp while only having ${goldLocal} gp? Cheeky ;)`)
            return
        }
        if (Math.abs(platinum) > platinumLocal) {
            alert(`Can you really make a purchase that costs ${Math.abs(platinum)} pp while only having ${platinumLocal} pp? Cheeky ;)`)
            return
        }
    // NONSUFFICIENT DENOMINATION FUNDS
        // E.G. If the user wants to spend 14 gp, but only has 12 gp, then convert the remainder from remaining denominations
        // // Get remainders
        //     // Copper
        //     let remainderCopper = Math.abs(copper) - copperLocal
        //     // Silver
        //     let remainderSilver = Math.abs(silver) - silverLocal
        //     // Electrum
        //     let remainderElectrum = Math.abs(electrum) - electrumLocal
        //     // Gold
        //     let remainderGold = Math.abs(gold) - goldLocal
        //     // Platinum
        //     let remainderPlatinum = Math.abs(platinum) - platinumLocal
        // // Tackle the remainders
        // if (remainderCopper > 0) {

        // } else if (remainderSilver > 0){

        // } else if (remainderElectrum > 0){

        // } else if (remainderGold > 0){

        // } else if (remainderPlatinum > 0){

        // }
        // return
    // LOCAL PUSH
        // Set the correct values in the JSON by adding the pulled values to the user-input values
            // Copper
            currency.copper = copperLocal + copper
            // Silver
            currency.silver = silverLocal + silver
            // Electrum
            currency.electrum = electrumLocal + electrum
            // Gold
            currency.gold = goldLocal + gold
            // Platinum
            currency.platinum = platinumLocal + platinum
            // Log it
            console.log('CURRENCY (POST UPDATE)')
            console.log(currency)
        // Transactions
            // Push the new object to the object array
            transactions.push(transactionArray)
            // Set up the new Tran ID
            tranID = tranID + 1
    // WRITE TO LOCAL STORAGE
        // Currency
        localStorage.setItem(`${name}.currency`, JSON.stringify(currency))
        // Transaction
        localStorage.setItem(`${name}.transactions`, JSON.stringify(transactions))
        // Transaction ID
        localStorage.setItem(`${name}.tranID`, tranID)
    // CLEAR TEXT BOXES
        // Copper
        document.getElementById('addCopper').value = ''
        // Silver
        document.getElementById('addSilver').value = ''
        // Electrum
        document.getElementById('addElectrum').value = ''
        // Gold
        document.getElementById('addGold').value = ''
        // Platinum
        document.getElementById('addPlatinum').value = ''
        // Note
        document.getElementById('valueInputNote').value = ''
    // UPDATEE CURRENCY
    updateCurrency('copper_display')
    updateCurrency('silver_display')
    updateCurrency('electrum_display')
    updateCurrency('gold_display')
    updateCurrency('platinum_display')
    // UPDATE THE TABLE
    displayColumns(transactions)
}
// Function to sell something
function sell(){
    // USER INPUTS
        // Get Copper
        let copper = parseInt(document.getElementById('addCopper').value)
            // If copper is null set it to 0
            if (!copper) {
                copper = 0
            }
        console.log(`USER Copper: ${copper}`)
        // Get Silver
        let silver = parseInt(document.getElementById('addSilver').value)
            // If silver is null set it to 0
            if (!silver) {
                silver = 0
            }
        console.log(`USER Silver: ${silver}`)
        // Get Electrum
        let electrum = parseInt(document.getElementById('addElectrum').value)
            // If electrum is null set it to 0
            if (!electrum) {
                electrum = 0
            }
        console.log(`USER Electrum: ${electrum}`)
        // Get Gold
        let gold = parseInt(document.getElementById('addGold').value)
            // If gold is null set it to 0
            if (!gold) {
                gold = 0
            }
        console.log(`USER Gold: ${gold}`)
        // Get Platinum
        let platinum = parseInt(document.getElementById('addPlatinum').value)
            // If platinum is null set it to 0
            if (!platinum) {
                platinum = 0
            }
        console.log(`USER Platinum: ${platinum}`)
        // Character Name
        let a = document.getElementById("characterList")
        let name = a.options[a.selectedIndex].value
        console.log(`USER Name: ${name}`)
        // Note
        let note = document.getElementById('valueInputNote').value
            // If note is null
            if (!note) {
                note = 'No note.'
            }
        console.log(note)
    // LOCAL STORAGE PULL
        // Currency
        let currency = JSON.parse(localStorage.getItem(`${name}.currency`))
        console.log('CURRENCY')
        console.log(currency)
        // Currency Variables
            // Copper
            let copperLocal = parseInt(currency.copper)
            console.log(`LOCAL Copper: ${copperLocal}`)
            // Silver
            let silverLocal = parseInt(currency.silver)
            console.log(`LOCAL Silver: ${silverLocal}`)
            // Electrum
            let electrumLocal = parseInt(currency.electrum)
            console.log(`LOCAL Electrum: ${electrumLocal}`)
            // Gold
            let goldLocal = parseInt(currency.gold)
            console.log(`LOCAL Gold: ${goldLocal}`)
            // Platinum
            let platinumLocal = parseInt(currency.platinum)
            console.log(`LOCAL Platinum: ${platinumLocal}`)
        // Transaction
            // Transactions object array
            let transactions = JSON.parse(localStorage.getItem(`${name}.transactions`))
            console.log(transactions)
            // Transaction ID
            let tranID = JSON.parse(localStorage.getItem(`${name}.tranID`))
            // Transaction Variables
            let transactionArray = {"ID": tranID, "type": "sale", "copper": copper, "silver": silver, "electrum": electrum, "gold": gold, "platinum": platinum, "note": note}
    // LOCAL PUSH
        // Set the correct values in the JSON by adding the pulled values to the user-input values
            // Copper
            currency.copper = copperLocal + copper
            // Silver
            currency.silver = silverLocal + silver
            // Electrum
            currency.electrum = electrumLocal + electrum
            // Gold
            currency.gold = goldLocal + gold
            // Platinum
            currency.platinum = platinumLocal + platinum
            // Log it
            console.log('CURRENCY (POST UPDATE)')
            console.log(currency)
        // Transactions
            // Push the new object to the object array
            transactions.push(transactionArray)
            // Set up the new Tran ID
            tranID = tranID + 1
    // WRITE TO LOCAL STORAGE
        // Currency
        localStorage.setItem(`${name}.currency`, JSON.stringify(currency))
        // Transaction
        localStorage.setItem(`${name}.transactions`, JSON.stringify(transactions))
        // Transaction ID
        localStorage.setItem(`${name}.tranID`, tranID)
    // CLEAR TEXT BOXES
        // Copper
        document.getElementById('addCopper').value = ''
        // Silver
        document.getElementById('addSilver').value = ''
        // Electrum
        document.getElementById('addElectrum').value = ''
        // Gold
        document.getElementById('addGold').value = ''
        // Platinum
        document.getElementById('addPlatinum').value = ''
        // Note
        document.getElementById('valueInputNote').value = ''
    // UPDATEE CURRENCY
    updateCurrency('copper_display')
    updateCurrency('silver_display')
    updateCurrency('electrum_display')
    updateCurrency('gold_display')
    updateCurrency('platinum_display')
    // UPDATE THE TABLE
    displayColumns(transactions)
}
// Function to delete everything
function deleteEverything(){
    var confirmation = confirm("Are you sure you want to delete everything? This is irreversible!");
    if (confirmation) {
        localStorage.clear()
        location.reload()
    } 
}
// Function to calculate the total of a specified currency
function totalCurrency(id){
    // Pull the currency from the id
    let currency = id.replace('Total', '')
    // Character Name
    let a = document.getElementById("characterList")
    let name = a.options[a.selectedIndex].value
    // Pull JSON from local storage
    let data = JSON.parse(localStorage.getItem(`${name}.currency`))
    console.log(data)
    // Get all the currencies
        // Copper
        let copper = parseInt(data.copper)
        // Silver
        let silver = parseInt(data.silver)
        // Electrum
        let electrum = parseInt(data.electrum)
        // Gold
        let gold = parseInt(data.gold)
        // Platinum
        let platinum = parseInt(data.platinum)
    // Handle the multiplication
    switch(currency){
        case 'copper':
            // Convert each currency into copper
            copper = copper * 1
            silver = silver * 10
            electrum = electrum * 50
            gold = gold * 100
            platinum = platinum * 1000
            var sum = copper + silver + electrum + gold + platinum
            break
        case 'silver':
            // Convert each currency into silver
            copper = copper * 0.1
            silver = silver * 1
            electrum = electrum * 5
            gold = gold * 10
            platinum = platinum * 100
            var sum = copper + silver + electrum + gold + platinum
            break
        case 'electrum':
            // Convert each currency into electrum
            copper = copper / 50
            silver = silver * 0.2
            electrum = electrum * 1
            gold = gold * 2
            platinum = platinum * 20
            var sum = copper + silver + electrum + gold + platinum
            break
        case 'gold':
            // Covnert each currency into gold
            copper = copper / 100
            silver = silver * 0.1
            electrum = electrum * 0.5
            gold = gold * 1
            platinum = platinum * 10
            var sum = copper + silver + electrum + gold + platinum
            break
        case 'platinum':
            // Convert each currency into platinum
            copper = copper / 1000
            silver = silver / 100
            electrum = electrum / 20
            gold = gold / 10
            platinum = platinum * 1
            var sum = copper + silver + electrum + gold + platinum
            break
       
    }
    // Update the displayed text
    document.getElementById(id).innerHTML = sum.toLocaleString()
}
// Function to update the table
function updateTable(){
    // Character Name
    let a = document.getElementById("characterList")
    let name = a.options[a.selectedIndex].value
    // Pull JSON from local storage
    let data = JSON.parse(localStorage.getItem(`${name}.transactions`))
    // Populate the table
    displayColumns(data)
}