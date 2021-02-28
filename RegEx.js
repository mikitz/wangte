if (CE === true) {
    var encounter = eval(biome.toLowerCase()).filter(i => i.Level == lvl)
    encounter = encounter.find(i => i.d100 === ad100).Encounter
    const NewRegEx = /(\d+d\d+(\+)?)\d+/g // Find ndx+y (E.G. 1d4+3)
    var ndxyDice = NewRegEx.exec(encounter)
    console.log(ndxyDice)
    const NewRegEx2 = /(\d+d\d*)/g // Find xdx (E.G. 1d6)
    var ndxDice = NewRegEx2.exec(encounter)
    console.log(ndxDice)
    if (ndxyDice) {
        ndxyDice = ndxyDice[0]
        // Extract number of dice
        const RegEx = /\d+(?=d)/g
        var num_dice = RegEx.exec(ndxyDice)
        // Extrect Dice Sides
        const MoreRegEx = /(?<=d)(\d*)/g
        var num_of_sides = MoreRegEx.exec(ndxyDice)
        num_of_sides = num_of_sides[0]
        // Extract Modifier
        const EvenMoreRegEx = /(?<=\+)(\d*)/g
        var modifier = EvenMoreRegEx.exec(ndxyDice)
        modifier = parseInt(modifier[0])
        // Roll the dice
        var roll = fMultiRoll(num_dice, num_of_sides, 1)
        total = parseInt(roll + modifier)
        // Set up the Encounter message
        encounterFinal = encounter.replace(ndxyDice, total) + ` ${ED} ft. away.`
        // Log It
        console.log(`nDx+y STUFF
                    Encounter: ${encounter}
                    nDxy Dice: ${ndxyDice}
                    Dice #: ${num_dice}
                    Sides: ${num_of_sides}
                    Mod.: ${modifier}
                    Roll: ${roll}
                    Total: ${total}`)
    } else if (ndxDice) {
        ndxDice = ndxDice[0]
        // Extract number of dice
        const RegEx = /\d+(?=d)/g
        var num_dice = RegEx.exec(ndxDice)
        // Extrect Dice Sides
        const MoreRegEx = /(?<=d)(\d*)/g
        var num_of_sides = MoreRegEx.exec(ndxDice)
        num_of_sides = num_of_sides[0]
        // Roll the dice
        var total = fMultiRoll(num_dice, num_of_sides, 1)
        // Set up the Encounter message
        encounterFinal = encounter.replace(ndxDice, total) + ` ${ED} ft. away.`
        // Log It
        console.log(`nDx STUFF
                    Encounter: ${encounter}
                    nDx Dice: ${ndxDice}
                    Dice #: ${num_dice}
                    Sides: ${num_of_sides}
                    Total: ${total}`)
    } else {
        encounterFinal = encounter
    }

}
if (NCE === true) {
    
} 