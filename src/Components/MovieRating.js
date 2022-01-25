import React from 'react';
import ReactStars from 'react-stars'

function MovieRating({rating,setRating}) {
const ratingChanged = (newRating) => {
   return setRating(newRating)
}
  return (
  <div>
<ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  activeColor={'#ffd700'} 
  isHalf={true}
  />
  </div>);
}

export default MovieRating;
