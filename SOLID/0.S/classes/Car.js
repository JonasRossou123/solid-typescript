"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(MAXIMUM_FUEL_CAPACITY, engine, musicplayer) {
        //it is convention to start property names in TypeScript with an underscore.
        // If you want to known why, remove the underscore and see if your compiler is throwing you an error!
        this._miles = 0;
        this.FUEL_MILEAGE = 10;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
        this._engine = engine;
        this._musicplayer = musicplayer;
    }
    get engine() {
        return this._engine;
    }
    get musicplayer() {
        return this._musicplayer;
    }
    get miles() {
        return this._miles;
    }
    addFuel(fuel) {
        this._engine.fuel.fuel = Math.min(fuel + this.engine.fuel.fuel, this.MAXIMUM_FUEL_CAPACITY);
    }
    drive() {
        if (this._engine.engineStatus === false || this._engine.fuel.fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }
        this._engine.fuel.fuel -= 1;
        this._miles += this.FUEL_MILEAGE;
    }
}
exports.Car = Car;
