import Home from '../pages/Home'
import Budget from '../pages/Budget'
import Categories from '../pages/Categories'
import AddAccount from '../pages/AddAccount'
import HomeIcon from '@material-ui/icons/Home'

const routes = [
	{
		path: '/',
		exact: true,
		component: Home,
		icon: HomeIcon,
		name: Home
	},
	{
		path: '/budget',
		exact: true,
		component: Budget,
		icon: HomeIcon,
		name: Budget
	},
	{
		path: '/categories',
		exact: true,
		component: Categories,
		icon: HomeIcon,
		name: Categories
	},
	{
		path: '/addAccount',
		exact: true,
		component: AddAccount,
		icon: HomeIcon,
		name: AddAccount
	}
]

export default routes
