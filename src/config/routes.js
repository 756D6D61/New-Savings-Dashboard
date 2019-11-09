import Home from '../pages/Home'
import Budget from '../pages/Budget'
import Categories from '../pages/Categories'
import AddAccount from '../pages/AddAccount'

const routes = [
	{
		path: '/',
		exact: true,
		component: Home,
		icon: Home,
		name: Home
	},
	{
		path: '/budget',
		exact: true,
		component: Budget,
		icon: Home,
		name: Budget
	},
	{
		path: '/categories',
		exact: true,
		component: Categories,
		icon: Home,
		name: Categories
	},
	{
		path: '/addAccount',
		exact: true,
		component: AddAccount,
		icon: Home,
		name: AddAccount
	}
]

export default routes
