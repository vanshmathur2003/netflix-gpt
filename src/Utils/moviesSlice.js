import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: [],
        nowUpcomingMovies: [],
        nowTopRatedMovies: [],
    },
    reducers: {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload
        },
        addNowUpcomingMovies : (state,action) => {
            state.nowUpcomingMovies = action.payload
        } ,
        addNowTopRatedMovies : (state,action) => {
            state.nowTopRatedMovies = action.payload
        }     
    }
})

export default moviesSlice.reducer;

export const{ addNowPlayingMovies, addNowUpcomingMovies, addNowTopRatedMovies} = moviesSlice.actions;
 