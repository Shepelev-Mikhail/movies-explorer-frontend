import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import movie from "../../images/movie.svg";

const listMovies = [
  {
    id: 1,
    nameRU: 'Киноальманах «100 лет дизайна»',
    duration: '1ч 42м',
    img: movie
  },
  {
    id: 2,
    nameRU: 'В погоне за Бенкси',
    duration: '1ч 42м',
    img: movie
  },
  {
    id: 3,
    nameRU: 'Баския: Взрыв реальности',
    duration: '1ч 42м',
    img: movie
  },
  {
    id: 4,
    nameRU: 'Бег это свобода',
    duration: '1ч 42м',
    img: movie
  },
  {
    id: 5,
    nameRU: 'Книготорговцы',
    duration: '1ч 42м',
    img: movie,
    owner: true
  },
  {
    id: 6,
    nameRU: 'Когда я думаю о Германии ночью',
    duration: '1ч 42м',
    img: movie
  }
]

function Movies(props) {
  const handlerChangeLikeMovie = (id, owner) => {
    // тут будет обновление лайка для фильма
  }

  return (
    <>
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList
        type="movies"
        data={listMovies}
        showBtnMore={true}
        showBtnLike={true}
        changeLikeMovie={handlerChangeLikeMovie}
        getMovies={props.getMovies}
      />
    </>
  )
}

export default Movies;
