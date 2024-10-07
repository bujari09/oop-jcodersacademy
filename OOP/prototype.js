// 1. Krijo konstruktori Vehicle
function Vehicle(tipi, model) {
    this.tipi = tipi;
    this.model = model;
}

// 2. Shto metodën getDetails në prototipin e Vehicle
Vehicle.prototype.getDetails = function() {
    return `Tipi: ${this.tipi}, Model: ${this.model}`;
};

// 3. Krijo konstruktori Car që trashëgon nga Vehicle
function Car(tipi, model, year) {
    Vehicle.call(this, tipi, model); // Thirrja e konstruktorit të prindit
    this.year = year;
}

// Përcakto prototipin e Car për të trashëguar nga Vehicle
Car.prototype = Object.create(Vehicle.prototype);

// Rregullo constructor-in e Car
Car.prototype.constructor = Car;

// 4. Shto metodën getFullDetails në prototipin e Car
Car.prototype.getFullDetails = function() {
    return `${this.getDetails()}, Year: ${this.year}`;
};

// 5. Krijo instanca dhe testo metodat
let car1 = new Car('Toyota', 'Corolla', 2020);
console.log(car1.getDetails()); // Output: Tipi: Toyota, Model: Corolla
console.log(car1.getFullDetails()); // Output: Tipi: Toyota, Model: Corolla, Year: 2020

let car2 = new Car('Honda', 'Civic', 2018);
console.log(car2.getDetails()); // Output: Tipi: Honda, Model: Civic
console.log(car2.getFullDetails()); // Output: Tipi: Honda, Model: Civic, Year: 2018
