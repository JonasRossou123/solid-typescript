"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedDiscount = void 0;
var FixedDiscount = /** @class */ (function () {
    function FixedDiscount(value) {
        this._value = value;
        if (value <= 0) {
            throw new Error('You cannot create a fixed discount with a negative value');
        }
    }
    FixedDiscount.prototype.apply = function (price) {
        return (price - (price * this._value / 100));
    };
    FixedDiscount.prototype.showCalculation = function (price) {
        return price + " € -  " + this._value + "%";
    };
    return FixedDiscount;
}());
exports.FixedDiscount = FixedDiscount;
