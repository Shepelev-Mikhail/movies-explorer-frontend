import './MoviesCard.css';
import like from '../../images/like.svg';
import like_countur from '../../images/like_countur.svg';
import close from '../../images/close.svg';

export const BASE_URL = 'https://api.nomoreparties.co';

function MoviesCard({ data, showBtnDelete  = false, showBtnLike = false, onDeleteMovie = () => {}, changeLikeMovie = () => {} }) {

  return (
    <li className="movie">
      <img className="movie__img" src={`${BASE_URL}${data?.image?.url}`} alt="картинка" />

      <div className="movie__info">
        <h2 className="movie__title">{data?.nameRU}</h2>
        <p className="movie__time">{data?.duration}</p>

        <div className="movie__btn">
          {
            showBtnDelete && (
              <img
                className="movie__btn-icon"
                src={close} alt="Удалить"
                onClick={() => onDeleteMovie(data?.id)}
              />
            )
          }
          {
            showBtnLike && (
              <img
                className="movie__btn-icon"
                src={data?.owner ? like : like_countur}
                alt="лайк"
                onClick={() => changeLikeMovie(data?.id, !data?.owner)}
              />
            )
          }
        </div>
      </div>
    </li>
  )
}

export default MoviesCard;
