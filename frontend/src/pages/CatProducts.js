import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Axios from "axios";
import "../components/CatStyles.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
function CatProducts(props) {
  const location = useLocation();

  // Access various properties of the location object
  const currentURL = location.pathname; // Current URL path
  const urlParts = currentURL.split("/");
  const category = urlParts[urlParts.length - 1];
  const decodedValue = decodeURIComponent(category);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function f() {
      Axios.get("/API/Products/cat/" + decodedValue)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    f();
  }, []);
  return (
    <div>
      <center>
        <h1 className="heading solve">{decodedValue}</h1>
      </center>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((element, index) => {
          console.log(element.title);
          return (
            <ProductCard
              index={index}
              id={element._id}
              image={element.img1}
              title={element.title}
              price={element.price}
            />
          );
        })}
      </Grid>
    </div>
  );
}
export default CatProducts;
