import Searchbar from "../../components/searchbar/searchbar";
import NoticiaItem from "./noticiaItem";

function Noticias() {
    return(
        <>  
            <Searchbar/>
            
            <div className="title">
                Noticias
            </div>

            <div className="noticias">
                
                
                <NoticiaItem    title={"Nueva Conferencia de Medicina"}
                                imgLink={"https://www.forbes.com/advisor/wp-content/uploads/2023/10/image4-Cropped.jpg"}
                                fecha={"22 / 02 / 2024"}
                />

                <NoticiaItem    title={"Nueva Conferencia de Medicina"}
                                imgLink={"https://www.forbes.com/advisor/wp-content/uploads/2023/10/image4-Cropped.jpg"}
                                fecha={"22 / 02 / 2024"}
                />

                <NoticiaItem    title={"Nueva Conferencia de Medicina"}
                                imgLink={"https://www.forbes.com/advisor/wp-content/uploads/2023/10/image4-Cropped.jpg"}
                                fecha={"22 / 02 / 2024"}
                />

                
            </div>
        
        </>
    )
}

export default Noticias;