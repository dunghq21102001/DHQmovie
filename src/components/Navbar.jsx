import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
function Navbar() {
    const navigate = useNavigate()
    const { user, logOut } = UserAuth()
    const handleLogout = async () => {
        try {
            await logOut()
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
            <Link to={'/'}>
                <h1 className='hidden sm:block text-red-600 text-4xl font-bold cursor-pointer select-none'>DFLIX</h1>
            </Link>
            {user?.email
                ? <div>
                    <Link to={'/account'}>
                        <button className='text-white py-2 px-6 rounded hover:bg-yellow-200 hover:text-black mx-2'>Account</button>
                    </Link>
                    <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-red-400'>Logout</button>
                </div>
                : <div>
                    <Link to={'/login'}>
                        <button className='text-white py-2 px-6 rounded hover:bg-yellow-200 hover:text-black mx-2'>Sign In</button>
                    </Link>
                    <Link to={'/signup'}>
                        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-red-400'>Sign Up</button>
                    </Link>
                </div>}
        </div>
    )
}

export default Navbar