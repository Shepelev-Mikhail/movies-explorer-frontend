import { Route, Switch  } from 'react-router-dom';
import './App.css';
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
  return (
    <div className="page">
    <Switch>
      <Route exact path="/">
        <Header />
        <Main />
        <Footer />
      </Route>
      <Route exact path="/movies">
        <Header />
        <Movies />
        <Footer />
      </Route>
      <Route exact path="/saved-movies">
        <Header />
        <SavedMovies />
        <Footer />
      </Route>
      <Route exact path="/profile">
        <Header />
        <Profile />
      </Route>
      <Route exact path="/sign-in">
        <Login />
      </Route>
      <Route exact path="/sign-up">
        <Register />
      </Route>
      <Route exact path="*">
        <NotFound />
      </Route>
    </Switch>
    </div>

  );
}

export default App;
