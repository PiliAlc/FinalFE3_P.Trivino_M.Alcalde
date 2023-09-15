// import React from 'react'
import { Link } from "react-router-dom";
import ThemeContext from './utils/theme.context';
import { useContext } from "react";




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme , handleChangeTheme, } = useContext(ThemeContext);
  

  return (
    <nav className="barraNavegacion" >
      <p>FFE3</p>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className="rutas">
        <Link className="linksNavegacion" to="/" >Inicio</Link>
        <Link className="linksNavegacion" to="/favs" >Favoritos</Link>
        <Link className="linksNavegacion" to="/contact" >Contacto</Link>
      </div>

      <button onClick={handleChangeTheme} style={{background: theme.background, color:theme.font}}>Cambiar Tema</button> 
    </nav>
  )
}

export default Navbar