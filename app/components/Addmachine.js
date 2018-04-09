import React from 'react';

class Addmachine extends React.Component {
    constructor (props) {
        super(props);
        
        const machine = {
            name: this.name.value,
            status: this.status.value
        }
        
        this.props.addMachine(machine);
        this.machineForm.reset();
    }
    
  render() {
    // Dans tous les cas, afficher
    
    return ( 
    <form ref={(input) => this.machineForm = input} className="machine-edit" onSubmit="">
                <input ref={(input) => this.name = input} type="text" placeholder="Nom machine" />
                <select ref={(input) => this.status = input}>
                    <option value="active">Actif</option>
                    <option value="inactive">Inactif</option>
                </select>
                <button type="submit">Ajouter</button>
    </form>
    );
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Addmachine;
