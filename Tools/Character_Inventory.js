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
        let copper = parseFloat(document.getElementById('addCopper').value)
            // If copper is null set it to 0
            if (!copper) {
                copper = 0
            }
        console.log(`USER Copper: ${copper}`)
        // Get Silver
        let silver = parseFloat(document.getElementById('addSilver').value)
            // If silver is null set it to 0
            if (!silver) {
                silver = 0
            }
        console.log(`USER Silver: ${silver}`)
        // Get Electrum
        let electrum = parseFloat(document.getElementById('addElectrum').value)
            // If electrum is null set it to 0
            if (!electrum) {
                electrum = 0
            }
        console.log(`USER Electrum: ${electrum}`)
        // Get Gold
        let gold = parseFloat(document.getElementById('addGold').value)
            // If gold is null set it to 0
            if (!gold) {
                gold = 0
            }
        console.log(`USER Gold: ${gold}`)
        // Get Platinum
        let platinum = parseFloat(document.getElementById('addPlatinum').value)
            // If platinum is null set it to 0
            if (!platinum) {
                platinum = 0
            }
        console.log(`USER Platinum: ${platinum}`)
        // Character Name
        let a = document.getElementById("characterList")
        let name = a.options[a.selectedIndex].value
        console.log(`USER Name: ${name}`)
        // Check if any have decimals
            // Copper
            let copperDec = (copper - Math.floor(copper))
            console.log(copperDec)
            // Silver   
            let silverDec = (silver - Math.floor(silver))
            // Electrum
            let electrumDec = (electrum - Math.floor(electrum))
            // Gold
            let goldDec = (gold - Math.floor(gold))
            // Platinum
            let platDec = (platinum - Math.floor(platinum))
            // If contain decimals
            if (copperDec != 0 || silverDec != 0 || electrumDec != 0 || goldDec != 0 || platDec != 0){
                alert(`This tool doesn't currently support decimals. I'm sorry :(`)
                return
            }
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
        let copper = parseFloat(document.getElementById('addCopper').value)
            // If copper is null set it to 0
            if (!copper) {
                copper = 0
            }
        console.log(`USER Copper: ${copper}`)
        // Get Silver
        let silver = parseFloat(document.getElementById('addSilver').value)
            // If silver is null set it to 0
            if (!silver) {
                silver = 0
            }
        console.log(`USER Silver: ${silver}`)
        // Get Electrum
        let electrum = parseFloat(document.getElementById('addElectrum').value)
            // If electrum is null set it to 0
            if (!electrum) {
                electrum = 0
            }
        console.log(`USER Electrum: ${electrum}`)
        // Get Gold
        let gold = parseFloat(document.getElementById('addGold').value)
            // If gold is null set it to 0
            if (!gold) {
                gold = 0
            }
        console.log(`USER Gold: ${gold}`)
        // Get Platinum
        let platinum = parseFloat(document.getElementById('addPlatinum').value)
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
        
        // Check if any have decimals
            // Copper
            let copperDec = (copper - Math.floor(copper))
            console.log(copperDec)
            // Silver   
            let silverDec = (silver - Math.floor(silver))
            // Electrum
            let electrumDec = (electrum - Math.floor(electrum))
            // Gold
            let goldDec = (gold - Math.floor(gold))
            // Platinum
            let platDec = (platinum - Math.floor(platinum))
            // If contain decimals
            if (copperDec != 0 || silverDec != 0 || electrumDec != 0 || goldDec != 0 || platDec != 0){
                alert(`This tool doesn't currently support decimals. I'm sorry :(`)
                return
            }
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

    // NON-SUFFICIENT FUNDS
        // Convert the denominations to gold
        let copperGold1 = copper / 100
        let silverGold1 = silver / 10
        let electrumGold1 = electrum / 2
        let goldGold1 = gold * 1
        let platinumGold1 = platinum * 10
        // Sum them
        let sumGold = copperGold1 + silverGold1 + electrumGold1 + goldGold1 + platinumGold1
        // Pull the Gold Total and compare
        let goldTotal = parseFloat(document.getElementById('goldTotal').innerHTML.replace(",", ""))
        console.log(`Total Gold: ${goldTotal}`)
        // If Non-sufficient Funds dispaly a modal
        if (Math.abs(sumGold) > goldTotal) {
            // Alert the user that they don't have enouhg funds via a modal
            var modal = document.getElementById("myModal");
            // Display the modal
            modal.style.display = "block";
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];
            // USER CLICKS
                // When the user clicks on <span> (x), close the modal
                span.onclick = function() {
                    modal.style.display = "none";
                }
                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                    if (event.target == modal) {
                    modal.style.display = "none";
                    }
                }
            // Set the modal's innerHTML
            document.getElementById('modal-p').innerHTML = `<h1>Non-sufficient Funds</h1> Can you really make a purchase that costs ${Math.abs(sumGold).toLocaleString()} gp while only having ${goldTotal.toLocaleString()} gp? Cheeky 😉 <br><br><I>Hint: Take a peek a the values that follow Total in the Denomination box below.</I>`

            // alert(`Can you really make a purchase that costs ${Math.abs(sumGold)} gp while only having ${goldTotal} gp? Cheeky ;) Hint: Take a peek a the values that follow Total in the Denomination box below.`)

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
            return
        }
    
    // ++++++++++++++++++++++++++++++++++++++++
    //               VERSION 5
    // ++++++++++++++++++++++++++++++++++++++++

    // NONSUFFICIENT DENOMINATION FUNDS 
            // E.G. If the user wants to spend 14 gp, but only has 12 gp, and, in total, has 22 gp, then convert the remainder from remaining denominations
            if (copper > copperLocal || silver > silverLocal || electrum > electrumLocal || gold > goldLocal || platinum > platinumLocal){
                // Convert all the denominations to copper
                    // Copper
                    let cpCopper = copper * 1
                    // Silver
                    let spCopper = silver * 10
                    // Electrum
                    let epCopper = electrum * 50
                    // Gold
                    let gpCopper = gold * 100
                    // Platinum
                    let ppCopper = platinum * 1000
                    // Sum
                    let sumCopper = cpCopper + spCopper + epCopper + gpCopper + ppCopper
                // Extract each denomination from the sum
                    // Copper
                    let cp = Math.floor(((sumCopper % 10) / 1))
                    // Silver
                    let sp = Math.floor(((sumCopper % 100) / 10))
                    // Gold
                    let gp = Math.floor((sumCopper % 1000) / 100)
                    // Platinum
                    let pp = Math.floor(sumCopper / 1000)
                // Subtract each currency from the character's inventory
                    // Copper
                    let cpRemain = copperLocal - cp
                    // Silver
                    let spRemain = silverLocal - sp
                    // Gold
                    let gpRemain = goldLocal - gp
                    // Platinum
                    let ppRemain = platinumLocal - pp
                    debugger
                // Subtract from the real local currency if each denomination is 0 or greater
                    // Copper
                    if (cpRemain >= 0){copperLocal = copperLocal - cp}
                    else{
                        // Get the absolute value to determine how much is remaining
                        var rCP = Math.abs(cpRemain)
                        // Add cpRemain to spRemain and convert it to silver
                        spRemain = spRemain + (rCP / 10)
                    }
                    // Silver
                    if (spRemain >= 0){silverLocal = silverLocal - sp}
                    else {
                        // Get the absolute value to determine how much is remaining
                        var rSP = Math.abs(spRemain)
                        // Add spRemain to gpRemain and convert it to gold
                        gpRemain = gpRemain + (rSP / 10)
                    }
                    // Gold
                    if (gpRemain >= 0){goldLocal = goldLocal - gp}
                    else {
                        // Get the absolute value to determine how much is remaining
                        var rGP = Math.abs(gpRemain)
                        // Add gpRemain to ppRemain and convert it to platinum
                        ppRemain = ppRemain + (rGP / 10)
                    }
                    // Platinum
                    platIF: if (ppRemain >= 0){platinumLocal = platinumLocal - pp}
                    else {
                        // Get the absolute value to determine how much is remaining
                        var rPP = Math.abs(ppRemain)
                        // Set plat local to 0 b/c it's just all been spent
                        platinumLocal = 0
                        // GOLD
                            // Convert rPP to gold
                            let gPP = rPP * 10
                            // Subtract it from gold in the character's bag
                            var gpR = goldLocal - gPP
                            if  (gpR >= 0){
                                // Subtract the remaining gold from the gold in the character's bag
                                goldLocal = goldLocal - gPP
                                // Break out of this if-else statement
                                break platIF
                            } else {
                                // Compute the remainder
                                var remainGP = Math.abs(gpR)
                                // Set gold in the character's bag to 0
                                goldLocal = 0
                            }
                        // ELECTRUM
                            // Convert the leftover gold to electrum
                            var eGP = remainGP * 2
                            // Subtract it from electrum in the character's bag
                            var epR = electrumLocal - eGP
                            if  (epR >= 0){
                                // Subtract the remaining electrum from the electurm in the character's bag
                                electrumLocal = electrumLocal - eGP
                                // Break out of this if-else statement
                                break platIF
                            } else {
                                // Compute the remainder
                                var remainEP = Math.abs(epR)
                                // Set electrum in the character's bag to 0
                                electrumLocal = 0
                            }
                        // SILVER
                            // Convert the leftover electrum into silver
                            var sEP = remainEP * 5
                            // Subtract it from silver in the character's bag
                            var spR = silverLocal - sEP
                            if (spR >= 0){
                                // Subtract the remaining silver from the silver in the character's bag
                                silverLocal = silverLocal - sEP
                                // Break out of this if-else statement
                                break platIF
                            } else {
                                // COmpute the remainder
                                var remainSP = Math.abs(spR)
                                // Set silver in the character's bag to 0
                                silverLocal = 0
                            }
                        // COPPER
                            // Convert the remaining silver into copper
                            var cSP = remainSP * 10
                            // Subtract it from the copper in the character's bag
                            var cpR = copperLocal - cSP
                            // If
                            if (cpR >= 0){
                                // Subtract the remaining copper from the copper in the character's bag
                                copperLocal = copperLocal - cSP
                                // Break out of this if-else statement
                                break platIF
                            } else {
                                // Compute the remainder
                                console.log(`NSF: Copper -- Means that the previous transaction cost more than the sum of all denominations in bag.`)
                            }                            
                    }
                    // LOCAL PUSH
                        // Transaction
                            // Transaction ID
                            var tranID = JSON.parse(localStorage.getItem(`${name}.tranID`))
                            // Log stuff
                            console.log(`Copper: ${currency.copper}
                                        Silver: ${currency.silver}
                                        Electrum: ${currency.electrum}
                                        Gold: ${currency.gold}
                                        Platinum: ${currency.platinum}`)
                            // Transaction Variables
                            var transactionArray = {"ID": tranID, 
                                                    "type": "purchase", 
                                                    "copper": (cp + parseInt(currency.copper)) - copperLocal, 
                                                    "silver": (sp + parseInt(currency.silver)) - silverLocal, 
                                                    "electrum": (parseInt(currency.electrum)) - electrumLocal, 
                                                    "gold": (gp + parseInt(currency.gold)) - goldLocal, 
                                                    "platinum": (pp) + ppRemain, 
                                                    "note": note}
                            console.log(transactionArray)
                        // Set the correct values in the JSON by adding the pulled values to the user-input values
                            // Copper
                            currency.copper = copperLocal
                            // Silver
                            currency.silver = silverLocal
                            // Electrum
                            currency.electrum = electrumLocal
                            // Gold
                            currency.gold = goldLocal
                            // Platinum
                            currency.platinum = platinumLocal
                            // Log it
                            console.log('CURRENCY (POST UPDATE)')
                            console.log(currency)
                        
            } else {
            // LOCAL PUSH
                // Set the correct values in the JSON by adding the pulled values to the user-input values
                    // Copper
                    currency.copper = copperLocal - copper
                    // Silver
                    currency.silver = silverLocal - silver
                    // Electrum
                    currency.electrum = electrumLocal - electrum
                    // Gold
                    currency.gold = goldLocal - gold
                    // Platinum
                    currency.platinum = platinumLocal - platinum
                    // Log it
                    console.log('CURRENCY (POST UPDATE)')
                    console.log(currency)
                // Transaction
                    // Transaction ID
                    var tranID = JSON.parse(localStorage.getItem(`${name}.tranID`))
                    // Transaction Variables
                    var transactionArray = {"ID": tranID, "type": "purchase", "copper": copper, "silver": silver, "electrum": electrum, "gold": gold, "platinum": platinum, "note": note}
            }
    // LOCAL PUSH
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
    // UPDATE TOTALS
    totalCurrency('copperTotal')
    totalCurrency('silverTotal')
    totalCurrency('electrumTotal')
    totalCurrency('goldTotal')
    totalCurrency('platinumTotal')
    // DISPLAY THE CORRECT TRANSACTIONS TABLE
    updateTable()
    // DISPLAY THE TRANSACTIOSN TABLE
    displayColumns(transactions, 'styled-table')
}
// Function to convert all other currency into the specified currency
function convertDenomination(cp, cpl, sp, spl, ep, epl, gp, gpl, pp, ppl){
    // Make the parameters' names self-explanatory
        // Coppper    
        let inputCopper = cp
        let bagCopper = cpl
        // Silver
        let inputSilver = sp
        let bagSilver = spl
        // Electrum
        let inputElectrum = ep
        let bagElectrum = epl
        // Gold
        let inputGold = gp
        let bagGold = gpl
        // Platinum
        let inputPlatinum = pp
        let bagPlatinum = ppl
    // Find the remainder
        // Copper
        let remainderCopper = Math.abs(inputCopper) - bagCopper
        // Silver
        let remainderSilver = Math.abs(inputSilver) - bagSilver
        // Electrum
        let remainderElectrum = Math.abs(inputElectrum) - bagElectrum
        // Gold
        let remainderGold = Math.abs(inputGold) - bagGold
        // Platinum
        let remainderPlatinum = Math.abs(inputPlatinum) - bagPlatinum
    // If any of the above is greater than 0
    //if (remainderCopper > 0 || remainderSilver > 0 || remainderElectrum > 0 || remainderGold > 0 || rem)
}
// Function to sell something
function sell(){
    // USER INPUTS
        // Get Copper
        let copper = parseFloat(document.getElementById('addCopper').value)
            // If copper is null set it to 0
            if (!copper) {
                copper = 0
            }
        console.log(`USER Copper: ${copper}`)
        // Get Silver
        let silver = parseFloat(document.getElementById('addSilver').value)
            // If silver is null set it to 0
            if (!silver) {
                silver = 0
            }
        console.log(`USER Silver: ${silver}`)
        // Get Electrum
        let electrum = parseFloat(document.getElementById('addElectrum').value)
            // If electrum is null set it to 0
            if (!electrum) {
                electrum = 0
            }
        console.log(`USER Electrum: ${electrum}`)
        // Get Gold
        let gold = parseFloat(document.getElementById('addGold').value)
            // If gold is null set it to 0
            if (!gold) {
                gold = 0
            }
        console.log(`USER Gold: ${gold}`)
        // Get Platinum
        let platinum = parseFloat(document.getElementById('addPlatinum').value)
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
        // Check if any have decimals
            // Copper
            let copperDec = (copper - Math.floor(copper))
            console.log(copperDec)
            // Silver   
            let silverDec = (silver - Math.floor(silver))
            // Electrum
            let electrumDec = (electrum - Math.floor(electrum))
            // Gold
            let goldDec = (gold - Math.floor(gold))
            // Platinum
            let platDec = (platinum - Math.floor(platinum))
            // If contain decimals
            if (copperDec != 0 || silverDec != 0 || electrumDec != 0 || goldDec != 0 || platDec != 0){
                alert(`This tool doesn't currently support decimals. I'm sorry :(`)
                return
            }
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
    displayColumns(transactions, 'styled-table')
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
    displayColumns(data, 'styled-table')
}