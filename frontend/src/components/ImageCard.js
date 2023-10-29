import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// <Card.Img variant="top" src={image.urls.small} />

// image.title?.toUpperCase() - this checks that image.title exists before setting it to upper case
const ImageCard = ({ image, deleteImage, saveImage }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.title?.toUpperCase()}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button variant="primary" onClick={() => deleteImage(image.id)}>
          Delete
        </Button>{" "}
        {/* Show 'Save' button if image has not already been saved  */}
        {!image.saved && (
          <Button variant="secondary" onClick={() => saveImage(image.id)}>
            Save
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
