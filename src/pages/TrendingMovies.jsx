import { Suspense, useEffect, useState } from "react"
import { getTrendingMovies } from "../Api/movieApi";
import {MovieCard} from '../component/MovieCard';


export const Component = ()=>
{
    const[movies,setMovies] =useState([])
    
    useEffect(()=>{
        const fetchedMovies = async ()=>{
        const data = await getTrendingMovies();
        console.log(data)
        setMovies(data.results)
        }
        fetchedMovies();
    },[])

  
    return(
         <Suspense fallback={<h1>....Loading</h1>}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-3 p-3">
        {movies.map((movie) => (
         <MovieCard key={movie.id} movie={movie} />))}
      </div>
      </Suspense>
    )   
}