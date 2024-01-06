import React, { useState } from 'react'
import { createImageUrl } from '../Services/movieServices'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus, faPlay } from '@fortawesome/free-solid-svg-icons';
import { UserAuth } from '../context/AuthContext';
import {arrayUnion, doc, updateDoc} from "firebase/firestore"
import {db} from "../Services/firebase"

const Movieitem = ({movie}) => {

    const [addToWatchList, setAddToWatchList] =useState(false);
    const [clicked, setClicked] = useState(false);
    const {title,backdrop_path, poster_path } = movie;
    const {user}= UserAuth();

  const makeWatchList = async () => {
    const userEmail = user?.email;
  
    if(userEmail) {

      const userDoc = doc(db, "users" , userEmail);

      setAddToWatchList(!addToWatchList);

      await updateDoc(userDoc, {
        moviesToWatch: arrayUnion({movie}),
      });
    }else {
      alert("Login to add to watch list.")
    }


    }
  
   

    

  return (
    <div className=' flex flex-col justify-end'>
    <div className='group relative inline-block rounded-t-md w-[160px] sm:w-[180px] md:[w-220] lg:w-[240px] xl:w-[280px] m-2 mb-0 hover:scale-110 duration-300'>
      <img src={createImageUrl(backdrop_path, "w500")} alt={title} />
      <div className='hidden absolute -mt-24 group-hover:flex flex-col  w-full h-24 bg-[#101010] rounded-b-md duration-300 space-x-2 opacity-80'>
        {/* Your icon components here */}
    
      <div className='flex ml-2'>
    <FontAwesomeIcon icon={faPlay} className='text-white border-2 rounded-full cursor-pointer opacity-60 hover:opacity-100 h-4 p-2 ml-2 mt-4' />
          
          <FontAwesomeIcon onClick={makeWatchList} icon={faPlus} className='text-white border-2 rounded-full cursor-pointer hover:opacity-100 h-4 p-2 opacity-60 ml-2 mt-4' />
          <FontAwesomeIcon onClick={user ? () => setClicked(!clicked) : undefined}  icon={faHeart} className={`${clicked? "text-red-500" : "text-white"}  border-2 rounded-full cursor-pointer hover:opacity-100 h-4  p-2 opacity-70 ml-2 mt-4`}/> </div>
         <div ><h1 className= 'hidden md:block text-xs ml-2 mt-2 '>{title}</h1></div> 
          
         </div>
    

    </div>

    </div>
    )
}

export default Movieitem