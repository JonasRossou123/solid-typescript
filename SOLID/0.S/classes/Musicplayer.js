"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Musicplayer = void 0;
class Musicplayer {
    constructor() {
        this._musicLevel = 0;
        this._oldMusicLevel = 50;
    }
    turnMusicOn() {
        this._musicLevel = this._oldMusicLevel;
    }
    turnMusicOff() {
        this._musicLevel = 0;
    }
    set musicLevel(value) {
        this._musicLevel = value;
        this._oldMusicLevel = value;
    }
    get musicLevel() {
        return this._musicLevel;
    }
}
exports.Musicplayer = Musicplayer;
