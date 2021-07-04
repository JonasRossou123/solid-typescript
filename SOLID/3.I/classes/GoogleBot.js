"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleBot = void 0;
var GoogleBot = /** @class */ (function () {
    function GoogleBot() {
    }
    GoogleBot.prototype.setGoogleToken = function (token) {
        this._googleToken = token;
    };
    GoogleBot.prototype.checkGoogleLogin = function (token) {
        return token === this._googleToken;
    };
    return GoogleBot;
}());
exports.GoogleBot = GoogleBot;
