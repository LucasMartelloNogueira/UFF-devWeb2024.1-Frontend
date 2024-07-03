import { Navigate, useLocation } from "react-router-dom";
import Layout from "./Layout";
import useUserStore from "../store/UserStore";

const PrivateRoutes = () => {
  const usuarioLogado = useUserStore((s) => s.usuarioLogado);
  const location = useLocation();

  if (usuarioLogado.length === 0) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  } else {
    return <Layout />;
  }
};

export default PrivateRoutes;
