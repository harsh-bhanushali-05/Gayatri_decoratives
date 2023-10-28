import React from 'react';
import './ProductCard.css'; // Make sure to create this CSS file
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
const ProductCard = (props) => {
  return (<Grid xs={2} sm={4} md={2} key={props.index}>
  <Link to={`/${props.id}`} style={{ color:'black', textDecoration: 'none' }}>
    <div className="product-card">
      <div className="product-image">
        <img src={props.image} alt={props.title} /> 
      </div>
      <div className="product-info">
        <h3 className="product-title" style={{ textDecoration: 'none' }}>{props.title}</h3>
        <p className="product-price" style={{ textDecoration: 'none' }}>₹{props.price}</p>
      </div>
    </div>
    </Link>
    </Grid>
  );
};

export default ProductCard;
