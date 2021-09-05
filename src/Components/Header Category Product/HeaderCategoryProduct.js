import React from "react";
import "./HeaderCategoryProduct.css";
import Test_Data from "../Data/Test_Data.json";

// En esta función vamos a filtrar las Categorías a mostrar considerando todas las condiciones
export default function HeaderCategoryProduct() {
  // Transformamos a Array las Categorías y Productos desde el JSON
  let categorias = Object.values(Test_Data.Categorias);
  let productos = Object.values(Test_Data.Productos);

  // Aquí filtramos todas las Categorías que son hijas de 'Comidas' (idCategoria=1)
  let categoriasHijas = categorias.filter((item) => item.catPadre === 1);

  // Aquí filtramos todas las Categorías que son nietas
  let categoriasNietas = categorias.filter((x) =>
    categoriasHijas.map((y) => y.idCategoria).includes(x.catPadre)
  );

  // Sumamos ambas listas
  let categoriasTotales = [].concat(categoriasHijas, categoriasNietas);

  // Ahora vamos a filtrar para que nos queden sólo las Categorías que tienen al menos 1 producto
  let categoriasFinal = categoriasTotales.filter((x) =>
    productos.map((y) => y.idCategoria).includes(x.idCategoria)
  );

  // En este momento mapeamos y renderizamos las Categorías finales
  let categoriasMapeadas = categoriasFinal.map((c) => <p>{c.nombreCat}</p>);

  return (
    <>
      <h1>{categoriasMapeadas}</h1>
    </>
  );
}
