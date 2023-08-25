export const isEmailValid = (email: string) => {
    // Use a regular expression to validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isPasswordValid = (password: string) => {
    // Check if the password is at least 8 characters and alphanumeric
    return password.length >= 8 && /^[a-zA-Z0-9]+$/.test(password);
};