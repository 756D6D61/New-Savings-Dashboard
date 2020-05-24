import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHome,
	faWallet,
	faBorderAll,
	faFileInvoice,
	faCog,
} from '@fortawesome/free-solid-svg-icons'

const NavTW = () => {
	return (
		<>
			<ol>
				<li>
					<Link to="/">
						<FontAwesomeIcon icon={faHome} size="lg" />
					</Link>
				</li>
				<li>
					<Link to="/Budget">
						<FontAwesomeIcon icon={faWallet} size="lg" />
					</Link>
				</li>
				<li>
					<Link to="/Categories">
						<FontAwesomeIcon icon={faBorderAll} size="lg" />
					</Link>
				</li>
				<li>
					<Link to="/AddAccount">
						<FontAwesomeIcon icon={faFileInvoice} size="lg" />
					</Link>
				</li>
				<li>
					<FontAwesomeIcon icon={faCog} size="lg" />
				</li>
			</ol>
		</>
	)
}

export default NavTW
