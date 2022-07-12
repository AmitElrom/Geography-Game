import { useState, useCallback } from "react";

import axios from "axios";

const useHttp = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestData, applyDataFunc) => {
        setIsLoading(true)
        setError(null)
        try {
            // const { data } = await axios[requestData.method.toLowerCase()](requestData.url, requestData.body && requestData.body)
            const resp = await fetch(requestData.url, {
                method: requestData.method,
                body: requestData.body ? requestData.body : null,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await resp.json()
            const transformedData = applyDataFunc ? applyDataFunc(data) : data;
            return transformedData;
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

export default useHttp;