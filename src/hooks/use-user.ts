import { useState } from "react"

export function useUser(): [string, (user: string) => void] {
  const [user, setUser] = useState(localStorage.getItem("user") || "")

  const setUserExternal = (user: string) => {
    setUser(user)
    localStorage.setItem("user", user)
  }

  return [user, setUserExternal]
}