function MovieCard({ movies, handleFavorites }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="rounded-lg shadow-lg border border-gray-300/50 overflow-hidden 
                     bg-gradient-to-r from-blue-400 to-blue-900 text-white"
        >
          <img
            src={movie.Poster}
            alt="Poster"
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="p-4 text-center">
            <h5 className="text-lg font-semibold">{movie.Title}</h5>
            <p className="text-gray-200">{movie.Year}</p>
            <button
              onClick={() => handleFavorites(movie)}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md 
                         transition duration-300 ease-in-out"
            >
              Add to Favorites
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
