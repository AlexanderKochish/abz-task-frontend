import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Users from './components/Users/Users';
import Form from './components/Form/Form'

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Navbar/>
      <Header/>
      <Users/>
      <Form/>
      </div>
    </div>
  )
}

export default App;
