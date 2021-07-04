export interface Equipment{
    _isOn : boolean;
    turnOn():void;
    turnOff():void;
    prepare(item:string);
}