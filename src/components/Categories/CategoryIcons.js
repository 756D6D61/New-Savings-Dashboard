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
				<button class="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
					<FontAwesomeIcon icon={faBirthdayCake} />
					<br />
					Birthday
					<hr />
					£1,002
				</button>
			</div>

			<div class="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-2 lg:px-2 xl:my-2 xl:px-2">
				<button class="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
					<FontAwesomeIcon icon={faHeart} />
					<br />
					Wedding
					<hr />
					£21,342
				</button>
			</div>

			<div class="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-2 lg:px-2 xl:my-2 xl:px-2">
				<button class="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
					<FontAwesomeIcon icon={faSuitcaseRolling} />
					<br />
					Holiday
					<hr />
					£3,010
				</button>
			</div>

			<div class="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-2 lg:px-2 xl:my-2 xl:px-2">
				<button class="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
					<FontAwesomeIcon icon={faHome} />
					<br />
					Home
					<hr />
					£12,185
				</button>
			</div>
		</div>
	)
}

export default CategoryIcons
