import React,{useState}from 'react'
import { Alert, Button, Dialog, Link,TextField,Typography } from '@mui/material';
import "./loginpage.styles.scss"
import { UserContext, useUserAuth } from '../../contexts/user.context';
import SignUpForm from '../SignUpForm/SignUpForm.component';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import { AiOutlineInstagram } from 'react-icons/ai';





const defaultLogin={
  email:"",
  password:""
}


const ModalDialog = ({ open, handleClose }:any) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose} className="dailog-box">
     <SignUpForm/>
    </Dialog>
  );
};


const  LoginPage =()=> {
  const [error,setError] = useState("")
  const [formFields,setLoginformFields] = useState(defaultLogin) 

  const {email,password} = formFields
  const {loginIn,googleSignIn,setOpenSignUpModal,openSignUpModal} = useUserAuth()

   const navigate = useNavigate()





   const onGoogleHandleClick=async(event:any)=>{

try{
await  googleSignIn()
navigate("/dashboard")
}
catch(error:any){
  console.log(error.code)
}

   }
 const handleSignUpModal =()=>{
     setOpenSignUpModal(true)
  }
  const handleClose = () => {
    setOpenSignUpModal(false)
  };

  const handleChange=(event:any)=>{
   const {name,value} = event.target
   setLoginformFields({...formFields,[name]:value})
  }

  const handleSubmit=async(event:any)=>{
    event.preventDefault()
   
    setError("")
    try{
      await loginIn(email,password)
      navigate("/dashboard")
    }
    catch(error:any){
      switch(error.code)
      {
  case "auth/user-not-found":
    setError("No user with this email")
   break
 case "auth/wrong-password":
  setError("Incorrect password for the email")
   break
 default:
   console.log(error)
      }
    }
    

  }

  return (
    <div className='login-container'>
    <div>
    {error && <span style={{color:"red",fontSize:"14px",marginBottom:"20px"}}>{error}</span>}
    <form onSubmit={(event:any)=>{handleSubmit(event)}}>
    <TextField label="Email" type="email" required  name="email" onChange={handleChange} value={email} className='email-field'/>
    <TextField   label="Password" type="password" required name="password" onChange={handleChange} value={password} autoComplete="current-password" className='password-field'/>
    <div>
    <Button variant="outlined" className='login-button' type="submit">Log in</Button>
    </div>
    </form>
  <Typography fontSize="sm" sx={{ alignSelf: 'center' }}> Don't have an account? <Link onClick={handleSignUpModal}>Sign up</Link></Typography>
  <div>
    <Button variant="outlined" className='icon-button' onClick={onGoogleHandleClick}><FcGoogle/></Button>
    <Button variant="outlined" className='icon-button'><GrFacebook/></Button>
    <Button variant="outlined" className='icon-button'><AiOutlineInstagram/></Button>
    </div>
 
  <ModalDialog open={openSignUpModal} handleClose={handleClose} className="sign-up-modal" />

    </div>
</div>
  )
}

export default LoginPage



//sendPasswordReset