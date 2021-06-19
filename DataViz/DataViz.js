// Function to build a table from a Dictionary
function displayColumns(tablename) {
    // Clear it
    document.getElementById('output').innerHTML = ''
    // GET COL NAMES
        // Get the Keys of the table
        var vKeys = Object.keys(tablename[0])
            // Log it
            console.log(vKeys)
        // Make a new list for the keys
        var lKeys = []
        // Iterate over the keys
        vKeys.forEach((element) => {
            // Replace underscores with space
            var key = element.replace("_", " ")
            // Transform to title-case
            key = lowerCaseAllWordsExceptFirstLetters(key)
            // Check if all letter are lowercase
            if (key === key.toLowerCase()) {
                // Convert to title case
                key = key.toProperCase()
            }
            // Push it to a new list
            lKeys.push(key)
        })
            // Log it
            console.log(lKeys)
    
    // CREATE TABLE
        // Table
        var table = document.createElement('table')
        table.setAttribute("id", "table")
        table.setAttribute("class", "tableizer-table")
        // HEADER
            // Create the head element
            var tableHead = document.createElement('thead')
            tableHead.setAttribute("id", "header")
            tableHead.setAttribute("class", "tableizer-firstrow")
            // Append row to the header
            var headerRow = document.createElement('tr')
            headerRow.setAttribute("id", 'header_row')
            headerRow.setAttribute('class', "tableizer-firstrow")
            tableHead.appendChild(headerRow)
            // Append the column names to the header row
            lKeys.forEach((element) => {
                var td = document.createElement('th')
                td.innerHTML = `<button class='table_button'>${element}</button>`
                headerRow.appendChild(td)
            })
            // Append the table header to the table
            table.appendChild(tableHead)
        // BODY
            // Create the body element
            var tableBody = document.createElement('tbody')
            tableBody.setAttribute("id", "table_body")
            // Append the table body to table
            table.appendChild(tableBody)
            // Loop through each row of the database table
            for (row = 0; row < tablename.length; row++) {
                // Append a row to the table
                var tableRow = document.createElement('tr')
                tableBody.appendChild(tableRow)
                // Loop through each key
                for (key = 0; key < vKeys.length; key++) {
                    // Key
                    var blah = vKeys[key]
                    // Pull the value
                    var value = tablename.find(i => i.ID == row)[blah]
                    // Create a TD element
                    var td = document.createElement('td')
                    td.innerHTML = value
                    tableRow.appendChild(td)
                }
            }
    // APPEND THE TABLE TO THE DOCUMENT 
        document.getElementById('output').appendChild(table)

    // ON CLICK LISTENER
    table.querySelectorAll(`button`).forEach((th, position) => {
        th.addEventListener(`click`, evt => sortTable(position));
      });
}

