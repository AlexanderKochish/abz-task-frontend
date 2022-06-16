import React from 'react'
import './UsersContainer.css'

const UsersContainer = ({
  email,
  id,
  name,
  phone,
  photo,
  position,
}) => {
  return (
    <div className='user__card'>
      <img className='user__photo' src={photo} alt={name} />
      <div>
        <ul className='user__title'>
          <li>{name}</li>
          <li>{email}</li>
          <li>{position}</li>
          <li>{phone}</li>
        </ul>
      </div>
    </div>
  )
}

export default UsersContainer