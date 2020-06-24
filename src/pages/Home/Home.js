import React from 'react';
import Dropdown from '../../components/DropDown/DropDown';

const Home = (props) => {
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
        <div>
            <h1>Popular Today</h1>
        </div>
        <div>
            <div><p>Black Lives Matter</p></div>
        </div>
        <div>
            <div><p>Wearing a Mask</p></div>
        </div>
        <div>
            <div><p>Social Distancing</p></div>
        </div>
        <div>
            <div><p>Antifa</p></div>
        </div>
        <div>
            <h1>Coming Soon</h1>
        </div>
        <div>
            <div><p>Affirmative Action</p></div>
        </div>
        <div>
            <div><p>Prison Industrial Complex</p></div>
        </div>
    </div>
</>
  );
}
export default Home;