export class Musicplayer{
    private _musicLevel : number = 0;
    private _oldMusicLevel : number = 50;

    turnMusicOn() {
        this._musicLevel = this._oldMusicLevel;
    }

    turnMusicOff() {
        this._musicLevel = 0;
    }

    set musicLevel(value: number) {
        this._musicLevel = value;
        this._oldMusicLevel = value;
    }

    get musicLevel(): number {
        return this._musicLevel;
    }
}