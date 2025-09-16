import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'

function EditModal({ user, onClose }) {
  const { updateUser } = useContext(UserContext)
  const [formData, setFormData] = useState({ ...user })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(user.id, formData)
    onClose()
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" value={formData.name} onChange={handleChange} />
          <input name="email" value={formData.email} onChange={handleChange} />
          <input name="phone" value={formData.phone} onChange={handleChange} />
          <input name="website" value={formData.website} onChange={handleChange} />
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default EditModal
