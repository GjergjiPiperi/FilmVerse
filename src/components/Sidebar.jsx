import { useState } from "react";

function Sidebar({ movies, remove }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {/* Sidebar toggle button */}
      {showSidebar ? (
        <button
          className="flex object-cover w-10 h-10 text-4xl cursor-pointer"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <img
          src="/images/favourite.png"
          onClick={() => setShowSidebar(!showSidebar)}
          className="object-cover w-10 h-10 p-1 cursor-pointer"
        />
      )}

      {/* Sidebar container */}
      <div
        className={`top-[71px] right-0 w-[35vw] bg-blue-600 p-12 pl-20 text-white fixed h-full z-40 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <h2 className="mb-4 text-2xl font-bold">Favorite Movies</h2>

        {/* List of Favorite Movies */}
        <ul className="space-y-4 overflow-y-auto max-h-[80vh] pr-2">
          {movies.length > 0 ? (
            movies.map((movie, index) => (
              <li
                key={index}
                className="flex items-center gap-4 p-3 bg-blue-500 rounded-lg shadow-md"
              >
                {/* Movie Poster */}
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="object-cover w-16 h-16 rounded-md"
                />

                {/* Movie Info */}
                <div className="flex-1">
                  <h3 className="w-40 text-lg font-semibold truncate">
                    {movie.Title}
                  </h3>
                  <p className="text-sm opacity-80">{movie.Year}</p>
                </div>

                {/* Remove from Favorites Button */}
                <button
                  onClick={() => remove(movie)}
                  className="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))
          ) : (
            <p className="text-gray-300">No favorites added yet.</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
