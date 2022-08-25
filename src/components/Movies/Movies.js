import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  let pagination = window.innerWidth >= 768 ? 7 : 5;
  const startPage = 1;

  const [isDesktop, updateIsDesktop] = useState(window.innerWidth >= 768);
  const [listMovies, updateListMovies] = useState(null);
  const [listMoviesPagination, updateListMoviesPagination] = useState(null);

  const [currPage, updateCurrPage] = useState(startPage);
  const [countPage, updateCountPage] = useState(null);
  const [showBtnMore, updateShowBtnMore] = useState(false);

  useEffect(() => {
    pagination = isDesktop ? 7 : 5;

    if (listMovies?.length) {
      updateCurrPage(startPage);
      updateListMoviesPagination(listMovies.slice(0, pagination));
    }
  }, [isDesktop])

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

  const handleUpdateMovies = (data) => {
    updateListMovies(data)
  }

  window.addEventListener('resize',  () => {
    updateIsDesktop( window.innerWidth >= 768);
  });

  return (
    <>
      <SearchForm onUpdateListMovies={handleUpdateMovies} />

      {listMoviesPagination &&
        <MoviesCardList
          type="movies"
          data={listMoviesPagination}
          showBtnMore={showBtnMore}
          showBtnLike={true}
          onShowMore={onShowMore}
        />
      }
    </>
  )
}

export default Movies;
