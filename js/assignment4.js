function ques41() {
    let arr = [1, 2, 3, 4, 5, 6, 2, 3];
    let input = prompt(`So i have an array [${arr}] now you can give me a number which you want to delete from the array !`)
    let newArr = arr.filter(
        function (value) {
            return (value != input)
        }
    )
    alert(`new array : [${newArr}]`)
}

function ques42() {
    let input = parseInt(prompt("Enter a positive number : "))
    if (input) {
        let count = 0;
        while (input != 0) {
            input = Math.floor(input / 10);
            count++;
        }
        alert(`${count}`)
    }
    else {
        alert("No input Found or wrong input !!")
    }
}

function ques43() {
    let input = parseInt(prompt("Enter a positive number : "))
    if (input) {
        let count = 0;
        let sum = 0;
        while (input != 0) {
            sum += input % 10;
            input = Math.floor(input / 10);
            count++;
        }
        alert(`${sum}`)
    }
    else {
        alert("No input Found or wrong input !!")
    }
}

function ques44() {
    let input = parseInt(prompt("Enter a positive number : "))
    if( input == 0 ){
        alert("1")
        return
    }
    if (input) {
        function factorial(num) {
            if (num == 1) {
                return 1
            }

            return factorial(num - 1) * num
        }

        let result = factorial(input)
        alert(result)
    }
    else {
        alert("No input Found or wrong input !!")
    }

}