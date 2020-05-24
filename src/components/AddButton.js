import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const propTypes = {
	children: PropTypes.node,
}

const AddBttn = ({ children }) => {
	return (
		<button class="bg-blue-base hover:bg-blue-base text-white font-bold py-2 px-4 rounded inline-flex items-center">
			<FontAwesomeIcon icon={faPlus} color="white" /> Add {children}
		</button>
	)
}

AddBttn.propTypes = propTypes

export default AddBttn
