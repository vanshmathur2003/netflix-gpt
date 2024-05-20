import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, title }) => {
    return (
        <>
        <div >
            <div className='text-white font-bold mb-4 pl-3 text-4xl pt-2'>{title}</div>
            <div className='flex overflow-x-scroll scrollbar-hide space-x-4 p-2'>
                {movies.map(movie => (
                    <MovieCard key={movie.id} moviedata={movie} />
                ))}
            </div>
        </div>
        </>
    );
}

export default MovieList;
