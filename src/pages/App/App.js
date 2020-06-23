import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Home from "../../pages/Home/Home.js";
import About from "../../pages/About/About.js";
import Resources from '../../pages/Resources/Resources'
import Terms from '../../components/Terms/Terms'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

class App extends Component {

  state = {
    user: userService.getUser()

  }

  render() {

    return (
      <div className="App">
          <NavBar user={this.state.user}/>
        <Switch>
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
  
            />
          } />
          <Route exact path='/login' render={() =>
            <LoginPage
  
            />
          } />
          <Route
            exact path="/"
            render={(props) => (
              <Home
                {...props}
              />
            )}
          />
          <Route
            exact path="/about"
            render={(props) => (
              <About
                {...props}
              />
            )}
          />
          <Route
            exact path="/resources"
            render={(props) => (
              <Resources
                {...props}
              />
            )}
          />
          <Route
            exact path="/terms"
            render={(props) => (
              <Terms
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
