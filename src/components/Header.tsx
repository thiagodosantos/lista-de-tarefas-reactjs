import React from 'react';
import './Header.css'
import logo from "./../assets/logo.png";


function Header() {
    return (
      <div className="header">
        <img src="https://oceanbrasil.com/assets/logo.svg" alt="Logo do Ocean" />
        <div className="header__links">
          <a href="#">Home</a>
          <a href="#">Criar</a>
        </div>
      </div>
    );
  }
  
  export default Header;