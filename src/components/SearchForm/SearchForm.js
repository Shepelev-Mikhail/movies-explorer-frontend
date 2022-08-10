import './SearchForm.css';
import icon from '../../images/icon.svg';
import search from '../../images/search.svg';
import Switch from '../Switch/Switch';

function SearchForm() {
  return (
    <section className="search-form">
      <div className="container">
        <div className="search-form__container">
          <div className="search-form__field">
            <img className="search-form__icon" src={icon} alt="поиск"></img>
            <input className="search-form__input" placeholder="Фильм"></input>
            <button type="submit" className="search-form__button">
              <img className="search-form__button-image" src={search} alt="поиск" />
            </button>
          </div>
          <Switch onChange={(data) => { console.log('111', data?.value)}} />
        </div>
      </div>

    </section>
  )
}

export default SearchForm;
