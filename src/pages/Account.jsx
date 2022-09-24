import React from 'react'
import SavedShows from '../components/SavedShows'
const API_IMG_W500 = "https://image.tmdb.org/t/p/w500/"
import bg from '../assets/netflixBg.jpg'
function Account() {
  return (
    <>
      <div className='w-full text-white'>
        <img className=' w-full h-[400px] object-cover select-none' src={bg} alt='' />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>

        </div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account