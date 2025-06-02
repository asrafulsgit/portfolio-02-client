
import {Navigate, useLocation} from 'react-router-dom'
import Home from '../admin/Home';
import NotFound from '../pages/notFound/NotFound';
import { useEffect } from 'react';

const Admin_auth = () => {
  const isAdmin = false;
  // useEffect(()=>{
      
  // },[])
  return ( isAdmin ? <Home /> :  <NotFound /> )
}

export default Admin_auth
