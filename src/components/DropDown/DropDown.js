import React from 'react';
import './DropDown.css';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" >
         <div className="button" onClick={this.showDropdownMenu}> How Do I Explain </div>
          { this.state.displayMenu ? (
          <ul className="drop-ul">
         <li className="drop-li"><a href="topicpage">Black Lives Matter</a></li>
         <li className="drop-li"><a className="active" href="topicpage">Prison Industrial Complex</a></li>
         <li className="drop-li"><a href="topicpage">Wearing Face Masks</a></li>
         <li className="drop-li"><a href="topicpage">Antifa</a></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default Dropdown;