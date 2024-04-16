import "./style.scss";
import logo from "../../assets/images/logo blanco.jpg"
function Footer() {
    return(
        <div className="mainFooter">
            <div className="section1">
                <div>
                    <p>Contacto</p>
                    <a href="">Página de Contacto</a>
                </div>
                <div>
                    <p>Universidad</p>
                    <a href="">Portal de Transparencia</a> <br />
                    <a href="">Contraloría Social</a>
                </div>
                <div>
                    <p>Perfiles</p>
                    <a href="">Aspirantes</a> <br />
                    <a href="">Alumnos</a> <br />
                    <a href="">Egresados</a> <br />
                    <a href="">Académicos</a>
                </div>
                <div>
                    <p>Sobre el sitio</p>
                    <a href="">Aviso de privacidad</a> <br />
                    <a href="">Política de privacidad</a> <br />
                    <a href="">Termnios y condiciones de uso</a>
                </div>
            </div>

            <div className="section2">
                <img src={logo} alt="" />
            </div>
        </div>
    )
}

export default Footer;