import {Animal} from "../interfaces/Animal";
export class Parrot implements Animal {
    _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'parrot';
    }

    makeSound() {
        return 'I am a pirate';
    }
}