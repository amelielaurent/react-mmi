/**
 *
 * App.js
 *
 */
import React from 'react';


// On importe ici les composants qu'on veut afficher

import Machine from './Machine.js';
import AddMachineForm from './Addmachine.js';
import Produit from './Produit.js';

// On peut aussi importer du CSS de la meme facon.

import { BrowserRouter, Router, Route, browserHistory } from 'react-router';


class App extends React.Component {
    constructor(props) {
    super(props);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.addMachineToState = this.addMachineToState.bind(this);
    this.deletemachine = this.deletemachine.bind(this);
    this.state = { //On définit dans App un state
      machines: [ // On crée un objet machine avec plusieurs valeurs
         {
          id:0,
          name: "Machine à café",
          position: { lat: -34.397, lng: 150.644 },
          isActive: true
        },
        
         {
          id:1,
          name: "Machine à chocolat chaud",
          position: { lat: -85.397, lng: 100.644 },
          isActive: false
        },
        
         {
          id:2,
          name: "Machine à thé",
          position: { lat: -20.255, lng: 50.258 },
          isActive: false
        }
      ]
      
    };
    
    // console.log(this.state);
    // console.log(Object.keys(this.state.machines).map(obj => {
    //   var rObj = {};
    //   rObj[obj.key] = obj.value;
    //   return rObj;
    // }));
  
 
  }
  // Méthode pour activer une machine
 handleStatusChange(key) {
    // 1. On copie le state existant
    const machines = { ...this.state.machines };
    // 2. On modifie le status de CETTE machine
   machines[key].isActive = !machines[key].isActive ;
   // Pour vérifier la nouvelle collection dans la console :
   console.log({ machines });
   // 3. On applique cette nouvelle collection au state
   this.setState({ machines });
 }
 
  // Méthode pour ajouter un formulaire
addMachineToState(machine) {
     // 1. On copie le state existant
     const machines = { ...this.state.machines };
     
     //On donne un id unique a la nouvelle machine
    //machines[machine].id = 3;
     
    //On insère une nouvelle machine dans le tableau machines
     machines.newMachine = machine;
    
   // On applique au state
    this.setState({ machines });
     
    console.log("addMachineToState");
    
    //On voit que dans machine il y a bien le nom et le status
    console.log(machine);
    console.log(machines);
}

//Méthode pour supprimer une machine
deletemachine(key) {
    // 1. On copie le state existant
    const machines = { ...this.state.machines };
    // 2. On supprime la machine avec l'id correspondant
     machines[this.machine].splice(key);
  
   // Pour vérifier la nouvelle collection dans la console :
   console.log({ machines });
   // 3. On applique cette nouvelle collection au state
   this.setState({ machines });
    
} 
  
  render() {
    // Calcul des compteurs
    
    const machinesIds = Object.keys(this.state.machines);
    const totalActive = machinesIds.reduce((prevTotal, key) => {
    const machine = this.state.machines[key];
    const isAvailable = machine && machine.isActive;
    // On incrémente le compteur à chaque fois que l'on trouve une machine active
    return isAvailable ? prevTotal + 1 : prevTotal;
    }, 0);
    const total = machinesIds.length;
    
    return (
      
      
      <div className="main">
        
          <AddMachineForm addMachineToState={this.addMachineToState}/>
          {/*Compteurs*/}
          <div className="counter">
            <strong>{totalActive}</strong> / <strong>{total}</strong> Machines actives
          </div>
          {/*Conteneur de notre liste*/}
          <div className="machines-list">
            {/*Boucle sur notre collection de machines*/}
            {
              Object
                .keys(this.state.machines)
                .map(key =>
                // Le composant Machine s'affichera autant de fois
                // qu'il y a d'objets dans la collection.
                <Machine name={this.state.machines[key].name}
                         key={this.state.machines[key].id}
                         index={this.state.machines[key].id}
                         handleStatusChange={this.handleStatusChange}
                         addMachineToState={this.addMachineToState}
                         deletemachine={this.deletemachine}
                         newMachine={this.newMachine}
                         isActive={this.state.machines[key].isActive}/>
              )}
          </div>
          
          {/*Nombre de machines total */}
          <div className="total">
             Nombre total de machines : <strong>{total}</strong> 
          </div>
        
</div>
       
    );
  }
  
}

export default App;