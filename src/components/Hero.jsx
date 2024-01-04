import React from 'react'
import axios from "axios"
import endpoints, { createImageUrl } from '../Services/movieServices';
import {useState, useEffect} from "react";


const Hero = () => {
  
  const [movie, setMovie] = useState('');

  useEffect(()=>{

    axios.get(endpoints.popular).then((res)=>{
      try {
      const movies = res.data.results;
      const randomMovie= movies[Math.floor(Math.random() * movies.length)];
      setMovie(randomMovie)
      
      } catch (err)  {
        console.err("Error fetching date", err)
      }

    })

  },[]);

  

  

  const {title, backdrop_path, release_date, overview} =movie
  
    function capOverview(str,length) {
    if(!str) 
      return "";
    return str.length > length ? str.slice(0-length) + "....": str
      }


  return (
    <div className=' w-full h-[550px] '>
    <div className='  w-full h-full '>
    <img className="  w-full h-full  object-cover object-top " src={createImageUrl(backdrop_path,"original")} alt={title} />

    </div>
    <div className='pl-6 absolute top-[25%] w-[70%] lg:w-[50%] '>
      <h1 className='text-5xl font-nsans-bold'>{title}</h1>
      <p className='font-nsans-medium text-gray-400 pt-2'>{release_date}</p>
      <p className='hidden md:block'>{capOverview(overview,150)}</p>
    <div className='flex gap-2 mt-4'>
      <button className='bg-white bg-op text-black text-lg rounded-md font-nsans-medium px-6 py-2 text-center hover:bg-gray-200'>Play</button>
      <button className='bg-gray-500 bg-opacity-50  text-medium font-nsans-medium px-6 py-2 rounded-md  text-center hover:bg-opacity-60'>More Info</button>

    </div>
    </div>
    
    </div>
  )
  }

export default Hero