import { Typography } from '@mui/joy';
import React from 'react'
import Logo from "../../assets/Logo.png"
import LoginPage from './../../components/LoginPage/LoginPage.component';
import "./authentication.styles.scss"


const Authentication=()=> {
  return (
  <div className='authentication-container'>
  <div className='imageLogo-container'>
  <img src={Logo} alt="applog" className='image-logo'/>
  </div>
   <div className='side-container'>
   <Typography level="h4" component="h1">
      <b>Welcome Back Please sign in with your credentials</b>
  </Typography>
  
    <LoginPage/>
   </div>    
  </div>
  )
}


export default  Authentication