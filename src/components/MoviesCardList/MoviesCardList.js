import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useEffect, useState } from 'react';

function MoviesCardList({ 
  data, 
  showBtnMore = false, 
  showBtnDelete  = false, 
  showBtnLike = false, 
  onDeleteMovie, 
  changeLikeMovie,
  onShowMore
 }) {
 
  const listMoviesJsx = data?.map(el => (
    <MoviesCard
      key={el?.id}
      data={el}
      showBtnDelete={showBtnDelete}
      showBtnLike={showBtnLike}
      onDeleteMovie={onDeleteMovie}
      changeLikeMovie={changeLikeMovie}
    />
  ))

  return (
    <section className="movies">
      <div className="container movies__container">
        <ul className="movies__list">
          { listMoviesJsx }
        </ul>

        <div className="movies__buttons">
          {
            showBtnMore && (
              <button type="button" className="movies__add-button" onClick={onShowMore}>Ещё</button>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default MoviesCardList;
