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

export default function App() {
  return (
    // Un return doit retourner un seul élément du DOM
    // Si on veut afficher plusieurs éléments adjacents,
    // On devra donc les encapsuler dans une DIV parente.
    <div>
    <Header/>
    <Machine title="Bonjour" name="Machine 1" isactive/>
    <Machine name="Machine 2" />
    <Machine name="Machine 3" isactive/>
    

    <Footer/>
    
    </div>
  );
}
