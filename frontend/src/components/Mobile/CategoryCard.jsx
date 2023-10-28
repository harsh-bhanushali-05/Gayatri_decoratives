import "./Categorystyles.css";
import { Link } from 'react-router-dom';
function CategoryCard(props) {
  return (
    <Link to={"{CatMob/}+"+props.title}>
    <div className="CatCard">
      <img className="image-description " src={props.image} />
      <h1>{props.title}</h1>
    </div></Link>
  );
}
export default CategoryCard;
