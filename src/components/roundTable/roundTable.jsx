import "./style.scss"

function RoundTable({children}) {
    return(
        <div className="roundtable">

            <table>
                {children}
            </table>

        </div>
    )
}

export default RoundTable;