import './Profile.css';
import {useState} from "react";

function Profile() {
  const [isEdit, updateIsEdit] = useState(false);
  const [formParams, setFormParams] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormParams((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!formParams.name || !formParams.email) {
      return;
    }

    // Не забыть перенести на успешную отправку формы
    updateIsEdit(false);
  }

  return (
    <div className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>

      <form method="post" className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__fields">
          <div className="profile__field">
            <label className="profile__field-name">Имя</label>
            <input
              className="profile__field-input"
              type="text"
              name="name"
              placeholder="Введите ваше имя"
              autoComplete="off"
              required
              disabled={!isEdit}
              onChange={handleChange}
            />
          </div>
          <div className="profile__field">
            <label className="profile__field-name">E-mail</label>
            <input
              className="profile__field-input"
              type="email"
              name="email"
              minLength="2"
              maxLength="40"
              placeholder="Введите электронную почту"
              autoComplete="off"
              required
              disabled={!isEdit}
              onChange={handleChange}
            />
          </div>
        </div>

        <span className="profile__error" />
        {isEdit &&
          <div className="profile__buttons">
            <button
              type="submit"
              className="profile__submit"
            >
              Сохранить
            </button>
          </div>
        }
      </form>
      {!isEdit &&
        <div className="profile__buttons">
          <button
            type="button"
            className="profile__button"
            onClick={() => updateIsEdit(true)}
          >
            Редактировать
          </button>
          <button type="button" className="profile__button profile__button_logout">Выйти из аккаунта</button>
        </div>
      }
    </div>
  )
}

export default Profile;
