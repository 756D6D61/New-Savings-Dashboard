import React, { Suspense } from 'react'
import Page from '../../layout/Page'
import Table from '../../components/Table'
import AddButton from '../../components/AddButton'
import Icons from '../../components/CategoryIcons'

const Categories = () => {
	return (
		<Page>
			<Suspense fallback={<p>Loading</p>}>
				<div class="flex flex-wrap">
					<div class="w-full text-center mb-4 bg-gray-500">
						<AddButton>Categories</AddButton>
					</div>
				</div>
				<div class="flex -mx-2">
					<div class="w-1/2 px-2 mb-4">
						<div class="bg-gray-400 text-center h-12">
							<Icons />
						</div>
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
