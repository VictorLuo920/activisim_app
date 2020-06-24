import React from 'react';
import './LaunchScreen.css'
import Dropdown from '../../components/DropDown/DropDown';
import userService from '../../utils/userService';

const LaunchScreen = (props) => {

    return (
        <>
            <div className="launchscreen">
                <div className="home-header">
                    <div className="home-main"></div>
                    <div>
                        <img className="home-img" src="https://i.postimg.cc/6qHhDzGR/Screen-Shot-2020-06-24-at-2-05-25-AM.png" alt=""/>
                    </div>
                    
                    <div className="home-header-text">
                        <h1>how do I explain...</h1>
                    </div>
                    
                </div>
                        <div className="searchbar">
                            <Dropdown />
                        
                        </div>
                        <h1>Thanks for taking a step towards creating change {props.user.name}!</h1>
                        <div className="discussion-bar">
        </div>
                <div>
                    <h1 className="popular">Popular Today</h1>
                </div>
                <div className="end-buttons-launch">
                    <div className="end-back"><p >Black Lives Matter</p></div>
                
                <div>
                    <div className="end-back"><p>Wearing a Mask</p></div>
                </div>
                <div >
                    <div className="end-back"><p>Social Distancing</p></div>
                </div>
                <div>
                    <div className="end-back"><p>Antifa</p></div>
                </div>
                </div>

                <div>
                    <h1 className="popular">Coming Soon</h1>
                </div>
                <div className="end-buttons-launch">
                    <div className="end-back"><p>Affirmative Action</p></div>
                
                    <div className="end-back"><p className="prison-p">Prison Industrial Complex</p></div>
                <div>
                </div>
                </div>
            </div>
        </>
    );
}
export default LaunchScreen;