import React from "react";
import "./Header.css";
import bars from "./Img/Icon/bars-solid.svg";
import cart from "./Img/Icon/shopping-cart-solid.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={bars} alt="Icono de menú" className="iconBar" />
      <p className="iconP">P</p>
      <img src={cart} alt="Icono de carrito" className="iconCart" />
    </header>
  );
}
