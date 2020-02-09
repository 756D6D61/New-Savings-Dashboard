import React, { useEffect } from 'react'
import {
	VictoryLine,
	VictoryChart,
	VictoryAxis,
	VictoryClipContainer
} from 'victory'
import { useSelector, useDispatch } from 'react-redux'
import { categoryData } from '../../store/actions/data.actions'

const data = [
	{ date: '2019-12-10', volume: 16197 },
	{ date: '2019-12-9', volume: 32010 },
	{ date: '2019-12-8', volume: 26518 },
	{ date: '2019-12-7', volume: 18606 },
	{ date: '2019-12-6', volume: 17795 },
	{ date: '2019-12-5', volume: 28607 },
	{ date: '2019-12-4', volume: 23621 }
]

const AltGraph = () => {
	const dispatch = useDispatch()

	const categories = useSelector(state => state.data.category)

	useEffect(() => {
		dispatch(categoryData())
	}, [dispatch])

	console.log(categories)
	return (
		<VictoryChart padding={75}>
			<VictoryAxis fixLabelOverlap />
			<VictoryAxis dependentAxis />
			<VictoryLine
				groupComponent={
					<VictoryClipContainer clipPadding={{ top: 50 }} />
				}
				data={data}
				x="date"
				y="volume"
				interpolation="natural"
				style={{
					data: {
						stroke: '#c43a31',
						strokeWidth: 3,
						strokeLinecap: 'round'
					}
				}}
				animate={{
					duration: 2000,
					onLoad: { duration: 1000 }
				}}
			/>
		</VictoryChart>
	)
}

export default AltGraph
