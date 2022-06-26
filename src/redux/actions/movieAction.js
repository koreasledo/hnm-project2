import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
  return async (dispatch) => {
    // data 도착 전
    try{
      dispatch({ type:"GET_MOVIES_REQUEST" })

      const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
      const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
      const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
      const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`);

      // 위에 await을 하나하나 써주면 하나 불러오고 하나 불러올 거기 때문에
      // Promise.all을 이용해서 한번에 데이터를 기다렸다가 가져올 수 있게 한다.
      // api 하나 호출할 때는 필요 없지만 한번에 불러오고 싶을 때는 이렇게 사용하기
      // 데이터들끼리 연결되어 있을 때는 어쩔 수 없이 각각의 await을 써야할 경우도 있다.
      let [popularMovies, topRatedMovies, upcomingMovies, genreList] = await Promise.all([
        popularMovieApi, 
        topRatedApi, 
        upComingApi,
        genreApi,
      ]);
      
      console.log("genreList", genreList);

      // data 도착 후
      
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: { 
          popularMovies: popularMovies.data, 
          topRatedMovies: topRatedMovies.data, 
          upcomingMovies: upcomingMovies.data,
          genreList: genreList.data.genres,
        },
      });
    } catch(error) {
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  }
}

export const movieAction = {
  getMovies
}