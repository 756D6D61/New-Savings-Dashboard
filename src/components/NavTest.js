import React, { useState } from 'react'
import clsx from 'clsx'
import {
	makeStyles,
	//useTheme,
	Drawer,
	AppBar,
	Toolbar,
	List,
	Typography,
	Divider,
	IconButton
	//ListItem,
	//ListItemIcon,
	//ListItemText,
	//Container
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
//import InboxIcon from '@material-ui/icons/MoveToInbox'
//import MailIcon from '@material-ui/icons/Mail'
import { Link } from 'react-router-dom'
//import routes from '../config/routes'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Switch, FormControlLabel } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHome,
	faWallet,
	faBorderAll,
	faFileInvoice
} from '@fortawesome/free-solid-svg-icons'

const themeObject = {
	palette: {
		primary: { main: '#053f5b' },
		secondary: { main: '#5e3c6f' },
		type: 'light'
	},
	themeName: 'Dark Theme'
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

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		color: 'gray',
		backgroundColor: 'white'
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: 36
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap'
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1
		}
	},

	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1)
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	}
}))

export default function MiniDrawer() {
	const classes = useStyles()
	//const theme = useTheme()
	//{classes, theme}  = this.props
	const [open, setOpen] = React.useState(false)

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	const [theme, toggleDarkMode] = useDarkMode()
	const themeConfig = createMuiTheme(theme)
	return (
		<MuiThemeProvider theme={themeConfig}>
			<CssBaseline />

			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, {
							[classes.hide]: open
						})}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open
					})
				}}
				open={open}
			>
				<div className={classes.toolbar}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? (
							<ChevronRightIcon />
						) : (
							<ChevronLeftIcon />
						)}
					</IconButton>
				</div>
				<Divider />
				<List>
					<Link to="/">
						<ListItem key="Home">
							<ListItemIcon>
								<FontAwesomeIcon icon={faHome} size="lg" />
							</ListItemIcon>
							<ListItemText primary="Home" />
						</ListItem>
					</Link>

					<Link to="/Budget">
						<ListItem key="Budget">
							<ListItemIcon>
								<FontAwesomeIcon icon={faWallet} size="lg" />
							</ListItemIcon>
							<ListItemText primary="Budget" />
						</ListItem>
					</Link>
					<Link to="/Categories">
						<ListItem key="Categories">
							<ListItemIcon>
								<FontAwesomeIcon icon={faBorderAll} size="lg" />
							</ListItemIcon>
							<ListItemText primary="Categories" />
						</ListItem>
					</Link>
					<Link to="/AddAccount">
						<ListItem key="AddAccount">
							<ListItemIcon>
								<FontAwesomeIcon
									icon={faFileInvoice}
									size="lg"
								/>
							</ListItemIcon>
							<ListItemText primary="Add Account" />
						</ListItem>
					</Link>
				</List>
				<Divider />
				<FormControlLabel
					control={<Switch onClick={toggleDarkMode} />}
				/>
			</Drawer>
		</MuiThemeProvider>
	)
}
