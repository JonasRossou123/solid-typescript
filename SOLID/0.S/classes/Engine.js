"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
class Engine {
    constructor(fuel) {
        this._engineStatus = false;
        this._fuel = fuel;
    }
    get fuel() {
        return this._fuel;
    }
    get engineStatus() {
        return this._engineStatus;
    }
    turnEngineOn() {
        this._engineStatus = true;
    }
    turnEngineOff() {
        this._engineStatus = false;
    }
}
exports.Engine = Engine;
