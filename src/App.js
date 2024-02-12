// App.js
import React, { useState } from 'react';
import Button from './Button.js';
import Cv from './Cv';

function App() {
  const [afficherCV, setAfficherCV] = useState(false);
  const [afficherDiplomes, setAfficherDiplomes] = useState(false);
  const [afficherCoordonnees, setAfficherCoordonnees] = useState(false);
  const [buttonColor, setButtonColor] = useState('#4caf50'); // Couleur par défaut
  const fileName = 'CVDaouda_Gary';
  const fileContent = 'CV';

  const handleClickAfficherCV = () => {
    setAfficherCV(true);
    setAfficherDiplomes(false);
    setAfficherCoordonnees(false);
    setButtonColor('Blanc'); // Remettre la couleur par défaut
  };

  const handleClickAfficherDiplomes = () => {
    setAfficherDiplomes(true);
    setAfficherCV(false);
    setAfficherCoordonnees(false);
    setButtonColor('Bleu'); // Remettre la couleur par défaut
  };

  const handleClickAfficherCoordonnees = () => {
    setAfficherCoordonnees(true);
    setAfficherCV(false);
    setAfficherDiplomes(false);
    setButtonColor('#FF0000'); // Remettre la couleur par défaut
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Bonjour je m'appelle Daouda, vous êtes sur mon site qui vous permet d'accéder à mon cv et autres informations à mon sujet. </h1>

      {/* Bouton pour afficher le CV */}
      <Button
        text=" CV"
        onClick={handleClickAfficherCV}
        backgroundColor={afficherCV ? '' : buttonColor}
      />

      {' '}

      {/* Bouton pour afficher les diplômes */}
      <Button
        text=" Diplômes"
        onClick={handleClickAfficherDiplomes}
        backgroundColor={afficherDiplomes ? '#45a049' : buttonColor}
      />

      {' '}

      {/* Bouton pour afficher les coordonnées */}
      <Button
        text=" Coordonnées"
        onClick={handleClickAfficherCoordonnees}
        backgroundColor={afficherCoordonnees ? '#45a049' : buttonColor}
      />

      {/* Affichage conditionnel du CV, des diplômes ou des coordonnées */}
      {afficherCV && <Cv fileName={fileName} fileContent={fileContent} />}
      {/* Passe les variables fileName et fileContent au composant Cv */}
      {afficherDiplomes && (
        <div>
          {/* Contenu des diplômes */}
          <h2>Mes Diplômes</h2>
          <p>Brevet Mention Assez Bien</p>
          <p>ASSR2</p>
          {/* Ajoute d'autres diplômes si nécessaire */}
        </div>
      )}
      {afficherCoordonnees && (
        <div>
          {/* Contenu des coordonnées */}
          <h2>Mes Coordonnées</h2>
          <p>Email: daoudagary92@gmail.com</p>
          <p>Téléphone Portable: 06 14 17 68 83</p>
          {/* Ajoute d'autres coordonnées si nécessaire */}
        </div>
      )}
    </div>
  );
}

export default App;
