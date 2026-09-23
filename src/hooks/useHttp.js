import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, body = null, method = "GET", headers = {}) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url, {body, method, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();
            setLoading(false);
            return data;
        }

        catch (error) {
            setLoading(false);
            setError(error);
            throw error;
        }
    }, [])

    return {loading, request, error};
}