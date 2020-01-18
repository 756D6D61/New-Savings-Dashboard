import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBirthdayCake,
	faHeart,
	faSuitcaseRolling,
	faHome
} from '@fortawesome/free-solid-svg-icons'

const CategoriesOverview = () => {
	return (
		<>
			<p class="text-2xl text-blue-base">Categories</p>
			<hr />
			<div class="flex">
				<div class="w-1/4">
					<FontAwesomeIcon icon={faBirthdayCake} />
					<br />
					£1,203
				</div>
				<div class="w-1/4">
					<FontAwesomeIcon icon={faHeart} />
					<br />
					£6,201
				</div>
				<div class="w-1/4">
					<FontAwesomeIcon icon={faSuitcaseRolling} />
					<br />
					£4,201
				</div>
				<div class="w-1/4">
					<FontAwesomeIcon icon={faHome} />
					<br />
					£450
				</div>
			</div>
		</>
	)
}

export default CategoriesOverview
