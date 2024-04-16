import "./style.scss"
import { IoIosCloseCircle } from "react-icons/io";

import {motion} from "framer-motion";

function MyModal({header,closeHandle,visible,children}) {
    if(visible){
    return(
        <div className="background">
            <div className="Mymodal">
                <div className="modal__header">
                    {header}
                    <motion.button whileHover={{scale:1.1}} onClick={closeHandle}>
                        <IoIosCloseCircle/>
                    </motion.button>
                </div>

                {children}

                {/*Esto es un ejemplo de las clases que van dentro del modal 
                <div className="modal__content">
                    <div className="subtitle">
                        Nombre del Profesor
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Ej. John Doe" />
                    </div>

                    <div className="subtitle">
                        Carrera
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Ej. John Doe" />
                    </div>
                            
                </div>

                <div className="modal__footer">
                    <div className="buttons">
                        <button className="false">Cancelar</button>
                        <button>Agregar Maestro</button>
                    </div>
                </div> */}
                
            </div>
        </div>
    )
    }

}

export default MyModal;