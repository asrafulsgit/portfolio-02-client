import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { apiRequiest } from './utilities/ApiCall'
import { useDispatch } from 'react-redux'
import { setProfile } from './controllers/portfolioSlice'
import { useEffect } from 'react'
import Toastify from './aditionals/Toastify'
import { toast } from 'react-toastify'
import Spinner from './aditionals/Spinner'


function App() {
    const dispatch = useDispatch(); 
   const [loading,setLoading]=useState(true)
    const getProfileInfo =async()=>{
      try {
        const data = await apiRequiest('get','/admin/profile/active')
        dispatch(setProfile(data?.profile))
        setLoading(false)
      } catch (error) {
        toast.error(error?.response?.data?.message) 
        setLoading(false)
      }
    }
    useEffect(()=>{
      getProfileInfo()
    },[])

    if (loading) {
      return (<Spinner />)
    }
    
  return (
    <>
      <Toastify />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
