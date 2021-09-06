import React, { useContext } from "react";
import Test_Data from "../Data/Test_Data.json";
import "./ProductList.css";
import { AppContext } from "../../Context/AppContext";
import heart from "./Icons/heart-solid.svg";
import share from "./Icons/share-alt-solid.svg";

// Función que renderiza los productos a mostrar
export default function ProductList() {
  // Traemos la variable catActiva usando useContext
  const { catActiva } = useContext(AppContext);

  // Filtramos los productos activos y de la categoría seleccionada
  let productos = Object.values(Test_Data.Productos);
  let listaDeProductos = productos.filter(
    (producto) => producto.status === true && producto.idCategoria === catActiva
  );

  // Mapeamos los productos ya filtrados anteriormente
  let productosMapeados = listaDeProductos.map((producto) => (
    <div className="containerProduct">
      <div className="containerImageProduct">
        <img
          src={producto.imagenProducto}
          alt={producto.nombreProducto}
          className="ImagenDeProducto"
        />
      </div>
      <div className="containerInfoProduct">
        <h2> {producto.nombreProducto.toUpperCase()}</h2>
        <p>{producto.descriProducto.toUpperCase()}</p>

        <div className="priceProduct">
          $
          {producto.oferta === true
            ? producto.precioOferta
            : producto.precioProducto}
        </div>
      </div>
      <div className="containerButtonProduct">
        <button className="buttonProduct">+</button>
        <button className="buttonProduct">-</button>
        <button className="buttonProduct">
          <img src={heart} alt="button heart" className="iconButtonProduct" />
        </button>
        <button className="buttonProduct">
          <img src={share} alt="button share" className="iconButtonProduct" />
        </button>
      </div>
    </div>
  ));
  return <div className="containerListProduct">{productosMapeados}</div>;
}
