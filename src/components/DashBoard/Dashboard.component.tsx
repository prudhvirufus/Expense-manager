import { Button } from '@mui/material';
import React from 'react'
import { useUserAuth } from './../../contexts/user.context';
import { useNavigate } from 'react-router-dom';

const Dashboard =()=> {
  const {user,logOut}:any = useUserAuth()
  console.log(user,"user Object")

 const  onHandleLogout =async()=>{
   try{
   await logOut()
   }
   catch(err:any){
  console.log(err)
   }


  }
  return (
    <>
    <div>Dashboard</div>
    <h1>Hello {user && user.email}</h1>
    <h1>Welcome to Expense Manager</h1>
    <div><Button onClick={onHandleLogout}>Logout</Button></div>
    </>
  )
}

export default Dashboard