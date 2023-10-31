import 'animate.css';
import Axios from "axios";
import "../components/CatStyles.css";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

function NewArrivalsHome(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function f() {
      // const u="https://gayatri-decoratives.onrender.com";
      Axios.get("/API/Products/New")
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
    <center><h1 className="solve heading">{props.path}</h1></center>
      <center>
      <Grid style={{margin:"5%" }}
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 10 }}
      >
        {products.map((element, index) => {
            if(index>4)
            return;
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
      </center>
    </div>
  );
}
export default NewArrivalsHome;
