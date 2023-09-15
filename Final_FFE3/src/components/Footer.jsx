// import React from 'react'

import imageFacebook from "../assets/facebook.png";
import imageInstagram from "../assets/instagram.png";
import imageTiktok from "../assets/tiktok.png";
import imageWhatsapp from "../assets/whatsapp.png";

const Footer = () => {

  return (
    <footer className="footer">       
      <p className="footerTexto">Final Front End - Pablo Triviño & Maria Pilar Alcalde</p>
      <div>
          <ul className="divIconos">
            <li>
                <a href="https://www.facebook.com/">
                <img className="footerIconos" src={imageFacebook} alt='facebook'/></a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                <img className="footerIconos" src={imageInstagram} alt='instagram' /></a>
              </li>
              <li>
                <a href="https://tiktok.com">
                <img className="footerIconos" src={imageTiktok} alt='tiktok' /></a>
              </li>
              <li>
                <a href="https://www.whatsapp.com/?lang=es_LA">
                <img className="footerIconos" src={imageWhatsapp} alt='whatsapp' /></a>
              </li> 
          </ul>
      </div>
        
    </footer>
  )
}

export default Footer
