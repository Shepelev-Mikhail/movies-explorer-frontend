import './MoviesCard.css';
import like from '../../../images/like.svg';
import movie from '../../../images/movie.svg';

function MoviesCard() {
  return (
    <li className="movie">
      <div className="movie__info">
        <h2 className="movie__title">33 слова о дизайне</h2>
        <p className="movie__time">1ч 42м</p>
        <img className="movie__like" src={like} alt="лайк" />
      </div>
      <img className="movie__img" src={movie} alt="картинка" />
    </li>
  )
}

export default MoviesCard;