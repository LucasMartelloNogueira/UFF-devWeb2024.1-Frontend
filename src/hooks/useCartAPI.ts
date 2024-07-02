import axios from "axios";
import { UpdateCartDTO } from "../types/UpdateCartDTO"
import { BASE_URL, CART_ADD_URL, CART_REMOVE_URL, CART_URL } from "../utils/Constants";
import CustomError from "../utils/CustomError";
import { CartWithPetsInfoDTO } from "../types/CartWithPetsInfoDTO";

const useCartAPI = () => {

    const axiosInstance = axios.create({
        baseURL: BASE_URL
    });

    const getCart = (id: number) => axiosInstance
        .get<CartWithPetsInfoDTO>(`${CART_URL}/${id}`)
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

    const addToCart = async (updateCartDTO: UpdateCartDTO): Promise<CartWithPetsInfoDTO> => axiosInstance
        .post<CartWithPetsInfoDTO>(CART_ADD_URL, updateCartDTO)
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

    const removeFromCart = async (updateCartDTO: UpdateCartDTO): Promise<CartWithPetsInfoDTO> => axiosInstance
    .post<CartWithPetsInfoDTO>(CART_REMOVE_URL, updateCartDTO)
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

    return {getCart, addToCart, removeFromCart}
     
}

export default useCartAPI;