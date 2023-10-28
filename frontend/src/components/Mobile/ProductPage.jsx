import Axios from "axios";
import { useLocation } from "react-router-dom";
import "./prodpagestyles.css";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
function ProductPage() {
  const location = useLocation();
  const currentURL = location.pathname;
  const urlParts = currentURL.split("/");
  const category = urlParts[urlParts.length - 1];
  const decodedValue = decodeURIComponent(category);
  const [products, setProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Axios.get(`/API/Products/${decodedValue}`);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [decodedValue]);

  const img = [
    products.img1,
    products.img2,
    products.img3,
    products.img4,
    products.img5,
  ];

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };
  const filteredImages = img.filter((imageUrl) => imageUrl !== null && imageUrl !== undefined && imageUrl!="");
  return (
    <div>
      <h1 className="TitleProdPage">{products.title}</h1>
      <div className="ImageContainer">
        <img className="mainImage" src={img[selectedImage]} alt={products.title} />
        <div className="ThumbnailImages">
          {filteredImages.map((element, index) => (
            <img
              key={index}
              src={element}
              alt={products.title}
              className={'not'}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
      <h2 className="desc">{products.description}</h2>
      <div className="Price">
      <h3><span className="mrp">₹{products.mpr}</span><span className="actualPrice">₹{products.price}</span></h3>
      <h2></h2>
      </div>
      <center>
      <Link className="buyit" to={products.buyLink}>
      <button className="buyit button-buy-now"><h2>
            Buy it on Amazon <i class="fa-brands aaa fa-amazon"></i>
          </h2></button>
      </Link></center>
    </div>
  );
}

export default ProductPage;
