import {Engine} from './Engine';
import {Musicplayer} from './Musicplayer';

export class Car {
    //it is convention to start property names in TypeScript with an underscore.
    // If you want to known why, remove the underscore and see if your compiler is throwing you an error!

    private _miles : number = 0;
    private _engine : Engine;
    private _musicplayer : Musicplayer;

    //By changing this variable to readonly I have in essence created a property constant.
    // the only subtle difference is that you can write once to the variable inside the constructor
    private readonly MAXIMUM_FUEL_CAPACITY: number;
    private readonly FUEL_MILEAGE: number = 10;

    constructor(MAXIMUM_FUEL_CAPACITY: number, engine: Engine, musicplayer: Musicplayer) {
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
        this._engine = engine;
        this._musicplayer = musicplayer;
    }

    get engine(): Engine{
        return this._engine;
    }

    get musicplayer(): Musicplayer{
        return this._musicplayer;
    }

    get miles(): number {
        return this._miles;
    }


    addFuel(fuel : number) {
        this._engine.fuel.fuel = Math.min(fuel + this.engine.fuel.fuel, this.MAXIMUM_FUEL_CAPACITY);
    }

    drive() {
        if(this._engine.engineStatus === false || this._engine.fuel.fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }

        this._engine.fuel.fuel -= 1;
        this._miles += this.FUEL_MILEAGE;
    }
}
