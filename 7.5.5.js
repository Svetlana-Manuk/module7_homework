class Appliance {
    constructor(name) {
        this.device = 'electrical appliance';
        this.name = name
    }

    getPower(power, on) {
        let turnOn = on;
        if (on === 1) {
            turnOn = 'Вкл';
        } else {
            turnOn = 'Выкл';
        }
         console.log(`Power ${this.name} is ${power}. ${this.name}: ${turnOn}`);
    }
}

class Characteristic extends Appliance {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
}


const computer = new Characteristic ('Computer', 'white');
const fridge = new Characteristic ('Fridge', 'grey');


console.log(computer, fridge);
computer.getPower(200);
fridge.getPower(300, 1);