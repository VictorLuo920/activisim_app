import React from 'react';
import { Link } from 'react-router-dom';
import './BlmCommentsPage.css'

class BlmCommentsPage extends React.Component {

  render() {
    const { props } = this;
    return (
      <div className="comments-page-background">
        <div className="discussion">
          <h1 className="discussion-text">Discussion</h1>
        </div>
        <div className="blmkp1-text-header">
          <h1>“I don’t see color.” Scenarios</h1>
        </div>
        <div className="discussion-bar">
        </div>

        <section>
          {props.blmComments.map((b) => (
            <article key={b.blmComment}>


              <div className="comments">

                <div className="username">
                  <div className="avi-div">
                  <img className="avi" src="https://i.postimg.cc/sxrp4Qz1/Screen-Shot-2020-06-24-at-12-14-54-PM.png" alt=""/>
                  </div>

                <div className="comment-box">
                  <div className="username-and-edit">
                  <p className="comment-p"> {b.creator}</p>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                <p>
                  {this.props.user._id === b.user &&
                    <Link
                    className="edit-link"
                      to={{ pathname: '/editcommentpage/' + b._id, state: { blmComment: b.text } }}>
                      <em>Edit</em>
                  </Link>
                  }
                </p>
                </div>
                <div className="comment-text">
                  <p>{b.text}</p> 
                </div>
                </div>
                  </div>
                              <hr></hr>


              </div>



            </article>
          ))}</section>

          <div className="more-button">
          <p className="end-back">Show More...</p>
          </div>

          <div className="share">
            <h1>Share your Experience</h1>
          </div>
          <div className="discussion-bar">
        </div>
      <div className="center-red">

        <div className="add-button">
        <Link to="/addblmcomment" className="link">Add a Comment</Link>
        </div>
      </div>

        <div className="thanks">
          <h1 className="thanks-text">Thanks for learning and listening!</h1>
        </div>
        <div className="discussion-bar-2">
        </div>
        <div className="end-buttons">
          <div className="end-back">
            <Link to="/blmkp2" className="pkp1-back-link">Back to review</Link>
          </div>
          <div className="right-end-buttons"></div>
          <div className="yellow">
                  <Link to="/resources" className="link">Resources</Link>
          </div>
          <div className="green">
            <Link to="/launchscreen" className="link">New Topic</Link>
          </div>
        </div>
        <br />

      </div>
    );
  }
}
export default BlmCommentsPage;