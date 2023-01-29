function Appliance(name) {
    this.device = 'electrical appliance',
        this.name = name

}

Appliance.prototype.getPower = function (power, on) {
    let turnOn = on;
    if(on === 1){
        turnOn = 'Вкл';
    }else{
        turnOn = 'Выкл';
    };


    console.log(`Power ${this.name} is ${power}. ${this.name}: ${turnOn}`);
};

function Characteristic(name, color) {
    this.name = name,
        this.color = color
}

Characteristic.prototype = new Appliance();

const computer = new Characteristic ('Computer', 'white');
const fridge = new Characteristic ('Fridge', 'grey');


console.log(computer, fridge);
computer.getPower(200);
fridge.getPower(300, 1);
