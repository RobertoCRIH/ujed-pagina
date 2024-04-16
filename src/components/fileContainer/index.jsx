import ListGroup from 'react-bootstrap/ListGroup';
import { IoMdDownload } from "react-icons/io";



function FileContainer({listaDeArchivos}) {
    return(
        <ListGroup as={"ul"} style={{
            margin:"0 10%",
            width:"clamp(200px, 100%,500px)"
            }}>
            {listaDeArchivos.map(e=>{
                return(
                    <ListGroup.Item>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}>
                            {e.nombre}
                            <a href={e.link} style={{
                                textDecoration:"none"
                            }}> <IoMdDownload/> </a>
                        </div>
                    </ListGroup.Item>
                )
            })}
            
        </ListGroup>
    )
}

export default FileContainer;