import { useEffect, useState } from "react";
import { topRatedMovie } from "../Api/movieApi";
import { MovieCard } from "../component/MovieCard";

export const Component = () => {

  const [topMovie, setTopMovie] = useState([]);

  useEffect(() => {

    const fetchedTopMovie = async () => {
    const data = await topRatedMovie();
    setTopMovie(data.results);
    console.log(data)
    };
    fetchedTopMovie();
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-3 p-3">
      {topMovie.map((movie) => (
       <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};