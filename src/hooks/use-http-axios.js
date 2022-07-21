import { useState, useCallback } from "react";

import axios from "axios";

const useHttpAxios = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestData, applyDataFunc) => {
        setIsLoading(true)
        setError(null)
        try {
            const { data } = await axios({
                url: requestData.url,
                method: requestData.method,
                body: requestData.body ? JSON.stringify(requestData.body) : null,
                headers: {
                    'Content-Type': 'application/json'
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