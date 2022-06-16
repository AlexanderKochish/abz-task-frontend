import React from 'react'
import './Button.css'

const Button = ({
  children,
  onClick,
  disabled,
  usersBtn}) => {
  
  return (
    <button 
      disabled={disabled} 
      onClick={onClick} 
      className={usersBtn? usersBtn : 'ui__btn'}>
        {children}
    </button>
  )
}

export default Button