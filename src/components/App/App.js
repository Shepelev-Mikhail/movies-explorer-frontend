import { Route, Switch, useHistory, useLocation  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as MainApi from '../../utils/MainApi.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
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

// обнуление ошибок при переходе по страницам
  useEffect(() => {
    updateErrorSubmit('')
  }, [location]);

//запрос данных пользователя при авторизации
  useEffect(() => {
    if (loggedIn) {
      MainApi.getUserInfo()
        .then((res) => {
          updateCurrentUser(res)
        })
        .catch(console.log);
    }
  }, [loggedIn])

// регистрация
  const handleRegister = ({ name, email, password }) => {
    return MainApi.register(name, email, password)
      .then((data) => {
        handleLogin({ email, password })
      })
      .catch((err) => {
        if (err === 409) {
          updateErrorSubmit('Пользователь с таким email уже существует.')
        } else {
          updateErrorSubmit('При регистрации пользователя произошла ошибка.')
        }
      })
  };

// вход
  const handleLogin = ({ email, password }) => {
    return MainApi.authorize(email, password)
      .then((data) => {
        if (data.token) {
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

  //выход
  const signOut = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    history.push('/');
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
      <Switch>

        <Route exact path="/">
          <Header loggedIn={loggedIn} />
          <main className="main">
            <Main />
          </main>
          <Footer />
        </Route>

        <ProtectedRoute exact path="/movies" loggedIn={loggedIn}>
          <Header loggedIn={loggedIn} />
          <main className="main">
            <Movies />
          </main>
          <Footer />
        </ProtectedRoute>

        <ProtectedRoute exact path="/saved-movies" loggedIn={loggedIn}>
          <Header loggedIn={loggedIn} />
          <main className="main">
            <SavedMovies />
          </main>
          <Footer />
        </ProtectedRoute>

        <ProtectedRoute exact path="/profile" loggedIn={loggedIn}>
          <Header loggedIn={loggedIn} />
          <Profile signOut={signOut} />
        </ProtectedRoute>

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
