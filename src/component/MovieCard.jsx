import { Link } from "react-router";


export const MovieCard = ({ movie }) => {



  

  return (
  
    <div
      className="bg-zinc-400 rounded-xl overflow-hidden shadow-md
      w-full max-w-65 mx-auto
      hover:scale-105 hover:shadow-2xl
      transition-all duration-300 ease-in-out"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="h-64 w-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-3 text-white">
        
        <h3 className="text-sm font-semibold truncate">
          {movie.title}
        </h3>

        <div className="flex items-center justify-between mt-2">
          
          <span className="text-yellow-400 font-bold text-sm">
            ⭐ {movie.vote_average}
          </span>

          <Link to={`/movieInfo/${movie.id}`}><button
            className="bg-red-500 text-xs px-3 py-1 rounded-md
            hover:bg-red-600 active:scale-95 transition">
            More Info 
          </button>
          </Link>

        </div>

      </div>
    </div>
  );
};