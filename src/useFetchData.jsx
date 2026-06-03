import { useEffect, useState } from "react";

export default function useFetchData(url) {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed To Fetch Data");
        }

        const result = await response.json();

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}