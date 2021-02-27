// Declare a function to select a random value from a dictionary
// Source: https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};
// Function to get a random integer
// Source: https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
// Clears "output"
function clear_sail() {
    document.getElementById('output').innerHTML = ""
}
// Define the function to generate a random encounter
function tool_random_encounter(){
    // Log a seperator
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    // Define the data dictionary
    let oaData = [
        {"Biome":"Arctic","Night_NC_DC":15,"Night_NC_Probability":"5%","Night_C_DC":16,"Night_C_Probability":"20%","Night_Total_Prob.":"25%","Day_NC_DC":16,"Day_NC_Probability":"10%","Day_C_DC":18,"Day_C_Probability":"10%","Day_Total_Prob.":"20%"},
        {"Biome":"Coastal","Night_NC_DC":16,"Night_NC_Probability":"5%","Night_C_DC":17,"Night_C_Probability":"15%","Night_Total_Prob.":"20%","Day_NC_DC":17,"Day_NC_Probability":"10%","Day_C_DC":19,"Day_C_Probability":"5%","Day_Total_Prob.":"15%"},
        {"Biome":"Desert","Night_NC_DC":16,"Night_NC_Probability":"5%","Night_C_DC":17,"Night_C_Probability":"15%","Night_Total_Prob.":"20%","Day_NC_DC":17,"Day_NC_Probability":"10%","Day_C_DC":19,"Day_C_Probability":"5%","Day_Total_Prob.":"15%"},
        {"Biome":"Forest","Night_NC_DC":15,"Night_NC_Probability":"5%","Night_C_DC":16,"Night_C_Probability":"20%","Night_Total_Prob.":"25%","Day_NC_DC":16,"Day_NC_Probability":"10%","Day_C_DC":18,"Day_C_Probability":"10%","Day_Total_Prob.":"20%"},
        {"Biome":"Grassland","Night_NC_DC":16,"Night_NC_Probability":"5%","Night_C_DC":17,"Night_C_Probability":"15%","Night_Total_Prob.":"20%","Day_NC_DC":17,"Day_NC_Probability":"10%","Day_C_DC":19,"Day_C_Probability":"5%","Day_Total_Prob.":"15%"},
        {"Biome":"Hill","Night_NC_DC":16,"Night_NC_Probability":"5%","Night_C_DC":17,"Night_C_Probability":"15%","Night_Total_Prob.":"20%","Day_NC_DC":17,"Day_NC_Probability":"10%","Day_C_DC":19,"Day_C_Probability":"5%","Day_Total_Prob.":"15%"},
        {"Biome":"Mountain","Night_NC_DC":14,"Night_NC_Probability":"5%","Night_C_DC":15,"Night_C_Probability":"25%","Night_Total_Prob.":"30%","Day_NC_DC":15,"Day_NC_Probability":"10%","Day_C_DC":17,"Day_C_Probability":"15%","Day_Total_Prob.":"25%"},
        {"Biome":"Swamp","Night_NC_DC":14,"Night_NC_Probability":"5%","Night_C_DC":15,"Night_C_Probability":"25%","Night_Total_Prob.":"30%","Day_NC_DC":15,"Day_NC_Probability":"10%","Day_C_DC":17,"Day_C_Probability":"15%","Day_Total_Prob.":"25%"},
        {"Biome":"Underdark","Night_NC_DC":15,"Night_NC_Probability":"5%","Night_C_DC":16,"Night_C_Probability":"20%","Night_Total_Prob.":"25%","Day_NC_DC":16,"Day_NC_Probability":"10%","Day_C_DC":18,"Day_C_Probability":"10%","Day_Total_Prob.":"20%"},
        {"Biome":"Underwater","Night_NC_DC":16,"Night_NC_Probability":"5%","Night_C_DC":17,"Night_C_Probability":"15%","Night_Total_Prob.":"20%","Day_NC_DC":17,"Day_NC_Probability":"10%","Day_C_DC":19,"Day_C_Probability":"5%","Day_Total_Prob.":"15%"},
        {"Biome":"Urban","Night_NC_DC":17,"Night_NC_Probability":"5%","Night_C_DC":18,"Night_C_Probability":"10%","Night_Total_Prob.":"15%","Day_NC_DC":18,"Day_NC_Probability":"10%","Day_C_DC":20,"Day_C_Probability":"0%","Day_Total_Prob.":"10%"}
    ];
    // Get default adjustments
    var a = document.getElementById("combat_threshold")
    var nct = a.options[a.selectedIndex].text
    var b = document.getElementById("non-combat_threshold")
    var ct = b.options[b.selectedIndex].text
    // Get level range
    var c = document.getElementById("lvl-range")
    var lvl = c.options[c.selectedIndex].text
    // Get biome
    var d = document.getElementById("biome")
    var biome = d.options[d.selectedIndex].text
    // Get time of day
    var e = document.getElementById("time_of_day")
    var time_of_day = e.options[e.selectedIndex].text
    // Check to see if nct is lower than ct
    if (parseInt(nct) >= parseInt(ct)) {
        alert("Non-combat Encounter DC MUST be lower than Combat Encounter DC")
    }
    // Log initial vars
    console.log(`INITIAL VARIABLES
                Level Range: ${lvl}
                Biome: ${biome}
                Time of Day: ${time_of_day}`)
    // If statement to check whether defaults persist
    if (nct === "N/A" && ct === "N/A") {
        // Pull both DCs from the database based on time of day
        if (time_of_day === "Day") {
            var ncdc = oaData.find(i => i.Biome == biome).Day_NC_DC
            var cdc = oaData.find(i => i.Biome == biome).Day_C_DC
        } else {
            var ncdc = oaData.find(i => i.Biome == biome).Night_NC_DC
            var cdc = oaData.find(i => i.Biome == biome).Night_C_DC
        }
    } else if (nct === "N/A") {
        // Set Non-combat DC as the user's input
        var ncdc = parseInt(nct)
        // Pull Combat DC from database based on time of day
        if (time_of_day === "Day") {
            var cdc = oaData.find(i => i.Biome == biome).Day_C_DC
        } else {
            var cdc = oaData.find(i => i.Biome == biome).Night_C_DC
        }
    } else if (ct === "N/A") {
        // Set Combat DC as user's input
        var cdc = parseInt(ct)
        // Pull both DCs from the database based on time of day
        if (time_of_day === "Day") {
            var ncdc = oaData.find(i => i.Biome == biome).Day_NC_DC
        } else {
            var ncdc = oaData.find(i => i.Biome == biome).Night_NC_DC
        }
    } else {
        // Use user inputs as the DCs
        var cdc = parseInt(ct)
        var ncdc = parseInt(nct)
    }
    // Log the pulled data
    console.log(`PULLED DATA
                Non-combat DC: ${ncdc}
                Combat DC: ${cdc}`)
    // Roll the dice and see if it produces a random encounter or not
    var roll = getRndInteger(1, 20)
    // Check the roll against the non-combat DC
    if (roll >= ncdc && roll < cdc) {
        var NCE = true
    } else {
        var NCE = false
    } 
    // Check the roll against the combat DC
    if (roll >= cdc) {
        var CE = true 
    } else {
        var CE = false
    }
    // Get some random encounters
    if (CE === true) {

    }
    if (NCE === true) {
        
    }
    // Log the Checked vars
    console.log(`CHECKED VARIABLES
                Roll: ${roll}
                Combat: ${CE}
                Non-combat: ${NCE}`)
}