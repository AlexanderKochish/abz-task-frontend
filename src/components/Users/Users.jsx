import React,{ useState,useEffect, useCallback } from 'react'
import './Users.css'
import axios from 'axios'
import UsersContainer from './UsersContainer'
import Button from '../UI/Button'

const Users = () => {
  const[users,setUsers] = useState([])
  const[page,setPage] = useState(1)
  const[fetching,setFetching] =useState(true)
  const[totalCount,setTotalCount]= useState(0)

  useEffect(()=>{
    if(fetching){
      axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
      .then((res)=>{
        setUsers([...users,...res.data.users].sort((a,b)=>b.registration_timestamp - a.registration_timestamp))
        setPage( page +1)
        setTotalCount(res.data.total_users)
      })
      .catch((err)=>console.log(err.message))
      .finally(()=>setFetching(false))
    }
  },[fetching,page,users])
    
  const handleSubmit = useCallback(() =>{
    if(users.length < totalCount){
      setFetching(true)
    }
  },[users.length,totalCount])

  return (
    <main className='users__container'>
      <div className='users__text'>
        <h2>Working with GET request</h2>
      </div>
        <div className='users__card__wrapper'>
          {users && users.map((user)=><UsersContainer key={user.id} {...user}/>)}
        </div>
      <Button usersBtn={users.length>=totalCount? 'hidden':'ui__btn'} onClick={handleSubmit}>
        show more
      </Button>
    </main>
  )
}

export default Users