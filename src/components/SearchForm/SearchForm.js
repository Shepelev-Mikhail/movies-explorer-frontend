import React, { useEffect, useState } from "react";
import './SearchForm.css';
import icon from '../../images/icon.svg';
import search from '../../images/search.svg';
import Switch from '../Switch/Switch';
import * as MoviesApi from '../../utils/MoviesApi.js';

function SearchForm({initSearchParam, initActiveShortFilm, onUpdateListMovies}) {
  const [listMovies, updateListMovies] = useState(null);

  const [activeShortFilm, updateActiveShortFilm] = useState(initActiveShortFilm ? initActiveShortFilm : false);
  const [searchParam, updateSearchParam] = useState(initSearchParam ? initSearchParam : '');
  
  const getDataList = () => {
    MoviesApi.getMovies()
      .then((data) => {
        updateListMovies(data);
        getFilteredList(data);
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

  const getFilteredList = (list) => {
    const strLower = searchParam?.toLowerCase();

    const newList = list.filter(el => 
      (el?.nameRU?.toLowerCase().indexOf(strLower) > -1 
        || el?.nameEN?.toLowerCase().indexOf(strLower) > -1) 
      && (!activeShortFilm || (activeShortFilm && el?.duration <= 40)));

    saveSettingsPage(newList);
    onUpdateListMovies(newList);
  }

  const handleChangeSwitch = (data) => {
    updateActiveShortFilm(data?.value);
  }

  const handleChangeSearch = (evt) => {
    updateSearchParam(evt?.target?.value);

    if (evt?.target?.value === '') {
      onUpdateListMovies([]);
    }
  }

  useEffect(() => {
    if (initSearchParam && !listMovies) {
      getDataList();
    } else if (listMovies?.length && searchParam) {
      getFilteredList(listMovies);
    }
  }, [activeShortFilm])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    if (!searchParam) {
      console.log('Нужно ввести ключевое слово')
      return
    }

    if (!listMovies) {
      getDataList();
    } else {
      getFilteredList(listMovies, searchParam, activeShortFilm);
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
        </div>
      </div>
    </section>
  )
}

export default SearchForm;
