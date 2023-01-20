// Only English letters 
const nameRegex = /^[a-zA-Z\s]+$/;

// Minimum 6 characters
const passwordRegex = /^.{6,}$/;

// exactly 6 characters
const sixNumbers = /^[0-9]{6}/;

export { nameRegex, passwordRegex, sixNumbers };