import { useEffect, useState } from "react"
import "./App.scss"
import UserProfile from "./components/user-profile/UserProfile"
import User from "./interfaces/User"
import UserResponse from "./interfaces/UserResponse"
const API_URL = "https://randomuser.me/api/?page=1&results=10"

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [page, setPage] = useState<number>(0)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const response = await fetch(API_URL)
    const { results, info }: UserResponse = await response.json()
    setPage(info.page)
    setUsers(results)
  }

  return (
    <div className="App">
      {users.map((user: User, i) => (
        <UserProfile key={i} user={user} />
      ))}
    </div>
  )
}

export default App
