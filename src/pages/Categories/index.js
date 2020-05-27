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
				<div class="w-full pt-3 text-center mb-2">
					<AddButton>Categories</AddButton>
				</div>
				<div class="flex items-center flex-col -mx-2">
					<div class="w-1/2 h-full px-2 mb-4 text-center shadow-md bg-red-400 rounded p-3">
						<Card>
							<Icons />
						</Card>
					</div>
					<div class="w-1/2   mb-4">
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
