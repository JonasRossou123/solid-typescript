import {Restaurants} from "../interfaces/Restaurants";
import {Equipment} from '../interfaces/Equipment';

export class Restaurant implements Restaurants{
    _name;
    _equipment;

    constructor(name : string, equipment : Equipment) {
        this._name = name;
        this._equipment = equipment;
    }

    public cook(item : string) {
        this._equipment.turnOn();
        this._equipment.prepare(item);
        this._equipment.turnOff();
    }
}