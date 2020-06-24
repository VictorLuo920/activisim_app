import React from 'react';
import { Link } from 'react-router-dom'
import './BlmKeyP2.css'

const BlmKeyP2 = (props) => {
    return (
        <>
            <div className="Home">
                <p>Blm Key Talking Point 2</p>
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
                        <li>or <Link to="blmcommentspage">red</Link> (goes to comments page)</li>
                    </ul>

                </div>
            </div>
            <div className="blm-kp1">
                <div className="bkp1-banner">
                    <div className="blmkp1-header">
                        <p className="response-text"><em>"I don't see color."</em></p>
                    </div>
                    <div className="kp1-container">


                        <div className="blmkp1-text-header">
                            <h1>Key Talking Points</h1>
                        </div>
                        <div className="blmkp1-bar">
                        </div>
                        <div >
                            <img className="blmkp1-img" src="https://i.postimg.cc/kMjCbGwY/Screen-Shot-2020-06-23-at-10-22-38-PM.png" alt="" />
                        </div>

                        <div className="under-div">
                            <div>
                                    <img  className="box"src="https://i.postimg.cc/prTSx69D/Screen-Shot-2020-06-24-at-12-12-43-PM.png" alt=""/>
                            </div>
                            <div className="box-p">
                                <p>“I don’t see color” advice was compiled by Project Ready: Reimagining Equity & Access for For Diverse Youth. For more information on their free online professional development curriculum, you can visit their website:</p>
                                <p>Project Ready | ready.web.unc.edu</p>
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
        </>
    );
}
export default BlmKeyP2;