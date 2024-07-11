import { SanctuaryPetWithPetInfo } from "../types/SanctuaryPetWithPetInfo";
import DogImage from "../assets/photos/cachorro.jpg";
import CatImage from "../assets/photos/gato.jpg";
import DefaultAnimalImage from "../assets/photos/defaultAnimal.jpg";
import { Link } from "react-router-dom";


type SanctuaryPetCardProps = {
    sanctuaryPet: SanctuaryPetWithPetInfo;
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
            <div className="card" style={{width: "300px", margin: "10px"}}>
                <img src={getAnimalImage(sanctuaryPet.pet.animal)} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{sanctuaryPet.pet.name}</h5>
                    <div>
                        <p style={{margin: "0"}}>Observações: {sanctuaryPet.observations}</p>
                        <p style={{margin: "0", marginBottom: "10px"}}>Estimativa custos mensais: <strong>R${sanctuaryPet.pet.estimateMonthlyCosts}</strong></p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary" >
                            <Link to="../SanctuaryPetPage" state={{sanctuaryPet: sanctuaryPet }} style={{textDecoration: "none", color: "white"}}>ver mais</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}