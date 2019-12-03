import React from 'react'
import Page from '../../layout/Page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Categories = () => {
	return (
		<Page>
			<div class="flex flex-wrap">
				<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500">
					Categories
					<FontAwesomeIcon icon={faCoffee} />
				</div>
			</div>
		</Page>
	)
}

export default Categories
