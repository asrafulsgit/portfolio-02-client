import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import NotFound from '../pages/notFound/NotFound';

const Admin_verification = ({children}) => {
    const {email}=useParams();
    const [isValid,setIsValid]=useState(false)
    useEffect(()=>{
        setIsValid(isValidEmail(email))
    },[])
     const sendVerificationEmail = async(email)=>{
                try {
                  await apiRequiest('get',`/admin/${email}`)
                } catch (error) {
                  console.log(error)
                }
          }
    if(isValid){
       sendVerificationEmail(email)
       return <Navigate to='/' />
    }
    return (<NotFound />)
}

function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
}
export default Admin_verification
