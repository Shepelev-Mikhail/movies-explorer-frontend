import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import icon from '../../images/icon.svg';
import search from '../../images/search.svg';
import Switch from '../Switch/Switch';
import * as MoviesApi from '../../utils/MoviesApi.js';
import Preloader from '../Preloader/Preloader';
import * as MainApi from '../../utils/MainApi';
import Info from '../Info/Info';

function SearchForm({defaultList, onUpdateListMovies}) {
  const storageSettingMovies = localStorage.getItem('settingMovies');
  let initDataMovies = null;

  if (storageSettingMovies) {
    initDataMovies = JSON.parse(storageSettingMovies);
  }

  const [isLoadListMovies, setIsLoadListMovies] = useState(false);
  const [listMovies, updateListMovies] = useState(defaultList ? defaultList : null);

  const [activeShortFilm, updateActiveShortFilm] = useState(initDataMovies?.shortFilm && !defaultList ? initDataMovies?.shortFilm : false);
  const [searchParam, updateSearchParam] = useState(initDataMovies?.searchParam && !defaultList ? initDataMovies?.searchParam : '');
  const [showPreloader, updateShowPreloader] = useState(false);

  const [showMessage, updateShowMessage] = useState(false);
  const [textMessage, updateTextMessage] = useState('');
  const [showError, updateShowError] = useState(false);

  useEffect(() => {
    if (!defaultList && initDataMovies?.list?.length) {
      getFilteredList(initDataMovies?.list, activeShortFilm);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMoviesWithLike = (listMovies, savedMovies) => {
    return listMovies.map(el => {
      const isSavedMovie = savedMovies.find(movie => movie?.movieId === el?.id);
      return {
        ...el,
        isOwner: isSavedMovie ? isSavedMovie?._id : null
      };
    })
  }

  const getDataList = (shortFilm) => {
    updateShowPreloader(true);
    MoviesApi.getMovies()
      .then((data) => {
        updateListMovies(data);
        setIsLoadListMovies(true);

        // После получения списка всех фильмов - получаем список сохранённых фильмов
        getFilteredList(data, shortFilm);

        updateShowPreloader(false);

      })
      .catch(() => {
        updateShowPreloader(false);
        updateShowMessage(true)
        updateTextMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
      })
  }

  const saveSettingsPage = (list, shortFilm) => {
    const settingMovies = {
      searchParam: searchParam,
      shortFilm: shortFilm,
      list: list
    };
    localStorage.setItem('settingMovies', JSON.stringify(settingMovies));
  }

  const getFilteredList = (list, shortFilm) => {
    const strLower = searchParam?.toLowerCase();

    if (defaultList) {
      // Дальше фильтруем его
      const newList = list.filter(el =>
        (el?.nameRU?.toLowerCase().indexOf(strLower) > -1
          || el?.nameEN?.toLowerCase().indexOf(strLower) > -1)
        && (!shortFilm || (shortFilm && el?.duration <= 40)));

      if (newList.length === 0) {
        updateShowMessage(true)
        updateTextMessage('Ничего не найдено')
      }

      onUpdateListMovies(newList);
    } else {
      updateShowPreloader(true);
      // Получаем список сохранённых фильмов
      MainApi.getSaveMovies()
        .then((data) => {
          // Получаем список фильмов с учётом лайков
          const listWithLikes = getMoviesWithLike(list, data);

          // Дальше фильтруем его
          const newList = listWithLikes.filter(el =>
            (el?.nameRU?.toLowerCase().indexOf(strLower) > -1
              || el?.nameEN?.toLowerCase().indexOf(strLower) > -1)
            && (!shortFilm || (shortFilm && el?.duration <= 40)));

          if (newList.length === 0) {
            updateShowMessage(true)
            updateTextMessage('Ничего не найдено')
          }

          saveSettingsPage(newList, shortFilm);
          onUpdateListMovies(newList);

          updateShowPreloader(false);
        })
        .catch(() => {
          updateShowPreloader(false);
          updateShowMessage(true)
          updateTextMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        })
    }
  }

  const handleChangeSwitch = (data) => {
    if (!defaultList && !isLoadListMovies && !!initDataMovies?.searchParam) {
      getDataList(data?.value);
    } else if (listMovies?.length && (searchParam || defaultList)) {
      getFilteredList(listMovies, data?.value);
    }

    updateActiveShortFilm(data?.value);
  }

  const handleChangeSearch = (evt) => {
    updateSearchParam(evt?.target?.value);

    if (!defaultList && evt?.target?.value === '') {
      onUpdateListMovies([]);
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateShowError(false)

    if (!defaultList && !searchParam) {
      updateShowError(true)
      return
    }

    // При отправке формы поиска мы получаем список фильмов
    // или если список есть, фильтруем текущий
    if (!defaultList && !isLoadListMovies) {
      getDataList(activeShortFilm);
    } else {
      getFilteredList(listMovies, activeShortFilm);
    }
  }

  return (
    <section className="search-form">
      <div className="search-form__container">
        <div className="search-form__content">
          <form className="search-form__field">
            <img className="search-form__icon" src={icon} alt="поиск" />
            <input
              className="search-form__input"
              placeholder="Фильм"
              value={searchParam}
              required
              onChange={handleChangeSearch}
            />
            <button type="submit" className="search-form__button" onClick={handleSubmit}>
              <img className="search-form__button-image" src={search} alt="поиск" />
            </button>

          </form>
          <Switch isActive={activeShortFilm} onChange={handleChangeSwitch} />
          {showError && <span className="search-form__error">Нужно ввести ключевое слово</span>}
        </div>
      </div>

      {showPreloader && <Preloader />}
      {showMessage &&
      <Info
        text={textMessage}
        updateShowMessage={updateShowMessage}
      />}
    </section>
  )
}

export default SearchForm;
