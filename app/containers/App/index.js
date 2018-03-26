/**
 *
 * App.js
 *
 */
import React from 'react';

// On importe ici les composants qu'on veut afficher
import Header from '../../components/header.js';
import Footer from '../../components/footer.js';
import Machine from '../../components/Machine.js';
import CSS from '../../css/styles.css';
// On peut aussi importer du CSS de la meme facon.

class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = { //On définit dans App un state
      machines: [ // On crée un objet machine avec plusieurs valeurs
         {
          name: "Machine à café",
          isActive: true
        },
        
         {
          name: "Machine à chocolat chaud",
          isActive: false
        },
        
         {
          name: "Machine à thé",
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
      <div>
      <Header/>
      
      {
        this.state.machines.map(machine =>
        //console.log(machine.name)
        
        <Machine name={machine.name} isActive={machine.isActive} />
        
        )  
      }
      
      <Footer/>
      </div>
    );
  }
}

export default App;