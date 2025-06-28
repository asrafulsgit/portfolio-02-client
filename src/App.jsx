import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { apiRequiest } from './utilities/ApiCall'
import { useDispatch } from 'react-redux'
import { setProfile } from './controllers/portfolioSlice'
import { useEffect } from 'react'


function App() {
    const dispatch = useDispatch(); 
   
    const getProfileInfo =async()=>{
      try {
        const data = await apiRequiest('get','/admin/profile/active')
         dispatch(setProfile(data?.profile))
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(()=>{
      getProfileInfo()
    },[])
   
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
