/**
 *
 * Machine.js
 *
 */
import React from 'react';
import Toggle from 'react-toggle';

class Machine extends React.Component {
  
    //Ajout du constructeur
   constructor(props) {
    super(props);
    this.state = {isActive: true};
  }
  
  /*handleClick (){
    console.log('Woot.')
    console.log(this.props.name)
    // e.preventDefault();
    console.log('The link was clicked.');
    console.log('this is:', this);
    //Ajout de la fonction setState
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  }*/
  
  onToggleClick() {
  // On envoie l'index à la méthode qui changera la valeur
    // La méthode et son argument sont tous les deux accessibles
    // via des props qui ont été passées au composant
    this.props.handleStatusChange(this.props.index);
   }
  
  ondelete() {
    this.props.deletemachine(this.props.index);
  }
  
  render() {
     return ( 
      
      
    <div className="Machine hey"> 
      <br/>
      <div className = {this.props.isActive ? "machine active" : "machine"} >
      {this.props.name}
      <br/>
      
     
        {<Toggle
        defaultChecked={this.props.isActive}
        aria-label='No label tag'
        className='custom-classname'
         onClick={(e) => this.onToggleClick(e)}/>
        }
         {/*Button supprimer*/}
        <button onClick={(e) => this.ondelete(e)} type="button" className="btn"> Supprimer
           </button>
        
        
      </div>
    </div>
    );
    
  }
}




// Le composant sera accessible avec le nom "Machine"
export default Machine;
