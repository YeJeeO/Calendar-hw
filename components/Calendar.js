import { useState } from "react";
import Month from "./Month";

  
export default function Calendar(){
const[value, setValue]=useState(new Date());
let date=new Date(value);
const year=date.getFullYear();
const month=date.getMonth();
const selectMonth = (event) => {
    const selectedDate = new Date(event.target.value);
    setValue(selectedDate);
};

return (
    <div>
        <input type="month" value={value.toISOString().slice(0, 7)} onChange={selectMonth} />
        <Month year={year} month={month}/>
    </div>
)
}


