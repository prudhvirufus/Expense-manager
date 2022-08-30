import React from 'react'
import { Children } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from './../../contexts/user.context';

const PrivateRoute =({children}:any)=> {
  
let {user} = useUserAuth()
console.log(user, "private route")

     if(!user){
     return <Navigate to="/"/>
     }
     else{
        return children
     } 
}

export default PrivateRoute