/**
 *
 * App.js
 *
 */
import React from 'react';


// On importe ici les composants qu'on veut afficher

import Machine from './Machine.js';
import Produit from './Produit.js';

// On peut aussi importer du CSS de la meme facon.

import { BrowserRouter, Router, Route, browserHistory } from 'react-router';


class App extends React.Component {
    constructor(props) {
    super(props);
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
    
    console.log(this.state);
    console.log(Object.keys(this.state.machines).map(obj => {
      var rObj = {};
      rObj[obj.key] = obj.value;
      return rObj;
    }));
    
  }
  
  render() {
    return (
      // Un return doit retourner un seul élément du DOM
      // Si on veut afficher plusieurs éléments adjacents,
      // On devra donc les encapsuler dans une DIV parente.
      //Pour la prochaine fois faire le readme qu'il va donner sur git (se sera noté), expliquer la prochaine étape, guider
      <div>
   
      
      {
        this.state.machines.map(machine =>
        //console.log(machine.name)
        
        <Machine name={machine.name} isActive={machine.isActive} key={machine.id} />
        
        )  
      }
      
      
      </div>
    );
  }
  
}

export default App;