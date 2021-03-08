// Clearing functions
function clear_teleport(){
    document.getElementById('output_teleport').innerHTML = ""
}
function clear_scrying(){
    document.getElementById('output_scrying').innerHTML = ""
}

// Function to determine the outcome of the Teleport roll
function teleportOutcome(off_target, similar_area, mishap){
    // Get distance in miles
    var distance = parseInt(document.getElementById("distance").value)
    // Get the caster's Arcana Modifier
    var arcana = parseInt(document.getElementById("arcana").value)
    // Roll 1d100 to determine the outcome of the teleport
    let d100 = getRndInteger(1, 100)
    console.log(`d100: ${d100}`)
        // Add arcana to the d100
        d100 = d100 + arcana
        console.log(`+Arcana: ${d100}`)
    // Calculate the percentage off as determined by the Off Target entry in the Teleport spell
    let firstd10 = getRndInteger(1, 10)
    let secd10 = getRndInteger(1, 10)
    let percent_off = firstd10 * secd10
    // Calculate the distance off by multiplying the distance by the percent off
    let distance_off = Math.ceil(distance * (percent_off / 100)/3.0)*3;
    // Create a list of all possible directions
    let directionsList = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest'];
    // Determine the direction in which the Teleport drops the caster and their group
    let direction = directionsList[Math.floor(Math.random() * directionsList.length)];
    // Alert the user to an empty Distance text input
    if (distance == '') {
        ui.notifications.warn("Please input the distance.");
        dTeleport.render(true);
    } else {
        if (d100 >= off_target + 1) {
            // On target
            var result = 'on target';
            var vMessage = `<br>The caster and their group were <B>${result}</B> and arrive safely at the intended destination.<br> ------------------------------`
            populateElement('output_teleport', vMessage)
        } else if (d100 >= similar_area + 1 && d100 <= off_target) {
            // Off target
            console.log(`Percent Off: ${percent_off}`);
            var result = 'off target';
            var vMessage = `<br>The caster and their group were <B>${result}</B>, resulting in the group being teleported <B><I>${distance_off} miles ${direction}</I></B> of the intended distination.<br> ------------------------------`
            populateElement('output_teleport', vMessage)
        } else if (d100 >= mishap + 1 && d100 <= similar_area) {
            // Similar Area
            var result = 'similar area';
            var vMessage = `<br>The caster and their group wind up in a different <B>${result}</B> that's visually and/or thematically similar to the intended destination.<br> ------------------------------`
            populateElement('output_teleport', vMessage)
        } else if (d100 <= mishap) {
            // Mishap
            var result = 'mishap';
            var dmg = fMultiRoll(3, 10, 1)
            var vMessage = `<br>The caster had a teleportation <B>${result}</B>, resulting in everyone who teleported suffering <B><I>${dmg}</I></B> force damage. </P> THE GM MUST ROLL AGAIN ON THE TELEPORT OUTCOME TABLE!<br> ------------------------------`
            populateElement('output_teleport', vMessage)
        }
    }
}
// Algorithm for the Teleport spell
function teleport(){
    // Get the familiarity
    var c = document.getElementById("familiarity")
    var familiarity = c.options[c.selectedIndex].text
    // Switch to handle the different familiarities
    switch (familiarity) {
        case 'Permanent Circle':
            var result = 'on target';
            populateElement('output_teleport', `<br>The caster and their group were <B>${result}</B> and arrive safely at the intended destination.<br> ------------------------------`)
            break
        case 'Associated Object':
            var result = 'on target';
            populateElement('output_teleport', `<br>The caster and their group were <B>${result}</B> and arrive safely at the intended destination.<br> ------------------------------`)
            break
        case 'Very Familiar':
            teleportOutcome(24, 13, 5)
            break
        case 'Seen Casually':
            teleportOutcome(53, 43, 33)
            break
        case 'Viewed Once':
            teleportOutcome(73, 53, 43)
            break
        case 'Description Only':
            teleportOutcome(73, 53, 43)
            break
        case 'Fasle Destination':
            teleportOutcome(101, 100, 50)
            break
    }
}
// Scrying function
function scrying(){
    // How knowledgable is the caster of the target?
    var c = document.getElementById("knowledge")
    var rbKnow = c.options[c.selectedIndex].text
    // How is the caster making the connection to the target?
    var c = document.getElementById("connection")
    var rbConn = c.options[c.selectedIndex].text
    // Caster's Spell Save DC
    var spellSaveDC = document.getElementById("caster_save_dc").value
    // Target's Wisdom Save modifier
    var tBonus = document.getElementById("target_bonus").value
    // Set the Connecion save modifier based on what was selected
    if (rbConn == "Likeness or picture") {
        saveModConn = -2;
    } else if (rbConn == "Possession or garment") {
        saveModConn = -4;
    } else if (rbConn == "Body part, lock of hair, bit of nail, or the like") {
        saveModConn = -10;
    }
    // Set the Knowledge save modifier based on what was selected
    if (rbKnow == "Secondhand (you have heard of the target)") {
        saveModKnow = 5
    } else if (rbKnow == "Firsthand (you have met the target)") {
        saveModKnow = 0
    } else if (rbKnow == "Familiar (you know the target well)") {
        saveModKnow = -5
    }
    // Set the save modifier
    let saveMod = saveModConn + saveModKnow + tBonus
    // Roll the save
    let saveRoll = getRndInteger(1, 20) + saveMod
    // Handle the outcome
    if (saveRoll >= spellSaveDC) {
        var vMessage = "Scrying unsuccessful. Caster may not scry on the same target again for 24 hours.<br> ------------------------------"
    } else {
        var vMessage = "Scrying successful!<br> ------------------------------"
    }
    // Populate the output
    populateElement('output_scrying', vMessage)
}