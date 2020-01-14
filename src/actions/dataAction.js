import axios from 'axios'
import { BUDGET_DATA, CATEGORY_DATA } from './constants'
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
		const url = `${URL}+${cateogry}`
		axios.get(url)
			.then(function(res) {
				dispatch(category_data(res.data))
				console.log('dfgdfg')
			})
			.catch(function(err) {
				console.log(err)
			})
	}
}

export const budgetData = budget => {
	return function(dispatch) {
		const url = `${URL}+${budget}`
		console.log(url)
		axios.get(url)
			.then(function(res) {
				dispatch(budget_data(res.data))
				console.log(budget_data(res.data))
			})
			.catch(function(err) {
				console.log(err)
			})
	}
}
