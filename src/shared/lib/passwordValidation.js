export function validatePassword(password) {
    if (password.length < 6) {
        return 1;
    }

    const uppercaseLetters = password.replace(/[^A-Z]/g, '');
    if (uppercaseLetters.length < 2) {
        return 2;
    }

    const specialCharacters = password.replace(/[A-Za-z0-9]/g, '');
    if (specialCharacters.length < 1) {
        return 3;
    }

    return false;
}