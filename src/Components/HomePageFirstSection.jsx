import { useSelector } from "react-redux"
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import { api_options } from "../Utils/constants"
import { useEffect, useState } from "react"

const HomePageFirstSection = () => {

  
  useNowPlayingMovies()
  const movies = useSelector(store => store.movies?.nowPlayingMovies)
  const movie = movies[0]


  const [kdata,setkdata] = useState()
  const useMovieTrailer = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie?.id}/videos?language=en-US`, api_options)
    const jsondata = await data?.json()
    const maindata = jsondata?.results

    const fdata = await maindata.filter(data => data.name == 'Official Trailer')
    setkdata(fdata[0].key)

  }
  useEffect(() => {
    useMovieTrailer()
  }, [movie])


  return (
    <>
      <div className=" pt-[30%] pl-10 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
        <div className="text-[40px] pb-3 ">{movie?.title}</div>
        <div className="w-1/3">{movie?.overview}</div>
        <div className="flex gap-5 pt-10 pb-5">
          <button className="border border-black pt-2 pb-2 pl-4 pr-4 rounded-md bg-gray-800 text-white hover:bg-gray-700">▶️ Play</button>
          <button className="border border-black pt-2 pb-2 pl-4 pr-4 rounded-md  bg-gray-800 text-white hover:bg-gray-700" >More Info</button>
        </div>
      </div>
      <div>
        <iframe
        className="w-full aspect-video "
          src={`https://www.youtube.com/embed/${kdata}?si=dEhGGKMo73e2PARP&start=1&autoplay=1&mute=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

      </div>
    </>
  )
}

export default HomePageFirstSection