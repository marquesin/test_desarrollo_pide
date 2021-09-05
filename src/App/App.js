import Banner from "../Components/Banner/Banner";
import ComponentRecyclable from "../Components/Container products/ComponentRecyclable";
import HeaderCategoryProduct from "../Components/Header Category Product/HeaderCategoryProduct";
import Header from "../Components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <HeaderCategoryProduct />
      <ComponentRecyclable />
    </div>
  );
}

export default App;
