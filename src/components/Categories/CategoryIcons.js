import React, { useEffect }from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBirthdayCake,
	faHeart,
	faSuitcaseRolling,
	faHome
} from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { categoryData } from '../../store/actions/data.actions'

const CategoryIcons = () => {
	const dispatch = useDispatch()

	const categories = useSelector(state => state.data.category)

	useEffect(() => {
		dispatch(categoryData())
	}, [dispatch])

	console.log(categories)

	const icons = [
		{ id:0, name: faBirthdayCake, label:'Birthday'},
		{ id:1, name: faHeart, label:'Wedding'},
		{ id:2, name: faSuitcaseRolling, label:'Holiday'},
		{ id:3, name: faHome, label: 'Home'}
	]

	return (
		<div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-3 md:-mx-3 lg:-mx-2 xl:-mx-2">
			<div className="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-2 lg:px-2 xl:my-2 xl:px-2">
				<button className="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
					<FontAwesomeIcon icon={faBirthdayCake} />
					<br />
					Birthday
					<hr />
					£1,002
				</button>
			</div>

			<div className="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-2 lg:px-2 xl:my-2 xl:px-2">
				<button className="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
					<FontAwesomeIcon icon={faHeart} />
					<br />
					Wedding
					<hr />
					£21,342
				</button>
			</div>

			<div className="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-2 lg:px-2 xl:my-2 xl:px-2">
				<button className="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
					<FontAwesomeIcon icon={faSuitcaseRolling} />
					<br />
					Holiday
					<hr />
					£3,010
				</button>
			</div>

			<div className="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-2 lg:px-2 xl:my-2 xl:px-2">
				<button className="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
					<FontAwesomeIcon icon={faHome} />
					<br />
					Home
					<hr />
					£12,185
				</button>
			</div>


			{
				Object.keys(categories).map(function(key) {
					return categories[key]})
					.flat()
					.map(a => {
						return (
							<div className="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
								{icons.map(icon => (
									<button className="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
										<FontAwesomeIcon
											id={icon.id}
											icon={icon.name}
										/>
										<br />
										{icon.label}
										<hr />
										£{Math.round(a.value).toLocaleString()}
									</button>
									))}
							</div>
						)})}
		</div>
	)
}

export default CategoryIcons
