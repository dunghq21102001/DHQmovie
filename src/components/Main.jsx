import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { request } from '../request'
const API_IMG = "https://image.tmdb.org/t/p/original/"
function Main() {
  const [movies, setMovies] = useState([])

  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    axios.get(request.requestPopular).then((res) => {
      setMovies(res.data.results)
    })
  }, [])

  console.log(movie);
  return (
    <div className='w-full h-[570px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[570px] bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover' src={API_IMG + movie?.backdrop_path} alt={movie?.title} />
        <div className='absolute top-[20%] p-4 md:p-8 '>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
            <button className='border text-white border-gray-300 py-2 px-5'>Watch Later</button>
          </div>
          <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{movie?.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default Main