import './Header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useHistory } from "react-router-dom";

function Header() {

  const history = useHistory();
  
  const handleRoute = () =>{ 
    history.push("/");
  };

  return (
    <div className='header'>
      <Navbar bg="light" expand="lg"  className='header'>
        <Container fluid className='header'>
          <Navbar.Brand href="#">InstaYa</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              
            </Nav>
            <Form className="d-flex">
              <Button className='sign-out' onClick={handleRoute}>Cerrar Sesión</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;