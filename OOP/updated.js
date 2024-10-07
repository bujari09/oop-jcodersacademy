let person1 = {
    emri: "Arti",      // Veti (e dhëna)
    vitilindjes: 2000, // Veti (e dhëna)
    profesioni: "Inxhinier", // Veti (e dhëna)
    pershendetje: function() { // Metodë (funksion)
        let vitiAktual = 2025;
        let mosha = vitiAktual - this.vitilindjes;
        console.log(`Përshëndetje, unë jam ${this.emri} dhe jam ${this.profesioni}. Unë jam ${mosha} vjeç.`);
    }
};
// Qasemi tek metoda e personit të parë
person1.pershendetje();    

// let person2 = {
//     emri: "Besa",      // Veti (e dhëna)
//     vitilindjes: 1993, // Veti (e dhëna)
//     profesioni: "Mjeke", // Veti (e dhëna)
//     pershendetje: function() { // Metodë (funksion)
//         let vitiAktual = 2025;
//         let mosha = vitiAktual - this.vitilindjes;
//         console.log(`Përshëndetje, unë jam ${this.emri} dhe jam ${this.profesioni}. Unë jam ${mosha} vjeç.`);
//     }
// };

// // Qasemi tek vetitë dhe metodat e personit të parë
// console.log(person1.emri);        // Output: Arti
// console.log(person1.vitilindjes); // Output: 1998
// console.log(person1.profesioni);  // Output: Inxhinier
// person1.pershendetje();           // Output: Përshëndetje, unë jam Arti dhe jam Inxhinier. Unë jam 27 vjeç.

// // Qasemi tek vetitë dhe metodat e personit të dytë
// console.log(person2.emri);        // Output: Besa
// console.log(person2.vitilindjes); // Output: 1993
// console.log(person2.profesioni);  // Output: Mjeke
// person2.pershendetje();           // Output: Përshëndetje, unë jam Besa dhe jam Mjeke. Unë jam 32 vjeç.
