import { Route, Switch, useHistory, useLocation  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as MainApi from '../../utils/MainApi.js';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';

function App() {
  const history = useHistory();
  const [currentUser, updateCurrentUser] = useState(null);
  const [errorSubmit, updateErrorSubmit] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  let location = useLocation()

  useEffect(() => {
    updateErrorSubmit('')
  }, [location]);

  const handleRegister = ({ name, email, password }) => {
    return MainApi.register(name, email, password)
      .then(() => {
        console.log('регстрация успешно')
        updateErrorSubmit('')
        history.push('/movies')
      })
      .catch((err) => {
        console.log('регстрация ошибка')
        if (err === 409) {
          updateErrorSubmit('Пользователь с таким email уже существует.')
        } else {
          updateErrorSubmit('При регистрации пользователя произошла ошибка.')
        }
      })
  };

  // const updateApiHeaderWithToken = (token) => {
  //   MainApi._headers = {
  //     ...MainApi._headers,
  //     'Authorization': `Bearer ${token}`
  //   }
  // }

  const handleLogin = ({ email, password }) => {
    return MainApi.authorize(email, password)
      .then((data) => {
        console.log('вход успешно', data.token)
        if (data.token) {
          // updateApiHeaderWithToken(data.token);
          localStorage.setItem('token', data.token);
          setLoggedIn(true);
          updateErrorSubmit('')
          history.push('/movies')
        }
      })
      .catch((err) => {
        console.log(err)
        if (err === 401) {
          updateErrorSubmit('Вы ввели неправильный логин или пароль.')
        } else {
          updateErrorSubmit('При авторизации произошла ошибка.')
        }
      })
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
      <Switch>
        <Route exact path="/">
          <Header />
          <main className="main">
            <Main />
          </main>
          <Footer />
        </Route>
        <Route exact path="/movies">
          <Header />
          <main className="main">
            <Movies />
          </main>
          <Footer />
        </Route>
        <Route exact path="/saved-movies">
          <Header />
          <main className="main">
            <SavedMovies />
          </main>
          <Footer />
        </Route>
        <Route exact path="/profile">
          <Header />
          <Profile />
        </Route>
        <Route exact path="/signin">
          <Login handleLogin={handleLogin} errorSubmit={errorSubmit} />
        </Route>
        <Route exact path="/signup">
          <Register handleRegister={handleRegister} errorSubmit={errorSubmit} />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
