import React from 'react';
import { Link } from 'react-router-dom'
const ResponsePage = (props) => {
  return (
    <div className="explanation-page">

        <p>Roleplay Response Page</p>
        <p> user is presented with a pre generated argument to respond to and can choose: </p>
            <ul>
                <li><Link to="/launchscreen">green</Link>
                    (goes back to launch page to choose another topic, or can go to the 
                    <Link to="/blmcommentspage"> comments </Link> 
                    page)
                    </li>
                <li><Link to="/resources">yellow</Link> (goes to resources page)</li>
                <li>or <Link to="commentspage">red</Link> (goes to comments page)</li>
            </ul>
           
    </div>
  );
}
export default ResponsePage;