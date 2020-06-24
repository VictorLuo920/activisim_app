import React from 'react';
import { Link } from 'react-router-dom'
import './BlmKeyP1.css'

const BlmKeyP1 = (props) => {
  return (
    <div className="Home">

        {/* <p>BlmKeyP1</p> */}
<div className="blm-kp1">
                <div className="bkp1-banner">
                    <div className="blmkp1-header">
                        <p className="response-text"><em>"...but I think </em><strong><em>all lives matter."</em></strong></p>
                    </div>
                    <div className="kp1-container">


                        <div className="blmkp1-text-header">
                            <h1>Key Talking Points</h1>
                        </div>
                        <div className="blmkp1-bar">
                        </div>
                        <div >
                            <img className="blmkp1-img" src="https://i.postimg.cc/bwCdCfXY/Screen-Shot-2020-06-23-at-11-50-13-PM.png" alt="" />
                        </div>

                        <div className="under-div">
                        <div>
                                    <img  className="box"src="https://i.postimg.cc/rpp45fyP/Screen-Shot-2020-06-24-at-2-36-17-PM.png" alt=""/>
                            </div>
                            <div className="box-p">
                                <p>“...but I think all lives matter” advice was compiled by American SportNet Reporter and Producer Donnovan Bennett. For more information you can read his interviews and listen to his podcast:</p>
                                <p>Donnovan Bennett | Sportsnet</p>
                                <p>Last Updated: 6/23/20</p>
                            </div>
                        </div>
                        <div className="feeling">
                            <h1>How well-equipped do you feel?</h1>
                        </div>
                        <div className="blmkp1-bar-2">
                        </div>

                        <div className="feeling-buttons">
                            <div className="back">
                                <Link className="pkp1-back-link" to="/blmcommonresponses">Back to Responses</Link>
                            </div>

                            {/* <div className="red-description"> */}
                            <div className="red">
                                <Link className="text-link" to="/blmcommentspage">Not Ready</Link>
                            </div>
                            {/* <div>
                                    <p className="red-p">I want to see how other people have dealt with this situation in their own experiences</p>
                                </div> */}
                            {/* </div> */}

                            <div className="yellow">
                                <Link className="text-link" to="/resources">Just Ok</Link>
                            </div>
                            <div className="green">
                                <Link className="text-link" to="/launchscreen">Pretty Good</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}
export default BlmKeyP1;