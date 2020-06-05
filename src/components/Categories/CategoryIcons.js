import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBirthdayCake,
	faHeart,
	faSuitcaseRolling,
	faHome,
} from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { categoryData } from '../../store/actions/data.actions'
//import Icons from '../Budgets/BudgetIcons'
const CategoryIcons = () => {
	const dispatch = useDispatch()

	const categories = useSelector((state) => state.data.category)

	useEffect(() => {
		dispatch(categoryData())
	}, [dispatch])

	const icons = [
		{ id: 0, name: faBirthdayCake, label: 'Birthday' },
		{ id: 1, name: faHeart, label: 'Wedding' },
		{ id: 2, name: faSuitcaseRolling, label: 'Holiday' },
		{ id: 3, name: faHome, label: 'Home' },
	]

	const values = Object.keys(categories)
		.map(function (key) {
			return categories[key]
		})
		.flat()
		.map((a) => Math.round(a.value).toLocaleString())

	const names = Object.keys(categories)

	return (
		<div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-3 md:-mx-3 lg:-mx-2 xl:-mx-2">
			{values.map((a, indx) => {
				return (
					<div className="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-2 lg:px-2 xl:my-2 xl:px-2">
						<button className="text-center bg-transparent hover:bg-red-400 text-red-400 font-semibold hover:text-white h-20 w-20 border border-red-400 hover:border-transparent rounded outline-none focus:outline-none">
							<FontAwesomeIcon icon={icons[indx].name} />
							<br />
							{names[indx].charAt(0).toUpperCase() +
								names[indx].slice(1)}
							<hr class="border-red-300" />£{a}
						</button>
					</div>
				)
			})}
		</div>
	)
}

export default CategoryIcons
//<Icons values={values} />
