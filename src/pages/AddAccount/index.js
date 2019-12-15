import React from 'react'
import Page from '../../layout/Page'
import AccForm from '../../components/Form'
const AddAccount = () => {
	return (
		<Page>
			<div class="w-full h-2  pl-8">
				<div class="w-full border-r border-b border-l border-gray-400  lg:border-t  bg-white rounded-b lg:rounded-r  lg:rounded-b p-4 flex flex-col justify-between leading-normal">
					<div class="flex  items-center">
						<AccForm />
					</div>
				</div>
			</div>
		</Page>
	)
}

export default AddAccount
