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
// const DAYS_IN_WEEK = 7;

// const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// const WEEK_DAYS_FROM_MONDAY = [6, 0, 1, 2, 3, 4, 5];

// const Month = {
//     January: 0,
//     February: 1,
//     March: 2,
//     April: 3,
//     May: 4,
//     June: 5,
//     July: 6,
//     August: 7,
//     September: 8,
//     October: 9,
//     Novermber: 10,
//     December: 11
// };

// export function areEqual(a, b) {
//     if (!a || !b) return false;

//     return (
//         a.getFullYear() === b.getFullYear() &&
//         a.getMonth() === b.getMonth() &&
//         a.getDate() === b.getDate()
//     );
// }

// export function isLeapYear(year) {
//     return !((year % 4) || (!(year % 100) && (year % 400)));
// }

// export function getDaysInMonth(date) {
//     const month = date.getMonth();
//     const year = date.getFullYear();
//     const daysInMonth = DAYS_IN_MONTH[month];
    
//     if (isLeapYear(year) && month === Month.February) {
//         return daysInMonth + 1;
//     } else {
//         return daysInMonth;
//     }
// }

// export function getDayOfWeek(date) {
//     const dayOfWeek = date.getDay();

//     return WEEK_DAYS_FROM_MONDAY[dayOfWeek];
// }

// export function getMonthData(year, month) {
//     const result = [];
//     const date = new Date(year, month);
//     const daysInMonth = getDaysInMonth(date);
//     const monthStartsOn = getDayOfWeek(date);
//     let day = 1;

//     for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
//         result[i] = [];
        
//         for (let j = 0; j < DAYS_IN_WEEK; j++) {
//             if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
//                 result[i][j] = undefined;
//             } else {
//                 result[i][j] = new Date(year, month, day++);
//             }
//         }
//     }

//     return result;
// }