import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const propTypes = {
	children: PropTypes.node
}

const Divider = ({ children }) => {
	return (
		<div>
			<div>
				<Grid container alignItems="center">
					<Typography gutterBottom variant="h4">
						{children}
					</Typography>
				</Grid>
			</div>
			<hr />
			<br />
		</div>
	)
}

Divider.propTypes = propTypes

export default Divider
