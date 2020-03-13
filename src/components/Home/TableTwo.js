import React, { useEffect } from 'react'
import MUIDataTable from 'mui-datatables'
import { useSelector, useDispatch } from 'react-redux'
import { budgetData } from '../../store/actions/data.actions'

const TableTwo = () => {
	const dispatch = useDispatch()

	const budgets = useSelector(state => state.data.budget)

	useEffect(() => {
		dispatch(budgetData())
	}, [dispatch])

	console.log(budgets)

	const values = Object.keys(budgets).map(function(key) {
		return budgets[key]})
		.flat()
		.map(a => Math.round(a.value).toLocaleString())

	console.log(values)

	const result = Object.entries(budgets)
					.reduce((r, [k, [v]]) => (r[k] = v, r), {});

console.log(result);
const data = Object.values(result);
console.log(data);

var test100 = Object.keys(result).map(function(key) {
	return [result[key]];
  });

  console.log(test100);

const moretest = test100.map(d => d)
console.log(moretest)

	const columns = [
		//{name: "budget", label: "Budget"},
		{name: "timestamp", label: "Date"},
		{name: "value", label: "Amount"}
	]


	const options = {
		search: false,
		filter: false,
		print: false,
		download: false,
		viewColumns: false,
		selectableRows: "none"
	}

	return (
		<MUIDataTable
			data={data}
			columns={columns}
			options={options}
		/>
	)
}

export default TableTwo
