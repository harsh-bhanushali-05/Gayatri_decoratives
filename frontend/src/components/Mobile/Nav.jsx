import HamMenu from "./HamMenu";
import "./NavStyles.css";
import {Link} from "react-router-dom";
function Nav() {
  return (
    <div className="navbar">
      <Link to="/"><div className="logo"> Gayatri Decoratives </div></Link>
        <HamMenu/>
        <div className="divider"></div> 
    </div>
  );
}
export default Nav;
