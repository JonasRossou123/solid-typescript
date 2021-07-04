import {Animal} from "../interfaces/Animal";
export class Dog implements Animal{
    _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'dog';
    }

    makeSound(){
        return 'Woef'
    }
}