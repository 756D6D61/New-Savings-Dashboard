import Home from '../pages/Home'
import Budget from '../pages/Budget'
import Categories from '../pages/Categories'
import AddAccount from '../pages/AddAccount'

const routes = [
	{
		routes: [
			{
				path: '/',
				exact: true,
				component: Home
			},
			{
				path: '/budget',
				component: Budget
			},
			{
				path: '/categories',
				component: Categories
			},
			{
				path: '/add-account',
				component: AddAccount
			}
		]
	}
]

export default routes
