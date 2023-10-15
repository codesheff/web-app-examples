import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

// The useState is a hook ( built-in function) in React.
// It allows you to add state to a functional component.
// It returns an array with two elements.
// The first is the current state value
// The second is the function to be used to update the state value

const App = () => {
  const [word, setWord] = useState("");

  // e is an event.
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };

  // When running in development mode, we can access process.env
  //console.log(process.env.REACT_APP_UNSPLASH_KEY);
  // When optimised build for prd, the variables are included directly in your application

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
};

export default App;
