import React from 'react';

const MovieCard = ({ moviedata }) => {
    return (
        <div className='min-w-[200px] transform transition-transform duration-300 hover:scale-105'>
            <img
                className='w-full h-auto rounded-md'
                src={`https://image.tmdb.org/t/p/original/${moviedata.poster_path}`}
                alt={moviedata.original_title}
                key={moviedata.id}
            />
        </div>
    );
}

export default MovieCard;
