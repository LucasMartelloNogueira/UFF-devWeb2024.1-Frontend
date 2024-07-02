import { SanctuaryPetWithPetInfo } from "../types/SanctuaryPetWithPetInfo";
import DogImage from "../assets/photos/cachorro.jpg";
import CatImage from "../assets/photos/gato.jpg";
import DefaultAnimalImage from "../assets/photos/defaultAnimal.jpg";
import useEditPet from "../hooks/useEditPet";
import { FormEvent, useState } from "react";
import { PetDTO } from "../types/PetDTO";
import { useDeleteSanctuaryPet } from "../hooks/useDeleteSantuaryPet";
import useCartContext from "../contexts/CartContext";

type SanctuaryPetFormProps = {
  sanctuaryPet: SanctuaryPetWithPetInfo;
};

export default function SanctuaryPetForm({
  sanctuaryPet,
}: SanctuaryPetFormProps) {
  const { cart, addToCart, removeFromCart } = useCartContext();

  const checkIfInCart = (): boolean => {
    for (let item of cart!.sanctuaryPets) {
      if (item.id === sanctuaryPet.id) {
        return true;
      }
    }
    return false;
  }

  const [isActive, setIsActive] = useState(true);
  const [petName, setPetName] = useState(sanctuaryPet.pet.name);
  const [petAge, setPetAge] = useState(sanctuaryPet.pet.age);
  const [petWeight, setPetWeight] = useState(sanctuaryPet.pet.weight);
  const [petHeight, setPetHeight] = useState(sanctuaryPet.pet.height);
  const [petEstimatedMontlhyCosts, setPetEstimatedMontlhyCosts] = useState(
    sanctuaryPet.pet.estimateMonthlyCosts
  );
  const [showEditionAlert, setShowEditionAlert] = useState(false);
  const [isInCart, setIsInCart] = useState(checkIfInCart());

  const getAnimalImage = (name: string) => {
    const images = new Map<string, string>([
      ["cachorro", DogImage],
      ["gato", CatImage],
    ]);

    const img = images.get(name);

    return img !== undefined ? img : DefaultAnimalImage;
  };

  const {mutate: deleteSanctuaryPet} = useDeleteSanctuaryPet();

  const handleDeletion = (id: number) => {
    deleteSanctuaryPet(id);
    setIsActive(false);
  };

  const handleActionCart = (sanctuaryPet: SanctuaryPetWithPetInfo) => {
    isInCart ? removeFromCart([sanctuaryPet.id]) : addToCart([sanctuaryPet.id])
    setIsInCart(!isInCart);
  };

  const { mutate: editPet } = useEditPet();

  const handlePetEdition = (pet: PetDTO) => {
    editPet(pet, {
      onSuccess: (pet) => {
        sanctuaryPet.pet = pet;
      },
      onError: () => {
        alert("Erro ao atualizar pet");
        throw new Error("Erro ao atualizar pet");
      },
    });
  };

  const getPrimaryButtonState = () => {
    return "btn" + (isActive ? " btn-primary" : " btn-outline-primary");
  };

  const getDangerButtonState = () => {
    return "btn" + (isActive ? " btn-danger" : " btn-outline-danger");
  };

  const getCartButtonState = () => {
    let buttonClass: string = "btn ";

    let buttonState = "btn"
    buttonState += isActive ? "" : "-outline"
    buttonState += isInCart ? "-danger" : "-success"

    return buttonClass + buttonState;
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setShowEditionAlert(true);
    handlePetEdition({
      id: sanctuaryPet.pet.id,
      name: petName,
      animal: sanctuaryPet.pet.animal,
      age: petAge,
      weight: petWeight,
      height: petHeight,
      estimateMonthlyCosts: petEstimatedMontlhyCosts,
    });
  };

  return (
    <form onSubmit={(e) => submit(e)} autoComplete="Off">
      {isActive ? (
        <>
          {showEditionAlert ? (
            <div
              className="alert alert-primary alert-dismissible fade show"
              role="alert"
            >
              <div>Pet editado com sucesso</div>
              <button
                id="editionAlert"
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <div>Pet removido do santuário com sucesso</div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <div className="d-flex">
        <img src={getAnimalImage(sanctuaryPet.pet.animal)} alt="foto animal" />

        <div
          className="d-flex flex-column justify-content-evenly"
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          <div>
            <label
              htmlFor="id"
              style={{ minWidth: "50px", marginRight: "5px" }}
            >
              id
            </label>
            <input
              type="text"
              placeholder={sanctuaryPet.pet.id.toString()}
              value={sanctuaryPet.pet.id}
              id="id"
              disabled
            />
          </div>

          <div>
            <label
              htmlFor="name"
              style={{ minWidth: "50px", marginRight: "5px" }}
            >
              nome
            </label>
            <input
              type="text"
              placeholder={petName}
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              id="name"
              disabled={!isActive}
            />
          </div>

          <div>
            <label
              htmlFor="animal"
              style={{ minWidth: "50px", marginRight: "5px" }}
            >
              animal
            </label>
            <input
              type="text"
              placeholder={sanctuaryPet.pet.animal}
              value={sanctuaryPet.pet.animal}
              id="animal"
              disabled
            />
          </div>
        </div>

        <div
          className="d-flex flex-column justify-content-evenly"
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          <div>
            <label
              htmlFor="age"
              style={{ minWidth: "50px", marginRight: "5px" }}
            >
              idade
            </label>
            <input
              type="text"
              placeholder={petAge.toString()}
              value={petAge}
              onChange={(e) => setPetAge(parseInt(e.target.value))}
              id="age"
              disabled={!isActive}
            />
          </div>

          <div>
            <label
              htmlFor="weight"
              style={{ minWidth: "50px", marginRight: "5px" }}
            >
              peso
            </label>
            <input
              type="text"
              placeholder={petWeight.toString()}
              value={petWeight}
              onChange={(e) => setPetWeight(parseFloat(e.target.value))}
              id="weight"
              disabled={!isActive}
            />
          </div>

          <div>
            <label
              htmlFor="height"
              style={{ minWidth: "50px", marginRight: "5px" }}
            >
              altura
            </label>
            <input
              type="text"
              placeholder={petHeight.toString()}
              value={petHeight}
              onChange={(e) => setPetHeight(parseFloat(e.target.value))}
              id="height"
              disabled={!isActive}
            />
          </div>

          <div>
            <label
              htmlFor="costs"
              style={{ minWidth: "50px", marginRight: "5px" }}
            >
              custos/mês
            </label>
            <input
              type="text"
              placeholder={petEstimatedMontlhyCosts.toString()}
              value={petEstimatedMontlhyCosts}
              onChange={(e) =>
                setPetEstimatedMontlhyCosts(parseFloat(e.target.value))
              }
              id="costs"
              disabled={!isActive}
            />
          </div>
        </div>
      </div>
      <div className="d-flex" style={{ marginTop: "10px" }}>
        <>
          <button
            className={getPrimaryButtonState()}
            style={{ marginRight: "5px" }}
            disabled={!isActive}
            type="submit"
          >
            editar
          </button>
          <button
            className={getDangerButtonState()}
            style={{ marginRight: "5px" }}
            disabled={!isActive}
            onClick={() => handleDeletion(sanctuaryPet.id)}
          >
            excluir
          </button>
          <button
            className={getCartButtonState()}
            style={{ marginRight: "5px" }}
            disabled={!isActive}
            onClick={(e) => {
              e.preventDefault();
              handleActionCart(sanctuaryPet)
            }}
          >
            {isInCart ? "Remover do carrinho" : "adicionar ao carrinho"}
          </button>
        </>
      </div>
    </form>
  );
}
