import {format} from 'date-fns'

function FormatDate(date) {
    let newDate = format(new Date(date), 'dd/MM/yyyy');

    return(newDate)
}

export default FormatDate;