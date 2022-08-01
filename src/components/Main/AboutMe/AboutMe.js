import './AboutMe.css'
import photo from '../../../images/photo.svg'

function AboutMe() {
  return (
    <div className="about-me">
      <h2>Студент</h2>
      <div className="about-me__description">
        <div>
          <h3>Виталий</h3>
          <h4>Фронтенд-разработчик, 30 лет</h4>
          <p>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
              С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
              начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div>
            <p>Facebook</p>
            <p>Github</p>
          </div>
        </div>
        <div>
          <img src={photo} alt="фотография" />
        </div>
      </div>
      
    </div>

  )
}

export default AboutMe;