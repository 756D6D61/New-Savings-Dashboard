import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

const BudgetOverview = () => {
	return (
		<>
			<p class="text-2xl text-blue-base">Budgets</p>
			<hr />
			<div class="flex  h-10">
				<div class="w-1/2">
					<p class="text-xl">£20,029</p>
				</div>
				<div class="w-1/2">
					<p class="text-base">
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
