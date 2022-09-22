import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CreateForm.css';
import Image from 'react-bootstrap/Image';
import { useHistory } from "react-router-dom";

function CreateForm() {
    const history = useHistory();
  
    const handleRoute = () =>{ 
      history.push("/lista-paquetes");
    };

    return (
            <div className='createorder'>
            <Image className='logo' roundedCircle/>
            <Form className='form3'>
                <div className='createtitle'><h3>Agregar Orden</h3></div>
                <div className='datetime'>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="date" placeholder="Nombres" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Hora</Form.Label>
                    <Form.Control type="time" placeholder="Apellidos" />
                </Form.Group>
                </div>
                <div className='columns'>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Largo</Form.Label>
                    <Form.Control type="number" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Largo</Form.Label>
                    <Form.Control type="number" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Alto</Form.Label>
                    <Form.Control type="number" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Peso</Form.Label>
                    <Form.Control type="number" placeholder="" />
                </Form.Group>
                </div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Dirección recogida</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Ciudad recogida</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre destinatario</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Cédula/Nit destinatario</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Dirección entrega</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ciudad entrega</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Button className='sesion' variant="primary" type="submit" onClick={handleRoute}>
                    Crear Orden
                </Button>
                <div className='back'>
                <Button className='sesion' variant="secondary" type="submit" onClick={handleRoute}>
                    Volver
                </Button>
            </div>
            </Form>
            </div>
  );
}

export default CreateForm;