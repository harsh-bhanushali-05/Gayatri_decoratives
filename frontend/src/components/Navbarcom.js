import {Link} from "react-router-dom"
import "./NavbarStyles.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Grid from "@mui/material/Grid";
function Navbarcom() {
  return (
    <div className="nav">
    <Grid container spacing={2} >
      <Grid item xs={8} md={4}>
      <Link to="/"> <h1 className=" All_prods title">Gayatri Decoratives</h1></Link>
      </Grid>
      <Grid item xs={4} md={2}>

      </Grid>
      <Grid item xs={4} md={2} >
      <Link className="All_prods" to="/AllProducts"> <h2> All Products</h2></Link>
      </Grid>
      <Grid item xs={4} md={2}>
      
      <ScrollLink
        activeClass="active"
        to="category-section"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
      <Link className="All_prods" to="/"> <h2>Category</h2> 
      </Link> </ScrollLink>
      </Grid>
      <Grid item xs={4} md={2}>
      <Link className="All_prods" to="/NewArrivals"> <h2> New Arrivals</h2></Link>
      </Grid>

    </Grid></div>
  );
}
export default Navbarcom;
