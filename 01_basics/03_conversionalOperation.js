let score = 33

let score1 = "33"

console.log(typeof score);
console.log(typeof (score1));

let valueInNumber = Number(score1)
console.log(typeof (valueInNumber));
let score2 = "33abc"
let valueInNumber1 = Number(score2)
console.log(valueInNumber1);
console.log(typeof (valueInNumber1));

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// 1 => true; 0 => false;
// "" => false
// "non-empty string" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)



///////////////*****************Operations*****//////////////////
let value = 3

let negValue = -value
console.log(negValue)


let str1 = "hello"
let str2 = " Hitesh"

let str3 = str1 + str2
console.log(str3)
// console.log("1" + "2")
// console.log(1 + "2")
// console.log(1 + 1 + "2")
// console.log("1" + 1 + 2)


console.log(+true)
console.log(+"")

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100

gameCounter++;
++gameCounter;

