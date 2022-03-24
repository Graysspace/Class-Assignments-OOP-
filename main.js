
// Car 
// TASK 1
class Car {
    // Properties (State)
    constructor(year, make, model) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.running = false;
        this.speed = 0;
    }
    
    // Methods (Behaviour)
    turnOn() {
        this.running = true;
    }

    turnOff() {
        this.running = false;
    }

    changeSpeed(accel) {
        this.speed += accel;
    }
}

// TASK 2
let car1 = new Car(2018, "Ford", "Mustang");
let car2 = new Car(1962, "Ferrari", "250 GTO");
let car3 = new Car(2016, "Bugatti", "Chiron");
let car4 = new Car(2009, "Toyota", "Camry");

// Task 3
car1.turnOn();
car1.changeSpeed(50);
car1.changeSpeed(30);
car1.changeSpeed(-80);
car1.turnOff();

// Character Assignment
// Task 1
class Character {
    constructor(name, phrase1, phrase2) {
        this.name = name;
        this.phrase1 = phrase1;
        this.phrase2 = phrase2;
        this.level = 0;
    }

    speak(phraseNum) {
        if (phraseNum == 1) {
            console.log(this.phrase1);
        } else if (phraseNum == 2) {
            console.log(this.phrase2);
        }
    }

    setLevel(newLevel) {
        this.level = newLevel;
    }
}

// Task 2
let character1 = new Character("Kung Fu Panda", "Skadoosh!", "You have been blinded by pure awesomeness!");
console.log(character1);
let character2 = new Character("Spiderman", "My Spider-Sense is tingling!", "Your friendly neighbourhood spiderman.")
console.log(character2);



// Task 3
character1.setLevel(2);
console.log(character1);
character1.speak(1);
character1.speak(2);
character2.speak(1);
character2.speak(2);
character2.setLevel(9999);
console.log(character2);

// Backpack Assignment
// Task 1
let itemArray = [];
class Backpack {
    constructor(color, size) {
        this.color = color;
        this.size = size;
        this.items = itemArray;
        this.open = false;
    }

    openBag() {
        this.open = true;
    }

    closeBag() {
        this.open = false;
    }

    putin(item) {
        if (this.open = true) {
            itemArray.push(item);
        } else if (this.open = false) {
            console.log("Open your backpack first");
        }
    }

    takeout(item) {
        if (this.open = true) {
            itemArray.splice(item);
        } else if (this.open = false) {
            console.log("Open your backpack first");
        }

    }
}

// Task 2
let backpack1 = new Backpack("blue", "small");
console.log(backpack1);
let backpack2 = new Backpack("red", "medium");
console.log(backpack2);
let backpack3 = new Backpack("green", "large");
console.log(backpack3);

// Task 3
backpack2.openBag();
console.log(backpack2);
backpack2.putin("lunch");
backpack1.putin("food");
console.log(backpack2);
console.log(backpack1);
console.log(this.items);
backpack2.putin("jacket");
backpack2.closeBag;
backpack2.openBag;
backpack2.takeout("jacket");
backpack2.closeBag;
