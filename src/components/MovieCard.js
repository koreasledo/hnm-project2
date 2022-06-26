import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const MovieCard = ({item}) => {
  const { genreList } = useSelector(state=>state.movie);
  const navigate = useNavigate();
  const clickMovieCard = () => {
    navigate(`/movies/:id`);
    console.log("클릭됨?");
  };
  return (
    <div onClick={clickMovieCard} className="card" style={{backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${item.poster_path}` + ")"}}>
      <div className='overlay'>
        <div>
          <h1 className='card-title'>{item.title}</h1>
          <div className='card-genre'>{item.genre_ids.map((id)=> (<Badge className='card-badge' bg="danger">{genreList.find(item => item.id == id).name}</Badge>))}</div>
        </div>
        <div>
          <span>{item.vote_average}</span>
          <span> / {item.adult? "Adult": "All"}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard