import React, { Suspense } from 'react'
import Page from '../../layout/Page'
import AddButton from '../../components/AddButton'
import Icons from '../../components/BudgetIcons'
import Card from '@material-ui/core/Card'
import SubDivider from '../../components/SubDivider'

const Budget = () => {
	return (
		<Page>
			<Suspense fallback={<p>Loading</p>}>
				<SubDivider>Budgets</SubDivider>
				<br />
				<div class="flex flex-wrap">
					<div class="w-full  mb-4 text-center">
						<AddButton>Budget</AddButton>
					</div>
				</div>
				<div class="flex flex-wrap">
					<div class="w-full mb-4 text-center">
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
