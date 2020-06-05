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
	faReceipt,
} from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { budgetData } from '../../store/actions/data.actions'

const BudgetIcons = (props) => {
	const dispatch = useDispatch()

	const budgets = useSelector((state) => state.data.budget)

	useEffect(() => {
		dispatch(budgetData())
	}, [dispatch])

	const icons = [
		{ id: 0, name: faHeadphonesAlt, label: 'Music' },
		{ id: 1, name: faPhone, label: 'Phone' },
		{ id: 2, name: faHeartbeat, label: 'Health' },
		{ id: 3, name: faShoppingBag, label: 'Shopping' },
		{ id: 4, name: faShieldAlt, label: 'Security' },
		{ id: 5, name: faGamepad, label: 'Gaming' },
		{ id: 6, name: faWifi, label: 'Internet' },
		{ id: 7, name: faHome, label: 'Home' },
		{ id: 8, name: faReceipt, label: 'Misc.' },
	]

	const values = Array.from(
		Object.keys(budgets)
			.map(function (key) {
				return budgets[key]
			})
			.flat()
			.map((a) => Math.round(a.value).toLocaleString())
	)
	const names = Object.keys(budgets)
	console.log(props.values)
	return (
		<div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2">
			{props.values &&
				values.map((a, indx) => {
					return (
						<div className={props.className}>
							<button className={props.buttonClassName}>
								<FontAwesomeIcon icon={icons[indx].name} />
								<br />
								{names[indx].charAt(0).toUpperCase() +
									names[indx].slice(1)}
								<hr class="border-red-300" />£{a}
							</button>
						</div>
					)
				})}
		</div>
	)
}

export default BudgetIcons
/*
<div className={props.className}>
	<button className={props.buttonClassName}>
		<FontAwesomeIcon icon={icons[indx].name} />
		<br />
		{names[indx].charAt(0).toUpperCase() +
			names[indx].slice(1)}
		<hr class="border-red-300" />£{a}
	</button>
</div>
 */
