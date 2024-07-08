import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ErrorPage() {
    
    const error = useRouteError();

    return (
      <>
        <div className="layout">
          <Navbar />
          <div className="content">
            {isRouteErrorResponse(error) ? "Página requisitada inválida." :
            error instanceof Error ? error.message : "Erro desconhecido."}
          </div>
          <Footer />
        </div>
      </>
    );
}