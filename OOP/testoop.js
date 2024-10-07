class Person {
    constructor(emri, mosha) {
        this.emri = emri; // Veti (e dhëna)
        this.mosha = mosha;   // Veti (e dhëna)
    }
    pershkrimi() {
        return `${this.emri} eshte ${this.mosha} vjeq.`; // Metoda (Funksioni)
    }
}
const personi = new Person('Arbër', 25);
console.log(personi.pershkrimi());
