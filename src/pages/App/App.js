import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Home from "../../pages/Home/Home.js";
import LaunchScreen from "../../pages/LaunchScreen/LaunchScreen.js";
import Resources from '../../pages/Resources/Resources'
import TopicPage from '../../components/TopicPage/TopicPage'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import ExplanationPage from '../ExplanationPage/ExplanationPage';
import ResponsePage from '../ResponsePage/ResponsePage';
import CommentsPage from '../CommentsPage/CommentsPage';
import TopicCreatePage from '../TopicCreatePage/TopicCreatePage';

class App extends React.Component {

  navigation = React.createRef()

  state = {
    user: userService.getUser()

  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }


  render() {

    return (
      <div className="App">
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}

            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
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
            exact path="/launchscreen"
            render={(props) => (
              <LaunchScreen
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
            exact path="/topicpage"
            render={(props) => (
              <TopicPage
                {...props}
              />
            )}
          />
          <Route
            exact path="/explanationpage"
            render={(props) => (
              <ExplanationPage
                {...props}
              />
            )}
          />
          <Route
            exact path="/responsepage"
            render={(props) => (
              <ResponsePage
                {...props}
              />
            )}
          />
          <Route
            exact path="/commentspage"
            render={(props) => (
              <CommentsPage
                {...props}
              />
            )}
          />
            <Route exact path='/create' render = {({history}) =>
            <TopicCreatePage 
              history={history}
              user={this.state.user}
         />
      } />
        </Switch>
      </div>
    );
  }
}

export default App;
