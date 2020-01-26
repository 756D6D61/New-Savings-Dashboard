import React, { Component } from 'react'
import MUIDataTable from 'mui-datatables'
import { connect } from 'react-redux'
import { categoryData } from '../../store/actions/data.actions'

const mapStateToProps = state => ({
	...state
})
const mapDispatchToProps = dispatch => ({
	categoryData: () => dispatch(categoryData)
})

const columns = [
	{ name: 'time', label: 'Time' }, 
	{ name: 'data', label:'Data' }
]

class TableTwo extends Component {
	componentWillMount() {
		this.props.categoryData()
	}
	render() {
		const categories = this.props.data.categoryData(data => data)
		const data = categories.map(a => ({ 
			time: a.timestamp, 
			data: a.value
		}))
		return (
			<MUIDataTable 
				data = {data}
				columns = {columns}
			/>

		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TableTwo)
