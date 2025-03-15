function Navbar({ searchValue, setSearchValue, children }) {
  return (
    <nav className="sticky top-0 flex flex-col p-2 bg-gradient-to-r from-blue-400 to-blue-900">
      <div className="flex items-center w-full">
        {/* Logo and App Name */}
        <div className="flex items-center gap-2 p-2">
          <img
            src="/images/clapperboard.png"
            alt=""
            className="object-cover w-10 h-10"
          />
          <p className="pl-2 text-2xl">FilmVerse</p>
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center justify-center pr-2 ml-auto">
          <input
            className="border rounded-sm placeholder-zinc-400 focus:outline outline-gray-400"
            type="search"
            placeholder="Search movie..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        {/* Sidebar (Favorites List) */}
        <div className="ml-4">{children}</div>
      </div>
    </nav>
  );
}

export default Navbar;
