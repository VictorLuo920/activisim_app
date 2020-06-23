import React from 'react';
import { Link } from 'react-router-dom'

const TopicPage = (props) => {
    return (
        <div className="Home">

            <p>TopicPage</p>
            <p>pulls data on the selected topic with a CategoryTopic component, has info on what the topic is</p>
            <Link to="/explanationpage">goes to the explanation page</Link>
        </div>
    );
}
export default TopicPage;