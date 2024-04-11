function Duracion({numero}) {
    return(
        <div className="duracion">
            <div className="duracion__title">
                Duración del curso 
            </div>

            <div className="duracion__container">
                <div className="square">
                    <p className="number"> {numero} </p>
                    <p className="sub">Semestres</p>
                </div>
                
            </div>
        </div>
    )
}

export default Duracion;