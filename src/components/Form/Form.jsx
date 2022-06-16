import React,{ useState,useEffect, useCallback } from 'react'
import './Form.css'
import Button from '../UI/Button'
import axios from 'axios'
import RadioInputs from './RadioInputs'
import InputContacts from './InputContacts'

const Form = () => {
  const[position,setPosition] = useState([])
  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[phone,setPhone] = useState('')
  const[file,setFile] = useState('')
  const[num,setNumPosition] = useState(0)
  const[validate,setValidate] = useState(false)
  const[nameError, setNameError]=useState('')
  const[emailError,setEmailError]=useState('')
  const[phoneError,setPhoneError]=useState('')
  

  const handlePosition = async()=>{
    await axios
    .get('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
    .then((res)=>setPosition(res.data.positions))
  }
  const handleToken = async()=>{
    await axios
    .get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    .then((res)=>localStorage.setItem('token',res.data.token))
  }
  const handleFormSubmit = useCallback(()=>{
    const formData = new FormData()
    formData.append('name',name)
    formData.append('email',email)
    formData.append('phone',phone)
    formData.append('position_id',num)
    formData.append('photo',file)
    axios
    .post(' https://frontend-test-assignment-api.abz.agency/api/v1/users',formData,{
      headers:{
        'Token':localStorage.getItem('token'),
        'Content-type':'multipart/form-data'
      }
    }) 
    .then((res) => {
      console.log(`success` + res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  },[name,email,phone,num,file])
  
  useEffect(()=>{
    handlePosition()
    handleToken()
    // eslint-disable-next-line
  },[])
  useEffect(()=>{
    if(nameError || emailError || phoneError || !file || !num ){
    setValidate(false)
   }else{
    setValidate(true)
    handleFormSubmit()
   } 
   
  },[nameError,emailError,phoneError,num,file,handleFormSubmit])
 

  return (
    <div className='form__container'>
      <h3>Working with POST request</h3>
      <form className='form'>
        <InputContacts 
          name={name} 
          setName={setName} 
          email={email} 
          setEmail={setEmail} 
          phone={phone}
          setPhone={setPhone}
          nameError={nameError}
          setNameError={setNameError}
          emailError={emailError}
          setEmailError={setEmailError}
          phoneError={phoneError}
          setPhoneError={setPhoneError}/>
        <RadioInputs 
          position={position} 
          setNumPosition={setNumPosition}
          />
        <div>
          <input 
          type='file' 
          accept='image/*'
          defaultValue={file}
          onChange={(e)=>setFile(e.target.files[0])}
          placeholder='Upload your photo'
          className='input__form__file'/>
        </div>
        <Button disabled={!validate} onClick={handleFormSubmit}>Sign Up</Button>
      </form>
    </div>
  )
}

export default Form