// const animalData = require('./animal-data.json');
const animalData = [
    { "name": "Mocha", "species": "dog", "color": "brown" },
    { "name": "Socks", "species": "cat", "color": "gray" },
    { "name": "Flopsy", "species": "rabbit", "color": "white" },
    { "name": "Felix", "species": "cat", "color": "orange", "hunger": 70 },
    { "name": "Cooper", "species": "dog", "color": "golden" },
    { "name": "Bo", "species": "dog", "color": "black", "hunger": 30 },
    { "name": "Bugsy", "species": "hamster", "color": "white" }
]


class Animal {
    constructor(name,species,color,hunger = 50) {
        this.name = name;
        this.species = species;
        this.color = color;
        this.hunger = hunger;
        this.food = 'food'
        this.sound = 'Hi'
    }
    greet() {
        console.log (`${this.sound}, I'm ${this.name} the ${this.species}`)
    }
    feed() {
        this.hunger -= 20;
        console.log (`Yum, I love ${this.food}`)
    }
}

class Cat extends Animal {
    constructor(name,color,hunger){
        super(name,'cat',color,hunger)
        this.food = 'fish'
        // super.greet('Meow')
        // super.feed(`Yum, I love ${this.food}`)
        this.sound = 'Meow'
    }
}

class Dog extends Animal {
    constructor(name,color,hunger){
        super(name,'dog',color,hunger)
        this.food = 'kibble'
        // super.greet('Woof')
        // super.feed(`Yum, I love ${this.food}`)
        this.sound = 'Woof'
    }
}

class AnimalShelter {
    constructor(){
        this.animals = []
    }

    addAnimal(animal) {
        this.animals.push(animal)
    }

    adopt(animal) {
        const i = this.animals.findIndex(thisAnimal => thisAnimal.name === animal)
        this.animals.splice(i,1)
    }
    getAnimalBySpecies(species){
        return this.animals.filter(a => a.species === species)
    }
}

const shelter = new AnimalShelter()

for (const a of animalData) {
    const hunger = a.hunger ? a.hunger : 50;
    if (a.species === 'dog'){
        animal = new Dog(a.name, a.color, hunger)
    } else if (a.species === 'cat'){
        animal = new Cat(a.name, a.color, hunger)
    }
    else {
        animal = new Animal(a.name, a.species, a.color, hunger)
    }
    shelter.addAnimal(animal)
}

let filteredAnimal= shelter.getAnimalBySpecies('dog')
console.log(filteredAnimal)

const lup = new Cat('Lup','black',)

for(const animal of shelter.animals){
    animal.greet()
    animal.feed()
}