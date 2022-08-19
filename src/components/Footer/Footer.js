import './Footer.css';

const links = [
  {
    title: 'Яндекс.Практикум',
    link: 'https://practicum.yandex.ru/',
    alt: 'ссылка'
  },
  {
    title: 'Github',
    link: 'https://github.com/Shepelev-Mikhail',
    alt: 'ссылка'
  },
  {
    title: 'Facebook',
    link: 'https://www.facebook.com/',
    alt: 'ссылка'
  }
]

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const linksJsx = links?.map((el, index) => (
    <a key={`footer-link-${index}`} href={el?.link} className="footer__link" target="_blank" rel="noreferrer">
      {el?.title}
    </a>
  ))

  return (
    <footer className="footer">
      <div className="container footer__container">
        <p className="footer__project">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__bottom">
          <div className="footer__links">
            { linksJsx }
          </div>
          <p className="footer__copyright">
            &#169;<span className="footer__copyright-year">{currentYear}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
