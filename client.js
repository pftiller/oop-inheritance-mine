console.log('hi!');


// class is the template
class Animal {
    constructor(weight = 2, color = 'yellow', noise = 'howl') {
        this.isAlive = true;
        this.color = color;
        this.weight = weight;
        this.noise = noise;
    }
    makeNoise() {
        return this.noise;
    }
}

class Bird extends Animal {
    constructor() {
        console.log('hi from the bird class');
        super('purple', 1.5, 'chirp');
        // bird things
        this.inFlight = false;
        this.hasFeathers = true;
    }
}

//only after using new do we have an instance of the animal class
let greenAnimal = new Animal(10, 'green', 'ribbit');
let yellowAnimal = new Animal(4);
let birdie = new Bird();

console.log(greenAnimal, yellowAnimal);

console.log(yellowAnimal.makeNoise());

console.log(birdie.makeNoise());