
import {Navigate, useLocation, useNavigate} from 'react-router-dom'
import Home from '../admin/Home';
import NotFound from '../pages/notFound/NotFound';
import { useEffect, useState } from 'react';
import { apiRequiestWithCredentials } from '../utilities/ApiCall';
import { toast } from 'react-toastify';

const Admin_auth = () => {
  const [loading,setLoading]=useState(true);
  const [isAdmin,setIsAdmin]=useState(false);
   
  const isAuthenticated = async()=>{
    try {
     await apiRequiestWithCredentials('get','/admin/verification');
     setIsAdmin(true);
     setLoading(false);
    } catch (error) {
      setIsAdmin(false)
      setLoading(false);
      toast.error(error?.response?.data?.message)
    }
  }
  useEffect(()=>{
      isAuthenticated()
  },[])
  if(loading){
    return<><h1>Loading...</h1></>
  }
  return ( isAdmin ? <Home /> :  <NotFound /> )
}

export default Admin_auth
