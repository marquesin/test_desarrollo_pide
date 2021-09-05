import React from "react";
import Test_Data from "../Data/Test_Data.json";
import "./ComponentRecyclable.css";

export default function ComponentRecyclable() {
  let productos = Object.values(Test_Data.Productos);
  let listaDeProductos = productos.map((producto) => (
    <>
      {producto.status === true ? (
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
      ) : (
        ""
      )}
    </>
  ));
  return (
    <div>
      <p>{listaDeProductos}</p>
    </div>
  );
}
ComponentRecyclable();
export let listaDeProductos;
