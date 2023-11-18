import { useState } from "react";

export function useUser(): [string | null, (user: string | null) => void] {
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  const setUserExternal = (user: string | null) => {
    setUser(user);
    if (user === null) {
      localStorage.removeItem("user");
    } else {
      localStorage.setItem("user", user);
    }
  };

  return [user, setUserExternal];
}
