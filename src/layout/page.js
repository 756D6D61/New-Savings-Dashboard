import React from 'react'
import NavTest from '../components/NavTest'
import PropTypes from 'prop-types'
import Divider from '../components/Divider'

const propTypes = {
	children: PropTypes.node
}

const Page = ({ route, children }) => {
	return (
		<div class="flex content-between flex-wrap  h-5">
			<NavTest route={route} />
			<div class="w-full pl-20 -ml-1 z-20 ">
				<Divider>Savings Dashboard</Divider>
			</div>

			<div class="w-full h-10  pl-20 pr-2">
				<br />
				{children}
			</div>
		</div>
	)
}

Page.propTypes = propTypes

export default Page
