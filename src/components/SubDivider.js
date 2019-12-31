import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
	children: PropTypes.node
}

const SubDivider = ({ children }) => {
	return (
		<div class="bg-white w-full -mt-5 z-0 pl-0 text-xl">
			{children}
			<hr />
		</div>
	)
}

SubDivider.propTypes = propTypes

export default SubDivider
