import './AboutProject.css'

function AboutProject() {
  return (
    <div className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__description">
        <div>
          <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div>
          <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__graph">
        <div>
          <p className="about-project__text">1 неделя</p>
          <p className="about-project__text">Back-end</p>
        </div>
        <div>
          <p className="about-project__text">4 недели</p>
          <p className="about-project__text">Front-end</p>
        </div>
      </div>
    </div>

  )
}

export default AboutProject;