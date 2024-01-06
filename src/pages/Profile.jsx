import React, { useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../Services/firebase';
import { createImageUrl } from '../Services/movieServices';
import { onSnapshot, doc, updateDoc, arrayRemove } from 'firebase/firestore';

const Profile = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    const fetchMovies = async () => {
      if (user) {
        try {
          const docRef = doc(db, 'users', user.email);
          onSnapshot(docRef, (doc) => {
            if (doc.exists()) {
              const userData = doc.data();
              if (userData && userData.moviesToWatch) {
                setMovies(userData.moviesToWatch);
              }
            }
          });
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      }
    };

    fetchMovies();
  }, [user]);
  console.log


  const handleDeleteMovie = async (movie) => {
    try {
      const userDocRef = doc(db, 'users', user.email);
      await updateDoc(userDocRef, {
        moviesToWatch: arrayRemove({ movie }), // Passing the object containing the movie ID
      });
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  return (
    <div className="ml-10 flex flex-col">
      <div className="my-watchlist">
        <h1 className="text-xl font-bold mb-4 mt-10">My Watch List</h1>
      </div>

      <div className="movie-list flex flex-wrap ">
        {movies.map((movieObj, index) => (
          <div className="movie-item" key={index}>
            <img src={createImageUrl(movieObj.movie.backdrop_path, 'w500')} alt={movieObj.movie.title} />
            <h2 className="text-lg font-semibold">{movieObj.movie.title}</h2>
            <button onClick={() => handleDeleteMovie(movie)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;