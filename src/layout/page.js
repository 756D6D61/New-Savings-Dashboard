import React from 'react'
import NavTest from '../components/NavTest'
import Container from '@material-ui/core/Container'
import PropTypes from 'prop-types'

const propTypes = {
	classes: PropTypes.object,
	children: PropTypes.node
}

const defaultProps = {}

const Page = ({ route, children }) => {
	return (
		<div>
			<NavTest route={route} />
			<br />
			<br />
			<br />
			<Container fixed>
				<div className="flex flex-wrap">
					<div className="w-full">
						<p>{children}</p>
					</div>
				</div>
			</Container>
		</div>
	)
}
Page.propTypes = propTypes
Page.defaultProps = defaultProps
export default Page
