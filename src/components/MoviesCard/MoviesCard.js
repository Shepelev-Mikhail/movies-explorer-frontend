import './MoviesCard.css';
import like from '../../images/like.svg';
import movie from '../../images/movie.svg';

function MoviesCard(props) {
  const { data, canDeleteMovie } = props

  return (
    <li className="movie">
      <div className="movie__info">
        <h2 className="movie__title">{data?.nameRU}</h2>
        <p className="movie__time">{data?.duration}</p>

        <div className="movie__like">
          {
            canDeleteMovie ? (
              <img className="movie__delete" src={like} alt="Удалить" />
              ) : (
              <img className="movie__like" src={data?.owner ? like : 'не крашенная картинка'} alt="лайк" />
            )
          }
        </div>
      </div>
      <img className="movie__img" src={movie} alt="картинка" />
    </li>
  )
}

export default MoviesCard;
