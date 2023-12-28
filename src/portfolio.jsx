import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import portfolio from './portfolio';
 
import $ from 'jquery';


function App(){

    return (
        <>
     
    
        <div className="wrapper">
              <header>
                <nav>
                  <div className="menu-icon">
                    <i className="fa fa-bars fa-2x"></i>
                  </div>
                  <div className="logo">
                    <a href="index.html"><img id="imglogo" src="./img/logoportfolioblancsansfond.png" alt="logo_RémiFaupin"></img></a>
                  </div>
                  <div className="menu">
                    <ul>
                      <li></li>
                      <li><Link to="./Accueil">Acceuil</Link></li>
                      
                    </ul>
                     <div class="toggleswitch">
                   <label class="switch">
                    <input type="checkbox" onclick="darklight()"></input>
                    <span class="slider"></span>
                  </label>
                </div>
                </div>
                </nav>
                </header>
                </div>

              
        </>
    
    );}
    
      
    
    
    
    export default App;
    

