import { useHistory } from "react-router-dom"
import './NotFound.css';

function NotFound() {
  const history = useHistory();

  return (
    <div className="container">
      404 ошибка

      <div onClick={history.goBack}>Назад</div>
    </div>
  )
}

export default NotFound;
