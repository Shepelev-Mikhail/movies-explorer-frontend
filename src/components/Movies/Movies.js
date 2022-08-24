import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import movie from "../../images/movie.svg";
import { useEffect, useState } from 'react';
import * as MoviesApi from '../../utils/MoviesApi.js';

// const listMovies = [
//   {
//     id: 1,
//     nameRU: 'Киноальманах «100 лет дизайна»',
//     duration: '1ч 42м',
//     img: movie
//   },
//   {
//     id: 2,
//     nameRU: 'В погоне за Бенкси',
//     duration: '1ч 42м',
//     img: movie
//   },
//   {
//     id: 3,
//     nameRU: 'Баския: Взрыв реальности',
//     duration: '1ч 42м',
//     img: movie
//   },
//   {
//     id: 4,
//     nameRU: 'Бег это свобода',
//     duration: '1ч 42м',
//     img: movie
//   },
//   {
//     id: 5,
//     nameRU: 'Книготорговцы',
//     duration: '1ч 42м',
//     img: movie,
//     owner: true
//   },
//   {
//     id: 6,
//     nameRU: 'Когда я думаю о Германии ночью',
//     duration: '1ч 42м',
//     img: movie
//   }
// ]

function Movies() {
  const [initListMovies, updateInitListMovies] = useState(null);
  const [fullListMovies, updateFullListMovies] = useState(null);


  // useEffect(() => {
  //   MoviesApi.getMovies()
  //     .then((data) => {
  //       updateInitListMovies(data);
  //     })
  // }, []);

  useEffect(() => {
    updateFullListMovies(initListMovies)
    console.log(initListMovies)
  }, [initListMovies]);

  const handlerChangeLikeMovie = (id, owner) => {
    // тут будет обновление лайка для фильма
  }

  const getMovies = () => {
    MoviesApi.getMovies()
      .then((data) => {
        updateInitListMovies(data);
      })
      .catch(console.log);
  }

  return (
    <>
      <SearchForm getMovies={getMovies}/>
      {/* <Preloader /> */}
      <MoviesCardList
        type="movies"
        data={fullListMovies}
        showBtnMore={true}
        showBtnLike={true}
        changeLikeMovie={handlerChangeLikeMovie}
        // getMovies={props.getMovies}
      />
    </>
  )
}

export default Movies;
