import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './EditForm.css';
import Image from 'react-bootstrap/Image';
import { useHistory } from "react-router-dom";

function EditForm() {
    const history = useHistory();
  
    const handleRoute = () =>{ 
      history.push("/lista-paquetes");
    };
    return (
            <div className='createorder'>
            <Image className='logo' roundedCircle/>
            <Form className='form3'>
                <div className='createtitle'><h3>Editar Orden</h3></div>
                <div className='datetime'>
                <Form.Group className="mb-3">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="date" value="21-09-2022"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Hora</Form.Label>
                    <Form.Control type="time" placeholder="Apellidos" />
                </Form.Group>
                </div>
                <div className='columns'>
                <Form.Group className="mb-3">
                    <Form.Label>Largo</Form.Label>
                    <Form.Control type="number" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Largo</Form.Label>
                    <Form.Control type="number" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Alto</Form.Label>
                    <Form.Control type="number" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Peso</Form.Label>
                    <Form.Control type="number" placeholder="" />
                </Form.Group>
                </div>
                <Form.Group className="mb-3">
                    <Form.Label>Dirección recogida</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ciudad recogida</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre destinatario</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Cédula/Nit destinatario</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Dirección entrega</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ciudad entrega</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Button className='sesion' variant="primary" type="submit" onClick={handleRoute}>
                    Editar Orden
                </Button>
                <div className='back'>
                <Button className='sesion' variant="danger" type="submit" onClick={handleRoute}>
                    Cancelar Orden
                </Button>
                </div>
                
                <div className='back'>
                <Button className='sesion' variant="secondary" type="submit" onClick={handleRoute}>
                    Volver
                </Button>
            </div>
            </Form>
            </div>
  );
}

export default EditForm;