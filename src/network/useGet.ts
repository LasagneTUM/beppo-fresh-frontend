import { useEffect, useState } from "react";

export function useGet<T>(endpoint: string, defaultValue: T) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/${endpoint}`)
    .then((res) => res.json())
    .then((data) => setValue(data));
  }, [endpoint]);

  return value;
}
