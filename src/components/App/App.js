import { Route, Switch  } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page">
      <Header />

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/saved-movies">
          <Movies />
        </Route>
      </Switch>

      <Footer />
    </div>

  );
}

export default App;
