import Ceneval from "../../assets/images/ceneval.jpg";
import CenevalExamen from "../../assets/images/ceneval examen.jpg";
import Examen2 from "../../assets/images/examen 2.jpg";
import Examen3 from "../../assets/images/examen 3.jpg";
import Footer from "../../components/footer";
import GenericBanner from "../../components/genericBanner";
import MainNav from "../../components/mainNav";

import Button from 'react-bootstrap/Button';
import  Card  from "react-bootstrap/Card";

import { useNavigate } from "react-router-dom";

import "./style.scss"

function ExamenesCeneval() {
    const navigation = useNavigate();
    return(


        <>

        <MainNav/>

        <GenericBanner img={Ceneval}>
            Exámenes CENEVAL
        </GenericBanner>

        <div className="cenevalCards" style={{
            display: "flex",
            justifyContent: "center",
            gap:"20px",
            margin: "50px 0"
        }}>

            <Card style={{width:"300px"}}>
                <Card.Img variant="top" src={Examen2}/>
                <Card.Body>
                    <Card.Title>
                        EGEL
                    </Card.Title>
                    <Card.Text>
                        Examen general de ingreso a la licenciatura.
                    </Card.Text>
                    <Button onClick={e=>{
                        navigation("/ceneval-egel")
                    }}>Mas información</Button>
                </Card.Body>
            </Card>

            
            <Card style={{width:"300px"}}>
                <Card.Img variant="top" src={Examen3}/>
                <Card.Body>
                    <Card.Title>
                        EXANI III
                    </Card.Title>
                    <Card.Text>
                        Examen Nacional de ingreso al posgrado.
                    </Card.Text>
                    <Button onClick={e=>{
                        navigation("/ceneval-exani")
                    }}>Mas información</Button>
                </Card.Body>
            </Card>

            <Card style={{width:"300px"}}>
                <Card.Img variant="top" src={CenevalExamen}/>
                <Card.Body>
                    <Card.Title>
                        EGAL-EIN
                    </Card.Title>
                    <Card.Text>
                        Examen general para la acreditación de la licenciatura en eseñanza inglés.
                    </Card.Text>
                    <Button onClick={e=>{
                        navigation("/ceneval-egal")
                    }}>Mas información</Button>
                </Card.Body>
            </Card>
        </div>

        <Footer/>
        </>
    )
}

export default ExamenesCeneval;