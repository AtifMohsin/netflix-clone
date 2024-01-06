import React from 'react'

import Hero from '../components/Hero';
import Movierow from '../components/Movierow';
import endpoints from '../Services/movieServices';
const Home = () => {
  

  
  return (
    <>
      <Hero />
      <Movierow title="Trending" url={endpoints.trending}/>
      <Movierow title="Top Rated" url={endpoints.topRated}/>
      <Movierow title="Popular" url={endpoints.popular}/>
      <Movierow title="Comedy"url={endpoints.comedy}/>
      

    </>
  )
}

export default Home