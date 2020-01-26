import React, { Suspense, useEffect } from 'react'
import Page from '../../layout/Page'
import AltGraph from '../../components/Home/Graph'
import Table from '../../components/Home/Table'
import Card from '@material-ui/core/Card'
import SubDivider from '../../components/Home/SubDivider'
import CategoriesOverview from '../../components/Home/CategoriesOverview'
import MiscOverview from '../../components/Home/MiscOverview'
import BudgetOverview from '../../components/Home/BudgetsOverview'
import { useSelector, useDispatch } from 'react-redux'
import { budgetData, categoryData } from '../../store/actions/data.actions'

const Home = () => {
	const dispatch = useDispatch()
	dispatch(budgetData, categoryData)

	const state1 = useSelector(state => state.budget)
	const state2 = useSelector(state => state.category)

	useEffect(() => state1)
	useEffect(() => state2)

	return (
		<Page>
			<Suspense fallback={<p>Loading</p>}>
				<SubDivider>Home</SubDivider>
				<br />
				<div class="flex -mx-2 text-center">
					<div class="w-1/3 px-2  mb-4">
						<Card>
							<BudgetOverview />
							{state1}
						</Card>
					</div>
					<div class="w-1/3 px-2  mb-4">
						<Card>
							<CategoriesOverview />
							{state2}
						</Card>
					</div>
					<div class="w-1/3 px-2  mb-4 ">
						<Card>
							<MiscOverview />
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
			</Suspense>
		</Page>
	)
}

export default Home
