import './Footer.css'
import praktikum from '../../images/praktikum.svg'
import github from '../../images/github.svg'
import facebook from '../../images/facebook.svg'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container container">
        <a href="https://github.com/Shepelev-Mikhail" className="footer__project">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </a>
        <div className="footer__nav">
          <p className="footer__year">&#169; 2022</p>
          <div className="footer__links">
            <a href="https://github.com/Shepelev-Mikhail">
              <img src={praktikum} alt="ссылка" />
            </a>
            <a href="https://github.com/Shepelev-Mikhail">
              <img src={github} alt="ссылка" />
            </a>
            <a href="https://github.com/Shepelev-Mikhail">
              <img src={facebook} alt="ссылка" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;