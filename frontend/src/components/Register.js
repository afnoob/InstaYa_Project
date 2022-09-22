import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Register.css';
import Image from 'react-bootstrap/Image';

function Register() {
  return (
        <div className='reg'>
        <Image className='logo' roundedCircle/>
          <Form className='form2'>
            <Image className='logo' src='https://www.webretail.com.ar/v2/wp-content/uploads/2020/04/Env%C3%ADos-a-domicilio.png' roundedCircle/>
            <div className='title'><h3>InstaYa</h3></div>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Nombres</Form.Label>
                <Form.Control type="text" placeholder="Nombres" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="text" placeholder="Apellidos" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" placeholder="Usuario" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="example@gmail.com" />
            </Form.Group>
            <Button className='sesion' variant="primary" type="submit">
                Registrarse
            </Button>
            <div className='back'>
            <Button className='sesion' variant="secondary" type="submit">
                Volver
            </Button>
          </div>
          </Form>
        </div>
  );
}

export default Register;