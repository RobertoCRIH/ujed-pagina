function Section({img,title,text}) {
    return(
        <div className="section">
            <div className="title">
                {title}
            </div>

            <div className="content">
            <img src={img} alt={title} />

                <div className="content__text">
                    {text}
                </div>
            </div>
        </div>
    )
}

export default Section;