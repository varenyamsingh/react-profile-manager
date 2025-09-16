import React from 'react'

function ConfirmDialog({ onConfirm, onCancel }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Are you sure you want to delete?</p>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
    </div>
  )
}

export default ConfirmDialog
