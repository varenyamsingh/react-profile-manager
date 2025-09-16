import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'

function AddModal({ onClose }) {
  const { addUser } = useContext(UserContext)

  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    phone: '',
    website: '',
    street: '',
    city: '',
    company: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addUser(formData)
    onClose()
  }

  // Close modal when clicking on background
  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal') {
      onClose()
    }
  }

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit}>
          <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
          <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
          <input name="website" placeholder="Website" value={formData.website} onChange={handleChange} />
          <input name="street" placeholder="Street" value={formData.street} onChange={handleChange} />
          <input name="city" placeholder="City" value={formData.city} onChange={handleChange} />
          <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
          <button type="submit">Add</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default AddModal
