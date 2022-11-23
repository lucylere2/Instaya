import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Solicitudenvio (){
    const enviar =() => {
        alert("Enviado :)")
    }
    return(
        <Form className='m-10'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Identificacion</Form.Label>
                <Form.Control type="number" placeholder="Ingrese su identificacion" />
            </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicFecha">
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicHora">
                <Form.Label>Hora</Form.Label>
                <Form.Control type="time" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTelefono">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="number" placeholder="Ingrese su telefono" />
            </Form.Group>
            <Button onClick={enviar} variant="primary" type="Enviar">
                Submit
            </Button>
        </Form>
    )
} 