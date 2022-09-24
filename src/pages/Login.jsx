import { UserAuth } from '../context/AuthContext'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bg from '../assets/netflixBg.jpg'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, logIn } = UserAuth()
  const [error, setError]= useState('')
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await logIn(email, password)
      navigate('/')
    } catch (err) {
      console.log(err)
      setError(err.message)
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
              <h1 className='text-3xl font-bold'>Sign In</h1>
              {error? <p className='p-3 bg-red-400 my-2'>{error}</p>:null}
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-600 rounded ' type="email" name="" id="login-email" placeholder='Email' autoComplete='email' />
                <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-600 rounded ' type="password" name="" placeholder='Password' id="login-password" autoComplete='current-password' />
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                <div className='flex justify-between items-center text-sm text-gray-400'>
                  <p className='mr-2 '>
                    <input type="checkbox" name="" id="" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'><span className='text-gray-400'>New to DFLIX</span>
                  {' '}
                  <Link to={'/signup'}>
                    Sign Up
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

export default Login