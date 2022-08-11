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
        <main className="main">
          <Header />
          <Main />
        </main>
        <Footer />
      </Route>
      <Route exact path="/movies">
        <main className="main">
          <Header />
          <Movies />
        </main>
        <Footer />
      </Route>
      <Route exact path="/saved-movies">
        <main className="main">
          <Header />
          <SavedMovies />
        </main>
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
