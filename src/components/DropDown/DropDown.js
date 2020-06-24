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
         <a className="active" href=""><li className="drop-li">Prison Industrial Complex</li></a>
         <a href=""><li className="drop-li">Wearing Face Masks</li></a>
         <a href=""><li className="drop-li">Antifa</li></a>
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