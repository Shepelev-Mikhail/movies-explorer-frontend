import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import movie from '../../images/movie.svg';
import Preloader from '../Preloader/Preloader';
import * as MainApi from '../../utils/MainApi.js';


function SavedMovies() {
  const [showPreloader, updateShowPreloader] = useState(false);
  const [listSavedMovies, updateListSavedMovies] = useState([]);  

  useEffect(() => {
    updateShowPreloader(true)
    MainApi.getSaveMovies()
    .then((data) => {
      updateListSavedMovies(data)
      updateShowPreloader(false)
    })
  }, [])

  const handleDeleteMovie = (id) => {
    updateListSavedMovies(listSavedMovies.filter(el => (el?.id !== id && el?._id !== id)))
  }

  const handleUpdateMovies = (data) => {
    updateListSavedMovies(data)
  }

  return (
    <>
      <SearchForm onUpdateListMovies={handleUpdateMovies} />

      <MoviesCardList
        type="saved-movies"
        data={listSavedMovies}
        showBtnDelete={true}
        onDeleteMovie={handleDeleteMovie}
      />

      {showPreloader && <Preloader />}
    </>
  )
}

export default SavedMovies;

