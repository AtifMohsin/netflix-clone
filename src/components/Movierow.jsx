import React, { useEffect, useState } from 'react'
import axios from "axios"
import Movieitem from './Movieitem'

const Movierow = ({title, url}) => {
  
  const [movies, setMovies] = useState([])


  useEffect(()=>{

    axios.get(url).then((res)=>{setMovies(res.data.results)})


  },[url])
  
  
  
  return (
    <>
    <div className=''>
      <h1 className='text-2xl font-nsans-bold p-4'>{title}</h1>
      <div className='flex overflow-x-scroll scrollbar-hide ml-6'>
        <div className='flex flex-nowrap  '>
          {movies.map((movie) => (
            <Movieitem key={movie.id} movie={movie} />
          ))}
        </div>
      </div></div>
    </>
  );
};

export default Movierow 