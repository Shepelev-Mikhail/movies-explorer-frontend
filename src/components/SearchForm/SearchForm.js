import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import icon from '../../images/icon.svg';
import search from '../../images/search.svg';
import Switch from '../Switch/Switch';
import * as MoviesApi from '../../utils/MoviesApi.js';
import Preloader from '../Preloader/Preloader';
import * as MainApi from '../../utils/MainApi';
import Info from '../Info/Info';

function SearchForm({initList, onUpdateListMovies}) {
  const storageSettingMovies = localStorage.getItem('settingMovies');
  let initDataMovies = null;

  if (storageSettingMovies) {
    initDataMovies = JSON.parse(storageSettingMovies);
  }

  const [listMovies, updateListMovies] = useState(initList ? initList : null);
  const [activeShortFilm, updateActiveShortFilm] = useState(initDataMovies?.shortFilm ? initDataMovies?.shortFilm : false);
  const [searchParam, updateSearchParam] = useState(initDataMovies?.searchParam ? initDataMovies?.searchParam : '');
  const [showPreloader, updateShowPreloader] = useState(false);
  const [showMessage, updateShowMessage] = useState(false);
  const [textMessage, updateTextMessage] = useState('');
  const [showError, updateShowError] = useState(false);

  useEffect(() => {
    if (!initList && initDataMovies?.list?.length) {
      getSaveMovies(initDataMovies?.list, true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSaveMovies = (list, noUpdateList) => {
    MainApi.getSaveMovies()
      .then((data) => {
        const listWithLikes = list.map(el => {
          const isSavedMovie = data.find(movie => movie?.movieId === el?.id);
          return {
            ...el,
            isOwner: isSavedMovie ? isSavedMovie?._id : null
          };
        })

        if (!noUpdateList) {
          updateListMovies(listWithLikes);
        }
        getFilteredList(listWithLikes, activeShortFilm);

        updateShowPreloader(false);
      })
  }

  const getDataList = () => {
    updateShowPreloader(true);
    MoviesApi.getMovies()
      .then((data) => {
        // После получения списка всех фильмов - получаем список сохранённых фильмов
        getSaveMovies(data);
      })
      .catch(() => {
        updateShowPreloader(false);
        updateShowMessage(true)
        updateTextMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
      })
  }

  const saveSettingsPage = (list) => {
    const settingMovies = {
      searchParam: searchParam,
      shortFilm: activeShortFilm,
      list: list
    };
    localStorage.setItem('settingMovies', JSON.stringify(settingMovies));
  }

  const getFilteredList = (list, shortFilm) => {
    const strLower = searchParam?.toLowerCase();

    const newList = list.filter(el =>
      (el?.nameRU?.toLowerCase().indexOf(strLower) > -1
        || el?.nameEN?.toLowerCase().indexOf(strLower) > -1)
      && (!shortFilm || (shortFilm && el?.duration <= 40)));

      if (newList.length === 0) {
        updateShowMessage(true)
        updateTextMessage('Ничего не найдено')
      }

    saveSettingsPage(newList);
    onUpdateListMovies(newList);
  }

  const handleChangeSwitch = (data) => {
    if (!initList && !listMovies && initDataMovies?.searchParam) {
      getDataList(data?.value);
    } else if (listMovies?.length && searchParam) {
      getFilteredList(listMovies, data?.value);
    }

    updateActiveShortFilm(data?.value);
  }

  const handleChangeSearch = (evt) => {
    updateSearchParam(evt?.target?.value);

    if (evt?.target?.value === '') {
      onUpdateListMovies([]);
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateShowError(false)

    if (!searchParam) {
      updateShowError(true)
      return
    }

    if (!listMovies && !initList) {
      getDataList();
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
