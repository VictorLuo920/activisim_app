import React from 'react';
import { Link } from 'react-router-dom'
import './BlmCommonResponses.css'

const BlmCommonResponses = (props) => {

  return (
    <div 
    // className="blm-responses-page-background"
    >
        {/* <br/> */}
        <div className="response-page-banner">
        <div className="responses-header">
            <br/>
            <h1 className="responses-header">Black Lives Matter Common Responses</h1>
        </div>
            <br></br>
            <div className="response-1">
            <Link to="blmkp1" className="response-text"><em>"...but I think </em><strong><em>all lives matter."</em></strong></Link>
            </div>
            <div className="response-2">
                <Link to="blmkp2" className="response-text"><em>"I don't see color."</em></Link>
            </div>
            <br/>
        </div>
    </div>
  );

}
export default BlmCommonResponses;