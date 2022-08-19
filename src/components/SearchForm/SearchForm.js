import React from "react";
import './SearchForm.css';
import icon from '../../images/icon.svg';
import search from '../../images/search.svg';
import Switch from '../Switch/Switch';

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <div className="search-form__content">
          <form className="search-form__field">
            <img className="search-form__icon" src={icon} alt="поиск" />
            <input className="search-form__input" placeholder="Фильм" required/>
            <button type="submit" className="search-form__button">
              <img className="search-form__button-image" src={search} alt="поиск" />
            </button>
          </form>
          <Switch onChange={(data) => { console.log('111', data?.value)}} />
        </div>
      </div>
    </section>
  )
}

export default SearchForm;
