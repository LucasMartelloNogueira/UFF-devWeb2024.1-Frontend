import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container">
        <Link to="" >Home</Link>
        <Link to="sanctuaries" >Santuarios</Link>
        <Link to="qa" >Perguntas frequentes</Link>
        <Link to="login" >login</Link>
      </div>
    </nav>
  );
}
