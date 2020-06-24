import React from 'react';
import { Link } from 'react-router-dom';

class BlmCommentsPage extends React.Component {

  render() {
    const { props } = this;
    return (
      <div>
        <p>CommentsPage</p>

        <Link to="/addblmcomment">Add a comment</Link>

        <section>
          {props.blmComments.map((b) => (
            <article key={b.blmComment}>
              <p>
                {b.text}
                {this.props.user._id === b.user && 
                    <Link
                      to={{ pathname: '/editcommentpage/' + b._id, state: { blmComment: b.text } }}>
                      Edit
                  </Link>
                      }
                <em> by {b.creator}</em>
              </p>
            </article>
          ))}</section>
      </div>
    );
  }
}
export default BlmCommentsPage;