import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { budgetData } from '../../store/actions/data.actions'

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

	return (
		<>
			<p class="text-2xl text-center text-red-600">Budgets</p>
			<hr class="border-red-300" />
			<div class="flex h-10">
				<div class="w-1/2">
					<p class="text-xl">£{Math.round(sum).toLocaleString()}</p>
				</div>
				<div class="w-1/2">
					<p class="text-base">
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
