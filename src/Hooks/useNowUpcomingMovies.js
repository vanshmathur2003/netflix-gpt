import  { useEffect } from 'react'
import { api_options } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { addNowUpcomingMovies } from '../Utils/moviesSlice';



const useNowUpcomingMovies = () => {

    const dispatch = useDispatch()
    const getNowUpcomingMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', api_options)
    const response = await data.json()
    dispatch(addNowUpcomingMovies(response.results))
    }

    useEffect(()=>{
        getNowUpcomingMovies()
    },[])

}

export default useNowUpcomingMovies