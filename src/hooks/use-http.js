import { useState, useCallback } from "react";

const useHttp = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestData, applyDataFunc) => {
        setIsLoading(true)
        setError(null)
        try {
            const resp = await fetch(requestData.url, {
                method: requestData.method,
                body: requestData.body ? JSON.stringify(requestData.body) : null,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await resp.json()
            applyDataFunc(data)
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