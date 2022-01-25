import React from 'react';
import {Card,Button} from 'react-bootstrap'
function MovieCard({title,description,posterUrl,trailer,rate}) {
  return (<div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={posterUrl} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text> {description} </Card.Text>
    <Card.Text> <a href={trailer} target={"_blanck"}> {trailer} </a>  </Card.Text>
    <Card.Text> {rate} </Card.Text>
    <Button variant="primary">Go {title}</Button>
  </Card.Body>
</Card>
  </div>);
}

export default MovieCard;
