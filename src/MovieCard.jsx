function MovieCard({ movies, handleFavorites }) {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* Loop through the movies and display each one */}
      {movies.map((movie, index) => (
        <div
          key={index}
          className="overflow-hidden text-white border rounded-lg shadow-lg border-gray-300/50 bg-gradient-to-r from-blue-400 to-blue-900"
        >
          {/* Movie Poster */}
          <img
            src={movie.Poster}
            alt="Poster"
            className="object-cover w-full h-64 rounded-t-lg"
          />

          {/* Movie Details */}
          <div className="p-4 text-center">
            <h5 className="text-lg font-semibold">{movie.Title}</h5>
            <p className="text-gray-200">{movie.Year}</p>

            {/* Button to add the movie to favorites */}
            <button
              onClick={() => handleFavorites(movie)}
              className="px-4 py-2 mt-4 font-medium text-white transition duration-300 ease-in-out bg-red-500 rounded-md hover:bg-red-700"
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
