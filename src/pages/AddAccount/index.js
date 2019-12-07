import React from 'react'
import Page from '../../layout/Page'
import AccForm from '../../components/Form'
const AddAccount = () => {
	return (
		<Page>
			<div class="flex flex-wrap">
				<div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 bg-gray-500">
					<AccForm />
				</div>
			</div>
		</Page>
	)
}

export default AddAccount
