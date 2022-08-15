import './Student.css';
import photo from '../../../images/photo.svg';

function Student({componentRef}) {
  return (
    <section ref={componentRef} className="student">
      <div className="student__container container">
        <h2 className="student__title">Студент</h2>
        <div className="student__content">
          <div className="student__photo">
            <img className="student__photo-img" src={photo} alt="фотография" />
          </div>

          <div className="student__info">
            <div className="student__description">
              <h3 className="student__name">Виталий</h3>
              <h4 className="student__profile">Фронтенд-разработчик, 30 лет</h4>
              <p className="student__story">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове,
                закончил факультет экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю
                слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года
                работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс
                по&nbsp;<nobr>веб-разработке</nobr>, начал заниматься <nobr>фриланс-заказами</nobr>
                и&nbsp;ушёл с&nbsp;постоянной работы.
              </p>
            </div>

            <div className="student__links">
              <a href="https://www.facebook.com/" className="student__link" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://github.com/" className="student__link" target="_blank" rel="noreferrer">Github</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Student;
