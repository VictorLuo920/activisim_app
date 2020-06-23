import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddBlmComment from '../../components/AddBlmComment/AddBlmComment';

class BlmCommentsPage extends React.Component {

  render() {
    const { props } = this;
    return (
      <div>
        <p>CommentsPage</p>

        <Link className="add-service" to="/addblmcomment">Add a comment</Link>

        <section>
          {props.blmComments.map((b) => (
            <article key={b.blmComment}>
              <p>
                {b.text}
                <em> by {b.creator}</em>
              </p>
            </article>
          ))}</section>

        <Router>
          <Route exact path="/addblmcomment" render={(props) => (
            <AddBlmComment
              handleAddBlmComment={this.handleAddBlmComment}
              blmComments={this.state.blmComments}
              user={this.state.user}
              {...props}
            />)} />
        </Router>
      </div>
    );
  }
}
export default BlmCommentsPage;