import React from 'react'
import NavTest from '../components/Home/NavTest'
import PropTypes from 'prop-types'
import Divider from '../components/Home/Divider'

const propTypes = {
	children: PropTypes.node
}

const Page = ({ route, children }) => {
	return (
		<div className="flex content-between flex-wrap  h-5">
			<NavTest route={route} />
			<div className="w-full pl-20 -ml-1 z-20 ">
				<Divider>Savings Dashboard</Divider>
			</div>

			<div className="w-full h-10  pl-20 pr-2">
				<br />
				{children}
			</div>
		</div>
	)
}

Page.propTypes = propTypes

export default Page
