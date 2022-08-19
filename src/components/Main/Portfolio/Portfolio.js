import './Portfolio.css';
import linkIcon from '../../../images/link-icon.svg';

function Portfolio() {

  return (
    <section className="portfolio">
      <div className="portfolio__container container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__links">
          <li className="portfolio__links-item">
            <a className="portfolio__link" href="https://github.com/Shepelev-Mikhail/how-to-learn" target="_blank" rel="noreferrer">
              <p className="portfolio__link-name">Статичный сайт</p>
              <img src={linkIcon} className="portfolio__link-icon" alt="иконка"/>
            </a>
          </li>
          <li className="portfolio__links-item">
            <a className="portfolio__link" href="https://shepelev-mikhail.github.io/russian-travel/index.html" target="_blank" rel="noreferrer">
              <p className="portfolio__link-name">Адаптивный сайт</p>
              <img src={linkIcon} className="portfolio__link-icon" alt="иконка"/>
            </a>
          </li>
          <li className="portfolio__links-item">
            <a className="portfolio__link" href="http://shepelev.front.nomoredomains.xyz" target="_blank" rel="noreferrer">
              <p className="portfolio__link-name">Одностраничное приложение</p>
              <img src={linkIcon} className="portfolio__link-icon" alt="иконка"/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio;
