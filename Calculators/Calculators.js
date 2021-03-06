// Function to compute factorial of n
// Source: https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/
function factorialize(num) {
    // Step 1. Create a variable result to store num
    var result = num;
     
    // If num = 0 OR num = 1, the factorial will return 1
    if (num === 0 || num === 1) 
        return 1; 
   
    // Instatiate the while loop
    while (num > 1) {
        // Decrement by 1 
        num--
        // Update the result
        result *= num
    }
    // Return
    return parseFloat(result);
}

// Function to calculate combinations
function nCr(n, r){
    // Compute n factorial
    var nFact = factorialize(n)
    console.log(`n factorial: ${nFact}`)
    // Compute r factorial
    var rFact = factorialize(r)
    console.log(`r factorial: ${rFact}`)
    // Compute n - r factorial
    var nrFact = factorialize(n - r)
    console.log(`n - r factorial: ${nrFact}`)
    // Compute nCr
    var result = parseFloat((nFact / (rFact * nrFact)))
    // Return
    return parseFloat(result)
}

// Calculates the duration of the sailing 
// as well as revenue earned from the conveyance of cargo
function calculate_sail_duration_and_cargo_revenue() {
    // Define some global variables
    let vHours = ''
    let vMilesPerDay = ''
    let vDaysToDestination = ''
    let vRemaining = ''
    let vMessage = '<H2>SAILING DURATION</H2> <P>'
    let vPricePerMile = 0.08
    let vPricePerPound = 0.02
    let vHandlingFee = 0
    let vShippingFee = 0
    let vRevenue = 0    
    // Get the number of sailing shifts from the user input
    var a = document.getElementById("shifts")
    var vShifts = parseInt(a.options[a.selectedIndex].text)
    // Get the ship speed from the user input
    var b = document.getElementById("speed")
    var vSpeed = parseFloat(b.options[b.selectedIndex].value)
    // Get the distance to destination from the user input
    var vDistance = parseInt(document.getElementById("distance").value)
    // Get the weight of the cargo from the user input
    var vWeight = parseInt(document.getElementById("weight").value)
    // Calcualte the number of hours sailed per day
    vHours = vShifts * 8
    // Calculate the distance travelled in a day
    vMilesPerDay = vHours * vSpeed
    // Calculate the number of days to destination
    vDaysToDestination = Math.floor(vDistance / vMilesPerDay)
    // Calculate the number of remaining hours from above
    vRemaining = Math.ceil(24 * ((vDistance / vMilesPerDay) - vDaysToDestination))
    // Calculate the Shipping Fee
    vShippingFee = +((vPricePerMile * vDistance) + (vPricePerPound * vWeight)).toFixed(2)
    // Calculate the Handling Fee
    vHandlingFee = +((vShippingFee * 0.05) * vShifts).toFixed(2)
    // Calculate total revenue
    vRevenue = vShippingFee + vHandlingFee
    // Log to the console for debugging purposes
    console.log(`VARIABLES
                Shifts: ${vShifts}
                Speed: ${vSpeed}
                Distance: ${vDistance}
                Hours: ${vHours}
                Miles per Day: ${vMilesPerDay}
                Time to Destination: ${vDaysToDestination} days and ${vRemaining} hours
                Days to Destination: ${vDistance / vMilesPerDay}`)
    // Build the message
    vMessage += `While sailing for <I>${vHours} hours</I> per day at a speed of <I>${vSpeed} MPH</I>, 
    you will cover a distance of <I>${vDistance} miles</I> in about <B>${vDaysToDestination} days and ${vRemaining} hours</B>. 
    Please note that this assumes nothing will go wrong.
    <H2>CARGO TRANSPORTATION</H2>
    Transporting cargo with a weight of <I>${vWeight} lbs</I> over a distance of <I>${vDistance} miles</I> will net you a revenue of <B>${vRevenue} gp</B>, 
    comprised of a handling fee of <I>${vHandlingFee} gp</I> and a shipping fee of <I>${vShippingFee} gp</I>.`
    // Print the message
    var p = document.createElement('p')
    p.innerHTML = vMessage
    document.getElementById('output').appendChild(p)
}
// Clears "output"
function clear_sail() {
    document.getElementById('output').innerHTML = ""
    document.getElementById("output_list").innerHTML = ""
}
// Calculates the probability of obtaining a single specific outcome across n rolls of a d-sided die
function probability_one() {
    // Get number of dice
    var n = parseInt(document.getElementById("n1").value)
    // Get sides on each die
    var d = parseInt(document.getElementById("d1").value)
    // Calculate
    var prob = parseFloat(1 - ((d - 1) / d)**n)
    probString = parseFloat(prob*100).toFixed(2)+"%"
    // Fraction
    var frac = new Fraction(prob.toFixed(2))
    frac = frac.toLocaleString()
    console.log(`Fraction: ${frac}`)
    // Print the probability
    var p = document.createElement('p')
    p.innerHTML = `Probability: ${probString}<br>Fraction: ${frac}`
    document.getElementById("output1").appendChild(p)
}
// Clears probability1 output
function clear_prob1() {
    document.getElementById('output1').innerHTML = ""
}
// Calculates the probability of obtaining an outcome of o or greater, on at least one of n d-sided dice
function probability_two() {
    // Get number of dice
    var n = parseFloat(document.getElementById("n2").value)
    // Get sides on each die
    var d = parseFloat(document.getElementById("d2").value)
    // Get the specific outcome
    var o = parseFloat(document.getElementById("o2").value)
    // Calculate
    var prob = parseFloat(1 - ((d - (d - o + 1)) / d)**n)
    probString = parseFloat(prob*100).toFixed(2)+"%"
    // Fraction
    var frac = new Fraction(prob.toFixed(2))
    frac = frac.toLocaleString()
    console.log(`Fraction: ${frac}`)
    // Print the probability
    var p = document.createElement('p')
    p.innerHTML = `Probability: ${probString}<br>Fraction: ${frac}`
    document.getElementById("output2").appendChild(p)
}
// Clears probability2 output
function clear_prob2() {
    document.getElementById('output2').innerHTML = ""
}
// Calculates the probability of obtaining an outcome of o or greater, on k n d-sided dice
function probability_three(){
    // TODO #8 probability_three is not consistent with probabilty_two when n is > 1
    // USER INPUTS
        // Get number of dice
        var n = parseFloat(document.getElementById("n3").value)
        // Get sides on each die
        var d = parseFloat(document.getElementById("d3").value)
        // Get the value that defines a success
        var o = parseFloat(document.getElementById("o3").value)
        // Get the number of success needed
        var k = parseFloat(document.getElementById("k3").value)
    // CALCULATIONS
        // p
        var p = ((d - o) + 1)/d
        console.log(`p: ${p}`)
        // q
        var q = (1 - p)
        console.log(`q: ${q}`)
        // nCr
        var vnCr = nCr(n, k)
        console.log(`nCr: ${vnCr}`)
        // p**k
        var pk = p**k
        console.log(`p**k: ${pk}`)
        // q**n-k
        var pnk = q**(n-k)
        console.log(`q**n-k: ${pnk}`)
        // Probability
        var prob = (vnCr * pk * pnk) / ((p + q)**n)
        console.log(`Prob.: ${prob}`)
        probString = parseFloat(prob*100).toFixed(2)+"%"
        // Fraction
        var frac = new Fraction(prob.toFixed(2))
        frac = frac.toLocaleString()
        console.log(`Fraction: ${frac}`)
    // Print the probability
    var p = document.createElement('p')
    p.innerHTML = `Probability: ${probString}<br>Fraction: ${frac}`
    document.getElementById("output3").appendChild(p)
}
// Clears probability2 output
function clear_prob3() {
    document.getElementById('output3').innerHTML = ""
}


