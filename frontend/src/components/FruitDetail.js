import React from 'react';
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// <Card.Img variant="top" src={image.urls.small} />

// image.title?.toUpperCase() - this checks that image.title exists before setting it to upper case
const FruitDetail = ({ fruit }) => {
  //const authorName = image.user?.name || 'No author name';
  //const authorPortfolioURL = image.user?.portfolio_url;

  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={image.urls.small} /> */}
      <Card.Body>
        <Card.Title>{fruit.name?.toUpperCase()}</Card.Title>
        {/* <Card.Text>{image.description || image.alt_description}</Card.Text> */}
        {/* <Button variant="primary" onClick={() => deleteImage(image.id)}>
          Delete
        </Button>{' '} */}
        {/* Show 'Save' button if image has not already been saved  */}
        {/* {!image.saved && (
          <Button variant="secondary" onClick={() => saveImage(image.id)}>
            Save
          </Button>
        )} */}
      </Card.Body>
      {/* <Card.Footer className="text-centred" className="text-muted">
        {authorPortfolioURL && (
          <Nav.Link href={authorPortfolioURL} target="_blank">
            {authorName}
          </Nav.Link>
        )}
        {!authorPortfolioURL && authorName}
      </Card.Footer> */}
    </Card>
  );
};

export default FruitDetail;
