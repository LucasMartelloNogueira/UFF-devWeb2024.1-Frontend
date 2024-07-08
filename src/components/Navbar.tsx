import { Link } from "react-router-dom";
import Cart from "../assets/icons/shopping-cart.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">Home</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="sanctuaries">Santuarios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="userInfo">informações usuário</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="login">login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="cartPage">
                <img src={Cart} alt="cart" style={{width: "30px", height: "30px"}}/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
