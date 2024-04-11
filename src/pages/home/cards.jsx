import {motion} from "framer-motion";



import Card from "./card";



function Cards() {
    return(
        <>
        <div className="cardsTitle">
            EXPLORA NUESTROS PROGRAMAS
        </div>
        <motion.div 
            className="cards"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
        >
            
            <Card img={"https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} title={"Media Superior"}
            desc={"Ofrecemos programas educativos de nivel medio superior que te brindan las herramientas necesarias para construir un camino hacia el éxito."}
            goTo={"/oferta-educativa/mediasuperior"}/>
            
            <Card img={"https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} title={"Carreras y licenciaturas"} 
            desc={"Desde programas innovadores hasta oportunidades de aprendizaje práctico, estamos aquí para ayudarte a alcanzar tus metas profesionales."}
            goTo={"/oferta-educativa/licenciaturas"}
            />

            <Card img={"https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} title={"Posgrados"}
            desc={"Da el siguiente paso en tu carrera con los posgrados de la UJED. Descubre programas de alto nivel que te preparan para destacar en tu campo profesional."}/>

        </motion.div>
        </>
    )
}

export default Cards;