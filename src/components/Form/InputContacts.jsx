import React from 'react'
import './InputContacts.css'

const InputContacts = ({
    name,
    setName,
    email, 
    setEmail,
    phone,
    setPhone,
    nameError,
    emailError,
    phoneError,
    setNameError,
    setEmailError,
    setPhoneError,
}) => {
  
   //function validation Name
   const handleName = (e) => {
    setName(e.target.value)
    if(!e.target.value.length){
       setNameError('field not must be empty ')
    }else if(e.target.value.length < 2 || e.target.value.length > 60){
        setNameError('incorrect name length')
    }else{
        setNameError('')
    }
  }
  //function validation Email
  const handleEmail = (e) => {
    setEmail(e.target.value)
    // eslint-disable-next-line
    const email = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    if(!email.test(String(e.target.value).toLowerCase())){
     setEmailError('Incorrect e-mail!')
    }else{
      setEmailError('')
    }
  }
  //Function validation Phone
  const handlePhone = (e) => {
    setPhone(e.target.value)
     // eslint-disable-next-line
    const phone = /^[\+]{0,1}380([0-9]{9})$/;
    if(!phone.test(Number(e.target.value))){
      setPhoneError('Phone is incorrect')
    }else{
      setPhoneError('')
    }
  }
  return (
    <>
    {nameError? <div style={{color:'red'}}>{nameError}</div>:''}
    <input 
      type="text" 
      name='username' 
      placeholder='Your name'
      className='form__input'
      value={name}
      onChange={(e)=>handleName(e)}/>

    {emailError? <div style={{color:'red'}}>{emailError}</div>:''}
    <input 
      type="email"
      name='email'
      placeholder='Email'
      className='form__input'
      value={email}
      onChange={(e)=>handleEmail(e)} />
        
    {phoneError? <div style={{color:'red'}}>{phoneError}</div>:''}
    <input 
      type="tel"
      name='tel'
      placeholder='Phone'
      className='form__input'
      value={phone}
      onChange={(e)=>handlePhone(e)} />
      <span className='input__tel__text'>+38 (XXX) XXX - XX - XX</span>
    </>
  )
}

export default InputContacts