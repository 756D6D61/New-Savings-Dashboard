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

	console.log(budgets)

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
	return (
		<>
			{
				Object.keys(budgets).map(function(key) {
					return budgets[key]})
					.flat()
					.map(a => {
						return (
							<div className="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
								{icons.map(icon => (
									<button className="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
										<FontAwesomeIcon
											id={icon.id}
											icon={icon.name}
										/>
										<br />
										{icon.label}
										<hr />
										£{Math.round(a.value).toLocaleString()}
									</button>
									))}
							</div>
						)
					})
				}

		<div className="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
		{
			Object.keys(budgets).map(function(key) {
				return budgets[key]})
				.flat()
				.map(a => {
					return (
						<button className="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
							<hr />
							£{Math.round(a.value).toLocaleString()}
						</button>
					)
				})
			}
		</div>

		<div className="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
		{
			icons.map(icon => (
				<button className="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
							<FontAwesomeIcon
								id={icon.id}
								icon={icon.name}
							/>
							<br />
							{icon.label}
						</button>
			))
			}
		</div>
		</>
	)
}

export default BudgetIcons

/*
<div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2">
			<div className="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
				<button className="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
					<FontAwesomeIcon icon={faHeadphonesAlt} />
					<br />
					Music
					<hr />
					£1,769
				</button>
			</div>

			<div className="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
				<button className="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
					<FontAwesomeIcon icon={faPhone} />
					<br />
					Phone
					<hr />
					£102
				</button>
			</div>

			<div className="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
				<button className="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
					<FontAwesomeIcon icon={faHeartbeat} />
					<br />
					Health
					<hr />
					£2,102
				</button>
			</div>

			<div className="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
				<button className="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
					<FontAwesomeIcon icon={faShoppingBag} />
					<br />
					Shopping
					<hr />
					£1,918
				</button>
			</div>

			<div className="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
				<button className="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
					<FontAwesomeIcon icon={faShieldAlt} />
					<br />
					Security
					<hr />
					£820
				</button>
			</div>

			<div className="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
				<button className="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
					<FontAwesomeIcon icon={faGamepad} />
					<br />
					Gaming
					<hr />
					£306
				</button>
			</div>

			<div className="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
				<button className="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
					<FontAwesomeIcon icon={faWifi} />
					<br />
					Internet
					<hr />
					£206
				</button>
			</div>

			<div className="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
				<button className="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
					<FontAwesomeIcon icon={faHome} />
					<br />
					Home
					<hr />
					£1,204
				</button>
			</div>

			<div className="my-1 px-1 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
				<button className="text-center bg-transparent hover:bg-blue-base text-blue-base font-semibold hover:text-white h-20 w-20 border border-blue-base hover:border-transparent rounded">
					<FontAwesomeIcon icon={faReceipt} />
					<br />
					Misc.
					<hr />
					£156
				</button>
			</div>
*/
