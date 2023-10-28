import "./App.css";
import Navbar from "./components/Navbar";
import NewArrivals from "./pages/NewArrival";
import Products from "./pages/Products";
import CatProducts from "./pages/CatProducts";
import Navbarcom from "./components/Navbarcom";
import ProductPage from "./pages/ProductPage";
import Home from "./pages/Home";
import AddProd from "./pages/AddProd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
function Desktop(){

  return (
    <div className="App">
      <Router>
        <Navbarcom></Navbarcom>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/AllProducts"
            element={<Products path="All Products" />}
          />
          <Route path={"/Cat/:id"} element={<CatProducts />} />
          <Route path="/admin/AddProd" element={<AddProd />} />
          <Route path={"/:id"} element={<ProductPage />} />
          <Route path="/NewArrivals" element={<NewArrivals />} />
        </Routes>
        <h1></h1>
      
        <Footer></Footer>
      </Router>
    </div>
  );
}
export default Desktop;