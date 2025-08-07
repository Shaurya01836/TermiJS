
function ques1() {
    const inputString = prompt("Enter numbers separated by a comma (e.g., 1,-2,3,-4):");
    if (!inputString) {
        alert("No input provided.");
        return;
    }
    const stringArray = inputString.split(',');
    let numberArray = stringArray.map(item => item.trim()).map(Number);

    const positiveArray = numberArray.filter(function (value) {
        return value >= 0;
    });

    alert(`The resulting array of positive numbers is: [${positiveArray.join(', ')}]`);

}


function ques2() {
    let input = parseInt(prompt("So i have a array [7,9,0,-2] , how many last n elements of this array you want : "))

    let arr = [7, 9, 0, -2];

    if (input > 4 || input < 0) {
        alert("Invalid Input !!")
    }
    else {
        let start = (4 - input)
        let newArr = arr.slice(start, 4);
        alert(`The resulting array of positive numbers is: [${newArr.join(', ')}]`);
    }


}

function ques3() {

    let input = prompt("Enter a String : ")

    if (input.length == 0) {
        alert("Empty String !!")
    }
    else {
        alert("String is not empty")
    }

}

function ques4() {

    let input = prompt("Enter a String : ")
    let index = prompt("Enter the index you want to chekc whether it is lowecase or not : ")

    if (input.length == 0 || (index >= input.length || index < 0)) {
        alert("Empty String or not a valid input !!")
    }
    else {
        if (input[index] == input[index].toLowerCase()) {
            alert("Yes this char is in lowecase !!")
        }
        else {
            alert("NO this char is not in lowecase !!")
        }
    }
}

function ques5() {
    let input = prompt("Enter a String : ");

    if (input) {
        let trimmedInput = input.trim();
        alert(`Your string: ${trimmedInput}`);
    } else {

        alert("You cancelled the prompt.");
    }
}

function ques6() {
    let arr = ["hello", 'a', 23, 64, 99, -6];
    let input = prompt(`So basically i have an array : [${arr}] , now you have to write a input and we can say whether it is in the array or not !`)
   let flag = false;
     arr.forEach(function (value) {
        if (value == input) {
            flag = true;
            }
    })
    if(flag){
        alert("Yes the element is in the array")
    }else{
         alert("NO the element is not in the array")
    }
}