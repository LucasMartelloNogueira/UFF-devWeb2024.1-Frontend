import { SanctuaryPetWithPetInfo } from "../types/SanctuaryPetWithPetInfo";
import DogImage from "../assets/photos/cachorro.jpg";
import CatImage from "../assets/photos/gato.jpg";
import DefaultAnimalImage from "../assets/photos/defaultAnimal.jpg";



type SanctuaryPetCardProps = {
    sanctuaryPet: SanctuaryPetWithPetInfo
} 

export default function SanctuaryPetCard({sanctuaryPet}: SanctuaryPetCardProps) {

    const getAnimalImage = (name: string) => {
        
        const images = new Map<string, string>([
            ["cachorro", DogImage],
            ["gato", CatImage]
        ]);

        const img = images.get(name);
        
        return img !== undefined ? img : DefaultAnimalImage;
    }

    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <img src={getAnimalImage(sanctuaryPet.pet.animal)} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{sanctuaryPet.pet.name}</h5>
                    <p className="card-text">Observações: {sanctuaryPet.observations}</p>
                    <button className="btn btn-primary">adotar</button>
                </div>
            </div>
        </>
    );
}