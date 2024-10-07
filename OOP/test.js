const Person = function(name, birthYear){
    this.name = name;
    this.birthYear = birthYear;
}

const Arti = new Person('Arti', 2001);
const Endi = new Person('Endi', 1995);

console.log(Arti);
console.log(Endi);

const Albani = Object.create(Person);
Albani.name ='Albani';
Albani.birthYear = 2003;

console.log(Albani);
