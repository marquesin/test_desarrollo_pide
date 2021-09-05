import React, { useContext, useState } from "react";
import "./HeaderCategoryProduct.css";
import Test_Data from "../Data/Test_Data.json";
import { AppContext } from "../../Context/AppContext";

// En esta función vamos a filtrar las Categorías a mostrar considerando todas las condiciones
export default function HeaderCategoryProduct() {
  const { catActiva, setCatActiva } = useContext(AppContext);

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
  let categoriasMapeadas = categoriasFinal.map((c) => (
    <button
      className="buttonCategory"
      onClick={function (e) {
        setCatActiva(c.idCategoria);
      }}
      value={catActiva}
    >
      {c.nombreCat.toUpperCase()}
    </button>
  ));

  // Seleccionamos la primer categoría a visualizar
  if (catActiva === 0) {
    setCatActiva(categoriasFinal[0].idCategoria);
  }

  return (
    <>
      <div className="containerHeaderCategory">{categoriasMapeadas}</div>
    </>
  );
}
