import React from 'react';

class AddMachine extends React.Component {
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
export default AddMachine;
