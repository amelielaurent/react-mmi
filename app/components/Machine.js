/**
 *
 * App.js
 *
 */
import React from 'react';
import Toggle from 'react-toggle'

class Machine extends React.Component {
  
    //Ajout du constructeur
   constructor(props) {
    super(props);
    this.state = {isActive: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick (){
    console.log('Woot.')
    console.log(this.props.name)
    // e.preventDefault();
    console.log('The link was clicked.');
    console.log('this is:', this);
    //Ajout de la fonction setState
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  }
  
  render() {
    // Dans tous les cas, afficher
    //Enlever les divs qui affichait coucou
    // <button type="button" className="btn" onClick={(e) => this.handleClick(e)}> {this.state.isActive ? "ON" : "OFF" }  </button>
    return ( 
    <div className="Machine hey"> 
      <br/>
      <div className = {this.state.isActive ? "machine active" : "machine"} >
      {this.props.name}
      <br/>
      
     
        <Toggle
        defaultChecked={this.state.isActive}
        aria-label='No label tag'
        className='custom-classname'
        onClick={this.handleClick} />
      </div>
    </div>
    );
    
  }
}




// Le composant sera accessible avec le nom "Machine"
export default Machine;
