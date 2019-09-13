import React from 'react';
class items extends React.Component {
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
        <div  className="items"  >
         <div className="button" onClick={this.showDropdownMenu}> ITEMS</div>

          { this.state.displayMenu ? (
          <ul>      
         <form >  
               ITEMS     
                   <select >
                       <option value="chips" >chips</option>
                       <option value="bread">bread</option>
                       <option value="marker">marker</option>
                       <option value="biscuits">biscuits</option>
                  </select>
                        <input type="number"></input>
        </form>
        <button onclick="myFunction()">submit</button>
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

export default items;