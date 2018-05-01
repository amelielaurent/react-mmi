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
          position: { lat: 59.95, lng: 30.33 },
          isActive: true
        },
        
         {
          id:1,
          name: "Machine à chocolat chaud",
          position: { lat: 59.95, lng: 100.644 },
          isActive: false
        },
        
         {
          id:2,
          name: "Machine à thé",
          position: { lat: 59.95, lng: 50.258 },
          isActive: false
        }
      ]
      
    };
    
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
     
     //On donne un id unique a la nouvelle machine qui est son propre nom
     machine.id= machine.name;
     
     //machine.isActive = machine.status;
     
    //On insère une nouvelle machine dans le tableau machines
     machines.newMachine = machine;
    
   // On applique au state
    this.setState({ machines });
     
    console.log("addMachineToState");
    
    //On voit que dans machine il y a bien le nom, le status, et l'id
    console.log(machine);
    
    //On voit notre nouvelle machine dans le tableau de machines
    console.log(machines);
}

//Méthode pour supprimer une machine
deletemachine(machine) {
    // 1. On copie le state existant
    const machines = { ...this.state.machines };
    // 2. On supprime la machine avec l'id correspondant
   
   //La je supprime l'id de la machine sur laquelle je clique 
    //machines[machine].id = machines.delete;
    
    //Supprime la machine visuellement mais ça marche plus très bien après, fonction delete
   // machines[machine] = delete(machines.id);
    
    // Essai avec la méthode splice pour restructurer le tableau une fois l'élément supprimé, mais ne marche pas mieux
     //machines[machine] = [machine].splice(0,machines[machine.id]);
     
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
        {/*Formulaire*/}
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
                         position={this.state.machines[key].position}
                         total={this.total}
                         totalActive={this.totalActive}
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