import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHeadphonesAlt,
	faPhone,
	faHeartbeat,
	faShoppingBag,
	faShieldAlt,
	faGamepad,
	faWifi,
	faHome,
	faReceipt
} from '@fortawesome/free-solid-svg-icons'
const BudgetIcons = () => {
	return (
		<div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2">
			<div class="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
				<button class="text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white h-20 w-20 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faHeadphonesAlt} />
					Music
				</button>
			</div>

			<div class="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
				<button class="text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white h-20 w-20 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faPhone} />
					Phone
				</button>
			</div>

			<div class="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
				<button class="text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white h-20 w-20 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faHeartbeat} /> Health
				</button>
			</div>

			<div class="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
				<button class="text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white h-20 w-20 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faShoppingBag} /> Shopping
				</button>
			</div>

			<div class="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
				<button class="text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white h-20 w-20 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faShieldAlt} />
					Security
				</button>
			</div>

			<div class="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
				<button class="text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white h-20 w-20 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faGamepad} />
					Gaming
				</button>
			</div>

			<div class="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
				<button class="text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white h-20 w-20 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faWifi} />
					Internet
				</button>
			</div>

			<div class="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
				<button class="text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white h-20 w-20 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faHome} />
					Home
				</button>
			</div>

			<div class="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
				<button class="text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white h-20 w-20 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faReceipt} /> Misc.
				</button>
			</div>
		</div>
	)
}

export default BudgetIcons
