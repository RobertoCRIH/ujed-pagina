import ListaOfertasItem from "./listaOfertasItem";

function ListaOfertas({area,lista}) {

    
    return(
        <div className="listaO">
            <h2 className="listaO__title">{area}</h2>

            {
                lista.map((i)=>{
                    if(i.area === area){
                        return(
                            <ListaOfertasItem 
                                nombre={i.nombre}
                                lugar={i.ciudad}
                                id={i.idcarrera}
                            />
                        )
                    }
                })
            }
            
        </div>
    )
}

export default ListaOfertas;