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

	const state = useSelector(state => state.data)
	const budgets = useSelector(state => state.data.budget)
	const categories = useSelector(state => state.data.category)

	useEffect(() => {
		dispatch(budgetData())
		dispatch(categoryData())
	}, [dispatch])

	console.log(budgets)
	console.log(categories)
	return (
		<Page>
			<Suspense fallback={<p>Loading</p>}>
				<SubDivider>Home</SubDivider>
				<br />
				<div className="flex -mx-2 text-center">
					<div className="w-1/3 px-2  mb-4">
						<Card>
							<BudgetOverview />
						</Card>
					</div>
					<div className="w-1/3 px-2  mb-4">
						<Card>
							<CategoriesOverview />
						</Card>
					</div>
					<div className="w-1/3 px-2  mb-4 ">
						<Card>
							<MiscOverview />
						</Card>
					</div>
				</div>
				<div className="flex flex-wrap -mx-2  mb-4">
					<div className="w-1/2 px-2">
						<Card>
							<AltGraph />
						</Card>
					</div>
					<div className="w-1/2 px-2  mb-4">
						<Table />
					</div>
				</div>
			</Suspense>
		</Page>
	)
}

export default Home
