import React from 'react';
import './LaunchScreen.css'
import Dropdown from '../../components/DropDown/DropDown';

const LaunchScreen = (props) => {

    return (
        <>
            <div className="launchscreen">
                <div>
                    <p>Launch Screen</p>
                    <p>select drop down - -</p>
                    <Dropdown />
                </div>

            </div>
        </>
    );
}
export default LaunchScreen;