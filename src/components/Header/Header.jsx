import React from 'react'
import Button from '../UI/Button'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__content'>
        <h1>Test assignment for <br/>
          front-end developer</h1>
          <p>
          What defines a good front-end developer is one that<br/>
           has skilled knowledge of HTML, CSS, JS with a vast<br/>
            understanding of User design thinking as they'll be<br/>
             building web interfaces with accessibility in mind.<br/>
              They should also be excited to learn, as the world<br/>
               of Front-End Development keeps evolving.
          </p>
          <Button>Sign In</Button>
      </div>
    </header>
  )
}

export default Header