import { useState } from "react";
import useLogin from "../hooks/useLogin";
import useUserStore from "../store/UserStore";
import { UserLoginResponse } from "../types/UserLoginResponse";
import { useNavigate } from "react-router-dom";

type LoginFormProps = {
    nextPage: string
}


export default function LoginForm({nextPage} : LoginFormProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const user = useUserStore();
  const { mutateAsync: login } = useLogin();
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userLoginInfo: UserLoginResponse = await login({
      username: username,
      password: password,
    });
    user.setUsuarioLogado(userLoginInfo.token);
    navigate(nextPage);
  };

  console.log("next page: ",  nextPage);

  return (
    <form
      style={{
        width: "300px",
        height: "450px",
        padding: "10px",
        borderStyle: "solid",
        borderRadius: "25px",
        borderWidth: "1px",
        boxShadow: "4px 6px #888888",
      }}
      onSubmit={onSubmit}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="d-flex flex-column">
        <label htmlFor="username">username</label>
        <input
          style={{ width: "200px" }}
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="Off"
        />
      </div>

      <div className="d-flex flex-column">
        <label htmlFor="password">senha</label>
        <input
          style={{ width: "200px" }}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="Off"
        />
      </div>

      <div className="d-flex flex-column align-items-center">
        <button
          className="btn btn-primary"
          style={{ marginTop: "10px", width: "75px" }}
          type="submit"
        >
          entrar
        </button>
      </div>
    </form>
  );
}
