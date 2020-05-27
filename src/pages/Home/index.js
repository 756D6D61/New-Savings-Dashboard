import React, { Suspense } from 'react'
import Page from '../../layout/newPage'
import AltGraph from '../../components/Home/Graph'
import Table from '../../components/Home/TableTwo'
import Card from '@material-ui/core/Card'
import SubDivider from '../../components/Home/SubDivider'
import CategoriesOverview from '../../components/Home/CategoriesOverview'
import MiscOverview from '../../components/Home/MiscOverview'
import BudgetOverview from '../../components/Home/BudgetsOverview'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import useDarkMode from 'use-dark-mode'

const Home = () => {
	const { value } = useDarkMode(false)
	return (
		<Page>
			<Suspense fallback={<p>Loading</p>}>
				<SubDivider>
					<FontAwesomeIcon icon={faHome} size="sm" /> Home
				</SubDivider>
				<br />
				<div class="flex gap-3 grid grid-cols-2">
					<div
						class={
							value
								? 'shadow-md bg-red-400 rounded p-2'
								: 'shadow-md bg-gray-800 rounded p-2'
						}
					>
						<BudgetOverview />
					</div>
					<div
						class={
							value
								? 'shadow-md bg-red-400 rounded p-2'
								: 'shadow-md bg-gray-800 rounded p-2'
						}
					>
						<CategoriesOverview />
					</div>
				</div>
				<br />
				<div class="flex gap-2 grid grid-cols-2">
					<div
						class={
							value
								? 'shadow-md bg-red-400 rounded p-2'
								: 'shadow-md bg-gray-800 rounded p-2'
						}
					>
						<div
							class={
								value
									? 'bg-white rounded h-full shadow'
									: 'bg-none rounded'
							}
						>
							<AltGraph />
						</div>
					</div>
					<div
						class={
							value
								? 'shadow-md bg-red-400 rounded p-2'
								: 'shadow-md bg-gray-800 rounded p-2'
						}
					>
						<Table />
					</div>
				</div>
				<div class="w-full text-right">
					<MiscOverview />
				</div>
			</Suspense>
		</Page>
	)
}

export default Home
