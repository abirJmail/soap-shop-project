import React from "react";
import '../Header/Header.css';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return <div className="NavBar">
          <Link to="/"><p>  ACCUEIL</p></Link>
        <Link className="Link" to="/Boutique"><p> BOUTIQUE </p></Link> 
      <Link to="/Contact"><p> 
  CONTACT</p></Link>


  </div>;
};

export default NavBar;
