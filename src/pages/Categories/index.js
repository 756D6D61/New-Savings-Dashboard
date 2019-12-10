import React from 'react'
import Page from '../../layout/Page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Table from '../../components/Table'
import AddButton from '../../components/AddButton'

const Categories = () => {
	return (
		<Page>
			<div class="flex flex-wrap">
				<div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 bg-gray-500">
					Categories button
					<FontAwesomeIcon icon={faCoffee} />
					<AddButton>Categories</AddButton>
				</div>
			</div>
			<div class="flex flex-wrap">
				<div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 bg-gray-500">
					Categories
				</div>
				<div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 bg-gray-500">
					<Table />
				</div>
			</div>
		</Page>
	)
}

export default Categories
