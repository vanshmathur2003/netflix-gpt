import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import useNowTopRatedMovies from '../Hooks/useNowTopRatedMovies'
import useNowUpcomingMovies from '../Hooks/useNowUpcomingMovies'


const HomepageSecondSection = () => {
    useNowTopRatedMovies()
    useNowUpcomingMovies()
    const movies = useSelector(store => store.movies);
  return (
    <div className='bg-black '>
        <MovieList movies={movies.nowPlayingMovies} title={"Now Playing"}/>
        <MovieList movies={movies.nowTopRatedMovies} title={"Top Rated"}/>
        <MovieList movies={movies.nowUpcomingMovies} title={"Coming Soon"}/>
    </div>
  )
}

export default HomepageSecondSection