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
		<div>
			<div>
				<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faHeadphonesAlt} />
					Music
				</button>
				<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faPhone} />
					Phone
				</button>
				<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faHeartbeat} /> Health
				</button>
			</div>
			<div>
				<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faShoppingBag} /> Shopping
				</button>
				<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faShieldAlt} />
					Security
				</button>
				<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faGamepad} />
					Gaming
				</button>
			</div>
			<div>
				<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faWifi} />
					Internet
				</button>
				<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faHome} />
					Home
				</button>
				<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
					<FontAwesomeIcon icon={faReceipt} /> Misc.
				</button>
			</div>
		</div>
	)
}

export default BudgetIcons
