export default function Footer() {
  return (
    <footer className="footer mt-auto">
      <div className="container" style={{margin: "10px"}}>
        <div className="row">
        
          <div className="col-xl-4 col-lg-3 col-sm-5">
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

        </div>
      </div>
    </footer>
  );
}
