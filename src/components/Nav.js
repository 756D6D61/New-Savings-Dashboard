import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
class Nav extends Component {
	render() {
		return (
			<Router>
				<Link to="/">Home</Link>
				<Link to="/Budget">Budget</Link>
				<Link to="/Categories">Categories</Link>
				<Link to="/AddAccount">Add Account</Link>
			</Router>
		)
	}
}

export default Nav
