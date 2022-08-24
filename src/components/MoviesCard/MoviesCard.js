import './MoviesCard.css';
import like from '../../images/like.svg';
import like_countur from '../../images/like_countur.svg';
import close from '../../images/close.svg';
import { useState } from 'react';

const BASE_URL = 'https://api.nomoreparties.co';

function MoviesCard({ data, showBtnDelete  = false, showBtnLike = false, onDeleteMovie = () => {}, changeLikeMovie = () => {} }) {
  const checkDurationMovie = () => {
    const hour = Math.floor(data?.duration / 60);
    const minutes = data?.duration % 60;

    return `${hour > 0 ? hour + 'ч ' : ''}${minutes > 0 ? minutes + 'м' : ''}`
  }

  return (
    <li className="movie">
      <img className="movie__img" src={`${BASE_URL}${data?.image?.url}`} alt="картинка" />

      <div className="movie__info">
        <a href={data?.trailerLink} className="movie__link" target="_blank" rel="noreferrer">
          <h2 className="movie__title">{data?.nameRU}</h2>
        </a>
        <p className="movie__time">{ checkDurationMovie() }</p>

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
