function CampoLaboral({img,children}) {
    return(
        <div className="campoLaboral">

            <img src={img} alt="" />
            <div className="content">

                <div className="title">
                    Campo Laboral
                </div>


                <div className="text">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default CampoLaboral;