import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ data }) {
  const listMoviesJsx = data?.map(el => (
    <MoviesCard
      key={el?.id}
      data={el}
    />
  ))

  return (
    <section className="movies">
      <ul className="movies__list container">
        { listMoviesJsx }

        {/*<MoviesCard title='Киноальманах «100 лет дизайна»' time='1ч 42м'/>
        <MoviesCard title='В погоне за Бенкси' time='1ч 42м'/>
        <MoviesCard title='Баския: Взрыв реальности' time='1ч 42м'/>
        <MoviesCard title='Бег это свобода' time='1ч 42м'/>
        <MoviesCard title='Книготорговцы' time='1ч 42м'/>
        <MoviesCard title='Когда я думаю о Германии ночью' time='1ч 42м'/>*/}
      </ul>
      <button type="button" className="movies__add-button">Ещё</button>
    </section>
  )
}

export default MoviesCardList;
