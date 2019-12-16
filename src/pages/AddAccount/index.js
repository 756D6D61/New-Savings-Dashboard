import React, { Suspense } from 'react'
import Page from '../../layout/Page'
import AccForm from '../../components/Form'
const AddAccount = () => {
	return (
		<Page>
			<Suspense fallback={<p>Loading</p>}>
				<div class="w-full ">
					<div class="border-r border-b border-l border-gray-400  lg:border-t  bg-white rounded-b lg:rounded-r  lg:rounded-b p-4 flex flex-col justify-between leading-normal">
						<div class="flex items-center w-full ">
							<AccForm />
						</div>
					</div>
				</div>
			</Suspense>
		</Page>
	)
}

export default AddAccount
