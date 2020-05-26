import React, { Suspense } from 'react'
import Page from '../../layout/newPage'
import AltGraph from '../../components/Home/Graph'
import Table from '../../components/Home/TableTwo'
import Card from '@material-ui/core/Card'
import SubDivider from '../../components/Home/SubDivider'
import CategoriesOverview from '../../components/Home/CategoriesOverview'
import MiscOverview from '../../components/Home/MiscOverview'
import BudgetOverview from '../../components/Home/BudgetsOverview'

const Home = () => {
	return (
		<Page>
			<Suspense fallback={<p>Loading</p>}>
				<SubDivider>Home</SubDivider>
				<br />
				<div class="flex gap-3 grid grid-cols-2">
					<div class=" bg-green-400 rounded p-2">
						<Card>
							<BudgetOverview />
						</Card>
					</div>
					<div class="bg-green-400 rounded p-2">
						<Card>
							<CategoriesOverview />
						</Card>
					</div>
				</div>
				<br />
				<div class="flex gap-2 grid grid-cols-2">
					<div class=" bg-green-400 rounded p-2">
						<h2 class="text-lg ">
							<AltGraph />
						</h2>
					</div>
					<div class="bg-green-400 rounded p-2">
						<h2 class="text-lg ">
							<Table />
						</h2>
					</div>
				</div>
				<div class="w-full text-right">
					<MiscOverview />
				</div>
			</Suspense>
		</Page>
	)
}

export default Home
