import axios from "axios";
import { BASE_URL, LOGIN_URL } from "../utils/Constants";
import { UserCredentials } from "../types/UserCredentials";
import { UserLoginResponse } from "../types/UserLoginResponse";
import CustomError from "../utils/CustomError";

const useAuthAPI = () => {

    const axiosInstance = axios.create({
        baseURL: BASE_URL
    });

    const login = (userCredentials: UserCredentials) => axiosInstance
        .post<UserLoginResponse>(LOGIN_URL, userCredentials)
        .then((response) => response.data)
        .catch((error) => {
            if (error.response) {
                throw new CustomError(
                    error.response.data.message,
                    error.response.data.errorCode);
            }
            else if(error.request) {
                throw error;
            }
            else {
                throw error;
            }
        })

    return { login }
}

export default useAuthAPI;