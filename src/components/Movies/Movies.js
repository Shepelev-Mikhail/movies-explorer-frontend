import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { useEffect, useState } from 'react';
import * as MainApi from '../../utils/MainApi.js';

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
  const pagination = 7;
  const startPage = 1;

  const storageSettingMovies = localStorage.getItem('settingMovies');
  let initDataMovies = null;

  if (storageSettingMovies) {
    initDataMovies = JSON.parse(storageSettingMovies)
  }

  const initList = initDataMovies?.list?.length ? initDataMovies.list.slice(0, pagination) : null;
 
  const [listMovies, updateListMovies] = useState(initDataMovies?.list);
  const [listMoviesPagination, updateListMoviesPagination] = useState(initList);
  const [currPage, updateCurrPage] = useState(startPage);
  const [countPage, updateCountPage] = useState(null);
  const [showBtnMore, updateShowBtnMore] = useState(false);
  const [showPreloader, updateShowPreloader] = useState(false);

  useEffect(() => {
    updateShowPreloader(true)
    MainApi.getSaveMovies()
    .then((data) => {
      console.log('data', data)

      updateShowPreloader(false)
    })
  }, [])

  useEffect(() => {
    if (listMovies?.length) {
      updateCurrPage(startPage);
      updateListMoviesPagination(listMovies.slice(0, pagination));

      const count = Math.ceil(listMovies?.length / pagination);
      updateCountPage(count);
      updateShowBtnMore(currPage !== count);
    } else {
      updateListMoviesPagination([]);
      updateShowBtnMore(false);
    }
  }, [listMovies]);

  const onShowMore = () => {
    updateListMoviesPagination(listMovies.slice(0, pagination * (currPage + 1)));
    updateCurrPage(currPage + 1);
    updateShowBtnMore(currPage + 1 !== countPage);
  }

  const handlerChangeLikeMovie = (id, owner) => {
    // тут будет обновление лайка для фильма
  }

  const handleUpdateMovies = (data) => {
    updateListMovies(data)
  }

  return (
    <>
      <SearchForm 
        initSearchParam={initDataMovies?.searchParam}
        initActiveShortFilm={initDataMovies?.shortFilm}
        onUpdateListMovies={handleUpdateMovies}
      />
      {listMoviesPagination && 
        <MoviesCardList
          type="movies"
          data={listMoviesPagination}
          showBtnMore={showBtnMore}
          showBtnLike={true}
          changeLikeMovie={handlerChangeLikeMovie}
          onShowMore={onShowMore}
          // getMovies={props.getMovies}
        />
      }

      {showPreloader && <Preloader />}
    </>
  )
}

export default Movies;
