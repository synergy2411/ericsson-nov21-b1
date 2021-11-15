import { AnimalType } from './animal';

export class Animal{
    // private legs : number;
    // private species :string;
    // constructor(legs : number, species : string){
        //     this.legs = legs;
        //     this.species = species
        // }
        // getMyAnimal() : string {
            //     // return `Hello, This is ${this.species}, I am having ${this.legs} legs!`
            // }
    private animal : AnimalType;
    constructor(animal : AnimalType){
        this.animal= animal
    }
}