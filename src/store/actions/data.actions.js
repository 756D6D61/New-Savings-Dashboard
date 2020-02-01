import * as types from '../types'

const URL_CATEGORY =
	'https://cors-anywhere.herokuapp.com/nrw60p8wlh.execute-api.eu-central-1.amazonaws.com/latest/savings?split-by=cateogry'
const URL_BUDGET =
	'https://cors-anywhere.herokuapp.com/nrw60p8wlh.execute-api.eu-central-1.amazonaws.com/latest/savings?split-by=budget'

export const loading = payload => {
	return {
		type: types.LOADING,
		payload
	}
}

export const getBudget = payload => {
	return {
		type: types.BUDGET_DATA,
		payload
	}
}

export const budgetData = () => {
	return dispatch => {
		dispatch(loading(true))
		const url = `${URL_BUDGET}`
		fetch(url)
			.then(response => dispatch(getBudget(response.data)))
			.catch(err => console.log(err))
		dispatch(loading(false))
	}
}

export const getCategory = payload => {
	return {
		types: types.CATEGORY_DATA,
		payload
	}
}

export const categoryData = () => {
	return dispatch => {
		dispatch(loading(true))
		const url = `${URL_CATEGORY}`
		fetch(url)
			.then(response => dispatch(getCategory(response.data)))
			.catch(err => console.log(err))
		dispatch(loading(false))
	}
}
