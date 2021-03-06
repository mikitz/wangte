// Populate the Calendar cells with the selected calendar
function populateCalendar(){
    // Get the selected calendar
    var selected_calendar = document.getElementById("calendar").value
    // Get the Week Length for the selected calendar
    var weekLength = `${selected_calendar}_weekLength`
    // Evaulate the above
    selected_calendar = eval(selected_calendar)
    weekLength = eval(weekLength)
    // Loop through the JSON to populate the months
    selected_calendar.forEach(element => {
        // Get the month name from the JSON
        var month_name = element.month_name
        // Get the number of days from the JSON for the given month
        var days = element.days
        // Populate the element with the name
        populateElement('output', month_name, 'h2')
        // Create a table for the given month
        var table = document.createElement('table')
        // Set the ID to the month's name
        table.setAttribute('id', month_name)
        // Loop through each day and populate the number
        for (d = 1; d < days + 1; d++) {
            // Create a row for the day
            var tr = document.createElement('tr')
            tr.appendChild(document.createElement('td'))

            tr.cells[0].appendChild(document.createTextNode(`Day #${d}`)) 

            table.appendChild(tr)
            
        }
    });
}