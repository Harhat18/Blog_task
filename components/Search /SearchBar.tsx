import React, { useState } from "react";
import styles from "./styles.module.css";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (searchQuery: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        <Search size={12} />
      </button>
    </div>
  );
};

export default SearchBar;
