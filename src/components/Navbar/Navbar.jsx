import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'
import Button from '../UI/Button'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div>
        <img className='nav__logo' src={logo} alt="logo app" />
      </div>
      <div>
        <Button>Users</Button>
        <Button>Sign In</Button>
      </div>
    </nav>
  )
}

export default Navbar