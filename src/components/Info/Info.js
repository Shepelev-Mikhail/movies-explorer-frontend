import './Info.css';
import close from '../../images/close.svg';

function Info({text, updateShowMessage}) {
  const onClose = () => {
    updateShowMessage(false)
  }

  return (
    <div className="info">
      <p className="info__text">
        {text}
      </p>
      <img className="info__close" src={close} alt="Удалить" onClick={onClose} />
    </div>
  )
}

export default Info;