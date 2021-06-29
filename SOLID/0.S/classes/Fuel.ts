export class Fuel{
    private _fuel : number = 0;

    get fuel(): number {
        return this._fuel;
    }

    set fuel(value){
        this._fuel = value;
    }
}