// - Arrow Function : short & sweet syntax; one-liner function

// () => body

// function add(num1, num2){
//     return num1 + num2;
// }

// console.log(add(3,5));

// var addition = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addition(5,6))

// var - to declare the variables in JS (Vanilla JS) 






// - Block Scoping : restrict the scope of variables to the nearest block / { }
// - let : for other types
// - const : for creating contants

// function display(arr){
//     if(arr.length > 2){
//         let LOAD = "LOADING"
//         console.log(FLASH);                 // undefined
//     }else{
//         let FLASH = "FLASHING"
//     }
// }

// display([1,2,3,4])

// const USERNAME = "Foo";

// USERNAME = "Bar";

// const user = {
//     name : "Foo"
// }

// // user = {
// //     name : "Bar"
// // }


// user.name = "Bar";

// console.log(user.name);         // 'Bar'


// const fruits = ['apple', 'banana']
// // fruits = []
// fruits.push("oranges");

// console.log(fruits.length);         // 3


// const a = {
//     name : "A"
// }

// const b = a;

// b.name = "B"

// console.log(a.name);            // ?


// const arr = [1,2,3];

// const newArr = arr;

// newArr.push(5);

// console.log(arr.length);        // ?











// - Destructuring : "unpacking" the collection (Object/Array)

let friends = ["Foo", "Bar", "Bam"];

let [f1, f2, f3] = friends;

console.log(f3)

f3 = "Baz";
console.log(friends[2]);           // Bam
friends[2] = "Something Else"
console.log(friends[2]);           // Something Else
// console.log(f3)


// let user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     age : 32
// }

// let {age : a1, firstName: fn, lastName: ln} = user;

// console.log(ln, fn);















// - Rest/Spread Operator
// - Template Literals
// - Classes
// - Module
// - Decorators etc