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
			<div class="w-full h-2  pl-20 pr-2">
				<Divider>
					Savings Dashboard
					<br /> Home
				</Divider>
				{children}
			</div>
		</div>
	)
}

Page.propTypes = propTypes

export default Page
