import React from 'react'
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
				<div className="flex flex-wrap">
					<div className="w-full">
						<p>[this is where the child props should go]</p>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Page
