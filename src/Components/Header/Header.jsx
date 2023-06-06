import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
import { Link } from 'react-router-dom';
const Header = () => {
  return <div className="Header">
<div className="delevery">
    <p>LA LIVRAISON EST GRATUITE POUR TOUTE COMMANDE DE PLUS DE 100$.</p>
    <button>close</button>
</div>
<div className="logos">
    <div className="logo"><img src="https://images.panierdachat.app/68/OwW0mp2s_logo-savonnerie-paysanne-102be223-1cbe-485f-ba39-aec31b142faf.png?w=500&h=105&fit=max" alt="logo" /></div>
    <Link className="Link" to="/Account"><p> Account </p></Link> 
</div>
<div className="menu">
    <div className="serch">
    <label htmlFor="">Recherche</label>
    <input id="searchbar" onkeyup="" type="text"
        name="search" placeholder=""/>
    </div>
<NavBar/>
<div className="shoopingLogp">
<Link className="Link" to="/Panier"><p> panier </p></Link> 
    <button>0</button>
</div>

</div>

    </div>;
};

export default Header;
