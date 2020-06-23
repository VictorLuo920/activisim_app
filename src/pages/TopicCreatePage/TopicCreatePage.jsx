import React, { Component } from 'react';
import TopicCreateForm from '../../components/TopicCreateForm/TopicCreateForm';
import './TopicCreatePage.css';

class TopicCreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='TopicCreatePage'>
        <TopicCreateForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default TopicCreatePage;