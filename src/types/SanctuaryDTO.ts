import { UserSimplifiedDTO } from "./UserSimplifiedDTO"

export type SanctuaryDTO = {
    id: number,
    name: string,
    country: string,
    state: string,
    city: string,
    address: string,
    owner: UserSimplifiedDTO
}