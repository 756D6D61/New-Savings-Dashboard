import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHeadphonesAlt,
	faPhone,
	faHeartbeat,
	faShoppingBag,
	faShieldAlt,
	faGamepad,
	faWifi,
	faHome,
	faReceipt
} from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { budgetData } from '../../store/actions/data.actions'

const BudgetIcons = () => {
	const dispatch = useDispatch()

	const budgets = useSelector(state => state.data.budget)

	useEffect(() => {
		dispatch(budgetData())
	}, [dispatch])

	const icons = [
		{ id:0, name: faHeadphonesAlt, label:'Music'},
		{ id:1, name: faPhone, label:'Phone'},
		{ id:2, name: faHeartbeat, label:'Health'},
		{ id:3, name: faShoppingBag, label: 'Shopping'},
		{ id:4, name: faShieldAlt, label: 'Security'},
		{ id:5, name: faGamepad, label:'Gaming'},
		{ id:6, name: faWifi, label: 'Internet'},
		{ id:7, name: faHome, label: 'Home'},
		{ id:8, name: faReceipt, label: 'Misc.'},
	]

	const values = Object.keys(budgets).map(function(key) {
						return budgets[key]})
						.flat()
						.map(a => Math.round(a.value).toLocaleString())

	const names = Object.keys(budgets)

	return (
		<div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2">
		{
			values.map((a, indx) => {
					return (
						<div className="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
						<button className="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
										<FontAwesomeIcon
										icon={icons[indx].name}
										/>
							<br />
							{names[indx]}
							<hr />
							£{a}
						</button>
						</div>
					)
				})
			}
		</div>
	)
}

export default BudgetIcons
