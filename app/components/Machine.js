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
      <div className = {this.props.isactive ? "machine active" : "machine" }>
      
      <button>
        {this.props.name}
      </button>
      </div>
    </div>
    );
    
  }
}




// Le composant sera accessible avec le nom "Machine"
export default Machine;
