import { Link } from "react-router-dom";
import Cart from "../assets/icons/shopping-cart.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container">
        <Link to="">Home</Link>
        <Link to="sanctuaries">Santuarios</Link>
        <Link to="userInfo">informações usuário</Link>
        <Link to="login">login</Link>
        <Link to="cartPage">
        
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src={Cart} alt="cart" style={{width: "30px", height: "30px"}}/>
          </div>

        </Link>
      </div>
    </nav>
  );
}
