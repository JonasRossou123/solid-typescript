export interface PasswordAuth {
    checkPassword(password: string) : boolean;
    resetPassword();
}