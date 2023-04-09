export default function Month(props) {
    const monthNames = ['ЯНВАРЬ', 'ФЕВРАЛЬ', 'МАРТ', 'АПРЕЛЬ', 'МАЙ', 'ИЮНЬ', 'ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'ОКТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ'];
    const dayNames = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

    let year = props.year;
    let month = props.month;
    let current = new Date(year, month);
    let next = new Date(year, month + 1);
    let diff = (next - current) / (1000 * 3600 * 24);
    let index = Math.ceil(current.getDay() + 6) % 7;

    const ROWS = 7;
    const COLS = 7;
    let tab = [], cell, k = 1 - index;
    for (let i = 1; i < ROWS; i++) {
        cell = [];
        for (let j = 1; j <= COLS; j++) {
            cell.push(<td>{k > 0 && k <= diff ? k : ''}</td>);
            k++;
        }
        tab.push(<tr>{cell}</tr>);
    }

    return (
        <table>
            <caption>{monthNames[month] + ' '}{year}</caption>
            <thead>
                <tr>
                    {dayNames.map(day => 
                    <th key={day}>{day}</th>)}
                </tr>
            </thead>
            {tab}
        </table>
    );
}