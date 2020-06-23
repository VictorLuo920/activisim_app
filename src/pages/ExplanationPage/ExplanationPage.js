import React from 'react';
import { Link } from 'react-router-dom'
import './ExplanationPage.css'

const ExplanationPage = (props) => {
  return (
    <div className="explanation-page">

        <p>Explanation Page</p>
        <ul>
            <li>pulls data on common responses and key talking points with a CategoryExplanation component</li>
            <br/>
            <li>explains how you would explain this to someone else. links to the roleplay response page</li>
        </ul>
        <Link to="/responsepage">goes to response page</Link>
        
    </div>
  );
}
export default ExplanationPage;