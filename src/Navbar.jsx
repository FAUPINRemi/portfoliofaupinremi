import React from "react"; import { BrowserRouter, Route, Link, useEffect, useRef  } from "react-router-dom";
import './App.css'; // Import your CSS file
function Navbar(){
    return(
        <div class="wrapper">
        <header>
           <nav>
              <div class="menu-icon">
                 <i class="fa fa-bars fa-2x"></i>
              </div>
              <div class="logo">
                 <a href="index.html"><img id="imglogo" src="./public/img/logoportfolioblancsansfond.png" alt="logo_RémiFaupin"></img></a>
              </div>
              <div class="menu">
                 <ul>
                    <li><a href="#sectionapropos" class="nav-link">A propos</a></li>
                    <li><a href="#">Portoflio</a></li>
                    <li><a href="#">Contact</a></li>
                 
                    
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
    );
}