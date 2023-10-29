import { useState, useEffect } from "react";
import axios from "axios";
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
const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5050";

// The useState is a hook ( built-in function) in React.
// It allows you to add state to a functional component.
// It returns an array with two elements.
// The first is the current state value
// The second is the function to be used to update the state value

const App = () => {
  // setImages and setWord execute asynchronously! So, change isn't done immediately
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  const getSavedImages = async () => {
    try {
      const res = await axios.get(`${API_URL}/images`);
      setImages(res.data || []); // If res.data is not set, it will pass empty arrary '[]'
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect - Function to call is getSavedImages.
  //  Dependency is '[]' means will be called only once
  //     If dependency was '[word]' it would get called whenever word changed
  useEffect(() => getSavedImages(), []);
  // e is an event.
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    //console.log("sending fetch request");

    try {
      const res = await axios.get(`${API_URL}/new-image?query=${word}`);
      // console.log("adding found image to the state");
      setImages([{ ...res.data, title: word }, ...images]); // ... spread operator - get all the individual elements of an array. We add the current search term ('word') as the title
    } catch (error) {
      console.log(error);
    }

    setWord("");
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id)); // this will filter images , so that it does not contain the id we specify
  };

  const handleSaveImage = async (id) => {
    const imageToBeSaved = images.find((image) => image.id === id); // this will find image that has the id we specify
    imageToBeSaved.saved = true;

    try {
      const res = await axios.post(`${API_URL}/images`, imageToBeSaved); //axios will convert the data to json
      // sucessfull post gives response of inserted_id
      // use map to go through each image in images.. if it matches the image to be saved update it to saved:true, otherwise just keep image as is
      // and pass the resulting array to the setImages function.
      if (res.data?.inserted_id) {
        setImages(
          images.map((image) =>
            image.id === id ? { ...image, saved: true } : image
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
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
                <ImageCard
                  image={image}
                  deleteImage={handleDeleteImage}
                  saveImage={handleSaveImage}
                />
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
