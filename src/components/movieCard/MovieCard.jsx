import React from 'react'
import { Card } from 'react-bootstrap'
import './movieCard.css'
 import MovieRate from "../filterByRating/Rating"

function MovieCard({movie}) {
  return (
    <div className='moviecard'>
        <Card style={{ width: '18rem' ,height:'45rem' }}>
  <Card.Img variant="top" src={movie.posterUrl} className='imgcard'/>
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text className='cardtext'>{movie.description}</Card.Text><hr/>
    <MovieRate rateInput={movie.rate} isRating={true}/>
    
    
  </Card.Body>
</Card>
    </div>
  )
}

export default MovieCard