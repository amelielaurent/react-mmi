/**
 *
 * App.js
 *
 */
import React from 'react';

class Machine extends React.Component {
  render() {
    // Dans tous les cas, afficher
    
    return ( 
    <div className="Machine hey">
      <div className="Machine-header">
        <p>hey {this.props.title}</p>
      </div>
      <div className="Machine-footer">
        <p>hello</p>
        
      </div>
      <div className = {this.props.isActive ? "machine active" : "machine" }>
      {this.props.name}
      <br/>
      <button type="button" onClick={this.handleClick}> CLIC </button>
      </div>
    </div>
    );
    
  }
}




// Le composant sera accessible avec le nom "Machine"
export default Machine;
