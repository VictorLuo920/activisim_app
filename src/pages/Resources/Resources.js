import React from 'react';
import './Resources.css'
import { Link } from 'react-router-dom';

const Resources = (props) => {
    return (
        <div className="resources-page-background">
            <div className="resources">
                <h1 className="dresources-text">Resources</h1>
            </div>
            <div className="blmkp1-text-header">
                <h1>Black lives Matter Founders</h1>
            </div>
            <div className="discussion-bar">
            </div>
            <div className="news">
                <div>
                    <div>
                        col 1 
                        </div>
                </div>
                <div>
                    <div>
                        col 2
                    </div>
                </div>
                <div>
                    <div>
                       col 3  
                    </div>
                </div>
            </div>
            <div className="blmkp1-text-header">
                <h1>Newest Articles</h1>
            </div>
            <div className="discussion-bar">
            </div>
            <div className="news">
                <div>
                    <div>
                        col 1 
                        </div>
                </div>
                <div>
                    <div>
                        col 2
                    </div>
                </div>
                <div>
                    <div>
                       col 3  
                    </div>
                </div>
            </div>
            <div className="blmkp1-text-header">
                <h1>Videos</h1>
            </div>
            <div className="discussion-bar">
            </div>
            <div className="news">
                <div>
                    <div>
                        col 1 
                        </div>
                </div>
                <div>
                    <div>
                        col 2
                    </div>
                </div>
                <div>
                    <div>
                       col 3  
                    </div>
                </div>
            </div>
            <div className="thanks">
                <h1 className="thanks-text">Thanks for learning and listening!</h1>
            </div>
            <div className="discussion-bar-2">
            </div>
            <div className="end-buttons">
                <div className="end-back">
                    <Link to="/blmcommonresponses" className="pkp1-back-link">Back to review</Link>
                </div>
                <div className="right-end-buttons"></div>
                <div className="red">
                    <Link to="/blmcommentspage" className="link">Discussion</Link>
                </div>
                <div className="green">
                    <Link to="/launchscreen" className="link">New Topic</Link>
                </div>
            </div>

            <div className="resources-footer"></div>
        </div>
    );
}
export default Resources;