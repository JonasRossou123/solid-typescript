"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parrot = void 0;
var Parrot = /** @class */ (function () {
    function Parrot() {
    }
    Object.defineProperty(Parrot.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Parrot.prototype, "type", {
        get: function () {
            return 'parrot';
        },
        enumerable: false,
        configurable: true
    });
    Parrot.prototype.makeSound = function () {
        return 'I am a pirate';
    };
    return Parrot;
}());
exports.Parrot = Parrot;
