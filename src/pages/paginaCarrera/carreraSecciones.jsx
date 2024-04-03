import {motion} from "framer-motion";

function CarreraSecciones({title,children}) {
    return(
        <motion.div 
        initial= {{x:"-100%",opacity:0}}
        whileInView={{x:"0",opacity:1}}
        transition={{duration: 0.5}}
        // viewport={{once:true}}
        className="carreraSecciones">
            <h2>{title}</h2>
            <p 
            style={{whiteSpace:'pre-wrap'}}
            >
                {children}
            </p>
        </motion.div>
        )
}

export default CarreraSecciones;