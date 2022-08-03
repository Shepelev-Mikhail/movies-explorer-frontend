import './AboutMe.css'
import photo from '../../../images/photo.svg'

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me__container container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__info">
          <div className="about-me__description">
            <h3 className="about-me__name">Виталий</h3>
            <h4 className="about-me__profile">Фронтенд-разработчик, 30 лет</h4>
            <p className="about-me__story">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, 
            закончил факультет экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю 
            слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года 
            работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс 
            по&nbsp;<nobr>веб-разработке</nobr>, начал заниматься <nobr>фриланс-заказами</nobr> 
            и&nbsp;ушёл с&nbsp;постоянной работы.
            </p>
            <div className="about-me__links">
              <a href="#" className="about-me__link">Facebook</a>
              <a href="#" className="about-me__link">Github</a>
            </div>
          </div>
          <img className="about-me__photo" src={photo} alt="фотография" />
        </div>
      </div>

    </div>

  )
}

export default AboutMe;