import './Portfolio.css';
import linkIcon from '../../../images/link-icon.svg';

const links = [
  {
    title: 'Статичный сайт',
    link: 'https://github.com/Shepelev-Mikhail'
  },
  {
    title: 'Адаптивный сайт',
    link: 'https://github.com/Shepelev-Mikhail'
  },
  {
    title: 'Одностраничное приложение',
    link: 'https://github.com/Shepelev-Mikhail'
  }
]

function Portfolio() {
  const linksJsx = links?.map((el, index) => (
    <div key={`portfolio-link-${index}`} className="portfolio__link">
      <a className="portfolio__link-name">{el.title}</a>
      <a href={el.link} target="_blank">
        <img src={linkIcon} className="portfolio__link-icon" alt="иконка"/>
      </a>
    </div>
  ))

  return (
    <section className="portfolio">
      <div className="portfolio__container container">
        <h2 className="portfolio__title">Портфолио</h2>
        {linksJsx}
      </div>
    </section>
  )
}

export default Portfolio;
