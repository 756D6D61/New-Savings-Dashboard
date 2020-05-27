import React, { Suspense } from 'react'
import Page from '../../layout/newPage'
import AddButton from '../../components/AddButton'
import Icons from '../../components/Budgets/BudgetIcons'
import Card from '@material-ui/core/Card'
import SubDivider from '../../components/Home/SubDivider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import useDarkMode from 'use-dark-mode'

const Budget = () => {
	const { value } = useDarkMode(false)
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
					<div
						class={
							value
								? 'w-full shadow-md bg-red-400 rounded p-3 text-center'
								: 'w-full shadow-md bg-gray-800 rounded p-3 text-center'
						}
					>
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
