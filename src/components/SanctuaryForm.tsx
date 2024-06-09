import { SanctuaryDTO } from "../types/SanctuaryDTO";

type SanctuaryFormProps = {
  sanctuary: SanctuaryDTO;
};

export default function SanctuaryForm({ sanctuary }: SanctuaryFormProps) {
  const handleSubmit = () => {};

  return (
    <>
      <h1 className="text-center">Santuario</h1>
      <form onSubmit={handleSubmit} autoComplete="Off">
        <div className="row mt-2">
          <div className="col">
            <div className="d-flex flex-row">
              <div style={{ minWidth: "70px", marginRight: "5px" }}>
                <label htmlFor="name">Nome</label>
              </div>
              <input type="text" placeholder={sanctuary.name} id="name" />
            </div>
          </div>

          <div className="col">
            <div className="d-flex flex-row">
              <div style={{ minWidth: "70px", marginRight: "5px" }}>
                <label htmlFor="owner">dono</label>
              </div>
              <input type="text" placeholder={sanctuary.owner.name} id="onwer" />
            </div>
          </div>

          <div className="col">
            <div className="d-flex flex-row">
              <div style={{ minWidth: "70px", marginRight: "5px" }}>
                <label htmlFor="address">endereço</label>
              </div>
              <input type="text" placeholder={sanctuary.address} id="address" />
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col">
            <div className="d-flex flex-row">
              <div style={{ minWidth: "70px", marginRight: "5px" }}>
                <label htmlFor="county">País</label>
              </div>
              <input type="text" placeholder={sanctuary.country} id="country" />
            </div>
          </div>

          <div className="col">
            <div className="d-flex flex-row">
              <div style={{ minWidth: "70px", marginRight: "5px" }}>
                <label htmlFor="state">Estado</label>
              </div>
              <input type="text" placeholder={sanctuary.state} id="state" />
            </div>
          </div>

          <div className="col">
            <div className="d-flex flex-row">
              <div style={{ minWidth: "70px", marginRight: "5px" }}>
                <label htmlFor="city">Cidade</label>
              </div>
              <input type="text" placeholder={sanctuary.city} id="city" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
