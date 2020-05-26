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
				<div class="flex -mx-2 text-center">
					<div class="w-1/2 px-2  mb-4">
						<Card>
							<BudgetOverview />
						</Card>
					</div>
					<div class="w-1/2 px-2  mb-4">
						<Card>
							<CategoriesOverview />
						</Card>
					</div>
				</div>
				<div class="flex flex-wrap -mx-2  mb-4">
					<div class="w-1/2 px-2">
						<Card>
							<AltGraph />
						</Card>
					</div>
					<div class="w-1/2 px-2  mb-4">
						<Table />
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
