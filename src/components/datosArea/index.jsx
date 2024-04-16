import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function DatosArea() {
    return(
        <>

            <Container>

                <Row style={{backgroundColor: "red"}}>

                    <Col>

                        <h4>Dirección</h4>
                    
                    </Col>
                    <Col>
                    
                        <h4>
                            Datos de Contacto
                        </h4>
                    
                    </Col>
                    <Col>
                    
                        <h4>
                            Director
                        </h4>

                    </Col>

                </Row>

            </Container>
        
        </>
    )
}

export default DatosArea;