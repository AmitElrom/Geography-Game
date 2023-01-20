const capitlizeFirstLetter = str => {

    // Split the string into words
    let words = str.split(" ");

    // Capitalize each word
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the capitalized words into a single string
    let capitalizedString = words.join(" ");

    return capitalizedString;
};

export { capitlizeFirstLetter };