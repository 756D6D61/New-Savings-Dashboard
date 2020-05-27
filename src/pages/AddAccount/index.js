import React, { Suspense } from 'react'
import Page from '../../layout/newPage'
import AccForm from '../../components/AddAccount/Form'
import Card from '@material-ui/core/Card'
import SubDivider from '../../components/Home/SubDivider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons'
import useDarkMode from 'use-dark-mode'

const AddAccount = () => {
	const { value } = useDarkMode(false)
	return (
		<Page>
			<Suspense fallback={<p>Loading</p>}>
				<SubDivider>
					<FontAwesomeIcon icon={faFileInvoice} size="sm" /> Add
					Account
				</SubDivider>
				<br />
				<div
					class={
						value
							? 'w-full shadow-md bg-red-400 p-3 rounded'
							: 'w-full shadow-md bg-gray-800 p-3 rounded'
					}
				>
					<Card>
						<AccForm />
					</Card>
				</div>
			</Suspense>
		</Page>
	)
}

export default AddAccount
