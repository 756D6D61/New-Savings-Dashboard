import React, { Suspense } from 'react'
import Page from '../../layout/Page'
import Table from '../../components/Table'
import AddButton from '../../components/AddButton'
import Icons from '../../components/CategoryIcons'
import Card from '@material-ui/core/Card'

const Categories = () => {
	return (
		<Page>
			<Suspense fallback={<p>Loading</p>}>
				<div class="flex flex-wrap">
					<div class="w-full text-center mb-4">
						<AddButton>Categories</AddButton>
					</div>
				</div>
				<div class="flex -mx-2">
					<div class="w-1/2 px-2 mb-4">
						<Card>
							<div class="text-center ">
								<Icons />
							</div>
						</Card>
					</div>
					<div class="w-1/2 px-2  mb-4">
						<div class="bg-gray-500 text-center h-12">
							<Table />
						</div>
					</div>
				</div>
			</Suspense>
		</Page>
	)
}

export default Categories
