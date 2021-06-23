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
        let goldTotal = parseFloat(document.getElementById('goldTotal').innerHTML)
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
        }
// NONSUFFICIENT DENOMINATION FUNDS
    // E.G. If the user wants to spend 14 gp, but only has 12 gp, and, in total, has 22 gp, then convert the remainder from remaining denominations
    if (Math.abs(copper) > copperLocal || Math.abs(silver) > silverLocal || Math.abs(electrum) > electrumLocal || Math.abs(gold) > goldLocal || Math.abs(platinum) > platinumLocal){
        // Convert all the inputs into platinum
            // Copper
            let copperPlat = Math.abs(copper) / 1000
            // Silver
            let silverPlat = Math.abs(silver) / 100
            // Electrum
            let electrumPlat = Math.abs(electrum) / 20
            // Gold
            let goldPlat = Math.abs(gold) / 10
            // Platinum
            let platinumPlat = Math.abs(platinum) * 1
            // Sum them
            let sumPlat = copperPlat + silverPlat + electrumPlat + goldPlat + platinumPlat
        // Do stuff
            // Floor the plat
            let remainder = Math.floor(sumPlat)
            // If less than zero
            if (remainder > 0){
                remainder = remainder - platinumLocal
                // Set platinum local to 0
                platinumLocal = 0
            }
            // Add the gold that's left
            var goldExtra = Math.floor((sumPlat % 1) * 10)
            // Convert it to gold
            remainder = (remainder * 10) + goldExtra
            // If remainder is greater than 0
            if (remainder > 0){
                // Subtract the local gold
                remainder = remainder - goldLocal
                // Check if remainder is less than zero
                if (remainder < 0){
                    goldLocal = Math.abs(remainder)
                } else {
                    // Set local gold to 0
                    goldLocal = 0
                }
            }
            // Convert it to electrum from gold
            remainder = (remainder * 2)
            // If remainder is greater than 0
            if (remainder > 0){
                // Subtract the local electrum
                remainder = remainder - electrumLocal
                // Check if remainder is less than zero
                if (remainder < 0){
                    electrumLocal = Math.abs(remainder)
                } else {
                    // Set local electrum to 0
                    electrumLocal = 0
                }
            }
            // Add the extra silver
            var silverExtra = Math.floor((sumPlat % 1) * 100)
            // Convert the electrum to silver
            remainder = (remainder * 5) + silverExtra
            // If remainder is less than 0
            if (remainder > 0){
                // Subtract the local silver
                remainder = remainder - silverLocal
                // Check if remainder is less than zero
                if (remainder < 0){
                    silverLocal = Math.abs(remainder)
                } else {
                    silverLocal = 0
                }
            }
            // Add the extra silver
            var copperExtra = Math.floor((sumPlat % 1) * 1000)
            // Convert the silver to copper
            remainder = (remainder * 10) + copperExtra
            // If remainder is less than 0
            if (remainder > 0){
                // Subtract the local silver
                remainder = remainder - copperLocal
                // Check if remainder is less than zero
                if (remainder < 0){
                    copperLocal = Math.abs(remainder)
                } else {
                    copperLocal = 0
                }
            }
    } else {
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
    }


// +++++++++++++++++++++++++++++++++++
//              BLAH
// +++++++++++++++++++++++++++++++++++

