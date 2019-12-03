import React from 'react'
import Nav from '../../components/Nav'
import Page from '../../layout/Page'

const Home = ({ route }) => {
	return (
		<Page>
			<div class="flex flex-wrap">
				<div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 bg-gray-500">
					Budgets
				</div>
				<div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 bg-gray-500">
					Categories
				</div>
			</div>
			<div class="flex flex-wrap">
				<div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 bg-gray-500">
					[Graph - savings for each month]
				</div>
				<div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 bg-gray-500">
					[Table - monthly savings]
				</div>
			</div>
		</Page>
	)
}

export default Home
