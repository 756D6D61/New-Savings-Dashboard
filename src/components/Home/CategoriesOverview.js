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
import useDarkMode from 'use-dark-mode'

const CategoriesOverview = () => {
	const dispatch = useDispatch()

	const categories = useSelector((state) => state.data.category)

	useEffect(() => {
		dispatch(categoryData())
	}, [dispatch])

	const data = Object.keys(categories)
		.map(function (key) {
			return categories[key]
		})
		.flat()
		.map((a) => Math.round(a.value).toLocaleString())

	const { value } = useDarkMode(false)
	return (
		<>
			<p class="text-2xl text-center text-red-600">Categories</p>
			<hr class={value ? 'border-red-300' : 'border-gray-600'} />
			<div class="flex text-center text-red-600">
				<div class="w-1/4">
					<FontAwesomeIcon icon={faBirthdayCake} />
					<br />£{data[0]}
				</div>
				<div class="w-1/4">
					<FontAwesomeIcon icon={faHeart} />
					<br />£{data[1]}
				</div>
				<div class="w-1/4">
					<FontAwesomeIcon icon={faSuitcaseRolling} />
					<br />£{data[2]}
				</div>
				<div class="w-1/4">
					<FontAwesomeIcon icon={faHome} />
					<br />£{data[3]}
				</div>
			</div>
		</>
	)
}

export default CategoriesOverview
