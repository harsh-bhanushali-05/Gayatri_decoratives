import Axios from "axios";
import "../components/CatStyles.css";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Grid from "@mui/material/Unstable_Grid2";
import ReactPaginate from "react-paginate";

function Products(props) {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0); // To track the current page number
  const productsPerPage = 12; // Number of products to show per page

  useEffect(() => {
    async function fetchData() {
      try {
        const u="https://gayatri-decoratives.onrender.com";
        const response = await Axios.get(u+"/API/Products/");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const pageCount = Math.ceil(products.length / productsPerPage); // Calculate the total number of pages

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayedProducts = products.slice(
    pageNumber * productsPerPage,
    (pageNumber + 1) * productsPerPage
  );

  return (
    <div>
      <center>
        <h1 className="solve heading">{props.path}</h1>
      </center>
      <Grid style={{margin:"5%" }}
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {displayedProducts.map((element, index) => {
          console.log(element.title);
          return (
            <ProductCard
              key={index}
              id={element._id}
              image={element.img1}
              title={element.title}
              price={element.price}
            />
          );
        })}
      </Grid>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          pageLinkClassName={"pagination__link"} // Add this line to apply styles to page numbers
          breakLabel={"..."}
          breakClassName={"pagination__item"}
          pageClassName={"pagination__item"}
          activeClassName={"pagination__item--selected"} // Add this line to apply styles to the selected page number
        />
      </div>
    </div>
  );
}

export default Products;
