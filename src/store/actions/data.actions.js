import axios from 'axios'
import { BUDGET_DATA, CATEGORY_DATA } from '../types'
const URL =
	'https://bejicmji8c.execute-api.eu-central-1.amazonaws.com/latest/savings?split-by='


export const budget_data = payload => {
	return {
		type: BUDGET_DATA,
		payload
	}
}

export const category_data = payload => {
	return {
		type: CATEGORY_DATA,
		payload
	}
}

export const categoryData = cateogry => {
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
}
