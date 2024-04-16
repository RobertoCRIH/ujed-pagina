import GenericList from "../../components/GenericList";
import Footer from "../../components/footer";
import GenericSection from "../../components/genericSection";
import MainNav from "../../components/mainNav";

function CorreoInstitucional() {
    return(

        <>
        
        <MainNav/>

        <GenericSection title={"Correo institucional"}>
            <div className="subtitle">Alumnos</div>
            <p>
            El correo institucional para alumnos (@alumnos.ujed.mx) 
            se tramita desde el portal de Servicios Escolares. Una vez 
            que ingreses al portal con tu usuario y contraseña, 
            encontrarás un apartado desde el cual podrás solicitar 
            tu correo institucional, o restablecer tu contraseña en 
            caso de que la hayas olvidado.
            <button onClick={e=>{
                window.location.href = "https://escolares.ujed.mx/"
            }}>Ir al portal de servicios escolares</button>
            </p>
            <div className="subtitle">Personal de la UJED</div>
            <p>
            Si no cuentas con correo institucional puedes solicitarlo en la página digital.ujed.mx. En tu solicitud serán indispensables los siguientes datos:
            </p>
        </GenericSection>

        <GenericList list={[
            "Matrícula.",
            "Facultad, Instituto, Área o Departamento en la que te desempeñas.",
            "Un correo personal así como un número de teléfono de contacto."
        ]}/>

        <GenericSection>
        <p>
            Una vez que sea solicitado se te hará llegar tu nueva cuenta al correo personal 
            que proporcionaste en un plazo no mayor a 2 días hábiles, por lo que es importante 
            revises tu correo , así como el correo no deseado. En caso de no recibir tus datos 
            en este plazo nos puedes contactar en el teléfono 618 827 12 89 o envíanos un 
            mensaje a correoinstitucional@ujed.mx.
        </p>
        <p>
            Con tu cuenta de correo institucional tienes acceso a los servicios de GSuite para educación.
        </p>
        </GenericSection>

        <Footer/>
        
        </>
    )
}

export default CorreoInstitucional;