import banner from "../../assets/images/banner.jpg";

function Banner() {
    return(
        <div className="banner">
            <img src={banner} alt="" />
            <div className="text">
                <div className="main">
                    Forjando Futuros Brillantes: <br /> Bienvenido a la UJED
                </div>
                <div className="secondary">
                    En la Universidad Juárez del Estado de Durango (UJED), estamos 
                    comprometidos a guiarte en el camino hacia un futuro brillante. 
                    Nuestra institución ofrece una educación de calidad, oportunidades 
                    de crecimiento personal y profesional, y un ambiente inclusivo que te 
                    inspirará a alcanzar tus metas. Únete a nosotros y descubre cómo juntos 
                    podemos forjar un futuro lleno de éxitos y logros. ¡Bienvenido a la UJED, 
                    donde tus sueños se convierten en realidad!
                </div>
            </div>
        </div>
    )
}

export default Banner;