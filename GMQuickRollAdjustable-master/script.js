function clearDice() {
  for (i = 4; i <= 12; i += 2) {
    let x = document.getElementById(`d${i}buttons`);
    let y = document.getElementById(`d${i}rolls`);
    x.textContent = "";
    y.textContent = "";
  }
}

function adjustDiceDisplay() {
  let diceCount = document.getElementById("diceCountInput").value;

  //clear any dice previously added
  clearDice();

  //Creating The buttons and history for 1d4
  //Should have flipped j and i but it is too late
  //j = dice type
  //i = dice count
  for (j = 4; j <= 12; j += 2) {
    for (i = 0; i < diceCount; i++) {
      //create the button and it's text
      let newButton = document.createElement("BUTTON");
      let buttonText = document.createTextNode(`${i + 1}d`);
      newButton.setAttribute("class", "btn-primary");
      newButton.classList.add("list-group-item");
      newButton.classList.add(`type-${j}d`); // Mess with this for changing color
      newButton.appendChild(buttonText);

      //create the span, it's attributes, and it's text
      let newSpan = document.createElement("span");
      let spanText = document.createTextNode(`${j}`);
      newSpan.appendChild(spanText);
      newSpan.setAttribute("class", "dice-type");

      //add the span to the button
      newButton.appendChild(newSpan);

      //Add the roll dice function to the button
      newButton.addEventListener("click", beginRollProcess);

      //add the button to rest of the list
      document.getElementById(`d${j}buttons`).appendChild(newButton);

      //create the history item
      let newHistoryItem = document.createElement("li");
      let historyItemText = document.createTextNode(`#`);
      newHistoryItem.setAttribute("id", `${i + 1}d${j}history`);
      newHistoryItem.setAttribute("class", "list-group-item");
      newHistoryItem.appendChild(historyItemText);

      //add the history item
      document.getElementById(`d${j}rolls`).appendChild(newHistoryItem);
    }
  }
}

//This function is applied to all generated buttons
function beginRollProcess() {
  let dice = this.textContent.trim();
  let diceCount;
  let diceType;

  //using the location of d, make substrings to find the number of dice and the type of dice to be rolled.

  let x = getDiceCountAndType(dice);
  diceCount = x[0];
  diceType = x[1];

  let total = rollDice(diceCount, diceType);

  displayRoll(diceCount, diceType, total);
}

//this function is used after the button has been dissected into the type of dice and how the amount to be rolled
function rollDice(diceCount, diceType) {
  let total = 0;
  //Roll for the total num of dice
  for (i = 0; i < diceCount; i++) {
    let randomNum = Math.floor(Math.random() * diceType) + 1;
    total += randomNum;
    console.log(`Roll ${i + 1} was a ${randomNum}`);
  }

  console.log("The total is " + total);

  return total;
}

//Used to updat the UI
function displayRoll(
  diceCount,
  diceType,
  total,
  isAdv = false,
  isDis = false,
  isCustom = false
) {
  let historyId;

  //Check if the advantage or disadvantage is true
  //If one is true, then use their special Id
  //Else, use the generated one
  if (isAdv === true) {
    historyId = document.getElementById("advhistory");
  } else if (isDis === true) {
    historyId = document.getElementById("dishistory");
  } else if (isCustom === true) {
    historyId = document.getElementById("customhistory");
  } else {
    historyId = document.getElementById(`${diceCount}d${diceType}history`);
  }

  //Add to the html list with or without a comma
  if (historyId.innerHTML === "#") {
    historyId.innerHTML = total;
  } else {
    //add all previous rolls and new roll together
    //Save in a new variable called all rolls
    let allRolls = `${total},${historyId.innerHTML}`;
    //if the allRolls is too long, trim after the last comma
    if (allRolls.length >= 12) {
      let lastComma = allRolls.lastIndexOf(",");
      allRolls = allRolls.substring(0, lastComma);
    }
    console.log(allRolls);

    //apply change to the dom
    historyId.innerHTML = `${allRolls}`;
  }

  console.log("~~~~~~~~~~~~~~~~`");
}

//This is actually for all d20's AND 1d100
function rollD20(el) {
  //get the dice
  let dice = el.textContent.trim();
  let diceCount;
  let diceType;
  let total;
  let isAdv = false;
  let isDis = false;
  let isCustom = false;
  //Find the Dice count and type
  //also check for adv or dis
  if (dice === "Adv." || dice === "Dis.") {
    //If it's advantage or disadvantage, roll twice and save both rolls
    let roll1 = rollDice(1, 20);
    let roll2 = rollDice(1, 20);
    let higher, lower;

    //compare the two rolls
    if (roll1 >= roll2) {
      higher = roll1;
      lower = roll2;
    } else {
      higher = roll2;
      lower = roll1;
    }

    console.log(
      `The higher number was ${higher} and the lower number was ${lower}`
    );

    //find if its advantage or disadvantage.
    //total will be equal to the highest or lowest respectively
    if (dice === "Adv.") {
      total = higher;
      isAdv = true;
    } else {
      total = lower;
      isDis = true;
    }
  } else if (dice === "Roll") {
    //This else if is for custom Rolls
    //Get the values from the boxes
    diceCount = document.getElementById("custom-dice-count").value;
    diceType = document.getElementById("custom-dice-type").value;
    total = rollDice(diceCount, diceType);
    isCustom = true;
  } else {
    //This is for a basic 1d20
    let x = getDiceCountAndType(dice);
    diceCount = x[0];
    diceType = x[1];

    total = rollDice(diceCount, diceType);
  }

  //update the UI
  displayRoll(diceCount, diceType, total, isAdv, isDis, isCustom);
}

function getDiceCountAndType(dice) {
  let dPlace;
  // find the loction of 'd' in xdx in order to extract numbers
  for (i = 0; i < dice.length; i++) {
    if (dice.charAt(i) === "d") {
      dPlace = i;
      break;
    }
  }

  //using the location of d, make substrings to find the number of dice and the type of dice to be rolled.
  // Then return those two numbers
  return [dice.substring(0, dPlace), dice.substring(dPlace + 1)];
}
