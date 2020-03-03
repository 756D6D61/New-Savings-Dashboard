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

	//const newObj = budgets.reduce((a, b) => Object.assign(a, b), {})
	//console.log(newObj)

	const columns = [
		{name: "budget", label: "Budget"},
		{name: "date", label: "Date"},
		{name: "amount", label: "Amount"}
	]

	/*const data = budgets.filter(data=>data)
						.map(d => ({
							budget: d.budget,
							amount: d.amount,
							data: d.date
						}))*/

	const options = {
		search: false,
		filter: false,
		print: false,
		download: false,
		viewColumns: false,
		selectableRows: "none"
	}

	const transform = (arr) =>
    Object.entries(arr).reduce((acc,[k,[v]]) => (acc[k] = v, acc), {})

	const test = transform(budgets)

	console.log(test)

	return (
		<MUIDataTable
			//data={data}
			columns={columns}
			options={options}
		/>
	)
}

export default TableTwo
