// // 1.A.

// let fruits = [ "apple", "banana", "orange"];
// console.log(fruits[1]);
// fruits.push("Mango");
// console.log(fruits);

// // 1.B.

// let Personalinformation = {

//     name: "Aco",
//     age: 31,
//     city: "Kriva Palanka"
// }
// console.log(Personalinformation.city);
// console.log(Personalinformation.age);
// console.log(fruits, Personalinformation)

// // 2.A.

// for (let i=0; i<=10; i++){
//     console.log(i)
// }

// // 2.B.

// let start = 3;
// let end = 10;
// let sumOfEvenNumbers = 0;

// for (let i= start; i<=end; i++) {
//     if(i % 2 === 0) { 
//         sumOfEvenNumbers +=1;
//     }
// }
// console.log(sumOfEvenNumbers)

// // 2.C.

// let Person = {
//     Name: "Aco",
//     Age: 31,
//     City: "Skopje"

// } 

// for (let x in Person) {
//     console.log (x + ":" + Person[x])
// }

// // 2.D.

// let colors = ["Red","Green","Blue"]
// for (let color of colors) {
//     console.log ('${color..length} ${color}')
// }

// // 3.A.

// let count = 5;
// while (count >=1){
//     console.log (count);
//     count--;
// }

// 3.B. 

// let count = 10;
// do {
//     console.log(count);
//     count--;
// } while(count >=5)

// // 4.A.

// function multiply (num1, num2) {
//     return num1 * num2;

// }

// let result = multiply(8, 5);
// console.log(result)

// // 4.B.

// function divideFunction (num1, num2) {
//     return num1 / num2;

// }

// let divide = divideFunction(48, 6);
// console.log(divide)

// 5.A.

// function calculateArraySum(NumbersArray) {
//     let sum = 0;
//     for (let number of NumbersArray) {
//         sum += number;
//     } 
//     return sum;
// }

// const randomArray = [2, 4, 6, 8, 10];
// const result =
// calculateArraySum (randomArray);
// console.log(result) 

// // 6.A.

// let students = [
// {
//     name: "Aco",
//     surname: "Stojanovski",
//     age: 31,
//     address: {
//         city: "Kriva Palanka",
//         street: {
//             name: "Joakim Osogovski", 
//             number: 18
//         },
//         zipCode: 1330
//     },
// },
// {
//     name: "Tamara",
//     surname: "Milenkovska",
//     age: 26,
//     address: {
//         city: "Kriva Palanka",
//         street: {
//             name: "Ilindenska",
//             number: 17,
//         },
//         zipCode: 1330
//     },
// }
// ]

// console.log (students[0].address.city);
// console.log (students[1]["address"]["street"]["name"]);

// // 7.A.

// function checkFizzBuzz (number) {
//     if (number % 3 === 0 && number % 5 === 0 ) {
//         console.log("FizzBuzz");
//     } else if ( number % 3 === 0 ) {
//         console.log("Fizz");
//     } else if ( number % 5 === 0 ) {
//         console.log("Buzz")
//     } else {
//         console.log(number);
//     }
// }

// checkFizzBuzz(10);

// // 7.B.

// function randomFunction (month) {
//     switch(month.toLowerCase()) {
// case "January",
// case "March",
// case "May" ,
// case "July" ,
// case "August" ,
//                     case "October",
//                     case "December",
//                     return 31 ;
//                     case "April",
//                     case "June",
//                     case "September",
//                     case "November",
//                     return 30 ;
//                     case "February",
//                     return 28;
//                     default :
//                     console.log("Invalid input");
//                     return 10;


//     }
// }
// console.log(randomFunction ("August"));

// 8.A.

let goodBook = {
    Name: "OnceUponATime",
    Pages: 1000,
    Author: {
        Name: "nameOfTheAuthor",
        Surname: "surnameOfTheAuthor"
    },
    Price: 100
};

// 8.B.

let goodCar = {

    Model: "BMW",
    Power: "bigPower",
    Engine: "veryGoodEngine",
    Price: {
        WithoutDiscount: "150000",
        WithDiscount: "149999"
    }
};

// 8.C. 

let student = {
    Name: "Aco",
    Surname: "Stojanovski",
    Age: 31,
    Address: {
        City: "Kriva Palanka",
        Street: {
            Name: "Joakim Osogovski",
            Number: 18,
        },
        zipCode: 1330
    }
}

// 9.A.

let j = 0;
for ( let i = 1; i <= 100 ; i++) {
    if (i % 2 !==0 ) {
        j++;
        if ( j == 2 ) {
            console.log(i);
            j = 0;
         }
    }
}

// 9.B. 

for (let i = 1; i <= 50; i++) {
    if ( i % 2 === 0) {
        console.log(i)
    }
}