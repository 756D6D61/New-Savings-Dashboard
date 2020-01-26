import * as types from '../types'
import axios from 'axios'

const URL_CATEGORY =
	'https://cors-anywhere.herokuapp.com/https://nrw60p8wlh.execute-api.eu-central-1.amazonaws.com/latest/savings?split-by=cateogry'
const URL_BUDGET =
	'https://cors-anywhere.herokuapp.com/https://nrw60p8wlh.execute-api.eu-central-1.amazonaws.com/latest/savings?split-by=budget'

export const getBudget = payload => {
	return {
		type: types.BUDGET_DATA,
		payload
	}
}

export const budgetData = () => {
	return function(dispatch) {
		const url = `${URL_BUDGET}`
		axios.get(url).then(function(response) {
			dispatch(getBudget(response.data))
		})
	}
}

export const getCategory = payload => {
	return {
		types: types.CATEGORY_DATA,
		payload
	}
}

export const categoryData = () => {
	return function(dispatch) {
		const url = `${URL_CATEGORY}`
		axios.get(url).then(function(response) {
			dispatch(getCategory(response.data))
		})
	}
}