// Calculate the time to get to a destination on foot
function calcuate_travel_duration () {
    // TODO
}
// Calculate the distance to the horizon
function calculate_horizon () {
    // Get height
    var h = document.getElementById("height").value
    // Get radius
    var r = document.getElementById("radius").value
    // Compute
    var l = Math.round(Math.sqrt(2 * r * h))
    // Print the probability
    var p = document.createElement('p')
    p.innerHTML = `${l} feet <br>
                    ${(l/5280).toFixed(2)} miles`
    document.getElementById("output").appendChild(p)	
}
// Calculates how long it will take to craft a certain item
function calculate_crafting_time(){
    // Get gold
    var g = parseInt(document.getElementById("gold").value)
    // Get prof. bonus
    var p = parseInt(document.getElementById("prof").value)
    // Get int. mod.
    var i = parseInt(document.getElementById("int").value)
    // Calculate amount of gold per 8 hours of work (1 workday)
    var wd = (p + i)*10
    // Calculate the amount of gold per 1 hour (1 workhour)
    var wh = Math.round(wd/8)
    // Calculate the # of hours for this specific item
    var whi = Math.round(g / wh)
    // Calcualte the workdays for this specific item
    var wdi = (whi / 8).toFixed(2)
    // Print the output
    var p = document.createElement('p')
    p.innerHTML = `Gold per Workday: ${wd} gp <br>
                    Gold per Workhour: ${wh} gp <br>
                    Workhours for this Item: ${whi} hours <br>
                    Workdays for this Item: ${wdi} days`
    document.getElementById("output").appendChild(p)
}
// Function to Calculate the cost of a custom magic item based on a spell
function customMagicItem() {
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
    // Get the Spell Level
    var spellLevelName = document.getElementById('spell-level').value
        // Get the int from the spell level
        if (spellLevelName.length > 3) {
            spellLevel = 0.5
        } else {
            spellLevel = spellLevelName.charAt(0)
        }
    console.log(`Spell Level: ${spellLevel}`)
    // Get the # of Charges
    var numCharges = parseInt(document.getElementById('numOfCharges').value)
    console.log(`# of Charges: ${numCharges}`)
    // Pull the cost for the spell scroll
    var cSpellScroll = parseInt(item_prices.find(i => i["Spell Scrolls"] == spellLevelName)["Cost (To Purchase)"])
    console.log(`Cost - Spell Scroll: ${cSpellScroll}`)
    // Pull the cost for the spell slot
    var cSpellSlot = parseInt(item_prices.find(i => i["Spell Scrolls"] == spellLevelName)["Cost (For Service) + Materials"])
    console.log(`Cost - Spell Slot: ${cSpellSlot}`)
    // Calculate cost of spell scrolls
    var pSpellScrolls = parseInt(numCharges * cSpellScroll)
    console.log(`Price - Spell Scrolls: ${pSpellScrolls}`)
    // Calculate cost of spell slots
    var pSpellSlots = parseInt(numCharges * cSpellSlot)
    console.log(`Price - Spell Slots: ${pSpellSlots}`)
    // Calculate total price
    var pTotal = parseInt(pSpellScrolls + pSpellSlots)
    console.log(`Price - Total: ${pTotal}`)
    // Calculate total time to make
    var tTotal = parseInt((spellLevel * 8) * numCharges)
    console.log(`Time - Workhours: ${tTotal}`)
    // Calculate the # of workdays the character has to wait
    var tDays = parseInt(tTotal / 8)
    console.log(`Time - Workdays: ${tDays}`)
    // Print the output
    var p = document.createElement('p')
    p.innerHTML = `Total Price: ${pTotal.toLocaleString()} gp <br>
                    Total Days: ${tDays.toLocaleString()} workdays <br>
                    Total Workhours: ${tTotal.toLocaleString()} workhours<br>
                    Cost for Spell Scrolls: ${pSpellScrolls.toLocaleString()} gp<br>
                    Cost for Spell Slots: ${pSpellSlots.toLocaleString()} gp <br>`
    document.getElementById("output1").appendChild(p)
}
// Calculate the reward for a bounty
function calculate_bounty(){
    // Get the most wanted status
    var a = document.getElementById("most-wanted")
    var mws = a.options[a.selectedIndex].text
    // Turn mws into an int if it's not "N/A"
    if (mws != "N/A") {mws = parseInt(mws)}
    // Get the target's CR
    var cr = document.getElementById("cr").value
    // Calculate the bounty reward
    if (mws != "N/A") {
        var br = (mws * 1000) * cr
    } else {
        var br = cr * 100
    }
    // Print the output
    var p = document.createElement('p')
    p.innerHTML = `Bounty Reward: ${br} gp`
    document.getElementById("output").appendChild(p)
}
// Calculate level demographics
function calculate_level_demographics(){ 
    document.getElementById("output").innerHTML = ""
    document.getElementById("output_list").innerHTML = ""

    // USER INTPUTS
        // Get the level
        var a = document.getElementById("lvl")
        var level = a.options[a.selectedIndex].text
        // Turn level into an int if it's not "All"
        if (level != "All") {level = parseInt(level)}
        // Get the population
        var pop = parseInt(document.getElementById("population").value)
        // Get wealth
        var wealth = document.getElementById('wealth').value
        // Get magicness
        var magicness = document.getElementById('magicness').value

    // PULL NECESSARY DATA
        // Pull the wealth mod
        var modWealth = tableWealth.find(i => i.WEALTH == wealth).MODIFIER
        // Pull the magicness mod
        var modMagicness = tableMagicness.find(i => i.MAGICNESS == magicness).MODIFIER

    // CALCULATE
        // Calculate the demographics
        if (level === "All") {
            document.getElementById('output').innerHTML = `Population: ${pop.toLocaleString()}`
            // Loop through each level and calculate its population
            for (lvl = 1; lvl < 20 + 1; lvl++) {
                // Get the respective percentage
                var perc = oaData.find(i => i.lvl == lvl).perc_of_pop
                var demographics = parseInt(Math.round(pop * perc))
                demographics = parseInt(Math.round((demographics * modMagicness) * modWealth))
                // Log it
                console.log(`Level ${lvl}: ${demographics}`)
                // Build it
                var vMessage = `Level ${lvl.toLocaleString()}: ${demographics.toLocaleString()} person(s)`
                // Output it
                var ul = document.createElement('li')
                ul.innerHTML = vMessage
                document.getElementById('output_list').appendChild(ul)
            }
        } else {
            // Get the respective percentage
            var perc = oaData.find(i => i.lvl == level).perc_of_pop
            var demographics = parseInt(Math.round(pop * perc))
            // Print the output
            var p = document.createElement('p')
            p.innerHTML = `Level ${level.toLocaleString()}: ${demographics.toLocaleString()} person(s)`
            document.getElementById("output").appendChild(p)
        }
    
}
// Function to calculate the weight of currency
function currencyWeight(){
    // Get number of pieces
    var pieces = parseInt(document.getElementById("pieces").value)
    // Divide it by 50
    var weightPounds = (pieces / 50).toFixed(2)
    // Conver to KG
    var weightKG = (weightPounds / 2.205).toFixed(2)
    // Set up the message
    var vMessage = `${pieces} pieces weigh ${weightPounds} lbs (${weightKG} kg).`
    // Populate the element
    populateElement('output', vMessage, 'p')
}

