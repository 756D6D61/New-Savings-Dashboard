import React, { useState, useEffect } from 'react'

const MiscOverview = () => {
	const [seconds, setSeconds] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((seconds) => seconds + 1)
		}, 6000)
		return () => clearInterval(interval)
	}, [])
	return (
		<>
			<p class="text-right  text-red-500">
				Last updated on {seconds} seconds
			</p>
		</>
	)
}

export default MiscOverview
