import { useState } from "react";

function Sidebar({ movies, remove }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl cursor-pointer object-cover w-10 h-10"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <img
          src="/images/favourite.png"
          onClick={() => setShowSidebar(!showSidebar)}
          className="object-cover w-10 h-10 cursor-pointer p-1"
        />
      )}
      <div
        className={`top-[71px] right-0 w-[35vw] bg-blue-600  p-12 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">Favorite Movies</h2>

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
                  className="w-16 h-16 object-cover rounded-md"
                />

                {/* Movie Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold truncate w-40">
                    {movie.Title}
                  </h3>
                  <p className="text-sm opacity-80">{movie.Year}</p>
                </div>
                {/* Remove Button */}
                <button
                  onClick={() => remove(movie)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
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
