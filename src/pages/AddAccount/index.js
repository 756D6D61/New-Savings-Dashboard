import React, { Suspense } from 'react'
import Page from '../../layout/newPage'
import AccForm from '../../components/AddAccount/Form'
import Card from '@material-ui/core/Card'
import SubDivider from '../../components/Home/SubDivider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons'

const AddAccount = () => {
	return (
		<Page>
			<Suspense fallback={<p>Loading</p>}>
				<SubDivider>
					<FontAwesomeIcon icon={faFileInvoice} size="sm" /> Add
					Account
				</SubDivider>
				<br />
				<div class="w-full shadow-md bg-red-400 p-3 rounded ">
					<Card>
						<AccForm />
					</Card>
				</div>
			</Suspense>
		</Page>
	)
}

export default AddAccount
