const ExpenseFilter = (props) => {

    const onYearSelected = (event) =>{
        props.onSelected(event.target.value)
    }

    return (
        <select className="form-control" onChange={onYearSelected} value={props.selectedYear}>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
        </select>
    )
}


export default ExpenseFilter;