import React, { createContext, useState } from 'react'
import { fetchUsersAPI } from '../services/api'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchUsers = async () => {
    setLoading(true)
    const data = await fetchUsersAPI()
    setUsers(data)
    setLoading(false)
  }

  const updateUser = (id, updatedData) => {
    setUsers(prev => prev.map(user => (user.id === id ? { ...user, ...updatedData } : user)))
  }

  const deleteUser = (id) => {
    setUsers(prev => prev.filter(user => user.id !== id))
  }

  // NEW: Add user
  const addUser = (newUser) => {
    setUsers(prev => [
      ...prev,
      { ...newUser, id: Date.now(), address: { street: newUser.street || '', city: newUser.city || '' }, company: { name: newUser.company || '' } }
    ])
  }

  return (
    <UserContext.Provider value={{ users, fetchUsers, loading, updateUser, deleteUser, addUser }}>
      {children}
    </UserContext.Provider>
  )
}
