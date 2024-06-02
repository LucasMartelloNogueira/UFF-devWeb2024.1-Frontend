import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="container" style={{marginTop: "50px"}}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
export default Layout;
