import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
	children: PropTypes.node
}

const Divider = ({ children }) => {
	return <div class="bg-white shadow w-full pl-0 text-4xl">{children}</div>
}

Divider.propTypes = propTypes

export default Divider
