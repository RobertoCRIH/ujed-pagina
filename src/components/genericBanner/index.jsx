import "./style.scss";

function GenericBanner({img,children}) {
    return(
        <div className="GenericBanner">
            <img src={img} alt="" />

            <div className="content">
                <div className="content__text">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default GenericBanner;