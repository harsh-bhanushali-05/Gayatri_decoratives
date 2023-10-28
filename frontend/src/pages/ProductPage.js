import "../components/productPage/TitleStyles.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "../components/productPage/image";
import { useLocation } from "react-router-dom";
import Title from "../components/productPage/Title";
import Axios from "axios";
import { useEffect, useState } from "react";
function ProductPage() {
  const location = useLocation();
  const currentURL = location.pathname; // Current URL path
  const urlParts = currentURL.split("/");
  const category = urlParts[urlParts.length - 1];
  const decodedValue = decodeURIComponent(category);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function f() {
      Axios.get(`/API/Products/${decodedValue}`)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    f();
  }, []);
  const img = [
    products.img1,
    products.img2,
    products.img3,
    products.img4,
    products.img5,
  ];
 
  return (
    <div>
      <h1></h1>
      <Grid
        container
        rowSpacing={1}
        columns={{ xs: 4, sm: 8, md: 24 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid md={1}></Grid>
        <Grid md={10}>
          <Image images={img} />
        </Grid>
        <Grid md={1}></Grid>
        <Grid md={8}><Title buyLink={products.buyLink} mrp={products.mpr} price={products.price} title={products.title} description={products.description}/></Grid>
        <Grid xs={5}></Grid>
        <Grid xs={6}></Grid>
      </Grid>
      <Grid
        container
        rowSpacing={3}
        columns={{ xs: 4, sm: 8, md: 24 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid xs={24}><h1 className="line-through"></h1></Grid>
        <Grid xs={24}><h1 className="line-through-clear"></h1></Grid>
        <Grid xs={24}><h1 className="line-through-clear"></h1></Grid>
        <Grid xs={24}><h1 className="line-through-clear"></h1></Grid>
        <Grid xs={24}><h1 className="line-through-clear"></h1></Grid>
      </Grid>
    </div>
  );
}
export default ProductPage;
