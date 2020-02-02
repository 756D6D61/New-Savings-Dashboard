import * as type from '../types'

const URL_CATEGORY =
	'https://cors-anywhere.herokuapp.com/https://nrw60p8wlh.execute-api.eu-central-1.amazonaws.com/latest/savings?split-by=cateogry'
const URL_BUDGET =
	'https://cors-anywhere.herokuapp.com/https://nrw60p8wlh.execute-api.eu-central-1.amazonaws.com/latest/savings?split-by=budget'

export const loading = payload => {
	return {
		type: type.LOADING,
		payload
	}
}

export const getBudget = payload => {
	return {
		type: type.BUDGET_DATA,
		payload
	}
}

export const budgetData = () => {
	return dispatch => {
		dispatch(loading(true))
		fetch(URL_BUDGET, {
			headers : {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(response => response.json())
			.then(response => dispatch(getBudget(response.data)))
			.catch(err => console.log(err))
		dispatch(loading(false))
	}
}

export const getCategory = payload => {
	return {
		type: type.CATEGORY_DATA,
		payload
	}
}

export const categoryData = () => {
	return dispatch => {
		dispatch(loading(true))
		fetch(URL_CATEGORY)
			.then(response => response.json())
			.then(response => dispatch(getCategory(response.data)))
			.catch(err => console.log(err))
		dispatch(loading(false))
	}
}
