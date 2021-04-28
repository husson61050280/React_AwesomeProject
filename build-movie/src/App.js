import React from 'react';
import logo from './logo.svg';
import './App.css';

//material UI React
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

//import คลาสที่สร้างเอง
import Nav from './components/Nav/Nav';
import SearchBar from './components/SearchBar/SearchBar';

//react effect
import Fade from 'react-reveal/Fade'

//css
import './general.scss'

class App extends React.Component {
  render () {
    return(
      <div>
        <Container>
          <Grid container spacing = {3}>
            <Grid item xs={12}>
              <Fade up>
                <Nav headding="Movie Database" description = "Build with React , Axios and MaterialUI" />
                <SearchBar/>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default App;
