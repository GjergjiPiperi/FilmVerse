import { useEffect } from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import MovieCard from "./MovieCard";
import Sidebar from "./Sidebar";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);

  function handleFavorites(movie) {
    if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  }

  function removeFromFavorites(movie) {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.imdbID !== movie.imdbID)
    );
  }

  useEffect(() => {
    async function fetchMovies(searchValue) {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${searchValue}&apikey=8f9def89`
      );
      const result = await response.json();
      console.log(result);
      if (result.Search) {
        const shuffledMovies = result.Search.sort(() => 0.5 - Math.random());
        setMovies(shuffledMovies);
      }
    }

    fetchMovies(searchValue || "movie");
  }, [searchValue]);
  return (
    <main
      style={{
        backgroundColor: "#2c3e7e", // Dark background color
        minHeight: "100vh", // Full viewport height
        position: "relative",
      }}
    >
      <header>
        <Navbar searchValue={searchValue} setSearchValue={setSearchValue}>
          <Sidebar movies={favorites} remove={removeFromFavorites} />
        </Navbar>

        <MovieCard movies={movies} handleFavorites={handleFavorites} />
      </header>
    </main>
  );
}

export default App;
