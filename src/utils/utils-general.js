const getMeRandomElements = (sourceArray, neededElements) => {
    const result = { trueArray: [], falseArray: [] };
    for (let i = 0; i < neededElements; i++) {
        let index = Math.floor(Math.random() * sourceArray.length);
        result.trueArray.push(sourceArray[index]);
        sourceArray.splice(index, 1);
    }
    result.falseArray = [...sourceArray];
    console.log(result);
    return result;
}

const getMeRandomCountriesNoNumber = (countriesArr, number) => {
    const randomCountries = getMeRandomElements(countriesArr, number * 4);
    return randomCountries;
}

const shuffleArray = (array) => {
    const shuffledArray = [...array].sort(() => 0.5 - Math.random())
    return shuffledArray;
}

export { getMeRandomElements, getMeRandomCountriesNoNumber, shuffleArray };