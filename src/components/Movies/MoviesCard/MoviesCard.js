import './MoviesCard.css';
import like from '../../../images/like.svg';
import movie from '../../../images/movie.svg';

function MoviesCard(props) {
  const { title, time } = props

  return (
    <li className="movie">
      <div className="movie__info">
        <h2 className="movie__title">{title}</h2>
        <p className="movie__time">{time}</p>
        <img className="movie__like" src={like} alt="лайк" />
      </div>
      <img className="movie__img" src={movie} alt="картинка" />
    </li>
  )
}

export default MoviesCard;