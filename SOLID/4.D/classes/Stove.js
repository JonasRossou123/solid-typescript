"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stove = void 0;
var Stove = /** @class */ (function () {
    function Stove() {
    }
    Stove.prototype.turnOn = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE ELECTRICITY IS ON!</p>";
        }, 4000);
        console.log("THE ELECTRICITY IS ON!"); //insert fart humor here
        this._isOn = true;
    };
    Stove.prototype.turnOff = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE ELECTRICITY IS OFF!</p><hr>";
        }, 6000);
        console.log("THE ELECTRICITY IS OFF!"); //insert fart humor here
        this._isOn = false;
    };
    Stove.prototype.prepare = function (item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 5000);
            console.log("Now making " + item + "!");
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 5000);
            console.log("there is no electricity!"); //insert fart humor here
        }
    };
    return Stove;
}());
exports.Stove = Stove;
