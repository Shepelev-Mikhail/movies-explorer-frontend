import './ProgressBar.css';

function ProgressBar() {
  return (
    <div className="progress-bar">
      <div className="progress-bar__backend">
        <p className="progress-bar__line progress-bar__line_green">1 неделя</p>
        <p className="progress-bar__type">Back-end</p>
      </div>
      <div className="progress-bar__front">
        <p className="progress-bar__line">4 недели</p>
        <p className="progress-bar__type">Front-end</p>
      </div>
    </div>
  )
}

export default ProgressBar;
