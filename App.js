import React, { useEffect, useState } from 'react'
import allMovies from "./data"

const App = () => {
  const [searchingFilm, setSearchingFilm] = useState('')
  const[ filtererdMovies, setFilteredMovies] = useState([])

  useEffect( () => {
    const movieAfterFiltered = allMovies.filter( (oneMovie) =>{
      return oneMovie.title.toLowerCase().includes(searchingFilm.toLowerCase())
    })  
    setFilteredMovies(movieAfterFiltered)
  }, [searchingFilm])
  
  return (
    <div className="movies-box">
      <form>
        <input type='text' placeholder='Vyhladavanie filmu' onChange={(event) => {setSearchingFilm(event.target.value)} }/>
      </form>
      <div className="all-movies">
        {
          filtererdMovies.map( (oneMovie) => {
            const {id, image, title, age, tags, description} = oneMovie

            return<div key={id} className="one-movie">
              <img src={image} alt=''/>
              <h2>{title}</h2>
              <p>{age}</p>
              <p>{tags}</p>
              <p>{description}</p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App
 


