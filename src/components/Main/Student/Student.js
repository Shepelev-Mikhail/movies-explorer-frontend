import './Student.css';
import photo from '../../../images/photo.jpg';

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
              <h3 className="student__name">Михаил</h3>
              <h4 className="student__profile">Фронтенд-разработчик, 28 лет</h4>
              <p className="student__story">
                Я&nbsp;живу в&nbsp;городе Ставрополе, в&nbsp;университете учился на&nbsp;специальности 
                &laquo;Земельный кадастр&raquo;. Мои увлечения&nbsp;&mdash; танцы и&nbsp;страйкбол. Учиться веб-разработке 
                начал в&nbsp;2021&nbsp;г. После завершения курса по&nbsp;<nobr>веб-разработке</nobr> хочу поменять сферу деятельности 
                и&nbsp;найти себя в&nbsp;новой профессии.
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
