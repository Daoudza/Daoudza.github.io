// App.js
import React, { useState } from 'react';
import Button from './Button.js';
import Cv from './Cv';
import ContactForm from './ContactForm';

function App() {
  const [afficherCV, setAfficherCV] = useState(false);
  const [afficherDiplomes, setAfficherDiplomes] = useState(false);
  const [afficherCoordonnees, setAfficherCoordonnees] = useState(false);
  const [buttonColor, setButtonColor] = useState('#4caf50');
  const fileName = 'CVDaouda.pdf';
  

  const handleClickAfficherCV = () => {
    setAfficherCV(true);
    setAfficherDiplomes(false);
    setAfficherCoordonnees(false);
  };

  const handleClickAfficherDiplomes = () => {
    setAfficherDiplomes(true);
    setAfficherCV(false);
    setAfficherCoordonnees(false);
  };

  const handleClickAfficherCoordonnees = () => {
    setAfficherCoordonnees(true);
    setAfficherCV(false);
    setAfficherDiplomes(false);
  };


  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Bonjour je m'appelle Daouda, vous êtes sur mon site qui vous permet d'accéder à mon cv et autres informations à mon sujet. </h1>

      
      <Button
        text=" CV"
        onClick={handleClickAfficherCV}
        backgroundColor={afficherCV ? '' : buttonColor}
      />

      {' '}

      <Button
        text=" Diplômes"
        onClick={handleClickAfficherDiplomes}
        backgroundColor={afficherDiplomes ? '#45a049' : buttonColor}
      />

      {' '}

      <Button
        text=" Coordonnées"
        onClick={handleClickAfficherCoordonnees}
        backgroundColor={afficherCoordonnees ? '#45a049' : buttonColor}
      />

      <a href="/public/res/CVDaouda.pdf" download="CVDaouda.pdf">
        <button>Voici mon CV en PDF</button>
      </a>

      {afficherCV && <Cv />}
      {afficherDiplomes && (
        <div>
          <h2>Mes Diplômes</h2>
          <p>Brevet Mention Assez Bien</p>
          <p>ASSR2</p>
        </div>
      )}
      {afficherCoordonnees && (
        <div>
          <h2>Mes Coordonnées</h2>
          <p>Email: daoudagary92@gmail.com</p>
          <p>Téléphone Portable: 06 14 17 68 83</p>
          <ContactForm />
        </div>
      )}
    </div>
  );
}

export default App;
