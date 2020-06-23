import React from 'react';
import { Link } from 'react-router-dom'

const ExplanationPage = (props) => {
  return (
    <div className="ExplanationPage">

        <p>ExplanationPage</p>
        <ul>
            <li>pulls data on common responses and key talking points with a CategoryExplanation component</li>
            <li>explains how you would explain this to someone else. links to the roleplay response page</li>
        </ul>
        <Link to="/responsepage">go to response page</Link>
        
    </div>
  );
}
export default ExplanationPage;