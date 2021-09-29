import React, {useRef} from "react";
import classes from "./SearchBar.module.css";
import iconSearch from "../assets/icon-search.svg"

const SearchBar = (props) => {
  const userRef = useRef("");

 function userSearch(event) {
    event.preventDefault();
    const user = userRef.current.value;
    props.onSearchUser(user)
  };

  return (
    <form onSubmit={userSearch} className={classes["search-bar"]}>
      <img src={iconSearch} alt="" />
      <input
        ref={userRef}
        type="search"
        name="search"
        id="search"
        placeholder="Search GitHub username..."
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
