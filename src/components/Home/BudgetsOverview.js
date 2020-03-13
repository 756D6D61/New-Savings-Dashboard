import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
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

	const test = useRef();
	useEffect(() => {
		test.current = sum;
	})

	const prevTest = test.current

	const change = ((sum-prevTest)/sum)*100

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
						{
							prevTest < sum ?
								<FontAwesomeIcon
									icon={faCaretUp}
									size="lg"
									color="green"
								/>
								:
								<FontAwesomeIcon
									icon={faCaretDown}
									size="lg"
									color="red"
								/>
						}
						{Math.round(change)}%
						change in budget
					</p>
				</div>
			</div>
		</>
	)
}

export default BudgetOverview
