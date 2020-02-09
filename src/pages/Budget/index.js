import React, { Suspense } from 'react'
import Page from '../../layout/Page'
import AddButton from '../../components/AddButton'
import Icons from '../../components/Budgets/BudgetIcons'
import Card from '@material-ui/core/Card'
import SubDivider from '../../components/Home/SubDivider'

const Budget = () => {

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