// NONSUFFICIENT DENOMINATION FUNDS
    // E.G. If the user wants to spend 14 gp, but only has 12 gp, then convert the remainder from remaining denominations
    // Get remainders
        // Copper
        let remainderCopper = Math.abs(copper) - copperLocal
        // Silver
        let remainderSilver = Math.abs(silver) - silverLocal
        // Electrum
        let remainderElectrum = Math.abs(electrum) - electrumLocal
        // Gold
        let remainderGold = Math.abs(gold) - goldLocal
        // Platinum
        let remainderPlatinum = Math.abs(platinum) - platinumLocal
    // Tackle the remainders
    if (remainderCopper > 0) {
        // Convert the remaining copper to other denominations
        // To silver
        var copperSilver = remainderCopper * 0.1
        // To electrum
        var copperElectrum = remainderCopper / 50
        // To gold
        var copperGold = remainderCopper * 0.01
        // To platinum
        var copperPlatinum = remainderCopper * 0.001
        // Check to see if the PC has enough of each denomination
        if (copperSilver < silverLocal){
            // Round up the needed amount
            const ceil  = Math.ceil(copperSilver)
            // Subtract the needed amount from the OG omount
            silver = silver - ceil
            // Convert the needed amount back to copper
            const extra = ceil * 10
            // Add it to the copper inventory
            copperLocal = copperLocal - extra
        } else if (copperElectrum < electrumLocal){
            // Round up the needed amount
            const ceil = Math.ceil(coppperElectrum)
            // Subtract the needed amount from the OG omount
            electrum = electrum - ceil
            // Convert the needed amount back to electrum
            const extra = ceil * 50
            // Add it to the copper inventory
            copperLocal = copperLocal - extra
        } else if (copperGold < goldLocal){
            // Round up the needed amount
            const ceil = Math.ceil(copperGold)
            // Subtract the needed amount from the OG omount
            gold = gold - ceil
            // Convert the needed amount back to electrum
            const extra = ceil * 100
            // Add it to the copper inventory
            copperLocal = copperLocal - extra
        } else if (copperPlatinum < platinumLocal){
            // Round up the needed amount
            const ceil = Math.ceil(copperPlatinum)
            // Subtract the needed amount from the OG omount
            platinum = platinum - ceil
            // Convert the needed amount back to electrum
            const extra = ceil * 1000
            // Add it to the copper inventory
            copperLocal = copperLocal - extra
        }
    } else if (remainderSilver > 0){

    } else if (remainderElectrum > 0){

    } else if (remainderGold > 0){

    } else if (remainderPlatinum > 0){

    }

// Convert each denomination to copper
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

// NON-SUFFICIENT DENOMINATIONS
    // E.G. if the user tried to buy something that costs 12 gp, but they only have 8 gp, but if all denominations are added together, they actually have 22 gp.
    if (copper > copperLocal) {
        // Get the remainder of copper left after subtracting all that is in the character's inventory
        var rCopper = copper - copperLocal
        // Set the copper input to what's in the character's inventory and subtract it all
        copper = copperLocal
        // Now we are left with the remainder which has to be converted to silver
    }         
    if (silver > silverLocal) {

    } 
    if (electrum > electrumLocal) {

    } 
    if (gold > goldLocal) {

    }
    if (platinum > platinumLocal) {

    }

// +++++++++++++++++++++++++++++++++++
//           VERSION 4
// +++++++++++++++++++++++++++++++++++

// NONSUFFICIENT DENOMINATION FUNDS 
        // E.G. If the user wants to spend 14 gp, but only has 12 gp, and, in total, has 22 gp, then convert the remainder from remaining denominations
        // Get remainders
        debugger
            // Copper
            let remainderCopper = copper - copperLocal
            // Silver
            let remainderSilver = silver - silverLocal
            // Electrum
            let remainderElectrum = electrum - electrumLocal
            // Gold
            let remainderGold = gold - goldLocal
            // Platinum
            let remainderPlatinum = platinum - platinumLocal
        // COPPER
        if (remainderCopper > 0) {
            // Convert the remaining copper to other denominations
            // To silver
            var copperSilver = remainderCopper * 0.1
            // To electrum
            var copperElectrum = remainderCopper / 50
            // To gold
            var copperGold = remainderCopper * 0.01
            // To platinum
            var copperPlatinum = remainderCopper * 0.001
            // Check to see if the PC has enough of each denomination
            if (copperSilver < silverLocal){
                // Round up the needed amount
                const ceil  = Math.ceil(copperSilver)
                // Subtract the needed amount from the OG omount
                silver = Math.abs(silver - ceil)
                // Convert the needed amount back to copper
                const extra = ceil * 10
                // Add it to the copper inventory
                copperLocal = copperLocal + extra
            } else if (copperElectrum < electrumLocal){
                // Round up the needed amount
                const ceil = Math.ceil(copperElectrum)
                // Subtract the needed amount from the OG omount
                electrum = Math.abs(electrum - ceil)
                // Convert the needed amount back to electrum
                const extra = ceil * 50
                // Add it to the copper inventory
                copperLocal = copperLocal + extra
            } else if (copperGold < goldLocal){
                // Round up the needed amount
                const ceil = Math.ceil(copperGold)
                // Subtract the needed amount from the OG omount
                gold = Math.abs(gold - ceil)
                // Convert the needed amount back to electrum
                const extra = ceil * 100
                // Add it to the copper inventory
                copperLocal = copperLocal + extra
            } else if (copperPlatinum < platinumLocal){
                // Round up the needed amount
                const ceil = Math.ceil(copperPlatinum)
                // Subtract the needed amount from the OG omount
                platinum = Math.abs(platinum - ceil)
                // Convert the needed amount back to electrum
                const extra = ceil * 1000
                // Add it to the copper inventory
                copperLocal = copperLocal + extra
            }
        }
        // SILVER
        if (remainderSilver > 0){

        }
        // ELECTRUM
        if (remainderElectrum > 0){

        }
        // GOLD
        if (remainderGold > 0){

        }
        // PLATINUM
        if (remainderPlatinum > 0){

        } else {
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
        }

