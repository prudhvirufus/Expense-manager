import {createContext, useContext, useEffect, useState} from "react"

import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,
    GoogleAuthProvider,signInWithPopup
} from "firebase/auth"
import { auth } from "../utils/firebase.utils"

export const UserContext = createContext(
    {
        user:{},
        openSignUpModal:false,
        setOpenSignUpModal:(value:any)=>null,
        signUp:(value:any,value2:any)=>null,
        loginIn:(value:any,value2:any)=>null,
        logOut:()=>null,
        googleSignIn:()=>null,
    }
)

export const UserProvider =({children}:any)=>{
    const [openSignUpModal,setOpenSignUpModal] = useState(false)
    const [user,setUser]  = useState("")

    const signUp=(email:any,password:any)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginIn=(email:any,password:any)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
    return signOut(auth)
    }

    const googleSignIn =()=>{
        const googleAuthProvider = new  GoogleAuthProvider()
        return  signInWithPopup(auth,googleAuthProvider)
    }

useEffect(() => {
  const unsubscribe =   onAuthStateChanged(auth,(currentUser:any)=>{
        setUser(currentUser)
    })
    return(()=>{
        unsubscribe()
    })
}, [])


    const value:any ={user,openSignUpModal,setOpenSignUpModal,signUp,loginIn,logOut,googleSignIn}
 return(
    <UserContext.Provider value={value}>
   {children}
    </UserContext.Provider>
 )
}


export function useUserAuth(){
    return useContext(UserContext)
}
