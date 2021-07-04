import {GoogleAuth} from "../interfaces/GoogleAuth";

export class GoogleBot implements GoogleAuth {
    private _googleToken: string;

    setGoogleToken(token: string) {
        this._googleToken = token;
    }

    checkGoogleLogin(token: string): boolean {
        return token === this._googleToken;
    }
}