import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { budgetData } from '../../store/actions/data.actions'

const BudgetOverview = () => {
	const dispatch = useDispatch()

	const budgets = useSelector(state => state.data.budget)

	useEffect(() => {
		dispatch(budgetData())
	}, [dispatch])

	const sum = Object.keys(budgets).map(function(key) {
					return budgets[key]})
					.flat()
					.map(a => a.value)
					.reduce((a,b) => a+b, 0)
	console.log(sum)

	return (
		<>
			<p className="text-2xl text-blue-base">Budgets</p>
			<hr />
			<div className="flex  h-10">
				<div className="w-1/2">
					<p className="text-xl">£{Math.round(sum).toLocaleString()}</p>
				</div>
				<div className="w-1/2">
					<p className="text-base">
						<FontAwesomeIcon
							icon={faCaretUp}
							size="lg"
							color="green"
						/>{' '}
						2% from last 7 days
					</p>
				</div>
			</div>
		</>
	)
}

export default BudgetOverview
