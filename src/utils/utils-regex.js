// Only English letters 
const nameRegex = /^[A-Za-z]+$/;

// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export { nameRegex, passwordRegex };