// Function to calculate the number of creatures for any given level
function calculateCreatures(){
    // Get the CR
    var b = document.getElementById("cr")
    var CR = b.options[b.selectedIndex].text
    // Get the Desired Level
    var a = document.getElementById("lvl")
    var level = a.options[a.selectedIndex].text
    // Get the number of party memebers
    var c = document.getElementById("party")
    var party = parseInt(c.options[c.selectedIndex].text)
    // Pull the XP per creature based on the cr
    var cXP = XP_by_CR.find(i => i.CR == CR).XP
    // Pull the XP needed for the given level
    var nXP = beyond_1st_level.find(c => c.level == level).XP
    // Compute the total number of creatures
    var nrCreatures = (nXP / cXP) * party
    var rCreatures = Math.ceil(nrCreatures).toLocaleString()
    // Build the message
    var vMessage = `With <b>${party} party members</b>, you (and your group) will have to kill <b>${rCreatures} CR ${CR}</b> creatures in order to reach <b>level ${level}</b>.`
    document.getElementById('output').innerHTML = vMessage
    // Log for debugging
    console.log(`INITIAL VARS
    Input CR: ${CR}
    Input Lvl: ${level}
    cXP: ${cXP}
    nXP: ${nXP}
    Party Members: ${party}
    NR Creatures: ${nrCreatures}
    R Creatures: ${rCreatures}`)
}

