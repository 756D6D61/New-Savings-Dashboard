import React, { Suspense } from 'react'
import Page from '../../layout/newPage'
import Table from '../../components/Home/TableTwo'
import AddButton from '../../components/AddButton'
import Icons from '../../components/Categories/CategoryIcons'
import Card from '@material-ui/core/Card'
import SubDivider from '../../components/Home/SubDivider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBorderAll } from '@fortawesome/free-solid-svg-icons'

const Categories = () => {
	return (
		<Page>
			<Suspense fallback={<p>Loading</p>}>
				<SubDivider>
					<FontAwesomeIcon icon={faBorderAll} size="sm" /> Categories
				</SubDivider>
				<br />
				<div class="flex flex-wrap">
					<div class="w-full text-center mb-4">
						<AddButton>Categories</AddButton>
					</div>
				</div>
				<div class="flex -mx-2">
					<div class="w-1/2 px-2 mb-4">
						<Card>
							<div class="text-center shadow-md bg-red-400 rounded p-3">
								<Icons />
							</div>
						</Card>
					</div>
					<div class="w-1/2 px-2  mb-4">
						<div class="text-center shadow-md bg-red-400 rounded p-3">
							<Table />
						</div>
					</div>
				</div>
			</Suspense>
		</Page>
	)
}

export default Categories
