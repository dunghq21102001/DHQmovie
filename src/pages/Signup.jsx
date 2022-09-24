import { UserAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { async } from '@firebase/util'
import React, { useState } from 'react'
import bg from '../assets/netflixBg.jpg'
function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, signUp } = UserAuth()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(email, password)
      navigate('/')
    } catch (err) {
      alert(err)
    }
  }
  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover select-none' src={bg} alt='' />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'>
        </div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-600 rounded ' type="email" name="" id="signup-email" placeholder='Email' autoComplete='email' />
                <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-600 rounded ' type="password" name="" placeholder='Password' id="signup-password" autoComplete='current-password' />
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                <div className='flex justify-between items-center text-sm text-gray-400'>
                  <p className='mr-2 '>
                    <input type="checkbox" name="" id="" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'><span className='text-gray-400'>Already subcribed to DFLIX</span>
                  {' '}
                  <Link to={'/login'}>
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup