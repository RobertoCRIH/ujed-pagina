import "./style.scss"

function AddButton({text,onClick}) {
    return(
        
        <button className="addButton" onClick={onClick} >{text}</button>
       
    )
}

export default AddButton;