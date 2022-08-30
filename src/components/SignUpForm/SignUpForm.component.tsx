import React, { useState } from 'react'
import "./SignUpForm.styles.scss"
import { Alert, Button, TextField } from '@mui/material';
import { useUserAuth } from './../../contexts/user.context';
const defaultFormFields ={
    displayName:"",
    email:"",
    password:"",
    confirmPassword:""
  }
const SignUpForm =()=> {
    const [formFields,setFormFields] = useState(defaultFormFields)
    const [error,setError] = useState("")
    const { displayName,email,password,confirmPassword}  = formFields
    const {signUp,setOpenSignUpModal} = useUserAuth()

    
       
     const handleChange =(event:any)=>{
     const {name,value} = event.target
     setFormFields({...formFields,[name]:value})
    }


    const handleSubmit =async(event:any)=>{
        event.preventDefault()
        console.log(formFields,"event in the handle submit")

        if(password!==confirmPassword){
            setError("passwords do not match")
             return
        }

        setError("")
        try{
            await signUp(email,password)
            setOpenSignUpModal(false)
          }
        catch(err:any)
               {
                if(err.code === "auth/email-already-in-use"){
                    setError("Existing Email cannot be entered twice")
                    return
                  }
                  if(err.code === "auth/weak-password"){
                    setError("Password should be alteast 6 charcaters")
                    return
                  }
                
            }

    }

  return (
    <>
    <h4>Sign Up<br/>It's quick and easy</h4>
    <form  onSubmit={(event)=>{handleSubmit(event)}} className="form-container">
    <TextField label="Display Name" type="text" required name="displayName" onChange={handleChange} value={displayName}/>
    <TextField label="Email" type="email" required  name="email" onChange={handleChange} value={email}/>
    <TextField   label="Password" type="password" required name="password" onChange={handleChange} value={password}/>
    <TextField label="Confirm Password" type="password" required name="confirmPassword" onChange={handleChange} value={confirmPassword}/>
    <Button  type="submit">Sign Up</Button>
    {error && <Alert sx={{fontSize:"8px",size:"small"}}  variant="outlined" severity="error">{error}</Alert>}
    </form>
    </>
  )
  }

export default SignUpForm