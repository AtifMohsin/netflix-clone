import React, { useEffect, useState } from 'react'
import axios from "axios"
import Movieitem from './Movieitem'
import {MdChevronLeft, MdChevronRight} from "react-icons/md"

const Movierow = ({title, url}) => {
  
  const [movies, setMovies] = useState([])

  const [isHovered, setIsHovered] =useState(false)

  const rowId = Math.floor(Math.random()* 1000);



  useEffect(()=>{

    axios.get(url).then((res)=>{setMovies(res.data.results)})


  },[url])
  
  const slide = (offset) => {

    const slider = document.getElementById(`slider` + rowId)
    slider.scrollLeft= slider.scrollLeft + offset
    
  }
  
  
  return (
    <>
    <div className=''>
      <h1 className='text-2xl font-nsans-bold p-4'>{title}</h1>
      
      <div id={`slider` + rowId} className='flex overflow-x-scroll scrollbar-hide ml-6 scroll-smooth ' onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}}>
      {isHovered && <MdChevronLeft onClick={()=> slide(-500)}
      className='  absolute mt-16 justify-center items-center  left-6 z-20' size={50}/>}
      
        <div className=' flex flex-nowrap  '>
          {movies.map((movie) => (
            <Movieitem key={movie.id} movie={movie} />
          ))}
        </div>
       {isHovered && <MdChevronRight  onClick={()=> slide(500)} className='absolute mt-16 justify-center items-center  right-4 z-20 ' size={50}/>}
      </div>
    
      
      </div>
    </>
  );
};

export default Movierow  