import React from "react";
import Banner from "../Components/Banner/Banner";
import ProductList from "../Components/Container products/ProductList";
import HeaderCategoryProduct from "../Components/Header Category Product/HeaderCategoryProduct";
import Header from "../Components/Header/Header";
import "./App.css";
import { AppProvider } from "../Context/AppContext";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Header />
        <Banner />
        <HeaderCategoryProduct />
        <ProductList />
      </AppProvider>
    </div>
  );
}

export default App;
