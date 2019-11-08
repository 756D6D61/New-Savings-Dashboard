// add the nav bar here with <Link>example</Link>
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
	render() {
		return (
			<nav>
				<Link to="/">Home</Link>
				<Link to="/Budget">Budget</Link>
				<Link to="/Categories">Categories</Link>
				<Link to="/AddAccount">Add Account</Link>
			</nav>
		)
	}
}

export default Nav
