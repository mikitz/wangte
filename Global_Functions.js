// Declare a function to select a random value from a dictionary
// Source: https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};
// Function to get a random integer
// Source: https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
    return parseInt((Math.floor(Math.random() * (max - min)) + min))
}
// Clears "output"
function clear_output() {
    document.getElementById('output').innerHTML = ""
}
// Clears an HTML element
function clear(id){
    document.getElementById(id).innerHTML = ""
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
    
