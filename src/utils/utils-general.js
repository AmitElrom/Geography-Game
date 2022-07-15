const getMeRandomElements = (sourceArray, neededElements) => {
    const result = [];
    for (let i = 0; i < neededElements; i++) {
        let index = Math.floor(Math.random() * sourceArray.length);
        result.push(sourceArray[index]);
        sourceArray.splice(index, 1);
    }
    return result;
}

const getMeRandomCountriesNoNumber = (countriesArr, number) => {
    const randomCountries = getMeRandomElements(countriesArr, number * 4);
    return randomCountries;
}

export { getMeRandomElements, getMeRandomCountriesNoNumber };