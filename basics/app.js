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

// let friends = ["Foo", "Bar", "Bam"];

// let [f1, f2, f3] = friends;

// console.log(f3)

// f3 = "Baz";
// console.log(friends[2]);           // Bam
// friends[2] = "Something Else"
// console.log(friends[2]);           // Something Else
// console.log(f3)


// let user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     age : 32
// }

// let {age : a1, firstName: fn, lastName: ln} = user;

// console.log(ln, fn);















// - Rest/Spread Operator (...)
// - Rest : create the array collection from individual elements; 
    // present in function argument list at last place; 
// - Spread : spreads the collection (Object/Array) into individual item; with Object/array

// function demo(email, ...args){
//     console.log(args[1]);           // ?
// }

// // demo("test@test.com")
// // demo("test@test.com", 32)
// demo("test@test.com", 32, true, [], function(){}, {})


// let numbers = [3,4,5];

// // let newNumbers = [1,2, numbers, 6,7,8];          // [1,2,[3,4,5],6,7,8]
// let newNumbers = [1,2, ...numbers, 6,7,8];          // [1,2,3,4,5,6,7,8]

// console.log(newNumbers)

// let user = {
//     email : "test@test.com",
//     isAdmin : true
// }

// let newUser = {
//     ...user,
//     age : 32
// }

// console.log(newUser);       // {age : 32, email : "test@test.com"}
















// - Template Literals : " " || ' ' || ` ` (back tick)
// - Write multiline string without '\n'
// - Embed variables within string without (+)

// let username = "Foo";

// let str = `Hello ${username}
// I am ${30+2} years old!
// `

// let str1 = "Hello " + username + "\n This is new line!"

// console.log(str);


















// - Classes

// class Student{
//     constructor(email, age){
//         this.email = email;
//         this.age = age;
//     }
//     getDetails(){
//         return `Hello from ${this.email}, I'm ${this.age} years old!`
//     }
// }

// function Student(email, age){
//     // var this = {};
//     this.email = email;
//     this.age = age;
//     this.getDetails = function(){
//         return `Hello from ${this.email}, I'm ${this.age} years old!`
//     }
//     // return this;
// }


// let foo = new Student("test@test.com", 34);
// console.log(foo.getDetails())



// let x = "Some String";
// console.log(typeof x);      // string

// x = true;
// console.log(typeof x);      // boolean

function demo(firstName){
    var self = {};
    self.firstName = firstName;
    self.getFirstName = function(){
        return "Hello " + this.firstName
    }
    return self;
}

const obj = demo("Foo");

console.log(obj.getFirstName())












// - Module




