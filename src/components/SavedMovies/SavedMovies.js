import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import * as MainApi from '../../utils/MainApi.js';


function SavedMovies() {
  const [showPreloader, updateShowPreloader] = useState(false);
  const [listSavedMovies, updateListSavedMovies] = useState([]);
  const [filteredListSavedMovies, updateFilteredListSavedMovies] = useState([]);

  useEffect(() => {
    updateShowPreloader(true)
    MainApi.getSaveMovies()
    .then((data) => {
      updateListSavedMovies(data);
      updateFilteredListSavedMovies(data);
      updateShowPreloader(false)
    })
  }, [])

  const handleDeleteMovie = (_id) => {
    updateFilteredListSavedMovies(listSavedMovies.filter(el => (el?._id !== _id)))
  }

  const handleUpdateMovies = (data) => {
    updateFilteredListSavedMovies(data)
  }

  return (
    <>
      {!!listSavedMovies?.length && <SearchForm
        defaultList={listSavedMovies}
        onUpdateListMovies={handleUpdateMovies}
      />}

      <MoviesCardList
        type="saved-movies"
        data={filteredListSavedMovies}
        showBtnDelete={true}
        onDeleteMovie={handleDeleteMovie}
      />

      {showPreloader && <Preloader />}
    </>
  )
}

export default SavedMovies;

