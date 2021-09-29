
import { useEffect } from "react";
import { useCallback, useState } from "react";
import classes from "./App.module.css";
import Header from './components/Header';
import SearchBar from "./components/SearchBar";
import Section from "./components/Section";

function App() {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchUserHandler = useCallback(async (user= "octocat") => {
    setIsLoading(true);
    setError(null);
   try {
    const response = await fetch(`https://api.github.com/users/${user}`);
    if(!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();
    const loadedUser = [];
    loadedUser.push(data);
    setUser(loadedUser);
    console.log(loadedUser);
   } catch (error) {
    setError(error.message);
   }
   setIsLoading(false);
  }, []);

  useEffect(() => {
    searchUserHandler();
  }, [searchUserHandler]);;

  return (
    <div className={classes.wrapper}>
      <Header />
      <SearchBar onSearchUser={ searchUserHandler}/>
     {!isLoading && user.length > 0 && <Section users={user} />}
     {!isLoading && user.length === 0 && !error && <p>Found no movies.</p>}
     {!isLoading && error && <p>{error}</p>}
    </div>
  );
}

export default App;
