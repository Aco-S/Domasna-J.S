 1.1
 
 let hasCoffee = true;
 let hasTea = false;
 let hasMilk = true;

 // A.
 let student = !hasTea || hasMilk;
 console.log(student);

 // B.

 let student1 = hasCoffee && !hasTea;
 console.log(student1);

 // C. 

 let student2 = !hasTea;
 console.log(student2);

 // D.

 let student3 = (hasCoffee && hasMilk) != (!hasCoffee && !hasMilk);
 console.log(student3);

 // E.

 let student4 = (!hasTea && hasMilk) || (hasCoffee && !hasTea);
 console.log(student4);

 // F.

 let student5 = !hasCoffee || hasTea;
 console.log(student5);

//  // 1.2.

//  const num1 = 10;
//  const num2 = 5;
//  const num3 = 8;
//  const num4 = 2;
//  const num5 = 12;
//  const num6 = 4;
//  const num7 = 3;

 let result1 = (num1 + num3) / (num2 + num4)
 console.log(result1)

 let result2 = (num5 - num3) + (num1 - num7)
 console.log(result2)

 let result3 = (num2 * num7) - (num1 * num6)
 console.log(result3)

 let result4 = (num3 / num4) * (num5 / num7)
 console.log(result4)

 let result5 = (num6 + num1) - (num7 * num2)
 console.log(result5)

 1.3

 let num1 = 12
 let num2 = 4

 let sum = (num1 + num2) 
 console.log(sum)

let diff = (num1 - num2)
console.log(diff)

let mult = (num1 * num2)
console.log(mult)

let div = (num1 / num2)
console.log(div)

let rem = (num1 % num2)
console.log(rem)