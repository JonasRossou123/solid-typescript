"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Musicplayer_1 = require("./classes/Musicplayer");
const Engine_1 = require("./classes/Engine");
const Car_1 = require("./classes/Car");
const Fuel_1 = require("./classes/Fuel");
//Take attention to these getter and setters
//When a value can only go one way (you add fuel, consuming fuel is handled by the car itself)
// it is better to provide a specific method for this instead of a generic setter.
// with a setter there is always the chance of somebody lowering the fuel amount by accident.
// When you see <cast>variable this is a "cast" of a variable, explicitly telling the code what the type of this variable will be.
// This is sometimes needed when a default JS function does not return a precise enough Type.
// I need to cast this to HtmlElement because the default Element return type is not specific to the HTML context (because some versions of JS can also be used in the backend, see node.js)
// This makes it not having some properties like .innerText. Test it out yourself by removing the <HTMLElement>
const musicToggleElement = document.querySelector('#music-toggle');
const musicSliderElement = document.querySelector('#music-slider');
const engineToggleElement = document.querySelector('#engine-toggle');
const addFuelForm = document.querySelector('#add-fuel-form');
const addFuelInput = document.querySelector('#add-fuel-input');
const fuelLevelElement = document.querySelector('#fuel-level');
const milesElement = document.querySelector('#miles-value');
const audioElement = document.querySelector('#car-music');
let fuel = new Fuel_1.Fuel();
let engine = new Engine_1.Engine(fuel);
let musicplayer = new Musicplayer_1.Musicplayer();
let car = new Car_1.Car(100, engine, musicplayer);
console.log(car);
musicToggleElement.addEventListener('click', () => {
    if (car.musicplayer.musicLevel === 0) {
        car.musicplayer.turnMusicOn();
        musicSliderElement.value = car.musicplayer.musicLevel.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    car.musicplayer.turnMusicOff();
});
//I use input instead of change, because then the value changes when I move the mouse, not only on release
musicSliderElement.addEventListener('input', (event) => {
    let target = (event.target);
    let musiclevel = car.musicplayer.musicLevel;
    musiclevel = target.value;
    audioElement.volume = musiclevel / 100;
    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = musiclevel ? 'Turn music off' : 'Turn music on';
});
engineToggleElement.addEventListener('click', () => {
    if (car.engine.engineStatus) {
        car.engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    car.engine.turnEngineOn();
});
addFuelForm.addEventListener('submit', (event) => {
    event.preventDefault();
    car.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.engine.fuel.toString();
});
setInterval(() => {
    car.drive();
    //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
    // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    milesElement.innerText = (car.miles);
    // This .toString() will actually convert the value in JavaScript from an integer to a string
    fuelLevelElement.innerText = car.engine.fuel.fuel.toString();
    if (car.musicplayer.musicLevel === 0) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
}, 1000);
