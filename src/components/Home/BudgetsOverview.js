import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { budgetData } from '../../store/actions/data.actions'
import useDarkMode from 'use-dark-mode'

const BudgetOverview = () => {
	const dispatch = useDispatch()

	const budgets = useSelector((state) => state.data.budget)

	useEffect(() => {
		dispatch(budgetData())
	}, [dispatch])

	const sum = Object.keys(budgets)
		.map(function (key) {
			return budgets[key]
		})
		.flat()
		.map((a) => a.value)
		.reduce((a, b) => a + b, 0)

	const budget = useRef()
	useEffect(() => {
		budget.current = sum
	})

	const prevBudget = budget.current

	const change = ((sum - prevBudget) / sum) * 100

	const { value } = useDarkMode(false)
	return (
		<>
			<p class="text-2xl text-center text-red-600">Budgets</p>
			<hr class={value ? 'border-red-300' : 'border-gray-600'} />
			<div class="flex h-10">
				<div class="w-1/2">
					<p class="text-xl text-red-600">
						£{Math.round(sum).toLocaleString()}
					</p>
				</div>
				<div class="w-1/2">
					<p class="text-base text-red-600">
						{prevBudget < sum ? (
							<FontAwesomeIcon
								icon={faCaretUp}
								size="lg"
								color="green"
							/>
						) : (
							<FontAwesomeIcon
								icon={faCaretDown}
								size="lg"
								color="red"
							/>
						)}{' '}
						{Math.round(change)}% change in budget
					</p>
				</div>
			</div>
		</>
	)
}

export default BudgetOverview
