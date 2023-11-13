1.1

// let globalNum = 10;

// function checkScope (){
//    return globalNum; 
// }

// checkScope(console.log(globalnum));

// 1.2

// let globalnum = 10;

// function checkScope (){
//     let localnum = 10;
//     return globalnum;
// }
// console.log(globalnum === localnum)
// checkScope(globalnum);

1.3

if (true){
    let blockNum = 10;
}
console.log(typeof blockNum);

// 2.1

let number = 10;

if(number % 2 === 0 ){
    console.log ("Brojot e paren")
} else {
    console.log("Brojot e neparen");
}

// 2.2

let age = 18;

if (age >= 18){
    console.log("Liceto ima pravo da glasa")
} else {
    console.log("Liceto nema pravo da glasa")
}

// 2.3

let score = 78;

if (score <= 59){
    console.log("The grade is F")
} else if (score >= 60 && score <= 69){
    console.log("The grade is G");
} else if (score >= 70 && score <= 79){
    console.log("The grade is C");
} else if (score >= 80 && score <= 89){
    console.log("The grade is B");
} else {
    console.log("The grade is A")
}

// 2.4

let dayNumber = 7;

switch (dayNumber){
    case 1 :
    console.log("Sunday")
    break;
    case 2 :
    console.log("Monday")
    break;
    case 3 :
    console.log("Tuesday")
    break;
    case 4 :
    console.log("Wednesday")
    break;
    case 5 :
    console.log("Thursday")   
    break;
    case 6 :
    console.log("Friday")
    break;
    case 7 :
    console.log("Saturday")  
    break;
    default:
    console.log("Invalid day number.Please enter a number between 1 and 7")  }

    // 3.

    function threeParameters(num1, num2, num3)
    {
        return num1 + num2 + num3;
    }

    let result = threeParameters(2, 3, 4);
    console.log(result);

    function returnString(inputString) {
        return inputString;
    }

    let string = "Hello Aco!";
    let resultString = returnString(string);
    console.log(resultString);

    function compareNumbers (num1,num2) {
        if(num1 === num2) {
            console.log("These numbers are equal")
    } else {
        console.log("These numbers are not equal")
    }
    }

    compareNumbers(2,3);
