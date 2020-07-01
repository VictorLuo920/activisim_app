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
         <a href="blacklivesmatter"><li className="drop-li">Black Lives Matter</li></a>
         <a href=""><li className="drop-li-grey">Prison Industrial Complex</li></a>
         <a href=""><li className="drop-li-grey">Wearing Face Masks</li></a>
         <a href=""><li className="drop-li-grey">Antifa</li></a>
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