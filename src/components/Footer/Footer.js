import './Footer.css'
import project from '../../images/learn-project.svg'
import praktikum from '../../images/praktikum.svg'
import github from '../../images/github.svg'
import facebook from '../../images/facebook.svg'

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/Shepelev-Mikhail">
        <img src={project} alt="ссылка" />
      </a>
      <div>
        <p>2022</p>
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
  )
}

export default Footer;