import React from 'react'
import Page from '../../layout/newPage'
import AltGraph from '../../components/Home/Graph'
import Table from '../../components/Home/TableTwo'
//import Card from '@material-ui/core/Card'
//import SubDivider from '../../components/Home/SubDivider'
import CategoriesOverview from '../../components/Home/CategoriesOverview'
import MiscOverview from '../../components/Home/MiscOverview'
import BudgetOverview from '../../components/Home/BudgetsOverview'

const Home = () => {
	return (
		<Page>
			<div class="flex">
				<div class="w-1/2 bg-orange-400 text-orange-800 p-5">
					<h2 class="text-orange-700 text-lg mb-5">
						<BudgetOverview />
					</h2>
				</div>
				<div class="w-1/2 bg-orange-400 text-orange-800 p-5">
					<h2 class="text-orange-700 text-lg mb-5">
						<CategoriesOverview />
					</h2>
				</div>
			</div>
			<div class="flex">
				<div class="w-1/2 bg-orange-400 text-orange-800 p-5">
					<h2 class="text-orange-700 text-lg mb-5">
						<AltGraph />
					</h2>
				</div>
				<div class="w-1/2 bg-orange-400 text-orange-800 p-5">
					<h2 class="text-orange-700 text-lg mb-5">
						<Table />
					</h2>
				</div>
			</div>
			<div class="flex">
				<div class="w-full bg-orange-400 text-orange-800 p-5">
					<h2 class="text-orange-700 text-lg mb-5">
						<MiscOverview />
					</h2>
				</div>
			</div>
		</Page>
	)
}

export default Home
