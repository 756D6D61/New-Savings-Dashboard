import React from 'react'
import PropTypes from 'prop-types'
import useDarkMode from 'use-dark-mode'

const propTypes = {
	children: PropTypes.node,
}

const SubDivider = ({ children }) => {
	const { value } = useDarkMode(false)
	return (
		<div class=" w-full -mt-5 z-0 font-light -ml-1 text-2xl">
			<div class="pt-5 pb-2 text-red-500">{children}</div>
			<hr class={value ? 'border-red-200' : 'border-gray-600'} />
		</div>
	)
}

SubDivider.propTypes = propTypes

export default SubDivider
