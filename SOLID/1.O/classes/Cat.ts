import {Animal} from "../interfaces/Animal";
export class Cat implements Animal{
    _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'cat';
    }

    makeSound() {
        return 'Miauw';
    }

}