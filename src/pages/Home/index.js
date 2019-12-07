import React from 'react'
import Nav from '../../components/Nav'
import Page from '../../layout/Page'
import Graph from '../../components/Graph'
import Table from '../../components/Table'

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
					<Graph />
				</div>
				<div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 bg-gray-500">
					<Table />
				</div>
			</div>
		</Page>
	)
}

export default Home
