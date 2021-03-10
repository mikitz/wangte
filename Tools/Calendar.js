// Populate the Calendar cells with the selected calendar
function populateCalendar(){
    // Get the selected calendar
    var selected_calendar = document.getElementById("calendar").value
    // Get the Week Length for the selected calendar
    var weekLength = `${selected_calendar}_weekLength`
    // Evaulate the above
    selected_calendar = eval(selected_calendar)
    weekLength = eval(weekLength)
// Get the main element
    var main = document.getElementsByTagName('main')[0]
    // Loop through the JSON to populate the months
    selected_calendar.forEach(element => {
        // Get the month name from the JSON
        var monthName = element.month_name
        // Get the number of days from the JSON for the given month
        var days = element.days
        // Create a new button with the month name
        const newButton = document.createElement("button")
        newButton.setAttribute('class', 'collapsible')
        newButton.innerHTML = monthName
        main.appendChild(newButton)
        // Create a new div within the button that's collapsed
        const newDiv = document.createElement("div")
        newDiv.setAttribute('class', 'content')
        newDiv.setAttribute('id', 'con')
        main.appendChild(newDiv)
        // Set up the Week Number var
        var weekNum = 0
        // Set up the month list
        const newList = document.createElement('ul')
        newList.setAttribute('id', monthName)
        newDiv.appendChild(newList)
        // Calculate # of Weeks
        var numWeeks = Math.ceil(days/weekLength)
            // Set up the weeks lists
            for (w = 1; w < numWeeks + 1; w++) {
                const weekList = document.createElement('ul')
                weekNum = weekNum + 1
                weekList.setAttribute('id', monthName + weekNum)
                newList.appendChild(weekList)
                
            }
            // Loop through the days and append them to the appropriate week
            for (d = 1; d < days + 1; d++) {
                var week = Math.ceil(d/weekLength)
                var weekDiv = document.getElementById(`${monthName}${week}`)
                var li = document.createElement('li')
                li.innerHTML = d
                weekDiv.appendChild(li)
            }
    });
    // Add collapsible properties
    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
        content.style.display = "none";
        } else {
        content.style.display = "block";
        }
    });
    }
}