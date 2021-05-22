// Declare a function to select a random value from a dictionary
// Source: https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};
// Function to get a random integer
// Source: https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
    return parseInt((Math.floor(Math.random() * ((max+1) - min)) + min))
}
// Clears "output"
function clear_output() {
    document.getElementById('output').innerHTML = ""
}
// Clears an HTML element
function clear(id){
    document.getElementById(id).innerHTML = ""
}
// Clears "output1"
function clear_output1(){
    document.getElementById('output1').innerHTML = ""
}
// Define a dice function to roll multiple dice
function fMultiRoll(number_of_dice, dice_sides, multiplier) {
    // Define an empty array to store the rolls
    aRolls = []
    // Loop through all the dice and return random integers
    if (number_of_dice > 1) {
        for (x = 0; x < number_of_dice; x++) {
            a = getRndInteger(1, dice_sides)
            aRolls.push(a)
        }
        // Get the sum of the array
        var total = aRolls.reduce((a, b) => a + b, 0) * multiplier
    } else {
        var total = getRndInteger(1, dice_sides)
    }
    return parseInt(total)
}
// Define a function to replace a string by index range
// Source: https://stackoverflow.com/a/12568270/3725925
function replaceRange(str, start, end, substitute) {
    return str.substring(0, start) + substitute + str.substring(end);
}

// Define a function to populate an HTML element
function populateElement(id, contents, type){
    // Print the output
    var p = document.createElement(type)
    p.innerHTML = contents
    document.getElementById(id).appendChild(p)
}
// Function to parse JSON data and turn it into an HTML table
// Source: https://stackoverflow.com/a/21065846/3725925
function JSONtoHTMLTable(){
    var _table_ = document.createElement('table'),
    _tr_ = document.createElement('tr'),
    _th_ = document.createElement('th'),
    _td_ = document.createElement('td');

    // Builds the HTML Table out of myList json data from Ivy restful service.
    function buildHtmlTable(arr) {
    var table = _table_.cloneNode(false),
        columns = addAllColumnHeaders(arr, table);
    for (var i = 0, maxi = arr.length; i < maxi; ++i) {
        var tr = _tr_.cloneNode(false);
        for (var j = 0, maxj = columns.length; j < maxj; ++j) {
        var td = _td_.cloneNode(false);
        cellValue = arr[i][columns[j]];
        td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
        tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
    }

    // Adds a header row to the table and returns the set of columns.
    // Need to do union of keys from all records as some records may not contain
    // all records
    function addAllColumnHeaders(arr, table) {
    var columnSet = [],
        tr = _tr_.cloneNode(false);
    for (var i = 0, l = arr.length; i < l; i++) {
        for (var key in arr[i]) {
        if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key) === -1) {
            columnSet.push(key);
            var th = _th_.cloneNode(false);
            th.appendChild(document.createTextNode(key));
            tr.appendChild(th);
        }
        }
    }
    table.appendChild(tr);
    return columnSet;
    }
}

// Function to pull a rolled result from a given table with ranges for its properties
function rollTable(table){
    // Get the first key
        if (table.length > 0) {
            var columnsIn = table[0]
            for(var keyFirst in columnsIn) {
                break
            }
        } else {
            var keyFirst = 'No Columns'
        } 
        // Log the first key
        console.log(`First Key: ${keyFirst}`)
    // Get the last key
        if (table.length > 0) {
            var columnsIn = table[0]
            var x = 0
            for(var keyLast in columnsIn) {
                x = x + 1
                if (x = columnsIn.length - 1) {
                    break
                }
            }
        } else {
            var keyLast = 'No Columns'
        } 
        // Log the last key
        console.log(`Last Key: ${keyLast}`)
    // Get number of sides
        const NewRegEx = /\d\d*/gm
        var sides = keyFirst.match(NewRegEx)
        sides = sides[0]
        // Log it
        console.log(`Sides: ${sides}`)
    // Roll the die
        var roll = fMultiRoll(1, sides, 1)
        console.log(`Roll: ${roll}`)
    // Find the result 
        console.log(`FIRST ROW`)
        console.log(Object.values(table)[0])
        console.log(`FIRST VALUE`)
        console.log(Object.values(table)[0][keyFirst])
        if (typeof Object.values(table)[0][keyFirst] == 'string' || Object.values(table)[0][keyFirst] instanceof String) {
            // Loop through the first key values and determine if roll is in the range
            for (r = 0; r < table.length; r++) {
                var blah = Object.values(table)[r][keyFirst]
                console.log(`BLAH: ${blah}`)
                // Parse the range
                    // Get the first number
                    const RegEx1 = /^(\d+)/gm
                    var firstNum = blah.match(RegEx1)
                    firstNum = firstNum[0]
                    console.log(`FIRST NUMBER: ${firstNum}`)
                    // Get the second number
                    const RegEx2 = /(\d+)$/gm
                    var secondNum = blah.match(RegEx2)
                    secondNum = secondNum[0]
                    console.log(`SECOND NUMBER: ${secondNum}`)
                // Determine if the roll was within the range
                if (roll <= parseInt(secondNum) && roll >= parseInt(firstNum)) {
                    var result = Object.values(table)[r][keyLast] 
                    break
                }
            }
        } else {
            // Pull the exact result
            var result = table.find(r => r[keyFirst] == roll)[`${keyLast}`]
        }
        // Log it
        console.log(`RESULT: <b>${result}</b>`)
        console.log(`------------`)
        return result
}

// Function to roll dice inside a string
function rollDice(string){
    
}

// Function to replace creatures with links
function appendLink(string) {

}

// Function to copy text of a specified element
// Source: https://stackoverflow.com/a/54498963/3725925
function copyElementText(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    // Alert the user that it has been copied
    alert("The bottom list has been copied to your clipboard!");
}