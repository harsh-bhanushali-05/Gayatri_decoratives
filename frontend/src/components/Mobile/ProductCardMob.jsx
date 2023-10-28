import "./ProdsStyles.css";
import { Link } from 'react-router-dom';
function ProductCardMob(props){
    return <Link className="widthCard" to={`/Mob/${props.id}`}>
    <div>
    <div className="product-card">
      <div className="product-image">
        <img src={props.image} alt={props.title} /> 
      </div>
      <div className="product-info">
        <h3 className="product-title" style={{ textDecoration: 'none' }}>{props.title}</h3>
        <p className="product-price" style={{ textDecoration: 'none' }}>₹{props.price}</p>
      </div>
    </div>
    </div>
    </Link>
}
export default ProductCardMob;