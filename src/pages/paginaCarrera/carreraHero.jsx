import {motion} from "framer-motion";

function CarreraHero({img,title,lugar}) {
    return(
        <div className="cHero">
            <img src={img} alt="Hero Section"  className="cHero__img"/>

            <div className="cHero__title">
                <motion.div 
                
                whileHover={{scale:1.1}}
                whileTap={{scale:0.8}}

                drag= "x"

                dragConstraints={{
                    left: -100,
                    right: 100
                }}

                className="container">
                    <h1>{title}</h1>
                    <p>Sede en {lugar}</p>
                </motion.div>
            </div>
        </div>
    )
}

export default CarreraHero;