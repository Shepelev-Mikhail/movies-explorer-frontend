import './Footer.css';

const links = [
  {
    title: 'Яндекс.Практикум',
    link: 'https://github.com/Shepelev-Mikhail',
    alt: 'ссылка'
  },
  {
    title: 'Github',
    link: 'https://github.com/Shepelev-Mikhail',
    alt: 'ссылка'
  },
  {
    title: 'Facebook',
    link: 'https://github.com/Shepelev-Mikhail',
    alt: 'ссылка'
  }
]

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const linksJsx = links?.map((el, index) => (
    <a key={`footer-link-${index}`} href={el?.link} className="footer__link" target="_blank">
      {el?.title}
    </a>
  ))

  return (
    <div className="footer">
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
    </div>
  )
}

export default Footer;
