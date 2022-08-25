import './MoviesCard.css';
import like from '../../images/like.svg';
import like_countur from '../../images/like_countur.svg';
import close from '../../images/close.svg';
import * as MainApi from '../../utils/MainApi.js';
import {useState} from "react";

const BASE_URL = 'https://api.nomoreparties.co';

function MoviesCard({ data, showBtnDelete  = false, showBtnLike = false, onDeleteMovie = () => {} }) {
  const [isOwner, updateIsOwner] = useState(data?.isOwner);

  const checkDurationMovie = () => {
    const hour = Math.floor(data?.duration / 60);
    const minutes = data?.duration % 60;

    return `${hour > 0 ? hour + 'ч ' : ''}${minutes > 0 ? minutes + 'м' : ''}`
  }

  const handleClickLike = () => {
    if (!isOwner) {
      MainApi.savingMovie({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `${BASE_URL}${data?.image?.url}`,
        trailerLink: data.trailerLink ? data.trailerLink : '',
        thumbnail: `${BASE_URL}${data.image?.formats?.thumbnail?.url}`,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        movieId: data?.id,
      })
      .then((data) => {
        updateIsOwner(data?._id);
      })
    } else {
      MainApi.deleteMovie(isOwner)
        .then(() => {
          updateIsOwner(null);
        })
    }
  }

  const handleDeleteMovie = () => {
    MainApi.deleteMovie(data._id)
    .then((data) => {
      onDeleteMovie(data._id)
    })
  }

  return (
    <li className="movie">
      <img className="movie__img" src={data?.image?.url ? `${BASE_URL}${data?.image?.url}` : data?.image} alt="картинка" />

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
                onClick={handleDeleteMovie}
              />
            )
          }
          {
            showBtnLike && (
              <img
                className="movie__btn-icon"
                src={isOwner ? like : like_countur}
                alt="лайк"
                onClick={handleClickLike}
              />
            )
          }
        </div>
      </div>
    </li>
  )
}

export default MoviesCard;
