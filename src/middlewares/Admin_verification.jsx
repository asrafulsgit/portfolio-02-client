import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import NotFound from '../pages/notFound/NotFound';
import { apiRequiest } from '../utilities/ApiCall';
import { toast } from 'react-toastify';

const Admin_verification = () => {
    const {email} = useParams();
    const [isValid,setIsValid]=useState(false)
    useEffect(()=>{
        setIsValid(isValidEmail(email))
    },[])
     const sendVerificationEmail = async(email)=>{
                try {
                  await apiRequiest('get',`/admin/${email}`)
                  setIsValid(false)
                } catch (error) {
                  toast.error(error?.response?.data?.message)
                }
          }
    if(isValid){
       sendVerificationEmail(email)
       return <h1>loading....</h1>
    }
    return (<NotFound />)
}

function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
}
export default Admin_verification
