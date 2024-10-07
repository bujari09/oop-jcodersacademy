let person1 = {
    emri: "Arti",      // Veti (e dhëna)
    vitilindjes: 1998, // Veti (e dhëna)
    profesioni: "Inxhinier", // Veti (e dhëna)
    pershendetje: function() { // Metodë (funksion)
        let vitiAktual = 2025;
        let mosha = vitiAktual - this.vitilindjes;
        console.log(`Përshëndetje, unë jam ${this.emri} dhe jam ${this.profesioni}. Unë jam ${mosha} vjeç.`);
    }
};
person1.pershendetje();


// console.log(mosha.person)
// console.log(person.emri);      
// console.log(person.mosha);      
// console.log(person.profesioni);  
// // Thirrim metodën e objektit


// let person2 = {
//     emri: "Besa",      // Veti (e dhëna)
//     vitiLindjes: 2000,        // Veti (e dhëna)
//     profesioni: "Mjeke", // Veti (e dhëna)
//     pershendetje: function() { // Metodë (funksion)
//         console.log(`Përshëndetje, unë jam ${this.emri} dhe jam ${this.profesioni}`);
//     }  
// };



// class Person {
//     constructor(emri, mosha) {
//         this.emri = emri; // Veti (e dhëna)
//         this.mosha = mosha;   // Veti (e dhëna)
//     }
//     pershkrimi() {
//         return `${this.emri} eshte ${this.mosha} vjeq.`; // Metoda (Funksioni)
//     }
// }
// pershkrimi()


// // // Krijimi i një objekti nga klasa Person
// // let person1 = new Person("", 30);

// // // Përdorimi i metodave të objektit
// // console.log(person1.describe()); // Output: Alice is 30 years old.
// // person1.celebrateBirthday(); // Output: Happy Birthday, Alice! You are now 31 years old.
// // console.log(person1.describe()); // Output: Alice is 31 years old.
