import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import Sidebar from "./components/Sidebar";

function App() {
  // State to store the list of movies fetched from the API
  const [movies, setMovies] = useState([]);

  // State to store the search input value
  const [searchValue, setSearchValue] = useState("");

  // State to store the user's favorite movies
  const [favorites, setFavorites] = useState([]);

  // Function to add a movie to the favorites list
  function handleFavorites(movie) {
    if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  }

  // Function to remove a movie from the favorites list
  function removeFromFavorites(movie) {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.imdbID !== movie.imdbID)
    );
  }

  // useEffect hook to fetch movies based on the search value
  useEffect(() => {
    async function fetchMovies(searchValue) {
      const apiKey = import.meta.env.VITE_OMDB_API_KEY;
      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`
      );
      const result = await response.json();
      console.log(result);

      // If movies are found, shuffle the results and update the state
      if (result.Search) {
        const shuffledMovies = result.Search.sort(() => 0.5 - Math.random());
        setMovies(shuffledMovies);
      }
    }

    // Fetch movies with the search value or a default query ('movie')
    fetchMovies(searchValue || "movie");
  }, [searchValue]); // Runs when searchValue changes

  return (
    <main
      style={{
        backgroundColor: "#2c3e7e", // Dark blue background color
        minHeight: "100vh", // Ensures full screen height
        position: "relative",
      }}
    >
      <header>
        {/* Navbar component with search functionality and Sidebar (favorites list) */}
        <Navbar searchValue={searchValue} setSearchValue={setSearchValue}>
          <Sidebar movies={favorites} remove={removeFromFavorites} />
        </Navbar>

        {/* MovieCard component displays the list of movies */}
        <MovieCard movies={movies} handleFavorites={handleFavorites} />
      </header>
    </main>
  );
}

export default App;
