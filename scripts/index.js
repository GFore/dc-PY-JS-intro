// JS Comment
// console.log("Hey JS from scripts");

// const promptText = "What is your name?";
// const userName = prompt(promptText);

// let greeting = `Hello, ${userName}!`;
// console.log(greeting);
// greeting = greeting + "!"
function dayOfWeek() {
    const theDay = Number(document.getElementById("id_dayNum").value);
    let dayName = 'Not a valid day number ya biggy dummy!';

    switch (theDay) {
        case 0:
            dayName = 'Sunday';
            break;
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Saturday';
            break;
        
    };
    document.getElementById("id_result4").innerHTML = `Result: <span class="res">${dayName}</span>`;
}

function workOrSleep() {
    const theDay = Number(document.getElementById("id_dayNum2").value);
    let strReply = 'Not a valid day number ya biggy dummy!';

    if (theDay > 0 && theDay < 6) {
        strReply = "Go to Work";
    } else if (theDay === 0 || theDay === 6) {
        strReply = "Sleep in"
    }

    document.getElementById("id_result5").innerHTML = `Result: <span class="res">${strReply}</span>`;
    
}

function celToF() {
    let myTemp = Number(document.getElementById("id_tempCel").value);
    let strReply = 'Not a valid temperature ya biggy dummy!';
    // the formula to convert degrees C to degrees F is: F = C x 1.8 + 32

    if (myTemp > -1001 && myTemp < 1001) {
        myTemp = myTemp * 1.8 + 32;

        strReply = `Temp in Fahrenheit is: ${myTemp}&deg;`;
    }

    document.getElementById("id_result6").innerHTML = `Result: <span class="res">${strReply}</span>`;
}


function clearResult(inputName, resultName, radioButtonList) {
    inputName.forEach(element => {document.getElementById(element).value = "";});
    // radioButtonList.forEach(element => {document.getElementById(element).removeAttribute("checked")});

    //This is supposed to reset any radio buttons to unchecked but it is not working
    if (radioButtonList.length > 0) {
        radioButtonList.forEach(element => {
            if (document.getElementById(element).hasAttribute("checked")) {
                document.getElementById(element).removeAttribute("checked");
            }
        });
    }
    document.getElementById(resultName).innerHTML = `Result: `;
}

function exHelloYou() {
    document.getElementById("id_result1").innerHTML = `Result: <span class="res">Hello, ${document.getElementById("id_name1").value}!</span>`
}

function exHelloYouCaps() {
    document.getElementById("id_result2").innerHTML = `Result: <span class="res">HELLO, ${document.getElementById("id_name2").value.toUpperCase()}!</span>`
}

function madlib() {
    document.getElementById("id_result3").innerHTML = `Result: <span class="res">${document.getElementById("id_name3").value}\'s favorite subject in school is ${document.getElementById("id_subj").value}.</span>`
}

function tipCalc() {
    let totBillAmt = Number(document.getElementById("id_billAmt").value);
    let tipAmt = 0;
    let tipRate = 0.1;
    let perPerson = 0;

    if (document.querySelector('input[name = "svc"]:checked').value === "good") {
        tipRate = 0.2;
    } else if (document.querySelector('input[name = "svc"]:checked').value === "fair") {
        tipRate = 0.15;
    }
    tipAmt = totBillAmt*tipRate
    totBillAmt += tipAmt
    perPerson = totBillAmt / Number(document.getElementById("id_billSplit").value)

    document.getElementById("id_result7").innerHTML = `Result: <span class="res">Tip: $${tipAmt.toFixed(2)}</span>`
    document.getElementById("id_result7").innerHTML += ` <span class="res"> Total: $${totBillAmt.toFixed(2)}</span>`
    document.getElementById("id_result7").innerHTML += ` <span class="res"> Each: $${perPerson.toFixed(2)}</span>`
}


function translate(ltr) {
    const lettersToNumbers = {'A': '4', 'E': '3', 'G': '6', 'I': '1', 'O': '0', 'S': '5', 'T': '7',};
    return lettersToNumbers[ltr] || ltr;
  }

function leetSpeak() {
    p = document.getElementById("id_phrase1").value.toUpperCase();
    let translation = ``;
    
    for (let character of p) {
        translation += translate(character);
    };
    document.getElementById("id_result8").innerHTML = `Result: <span class="res">Leet Speak: ${translation}</span>`;
}