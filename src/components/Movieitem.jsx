import React, { useState } from 'react'
import { createImageUrl } from '../Services/movieServices'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus, faPlay } from '@fortawesome/free-solid-svg-icons';


const Movieitem = ({movie}) => {

    
    const {title,backdrop_path } = movie;
  return (
    <div className='group flex flex-col justify-end '>
    <div className=' relative inline-block rounded-t-md w-[160px] sm:w-[180px] md:[w-220] lg:w-[240px] xl:w-[280px] m-2 mb-0 overflow-hidden cursor-pointer group-hover:scale-110 duration-300 hover:opacity-90'>

    <img src={createImageUrl(backdrop_path , "w500")} alt={title}/>

    </div>
   
    <div className=' hidden absolute mb-0  group-hover:flex flex-col group-hover:scale-110 w-[160px] sm:w-[180px] md:[w-220] lg:w-[240px] xl:w-[280px] h-20 bg-[#101010] rounded-b-md duration-300  space-x-2 opacity-80 ml-2  '>
    
    <div>
    <FontAwesomeIcon icon={faPlay} className='text-white border-2 rounded-full cursor-pointer opacity-70 hover:opacity-100 h-2 p-2 ml-2 mt-4' />
          
          <FontAwesomeIcon icon={faPlus} className='text-white border-2 rounded-full cursor-pointer hover:opacity-100 h-2 p-2 opacity-70 ml-2 mt-4' />
          <FontAwesomeIcon icon={faHeart} className=' text-white border-2 rounded-full cursor-pointer hover:opacity-100 h-2  p-2 opacity-70 ml-2 mt-4'/> </div>
         <div><h1 className= 'hidden md:block text-xs '>{title}</h1></div> 
          

    

    </div>

    </div>
    )
}

export default Movieitem