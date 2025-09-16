import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './context/UserContext'
import UserCard from './components/UserCard'
import Loader from './components/Loader'
import AddModal from './components/AddModal'
import './App.css'

function App() {
  const { users, fetchUsers, loading } = useContext(UserContext)
  const [isAdding, setIsAdding] = useState(false)

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="app-container">
      <div className="header">
        <h1>User Profiles</h1>
        <button className="add-btn" onClick={() => setIsAdding(true)}>+ Add Profile</button>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="user-grid">
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}

      {isAdding && <AddModal onClose={() => setIsAdding(false)} />}
    </div>
  )
}

export default App
