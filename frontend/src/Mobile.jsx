import Nav from "./components/Mobile/Nav";
import mobile from "./mobile2.png";
import { ChakraProvider } from "@chakra-ui/react";
import "./MobileStyles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CatRender from "./components/Mobile/CatRender";
import Footer from "../src/components/Footer";
import ProductPage from "./components/Mobile/ProductPage"; 
import Home_mobile from "./pages/Home_mobile";
import NewArrivalsMob from "./components/Mobile/NewArrivalsMob";
import AllProdsMob from "./components/Mobile/AllProdsMob";
function MobileComponent() {
  return (
    <ChakraProvider>
    <Router>
        <Nav />
        <Routes>
        <Route path="/" element={<Home_mobile />} />
        <Route path="/NewArrivalsMob" element={<NewArrivalsMob />} />
        <Route path="/AllProdsMob" element={<AllProdsMob title = " All Products" />} />
        <Route path={"/Mob/:id"} element={<ProductPage/>}/>
      </Routes>
    <Footer/>
    </Router>
    </ChakraProvider>
  );
}
export default MobileComponent;
