import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";


function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites){
    return (
      <div className="favorites">
        <h2>Favorites</h2>
        <div className="movie-grid">
          {favorites.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div> 
    );
  }

  return (
    <div className="favorites-empty">
        <h2>Favorites</h2>
        <p>You don't have any favorites yet.</p>
        <p>Start adding some!</p>
    </div>
  );
}

export default Favorites;