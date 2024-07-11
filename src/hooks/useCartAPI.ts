import axios from "axios";
import { UpdateCartDTO } from "../types/UpdateCartDTO";
import {
  BASE_URL,
  CART_ADD_URL,
  CART_REMOVE_URL,
  CART_URL,
  UPDATE_CART_ITEM_QUANTITY_URL,
} from "../utils/Constants";
import CustomError from "../utils/CustomError";
import { CartWithPetsInfoDTO } from "../types/CartWithPetsInfoDTO";
import { UpdateCartItemsDTO } from "../types/UpdateCartItemsDTO";
import useUserStore from "../store/UserStore";

const useCartAPI = () => {
  const user = useUserStore();

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = user.usuarioLogado;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getCart = (id: number) =>
    axiosInstance
      .get<CartWithPetsInfoDTO>(`${CART_URL}/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        if (error.response) {
          throw new CustomError(
            error.response.data.message,
            error.response.data.errorCode
          );
        }
        throw error;
      });

  const addToCart = (updateCartDTO: UpdateCartDTO) =>
    axiosInstance
      .patch<CartWithPetsInfoDTO>(CART_ADD_URL, updateCartDTO)
      .then((response) => response.data)
      .catch((error) => {
        if (error.response) {
          throw new CustomError(
            error.response.data.message,
            error.response.data.errorCode
          );
        } else if (error.request) {
          throw error;
        } else {
          throw error;
        }
      });

  const removeFromCart = (updateCartDTO: UpdateCartDTO) =>
    axiosInstance
      .patch<CartWithPetsInfoDTO>(CART_REMOVE_URL, updateCartDTO)
      .then((response) => response.data)
      .catch((error) => {
        if (error.response) {
          throw new CustomError(
            error.response.data.message,
            error.response.data.errorCode
          );
        } else if (error.request) {
          throw error;
        } else {
          throw error;
        }
      });

  const updateCartItemQuantity = (updateCartItemsDTO: UpdateCartItemsDTO) =>
    axiosInstance
      .patch<CartWithPetsInfoDTO>(
        UPDATE_CART_ITEM_QUANTITY_URL,
        updateCartItemsDTO
      )
      .then((response) => response.data)
      .catch((error) => {
        if (error.response) {
          throw new CustomError(
            error.response.data.message,
            error.response.data.errorCode
          );
        } else if (error.request) {
          throw error;
        } else {
          throw error;
        }
      });

  return { getCart, addToCart, removeFromCart, updateCartItemQuantity };
};

export default useCartAPI;
