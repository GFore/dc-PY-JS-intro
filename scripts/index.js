// JS Comment
// console.log("Hey JS from scripts");

// const promptText = "What is your name?";
// const userName = prompt(promptText);

// let greeting = `Hello, ${userName}!`;
// console.log(greeting);
// greeting = greeting + "!"
function dayOfWeek() {
    const theDay = Number(prompt("Day"));
    let dayName = '';

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
    console.log(dayName);
}

function clearResult(inputName, resultName) {
    inputName.forEach(element => {document.getElementById(element).value = "";});
    // document.getElementById(inputName).value = "";
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

