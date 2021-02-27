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
    document.getElementById('output').appendChild(`<B>${p}</B>`)
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