import Axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCardMob from "./ProductCardMob";
import "./ProdsStyles.css";
function NewArrivalsMob() {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0); // To track the current page number
  const productsPerPage = 12; // Number of products to show per page

  useEffect(() => {
    async function fetchData() {
      try {
        // const u="https://gayatri-decoratives.onrender.com";
        const response = await Axios.get("/API/Products/New");
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
      {" "}
      <h1 className="title-prod">New Arrivals</h1>
      <div className="prodCard-align">
        <div>
          {displayedProducts.map((element, index) => {
            return (
              <ProductCardMob
                key={index}
                id={element._id}
                image={element.img1}
                title={element.title}
                price={element.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default NewArrivalsMob;
