import "./style.scss"

function AddButton({text,click}) {
    return(
        
        <button className="addButton" onClick={(e)=>{click()}}>{text}</button>
       
    )
}

export default AddButton;