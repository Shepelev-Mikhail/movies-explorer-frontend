import './Portfolio.css'

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Портфолио</h2>
      <div className="portfolio__link">
        <h3>Статичный сайт</h3>
        <a href="https://github.com/Shepelev-Mikhail">&#129125;</a>
      </div>
      <div className="portfolio__link">
        <h3>Адаптивный сайт</h3>
        <a href="https://github.com/Shepelev-Mikhail">&#129125;</a>
      </div>
      <div className="portfolio__link">
        <h3>Одностраничное приложение</h3>
        <a href="https://github.com/Shepelev-Mikhail">&#129125;</a>
      </div>
    </div>

  )
}

export default Portfolio;