import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import ClipLoader from "react-spinners/ClipLoader";
import { Container } from 'react-bootstrap';

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } = useSelector(state=> state.movie);
  
  //useEffect {},[]는 렌더를 하고 실행이 됨
  // return이 한박자 늦게 렌더가 되어야 함
  // 그렇기 때문에 return 문에서 조건별 렌더링을 해야 한다
  // 하지만 로딩 스피너가 조건부 렌더링을 전체적으로 해줘서 &&을 써서 해줄 필요 없어짐
  useEffect(() => {
    dispatch(movieAction.getMovies());
  },[]);

  // if loading == true, show loading spinners
  // if loading == false, show data
  // true: data 도착 전 false: data 도착 후 || error

  if(loading) {
    return <ClipLoader color="#ffff" loading={loading} size={150} />
  }
  return (
    <div>
      <Banner movie={popularMovies.results[0]}/>
      <Container>
        <h1>Popular Movie</h1>
        <MovieSlide movies={popularMovies} />
        <h1>Top rated Movie</h1>
        <MovieSlide movies={topRatedMovies} />
        <h1>upcoming Movie</h1>
        <MovieSlide movies={upcomingMovies} />
      </Container>
    </div>
  )
}

export default Home