import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const VerifyEmail = () => {
    const {token} = useParams()
    console.log(token)
    const [status, setStatus] = useState("Verifying...")
    const navigate = useNavigate()

    useEffect(() => {
        let ignore = false
        let redirectTimer

        const verifyEmail = async() => {
            try {
                const res = await axios.post(`http://localhost:8000/api/v1/user/verify`,{},{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                })
                if(!ignore && res.data.success){
                    setStatus("✅ Email Verified Successfully")
                    redirectTimer = setTimeout(()=>{
                        navigate('/login')
                    },2000)
                }
            } catch (error) {
                console.log(error)
                if(!ignore){
                    setStatus("❌ Verification failed. Please try again")
                }
            }
        }

        verifyEmail()

        return () => {
            ignore = true
            clearTimeout(redirectTimer)
        }
    }, [token, navigate])

  return (
    <div className='relative w-full bg-pink-100 overflow-hidden'>
        <div className='min-h-screen flex items-center justify-center'>
            <div className='bg-white p-6 rounded-2xl shadow-md text-center w-[90%] max-w-md'>
                <h2 className='text-xl font-semibold text-gray-800'>{status}</h2>
            </div>
        </div>
    </div>
  )
}

export default VerifyEmail