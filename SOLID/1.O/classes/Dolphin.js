"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dolphin = void 0;
var Dolphin = /** @class */ (function () {
    function Dolphin() {
    }
    Object.defineProperty(Dolphin.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dolphin.prototype, "type", {
        get: function () {
            return 'dolphin';
        },
        enumerable: false,
        configurable: true
    });
    Dolphin.prototype.makeSound = function () {
        return 'flipper';
    };
    return Dolphin;
}());
exports.Dolphin = Dolphin;
