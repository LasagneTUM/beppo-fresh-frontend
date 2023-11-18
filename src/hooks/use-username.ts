import { useState } from "react"

export function useUse() {
  const [user, setUser] = useState(localStorage.getItem("user"))

  const setUserExternal = (user: string) => {
    setUser(user)
    localStorage.setItem("user", user)
  }

  return [user, setUserExternal]
}