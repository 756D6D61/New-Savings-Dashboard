import React, { Suspense } from 'react'
import Page from '../../layout/newPage'
import AddButton from '../../components/AddButton'
import Icons from '../../components/Budgets/BudgetIcons'
import Card from '@material-ui/core/Card'
import SubDivider from '../../components/Home/SubDivider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'

const Budget = () => {
	return (
		<Page>
			<Suspense fallback={<p>Loading</p>}>
				<SubDivider>
					<FontAwesomeIcon icon={faWallet} size="sm" /> Budgets
				</SubDivider>
				<br />
				<div class="flex flex-wrap">
					<div class="w-full mb-4 text-center">
						<AddButton>Budget</AddButton>
					</div>
				</div>
				<div class="flex flex-wrap">
					<div class="w-full bg-red-400 rounded p-5 text-center">
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
