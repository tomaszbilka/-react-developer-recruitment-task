import { useState, useCallback } from "react";

const useHttp = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback((url, query, method, body, headers) => {
    setIsLoading(true);
    setError(null);
    fetch(`${url}${query}`, {
      method: method,
      body: body,
      headers: headers,
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
        if (responseData.error) {
          throw new Error(responseData.message);
        }
        setData(responseData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return [sendRequest, data, isLoading, error];
};

export default useHttp;
