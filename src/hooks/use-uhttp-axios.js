import { useState, useCallback, useContext } from "react";
import AppContext from "../../Context/AppContext";
import axios from "axios";

const useAxiosFetch = (requestConfig) => {
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useContext(AppContext);

    const sendRequest = useCallback(
        async (requestConfig, applyData) => {
            setIsLoading(true);
            setFetchError(null);
            try {
                const url = `${requestConfig.baseUrl
                    ? requestConfig.baseUrl
                    : process.env.REACT_APP_BASE_SERVER_URL
                    }/${requestConfig.url}`;
                const par =
                    requestConfig.params && (requestConfig.params.token = user?.Token);
                const response = await axios({
                    url,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: requestConfig.method ? requestConfig.method : "GET",
                    params: requestConfig.params
                        ? requestConfig.params
                        : { token: user?.Token },
                    data: requestConfig.data ? requestConfig.data : null,
                });
                if (response.status !== 200) {
                    throw new Error();
                }
                const data = await response.data;

                applyData(data);
            } catch (err) {
                setFetchError(err.message || "Something went wrong!");
            }
            setIsLoading(false);
        },
        [user]
    );

    return {
        isLoading,
        fetchError,
        sendRequest,
        setFetchError,
    };
};

export default useAxiosFetch;