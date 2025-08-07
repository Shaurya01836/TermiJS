
function practiseQuestion1() {
    let name = prompt("Enter your name:");
    let age = prompt("Enter your age:");
    if (name && age) {
        alert(`${name} is ${age} years old.`);
    }
}

function practiseQuestion2() {
    let input = prompt("Enter a number (1-4) for the year's quarter:");
    let num = parseInt(input);
    switch (num) {
        case 1:
            alert("Q1: January, February, March");
            break;
        case 2:
            alert("Q2: April, May, June");
            break;
        case 3:
            alert("Q3: July, August, September");
            break;
        case 4:
            alert("Q4: October, November, December");
            break;
        default:
            alert("Invalid input!");
            break;
    }
}

function practiseQuestion3() {
    let string = prompt("Enter a name:");
    if (string && string.length > 5 && string[0].toLowerCase() === "a") {
        alert("It is a Golden String !!");
    } else {
        alert("Normal String !!");
    }
}


function practiseQuestion4() {
    let a = prompt("So we have to find the largest of 3 numbers , please enter 1st number : ")
    let b = prompt("Enter 2nd number : ")
    let c = prompt("Enter 3rd number : ")

    if (a > b && a > c) return alert(`${a} is the largest`)
    if (b > a && b > c) return alert(`${b} is the largest`)
    return alert(`${c} is the largest`)
}


function practiseQuestion5() {
    let num1 = parseInt(prompt("Enter a number : "))
    let num2 = parseInt(prompt("Enter another number : "))


    if (num1 % 10 == num2 % 10) {
        alert("Both numbers have same last digit")
    }
    else {
        alert("Both numbers does not have same last digit")
    }
}