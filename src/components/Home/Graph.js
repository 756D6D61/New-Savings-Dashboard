import React, { useEffect } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import { useSelector, useDispatch } from 'react-redux'
import { categoryData } from '../../store/actions/data.actions'
import moment from 'moment'

const Graph = () => {
	const dispatch = useDispatch()

	const categories = useSelector((state) => state.data.category)

	useEffect(() => {
		dispatch(categoryData())
	}, [dispatch])

	const result = Object.keys(categories).reduce(function (r, k) {
		return r.concat(categories[k])
	}, [])

	return (
		<LineChart
			width={500}
			height={300}
			data={result}
			margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
		>
			<Line type="monotone" dataKey="value" stroke="#fc8181" />
			<CartesianGrid stroke="#fed8d7" strokeDasharray="5 5" />
			<XAxis
				interval={0}
				dataKey="timestamp"
				tickFormatter={(tick) => moment(tick).format('Do MMM YYYY')}
				stroke="#fed8d7"
			/>
			<YAxis stroke="#fed8d7" />
			<Tooltip />
		</LineChart>
	)
}

export default Graph
