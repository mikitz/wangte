// Define a function to format number with commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
}
// Calculates the probability of obtaining a single specific outcome across n rolls of a d-sided die
function probability_one() {
    // Get number of dice
    var n = document.getElementById("n1").value
    // Get sides on each die
    var d = document.getElementById("d1").value
    // Calculate
    var prob = 1 - ((d - 1) / d)**n
    prob = parseFloat(prob*100).toFixed(2)+"%"
    prob = `<B>${prob}</B>`
    // Print the probability
    var p = document.createElement('p')
    p.innerHTML = prob
    document.getElementById("output1").appendChild(p)
}
// Clears probability1 output
function clear_prob1() {
    document.getElementById('output1').innerHTML = ""
}
// Calculates the probability of obtaining an outcome of o or greater, on at least one of n d-sided dice
function probability_two() {
    // Get number of dice
    var n = document.getElementById("n2").value
    // Get sides on each die
    var d = document.getElementById("d2").value
    // Get the specific outcome
    var o = document.getElementById("o2").value
    // Calculate
    var prob = 1 - ((d - (d - o + 1)) / d)**n
    prob = parseFloat(prob*100).toFixed(2)+"%"
    prob = `<B>${prob}</B>`
    // Print the probability
    var p = document.createElement('p')
    p.innerHTML = prob
    document.getElementById("output2").appendChild(p)
}
// Clears probability2 output
function clear_prob2() {
    document.getElementById('output2').innerHTML = ""
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
    var g = document.getElementById("gold").value
    // Get prof. bonus
    var p = document.getElementById("prof").value
    // Get int. mod.
    var i = document.getElementById("int").value
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
    // Define the object array to store the data
    let oaData = [
        {"lvl":0,"perc_of_pop":0.009677909091},
        {"lvl":1,"perc_of_pop":0.0005962575758},
        {"lvl":2,"perc_of_pop":0.0005184545455},
        {"lvl":3,"perc_of_pop":0.0004351969697},
        {"lvl":4,"perc_of_pop":0.0003466818182},
        {"lvl":5,"perc_of_pop":0.0002679545455},
        {"lvl":6,"perc_of_pop":0.000201530303},
        {"lvl":7,"perc_of_pop":0.0001477878788},
        {"lvl":8,"perc_of_pop":0.0001061666667},
        {"lvl":9,"perc_of_pop":0.00007290909091},
        {"lvl":10,"perc_of_pop":0.00005051515152},
        {"lvl":11,"perc_of_pop":0.0000321969697},
        {"lvl":12,"perc_of_pop":0.00002001515152},
        {"lvl":13,"perc_of_pop":0.00001178787879},
        {"lvl":14,"perc_of_pop":0.000007257575758},
        {"lvl":15,"perc_of_pop":0.000003636363636},
        {"lvl":16,"perc_of_pop":0.000001954545455},
        {"lvl":17,"perc_of_pop":0.00000103030303},
        {"lvl":18,"perc_of_pop":0.0000004848484848},
        {"lvl":19,"perc_of_pop":0.0000001818181818},
        {"lvl":20,"perc_of_pop":0.0000000303030303}
    ];
    // Get the level
    var a = document.getElementById("lvl")
    var level = a.options[a.selectedIndex].text
    // Turn level into an int if it's not "All"
    if (level != "All") {level = parseInt(level)}
    // Get the population
    var pop = document.getElementById("population").value
    // Calculate the demographics
    if (level === "All") {

    } else {
        // Get the respective percentage
        var perc = oaData.find(i => i.lvl == level).perc_of_pop
        var demographics = Math.round(pop * perc)
    }
    // Print the output
    var p = document.createElement('p')
    p.innerHTML = `Level ${level} Individuals in a Location with a Population of ${numberWithCommas(pop)}: ${numberWithCommas(demographics)} person(s)`
    document.getElementById("output").appendChild(p)
}
// Function to calculate the weight of currency
function currencyWeight(){
    // Get number of pieces
    var pieces = parseInt(document.getElementById("pieces").value)
    // Divide it by 50
    var weightPounds = (pieces / 50).toFixed(2)
    // Conver to KG
    var weightKG = (weightPounds * 2.205).toFixed(2)
    // Set up the message
    var vMessage = `${pieces} pieces weigh ${weightPounds} lbs (${weightKG} kg).`
    // Populate the element
    populateElement('output', vMessage, 'p')
}