import { useState } from "react";
import Month from "./Month";

  
export default function Calendar(){
const[value, setValue]=useState(new Date());
let date=new Date(value);
const year=date.getFullYear();
const month=date.getMonth();

return(
    <div className="calendar">
        <h1>Calendar</h1>
        <input type="month" value={value} onChange={evt=>setValue(evt.target.value)}/>
        <Month year={year} month={month}/>
    </div>
)
}
