import Navbar from "react-bootstrap/Navbar";
export default function FooterF() {
  return (
    <div className="m-5">
        <div className="container text-white ">
          <Navbar bg="dark" variant="dark" fixed="bottom">
            <div className="col">
              <ul className="col-12 col-md-12 list-unstyled">
                <li className="font-weight-bold mb-2">Contactenos</li>
                <li className="text-center">
                  Comunícate con nuestra Línea S Nacional 018000252525
                </li>
                <li className="text-center">info@instaya.com.co</li>
              </ul>
            </div>
            <div className="col ">
              <ul className="col-12 col-md-12 list-unstyled">
                <li className="font-weight-bold mb-2">Links de interés</li>
                <li className="text-center">Noticias</li>
                <li className="text-center">Entregamanía</li>
                <li className="text-center">© 2022 Instaya :: Todos los derechos reservados</li>
                <li className="text-center">Términos y Condiciones de Uso | Política de Privacidad | Aviso de
                Privacidad</li>
              </ul>
            </div>
            <div className="col ">
              <ul className="col-12 col-md-12 list-unstyled">
                <li className="font-weight-bold mb-2">Centro de ayuda</li>
                <li className="text-center">Servicio al cliente</li>
                <li className="text-center">PQR</li>
                <li className="text-center">Nuestra red</li>
              </ul>
            </div>
           
          </Navbar>
        </div>
    </div>
  );
}