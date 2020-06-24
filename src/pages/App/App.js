import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Home from "../../pages/Home/Home.js";
import LaunchScreen from "../../pages/LaunchScreen/LaunchScreen.js";
import Resources from '../../pages/Resources/Resources'
import TopicPage from '../../components/TopicPage/TopicPage'
import BLMTopicPage from '../../pages/BLMTopicPage/BLMTopicPage'
import BlmCommonResponses from '../../pages/BlmCommonResponses/BlmCommonResponses'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import ExplanationPage from '../ExplanationPage/ExplanationPage';
import ResponsePage from '../ResponsePage/ResponsePage';
import BlmCommentsPage from '../BlmCommentsPage/BlmCommentsPage';
import TopicCreatePage from '../TopicCreatePage/TopicCreatePage';
import * as blmCommentsService from "../../utils/blmCommentsService";
import AddBlmComment from '../../components/AddBlmComment/AddBlmComment'
import EditBlmComment from '../../components/EditBlmComment/EditBlmComment'
import SocialDistancingCommentsPage from '../SocialDistancingCommentsPage/SocialDistancingCommentsPage'

class App extends React.Component {

  navigation = React.createRef()

  state = {
    user: userService.getUser(),
    blmComments: [],
    newBlmComments: []

  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  handleAddBlmComment = async (newBlmCommentData, history) => {
    const newBlmComment = await blmCommentsService.create(newBlmCommentData);
    this.setState(state => ({
      blmComments: [...state.blmComments, newBlmComment]
    }),
      () => history.push('/blmcommentspage'));
  }

  handleUpdateBlmComment = async updatedBlmCommentData => {
    const updatedBlmComment = await blmCommentsService.update(updatedBlmCommentData)
    const newblmcommentsArray = this.state.blmComments.map(e =>
      e._id === updatedBlmComment._id ? updatedBlmComment : e)
    this.setState({ blmComments: newblmcommentsArray })
  }

  handleDeleteBlmComment = async (id, history) => {
    console.log(id)
    await blmCommentsService.deleteOne(id);
    this.setState(state => ({
      blmComments: state.blmComments.filter(b => b._id !== id)
    }), () => history.push('/blmcommentspage'));
  }

  async componentDidMount() {
    const blmComments = await blmCommentsService.index();
    this.setState({ blmComments });

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
            exact path="/blacklivesmatter"
            render={(props) => (
              <BLMTopicPage
                {...props}
              />
            )}
          />
          <Route
            exact path="/blmcommonresponses"
            render={(props) => (
              <BlmCommonResponses
                {...props}
              />
            )}
          />
          <Route
            exact path="/blmcommentspage"
            render={(props) => (
              <BlmCommentsPage
                user={this.state.user}
                handleAddBlmComment={this.handleAddBlmComment}
                blmComments={this.state.blmComments}
                newBlmComment={this.state.newBlmComment}
                formRef={this.formRef}
                {...props}
              />
            )}
          />
          <Route
            exact path="/socialdistancingcommentspage"
            render={(props) => (
              <SocialDistancingCommentsPage
                user={this.state.user}
                handleAddBlmComment={this.handleAddBlmComment}
                blmComments={this.state.blmComments}
                newBlmComment={this.state.newBlmComment}
                formRef={this.formRef}
                {...props}
              />
            )}
          />
          <Route
            exact path="/addblmcomment"
            render={({ history }) => (
              <AddBlmComment
                history={history}
                handleAddBlmComment={this.handleAddBlmComment}
                blmComments={this.state.blmComments}
                user={this.state.user}
              />
            )}
          />
          <Route
            path="/editcommentpage/:id"
            render={(props) => (
              userService.getUser() ? (
                <EditBlmComment
                  {...props}
                  handleUpdateBlmComment={this.handleUpdateBlmComment}
                  blmComments={this.state.blmComments}
                  handleDeleteBlmComment={this.handleDeleteBlmComment}
                  user={this.state.user}
                />
              ) : (
                  <Redirect to="/login" />
                )
            )}
          />
          <Route exact path='/create' render={({ history }) =>
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
