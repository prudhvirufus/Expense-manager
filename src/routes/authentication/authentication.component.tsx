import { Typography } from '@mui/joy';
import React from 'react'
import Logo from "../../assets/Logo.png"
import LogoBlack from "../../assets/logoBlack.png"
import LogoGift from "../../assets/LogoGift.png"
import LoginPage from './../../components/LoginPage/LoginPage.component';
import "./authentication.styles.scss"


const Authentication=()=> {
  return (
  <div className='authentication-container'>
  <div className='imageLogo-container'>
  <img src={LogoGift} alt="applog" className='image-logo'/>
  </div>
   <div className='side-container'>
   <Typography level="h4" component="h1">
      <b>Welcome to Expense Manager! Please sign in with your credentials</b>
  </Typography>
  
    <LoginPage/>
   </div>    
  </div>
  )
}


export default  Authentication