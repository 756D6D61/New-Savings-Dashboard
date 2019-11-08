import Home from '../pages/Home'
import Budget from '../pages/Budget'
import Categories from '../pages/Categories'
import AddAccount from '../pages/AddAccount'
import Root from '../components/Root'

const routes = [
	{
		component: Root,
		routes: [
			{
				path: '/',
				exact: true,
				component: Home
			},
			{
				path: '/budget',
				exact: true,
				component: Budget
			},
			{
				path: '/categories',
				exact: true,
				component: Categories
			},
			{
				path: '/addAccount',
				exact: true,
				component: AddAccount
			}
		]
	}
]

export default routes
