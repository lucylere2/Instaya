import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Solicitudenvio (){
    const enviar =() => {
        alert("Enviado :)")
    }
    return(
        <Form className='m-10'>
            <Form.Group className="mb-3" controlId="formBasicId">
                <Form.Label>Identificacion</Form.Label>
                <Form.Control type="number" placeholder="Ingrese su identificacion" />
            </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre Completo" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su correo" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTelefono">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="number" placeholder="Ingrese su telefono" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDireccion">
                <Form.Label>Direccion</Form.Label>
                <Form.Control type="text" placeholder="Ingrese la direccion" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasiDepto">
                <Form.Label>Departamento</Form.Label>
                <Form.Control type="text" placeholder="Departamento" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCiudad">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control type="text" placeholder="Ciudad" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicFecha">
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicHora">
                <Form.Label>Hora</Form.Label>
                <Form.Control type="time" />
            </Form.Group>
            
            <Button onClick={enviar} variant="primary" type="Enviar">
                Submit
            </Button>
        </Form>
    )
} 