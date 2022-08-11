import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import movie from '../../images/movie.svg';

const listSavedMovies = [
  {
    id: 1,
    nameRU: '33 слова о дизайне',
    duration: '1ч 42м',
    img: movie
  },
  {
    id: 2,
    nameRU: 'Киноальманах «100 лет дизайна»',
    duration: '1ч 42м',
    img: movie
  },
  {
    id: 3,
    nameRU: 'В погоне за Бенкси',
    duration: '1ч 42м',
    img: movie
  }
]

function SavedMovies() {
  const handleDeleteMovie = (id) => {
    // тут будет удаление фильма из сохранённых
  }
  return (
    <>
      <SearchForm />
      <MoviesCardList
        type="saved-movies"
        data={listSavedMovies}
        showBtnDelete={true}
        onDeleteMovie={handleDeleteMovie}
      />
    </>
  )
}

export default SavedMovies;

