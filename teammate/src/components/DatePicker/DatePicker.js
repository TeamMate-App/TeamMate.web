import React, { useState } from 'react' 
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


const DatePick = () => {

    const [selectedDate, setSelectedDate] = useState(null)


    return (
            <div className="datepicker">
                <DatePicker selected={selectedDate}
                 onChange={date => setSelectedDate(date)} 
                 dateFormat='dd/MM/yyyy'
                 minDate={new Date()}
                 placeholderText="Hoy"
                 />
            </div>
    )
}
export default DatePick