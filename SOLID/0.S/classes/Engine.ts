import {Fuel} from './Fuel';

export class Engine{
    private _engineStatus: boolean = false;
    private _fuel : Fuel;

    constructor(fuel: Fuel) {
        this._fuel = fuel;
    }

    get fuel(): Fuel {
        return this._fuel;
    }

    get engineStatus(): boolean {
        return this._engineStatus;
    }

    turnEngineOn() {
        this._engineStatus = true;
    }

    turnEngineOff() {
        this._engineStatus = false;
    }
}