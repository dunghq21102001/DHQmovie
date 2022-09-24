import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
function Row(props) {
    const rowID = props.rowID
    const [movies, setMovies] = useState([])
    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }

    useEffect(() => {
        axios.get(props.fetchURL).then((res) => {
            setMovies(res.data.results)
        })
    }, [props.fetchURL])
    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{props.title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0 select-none' size={40} />
                <div id={'slider' + rowID} className='w-full overflow-x-scroll whitespace-nowrap scroll-smooth relative'>
                    {movies.map((movie, id) => (
                        <Movie key={id} movie={movie} />
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0 select-none' size={40} />
            </div>
        </>
    )
}

export default Row