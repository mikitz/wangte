// Add on change listener to Employees
const empTypes = document.getElementById('emp_types')
empTypes.addEventListener('change', populateEmployees(), false)
// Add on change listener to Miscellaneous Expenses
const miscTypes = document.getElementById("misc_types")
miscTypes.addEventListener('change', populateMiscCosts(), false)
// Function the adds new elements based on skill level selected
function skillLevelListener(){
    // Get the quantity of employee types
    let quantity = parseFloat(document.getElementById('emp_types').value)
    // Loop through each employee ID to see what it's skill is set to
    for (emp = 1; emp < quantity + 1; emp++){   
        // Pull the skill
        // Get the skill
        let b = document.getElementById(`emp_skill${emp}`)
        let skill = b.options[b.selectedIndex].text
        // If skill not unskilled or modest, display things
        if (skill != 'Modest' && skill != 'Unskilled') {
            // Proficiency Bonus
            const profBonus = `<label for="prof_bonus${emp}">Proficiency Bonus: </label>
                                        <select name="prof_bonus${emp}" id="prof_bonus${emp}">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>`
            // Expertise?
            const expertise = `<input type="checkbox" value="expertise${emp}" id="expertise${emp}">
                                <label>Expertise: check if they have Expertise</label>`
            // Creator?
            const creator = `<input type="checkbox" value="creator${emp}" id="creator${emp}">
                                <label>Creator: check if this employee type creates your product</label>`
            // Append it to the right element
            document.getElementById(`employeeID${emp}div`).innerHTML = `${profBonus}<br>${expertise}<br>${creator}`
        } else {
            // Clear the div
            document.getElementById(`employeeID${emp}div`).innerHTML = ``
        }
    }
}      
// Function to create more employees
function populateEmployees(){
    // Clear it 
    document.getElementById('employees').innerHTML = ""
    // Set the element ID
    let empTypes = document.getElementById('emp_types')
    // Set up the quantity
    let quantity = empTypes.value
    // Loop through the quantity
    for (quan = 0; quan < quantity; quan++) {
        // Employee Number
        var empNum = quan + 1
        // HTML Elements
            // Employee Type Number
            const employeeNumber = `<h3><u>Employee Type ${empNum}</u></h3>`
            // Quantity
            const empQuantity = `<label for="emp_quantity${empNum}">Quantity: </label>
                                    <input type="number" id="emp_quantity${empNum}" name="emp_quantity${empNum}">`
            // Employee Skill
            const employeeSkill = `<label for="emp_skill${empNum}">Skill Level: </label>
                                        <select name="emp_skill${empNum}" id="emp_skill${empNum}" onchange="skillLevelListener()">
                                            <option value="unskilled">Unskilled</option>
                                            <option value="modest">Modest</option>
                                            <option value="comfortable">Comfortable</option>
                                            <option value="wealthy">Wealthy</option>
                                            <option value="aristocratic">Aristocratic</option>
                                        </select>`
        // POPULATE
            // Create a new element
            var p = document.createElement('p')
            p.setAttribute('id', `employeeID${empNum}`)
            // Create a div element
            var div = document.createElement('div')
            div.setAttribute('id', `employeeID${empNum}div`)
            // Set its innerHTML
            p.innerHTML = `${employeeNumber}  ${empQuantity} <br>${employeeSkill}`
            // Append it as a child
            document.getElementById('employees').appendChild(p)
            document.getElementById(`employeeID${empNum}`).appendChild(div)
    }
}
// Function to create more html elements for misc. costs
function populateMiscCosts() {
    // Clear it 
    document.getElementById('misc_expenses').innerHTML = ""
    // Get the time scale
    var timeScale = document.getElementById('time_scale').value
    // Set the element ID
    let miscTypes = document.getElementById("misc_types")
    // Set up the quantity
    let quantity = miscTypes.value
    // Loop through the quantity
    for (quan = 0; quan < quantity; quan++) {
        // Misc Cost Number
        var miscNum = quan + 1
        // HTML ELEMENTS
            // Misc Cost Type Number
            const miscNumber = `<h3><u>Miscellaneous Type ${miscNum}</u></h3>`
            // Quantity
            const miscQuantity = `<label for="misc_quantity${miscNum}">Quantity: </label>
                                    <input type="number" id="misc_quantity${miscNum}" name="misc_quantity${miscNum}">`
            // Cost
            const cost = `<label for="cost${miscNum}"> ${timeScale.toProperCase()} Cost: </label>
                            <input type="number" id="cost${miscNum}" name="cost${miscNum}">
                        </form>`
            // Currency
            const currency = `<label for="currency${miscNum}"></label>
                                <select name="currency${miscNum}" id="currency${miscNum}">
                                    <option value="copper">Copper</option>
                                    <option value="silver">Silver</option>
                                    <option value="electrum">Electrum</option>
                                    <option value="gold">Gold</option>
                                    <option value="platinum">Platinum</option>
                                </select>`
        // POPULATE
            // Create a new element
            var p = document.createElement('p')
            // Set its innerHTML
            p.innerHTML = `${miscNumber}    ${miscQuantity} <br> ${cost} ${currency}`
            // Append it as child
            document.getElementById('misc_expenses').appendChild(p)
    }
}
// Function to calculate the total expenses for employees
function employeeExpenses(){
    // Set up the total
    var total = 0
    // Get the time scale
    let c = document.getElementById(`time_scale`)
    let timeScale = c.options[c.selectedIndex].text
    // Get the number of open days per week
    var openDays = parseFloat(document.getElementById('days_employed').value)
    // Calculate the time scale mod
    switch(timeScale) {
        case 'Weekly':
            var timeScaleMod = parseFloat(8 * openDays)
            break
        case 'Monthly':
            var timeScaleMod = parseFloat(8 * openDays * 3)
            break
        case 'Quarterly':
            var timeScaleMod = parseFloat(8 * openDays * 3 * 3)
            break
        case 'Annually':
            var timeScaleMod = parseFloat(8 * openDays * 3 * 12)
            break
    }
    // Get the quantity
    let quantity = parseFloat(document.getElementById('emp_types').value)
    if (quantity) {
        // Loop through all the employees expenses elements
        for (x = 1; x < quantity + 1; x++) {
            // Get the quantity
            let quan = parseFloat(document.getElementById(`emp_quantity${x}`).value)
            // Get the proficiency bonus
            if (!document.getElementById(`prof_bonus${x}`)) {
                var profBonus = 0
            } else {
                var profBonus = parseFloat(document.getElementById(`prof_bonus${x}`).value)
            }
            // Get the skill
            let b = document.getElementById(`emp_skill${x}`)
            let skill = b.options[b.selectedIndex].text
            // Pull the wage for the skill from the table
            let wage = parseFloat(tableEmployeeSkills.find(blah => blah.SKILL_LEVEL === skill).WAGE)
            // Calculate the wage increase per proficiency
            if (!document.getElementById(`expertise${x}`)) {
                var wageBonus = (wage * 0.05) * profBonus
            } else {
                if (document.getElementById(`expertise${x}`).checked) {
                    var wageBonus = ((wage * 0.05) * 2) * profBonus
                } else {
                    var wageBonus = (wage * 0.05) * profBonus
                }
            }
            // Calculate the total
            total += (((wage + wageBonus) * quan) * timeScaleMod)
        }
    }
    return parseFloat(total)
}
// Function to calculate the total expenses for misc. costs
function miscExpenses(){
    // Set up the total
    var total = 0
    // Get the quantity
    let quantity = parseFloat(document.getElementById('misc_types').value)
    if (quantity){
        // Loop through all the misc. expenses elements
        for (x = 1; x < quantity + 1; x++) {
            // Get the quantity
            let quan = parseFloat(document.getElementById(`misc_quantity${x}`).value)
            // Get the cost
            let cost = parseFloat(document.getElementById(`cost${x}`).value)
            // Get the currency
            let b = document.getElementById(`currency${x}`)
            let currency = b.options[b.selectedIndex].text
            // Conver the cost to gold
            switch(currency){
                case 'Copper':
                    cost = cost * 0.01
                    break
                case 'Silver':
                    cost = cost * 0.1
                    break
                case 'Electrum':
                    cost = cost * 0.5
                    break
                case 'Gold':
                    cost = cost * 1
                    break
                case 'Platinum':
                    cost = cost * 10
                    break
            }
            // Calculate the total
            total += cost * quan
        }
    }
    
    // Return
    return parseFloat(total)
}
// Function to roll the dice necessary
function rollProductionDice() {
    // Get the time scale
    let c = document.getElementById(`time_scale`)
    let timeScale = c.options[c.selectedIndex].text
    // Get the business type
    let a = document.getElementById(`shop`)
    let business = a.options[a.selectedIndex].text
    console.log(`Business: ${business}`)
    // Get the quantity of employees
    let quantity = parseFloat(document.getElementById('emp_types').value)
    console.log(`Quantity ${quantity}`)
    // Get the number of open days
    var openDays = parseFloat(document.getElementById('days_employed').value)
    console.log(`Open Days: ${openDays}`)
    // Get the time it takes to produce one good 
    var options = parseFloat(document.getElementById('options').value)
    console.log(`Production Duration: ${options}`)
    // Calculate how many goods can be produced by one employee per week
    var productionCount = Math.floor((openDays * 8) / options)
    console.log(`Production Count: ${productionCount}`)
    // Set up the list for just the die rolls
    var listRolls = []
    // Set up the list for the dice rolls plus any modifiers
    var listChecks = []
    // Create a sale list for each of the product
    var listSale = []
    // Set up a switch based on the business types 
    switch(business) {
        case 'Brewery':
            // Loop through the employees and find the one that makes the goods
            for (q = 1; q < quantity + 1;q++) {
                // If they are the maker of the goods, do the rolling
                if (document.getElementById(`creator${q}`).checked) {
                    // See if they have expertise
                    if (document.getElementById(`expertise${q}`).checked) {
                        // Get their prof. bonus and multiply by 2
                        var profBonus = parseFloat(document.getElementById(`prof_bonus${q}`).value) * 2
                    } else {
                        // Get prof. bonus
                        var profBonus = parseFloat(document.getElementById(`prof_bonus${q}`).value)
                    }
                    // Get the quantity for this employee ID
                    var empQuan = parseFloat(document.getElementById(`emp_quantity${q}`).value)
                    // Multiply the producitonCount according to the time scale
                    if (timeScale == 'Monthly') {
                        productionCount = productionCount * 3
                    } else if (timeScale == 'Quarterly') {
                        productionCount = productionCount * 3 * 3
                    } else if (timeScale == 'Annually') {
                        productionCount = productionCount * 3 * 12
                    }
                    // Set up total sale price
                    var saleTotal = 0
                        // Loop through the quantity of this employee ID
                        for (x = 0; x < (empQuan) * productionCount; x++) {
                            // Determine how long they spend per barrel of beer and roll
                            var workhours = document.getElementById('options').value
                            if (workhours == 18) {
                                // Roll one normal roll
                                var roll = getRndInteger(1, 20)
                            } else if (workhours == 36) {
                                // Roll with advantage and +5
                                var roll1 = getRndInteger(1, 20)
                                var roll2 = getRndInteger(1, 20)
                                if (roll1 > roll2) {
                                    var roll = roll1
                                } else {
                                    var roll = roll2
                                }
                            }
                            // Push the roll to the list
                            listRolls.push(roll)
                        }
                        // Loop through each roll
                        listRolls.forEach((die) => {
                            // Add the proficiency bonus to it
                            var check = die + profBonus
                            // Push it to the checks list
                            listChecks.push(check)
                            // Determine the sale price of this roll
                            if (die == 1) {
                                var sale = 0
                            } else if (check >= 2 && check <= 9) {
                                var sale = 3
                            } else if (check >= 10 && check <= 14) {
                                var sale = 6
                            } else if (check >= 15 && check <= 19) {
                                var sale = 9
                            } else if (check >= 20 && check <= 24) {
                                var sale = 15
                            } else if (check >= 25 && check <= 29) {
                                var sale = 24
                            } else if (check >= 30 && check <= 31) {
                                var sale = 48
                            } else if (check >= 32) {
                                var sale = 96
                            }
                            listSale.push(sale)
                            // Add it to the total
                            saleTotal += sale  
                        })        
                    // Break out of the for loop b/c it's no longer needed
                    break
                // Else alert the user that they must select at least one creator
                } else if (q == quantity + 1) {
                    alert('You must select at least one creator')
                }
            }
            break
        case 'Restaurant':
            alert('Not currently supported. Sorry :(')
            break
        case 'Cafe':
            alert('Not currently supported. Sorry :(')
            break   
        case 'Bakery':
            alert('Not currently supported. Sorry :(')
            break
        case 'Trinkets Shop':
            alert('Not currently supported. Sorry :(')
            break
    }
    console.log(`ROLLS`)
    console.log(listRolls)
    console.log(`CHECKS`)
    console.log(listChecks)
    console.log(`SALE PRICES`)
    console.log(listSale)
    return saleTotal
}
// FUnction to populate additional options based on the business
function populateOptions(){
    // Get the business type
    let a = document.getElementById(`shop`)
    let business = a.options[a.selectedIndex].text
    console.log(`Business: ${business}`)
     // Set up a switch based on the business types 
     switch(business) {
        case 'Brewery':
            var options = `<label for="options">Workhours per Barrel: </label>
                            <select name="options" id="options">
                                <option value="18">18 workhours</option>
                                <option value="36">36 workhours</option>
                            </select>
                            <br>
                            <i>18 workhours means it's a normal roll and 36 workhours means it's a roll with advantage</i>`
            break
        case 'Restaurant':
            var options = ''
            break
        case 'Cafe':
            var options = ''
            break   
        case 'Bakery':
            var options = ''
            break
        case 'Trinkets Shop':
            var options = ''
            break
    }
    document.getElementById('options_setup').innerHTML = options
}
// Function to print the results
function expensesResult(){
    // Clear it
    document.getElementById('output').innerHTML = ''
    // Misc. Expenses
    var p1 = document.createElement('p')
    var miscTotal = miscExpenses()
    p1.innerHTML = `<b>Misc. Expenses:</b> ${formatGold(miscTotal)}`
    // Employee Total
    var p2 = document.createElement('p')
    var empTotal = employeeExpenses()
    p2.innerHTML = `<b>Employee Expenses:</b> ${formatGold(empTotal)}`
    // Total Revenue 
    var p3 = document.createElement('p')
    var revenue = rollProductionDice()
    p3.innerHTML = `<b>Revenue:</b> ${formatGold(revenue)}`
    // Profits
    var p4 = document.createElement('p')
    var profits = revenue - (miscTotal + empTotal)
    p4.innerHTML = `<b>PROFITS:</b> ${formatGold(profits)}`
    // Push it to the elements
    document.getElementById('output').appendChild(p1)
    document.getElementById('output').appendChild(p2)
    document.getElementById('output').appendChild(p3)
    document.getElementById('output').appendChild(p4)
    // Logs
    console.log(`Misc. Total: ${miscTotal}`)
    console.log(`Employees Total: ${empTotal}`)
    console.log(`Revenue: ${revenue}`)
    console.log(`PROFITS: ${profits}`)
}
// Function to calculate SIMPLE business income
function simpleBusinessIncome() {
    // Roll 1d100
    var d100 = getRndInteger(1, 100)
    console.log(`d100: ${d100}`)
    // Get the amount of passionate employees
    var employees = parseInt(document.getElementById('employees').value)
    console.log(`Employees: ${employees}`)
    // Get the number of days spent at the business running it
    var days = parseInt(document.getElementById('days').value)
    console.log(`Days: ${days}`)
    // Add the modifiers to the roll
    var check = d100 + employees + days
    console.log(`Check: ${check}`)
    // Determine the outcome
    if (check <= 40) {
        var rCost = getRndInteger(1, 6) * 5
        console.log(`Cost: ${rCost}`)
        // Granular outcomes
        if (check <= 20) {
            var outcome = -rCost * 1.5
        } else if (check <= 30) {
            var outcome = -rCost * 1
        } else if (check <= 40) {
            var outcome = -rCost * 0.5
        }
    } else if (check >= 61) { 
        // Granular outcomes
        if (check <= 80) {
            var outcome = getRndInteger(1, 6) * 5
        } else if (check <= 90) {
            var outcome = (getRndInteger(1, 8) + getRndInteger(1, 8)) * 5
        } else if (check <= 100) {
            var outcome = (getRndInteger(1, 10) + getRndInteger(1, 10) + getRndInteger(1, 10)) * 5
        }
    } else {
        var outcome = 0
    }
    document.getElementById('output').innerHTML = `This month, your business earned a profit of ${outcome} gp.`
}