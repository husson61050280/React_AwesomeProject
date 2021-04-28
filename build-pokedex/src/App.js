import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import PokeList from './components/PokeList';
import PokeDetail from './components/PokeDetail'

class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route path ="/" exact component={PokeList} />
          <Route path = "/:pokemon" exact component = {PokeDetail} />
          </Switch> 
      </Router>
    );
  }
}
export default App;
