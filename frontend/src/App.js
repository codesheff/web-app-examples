import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// no longer needed const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

// if API_URL env var exists, use it. Otherwise use hardcoded value
const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5050'

// The useState is a hook ( built-in function) in React.
// It allows you to add state to a functional component.
// It returns an array with two elements.
// The first is the current state value
// The second is the function to be used to update the state value

const App = () => {
  // setImages and setWord execute asynchronously! So, change isn't done immediately
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  // e is an event.
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    fetch(
      `${API_URL}/new-image?query=${word}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]); // ... spread operator - get all the individual elements of an array. We add the current search term ('word') as the title
        // console.log(images); // because setImages is asynchronout, images probably won't contain your updates at this point.
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id)); // this will filter images , so that it does not contain the id we specify
  };

  // When running in development mode, we can access process.env
  //console.log(process.env.REACT_APP_UNSPLASH_KEY);
  // When optimised build for prd, the variables are included directly in your application

  // User map helper method to loop through all images in array , and returns a new array ( an array of image cards)
  // image past as prop to ImageCard is images[i]

  return (
    <div>
      
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />

      <Container className="mt-4">
        {images.length > 0 ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i} className="pb-3">
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
};

export default App;
