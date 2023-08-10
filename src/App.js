
import './App.css';
import Header from "./component/Header";
import { GlobalStyle } from './GlobalStyle';
import Banner from "./component/Banner";
import Grid from "./component/Grid"
import Thumb from './component/Thumb';
import Home from "./Pages/home";
import Movie from "./Pages/movie";
import Notfound from "./Pages/notfound"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';




function App() {
  return (
    <>

      <Header />

      <Router>
        <Switch>
          <Route exact path ="/"component={Home}/>
          <Route exact path ="/:movieid"component={Movie}/>
          <Route exact path =""component={Notfound}/>

        </Switch>
      </Router>
      <GlobalStyle />



    </>
  );
}





export default App;
