import "./style.scss";

import Logo from '../../assets/images/logo blanco.jpg'
import {motion} from 'framer-motion'

function GenericBanner({img,children}) {
    return(
        <div className="GenericBanner"
            style={{backgroundImage:`url(${img})`}}
        >
            <div className="filter">
                <motion.h1
                    whileHover={{scale: 1.1}}
                >
                    {children}
                </motion.h1>
                <p>Universidad Juárez del Estado de Durango</p>
            </div>

        </div>
    )
}

export default GenericBanner;