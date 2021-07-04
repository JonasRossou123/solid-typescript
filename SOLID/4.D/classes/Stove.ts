import {Equipment} from '../interfaces/Equipment';

export class Stove implements Equipment{
    _isOn;

    public turnOn() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE ELECTRICITY IS ON!</p>";
        }, 4000);
        console.log("THE ELECTRICITY IS ON!"); //insert fart humor here
        this._isOn = true;
    }

    public turnOff() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE ELECTRICITY IS OFF!</p><hr>";
        }, 6000);
        console.log("THE ELECTRICITY IS OFF!"); //insert fart humor here
        this._isOn = false;
    }

    public prepare(item : string)
    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 5000);
            console.log("Now making " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no gas!</p>";
            }, 5000);
            console.log("there is no electricity!");//insert fart humor here
        }
    }
}