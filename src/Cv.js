// Cv.js
import React from 'react';

const Cv = () => {
  return (
    <div>
      <h2>Mon CV</h2>
      <p>Nom: Gary Daouda</p>
      <p>Expérience: Plusieurs stages en milieu professionnel au cumulé 5 mois et deux semaines</p>
      <p>Compétence: Soudure sur câble ethernet, Réalisation de circuit électrique, Lecture schéma électrique, Démonter et remonter un ordinateur, Réalisation d'un câble RJ45</p>
      <p>Atout: Autonome, Ponctuel, Persévérant, Esprit d'équipe</p>
      <p>Centre d'intérêt: Rugby, Anime, Webtoon, Jeux vidéos</p>

      {/* Section pour le niveau en anglais */}
      <h3>Niveau en anglais</h3>
      <div className="progress-bar">
        <div className="progress-level" style={{ width: '65%' }}></div>
      </div>

      {/* Section pour le niveau en codage */}
      <h3>Android Studio en Python</h3>
      <div className="progress-bar">
        <div className="progress-level" style={{ width: '50%' }}></div>
      </div>

      {/* Section pour une autre compétence */}
      <h3>Android Studio en Kotlin</h3>
      <div className="progress-bar">
        <div className="progress-level" style={{ width: '45%' }}></div>
      </div>
    </div>
  );
};

export default Cv;
