import { useState, useCallback } from "react";

import axios from "axios";

const useHttpAxios = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestData, applyDataFunc) => {
        setIsLoading(true)
        setError(null)
        try {
            const { url, method, body } = requestData;
            const { data } = await axios({
                url,
                method,
                data: body ? body : null,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            })
            const d = await data;
            applyDataFunc(d)
        } catch (err) {
            setError(err.message)
        }
        setIsLoading(false)
    }, [])

    return {
        isLoading,
        error,
        sendRequest
    }
}

export default useHttpAxios;