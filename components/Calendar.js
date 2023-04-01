import { useState } from "react";

function Month (props){
    const monthNames = ['ЯНВАРЬ','ФЕВРАЛЬ','МАРТ', 'АПРЕЛЬ','МАЙ','ИЮНЬ','ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'ОКТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ'];
    
    
    let year=props.year;
    let month=props.month;
    let current=new Date(year, month);
    let next=new Date(year, month+1);
    let diff=(next-current)/(1000*3600*24);
    let index=(current.getDay()+6)%7;
    
    
    const ROWS=6;
    const COLS=7;
    let table=[], tr, k=1-index;
    for (let i=0; i<ROWS; i++) {
        tr=[];
    for (let j=0; j<COLS; j++){
        tr.push(<td>{k>0 && k<=diff ? k:''}</td>);
        k++;
    }
    table.push(<tr>{tr}</tr>)
    }
    
        return (
       
    <table border="1">
    <caption>{monthNames[month]+' '}{year}</caption>
    {table}
    </table>
        );
    }

    
export default function Calendar(){
const[value, setValue]=useState();
let date=new Date(value);
const year=date.getFullYear();
const month=date.getMonth();


return(
    <div className="calendar">
        <h1>Calendar</h1>
        <input type="month" value={value} onInput={evt=>setValue(evt.target.value)}/>
        <Month year={year} month={month}/>
    </div>
)
}
