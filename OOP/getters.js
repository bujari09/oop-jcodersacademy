// class Kuti {
//     constructor() {
//       this.brendi = 'Standard'; // Vendosim një vlerë të paracaktuar direkt
//     }
  
//     // Getteri për pronën brendi
//     get brendi() {
//       return this.brendi;
//     }
  
//     // Setteri për pronën brendi
//     set brendi(vlera) {
//       this.brendi = vlera;
//     }
//   }
  
//   let kutia = new Kuti(); // Krijojmë një instancë të klasës 'Kuti'
//   console.log(kutia.brendi); // Përdorim gettrin për të marrë vlerën, duhet të printojë 'Standard'
//   kutia.brendi = 'Librat'; // Përdorim settrin për të vendosur vlerën e re
//   console.log(kutia.brendi); // Përdorim gettrin për të marrë vlerën e re, duhet të printojë 'Librat'
 




//   let person = {
//     firstName: 'Ardi',
//     lastName: 'Krasniqi',
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// console.log(person.fullName); 


// let person = {
//   firstName: 'Ardi',
//   lastName: 'Krasniqi',
//   set fullName(name) {
//       [this.firstName, this.lastName] = name.split(' ');
//   }
// };

// person.fullName = 'Alban Berisha';
// console.log(person.firstName); 
// console.log(person.lastName); \


class Person {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.trim() === '') {
            console.log('The name cannot be empty');
        } else {
            this._name = value;
        }
    }
}
// Testimi i funksionalitetit
let person1 = new Person('Arti');
console.log(person1.name); 

person1.name = ''; 
console.log(person1.name); 

person1.name = 'Besart';
console.log(person1.name); 



