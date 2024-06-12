
import React from "react";
import { Link } from "react-router-dom";
function Header(){
  return(
    <div>
  <nav>
    
  <img src="Image.jsx/logo2.png" className="img"/>
 
    <ul> 
      <l1><a href="/">Home</a></l1>
      <l1><a href="/about">About</a></l1>
      <l1><a href="/contact">Contact</a></l1>
      <l1><a href="/services">Services</a></l1>
    </ul>
    <button className="btn">login</button>
    <div className="menu"></div>
    </nav>
    <div className="home-content">
      <h1>GIFT-TECH UI/UX DESIGNS</h1>
      <p> We design quality UI/UX Interface for companies, with Gift-Tech you dont have any problems as we will give you quality, Your satisfaction is our priority. </p>
            
            <p> <img  className="ui"  src="Image.jsx/pro5.png" alt="" /></p>

         
          
        </div>
    <div className="fillup"></div>
    
    </div>
    
  )
}

export default Header;