import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Movie from './pages/Movie';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Navigation from './components/Navigation';

// 1. 메인 페이지 영화 페이지 디테일 페이지
// 2. 메인 페이지
    // 배너를 볼 수 있다
    // 3가지 섹션 영화 ( popular, top rated, upcoming )
    // 각 영화에 마우스를 올려두면, 제목, 장르, 점수, 인기도, 청불여부
    // 영화 슬라이드로 넘김
// 3. 영화 디테일 페이지
    // 영화에 대한 정보 ( 포스터, 제목, 줄거리, 점수, 인기도, 러닝타임 등등)
    // trailer를 누르면 볼 수 있다.
    // 영화 리뷰
    // 관련된 영화
// 4. 영화 검색 가능하게
// 5. 영화 정렬 가능 / 필터링 가능

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/movies' element= {<Movie />}/>
        <Route path='/movies/:id' element= {<MovieDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
