import './MoviesCard.css';
import like from '../../images/like.svg';
import movie from '../../images/movie.svg';

function MoviesCard(props) {
  const { data, canDeleteMovie } = props

  return (
    <li className="movie">
      <img className="movie__img" src={movie} alt="картинка" />

      <div className="movie__info">
        <h2 className="movie__title">{data?.nameRU}</h2>
        <p className="movie__time">{data?.duration}</p>

        <div className="movie__btn">
          {
            canDeleteMovie ? (
              <img className="movie__btn-icon" src={like} alt="Удалить" />
              ) : (
              <img className="movie__btn-icon" src={data?.owner ? like : like} alt="лайк" />
            )
          }
        </div>
      </div>
    </li>
  )
}

export default MoviesCard;
