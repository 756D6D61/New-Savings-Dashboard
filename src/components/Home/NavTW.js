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
import useDarkMode from 'use-dark-mode'

const NavTW = () => {
	const { value, toggle } = useDarkMode(false)
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
				<li onClick={toggle}>
					{value ? (
						<FontAwesomeIcon icon={faCog} size="lg" />
					) : (
						<FontAwesomeIcon icon={faCog} size="lg" color="red" />
					)}
				</li>
			</ol>
		</>
	)
}

export default NavTW
