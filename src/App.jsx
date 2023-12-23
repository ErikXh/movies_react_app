import { useState, useEffect } from 'react'
import './App.css'
import './assets/search.svg'
import MovieCard from './components/MovieCard';
import Carouel from './components/MoviesCarousel';
import Footer from './components/footer';

// API key => d8bf3081

const API_URL =  'https://omdbapi.com?apikey=d8bf3081';

function App() {

  // new state
  const [movies, setMovies] = useState([])

  // search state
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

   //console.log(data.Search)
   setMovies(data.Search);
  }


  useEffect(()=>{
  searchMovies("Batman")
  }, []);

  return (
    <>
    <div className="app">

      <div>
        <h1>Movieland</h1>
      </div>

    <div className='font-icon search'> 
          <input placeholder='Search for movies'
          type="search" 
          name="search"
          value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)} />
          
          <i className="ri-search-line"
          onClick={()=>{searchMovies(searchTerm)}}
          ></i>
    </div>
    </div>
    <Carouel/>
    {
      movies?.length > 0 ? (
          <div className="container">
            {
              movies.map((movie)=>(
                <MovieCard movie={movie}/>
              ))
            }
          </div>
      ):(
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )
    }
    <Footer/>
    </>
  )
}

export default App
