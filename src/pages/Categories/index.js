import React, { Suspense, useEffect } from 'react'
import Page from '../../layout/Page'
import Table from '../../components/Home/Table'
import AddButton from '../../components/AddButton'
import Icons from '../../components/Categories/CategoryIcons'
import Card from '@material-ui/core/Card'
import SubDivider from '../../components/Home/SubDivider'
import { useSelector, useDispatch } from 'react-redux'
import { categoryData } from '../../store/actions/data.actions'

const Categories = () => {
	const dispatch = useDispatch()

	const categories = useSelector(state => state.data.category)

	useEffect(() => {
		dispatch(categoryData())
	}, [dispatch])

	console.log(categories)
	return (
		<Page>
			<Suspense fallback={<p>Loading</p>}>
				<SubDivider>Categories</SubDivider>
				<br />
				<div className="flex flex-wrap">
					<div className="w-full text-center mb-4">
						<AddButton>Categories</AddButton>
					</div>
				</div>
				<div className="flex -mx-2">
					<div className="w-1/2 px-2 mb-4">
						<Card>
							<div className="text-center ">
								<Icons />
							</div>
						</Card>
					</div>
					<div className="w-1/2 px-2  mb-4">
						<div className="bg-gray-500 text-center h-12">
							<Table />
						</div>
					</div>
				</div>
			</Suspense>
		</Page>
	)
}

export default Categories
