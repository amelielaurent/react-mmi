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
          id:0,
          name: "Machine à café",
          isActive: true
        },
        
         {
          id:1,
          name: "Machine à chocolat chaud",
          isActive: false
        },
        
         {
          id:2,
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
      //Pour la prochaine fois faire le readme qu'il va donner sur git (se sera noté), expliquer la prochaine étape, guider
      <div>
      <Header/>
      
      {
        this.state.machines.map(machine =>
        //console.log(machine.name)
        
        <Machine name={machine.name} isActive={machine.isActive} key={machine.id} />
        
        )  
      }
      
      <Footer/>
      </div>
    );
  }
}

export default App;