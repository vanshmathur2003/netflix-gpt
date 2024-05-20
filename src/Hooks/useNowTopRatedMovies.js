import  { useEffect } from 'react'
import { api_options } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { addNowTopRatedMovies } from '../Utils/moviesSlice';



const useNowTopRatedMovies = () => {

    const dispatch = useDispatch()
    const getNowTopRatedMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', api_options)
    const response = await data.json()
    dispatch(addNowTopRatedMovies(response.results))
    }

    useEffect(()=>{
        getNowTopRatedMovies()
    },[])

}

export default useNowTopRatedMovies