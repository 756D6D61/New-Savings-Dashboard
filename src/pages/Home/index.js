import React from 'react'
import Nav from '../../components/Nav'
import Page from '../../layout/Page'

const Home = ({ route }) => {
	return (
		<Page>
			<div class="flex flex-wrap">
				<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500">
					<Nav route={route} />
					content
				</div>
			</div>
		</Page>
	)
}

export default Home
