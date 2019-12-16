import React, { Suspense } from 'react'
import Page from '../../layout/Page'
import AddButton from '../../components/AddButton'
import Icons from '../../components/BudgetIcons'

const Budget = () => {
	return (
		<Page>
			<Suspense fallback={<p>Loading</p>}>
				<div class="flex flex-wrap">
					<div class="w-full  mb-4 text-center bg-gray-500">
						<AddButton>Budget</AddButton>
					</div>
				</div>
				<div class="flex flex-wrap">
					<div class="w-full mb-4 text-center bg-gray-500">
						<Icons />
					</div>
				</div>
			</Suspense>
		</Page>
	)
}

export default Budget
