
import {Navigate} from 'react-router-dom'
import Home from '../admin/Home';

const Admin_auth = () => {
    const isAdmin = true;
  return ( isAdmin ? <Home /> : <Navigate to='/' /> )
}

export default Admin_auth
