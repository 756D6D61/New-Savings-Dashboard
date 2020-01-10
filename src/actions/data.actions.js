import axios from 'axios'
import { GET_DATA } from './constants'
const URL =
	'https://bejicmji8c.execute-api.eu-central-1.amazonaws.com/latest/savings?split-by='

export const get_data = payload => {
	return {
		type: GET_DATA,
		payload
	}
}

export const categoryData = cateogry => {
	return function(dispatch) {
		const url = `${URL}+${cateogry}`
		axios
			.get(url)
			.then(function(res) {
				dispatch(get_data(res.data))
			})
			.catch(function(err) {
				console.log(err)
			})
	}
}

export const budgetData = budget => {
	return function(dispatch) {
		const url = `${URL}+${budget}`
		axios
			.get(url)
			.then(function(res) {
				dispatch(get_data(res.data))
			})
			.catch(function(err) {
				console.log(err)
			})
	}
}
