import React, { useEffect } from 'react'
import MUIDataTable from 'mui-datatables'
import { useSelector, useDispatch } from 'react-redux'
import { budgetData } from '../../store/actions/data.actions'

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

	return <MUIDataTable data={data} columns={columns} options={options} />
}

export default TableTwo
