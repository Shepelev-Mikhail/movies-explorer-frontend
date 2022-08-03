import './ProgressBar.css'

function ProgressBar() {
  return (
    <section className="progress-bar">
      <div className="progress-bar__container container">
        <div className="progress-bar__back">
          <p className="progress-bar__line progress-bar__line_green">1 неделя</p>
          <p className="progress-bar__type">Back-end</p>
        </div>
        <div className="progress-bar__front">
          <p className="progress-bar__line">4 недели</p>
          <p className="progress-bar__type">Front-end</p>
        </div>
      </div>

    </section>
  )
}

export default ProgressBar;