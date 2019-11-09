import React, { useState } from 'react'
import Nav from '../../components/Nav'
import NavTest from '../../components/NavTest'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Switch, FormControlLabel } from '@material-ui/core'
const themeObject = {
	palette: {
		primary: { main: '#053f5b' },
		secondary: { main: '#5e3c6f' },
		type: 'light'
	},
	themeName: 'Blue Lagoon 2020'
}

const useDarkMode = () => {
	const [theme, setTheme] = useState(themeObject)
	const {
		palette: { type }
	} = theme

	const toggleDarkMode = () => {
		const updatedTheme = {
			...theme,
			palette: {
				...theme.palette,
				type: type === 'light' ? 'dark' : 'light'
			}
		}
		setTheme(updatedTheme)
	}
	return [theme, toggleDarkMode]
}
const Home = ({ route }) => {
	const [theme, toggleDarkMode] = useDarkMode()
	const themeConfig = createMuiTheme(theme)
	return (
		<MuiThemeProvider theme={themeConfig}>
			<div>
				<NavTest route={route} />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<Nav route={route} />
				<div className="testing">
					<FormControlLabel
						control={<Switch onClick={toggleDarkMode} />}
					/>
				</div>
			</div>
		</MuiThemeProvider>
	)
}

export default Home
