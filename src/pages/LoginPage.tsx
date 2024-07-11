import { useLocation } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {

  const location = useLocation();
  const nextPage = location?.state?.nextPage || "/";
  
  return (
    <>
      <h1 className="text-center">Bem vindo de volta!</h1>
      <div
        style={{
          height: "500px",
          borderRadius: "15px",
          borderStyle: "",
          borderColor: "grey",
        }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="">
          <LoginForm nextPage={nextPage}/>
        </div>
      </div>
    </>
  );
}