// ++++++++++++++++++++++++++++++++++++++++
//               VERSION 5
// ++++++++++++++++++++++++++++++++++++++++

// NONSUFFICIENT DENOMINATION FUNDS 
        // E.G. If the user wants to spend 14 gp, but only has 12 gp, and, in total, has 22 gp, then convert the remainder from remaining denominations
        debugger
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
            // Subtract from the real local currency if each denomination is 0 or greater
                // Copper
                if (cpRemain >= 0){copperLocal = copperLocal - cp}
                else{
                    // Get the absolute value to determine how much is remaining
                    var rCP = Math.abs(cpRemain)
                }
                // Silver
                if (spRemain >= 0){silverLocal = silverLocal - sp}
                else {
                    // Get the absolute value to determine how much is remaining
                    var rSP = Math.abs(spRemain)
                }
                // Gold
                if (gpRemain >= 0){goldLocal = goldLocal - gp}
                else {
                    // Get the absolute value to determine how much is remaining
                    var rGP = Math.abs(gpRemain)
                }
                // Platinum
                if (ppRemain >= 0){platinumLocal = platinumLocal - pp}
                else {
                    // Get the absolute value to determine how much is remaining
                    var rPP = Math.abs(ppRemain)
                }
        } else {
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
        }

// ++++++++++++++++++++++++++++++++++++++++
//               VERSION 6
// ++++++++++++++++++++++++++++++++++++++++

// Convert all the denominations to copper
    // Copper
    let cpCopper = copper * 1
    // Silver
    let spCopper = silver * 10
    // Electrum
    let epCopper = electrum * 50
    // Golds
    let gpCopper = gold * 100
    // Platinum
    let ppCopper = platinum * 1000
    // Sum
    let sumCopper = cpCopper + spCopper + epCopper + gpCopper + ppCopper
// Calculate percentage of total for each denomination
    // Pull the total of copper
    let totalCopper = parseInt((document.getElementById('copperTotal').innerHTML).replace(",", ""))
    // Copper
    let cpPrct = copper / totalCopper
    // Silver
    let spPrct = silver / totalCopper
    // Electrum
    let epPrct = electrum / totalCopper
    // Gold
    let gpPrct = gold / totalCopper
    // Platinum
    let ppPrct = platinum / totalCopper
// Calculate the remaining for each currency
    // Subtract the sum of the purchase from the total copper
    let cpRemain = totalCopper - sumCopper
    // Copper
    copperLocal = cpRemain * cpPrct
    // Silver
    silverLocal = (cpRemain * spPrct) / 10
    // Electrum
    electrumLocal = (cpRemain * epPrct) / 50
    // Gold
    goldLocal = (cpRemain * gpPrct) / 100
    // Platinum
    platinumLocal = (cpRemain * ppPrct) / 1000