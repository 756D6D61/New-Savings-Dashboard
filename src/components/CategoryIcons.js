import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBirthdayCake,
	faHeart,
	faSuitcaseRolling,
	faHome
} from '@fortawesome/free-solid-svg-icons'
const CategoryIcons = () => {
	return (
		<div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-3 md:-mx-3 lg:-mx-2 xl:-mx-2">
			<div class="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-2 lg:px-2 xl:my-2 xl:px-2">
				<button class="text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-12 px-10 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faBirthdayCake} />
					Birthday
				</button>
			</div>

			<div class="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-2 lg:px-2 xl:my-2 xl:px-2">
				<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-12 px-10  border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faHeart} />
					Wedding
				</button>
			</div>

			<div class="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-2 lg:px-2 xl:my-2 xl:px-2">
				<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-12 px-10  border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faSuitcaseRolling} />
					Holiday
				</button>
			</div>

			<div class="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-2 lg:px-2 xl:my-2 xl:px-2">
				<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-12 px-10  border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faHome} />
					Home
				</button>
			</div>
		</div>
	)
}

export default CategoryIcons
