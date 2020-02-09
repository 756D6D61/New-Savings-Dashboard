import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBirthdayCake,
	faHeart,
	faSuitcaseRolling,
	faHome
} from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { categoryData } from '../../store/actions/data.actions'

const CategoriesOverview = () => {
	const dispatch = useDispatch()

	const categories = useSelector(state => state.data.category)

	useEffect(() => {
		dispatch(categoryData())
	}, [dispatch])

	console.log(categories)
	return (
		<>
			<p className="text-2xl text-blue-base">Categories</p>
			<hr />
			<div className="flex">
				<div className="w-1/4">
					<FontAwesomeIcon icon={faBirthdayCake} />
					<br />
					£1,203
				</div>
				<div className="w-1/4">
					<FontAwesomeIcon icon={faHeart} />
					<br />
					£6,201
				</div>
				<div className="w-1/4">
					<FontAwesomeIcon icon={faSuitcaseRolling} />
					<br />
					£4,201
				</div>
				<div className="w-1/4">
					<FontAwesomeIcon icon={faHome} />
					<br />
					£450
				</div>
			</div>
		</>
	)
}

export default CategoriesOverview
