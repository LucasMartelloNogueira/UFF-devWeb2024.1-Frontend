import axios from "axios";
import { BASE_URL, SANCTUARY_PETS_ALL_BY_SANCTUARY_ID_URL } from "../utils/Constants";
import { SanctuaryPetsWithPetInfoListDTO } from "../types/SanctuaryPetsWithPetInfoListDTO";
import CustomError from "../utils/CustomError";
import { useQuery } from "@tanstack/react-query";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

const getSanctuaryPetBySanctuaryId = (id: number) =>
    axiosInstance
      .get<SanctuaryPetsWithPetInfoListDTO>(`${SANCTUARY_PETS_ALL_BY_SANCTUARY_ID_URL}/${id}`)
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

export const useSanctuaryPetsBySanctuaryId = (id: number) => {
    return useQuery({
        queryKey: ["sanctuaryPet", "sanctuaryId", id],
        queryFn: () => getSanctuaryPetBySanctuaryId(id),
        staleTime: 10_000,
    });
}