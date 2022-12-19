import { useState } from "react";

function Search({ searchMovies }) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    const type = event.target.dataset.type;
    setType(type);
    searchMovies(search, type);
  };

  return (
    <div className="row search">
      <input
        type="search"
        placeholder="Search"
        className="validate"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKey}
      />
      <button
        className="btn search-btn"
        onClick={() => searchMovies(search, type)}
      >
        Search
      </button>
      <div>
        <label>
          <input
            type="radio"
            className="with-gap"
            name="type"
            data-type="all"
            onChange={handleFilter}
            checked={type === "all"}
          />
          <span>All</span>
        </label>
        <label>
          <input
            type="radio"
            className="with-gap"
            name="type"
            data-type="movie"
            onChange={handleFilter}
            checked={type === "movie"}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            type="radio"
            className="with-gap"
            name="type"
            data-type="series"
            onChange={handleFilter}
            checked={type === "series"}
          />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
}

export { Search };
