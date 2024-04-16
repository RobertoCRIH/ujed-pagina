import Logo from '../../assets/images/ujed-logo.png';


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';



function SecondNavbar() {
    return(
        <>
        
        <Navbar className="bg-body-tertiary">
            <Container>
            <Navbar.Brand href="#home">
                <img src={Logo} alt="" 
                height={"55"}/>
            </Navbar.Brand>

            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown">
                    <NavDropdown.Header>Carreras</NavDropdown.Header>
                    <NavDropdown.Item>Action</NavDropdown.Item>

                </NavDropdown>
            </Nav>
            </Container>
        </Navbar>
        
        </>
        
    )
}

export default SecondNavbar;