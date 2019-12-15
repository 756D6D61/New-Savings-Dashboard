import React from 'react'
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from 'victory'

const data = [
	{ date: '2019-12-10', volume: 16197 },
	{ date: '2019-12-9', volume: 32010 },
	{ date: '2019-12-8', volume: 26518 },
	{ date: '2019-12-7', volume: 18606 },
	{ date: '2019-12-6', volume: 16795 },
	{ date: '2019-12-5', volume: 28607 },
	{ date: '2019-12-4', volume: 23621 }
]

const AltGraph = () => {
	return (
		<VictoryChart theme={VictoryTheme.material} padding={75}>
			<VictoryAxis
				fixLabelOverlap
				style={{ tickLabels: { padding: 16, fontSize: 8 } }}
			/>
			<VictoryAxis dependentAxis />
			<VictoryLine data={data} x="date" y="volume" />
		</VictoryChart>
	)
}

export default AltGraph
