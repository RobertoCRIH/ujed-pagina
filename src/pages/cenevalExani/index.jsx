import Banner from "../../assets/images/classroom.jpg"
import Footer from "../../components/footer";
import GenericBanner from "../../components/genericBanner";
import GenericSection from "../../components/genericSection";
import MainNav from "../../components/mainNav";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import GenericList from "../../components/GenericList";

function CenevalExani() {
    return(

        <>
            <MainNav/>

            <GenericBanner img={Banner}>
                Examen Nacional de Ingreso al Posgrado (EXANI-III)
            </GenericBanner>

            <GenericSection title={"Aplicaciones y periodos de registro"}>
            </GenericSection>

            {/* Tabla con la info de ceneval  */}
            <Container style={{
                border:"1px solid grey"
            }}>
                <Row style={{
                    backgroundColor: "#b11830",
                    color: "white"
                }}>
                    <Col style={{
                        padding:"20px 10px",
                        textAlign: "center",
                        fontWeight:"bold"
                    }}>Modalidad</Col>
                    <Col style={{
                        padding:"20px 10px",
                        textAlign: "center",
                        fontWeight:"bold"
                    }}>Periodo de registro</Col>
                    <Col style={{
                        padding:"20px 10px",
                        textAlign: "center",
                        fontWeight:"bold"
                    }}>Fecha de aplicación</Col>
                    <Col style={{
                        padding:"20px 10px",
                        textAlign: "center",
                        fontWeight:"bold"
                    }}>Entrega de resultados</Col>
                </Row>
                <Row>

                    <Col style={{
                        display:"flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "5px 10px",
                        borderLeft: "1px solid grey",
                        borderRight: "1px solid grey"
                    }}>
                        Examen desde casa 
                        (sólo insituciones)
                    </Col>
                    <Col style={{
                        display:"flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "5px 10px",
                        borderLeft: "1px solid grey",
                        borderRight: "1px solid grey"
                    }}>
                        Del 22 de abril al 3 de mayo de 2024		
                    </Col>
                    <Col style={{
                        display:"flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "5px 10px",
                        borderLeft: "1px solid grey",
                        borderRight: "1px solid grey"
                    }}>
                        7 de junio 2024		
                    </Col>
                    <Col style={{
                        display:"flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "5px 10px",
                        borderLeft: "1px solid grey",
                        borderRight: "1px solid grey"
                    }}>
                        1 de julio 2024
                    </Col>
                </Row>
            </Container>

            <br />

            <GenericList title={"Requisitos (únicamente egresados de la UJED)"} list={[
                "Copia de credencial INE.",
                "Recibo de pago por la cantidad de $1,165.00 (el pago se realizará directamente en la tesorería del edificio central con horario de 9:00 a 14:00 hrs., de lunes a viernes)",
                "Posgrado, correo electrónico y número celular."
            ]}>

            </GenericList>

            <Alert variant="warning" style={{
                margin:"0 10%"
            }}>
            Estos requisitos deberán entregarse a la jefatura de incorporación y validación en el edificio central de la UJED, en horario de 9:00 a 14:00 hrs., de lunes a viernes.
            </Alert>

            <GenericSection title={"Enlace de registro"}>
                <p> Para ingresar a la página de registro, da clic en este enlace. </p>
                <button onClick={e=>{
                    window.location.href = "https://registroenlinea.ceneval.edu.mx/RegistroLinea/indexCerrado.php"
                }}>
                    Página de registro
                </button>
            </GenericSection>

            <GenericList title={"Instrucciones"} list={[
                "Para poder realizar la primera parte de tu registro es necesario que primero entregues la documentación a los responsables del examen y te envíen tu número de matrícula para ingresar al sistema.",
                "Entrar al sistema; crear una contraseña para el ingreso a tu registro; dar clic en la parte de Editar Registro de Examen y llenar tus cuestionarios; por último, imprimir el pase de ingreso al examen.",
                "En caso de cualquier error o problema con tu registro, envía un correo electrónico a examenes.ceneval@ujed.mx.",
                "Recuerda que deberás realizar tu registro en el periodo arriba mencionado.                "
            ]}/>

            <Alert variant="warning" style={{
                margin: "0px 10%"
            }}>
                <b> Nota: </b> el día de la aplicación será necesario tener a la mano tu pase de ingreso y credencial oficial vigente (INE).
            </Alert>

            <GenericSection title={"Contacto"}>
            M.E. Ahmed Sahid René Ramos Pulido <br />
            Jefe de Incorporación y Validación <br />
            Responsable Operativo del examen EGEL <br />
            Tel. (618) 827-12-99. <br />
            </GenericSection>

            <Footer/>
        </>
    )
}

export default CenevalExani;