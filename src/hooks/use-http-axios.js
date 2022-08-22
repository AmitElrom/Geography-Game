import { useState, useCallback } from "react";

import axios, { AxiosError } from "axios";

const useHttpAxios = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestData, applyDataFunc) => {
        setIsLoading(true)
        setError(null)
        try {
            const { url, method, body, headers } = requestData;
            const { data } = await axios({
                url,
                method: !method ? 'GET' : method,
                data: body ? body : null,
                headers: !headers ? {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                } : {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    ...headers
                }
            })
            const d = await data;
            applyDataFunc(d)
        } catch (error) {
            const err = new AxiosError(error);
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