import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1400 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1400, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 770 },
    items: 3
  },
  miniTablet: {
    breakpoint: { max: 770, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const MovieSlide = ({ movies }) => {
  console.log("movies", movies);
  return (
    <div>
      <Carousel className='slide' responsive={responsive}>
        {movies.results.map(item=><MovieCard item={item} />)}
      </Carousel>
    </div>
  )
}

export default MovieSlide