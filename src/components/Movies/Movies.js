import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  const pagination = 7;
  const startPage = 1;

  const [listMovies, updateListMovies] = useState(null);
  const [listMoviesPagination, updateListMoviesPagination] = useState(null);

  const [currPage, updateCurrPage] = useState(startPage);
  const [countPage, updateCountPage] = useState(null);
  const [showBtnMore, updateShowBtnMore] = useState(false);


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
