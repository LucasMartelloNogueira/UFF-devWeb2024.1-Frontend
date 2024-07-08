import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ margin: "20px" }}
      >
        <div>
          <h5>Contato</h5>
          <ul className="list-unstyled">
            <li>
              <i className="fas fa-user"></i>Lucas
            </li>
            <li>
              <i className="fas fa-phone"></i> (99)99999-9999
            </li>
            <li>
              <i className="fas fa-envelope-square"></i>{" "}
              <a href="mailto:popo@pb.dum.br">adoteumanimal@gmail.com</a>
            </li>
          </ul>
        </div>

        <div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <Link to="qa">FAQ</Link>
          </div>
        </div>

        <div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <Link to="TermsAndServices">Termos e serviços</Link>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center">
          <div className="d-flex" style={{ height: "220px" }}>
            <div
              className="d-flex flex-column justify-content-center"
              style={{ width: "120px", height: "100%", marginRight: "10px" }}
            >
              <h5>Endereço</h5>
              <strong>UFF - Praia Vermelha Campus</strong>
              <p>
                R. Passo da Pátria, 152-470 - São Domingos, Niterói - RJ,
                24210-240
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2307704878654!2d-43.13424698869684!3d-22.904857537716378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99817dce2f93eb%3A0x9e97773b91b93bba!2sUFF%20-%20Praia%20Vermelha%20Campus!5e0!3m2!1sen!2sbr!4v1720450293091!5m2!1sen!2sbr"
              width="220"
              style={{ border: 0, aspectRatio: "1.3 / 1" }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
