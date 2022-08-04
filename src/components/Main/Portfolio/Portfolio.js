import './Portfolio.css';
import linkIcon from '../../../images/link-icon.svg';

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__container container">
        <h2 className="portfolio__title">Портфолио</h2>
        <div className="portfolio__link">
          <h3 className="portfolio__link-name">Статичный сайт</h3>
          <a href="https://github.com/Shepelev-Mikhail">
            <img src={linkIcon} className="portfolio__link-icon" alt="иконка"/>
          </a>
        </div>
        <div className="portfolio__link">
          <h3 className="portfolio__link-name">Адаптивный сайт</h3>
          <a href="https://github.com/Shepelev-Mikhail">
            <img src={linkIcon} className="portfolio__link-icon" alt="иконка"/>
          </a>
        </div>
        <div className="portfolio__link">
          <h3 className="portfolio__link-name">Одностраничное приложение</h3>
          <a href="https://github.com/Shepelev-Mikhail">
            <img src={linkIcon} className="portfolio__link-icon" alt="иконка"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;