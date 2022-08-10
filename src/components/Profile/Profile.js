import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <div className="profile__fields">
        <div className="profile__field">
          <p className="profile__field-name">Имя</p>
          <input 
            type="text" 
            className="profile__field-input"
            value="Виталий"
          />
            
        </div>
        <div className="profile__field">
          <p className="profile__field-name">E-mail</p>
          <input 
            type="text" 
            className="profile__field-input" 
            value="pochta@yandex.ru"
          />
        </div>
      </div>

      <span className="profile__error"></span>
      <div className="profile__buttons">
        <button className="profile__button">Редактировать</button>
        <button className="profile__button profile__button_logout">Выйти из аккаунта</button>
      </div>

    </div>
  )
}

export default Profile;