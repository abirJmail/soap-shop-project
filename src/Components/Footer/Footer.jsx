import React from "react";
import './Footer.css'
const Footer = () => {
  return <div className="Footer" >

      <div className="navfooter">
        <span>  Termes et conditions</span>
        <span>Confidentialité</span>
        <span>Politique d'expédition</span>
        <span>Contact</span>
      </div> 
      <hr  className="HrFooter" />
      <div>
      © 2023 Savonnerie la Paysanne Tous droits réservés.
      </div> 
    </div>;
};

export default Footer;
