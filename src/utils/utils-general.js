const getMeRandomElements = (sourceArray, neededElements) => {
    const result = [];
    for (let i = 0; i < neededElements; i++) {
        let index = Math.floor(Math.random() * sourceArray.length);
        result.push(sourceArray[index]);
        sourceArray.splice(index, 1);
    }
    return result;
}

export { getMeRandomElements };