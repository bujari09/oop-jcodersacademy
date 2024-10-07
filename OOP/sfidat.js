 class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    detajetepersonit() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Country: ${this.country}`);
    }
  }

  const person1 = new Person('Ardi', 25, 'Kosove');
  const person2 = new Person('Raimond', 30, 'USA');

  person1.detajetepersonit();
  person2.detajetepersonit();
  

// ---------------------------------------

// 1. Krijoni funksionin konstruktor për Vehicle
// function Vehicle(type) {
//     this.type = type;
//   }
//   Vehicle.prototype.printType = function() {
//     console.log(`Type: ${this.type}`);
//   };
//   function Car(type, brand) {
//     Vehicle.call(this, type); 
//     this.brand = brand;
//   }
//   Car.prototype = Object.create(Vehicle.prototype);
//   Car.prototype.constructor = Car;
//   Car.prototype.printBrand = function() {
//     console.log(`Brand: ${this.brand}`);
//   };
//   const myCar = new Car('Sedan', 'Toyota');
//   myCar.printType(); 
//   myCar.printBrand();
  
//-----------------------------------------------------------

// class Person {
//     constructor(name) {
//         this.setName(name);
//     }
//     getName() {
//         return this.name;
//     }
//     setName(newName) {
//         if (newName === '') {
//             throw 'The name cannot be empty';
//         }
//         this.name = newName;
//     }
// }
// let person = new Person('Artan Krasniqi');
// console.log(person.getName()); 

// person.setName('Blend Berisha');
// console.log(person.getName()); 




  