import { useReducer } from "react";

const inputFormReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':

            break;
        case 'BLUR':
            return {}
        default:
            break;
    }
};

const useInputForm = (input, validationFuncs) => {
    const [stateInputForm, dispatchInputForm] = useReducer(inputFormReducer, {
        error: {
            hasError: '',
            errorText: ''
        }
    });
};

export default useInputForm;
