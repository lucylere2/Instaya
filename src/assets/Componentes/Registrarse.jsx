import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Registrarse (){
    const enviar =() => {
        alert("Registro Exitoso :)")
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
            <Form.Group className="mb-3" controlId="formBasicDireccion">
                <Form.Label>Direccion</Form.Label>
                <Form.Control type="text" placeholder="Direccion" />
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