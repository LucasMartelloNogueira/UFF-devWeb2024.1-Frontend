import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/Constants";
import CustomError from "../utils/CustomError";
import { PageResult } from "../types/PageResult";


const useAPI = <T>(endpoint: string) => {

    const axiosInstance = axios.create({
        baseURL: BASE_URL
    });

    const get = (id: number) => axiosInstance
        .get<T[]>(`${endpoint}/${id}`)
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

    const remove = (id: number) => axiosInstance
        .delete<T>(`${endpoint}/${id}`)
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

    const getPaginated = (config: AxiosRequestConfig) => axiosInstance
        .get<PageResult<T>>(endpoint, config)
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

    const post = (obj: T) => axiosInstance
        .post<T>(endpoint, obj)
        .then((response) => response.data)
        .catch((error) => {
            console.log(error.response);
            if (error.response) {
                throw new CustomError(
                    error.response.data.message,
                    error.response.data.errorCode,
                    Object.values(error.response.data.map));
            }
            else if(error.request) {
                throw error;
            }
            else {
                throw error;
            }
        })

        const put = (obj: T) => axiosInstance
        .put<T>(endpoint, obj)
        .then((response) => response.data)
        .catch((error) => {
            console.log(error.response);
            if (error.response) {
                throw new CustomError(
                    error.response.data.message,
                    error.response.data.errorCode,
                    Object.values(error.response.data.map));
            }
            else if(error.request) {
                throw error;
            }
            else {
                throw error;
            }
        })

        const patch = (obj: T) => axiosInstance
        .patch<T>(endpoint, obj)
        .then((response) => response.data)
        .catch((error) => {
            console.log(error.response);
            if (error.response) {
                throw new CustomError(
                    error.response.data.message,
                    error.response.data.errorCode,
                    Object.values(error.response.data.map));
            }
            else if(error.request) {
                throw error;
            }
            else {
                throw error;
            }
        })


    return {get, remove, getPaginated, post, put, patch}    
}
export default useAPI