import './Profile.css';
import { useContext, useState } from 'react';
import {useForm} from 'react-hook-form';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useEffect } from 'react';
import Info from '../Info/Info';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const [isActiveSubmit, updateIsActiveSubmit] = useState(false);

  const onSubmit = (data) => {
    const { name, email } = data;

    props.handleUpdateProfile({name, email});
    currentUser.name = name;
    currentUser.email = email;
    updateIsActiveSubmit(false);
  }

  const {
    register,
    watch,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: currentUser.name,
      email: currentUser.email
    }
  });

  useEffect(() => {
    watch((value) => {
      updateIsActiveSubmit(value?.name !== currentUser.name || value?.email !== currentUser.email)
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch])

  return (
    <div className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>

      <form method="post" className="profile__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="profile__fields">
          <div className="profile__field">
            <label className="profile__field-name">Имя</label>
            <input 
              className="profile__field-input"
              type="text"
              placeholder="Введите ваше имя"
              autoComplete="off"
              disabled={!props.isEdit}
              {...register("name", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 5,
                  message: "Минимум 5 символов"
                },
                maxLength: {
                  value: 40,
                  message: "Максимум 40 символов"
                },
                pattern: {
                  value: /^[а-яА-ЯёЁa-zA-Z\s-]+$/,
                  message: "Используйте латиницу, кириллицу, пробел или дефис"
                }
              })}
            />
            <div className="profile__field-error">
              {errors?.name && 
              <span className="name-input-error profile__field-error-text">
                {errors?.name?.message || "Error"}
              </span>}
            </div>
          </div>

          <div className="profile__field">
            <label className="profile__field-name">E-mail</label>
            <input 
              className="profile__field-input"
              type="email"
              placeholder="Введите электронную почту"
              autoComplete="off"
              disabled={!props.isEdit}
              {...register("email", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 2,
                  message: "Минимум 2 символов"
                },
                maxLength: {
                  value: 40,
                  message: "Максимум 40 символов"
                },
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Введен некорректный Email"
                }
              })}
            />
            <div className="profile__field-error">
              {errors?.email && 
              <span className="email-input-error profile__field-error-text">
                {errors?.email?.message || "Error"}
              </span>}
            </div>
          </div>
        </div>

        {props.isEdit &&
          <div className="profile__buttons">
            {props.errorSubmit && <span className="profile__submit-text">{props.errorSubmit}</span>}
            <button
              type="submit"
              className="profile__submit"
              disabled={!isValid || !isActiveSubmit}
            >
              Сохранить
            </button>
          </div>
        }
      </form>

      {!props.isEdit &&
        <div className="profile__buttons">
          <button
            type="button"
            className="profile__button"
            onClick={() => props.updateIsEdit(true)}
          >
            Редактировать
          </button>
          <button 
            type="button" 
            className="profile__button profile__button_logout" 
            onClick={props.signOut}>
              Выйти из аккаунта
          </button>
        </div>
      }

      {props.showMessage && <Info text="Обновление данных прошло успешно" updateShowMessage={props.updateShowMessage}/>}
    </div>
  )
}

export default Profile;
