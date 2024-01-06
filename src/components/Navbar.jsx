import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  
  const {user, logOut} = UserAuth();
  const navigate = useNavigate()
  

  const handleLogout= async ()=> {

  try{
    await logOut();
    navigate("/");
  } catch(err) {
      console.log(err)
  }

  }


  return (
    <div className='absolute bg-transparent flex justify-between items-center font-nsans-light text-sm mx-auto z-50 w-full'>
    <div>
    <h1>
    <Link to="/" className='text-red-600 font-bold font-nsans-bold text-3xl pl-4' >NETFLIX</Link>
    </h1>
    </div>
    
    {user?.email? (
      <><div >
        <ul className='hidden  md:flex gap-4 space-x-3 cursor-pointer' >
           <li className='hover:text-gray-300 duration-200 active:text-white'>Home</li>
           <li className='hover:text-gray-300 duration-200 active:text-white'>TV Shows</li> 
           <li className='hover:text-gray-300 duration-200 active:text-white'>Movies</li> 
           <li className='hover:text-gray-300 duration-200 active:text-white'>New & Popular</li> 
           <li className='hover:text-gray-300 duration-200 active:text-white'> My List</li> 
        </ul>
    </div>
  
    <div className='pr-4'>
        <button  className='px-4'><Link to="/profile">Profile</Link></button>
        <button onClick={handleLogout} className='px-2 bg-red-600 hover:bg-red-700 duration-200 rounded-sm py-1 '><Link to="">Logout</Link></button>
        

    </div></>
   ) :(
    
    <div className='pr-4'>
        <button  className='px-4'><Link to="/login">Login</Link></button>
        <button className='px-2 bg-red-600 hover:bg-red-700 duration-200 rounded-sm py-1 '><Link to="/signup">Signup</Link></button>
        

    </div>
   )
    }



    </div>
  )
}

export default Navbar