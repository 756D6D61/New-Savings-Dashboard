import React, { useEffect } from 'react'
import MUIDataTable from 'mui-datatables'
import { useSelector, useDispatch } from 'react-redux'
import { budgetData } from '../../store/actions/data.actions'
import { format } from 'date-fns'

const TableTwo = () => {
	const dispatch = useDispatch()

	const budgets = useSelector((state) => state.data.budget)

	useEffect(() => {
		dispatch(budgetData())
	}, [dispatch])

	const result = Object.entries(budgets).reduce(
		(r, [k, [v]]) => ((r[k] = v), r),
		{}
	)
	const data = Object.values(result)

	const theData = data.map((a) => [
		{
			timestamp: String(format(a.timestamp, 'do MMM yyyy')),
			value: '£' + a.value.toFixed(2),
		},
	])

	const result2 = Object.entries(theData).reduce(
		(r, [k, [v]]) => ((r[k] = v), r),
		{}
	)
	const data2 = Object.values(result2)

	const columns = [
		{ name: 'timestamp', label: 'Date' },
		{ name: 'value', label: 'Amount' },
	]

	const options = {
		search: false,
		filter: false,
		print: false,
		download: false,
		viewColumns: false,
		selectableRows: 'none',
		rowsPerPage: 4,
	}

	return <MUIDataTable data={data2} columns={columns} options={options} />
}

export default TableTwo
