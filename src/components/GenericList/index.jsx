import './style.scss'

function GenericList({title,list}) {
    return(
        <>
            <div className="genericList">
                <h2>
                    {title}
                </h2>

                <ol>
                    {list.map(e=>{
                        return(
                            <li> {e} </li>
                        )
                    })}
                </ol>
            </div>
        
        </>
    )
}

export default GenericList;