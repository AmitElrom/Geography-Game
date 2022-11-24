// Only English letters 
const nameRegex = /^[A-Za-z]+$/;

// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

// exactly 6 characters
const sixNumbers = /^[0-9]{6}/

export { nameRegex, passwordRegex, sixNumbers };