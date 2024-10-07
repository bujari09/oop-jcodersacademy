// // Klasa Prind
// class Animals {
//     constructor(name) {
//         this.name = name;
//     }
    
//     animalName() {
//         return `${this.name}`;
//     }
// }
// class Pets extends Animals {
//     constructor(name) {
//         super(name); 
//         console.log(`Pet class is created`);
//     }
// }

// // Klasa Bijë e dytë që trashëgon nga Animals
// class WildAnimals extends Animals {
//     constructor(name, habitat) {
//         super(name); 
//         this.habitat = habitat;
//         console.log(`WildAnimal class is created`);
//     }
//     getHabitat() {
//         return `${this.name} lives in ${this.habitat}.`;
//     }
// }
// const myPet = new Pets('Cat');
// console.log(myPet.animalName());
// const lion = new WildAnimals('Lion', 'Savannah');
// console.log(lion.animalName());  
// console.log(lion.getHabitat());  

// Klasa Prind - Person
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return `This person's name is ${this.name}.`;
    }
}
class Student extends Person {
    constructor(name, grade) {
        super(name); 
        this.grade = grade;
    }
    getGrade() {
        return `${this.name} has a grade of ${this.grade}.`;
    }
}
const student1 = new Student('ALban', 'A');
console.log(student1.getName());   
console.log(student1.getGrade());  
