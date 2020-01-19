import * as types from '../types'
//import axios from 'axios'

const URL_CATEGORY =
	'https://cors-anywhere.herokuapp.com/https://nrw60p8wlh.execute-api.eu-central-1.amazonaws.com/latest/savings?split-by=cateogry'
const URL_BUDGET =
	'https://cors-anywhere.herokuapp.com/https://nrw60p8wlh.execute-api.eu-central-1.amazonaws.com/latest/savings?split-by=budget'

export const budgetData = () => dispatch => {
	dispatch({
		type: types.BUDGET_DATA,
		paylod: fetch(URL_BUDGET)
			.then(res => {
				return console.log(res.json())
			})
			.then(res => {
				return res.data
			})
			.catch(err => {
				console.log(err)
			})
	})
}

export const categoryData = () => dispatch => {
	dispatch({
		type: types.CATEGORY_DATA,
		paylod: fetch(URL_CATEGORY)
			.then(res => {
				return console.log(res.json())
			})
			.then(res => {
				return res.data
			})
			.catch(err => {
				console.log(err)
			})
	})
}

/*export const categoryData = cateogry => {
	return function(dispatch) {
		const url = `${URL}+cateogry`
		fetch(url, { method: 'GET' })
			.then(res => {
				return res.json()
			})
			.then(res => {
				dispatch(category_data(res.data))
				console.log(dispatch(category_data(res.data)))
			})
	}
}

export const budgetData = budget => {
	return function(dispatch) {
		const url = `${URL}+budget`
		console.log(url)
		fetch(url, { method: 'GET' })
		.then(res => {
			return res.json()
		})
			.then(function(res) {
				dispatch(budget_data(res.data))
				console.log(dispatch(budget_data(res.data)))
			})

	}
}*/
