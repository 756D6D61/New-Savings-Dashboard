import React, { Suspense, useEffect } from 'react'
import Page from '../../layout/Page'
import AddButton from '../../components/AddButton'
import Icons from '../../components/Budgets/BudgetIcons'
import Card from '@material-ui/core/Card'
import SubDivider from '../../components/Home/SubDivider'
import { useSelector, useDispatch } from 'react-redux'
import { budgetData } from '../../store/actions/data.actions'

const Budget = () => {
	const dispatch = useDispatch()
	const budgets = useSelector(state => state.data.budget)

	useEffect(() => {
		dispatch(budgetData())
	}, [dispatch])

	console.log(budgets)

	return (
		<Page>
			<Suspense fallback={<p>Loading</p>}>
				<SubDivider>Budgets</SubDivider>
				<br />
				<div className="flex flex-wrap">
					<div className="w-full  mb-4 text-center">
						<AddButton>Budget</AddButton>
					</div>
				</div>
				<div className="flex flex-wrap">
					<div className="w-full mb-4 text-center">
						<Card>
							<Icons />
						</Card>
					</div>
				</div>
			</Suspense>
		</Page>
	)
}

export default Budget
