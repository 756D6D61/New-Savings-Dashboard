import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBirthdayCake,
	faPhone,
	faHeart,
	faHome
} from '@fortawesome/free-solid-svg-icons'
const CategoryIcons = () => {
	return (
		<div>
			<div>
				<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faBirthdayCake} />
					Birthday
				</button>
				<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faPhone} />
					Wedding
				</button>
			</div>
			<div>
				<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faHeart} />
					Holiday
				</button>
				<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faHome} />
					Home
				</button>
			</div>
		</div>
	)
}

export default CategoryIcons
