import {motion} from "framer-motion";

import imagen1 from "../../assets/images/classroom.jpg";
import imagen2 from "../../assets/images/carreras.jpg";
import imagen3 from "../../assets/images/posgrado.jpg";

import Card from "./card";



function Cards() {
    return(
        <>
        <div className="cardsTitle">
            EXPLORA NUESTROS PROGRAMAS
        </div>
        <div 
            className="cards"
            
        >
            
            <Card img={imagen1} title={"Media Superior"}
            desc={"Ofrecemos programas educativos de nivel medio superior que te brindan las herramientas necesarias para construir un camino hacia el éxito."}/>
            
            <Card img={imagen2} title={"Carreras y licenciaturas"} 
            desc={"Desde programas innovadores hasta oportunidades de aprendizaje práctico, estamos aquí para ayudarte a alcanzar tus metas profesionales."}/>

            <Card img={imagen3} title={"Posgrados"}
            desc={"Da el siguiente paso en tu carrera con los posgrados de la UJED. Descubre programas de alto nivel que te preparan para destacar en tu campo profesional."}/>

        </div>
        </>
    )
}

export default Cards;