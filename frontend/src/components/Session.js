import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Session.css';
import Image from 'react-bootstrap/Image';

function Session() {
  return (
        <div className='login'>
        <Image className='logo' roundedCircle/>
          <Form className='form'>
          <Image className='logo' src='https://www.webretail.com.ar/v2/wp-content/uploads/2020/04/Env%C3%ADos-a-domicilio.png' roundedCircle/>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className='title'><h3>InstaYa</h3></div>
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu usuario" />
            <Form.Text className="text-muted">
              Nunca compartiremos tus datos con alguien más.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>
          <Button className='sesion' variant="primary" type="submit">
            Iniciar sesión
          </Button>
          <div>
          <Form.Text className="text-muted" id='txt-register'>
              ¿No tienes una cuenta?
            </Form.Text>
          </div>
          <div>
            <Button className='register' variant="secondary" type="submit">
              Regístrate
            </Button>
          </div> 
          </Form>
        </div>
  );
}

export default Session;