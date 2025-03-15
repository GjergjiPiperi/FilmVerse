function Navbar({ searchValue, setSearchValue, children }) {
  return (
    <nav className="sticky flex flex-col top-0 bg-gradient-to-r from-blue-400 to-blue-900 p-2">
      <div className="flex w-full items-center">
        <div className="flex items-center p-2 gap-2">
          <img
            src="/images/clapperboard.png"
            alt=""
            className="object-cover w-10 h-10"
          />
          <p className="text-2xl pl-2">FilmVerse</p>
        </div>
        <div className="flex relative items-center justify-center ml-auto pr-2">
          <input
            className="border rounded-sm placeholder-zinc-400 focus:outline outline-gray-400"
            type="search"
            placeholder="Search movie..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="ml-4">{children}</div>
      </div>
    </nav>
  );
}

export default Navbar;
