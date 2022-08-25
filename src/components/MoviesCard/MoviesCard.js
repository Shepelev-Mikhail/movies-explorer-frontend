import './MoviesCard.css';
import like from '../../images/like.svg';
import like_countur from '../../images/like_countur.svg';
import close from '../../images/close.svg';
import { useState } from 'react';
import * as MainApi from '../../utils/MainApi.js';

const BASE_URL = 'https://api.nomoreparties.co';

function MoviesCard({ data, showBtnDelete  = false, showBtnLike = false, onDeleteMovie = () => {}, changeLikeMovie = () => {} }) {
  const checkDurationMovie = () => {
    const hour = Math.floor(data?.duration / 60);
    const minutes = data?.duration % 60;

    return `${hour > 0 ? hour + 'ч ' : ''}${minutes > 0 ? minutes + 'м' : ''}`
  }

  const handleClickLike = () => {
    if (!data?.owner) {
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
          console.log('savingMovie', data)
        // updateShowPreloader(false)
        //() => changeLikeMovie(data?.id, !data?.owner)
      })
    }
  }

  const handleDeleteMovie = () => {
    MainApi.deleteMovie(data?.id ? data.id : data._id)
    .then((data) => {
      onDeleteMovie(data?.id ? data.id : data._id)
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
                src={data?.owner ? like : like_countur}
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
