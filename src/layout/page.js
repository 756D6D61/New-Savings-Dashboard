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
				<div class="flex flex-wrap">
					<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
						content
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Page
