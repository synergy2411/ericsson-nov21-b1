"use strict";
// Type Definition - Robust App
// Custom Type
exports.__esModule = true;
// let str : string = "Some String";
// let age : number = 32;
// let isAdmin : boolean = true;
// str = true;          // ERROR
// str = null;
var animal_1 = require("./animal");
var MyAnimal_1 = require("./MyAnimal");
// let bunny = new Animal(4, "Rabbit")
// console.log(bunny.getMyAnimal())
var ani = {
    legs: 4,
    species: "Tiger"
};
var tiger = new MyAnimal_1.Animal(ani);
console.log("My Lucky Number : ", animal_1.MAGIC_NUMBER);
