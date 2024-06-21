import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    
    const error = useRouteError();

    return (
        <>
          <h1>Erro</h1>
          {error}
        </>
    );
}