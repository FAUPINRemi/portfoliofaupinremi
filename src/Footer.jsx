import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Footer() {

  return (
    <footer>
    <div className="txtcopy">
    <p>Site conçu et réalisé par Rémi FAUPIN</p>
    <p className="toutdroit">© Tous droit réservé - 2023</p>
    <div className="iconrs">
      <img className="inconrsimg" src="./img/icongithubblanc.png" alt="github"></img>
      <img className="inconrsimg" src="./img/linkedinblanc.png" alt="linkedin"></img>
    </div>
    </div>
    </footer>
  );
}

export default Footer;
