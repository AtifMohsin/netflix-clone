import React from 'react'
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] =useState("")

  const { logIn } = UserAuth();
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await logIn(email, password)
      navigate("/")
    } catch (err) {
      console.log(err)
    }

  }
  

  return (
    <div className='w-full h-screen flex justify-center items-center'>

    <img alt="" className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/1ed8bbe0-8018-46cf-be80-62c732ae9af1/CA-en-20240101-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/1ed8bbe0-8018-46cf-be80-62c732ae9af1/CA-en-20240101-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/1ed8bbe0-8018-46cf-be80-62c732ae9af1/CA-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/1ed8bbe0-8018-46cf-be80-62c732ae9af1/CA-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"/>

    <div className=' w-full h-screen top-0 left-0 fixed bg-black/60 p-24 ' />
    <div className=' absolute w-[450px] h-[650px] bg-black/80'>
    <div className=' flex flex-col justify-center  mt-16 mx-4 sm:mx-20 '>
      

      <h1 className='text-3xl font-bold font-nsans-small ' > Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-10 mt-10' action='' method=''>

         <input className="p-4 rounded-sm bg-gray-800 focus:outline-none border-b-2 focus:bg-gray-700 border-yellow-400"placeholder='Email or phone number' type="email" name="name" autoComplete='email'
         value={email}
         onChange={(e)=> setEmail(e.target.value)}
         
          />

         <input className='p-4 rounded-sm bg-gray-800 focus:outline-none border-b-2  border-yellow-400 focus:bg-gray-700 ' placeholder='Password' type='password' name="password" autoComplete='current-password' 

        value={password}
         onChange={(e)=> setPassword(e.target.value)}
         
         />    

         <button className=" font-nsans-small w-full bg-red-600 p-4 rounded-sm" typeof='submit' > Sign In</button>

         <div className='-mt-6 flex justify-between text-gray-500 font-nsans-small'>
          <p className='pl-2 '>
            <input type='checkbox' name=' Remember me'></input>
            {" "}Remember me
          </p>

          <p><a> Need help?</a></p>

         </div>

      </form>

      <p className='text-gray-500 text-sm font-nsans-light mt-4 pl-2  '> New to Netflx? <a className="text-white cursor-pointer">Sign Up now.</a></p>
      </div>

    </div>
    

    </div>)
}

export default Login