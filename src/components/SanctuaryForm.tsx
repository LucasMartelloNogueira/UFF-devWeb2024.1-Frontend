import { useState, useEffect } from "react";
import { SanctuaryDTO } from "../types/SanctuaryDTO";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type SanctuaryFormProps = {
  sanctuary: SanctuaryDTO | undefined;
  selectSanctuary: (sanctuary: SanctuaryDTO | undefined) => void;
};

export default function SanctuaryForm({
  sanctuary,
  selectSanctuary,
}: SanctuaryFormProps) {
  const [isFormEdited, setIsFormEdited] = useState(false);

  const [sanctuaryName, setSanctuaryName] = useState("");
  const [sanctuaryOwnerName, setSanctuaryOwnerName] = useState("");
  const [sanctuaryAddress, setSanctuaryAddress] = useState("");
  const [sanctuaryCountry, setSanctuaryCountry] = useState("");
  const [sanctuaryState, setSanctuaryState] = useState("");
  const [sanctuaryCity, setSanctuaryCity] = useState("");

  useEffect(() => {
    if (sanctuary) {
      setSanctuaryName(sanctuary.name || "");
      setSanctuaryOwnerName(sanctuary.owner.name || "");
      setSanctuaryAddress(sanctuary.address || "");
      setSanctuaryCountry(sanctuary.country || "");
      setSanctuaryState(sanctuary.state || "");
      setSanctuaryCity(sanctuary.city || "");
    }
  }, [sanctuary]);

  const handleCancel = () => {
    setSanctuaryName("");
    setSanctuaryOwnerName("");
    setSanctuaryAddress("");
    setSanctuaryCountry("");
    setSanctuaryState("");
    setSanctuaryCity("");
    selectSanctuary(undefined);
    setIsFormEdited(false);
  };

  const schema = z.object({
    name: z
      .string()
      .min(1, { message: "nome deve ser informado" })
      .min(3, { message: "nome deve conter pelo menos 3 caracteres" }),
    owner: z
      .string()
      .min(1, { message: "dono deve ser informado" })
      .min(3, { message: "dono deve conter pelo menos 3 caracteres" }),
    address: z
      .string()
      .min(1, { message: "endereço deve ser informado" })
      .min(3, { message: "endereço deve conter pelo menos 3 caracteres" }),
    country: z
      .string()
      .min(1, { message: "país deve ser informado" })
      .min(3, { message: "país deve conter pelo menos 3 caracteres" }),
    state: z
      .string()
      .min(1, { message: "estado deve ser informado" })
      .min(3, { message: "estado deve conter pelo menos 3 caracteres" }),
    city: z
      .string()
      .min(1, { message: "cidade deve ser informado" })
      .min(3, { message: "cidade deve conter pelo menos 3 caracteres" }),
  });

  type SanctuaryForm = z.infer<typeof schema>;

  const onSubmit = ({
    name,
    owner,
    address,
    country,
    state,
    city,
  }: SanctuaryForm) => {
    if (sanctuary === undefined) {
      console.log("criando novo santuario");
    } else {
      const editedSanctuary: SanctuaryDTO = {
        id: sanctuary.id,
        name: name,
        owner: {
          id: sanctuary.owner.id,
          name: owner,
          email: sanctuary.owner.email,
        },
        address: address,
        country: country,
        state: state,
        city: city,
      };
      console.log(
        "editando novo santuario",
        JSON.stringify(editedSanctuary, null, 2)
      );
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    setValue,
    formState: { isSubmitSuccessful, errors },
  } = useForm<SanctuaryForm>({ resolver: zodResolver(schema) });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="Off">
        <div className="row mt-2">
          <div className="col">
            <div className="d-flex flex-row">
              <div style={{ minWidth: "70px", marginRight: "5px" }}>
                <label htmlFor="name">Nome</label>
              </div>
              <div className="d-flex flex-column">
                <input
                  {...register("name")}
                  type="text"
                  placeholder={sanctuaryName}
                  value={sanctuaryName}
                  onChange={(e) => {
                    setSanctuaryName(e.target.value);
                    setIsFormEdited(
                      sanctuary === undefined
                        ? e.target.value !== ""
                        : e.target.value !== sanctuary.name
                    );
                  }}
                  id="name"
                  className={
                    errors.name
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                />
                <div className="invalid-feedback">{errors.name?.message}</div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="d-flex flex-row">
              <div style={{ minWidth: "70px", marginRight: "5px" }}>
                <label htmlFor="owner">dono</label>
              </div>
              <div className="d-flex flex-column">
                <input
                  {...register("owner")}
                  type="text"
                  placeholder={sanctuaryOwnerName}
                  value={sanctuaryOwnerName}
                  onChange={(e) => {
                    setSanctuaryOwnerName(e.target.value);
                    setIsFormEdited(
                      sanctuary === undefined
                        ? e.target.value !== ""
                        : e.target.value !== sanctuary.owner.name
                    );
                  }}
                  id="owner"
                  className={
                    errors.owner
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                />
                <div className="invalid-feedback">{errors.owner?.message}</div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="d-flex flex-row">
              <div style={{ minWidth: "70px", marginRight: "5px" }}>
                <label htmlFor="address">endereço</label>
              </div>
              <div className="d-flex flex-column">
                <input
                  {...register("address")}
                  type="text"
                  placeholder={sanctuaryAddress}
                  value={sanctuaryAddress}
                  onChange={(e) => {
                    setSanctuaryAddress(e.target.value);
                    setIsFormEdited(
                      sanctuary === undefined
                        ? e.target.value !== ""
                        : e.target.value !== sanctuary.address
                    );
                  }}
                  id="address"
                  className={
                    errors.address
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                />
                <div className="invalid-feedback">
                  {errors.address?.message}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col">
            <div className="d-flex flex-row">
              <div style={{ minWidth: "70px", marginRight: "5px" }}>
                <label htmlFor="county">País</label>
              </div>
              <div className="d-flex flex-column">
                <input
                  {...register("country")}
                  type="text"
                  placeholder={sanctuaryCountry}
                  value={sanctuaryCountry}
                  onChange={(e) => {
                    setSanctuaryCountry(e.target.value);
                    setIsFormEdited(
                      sanctuary === undefined
                        ? e.target.value !== ""
                        : e.target.value !== sanctuary.country
                    );
                  }}
                  id="country"
                  className={
                    errors.address
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                />
                <div className="invalid-feedback">
                  {errors.country?.message}
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="d-flex flex-row">
              <div style={{ minWidth: "70px", marginRight: "5px" }}>
                <label htmlFor="state">Estado</label>
              </div>
              <div className="d-flex flex-column">
                <input
                  {...register("state")}
                  type="text"
                  placeholder={sanctuaryState}
                  value={sanctuaryState}
                  onChange={(e) => {
                    setSanctuaryState(e.target.value);
                    setIsFormEdited(
                      sanctuary === undefined
                        ? e.target.value !== ""
                        : e.target.value !== sanctuary.state
                    );
                  }}
                  id="state"
                  className={
                    errors.address
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                />
                <div className="invalid-feedback">{errors.state?.message}</div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="d-flex flex-row">
              <div style={{ minWidth: "70px", marginRight: "5px" }}>
                <label htmlFor="city">Cidade</label>
              </div>
              <div className="d-flex flex-column">
                <input
                  {...register("city")}
                  type="text"
                  placeholder={sanctuaryCity}
                  value={sanctuaryCity}
                  onChange={(e) => {
                    setSanctuaryCity(e.target.value);
                    setIsFormEdited(
                      sanctuary === undefined
                        ? e.target.value !== ""
                        : e.target.value !== sanctuary.city
                    );
                  }}
                  id="city"
                  className={
                    errors.address
                      ? "form-control form-control-sm is-invalid"
                      : "form-control form-control-sm"
                  }
                />
                <div className="invalid-feedback">{errors.city?.message}</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="d-flex justify-content-center"
          style={{ minHeight: "30px" }}
        >
          {isFormEdited ? (
            <>
              <button
                type="button"
                className="mt-2 btn btn-danger"
                onClick={handleCancel}
              >
                Cancelar
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="mt-2 btn btn-outline-danger"
                disabled
              >
                Cancelar
              </button>
            </>
          )}

          <button
            type="submit"
            className="mt-2 btn btn-primary"
            style={{ minHeight: "30px", marginLeft: "5px" }}
          >
            {sanctuary === undefined ? "criar" : "editar"}
          </button>
        </div>
      </form>
    </>
  );
}
