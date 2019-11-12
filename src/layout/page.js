import React, { useState } from 'react'
import NavTest from '../components/NavTest'
import Container from '@material-ui/core/Container'

const Page = ({ route }) => {
	return (
		<div>
			<NavTest route={route} />
			<br />
			<br />
			<br />
			<Container fixed>
				stuff
				<div className="testing"></div>
			</Container>
		</div>
	)
}

export default Page
