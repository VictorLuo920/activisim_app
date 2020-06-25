import React from 'react';
import './BLMTopicPage.css'

const BLMTopicPage = (props) => {
    return (
        <>
            <div
            // className="page-background"
            >
                {/* <br /> */}
                <div className="page-banner">
                    <div className="blm-header" >
                        <h1>Black Lives Matter</h1>
                    </div>
                    <div className="bar"></div>
                    <div className="blm-page">
                        <div >
                            <img className="blm-logo" src="https://i.postimg.cc/dVkp1PsL/Screen-Shot-2020-06-23-at-4-53-29-PM.png" alt="" />
                        </div>
                        <div className="blm-content">
                            <h2 className="blm-content-header">What is it?</h2>
                            <p className="blm-p">
                                #BlackLivesMatter (BLM) is an organized activity movement with a mission to “eradicate white supremacy and build local power to intervene in violence inflicted on Black communities by the state and vigilantes”
                </p>
                        </div>
                        <div className="blm-content">
                            <div>
                                <h2 className="blm-content-header">Why is it?</h2>
                            </div>
                            <p className="blm-p">
                                BLM was founded in 2013 in response to the acquittal of Trayvon Martin’s murderer, George Zimmerman. With the recent deaths of George Floyd and Breonna Taylor at the hands of police, BLM has seen a massive resurgence in activity.
                </p>
                        </div>
                    </div>

                    <div className="next-links">
                        <h1>Next Steps</h1>
                    </div>
                    <div className="bar-2">
                    </div>

                </div>

                <div className="blm-buttons">
                    <div className="back-link">
                        <h5><a href="/launchscreen" className="home-link">Back to Search</a></h5>
                    </div>
                    <div className="common-responses-link">
                        <h5 className="green-link"><a className="cr" href="/blmcommonresponses">Common Responses</a></h5>
                    </div>
                </div>

            </div>
        </>
    );
}
export default BLMTopicPage;