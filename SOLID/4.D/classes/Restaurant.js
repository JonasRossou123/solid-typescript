"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
var Restaurant = /** @class */ (function () {
    function Restaurant(name, equipment) {
        this._name = name;
        this._equipment = equipment;
    }
    Restaurant.prototype.cook = function (item) {
        this._equipment.turnOn();
        this._equipment.prepare(item);
        this._equipment.turnOff();
    };
    return Restaurant;
}());
exports.Restaurant = Restaurant;
