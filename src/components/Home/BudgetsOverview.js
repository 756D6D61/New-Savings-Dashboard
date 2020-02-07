import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

const BudgetOverview = () => {
	//console.log(this.props.budgets)
	return (
		<>
			<p className="text-2xl text-blue-base">Budgets</p>
			<hr />
			<div className="flex  h-10">
				<div className="w-1/2">
					<p className="text-xl">£20,029</p>
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
