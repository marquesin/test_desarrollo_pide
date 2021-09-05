import React, { useContext } from "react";
import Test_Data from "../Data/Test_Data.json";
import "./ProductList.css";
import { AppContext } from "../../Context/AppContext";

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
    <>
      <div key={producto.idProducto}>
        <div>
          <img
            src={producto.imagenProducto}
            alt={producto.nombreProducto}
            className="ImagenDeProducto"
          />
        </div>
        <div>
          <h2> {producto.nombreProducto}</h2>
          <p>{producto.descriProducto}</p>
          <div>
            {producto.oferta === false
              ? producto.precioProducto
              : producto.oferta}
          </div>
        </div>
      </div>
    </>
  ));
  return (
    <div>
      <p>{productosMapeados}</p>
    </div>
  );
}
