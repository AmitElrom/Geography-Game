const hasWhiteSpace = value => {
    return /\s/g.test(value);
}

const isEmail = value => {
    if (value.includes('@')) {
        const valueArr = [];
        for (let i = 0; i < value.length; i++) {
            valueArr.push(value[i]);
        }
        let valueAtIndex = +valueArr.findIndex(char => char === '@');
        console.log(valueAtIndex);
        if (valueArr[valueAtIndex - 1] && valueArr[valueAtIndex + 1]) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

const isNotEmpty = value => {
    return value.trim().length !== 0;
};

const isValidPassword = value => {
    return !hasWhiteSpace(value) && value.length >= 8 && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
};

const areAllFieldsEqual = (obj) => {
    return [new Set(Object.values(obj)).size === 1];
}

export { isEmail, isNotEmpty, isValidPassword, areAllFieldsEqual };