"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fuel = void 0;
class Fuel {
    constructor() {
        this._fuel = 0;
    }
    get fuel() {
        return this._fuel;
    }
    set fuel(value) {
        this._fuel = value;
    }
}
exports.Fuel = Fuel;
