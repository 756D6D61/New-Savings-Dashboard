import React from 'react'
import Page from '../../layout/Page'
import AddButton from '../../components/AddButton'
import Icons from '../../components/BudgetIcons'

const Budget = () => {
	return (
		<Page>
			<div class="flex flex-wrap">
				<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500">
					<AddButton>Budget</AddButton>
				</div>
			</div>
			<div class="flex flex-wrap">
				<div class="w-full mb-4 bg-gray-500">
					<Icons />
				</div>
			</div>
		</Page>
	)
}

export default Budget
