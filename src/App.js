import { Container, Grid } from '@material-ui/core'
import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Portfolio from './pages/Portfolio/Portfolio'
import Resume from './pages/Resume/Resume'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'

 function App() {
  return (
    <div className='wrapper'>
      <Container className="myApp">
        <Grid container spacing={5}>
          <Grid  item xs={12} sm={12} md={4} lg={3} >
            <Profile />
          </Grid>
          <Grid  item xs={12} sm={12} md={8} lg={10} >
              
              <Router>
              <Header/>
                  <div className="main-content" >
                      <Switch>
                          <Route path="/portfolio">
                              <Portfolio/>
                          </Route>
                          <Route path="/">
                              <Resume/>
                          </Route>
                      </Switch>
                  </div>
              </Router>
              <Footer/>
          </Grid>
      </Grid>
    </Container>
    </div>
  )
}

export default App;
