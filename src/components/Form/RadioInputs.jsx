import React from 'react'
import './RadioInputs.css'

const RadioInputs = ({position,setNumPosition}) => {
  return (
    <div className='radio__form'>
          <h4>Select your position</h4>
        <label>
            <input 
              type='radio' 
              onClick={()=>setNumPosition(position[0].id)}/>
          Lawyer
        </label>
        <label>
            <input 
              type='radio' 
              onClick={()=>setNumPosition(position[1].id)}/>
          Content manager
        </label>
        <label>
            <input 
              type='radio' 
              onClick={()=>setNumPosition(position[2].id)}/>
          Security
        </label>
        <label>
            <input 
              type='radio' 
              onClick={()=>setNumPosition(position[3].id)}/>
          Designer
        </label>
        </div>
  )
}

export default RadioInputs