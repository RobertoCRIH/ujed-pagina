import "./style.scss"

function GenericSection({title,children}) {
    return(
        <div className="genericSection">
            <h3> {title} </h3>
            <div className="text">
                               
                {children}
                
            </div>
        </div>
    )
}

export default GenericSection;