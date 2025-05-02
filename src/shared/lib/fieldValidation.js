export const checkForMinLen = (string, minLen) => {
    if (string.length < minLen) {
        return false
    }
    return true
}

export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}