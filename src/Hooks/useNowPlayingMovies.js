import  { useEffect } from 'react'
import { api_options } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../Utils/moviesSlice';



const useNowPlayingMovies = () => {

    const dispatch = useDispatch()
    const getNowPlayingMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', api_options)
    const response = await data.json()
    dispatch(addNowPlayingMovies(response.results))
    }

    useEffect(()=>{
        getNowPlayingMovies()
    },[])

}

export default useNowPlayingMovies