import React, { useState } from 'react'
import NavTest from '../components/NavTest'
import Container from '@material-ui/core/Container'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Switch, FormControlLabel } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'

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

const Page = ({ route }) => {
	const [theme, toggleDarkMode] = useDarkMode()
	const themeConfig = createMuiTheme(theme)
	return (
		<MuiThemeProvider theme={themeConfig}>
			<CssBaseline />
			<NavTest route={route} />
			<br />
			<br />
			<br />
			<Container fixed>
				stuff
				<div className="testing">
					<FormControlLabel
						control={<Switch onClick={toggleDarkMode} />}
					/>
				</div>
			</Container>
		</MuiThemeProvider>
	)
}

export default Page
