
import './App.css';
import Header from "./component/Header";
import { GlobalStyle } from './GlobalStyle';

import Home from "./Pages/home";
import Movie from "./Pages/movie";
import Notfound from "./Pages/notfound"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/login';
// import Brand from './component/Brands/brand';
import { CounterProvider } from './component/ageMessage';
import { MoviesProvider } from './Context/movieProvider';





function App() {
  return (
    <CounterProvider>

      <Header />
      {/* <Brand /> */}

      <Router>
        <Switch>
          <Route exact path="/:movieid" component={Movie} />

          <MoviesProvider>
            <Route exact path="/" component={Home} />
          </MoviesProvider>

          {/* <Route exact path="/auth/login" component={Login} /> */}
          {/* <Route exact path="" component={Notfound} /> */}



        </Switch>
      </Router>
      <GlobalStyle />



    </CounterProvider>
  );
}





export default App;
