import './NavTab.css';

function NavTab() {
  return(
      <section className="nav">
        <div className="container nav__container">
          <a href='#' className="nav__link">О проекте</a>
          <a href='#' className="nav__link">Технологии</a>
          <a href='#' className="nav__link">Студент</a>
        </div>
      </section>
  )
}

export default NavTab;