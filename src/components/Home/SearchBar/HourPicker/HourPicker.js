import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./HourPicker.css"

const HourPick = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="hourpicker">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
    </div>
  );
};
export default HourPick;
