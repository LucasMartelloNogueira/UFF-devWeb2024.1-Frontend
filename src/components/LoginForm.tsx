import { FormEvent, useState } from "react"
import useLogin from "../hooks/useLogin";
import useUserStore from "../store/UserStore";
import { UserLoginResponse } from "../types/UserLoginResponse";

export default function LoginForm(){

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const user = useUserStore();
    const {mutateAsync: login} = useLogin();

    const onSubmit = async () => {
        const userLoginInfo: UserLoginResponse = await login({username: username, password: password});
        user.setUsuarioLogado(userLoginInfo.token);
    }

    return (
        <form action="">
            <div>
                <label htmlFor="username">username</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div>
                <label htmlFor="password">senha</label>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div>
                <button onClick={() => onSubmit()}>entrar</button>
            </div>
        </form>
    );
}