// Function to calculate how many training success the user needs
function calculateTrainingHours(){
    // Get the skill level
    var a = document.getElementById('skill')
    var skillLevel = a.options[a.selectedIndex].text
    // Get the ability score mod.
    var abilityMod = parseInt(document.getElementById('ability').value)
    // Get the int. mod.
    var intMod = parseInt(document.getElementById('int').value)
    // Determine number of starting hours and the DC
    if (skillLevel == 'Proficiency') {
        var hoursStart = 100
        var DC = 15
    } else {
        var hoursStart = 200
        var DC = 20
    }
    // Calculate the total successful traning hours needed
    var hoursFinal = hoursStart - ((abilityMod * 10) + (intMod * 10))
    // Assemble the message
    var vMessage = `Successful Hours Needed: ${hoursFinal}<br>
                DC: ${DC}`
    // Populate the element
    document.getElementById('output_successes').innerHTML = vMessage
}

// Function to roll any give number of training hours
function trainingRoller(){
    // Get the skill level
    var a = document.getElementById('skill')
    var skillLevel = a.options[a.selectedIndex].text
    // Get proficiency bonus
    if (skillLevel == 'Expertise') {
        var prof = parseInt(document.getElementById('prof').value)
    } else {
        var prof = 0
    }
    // Get the ability score mod.
    var abilityMod = parseInt(document.getElementById('ability1').value)
    // Get the number of hours
    var hours = parseInt(document.getElementById('hours').value)
    // Determine number of starting hours and the DC
    if (skillLevel == 'Proficiency') {
        var DC = 15
    } else {
        var DC = 20
    }
    // Log it
    console.log(`INPUT VARS
                Skill Level: ${skillLevel}
                Ability Mod: ${abilityMod}
                Proficiency: ${prof}
                Hours: ${hours}
                DC: ${DC}`)
    // Roll the dice
        // Define the lists
        var [nat1s, nat20s, successes, failures, rolls, checks]  = [[], [], [], [], [], []]
        // Loop through each hour to roll a die
        for (x = 0; x < hours; x++) {
            var roll = getRndInteger(1, 20)
            // Check for nat1s and nat20s
            if (roll == 1) {
                nat1s.push(roll)
                rolls.push(roll)
                continue
            } else if (roll == 20) {
                nat20s.push(roll)
                rolls.push(roll)
                continue
            }
            rolls.push(roll)
            // Add modifiers to determine success and fail
            check = roll + prof + abilityMod
            if (check >= DC) {
                successes.push(check)
                checks.push(check)
                continue
            } else {
                failures.push(check)
            }
            checks.push(check)
        }
        // Log the lists
        console.log(`-----ROLLS-----`)
        console.log(rolls)
        console.log(`-----NAT 1s-----`)
        console.log(nat1s)
        console.log(`-----NAT 20s-----`)
        console.log(nat20s)
        console.log(`-----CHECKS-----`)
        console.log(checks)
        console.log(`-----SUCCESSES-----`)
        console.log(successes)
        console.log(`-----FAILURES-----`)
        console.log(failures)
    // Calculate total successes
    var successesFinal = (successes.length + (nat20s.length * 2)) - nat1s.length
    // Build the message
    var vMessage = `Nat 20s: ${nat20s.length}<br>
                    Nat 1s: ${nat1s.length}<br>
                    Successes: ${successes.length}<br>
                    Failures: ${failures.length}<br>
                    <b>Total Successes: ${successesFinal}</b>`
    // Populate the element
    document.getElementById('output_rolls').innerHTML = vMessage
}