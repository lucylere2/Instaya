import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Registrarse (){
    const enviar =() => {
        alert("Registro Exitoso :)")
    }
    return(
        <Form className='m-5'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Identificacion</Form.Label>
                <Form.Control type="number" placeholder="Ingrese su identificacion" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Direccion</Form.Label>
                <Form.Control type="text" placeholder="Direccion" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="number" placeholder="Ingrese su telefono" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
} 