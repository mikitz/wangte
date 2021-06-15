// Function to format gold value into all currencies
// E.G. input 32.12 gp and output "3 pp, 2 gp, 1 sp, and 2 cp"
function formatGold(goldPieces) {
    goldPieces = goldPieces.toFixed(2)
    // Get platinum pieces (pp)
    let platinum = Math.floor(goldPieces * 0.1)
    // Get gold pieces (gp)
    let goldReg = goldPieces.toString().match(/\d\./gm)
    // Replace the period in gold with nothing 
    let gold = parseInt(goldReg[0].replace(".", ""))
    // Get silver pieces (sp)
    let silver = parseInt(goldPieces.toString().match(/\.\d/gm)[0].replace(".", ""))
    // Get copper pieces (cp)
    let copper = parseInt(goldPieces.toString().match(/\.\d+/gm)[0].replace(".", "").toString().slice(-1))
    // Log it
    console.log(`CURRENCIES CONVERTED
        Platinum: ${platinum} pp
        Gold: ${gold} gp
        Silver: ${silver} sp
        Copper: ${copper} cp`)
    // Return
    return `${platinum} pp, ${gold} gp, ${silver} sp, and ${copper} cp`
}
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
// Function to set to a selection
// Source: https://stackoverflow.com/questions/78932/how-do-i-programmatically-set-the-value-of-a-select-box-element-using-javascript
function selectElement(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
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
// Define a function to convert a string to Title case
// Source: https://stackoverflow.com/a/5574446/3725925
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

// Define a dice function to roll multiple dice
function fMultiRoll(number_of_dice, dice_sides, multiplier) {
    // Define an empty array to store the rolls
    aRolls = []
    // Parse integers
    var number_of_dice = parseInt(number_of_dice)
    var dice_sides = parseInt(dice_sides)
    var multiplier = parseInt(multiplier)
    // Set total to zero
    //var total = 0
    // Loop through all the dice and return random integers
    if (number_of_dice > 1) {
        for (x = 0; x < number_of_dice; x++) {
            a = getRndInteger(1, dice_sides)
            aRolls.push(a)
            // total += a
        }
        // Get the sum of the array
        var total = aRolls.reduce((a, b) => a + b, 0) * multiplier
    } else {
        var total = getRndInteger(1, dice_sides)
    }
    console.log(`Multi Roll Result: ${total}`)
    return parseInt(total)
}
// Define a function to replace a string by index range
// Source: https://stackoverflow.com/a/12568270/3725925
function replaceRange(str, start, end, substitute) {
    return str.substring(0, start) + substitute + str.substring(end);
}

// Function to convert inches to f'in"
function convertInches(inches) {
    let feetFromInches = Math.floor(inches / 12);//There are 12 inches in a foot
    let inchesRemainder = inches % 12;
 
    let result = feetFromInches + "'" + inchesRemainder + '\"';
    return result
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

// Function to roll on a table and pull the value from the specified key
function rollTableKey(table, keyLast){
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
        sides = parseInt(sides[0])
        // Log it
        console.log(`Sides: ${sides}`)
    // Roll the die
        var roll = getRndInteger(1, sides)
        console.log(`Roll Table Roll: ${roll}`)
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
        console.log(`RESULT: ${result}`)
        console.log(`------------`)
        return result
}
// Function to pull a rolled result from a given table with max 2 columns
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
        sides = parseInt(sides[0])
        // Log it
        console.log(`Sides: ${sides}`)
    // Roll the die
        var roll = getRndInteger(1, sides)
        console.log(`Roll Table Roll: ${roll}`)
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
        console.log(`RESULT: ${result}`)
        console.log(`------------`)
        return result
}

// Function to roll dice inside a string
function rollDice(myString){
    // Extract dice groups from encounter
    const NewRegEx = /(?:\d+d\d*\+?\d*)/gm
    var aDice = myString.match(NewRegEx)
    // Check to see if aDice is not empty
    if (aDice) {
        var encounterF = myString
        // Log for debugging
        console.log("aDice")
        console.log(aDice)
        // Loop through aDice and calculate totals for each element
        for (i = 0; i < aDice.length; i++) {
            // Extract number of dice
            const RegEx = /\d+(?=d)/g
            var num_dice = parseInt(RegEx.exec(aDice[i]))
            // Extrect Dice Sides
            const MoreRegEx = /(?<=d)(\d*)/g
            var num_of_sides = MoreRegEx.exec(aDice[i])
            num_of_sides = parseInt(num_of_sides[0])
            // Extract Modifier
            const EvenMoreRegEx = /(?<=\+)(\d*)/g
            var modifier = EvenMoreRegEx.exec(aDice[i])
            if (modifier) {modifier = parseInt(modifier[0])}
            else {modifier = 0}
            // Total
            var total = fMultiRoll(num_dice, num_of_sides, 1)
            total = total + modifier
            // Log for debugging
            console.log(`${aDice[i]}'s total is ${total}`)
            // Set up the Encounter message
            console.log(`${i}: ${encounterF}`)
            encounterF = encounterF.replace(aDice[i], total)
        }
    } else {
        encounterF = myString
    }
    console.log(`Roll Dice Result: ${encounterF}`)
    return encounterF
}

// Function to roll dice expressed as ndx
function rollShit(myString){
    // Extract number of dice
    const RegEx = /\d+(?=d)/g
    var num_dice = RegEx.exec(myString)
    console.log(`Number of Dice: ${num_dice}`)
    // Extrect Dice Sides
    const MoreRegEx = /(?<=d)(\d*)/g
    var num_of_sides = MoreRegEx.exec(myString)
    num_of_sides = num_of_sides[0]
    console.log(`Number of Sides: ${num_of_sides}`)
    // Extract Modifier
    const EvenMoreRegEx = /(?<=\+)(\d*)/g
    var modifier = EvenMoreRegEx.exec(myString)
    if (modifier) {modifier = parseInt(modifier[0])}
    else {modifier = 0}
    // Total
    var total = fMultiRoll(num_dice, num_of_sides, 1)
    total = total + modifier
    // Log for debugging
    console.log(`${myString}'s total is ${total}`)
    // Return
    return parseInt(total)
}

// Function to replace creatures with links
function appendLink(myString) {
    // Extract creatures from the encounter 
    // Push regex matches to a list while looping through the whole DB
    var lCreatures = []
    var newregex = new RegExp('[\(*\)*]', 'gm')
    var creatureExtract = bestiary_basic.forEach(function(element){
        var nameFixed = element.name_lower.replace(newregex, '\\$&')
        var reFull = new RegExp(`${nameFixed}`, "g")
        // RegEx still doesn't find "half-ogre (ogrillon)" or "vampire spawn"
            // Instead if finds "vampire"
        var inc = myString.match(reFull)
        if (inc) {
            // Sort inc by length to swap out longer strings first
            inc = inc.sort(function(a, b){return b.length - a.length})
            // Loop through inc and append each element to lCreatures
            for (m = 0; m < inc.length; m++) {
                lCreatures.push(inc[m])
            }
            console.log("--INC--")
            console.log(inc)
        }
    })
    // Manipulate the list
    console.log("++++++++CREATURE LIST++++++++")
    console.log(lCreatures)
        // Remove duplicates
        lCreatures = lCreatures.filter (function (value, index, array) { 
            return array.indexOf (value) == index;
        });
        console.log("========CREATURE LIST========")
        console.log(lCreatures)
        // Check if any of the elements are in the other elements
        // Loop through the list
        for (z = 0; z < lCreatures.length; z++) {
            var item = lCreatures[z].toLowerCase()
            var bookExtract = bestiary_basic.find(r => r.name_lower == item).book_lower
            console.log(`ITEM: ${item}`)
            // Escape special RegEx characters
            var newregex = new RegExp('[\(*\)*]', 'gm')
            console.log(`ITEM REPLACE: ${item}\n` + 
                        `ENCOUNTER: ${myString}`)
            // Extract all matches of the item
            var regex = new RegExp(`(${item})`, "g")
            var regMatch = myString.match(regex)
            console.log("REGMATCH")
            console.log(regMatch)
            // Log their indecies to a list
            var lIndecies = []
            while ((match = regex.exec(myString)) != null) {
                lIndecies.push(match.index)
            }
            console.log("INDEX LIST")
            console.log(lIndecies)
            // Loop through the matches by index checking
            for (m = 0; m < regMatch.length; m++) {
                // Needed variables
                var idxStart = lIndecies[m]
                var word = regMatch[m]
                var idxEnd = idxStart + word.length
                var idxRange = myString.substring(idxStart, idxEnd)
                var idxExtra = myString.substring(idxStart - 1, idxEnd + 1)
                // Check for undesirables
                var inclu = ['<','_','%','0', '>', '#'].some(el => idxExtra.includes(el))
                var incluNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
                // Replace creatures with links
                if (!inclu) {
                    wordX = bestiary_basic.find(y => y.name_lower == word).name.toLowerCase()
                    myString = replaceRange(myString, idxStart, idxEnd, linkGenerator5eTools(wordX, bookExtract))
                }                             
                // Log for debugging
                console.log(`INDEX VARS
                Start: ${idxStart}
                End: ${idxEnd}
                Word: ${word}
                Substring: ${idxRange}
                Extra: ${idxExtra}`)
            }
        }
    return myString
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

// FUnction to clear a generated table
function clear_table(){
    document.getElementById('table_output').innerHTML = ""
}

// Function to create an HTML table from an Object Array
// TODO: #7 Finish this function
function printTable(table, element) {
    // GET HEADERS
        // Pull the headers from the table
        var headers = []
        // Loop through the table's keys (headers)
        for (var key of Object.keys(table)) {
            headers.push(key)
        }
    // SET UP THE TABLE
        // Get the element name to append the table to
        let div = document.querySelector(element)
        // Remove any other children in case they're present
        //while (div.firstChild) div.removeChild(div.firstChild)
        // Create the table element
        let tableFinal = document.createElement('table')
        // Set the class of the table
        tableFinal.className = 'tableizer-table'
        // Create the table header group element
        let tableFinalHead = document.createElement('thead')
        // Create the row that contains headers
        let tableFinalHeader = document.createElement('tr')
        // Loop through the headers array and append them to the header row
        headers.forEach(header => {
            // Create the table header element
            let tableHeader = document.createElement('th')
            // Set the elements inner text to the header
            tableHeader.innerText = header
            // Append the header to the header row
            tableFinalHead.append(tableHeader)
        })
        // Append the header row to the table
        tableFinalHead.append(tableFinalHeader)
        // Append the head to the table
        tableFinal.append(tableFinalHead)
        // Create the table body group element
        let tableBody = document.createElement('tbody')
        // Append table body to the table
        tableFinal.append(tableBody)

    // Append the table to the div
    div.append(tableFinal)
}

// Function to lower case all but first letter
// Source: https://stackoverflow.com/a/40195890/3725925
function lowerCaseAllWordsExceptFirstLetters(string) {
    return string.replace(/\S*/g, function (word) {
        return word.charAt(0) + word.slice(1).toLowerCase();
    });
}

// Functions to compare values and sort a table
// Source: https://stackoverflow.com/a/55462779/3725925
function compareValues(a, b) {
    // return -1/0/1 based on what you "know" a and b
    // are here. Numbers, text, some custom case-insensitive
    // and natural number ordering, etc. That's up to you.
    // A typical "do whatever JS would do" is:
    return (a<b) ? -1 : (a>b) ? 1 : 0;
  }
  // Function to sort table by clicked column
  function sortTable(colnum) {
    // get all the rows in this table:
    let rows = Array.from(table.querySelectorAll(`tr`));
  
    // but ignore the heading row:
    rows = rows.slice(1);
  
    // set up the queryselector for getting the indicated
    // column from a row, so we can compare using its value:
    let qs = `td:nth-child(${colnum}`;
  
    // and then just... sort the rows:
    rows.sort( (r1,r2) => {
      // get each row's relevant column
      let t1 = r1.querySelector(qs);
      let t2 = r2.querySelector(qs);
  
      // and then effect sorting by comparing their content:
      return compareValues(t1.textContent,t2.textContent);
    });
  
    // and then the magic part that makes the sorting appear on-page:
    rows.forEach(row => table.appendChild(row));
  }