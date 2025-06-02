import React from 'react'
import { useState } from 'react'
import { apiRequiestWithCredentials } from '../../utilities/ApiCall'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const Login = () => {
    const navigate = useNavigate();
    const {token} = useParams();
    const [code,setCode] =useState(null);
    
    useEffect(()=>{
        if(!token){
            navigate('/404')
        }
    },[])
    const handleAdminLogin =async(e)=>{
        e.preventDefault();
        try {
          const data =  await apiRequiestWithCredentials('post',`/admin/verify/${token}`,{code})
          console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 sora-family">Admin Login</h2>
        <form onSubmit={handleAdminLogin} className="space-y-5">
          <div>
            <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="number"
              id="code"
              className="w-full px-4 py-3 border border-gray-300 
              rounded-lg   outline-none
               focus:border-blue-500 transition-colors duration-300"
              placeholder="••••••••"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 
            text-gray-300 font-medium py-2 rounded-lg transition cursor-pointer sora-family"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
