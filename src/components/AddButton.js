import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
	children: PropTypes.node
}

const AddBttn = ({ children }) => {
	return (
		<button class="bg-yellow-500 hover:bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
			<svg
				class="fill-current w-4 h-4 mr-2"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
			>
				<path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
			</svg>
			<span>Add {children}</span>
		</button>
	)
}

AddBttn.propTypes = propTypes

export default AddBttn
